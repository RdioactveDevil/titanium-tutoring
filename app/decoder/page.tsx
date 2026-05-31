"use client";

import { useState, useRef } from "react";
import Link from "next/link";

/* ── types ── */
type Gap = { topic: string; explanation: string; severity: "high" | "medium" | "low"; fixTime: string };
type Strength = { area: string; score: number };
type DayPlan = { day: string; task: string };
type Resource = { type: string; title: string; url: string; description: string };
type Result = {
  overallScore: number;
  summary: string;
  gaps: Gap[];
  strengths: Strength[];
  weekPlan: DayPlan[];
  resources: Resource[];
};
type Lead = {
  name: string; email: string; phone: string; consent: boolean;
  childName: string; childYear: string; state: string; subject: string;
  overallScore: number; topGap: string; topGapSeverity: string;
  gapCount: number; submittedAt: string; submittedAtDisplay: string;
};

/* ── lead endpoint — set after Google Apps Script deploy ── */
const LEAD_ENDPOINT = "";

function fallback(name: string): Result {
  return {
    overallScore: 68,
    summary: `${name} shows genuine curiosity and enthusiasm across subjects. A few focused areas in maths and written expression will make a big difference this term.`,
    gaps: [
      { topic: "Fractions & Decimals", explanation: "Difficulty converting between fractions, decimals and percentages — a key building block for almost all Year 5–6 maths.", severity: "high", fixTime: "2–3 weeks" },
      { topic: "Written Explanation", explanation: "Struggles to structure reasoning clearly in writing — affects science reports and maths problem-solving.", severity: "medium", fixTime: "3–4 weeks" },
      { topic: "Reading Inference", explanation: "Needs practice drawing conclusions from text rather than only literal answers.", severity: "low", fixTime: "Ongoing" },
    ],
    strengths: [{ area: "Science concepts", score: 86 }, { area: "Oral participation", score: 82 }, { area: "Creative thinking", score: 77 }],
    weekPlan: [
      { day: "Monday", task: "Fractions worksheet — 10 mins. Draw pizza diagrams to visualise." },
      { day: "Wednesday", task: "Read a short article, write what happened, why, your opinion." },
      { day: "Friday", task: "Khan Academy fractions — one video + 5 questions." },
      { day: "Weekend", task: "Cook a recipe using cup measurements — real-life maths!" },
    ],
    resources: [
      { type: "youtube", title: "Fractions & Decimals — Year 5 Australia", url: "https://www.youtube.com/results?search_query=fractions+decimals+year+5+australia", description: "Visual explanations matched to the curriculum" },
      { type: "khan", title: "Khan Academy — Fractions", url: "https://www.khanacademy.org/math/arithmetic/fraction-arithmetic", description: "Free self-paced practice with feedback" },
      { type: "worksheet", title: "Free printable worksheets", url: "https://www.mathworksheets4kids.com/fractions.php", description: "Print-at-home practice, no login" },
    ],
  };
}

type Screen = "form" | "loading" | "results" | "admin";
type InputMode = "paste" | "upload";
type FormStep = 0 | 1 | 2 | 3; // 0=upload, 1=name, 2=year, 3=decode

type UploadedFile = {
  name: string;
  size: number;
  type: string;   // mime type
  data: string;   // base64 (no data-URL prefix)
  previewUrl?: string; // for images
};

const SEV_COLOR: Record<string, string> = {
  high:   "var(--danger)",
  medium: "var(--warning)",
  low:    "var(--success)",
};
const SEV_BG: Record<string, string> = {
  high:   "rgba(168,50,50,0.08)",
  medium: "rgba(181,117,26,0.10)",
  low:    "rgba(47,122,68,0.08)",
};
const SEV_LABEL: Record<string, string> = {
  high: "Fix First", medium: "Fix Next", low: "Minor",
};

