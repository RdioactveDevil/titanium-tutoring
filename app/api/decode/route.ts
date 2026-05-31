import { NextRequest, NextResponse } from "next/server";

// Increase body size limit to 10 MB for file uploads
export const config = { api: { bodyParser: { sizeLimit: "10mb" } } };

type ContentBlock =
  | { type: "text"; text: string }
  | { type: "image"; source: { type: "base64"; media_type: string; data: string } }
  | { type: "document"; source: { type: "base64"; media_type: string; data: string } };

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, year, state, subj, comments, grades, fileData, fileType } = body;

    const hasFile = fileData && fileType;
    const hasComments = comments && comments.length >= 20;

    if (!name) {
      return NextResponse.json({ error: "Missing child name" }, { status: 400 });
    }
    if (!hasFile && !hasComments) {
      return NextResponse.json(
        { error: "Please either paste the teacher comments or upload the report card" },
        { status: 400 }
      );
    }

    const childContext = `Child: ${name}, ${year || "Unknown year"}, ${state || "Australia"}, Focus: ${subj || "General"}`;
    const gradesLine = grades ? `Grades: "${grades}"` : "";

    const prompt = hasFile
      ? `You are an expert Australian school curriculum analyst. The attached file is a school report card. Read every part of it carefully — teacher comments, grades, achievement levels, and any written feedback.

${childContext}
${gradesLine}
${hasComments ? `Additional context from parent: "${comments}"` : ""}

Analyse the report and respond ONLY with a valid JSON object — no markdown, no backticks, nothing outside the JSON.

Return this exact JSON:
{"overallScore":<0-100>,"summary":"<2 sentence plain English summary>","gaps":[{"topic":"<topic>","explanation":"<plain English gap + why it matters>","severity":"high|medium|low","fixTime":"<e.g. 2-3 weeks>"}],"strengths":[{"area":"<area>","score":<60-95>},{"area":"<area>","score":<60-95>},{"area":"<area>","score":<60-95>}],"weekPlan":[{"day":"Monday","task":"<task>"},{"day":"Wednesday","task":"<task>"},{"day":"Friday","task":"<task>"},{"day":"Weekend","task":"<fun activity>"}],"resources":[{"type":"youtube","title":"<title>","url":"https://www.youtube.com/results?search_query=<query>","description":"<desc>"},{"type":"khan","title":"<title>","url":"https://www.khanacademy.org/search?page_search_query=<query>","description":"<desc>"},{"type":"worksheet","title":"<title>","url":"https://www.mathworksheets4kids.com","description":"<desc>"}]}`
      : `You are an expert Australian school curriculum analyst. Analyse this child's school report and respond ONLY with a valid JSON object — no markdown, no backticks, nothing outside the JSON.

${childContext}
Teacher comments: "${comments}"
${gradesLine}

Return this exact JSON:
{"overallScore":<0-100>,"summary":"<2 sentence plain English summary>","gaps":[{"topic":"<topic>","explanation":"<plain English gap + why it matters>","severity":"high|medium|low","fixTime":"<e.g. 2-3 weeks>"}],"strengths":[{"area":"<area>","score":<60-95>},{"area":"<area>","score":<60-95>},{"area":"<area>","score":<60-95>}],"weekPlan":[{"day":"Monday","task":"<task>"},{"day":"Wednesday","task":"<task>"},{"day":"Friday","task":"<task>"},{"day":"Weekend","task":"<fun activity>"}],"resources":[{"type":"youtube","title":"<title>","url":"https://www.youtube.com/results?search_query=<query>","description":"<desc>"},{"type":"khan","title":"<title>","url":"https://www.khanacademy.org/search?page_search_query=<query>","description":"<desc>"},{"type":"worksheet","title":"<title>","url":"https://www.mathworksheets4kids.com","description":"<desc>"}]}`;

    // Build the content array — file first (if present), then the text prompt
    const content: ContentBlock[] = [];

    if (hasFile) {
      const isPdf = fileType === "application/pdf";
      if (isPdf) {
        content.push({
          type: "document",
          source: { type: "base64", media_type: fileType, data: fileData },
        });
      } else {
        // image/*
        content.push({
          type: "image",
          source: { type: "base64", media_type: fileType, data: fileData },
        });
      }
    }

    content.push({ type: "text", text: prompt });

    const apiRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY!,
        "anthropic-version": "2023-06-01",
        // Required for PDF document support
        "anthropic-beta": "pdfs-2024-09-25",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 1400,
        messages: [{ role: "user", content }],
      }),
    });

    const data = await apiRes.json();

    const txt = (data.content || [])
      .map((c: { text?: string }) => c.text || "")
      .join("")
      .replace(/```json|```/g, "")
      .trim();

    const result = JSON.parse(txt);
    return NextResponse.json(result);
  } catch (err) {
    console.error("decode error:", err);
    return NextResponse.json(
      { error: "Analysis failed", detail: String(err) },
      { status: 500 }
    );
  }
}