export default function DecoderPage() {
  const [screen, setScreen] = useState<Screen>("form");
  const [result, setResult] = useState<Result | null>(null);
  const [input, setInput] = useState({ name: "", year: "", state: "", subj: "", comments: "", grades: "" });
  const [loadStep, setLoadStep] = useState(0);
  const [unlocked, setUnlocked] = useState(false);
  const [lead, setLead] = useState({ name: "", email: "", phone: "", consent: false });
  const [leads, setLeads] = useState<Lead[]>(() => {
    if (typeof window === "undefined") return [];
    try { return JSON.parse(localStorage.getItem("tt_leads") || "[]"); } catch { return []; }
  });
  const [formStep, setFormStep] = useState<FormStep>(0);
  const [inputMode, setInputMode] = useState<InputMode>("upload");
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [toast, setToast] = useState({ msg: "", ok: false, visible: false });
  const [unlockLoading, setUnlockLoading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function showToast(msg: string, ok = false) {
    setToast({ msg, ok, visible: true });
    setTimeout(() => setToast(t => ({ ...t, visible: false })), 3200);
  }

  function go(s: Screen) { setScreen(s); window.scrollTo(0, 0); }

  function readFile(file: File): Promise<UploadedFile> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result as string;
        // Strip the "data:<type>;base64," prefix
        const base64 = dataUrl.split(",")[1];
        resolve({
          name: file.name,
          size: file.size,
          type: file.type,
          data: base64,
          previewUrl: file.type.startsWith("image/") ? dataUrl : undefined,
        });
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async function handleFileDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) await processFile(file);
  }

  async function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) await processFile(file);
  }

  async function processFile(file: File) {
    const allowed = ["application/pdf", "image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"];
    if (!allowed.includes(file.type) && !file.type.startsWith("image/")) {
      showToast("Please upload a PDF or image file (JPG, PNG, HEIC, WebP)");
      return;
    }
    if (file.size > 9 * 1024 * 1024) {
      showToast("File is too large — please use a file under 9 MB");
      return;
    }
    try {
      const uf = await readFile(file);
      setUploadedFile(uf);
    } catch {
      showToast("Could not read the file — please try again");
    }
  }

  async function doDecod() {
    if (!input.name) { showToast("Please enter your child's name"); return; }
    if (!input.year) { showToast("Please select a year level"); return; }
    if (inputMode === "paste" && input.comments.length < 20) {
      showToast("Please paste the teacher's comments (at least a sentence)");
      return;
    }
    if (inputMode === "upload" && !uploadedFile) {
      showToast("Please upload the report card file");
      return;
    }
    setUnlocked(false);
    setLoadStep(0);
    go("loading");
    let step = 0;
    timerRef.current = setInterval(() => {
      step++;
      setLoadStep(step);
      if (step >= 4 && timerRef.current) clearInterval(timerRef.current);
    }, 900);
    try {
      const body: Record<string, string> = { ...input };
      if (inputMode === "upload" && uploadedFile) {
        body.fileData = uploadedFile.data;
        body.fileType = uploadedFile.type;
      }
      const r = await fetch("/api/decode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await r.json();
      setResult(data);
    } catch {
      setResult(fallback(input.name));
    }
    if (timerRef.current) clearInterval(timerRef.current);
    go("results");
  }

  async function captureLead() {
    if (!lead.name) { showToast("Please enter your name"); return; }
    if (!lead.email || !lead.email.includes("@")) { showToast("Please enter a valid email"); return; }
    if (!lead.phone || lead.phone.replace(/\D/g, "").length < 8) { showToast("Please enter a valid mobile number"); return; }
    if (!lead.consent) { showToast("Please tick the consent box so we can contact you"); return; }
    if (!result) return;
    const topGap = result.gaps?.[0];
    const newLead: Lead = {
      name: lead.name, email: lead.email, phone: lead.phone, consent: true,
      childName: input.name, childYear: input.year, state: input.state, subject: input.subj,
      overallScore: result.overallScore,
      topGap: topGap?.topic || "", topGapSeverity: topGap?.severity || "",
      gapCount: result.gaps?.length || 0,
      submittedAt: new Date().toISOString(),
      submittedAtDisplay: new Date().toLocaleString("en-AU"),
    };
    setUnlockLoading(true);
    const updated = [newLead, ...leads];
    setLeads(updated);
    localStorage.setItem("tt_leads", JSON.stringify(updated));
    if (LEAD_ENDPOINT) {
      try { await fetch(LEAD_ENDPOINT, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(newLead) }); }
      catch { /* non-fatal */ }
    } else {
      await new Promise(r => setTimeout(r, 700));
    }
    setUnlockLoading(false);
    setUnlocked(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function exportCSV() {
    if (!leads.length) { showToast("No leads to export"); return; }
    const headers = ["Parent name","Email","Phone","Consent","Child name","Year","State","Subject","Child score","Top gap","Severity","Gap count","Submitted"];
    const rows = leads.map(l => [l.name,l.email,l.phone,l.consent?"Yes":"No",l.childName,l.childYear,l.state,l.subject,l.overallScore,l.topGap,l.topGapSeverity,l.gapCount,l.submittedAtDisplay].map(v=>`"${String(v??'').replace(/"/g,'""')}"`).join(","));
    const csv = [headers.join(","), ...rows].join("\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    a.download = "titanium_tutoring_leads.csv";
    a.click();
    showToast("Leads exported!", true);
  }

  function clearLeads() {
    if (!confirm("Clear all captured leads? This cannot be undone.")) return;
    setLeads([]); localStorage.setItem("tt_leads", "[]"); showToast("Leads cleared");
  }

  return (
    <>
      {/* ── FORM — progressive disclosure ── */}
      {screen === "form" && (
        <>
          <style>{`
            @keyframes dec-fadein{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
            .dec-step{animation:dec-fadein 0.35s var(--ease-out) both}
            .dec-drop:hover{border-color:var(--gold)!important;background:rgba(243,190,67,0.04)!important}
          `}</style>

          {/* Minimal hero */}
          <div style={{ background: "var(--navy)", padding: "calc(var(--nav-h) + 48px) 5% 52px", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(243,190,67,0.06) 1px,transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />
            <div style={{ position: "relative", maxWidth: 640, margin: "0 auto" }}>
              <span className="eyebrow">🇦🇺 Free · Instant · No Login</span>
              <h1 style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", letterSpacing: "0.04em", fontSize: "clamp(30px,5vw,50px)", color: "var(--paper)", lineHeight: 1.08, marginBottom: 16 }}>
                Report Card Decoder
              </h1>
              <p style={{ fontSize: 18, color: "rgba(250,246,238,0.65)", lineHeight: 1.6, maxWidth: 460, margin: "0 auto" }}>
                Upload your child&apos;s report card and get an instant breakdown of what it really means.
              </p>
            </div>
          </div>

          {/* Progressive form area */}
          <section style={{ background: "var(--paper-raise)", padding: "48px 5% 72px" }}>
            <div style={{ maxWidth: 600, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>

              {/* ── STEP 0: Upload / Paste ── always visible */}
              <div className="dec-step" style={{ background: "var(--white)", border: "1px solid var(--rule)", borderRadius: 4, boxShadow: "var(--shadow-card)", overflow: "hidden" }}>

                {/* Tab strip */}
                <div style={{ display: "flex", borderBottom: "1px solid var(--rule)" }}>
                  {(["upload", "paste"] as InputMode[]).map(mode => (
                    <button
                      key={mode}
                      onClick={() => { setInputMode(mode); if (mode === "paste") setUploadedFile(null); }}
                      style={{
                        flex: 1, padding: "13px 0", fontSize: 13, fontWeight: 700,
                        textTransform: "uppercase", letterSpacing: "0.07em", border: "none",
                        cursor: "pointer", transition: "all 150ms",
                        background: inputMode === mode ? "var(--navy)" : "transparent",
                        color: inputMode === mode ? "var(--gold)" : "var(--ink-3)",
                        borderBottom: inputMode === mode ? "2px solid var(--gold)" : "2px solid transparent",
                      }}
                    >
                      {mode === "upload" ? "📎 Upload Report Card" : "✏️ Paste Text Instead"}
                    </button>
                  ))}
                </div>

                <div style={{ padding: "28px 28px 24px" }}>
                  {/* Upload mode */}
                  {inputMode === "upload" && !uploadedFile && (
                    <div
                      className="dec-drop"
                      onDragOver={e => { e.preventDefault(); setDragOver(true); }}
                      onDragLeave={() => setDragOver(false)}
                      onDrop={handleFileDrop}
                      onClick={() => fileInputRef.current?.click()}
                      style={{
                        border: `2px dashed ${dragOver ? "var(--gold)" : "rgba(8,30,109,0.2)"}`,
                        borderRadius: 4, padding: "44px 24px", textAlign: "center",
                        cursor: "pointer", transition: "all 200ms",
                        background: dragOver ? "rgba(243,190,67,0.04)" : "var(--paper-raise)",
                      }}
                    >
                      <div style={{ fontSize: 44, marginBottom: 14, lineHeight: 1 }}>📄</div>
                      <p style={{ fontWeight: 700, color: "var(--navy)", fontSize: 17, marginBottom: 6 }}>
                        Drop your report card here
                      </p>
                      <p style={{ fontSize: 14, color: "var(--ink-3)", marginBottom: 20 }}>
                        Screenshot, photo, or PDF — any format works
                      </p>
                      <span style={{ display: "inline-block", padding: "10px 24px", background: "var(--navy)", color: "var(--gold)", fontSize: 13, fontWeight: 700, borderRadius: 4, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                        Choose File
                      </span>
                      <p style={{ fontSize: 11, color: "var(--ink-3)", marginTop: 16 }}>
                        PDF · JPG · PNG · HEIC · WebP · Max 9 MB
                      </p>
                      <input ref={fileInputRef} type="file" accept=".pdf,image/*" style={{ display: "none" }} onChange={handleFileSelect} />
                    </div>
                  )}

                  {/* File selected */}
                  {inputMode === "upload" && uploadedFile && (
                    <div style={{ border: "1px solid var(--rule)", borderRadius: 4, overflow: "hidden" }}>
                      {uploadedFile.previewUrl
                        ? <img src={uploadedFile.previewUrl} alt="Report card" style={{ width: "100%", maxHeight: 260, objectFit: "contain", background: "var(--paper-raise)", display: "block" }} />
                        : <div style={{ background: "var(--paper-raise)", padding: "28px", textAlign: "center" }}>
                            <div style={{ fontSize: 44, marginBottom: 8 }}>📑</div>
                            <p style={{ fontSize: 14, color: "var(--ink-2)", fontWeight: 600 }}>PDF ready to analyse</p>
                          </div>
                      }
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 14px", background: "var(--white)", borderTop: "1px solid var(--rule)", gap: 12 }}>
                        <div>
                          <p style={{ fontSize: 13, fontWeight: 700, color: "var(--navy)", marginBottom: 1 }}>{uploadedFile.name}</p>
                          <p style={{ fontSize: 11, color: "var(--ink-3)" }}>{(uploadedFile.size / 1024).toFixed(0)} KB</p>
                        </div>
                        <button onClick={() => { setUploadedFile(null); setFormStep(0); if (fileInputRef.current) fileInputRef.current.value = ""; }} style={{ padding: "6px 13px", border: "1px solid var(--rule-strong)", borderRadius: 4, background: "none", fontSize: 12, fontWeight: 700, color: "var(--ink-3)", cursor: "pointer" }}>
                          ✕ Remove
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Paste mode */}
                  {inputMode === "paste" && (
                    <div className="form-group">
                      <label>Paste the teacher&apos;s comments from the report</label>
                      <textarea
                        value={input.comments}
                        onChange={e => {
                          setInput(p => ({ ...p, comments: e.target.value }));
                          if (e.target.value.length >= 20 && formStep === 0) setFormStep(1);
                        }}
                        placeholder="e.g. Priya is an enthusiastic learner who participates actively in class. In mathematics, she needs to consolidate her understanding of fractions…"
                        style={{ minHeight: 140 }}
                        autoFocus
                      />
                    </div>
                  )}
                </div>

                {/* After upload: "Looks good, let's continue" nudge */}
                {inputMode === "upload" && uploadedFile && formStep === 0 && (
                  <div style={{ borderTop: "1px solid var(--rule)", padding: "16px 28px", background: "rgba(243,190,67,0.04)" }}>
                    <button
                      className="btn-gold"
                      style={{ width: "100%", justifyContent: "center", borderRadius: 4, padding: "13px 0" }}
                      onClick={() => setFormStep(1)}
                    >
                      Looks good — continue →
                    </button>
                  </div>
                )}
              </div>

              {/* ── STEP 1: Child's name ── */}
              {formStep >= 1 && (
                <div className="dec-step" style={{ background: "var(--white)", border: "1px solid var(--rule)", borderRadius: 4, boxShadow: "var(--shadow-card)", padding: "24px 28px" }}>
                  <p style={{ fontSize: 14, color: "var(--ink-3)", marginBottom: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    What&apos;s your child&apos;s first name?
                  </p>
                  <input
                    type="text"
                    value={input.name}
                    autoFocus
                    onChange={e => {
                      setInput(p => ({ ...p, name: e.target.value }));
                      if (e.target.value.trim().length >= 1 && formStep === 1) setFormStep(2);
                    }}
                    placeholder="e.g. Priya"
                    style={{ width: "100%", padding: "12px 14px", border: "1px solid var(--rule-strong)", borderRadius: 4, fontSize: 17, color: "var(--ink)", fontFamily: "var(--font-body)", outline: "none" }}
                  />
                </div>
              )}

              {/* ── STEP 2: Year level ── */}
              {formStep >= 2 && (
                <div className="dec-step" style={{ background: "var(--white)", border: "1px solid var(--rule)", borderRadius: 4, boxShadow: "var(--shadow-card)", padding: "24px 28px" }}>
                  <p style={{ fontSize: 14, color: "var(--ink-3)", marginBottom: 14, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    What year are they in?
                  </p>
                  {/* Year chips */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {["Kinder","Year 1","Year 2","Year 3","Year 4","Year 5","Year 6","Year 7","Year 8","Year 9","Year 10","Year 11","Year 12"].map(y => (
                      <button
                        key={y}
                        onClick={() => {
                          setInput(p => ({ ...p, year: y === "Kinder" ? "Kindergarten" : y }));
                          if (formStep === 2) setFormStep(3);
                        }}
                        style={{
                          padding: "8px 16px", borderRadius: 4, fontSize: 13, fontWeight: 700,
                          border: `1px solid ${input.year === (y === "Kinder" ? "Kindergarten" : y) ? "var(--navy)" : "var(--rule)"}`,
                          background: input.year === (y === "Kinder" ? "Kindergarten" : y) ? "var(--navy)" : "var(--paper-raise)",
                          color: input.year === (y === "Kinder" ? "Kindergarten" : y) ? "var(--gold)" : "var(--ink-2)",
                          cursor: "pointer", transition: "all 150ms",
                        }}
                      >
                        {y}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ── STEP 3: Optional details + Decode ── */}
              {formStep >= 3 && (
                <div className="dec-step" style={{ display: "flex", flexDirection: "column", gap: 14 }}>

                  {/* Optional: state + subject as small selects */}
                  <details style={{ background: "var(--white)", border: "1px solid var(--rule)", borderRadius: 4, boxShadow: "var(--shadow-card)" }}>
                    <summary style={{ padding: "14px 20px", fontSize: 13, fontWeight: 700, color: "var(--ink-3)", cursor: "pointer", textTransform: "uppercase", letterSpacing: "0.08em", listStyle: "none", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span>+ Add optional details</span>
                      <span style={{ fontSize: 11, fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>State · Subject · Grades</span>
                    </summary>
                    <div style={{ padding: "0 20px 20px", display: "flex", flexDirection: "column", gap: 12, borderTop: "1px solid var(--rule)" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, paddingTop: 16 }}>
                        <div className="form-group">
                          <label>State</label>
                          <select value={input.state} onChange={e => setInput(p => ({ ...p, state: e.target.value }))}>
                            <option value="">Any state</option>
                            {["South Australia","Victoria","New South Wales","Queensland","Western Australia","Tasmania","ACT","Northern Territory"].map(s => <option key={s}>{s}</option>)}
                          </select>
                        </div>
                        <div className="form-group">
                          <label>Subject focus</label>
                          <select value={input.subj} onChange={e => setInput(p => ({ ...p, subj: e.target.value }))}>
                            <option value="">All subjects</option>
                            {["Mathematics","English / Literacy","Science","HASS / Humanities"].map(s => <option key={s}>{s}</option>)}
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Grades / scores <span style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0, color: "var(--ink-3)" }}>(optional)</span></label>
                        <textarea value={input.grades} onChange={e => setInput(p => ({ ...p, grades: e.target.value }))} placeholder="e.g. Maths: C   English: B   Science: A" style={{ minHeight: 64 }} />
                      </div>
                      {inputMode === "upload" && (
                        <div className="form-group">
                          <label>Extra context <span style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0, color: "var(--ink-3)" }}>(optional)</span></label>
                          <textarea value={input.comments} onChange={e => setInput(p => ({ ...p, comments: e.target.value }))} placeholder="e.g. She&apos;s been struggling with maths this semester…" style={{ minHeight: 64 }} />
                        </div>
                      )}
                    </div>
                  </details>

                  {/* Big decode button */}
                  <button className="btn-gold" style={{ padding: "17px 0", fontSize: 17, justifyContent: "center", borderRadius: 4 }} onClick={doDecod}>
                    Decode {input.name ? `${input.name.trim()}'s` : "My Child's"} Report — Free →
                  </button>
                  <p style={{ textAlign: "center", fontSize: 12, color: "var(--ink-3)", marginTop: -6 }}>
                    No payment · No account · Results in about 60 seconds
                  </p>
                </div>
              )}

              {/* Admin link */}
              <div style={{ textAlign: "center", marginTop: 8 }}>
                <button onClick={() => go("admin")} style={{ background: "none", border: "none", fontSize: 12, color: "var(--ink-3)", cursor: "pointer", textDecoration: "underline" }}>
                  📊 View captured leads
                </button>
              </div>

            </div>
          </section>
        </>
      )}

      {/* ── LOADING ── */}
      {screen === "loading" && (
        <div style={{ background: "var(--navy)", minHeight: "calc(100vh - 72px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "4rem 5%", position: "relative", overflow: "hidden" }}>
          {/* dot grid */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(243,190,67,0.06) 1px,transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />
          <div style={{ position: "relative", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(243,190,67,0.2)", borderRadius: 4, padding: "3rem 2.5rem", textAlign: "center", maxWidth: 400, width: "100%", boxShadow: "var(--shadow-modal)" }}>
            {/* spinner */}
            <div style={{ width: 52, height: 52, border: "3px solid rgba(243,190,67,0.2)", borderTopColor: "var(--gold)", borderRadius: "50%", animation: "dec-spin 1s linear infinite", margin: "0 auto 1.75rem" }} />
            <h2 style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", letterSpacing: "0.06em", fontSize: 22, color: "var(--paper)", marginBottom: 8 }}>
              Decoding the Report
            </h2>
            <p style={{ fontSize: 14, color: "rgba(250,246,238,0.5)", marginBottom: "1.75rem" }}>Our AI is reading every word carefully</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, textAlign: "left" }}>
              {[inputMode === "upload" ? "Reading the report card file" : "Reading teacher comments","Matching to Australian Curriculum","Identifying learning gaps","Building your action plan"].map((label, i) => {
                const done = loadStep > i;
                const active = loadStep === i;
                return (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: done ? "var(--gold)" : active ? "var(--paper)" : "rgba(250,246,238,0.35)", fontWeight: active ? 600 : 400 }}>
                    <div style={{ width: 7, height: 7, borderRadius: "50%", flexShrink: 0, background: done ? "var(--gold)" : active ? "var(--gold)" : "rgba(255,255,255,0.15)", opacity: active ? 1 : undefined, animation: active ? "dec-pulse 0.8s ease infinite alternate" : undefined }} />
                    {label}
                  </div>
                );
              })}
            </div>
          </div>
          <style>{`@keyframes dec-spin{to{transform:rotate(360deg)}}@keyframes dec-pulse{from{opacity:.35}to{opacity:1}}`}</style>
        </div>
      )}

      {/* ── RESULTS ── */}
      {screen === "results" && result && (
        <>
          {/* Result hero */}
          <div style={{ background: "var(--navy)", padding: "calc(var(--nav-h) + 40px) 5% 48px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(243,190,67,0.06) 1px,transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />
            <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>
              <div>
                <span className="eyebrow">Report Decoded ✓</span>
                <h1 style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", letterSpacing: "0.04em", fontSize: "clamp(26px,4vw,38px)", color: "var(--paper)", lineHeight: 1.1, marginBottom: 8 }}>
                  {input.name}&apos;s Report Analysis
                </h1>
                <p style={{ fontSize: 14, color: "rgba(250,246,238,0.55)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  {[input.year, input.subj, input.state].filter(Boolean).join(" · ")}
                </p>
              </div>
              {/* Score badge */}
              <div style={{ background: "rgba(243,190,67,0.1)", border: "1px solid rgba(243,190,67,0.25)", borderRadius: 4, padding: "16px 24px", textAlign: "center", minWidth: 110 }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 52, color: "var(--gold)", display: "block", lineHeight: 1, letterSpacing: "0.02em" }}>
                  {result.overallScore ?? 70}
                </span>
                <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(250,246,238,0.45)", display: "block", marginTop: 4 }}>
                  Overall Score
                </span>
              </div>
            </div>
          </div>

          {/* Content area */}
          <section style={{ background: "var(--paper-raise)", padding: "48px 5%" }}>
            <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexDirection: "column", gap: 20 }}>

              {unlocked && (
                <div style={{ background: "rgba(47,122,68,0.08)", border: "1px solid rgba(47,122,68,0.25)", borderRadius: 4, padding: "14px 20px", fontSize: 14, color: "var(--success)", display: "flex", alignItems: "center", gap: 10, fontWeight: 600 }}>
                  ✓ Thanks {lead.name.split(" ")[0]}! Here&apos;s {input.name}&apos;s full plan. We&apos;ll call you on {lead.phone} soon.
                </div>
              )}

              {/* Summary */}
              <div style={{ background: "var(--white)", border: "1px solid var(--rule)", borderRadius: 4, padding: "24px 28px", boxShadow: "var(--shadow-card)" }}>
                <span className="eyebrow" style={{ marginBottom: 10 }}>Summary</span>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--ink-2)" }}>{result.summary}</p>
              </div>

              {/* Gap names — free teaser */}
              <div style={{ background: "var(--white)", border: "1px solid var(--rule)", borderRadius: 4, padding: "24px 28px", boxShadow: "var(--shadow-card)" }}>
                <span className="eyebrow" style={{ marginBottom: 14 }}>Learning Gaps Identified</span>
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {result.gaps?.map((g, i) => (
                    <div key={g.topic} style={{ display: "flex", alignItems: "center", gap: 14, padding: "13px 0", borderBottom: i < result.gaps.length - 1 ? "1px solid var(--rule)" : "none" }}>
                      <div style={{ width: 9, height: 9, borderRadius: "50%", flexShrink: 0, background: SEV_COLOR[g.severity] ?? "var(--warning)" }} />
                      <span style={{ flex: 1, fontSize: 15, fontWeight: 700, color: "var(--navy)" }}>{g.topic}</span>
                      <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", padding: "3px 10px", borderRadius: 2, background: SEV_BG[g.severity], color: SEV_COLOR[g.severity] }}>
                        {SEV_LABEL[g.severity] ?? "Review"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── GATE ── */}
              {!unlocked && (
                <div style={{ background: "var(--navy)", border: "1px solid rgba(243,190,67,0.25)", borderRadius: 4, padding: "36px 32px", boxShadow: "var(--shadow-modal)", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(243,190,67,0.06) 1px,transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
                  <div style={{ position: "relative" }}>
                    <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
                      <div style={{ fontSize: 32, marginBottom: 12 }}>🔒</div>
                      <h2 style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", letterSpacing: "0.04em", fontSize: "clamp(20px,3vw,28px)", color: "var(--paper)", marginBottom: 10 }}>
                        Unlock {input.name}&apos;s Full Plan
                      </h2>
                      <p style={{ fontSize: 15, color: "rgba(250,246,238,0.6)", lineHeight: 1.65, maxWidth: 480, margin: "0 auto" }}>
                        You can see <strong style={{ color: "var(--paper)" }}>what</strong> the gaps are. Enter your details to unlock <strong style={{ color: "var(--gold)" }}>exactly how to fix them</strong> — plus a free call from a Titanium Tutoring specialist.
                      </p>
                    </div>

                    {/* Locked items */}
                    <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 4, padding: "16px 20px", marginBottom: "1.75rem", display: "flex", flexDirection: "column", gap: 10 }}>
                      {["Plain-English explanation of each gap & why it matters","Your child's strengths breakdown","A day-by-day weekly action plan","Free resources matched to each gap"].map(item => (
                        <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "rgba(250,246,238,0.55)" }}>
                          <span style={{ color: "var(--gold)", fontWeight: 700, flexShrink: 0 }}>—</span> {item}
                        </div>
                      ))}
                    </div>

                    {/* Lead form */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                      <div className="form-row">
                        <div className="form-group" style={{ gap: 5 }}>
                          <label style={{ color: "rgba(250,246,238,0.55)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>Your Name</label>
                          <input type="text" value={lead.name} onChange={e => setLead(p => ({ ...p, name: e.target.value }))} placeholder="Parent's full name" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "var(--paper)" }} />
                        </div>
                        <div className="form-group" style={{ gap: 5 }}>
                          <label style={{ color: "rgba(250,246,238,0.55)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>Email Address</label>
                          <input type="email" value={lead.email} onChange={e => setLead(p => ({ ...p, email: e.target.value }))} placeholder="you@email.com" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "var(--paper)" }} />
                        </div>
                      </div>
                      <div className="form-group" style={{ gap: 5 }}>
                        <label style={{ color: "rgba(250,246,238,0.55)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>Mobile Number</label>
                        <input type="tel" value={lead.phone} onChange={e => setLead(p => ({ ...p, phone: e.target.value }))} placeholder="04XX XXX XXX" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "var(--paper)" }} />
                      </div>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: 12, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 4, padding: "14px 16px" }}>
                        <input type="checkbox" id="dec-consent" checked={lead.consent} onChange={e => setLead(p => ({ ...p, consent: e.target.checked }))} style={{ marginTop: 3, width: 16, height: 16, flexShrink: 0, accentColor: "var(--gold)" }} />
                        <label htmlFor="dec-consent" style={{ fontSize: 12, color: "rgba(250,246,238,0.5)", lineHeight: 1.6, cursor: "pointer" }}>
                          Yes, I&apos;d like a free call from a Titanium Tutoring specialist about my child&apos;s results, and I consent to being contacted by phone, email or SMS. I understand I can opt out at any time.{" "}
                          <Link href="/privacy" style={{ color: "var(--gold)" }}>Privacy Policy</Link>
                        </label>
                      </div>
                      <button
                        className="btn-gold"
                        style={{ padding: "15px 0", fontSize: 16, justifyContent: "center", borderRadius: 4, opacity: unlockLoading ? 0.7 : 1 }}
                        disabled={unlockLoading}
                        onClick={captureLead}
                      >
                        {unlockLoading ? "Unlocking…" : "🔓 Unlock the Full Plan →"}
                      </button>
                      <p style={{ fontSize: 11, color: "rgba(250,246,238,0.3)", textAlign: "center", lineHeight: 1.5 }}>
                        Titanium Tutoring respects your privacy. Your details are never sold. Unsubscribe or request deletion anytime.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* ── UNLOCKED CONTENT ── */}
              {unlocked && (
                <>
                  {/* Gap details */}
                  <div style={{ background: "var(--white)", border: "1px solid var(--rule)", borderRadius: 4, padding: "24px 28px", boxShadow: "var(--shadow-card)" }}>
                    <span className="eyebrow" style={{ marginBottom: 14 }}>Learning Gaps — In Detail</span>
                    {result.gaps?.map((g, i) => (
                      <div key={g.topic} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "14px 0", borderBottom: i < result.gaps.length - 1 ? "1px solid var(--rule)" : "none" }}>
                        <div style={{ width: 9, height: 9, borderRadius: "50%", flexShrink: 0, marginTop: 6, background: SEV_COLOR[g.severity] ?? "var(--warning)" }} />
                        <div>
                          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5, flexWrap: "wrap" }}>
                            <h4 style={{ fontSize: 15, fontWeight: 700, color: "var(--navy)" }}>{g.topic}</h4>
                            <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", padding: "2px 9px", borderRadius: 2, background: SEV_BG[g.severity], color: SEV_COLOR[g.severity] }}>{SEV_LABEL[g.severity]}</span>
                            <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", padding: "2px 9px", borderRadius: 2, background: "rgba(8,30,109,0.07)", color: "var(--navy)" }}>⏱ {g.fixTime}</span>
                          </div>
                          <p style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.6 }}>{g.explanation}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Strengths + Week plan */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                    {/* Strengths */}
                    <div style={{ background: "var(--white)", border: "1px solid var(--rule)", borderRadius: 4, padding: "24px 28px", boxShadow: "var(--shadow-card)" }}>
                      <span className="eyebrow" style={{ marginBottom: 14 }}>Strengths</span>
                      {result.strengths?.map((s, i) => (
                        <div key={s.area} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: i < result.strengths.length - 1 ? "1px solid var(--rule)" : "none" }}>
                          <span style={{ fontSize: 13, color: "var(--ink-2)", minWidth: 110 }}>{s.area}</span>
                          <div style={{ flex: 1, background: "var(--paper-raise)", borderRadius: 2, height: 5 }}>
                            <div style={{ width: `${s.score}%`, height: 5, borderRadius: 2, background: "var(--navy)" }} />
                          </div>
                          <span style={{ fontSize: 12, color: "var(--ink-3)", minWidth: 34, textAlign: "right" }}>{s.score}%</span>
                        </div>
                      ))}
                    </div>

                    {/* Week plan */}
                    <div style={{ background: "var(--white)", border: "1px solid var(--rule)", borderRadius: 4, padding: "24px 28px", boxShadow: "var(--shadow-card)" }}>
                      <span className="eyebrow" style={{ marginBottom: 14 }}>This Week&apos;s Plan</span>
                      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        {result.weekPlan?.map(d => (
                          <div key={d.day} style={{ background: "var(--paper-raise)", border: "1px solid var(--rule)", borderRadius: 4, padding: "11px 14px" }}>
                            <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--gold-600)", display: "block", marginBottom: 4 }}>{d.day}</span>
                            <span style={{ fontSize: 13, color: "var(--ink-2)", lineHeight: 1.5 }}>{d.task}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Resources */}
                  <div style={{ background: "var(--white)", border: "1px solid var(--rule)", borderRadius: 4, padding: "24px 28px", boxShadow: "var(--shadow-card)" }}>
                    <span className="eyebrow" style={{ marginBottom: 14 }}>Free Resources</span>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {result.resources?.map(res => {
                        const icMap: Record<string, [string, string]> = {
                          youtube: ["🎥", "rgba(193,66,66,0.1)"],
                          khan:    ["📘", "rgba(8,30,109,0.08)"],
                          worksheet: ["📝", "rgba(243,190,67,0.12)"],
                        };
                        const [ic, bg] = icMap[res.type] ?? ["📎", "var(--paper-raise)"];
                        return (
                          <div key={res.url} style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 16px", background: "var(--paper-raise)", border: "1px solid var(--rule)", borderRadius: 4 }}>
                            <div style={{ width: 36, height: 36, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0, background: bg }}>{ic}</div>
                            <div>
                              <a href={res.url} target="_blank" rel="noreferrer" style={{ fontSize: 14, color: "var(--navy)", fontWeight: 700, textDecoration: "none" }}>{res.title}</a>
                              <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 2 }}>{res.description}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* CTA */}
                  <div style={{ background: "var(--navy)", border: "1px solid rgba(243,190,67,0.2)", borderRadius: 4, padding: "36px 32px", textAlign: "center", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(243,190,67,0.06) 1px,transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
                    <div style={{ position: "relative" }}>
                      <span className="eyebrow">Next Step</span>
                      <h3 style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", letterSpacing: "0.04em", fontSize: 24, color: "var(--paper)", marginBottom: 10 }}>
                        Want Us to Walk You Through This?
                      </h3>
                      <p style={{ fontSize: 15, color: "rgba(250,246,238,0.6)", lineHeight: 1.65, maxWidth: 480, margin: "0 auto 24px" }}>
                        A Titanium Tutoring specialist will call you for free to explain how to action this plan — and whether tutoring is the right move for your child.
                      </p>
                      <button className="btn-gold" onClick={() => showToast("Our team will call you soon!", true)} style={{ borderRadius: 4 }}>
                        📞 Book My Free Call
                      </button>
                    </div>
                  </div>
                </>
              )}

              <div style={{ textAlign: "center" }}>
                <button onClick={() => go("form")} style={{ background: "none", border: "none", fontSize: 13, color: "var(--ink-3)", cursor: "pointer", textDecoration: "underline" }}>
                  ← Decode another report
                </button>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── ADMIN ── */}
      {screen === "admin" && (
        <>
          <div className="page-hero">
            <div className="page-hero-inner">
              <span className="eyebrow">Internal</span>
              <h1 className="section-title" style={{ color: "var(--paper)", fontSize: "clamp(28px,4vw,42px)" }}>Captured Leads</h1>
            </div>
          </div>
          <section style={{ background: "var(--paper-raise)", padding: "48px 5%" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
                <div style={{ display: "flex", gap: 10 }}>
                  <button className="btn-gold-sm" onClick={exportCSV} style={{ borderRadius: 4 }}>⬇ Export CSV</button>
                  <button onClick={clearLeads} style={{ padding: "10px 22px", borderRadius: 4, fontSize: 14, fontWeight: 700, border: "1px solid rgba(168,50,50,0.3)", background: "rgba(168,50,50,0.06)", color: "var(--danger)", cursor: "pointer" }}>Clear All</button>
                </div>
              </div>

              {/* Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: 16, marginBottom: "1.5rem" }}>
                {[
                  { n: leads.length, l: "Total Leads" },
                  { n: leads.filter(l => new Date(l.submittedAt).toDateString() === new Date().toDateString()).length, l: "Today" },
                  { n: leads.filter(l => l.topGapSeverity === "high").length, l: "Hot (High-Need)" },
                  { n: leads.length ? Math.round(leads.reduce((a, l) => a + (l.overallScore || 0), 0) / leads.length) : 0, l: "Avg Child Score" },
                ].map(s => (
                  <div key={s.l} style={{ background: "var(--white)", border: "1px solid var(--rule)", borderRadius: 4, padding: "20px 22px", boxShadow: "var(--shadow-card)" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 36, color: "var(--navy)", display: "block", lineHeight: 1, letterSpacing: "0.02em" }}>{s.n}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--ink-3)", display: "block", marginTop: 6 }}>{s.l}</span>
                  </div>
                ))}
              </div>

              {/* Table */}
              <div style={{ background: "var(--white)", border: "1px solid var(--rule)", borderRadius: 4, overflow: "hidden", boxShadow: "var(--shadow-card)" }}>
                {!leads.length ? (
                  <div style={{ textAlign: "center", padding: "3rem", color: "var(--ink-3)", fontSize: 14 }}>No leads captured yet. Submit a report through the form to see it appear here.</div>
                ) : (
                  <>
                    <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1.5fr 1fr 1fr 0.7fr 0.8fr", gap: 8, padding: "12px 18px", background: "var(--paper-raise)", borderBottom: "1px solid var(--rule)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--ink-3)" }}>
                      <div>Parent</div><div>Contact</div><div>Child</div><div>Top Need</div><div>Score</div><div>When</div>
                    </div>
                    {leads.map((l, i) => (
                      <div key={i} style={{ display: "grid", gridTemplateColumns: "1.3fr 1.5fr 1fr 1fr 0.7fr 0.8fr", gap: 8, padding: "13px 18px", borderBottom: i < leads.length - 1 ? "1px solid var(--rule)" : "none", alignItems: "center", fontSize: 13 }}>
                        <div>
                          <span style={{ fontWeight: 700, color: "var(--navy)" }}>{l.name}</span>
                          {l.topGapSeverity === "high" && <span style={{ marginLeft: 8, fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 2, background: SEV_BG.high, color: SEV_COLOR.high }}>HOT</span>}
                          {l.topGapSeverity === "medium" && <span style={{ marginLeft: 8, fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 2, background: SEV_BG.medium, color: SEV_COLOR.medium }}>WARM</span>}
                        </div>
                        <div>
                          <a href={`mailto:${l.email}`} style={{ color: "var(--navy)", textDecoration: "none", fontWeight: 600 }}>{l.email}</a>
                          <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 2 }}>{l.phone}</div>
                        </div>
                        <div>
                          <div style={{ fontWeight: 600, color: "var(--ink)" }}>{l.childName}</div>
                          <div style={{ fontSize: 12, color: "var(--ink-3)" }}>{l.childYear}</div>
                        </div>
                        <div style={{ fontSize: 13, color: "var(--ink-2)" }}>{l.topGap || "—"}</div>
                        <div style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "var(--navy)", letterSpacing: "0.02em" }}>{l.overallScore || "—"}</div>
                        <div style={{ fontSize: 12, color: "var(--ink-3)" }}>{l.submittedAtDisplay}</div>
                      </div>
                    ))}
                  </>
                )}
              </div>

              <div style={{ background: "rgba(8,30,109,0.06)", border: "1px solid var(--rule)", borderRadius: 4, padding: "16px 20px", marginTop: "1.5rem", fontSize: 13, color: "var(--ink-2)", lineHeight: 1.65 }}>
                <strong>Demo view.</strong> Leads are saved in this browser. To collect from real visitors, set <code style={{ background: "var(--white)", padding: "1px 6px", borderRadius: 2, fontSize: 12 }}>LEAD_ENDPOINT</code> in <code style={{ background: "var(--white)", padding: "1px 6px", borderRadius: 2, fontSize: 12 }}>app/decoder/page.tsx</code> to your Google Apps Script URL.
              </div>

              <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
                <button onClick={() => go("form")} className="btn-navy-sm" style={{ borderRadius: 4 }}>← Back to Decoder</button>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Toast */}
      <div style={{
        position: "fixed", bottom: "1.5rem", right: "1.5rem",
        background: toast.ok ? "var(--success)" : "var(--navy)",
        color: "#fff", padding: "12px 20px", borderRadius: 4, fontSize: 14, fontWeight: 600,
        zIndex: 999, maxWidth: 320,
        transform: toast.visible ? "translateY(0)" : "translateY(100px)",
        opacity: toast.visible ? 1 : 0, transition: "all 0.3s", pointerEvents: "none",
        border: toast.ok ? "1px solid rgba(47,122,68,0.4)" : "1px solid rgba(243,190,67,0.2)",
      }}>
        {toast.msg}
      </div>

      {/* Responsive: stack 2-col grids on mobile */}
      <style>{`
        @media(max-width:640px){
          .dec-two-col{grid-template-columns:1fr !important;}
        }
      `}</style>
    </>
  );
}
