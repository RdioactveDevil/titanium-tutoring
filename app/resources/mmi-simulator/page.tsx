"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Breadcrumb from "@/app/components/Breadcrumb";
import MedToolFooter from "@/app/components/MedToolFooter";

/**
 * Titanium Tutoring — The MMI Simulator
 * A realistic, timed run at a Multiple Mini Interview station: read the scenario
 * on the prep clock, answer OUT LOUD on the response clock, then see what
 * assessors were actually scoring — the rubric, a non-scripted approach, and the
 * common mistakes.
 *
 * All scenarios are original. Real MMI structure verified against Australian
 * med-school pages (e.g. UWA: 8 × 7-min stations, ~2 min reading + 5 min
 * answering; Curtin: 8 × 8-min, ~2 min + 6 min). Verify current formats yearly.
 */

interface Station {
  type: string; color: string; prep: number; response: number;
  prompt: string; followUps: string[]; scoring: string[];
  approach: string; mistakes: string[];
}

const STATIONS: Record<string, Station> = {
  friend: {
    type: "Ethical scenario", color: "#F3BE43", prep: 60, response: 240,
    prompt:
      "A close friend, who is also applying for medicine, confides that they exaggerated their volunteering hours on their application because they were afraid they wouldn't be competitive. They ask you to keep it to yourself. How would you respond to your friend, and how do you think about this situation?",
    followUps: [
      "Does it change your view if the application has already been submitted?",
      "What if it were a tiny exaggeration versus a large one?",
      "What would you do if they refused to correct it?",
    ],
    scoring: [
      "Names the tension: loyalty to a friend vs honesty and fairness",
      "Considers everyone affected — your friend, other applicants, patient trust in doctors",
      "Reasons it through rather than snapping to a verdict",
      "Responds with empathy, not judgement",
      "Holds integrity while staying supportive",
      "Acknowledges it's genuinely hard",
    ],
    approach:
      "Say the tension out loud — loyalty to a friend against honesty and fairness. Show you understand why they did it without endorsing it. Walk through who's affected: your friend, the applicants they're ranked against, and the trust patients place in doctors' integrity. Land on a reasoned position — encourage them to correct it and explain why it matters — while staying their friend. Assessors want your reasoning and your humanity, not a snap verdict.",
    mistakes: [
      "Jumping straight to “report them” with no empathy",
      "Excusing it completely out of loyalty",
      "Treating it like a knowledge question with one right answer",
      "Being preachy, or ignoring how your friend feels",
    ],
  },
  comfort: {
    type: "Communication", color: "#5B8DEF", prep: 60, response: 240,
    prompt:
      "A Year 9 student you mentor has just found out they failed an important exam. They're visibly upset and keep saying they're “not smart enough” to ever do well. Talk through how you'd handle this conversation — you may speak as if you're talking to them.",
    followUps: [
      "How do you balance comforting them with being honest?",
      "What if they start crying?",
      "How would you end the conversation?",
    ],
    scoring: [
      "Acknowledges the emotion before trying to fix anything",
      "Listens and asks, rather than lecturing",
      "Uses warm, clear, non-patronising language",
      "Reframes the “not smart enough” story without dismissing it",
      "Offers a concrete next step, not empty reassurance",
      "Reads and responds to the person in front of them",
    ],
    approach:
      "Lead with the feeling, not the solution — name and acknowledge how they feel before problem-solving. Ask open questions and actually listen. Gently challenge the “not smart enough” story with evidence and a growth framing, without brushing their feelings aside. Offer a concrete next step you'd take together. Warmth and honesty — not toxic positivity.",
    mistakes: [
      "Launching into advice before acknowledging feelings",
      "Empty reassurance (“you'll be fine”)",
      "Talking down to them",
      "Making it about you (“when I failed…”) too early",
    ],
  },
  motivation: {
    type: "Motivation for medicine", color: "#2DD4BF", prep: 45, response: 240,
    prompt:
      "Why do you want to study medicine? Take a moment to gather your thoughts, then answer as you would to an interviewer.",
    followUps: [
      "What do you think you'd find hardest about a medical career?",
      "What's your understanding of what a doctor's day is actually like?",
      "What else did you consider, and why medicine over that?",
    ],
    scoring: [
      "Genuine, specific motivation — not clichés",
      "Realistic grasp of the profession, including the hard parts",
      "Backed by real experience or reflection, not just assertions",
      "Self-aware",
      "Sounds authentic, not rehearsed",
      "Balances people, science and service",
    ],
    approach:
      "Skip “I want to help people” as your whole answer — everyone says it. Anchor in something specific and true to you: an experience that shifted how you see medicine, and what you took from it. Show you understand the reality — the pressure, the lifelong learning, the hard days — and choose it anyway. Tie together people, science and service. Reflection beats a polished script every time.",
    mistakes: [
      "Clichés with no substance (“since I was five…”)",
      "An idealised view that ignores the hard parts",
      "Listing achievements instead of reflecting",
      "A rehearsed script that sounds robotic",
    ],
  },
  teamwork: {
    type: "Teamwork & reflection", color: "#C77DFF", prep: 45, response: 240,
    prompt:
      "Describe a time you were part of a team that wasn't working well. What was your role, what did you do, and what did you learn?",
    followUps: [
      "What would you do differently now?",
      "How did you handle the disagreement?",
      "What did that teach you about yourself?",
    ],
    scoring: [
      "Picks a real, specific example — not a polished “we won” story",
      "Honest about the difficulty",
      "Focuses on their own contribution and reasoning",
      "Reflects on what they learned",
      "Shows collaboration and emotional awareness",
      "Structured: situation → action → outcome → lesson",
    ],
    approach:
      "Choose a real example with genuine friction, not a humble-brag. Briefly set the scene, then focus on what YOU did and why. Be honest about the tension and how you navigated it. End on a specific, genuine lesson — ideally one that connects to working in clinical teams. A light structure (situation, action, result, reflection) keeps it from rambling.",
    mistakes: [
      "A fake-perfect example with no real conflict",
      "Blaming everyone else",
      "Describing the team but not your role",
      "No reflection or lesson at the end",
    ],
  },
  values: {
    type: "Ethical reasoning", color: "#E7B24A", prep: 60, response: 240,
    prompt:
      "Some people argue that patients whose illnesses are linked to their own choices — for example, continuing to smoke — should be lower priority for scarce treatments. What do you think about this view?",
    followUps: [
      "Who would be affected if we adopted this?",
      "Where exactly would you draw the line?",
      "Does personal responsibility matter at all in healthcare?",
    ],
    scoring: [
      "Explores both sides fairly before concluding",
      "Weighs fairness, non-judgement and practicality",
      "Recognises the complexity — what even counts as a “choice”?",
      "Builds a structured argument",
      "Avoids a knee-jerk verdict",
      "Reflects medical values: care regardless of background",
    ],
    approach:
      "Don't pick a side in the first sentence. Steelman both: the limited-resources/fairness argument, and the non-judgement/equity argument. Complicate it — addiction, social and economic factors, and where you'd even draw the line. Then give a reasoned position, usually grounded in treating patients without moral judgement while acknowledging resource realities. Balanced reasoning scores far higher than a strong opinion.",
    mistakes: [
      "Picking a side immediately",
      "Moralising about the patients",
      "Ignoring how complex “choice” really is",
      "No structure, or refusing to engage the other view",
    ],
  },
  rural: {
    type: "Rural & Indigenous health", color: "#46C6B0", prep: 60, response: 240,
    prompt:
      "Australia has a significant shortage of doctors in rural, remote and Indigenous communities. Why do you think this is, and what might help address it?",
    followUps: [
      "What might stop a city-trained doctor working rurally?",
      "Why might rural-background students be more likely to return rurally?",
      "What's the risk of a purely “fly-in, fly-out” approach?",
    ],
    scoring: [
      "Aware of the issue and why it matters for health equity",
      "Thinks about causes structurally (training, incentives, isolation, lifestyle)",
      "Addresses Indigenous health specifically and respectfully",
      "Balanced and non-tokenistic",
      "Offers reasoned ideas, not slogans",
      "Humble about the complexity",
    ],
    approach:
      "Show you know this is real and central to health equity. Reason about causes — where doctors train, incentives, professional isolation, family and lifestyle, and cultural safety for Indigenous patients. Offer evidence-grounded ideas (rural-background admissions, rural training pathways, community-led and culturally safe care) rather than slogans. Stay humble — you're a student, and it's genuinely complex. This is exactly why schools like JCU and Charles Darwin exist.",
    mistakes: [
      "Vague slogans with no mechanism",
      "Treating Indigenous health as an afterthought or tokenistically",
      "Assuming you can just “send doctors there”",
      "Overclaiming expertise; ignoring cultural safety",
    ],
  },
};
const ORDER = ["friend", "comfort", "motivation", "teamwork", "values", "rural"];

function fmt(s: number) {
  const m = Math.floor(s / 60);
  const r = Math.ceil(s % 60);
  return m > 0 ? `${m}:${String(r).padStart(2, "0")}` : `${r}s`;
}

function Clock({ frac, seconds, label }: { frac: number; seconds: number; label: string }) {
  const low = frac <= 0.2;
  return (
    <div className="ttm-clock">
      <div className="ttm-clock-top">
        <span className="ttm-clock-label">{label}</span>
        <span className="ttm-clock-num" style={{ color: low ? "#E98A8A" : "#F3BE43" }} aria-live="polite">{fmt(seconds)}</span>
      </div>
      <div className="ttm-clock-track">
        <div className="ttm-clock-fill" style={{ width: `${frac * 100}%`, background: low ? "#E05A5A" : "#F3BE43" }} />
      </div>
    </div>
  );
}

function Simulator() {
  const [screen, setScreen] = useState<"intro" | "menu" | "prep" | "response" | "debrief">("intro");
  const [key, setKey] = useState("friend");
  const [prepLeft, setPrepLeft] = useState(0);
  const [respLeft, setRespLeft] = useState(0);
  const [showFollow, setShowFollow] = useState(false);
  const [checked, setChecked] = useState<number[]>([]);

  const st = STATIONS[key];

  function startStation(k: string) {
    setKey(k);
    setChecked([]);
    setShowFollow(false);
    setPrepLeft(STATIONS[k].prep);
    setScreen("prep");
  }
  function goRespond() {
    setRespLeft(st.response);
    setShowFollow(false);
    setScreen("response");
  }

  useEffect(() => {
    if (screen !== "prep") return;
    if (prepLeft <= 0) { goRespond(); return; }
    const id = setTimeout(() => setPrepLeft((t) => Math.max(0, Math.round((t - 0.1) * 10) / 10)), 100);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen, prepLeft]);

  useEffect(() => {
    if (screen !== "response") return;
    if (respLeft <= 0) { setScreen("debrief"); return; }
    const id = setTimeout(() => setRespLeft((t) => Math.max(0, Math.round((t - 0.1) * 10) / 10)), 100);
    return () => clearTimeout(id);
     
  }, [screen, respLeft]);

  function toggle(i: number) {
    setChecked((c) => (c.includes(i) ? c.filter((x) => x !== i) : [...c, i]));
  }

  return (
    <div className="ttm">
      <style>{css}</style>

      <header className="ttm-head">
        <div className="ttm-brand">
          <Image className="ttm-crest-img" src="/logo-icon.png" alt="" width={22} height={22} aria-hidden="true" />
          <span className="ttm-wordmark">TITANIUM TUTORING</span>
        </div>
        <span className="ttm-eyebrow">Interviews · MMI</span>
      </header>

      {/* INTRO */}
      {screen === "intro" && (
        <div className="ttm-intro">
          <h1 className="ttm-title">The MMI Simulator</h1>
          <p className="ttm-lead">
            Medicine interviews aren&apos;t a quiz. In a <em>Multiple Mini Interview</em> you rotate through
            short stations, each testing a different quality. There&apos;s rarely a “right answer” — assessors
            score <em>how you think and communicate</em>. Run a real station, on the clock, then see exactly
            what they&apos;re marking.
          </p>
          <div className="ttm-howbox">
            <span className="ttm-howbox-h">How the real thing works</span>
            <p>
              Typically <strong>8 stations</strong>, each around <strong>7–8 minutes</strong>: roughly
              <strong> 2 minutes reading</strong> the scenario outside the door, then <strong>5–6 minutes</strong>
              answering with an interviewer who may ask follow-ups. This simulator gives you a shortened rep
              of one station at a time.
            </p>
          </div>
          <button className="ttm-btn ttm-btn--go" onClick={() => setScreen("menu")}>Choose a station →</button>
          <p className="ttm-note">6 original stations · answer out loud · no sign-up</p>
        </div>
      )}

      {/* MENU */}
      {screen === "menu" && (
        <div className="ttm-menu">
          <h2 className="ttm-menu-h">Pick a station to practise</h2>
          <div className="ttm-grid">
            {ORDER.map((k) => {
              const s = STATIONS[k];
              return (
                <button className="ttm-card" key={k} onClick={() => startStation(k)} style={{ "--c": s.color } as React.CSSProperties}>
                  <span className="ttm-card-type">{s.type}</span>
                  <span className="ttm-card-prompt">{s.prompt.slice(0, 96)}…</span>
                  <span className="ttm-card-go">Start · {fmt(s.prep)} read + {fmt(s.response)} answer →</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* PREP */}
      {screen === "prep" && (
        <div className="ttm-station">
          <div className="ttm-st-bar">
            <span className="ttm-badge" style={{ background: st.color }}>{st.type}</span>
            <span className="ttm-phase">Reading time</span>
          </div>
          <Clock frac={prepLeft / st.prep} seconds={prepLeft} label="Read & plan" />
          <p className="ttm-scenario">{st.prompt}</p>
          <p className="ttm-cue">Plan your structure now — you won&apos;t be able to re-read it while you answer under real conditions.</p>
          <button className="ttm-btn ttm-btn--go" onClick={goRespond}>I&apos;m ready — start answering →</button>
        </div>
      )}

      {/* RESPONSE */}
      {screen === "response" && (
        <div className="ttm-station">
          <div className="ttm-st-bar">
            <span className="ttm-badge" style={{ background: st.color }}>{st.type}</span>
            <span className="ttm-live"><span className="ttm-live-dot" /> Answer out loud</span>
          </div>
          <Clock frac={respLeft / st.response} seconds={respLeft} label="Speaking" />
          <p className="ttm-scenario ttm-scenario--sm">{st.prompt}</p>

          <button className="ttm-linkbtn" onClick={() => setShowFollow((v) => !v)}>
            {showFollow ? "Hide" : "Stuck? Reveal"} interviewer follow-ups
          </button>
          {showFollow && (
            <ul className="ttm-follow">
              {st.followUps.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          )}

          <button className="ttm-btn" onClick={() => setScreen("debrief")}>Done — show me what they score →</button>
        </div>
      )}

      {/* DEBRIEF */}
      {screen === "debrief" && (
        <div className="ttm-debrief">
          <div className="ttm-st-bar">
            <span className="ttm-badge" style={{ background: st.color }}>{st.type}</span>
            <span className="ttm-phase">The reveal</span>
          </div>

          <h3 className="ttm-d-h">What the assessors were actually scoring</h3>
          <p className="ttm-d-sub">Tick honestly the ones you covered — that&apos;s your self-review.</p>
          <div className="ttm-checks">
            {st.scoring.map((s, i) => (
              <button key={i} className={`ttm-check ${checked.includes(i) ? "is-on" : ""}`} onClick={() => toggle(i)}>
                <span className="ttm-check-box">{checked.includes(i) ? "✓" : ""}</span>
                <span>{s}</span>
              </button>
            ))}
          </div>
          <p className="ttm-tally">You reflected on <strong>{checked.length}</strong> of {st.scoring.length} — no single answer nails all of them, and that&apos;s fine.</p>

          <div className="ttm-approach" style={{ borderColor: st.color }}>
            <span className="ttm-approach-h">A strong approach (a structure, not a script)</span>
            <p>{st.approach}</p>
          </div>

          <div className="ttm-mistakes">
            <span className="ttm-mistakes-h">Common mistakes</span>
            <ul>{st.mistakes.map((m, i) => <li key={i}>{m}</li>)}</ul>
          </div>

          <div className="ttm-cta">
            <button className="ttm-btn ttm-btn--go" onClick={() => startStation(key)}>↺ Redo this station</button>
            <button className="ttm-btn" onClick={() => setScreen("menu")}>Try another →</button>
          </div>
          <p className="ttm-src">
            The single best MMI prep: practise <strong>out loud with a real person</strong>, focus on structure over scripts, and record yourself once to hear how you actually sound. Original scenarios; formats vary by school — verify each cycle.
          </p>
        </div>
      )}

      <footer className="ttm-foot"><span>Per aspera ad astra · Titanium Tutoring</span></footer>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <div className="tool-shell">
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "The MMI Simulator" },
        ]} />
        <Simulator />
      </div>
      <MedToolFooter current="mmi" />
    </>
  );
}

const css = `
.ttm{
  --gold:#F3BE43; --ink:#EEF1FA; --muted:#9AA4CE;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  color:var(--ink);
  background:
    radial-gradient(1100px 560px at 12% -12%, rgba(243,190,67,0.10), transparent 60%),
    linear-gradient(160deg, #0A1A5C 0%, #081E6D 42%, #050F35 100%);
  padding:26px 22px 18px; border-radius:18px; max-width:760px; margin:0 auto;
  box-shadow:0 30px 80px -30px rgba(0,0,0,0.6);
}
.ttm *{box-sizing:border-box;}
.ttm-head{display:flex; justify-content:space-between; align-items:center; margin-bottom:22px;}
.ttm-brand{display:flex; align-items:center; gap:9px;}
.ttm-crest-img{display:block; object-fit:contain;}
.ttm-wordmark{font-weight:800; letter-spacing:2.5px; font-size:13px; font-family:"Sifonn Pro","Arial Black",system-ui,sans-serif;}
.ttm-eyebrow{color:var(--muted); font-size:11px; letter-spacing:1.5px; text-transform:uppercase;}

.ttm-btn{cursor:pointer; font-size:15px; font-weight:700; color:var(--ink);
  background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.14);
  border-radius:12px; padding:13px 22px; transition:background .18s, transform .1s;}
.ttm-btn:hover{background:rgba(255,255,255,0.12);}
.ttm-btn:active{transform:translateY(1px);}
.ttm-btn:focus-visible{outline:2px solid var(--gold); outline-offset:2px;}
.ttm-btn--go{background:var(--gold); color:#0A1440; border-color:var(--gold);}
.ttm-btn--go:hover{background:#f6cb63;}
.ttm-linkbtn{background:none; border:none; color:var(--gold); font-size:13.5px; font-weight:600; cursor:pointer; padding:0; margin:4px 0 12px; text-decoration:underline; text-underline-offset:3px;}
.ttm-linkbtn:focus-visible{outline:2px solid var(--gold); outline-offset:3px;}

/* INTRO */
.ttm-intro{text-align:center; padding:8px 4px;}
.ttm-title{font-size:40px; line-height:1.02; margin:0 0 14px; font-family:"Sifonn Pro","Arial Black",system-ui,sans-serif; font-weight:800; letter-spacing:-1px;}
.ttm-lead{color:#CBD2EE; font-size:16px; line-height:1.55; max-width:540px; margin:0 auto 20px;}
.ttm-lead em{color:var(--gold); font-style:normal;}
.ttm-howbox{text-align:left; background:rgba(255,255,255,0.045); border:1px solid rgba(255,255,255,0.09); border-radius:12px; padding:14px 16px; max-width:540px; margin:0 auto 22px;}
.ttm-howbox-h{font-size:11px; letter-spacing:1.4px; text-transform:uppercase; color:var(--muted); font-weight:700;}
.ttm-howbox p{font-size:14px; line-height:1.55; color:#D7DcF2; margin:7px 0 0;}
.ttm-note{color:var(--muted); font-size:12px; margin:14px 0 0;}

/* MENU */
.ttm-menu-h{font-size:14px; text-transform:uppercase; letter-spacing:1.2px; color:var(--muted); font-weight:700; margin:0 0 14px;}
.ttm-grid{display:grid; grid-template-columns:1fr 1fr; gap:10px;}
.ttm-card{text-align:left; cursor:pointer; display:flex; flex-direction:column; gap:8px;
  background:rgba(255,255,255,0.045); border:1px solid rgba(255,255,255,0.09); border-left:3px solid var(--c);
  border-radius:12px; padding:14px 15px; transition:background .16s, transform .08s;}
.ttm-card:hover{background:rgba(255,255,255,0.08);}
.ttm-card:active{transform:translateY(1px);}
.ttm-card:focus-visible{outline:2px solid var(--gold); outline-offset:2px;}
.ttm-card-type{font-size:14px; font-weight:800; color:var(--c);}
.ttm-card-prompt{font-size:12.5px; line-height:1.5; color:#CBD2EE;}
.ttm-card-go{font-size:11.5px; color:var(--muted); font-weight:600; margin-top:auto;}

/* STATION */
.ttm-st-bar{display:flex; align-items:center; gap:10px; margin-bottom:16px;}
.ttm-badge{font-size:12px; font-weight:800; color:#0A1440; padding:4px 10px; border-radius:6px;}
.ttm-phase{font-size:12px; color:var(--muted); margin-left:auto; text-transform:uppercase; letter-spacing:1px;}
.ttm-live{margin-left:auto; display:flex; align-items:center; gap:7px; font-size:12px; color:var(--gold); font-weight:700; text-transform:uppercase; letter-spacing:1px;}
.ttm-live-dot{width:9px; height:9px; border-radius:50%; background:#E05A5A; animation:ttmpulse 1.1s ease-in-out infinite;}
@keyframes ttmpulse{0%,100%{opacity:1; transform:scale(1);}50%{opacity:.35; transform:scale(1.35);}}

.ttm-clock{margin-bottom:20px;}
.ttm-clock-top{display:flex; justify-content:space-between; align-items:baseline; margin-bottom:7px;}
.ttm-clock-label{font-size:12px; color:var(--muted); text-transform:uppercase; letter-spacing:1px; font-weight:700;}
.ttm-clock-num{font-size:24px; font-weight:800; font-variant-numeric:tabular-nums; font-family:"Sifonn Pro","Arial Black",system-ui,sans-serif;}
.ttm-clock-track{height:8px; border-radius:5px; background:rgba(255,255,255,0.10); overflow:hidden;}
.ttm-clock-fill{height:100%; border-radius:5px; transition:width .1s linear;}

.ttm-scenario{font-size:17px; line-height:1.6; margin:0 0 16px; color:var(--ink);
  background:rgba(255,255,255,0.045); border:1px solid rgba(255,255,255,0.08); border-radius:12px; padding:16px 18px;}
.ttm-scenario--sm{font-size:14.5px; padding:13px 15px;}
.ttm-cue{font-size:13px; color:var(--muted); line-height:1.5; margin:0 0 18px;}
.ttm-follow{margin:0 0 16px; padding-left:20px;}
.ttm-follow li{font-size:14px; line-height:1.55; color:#D7DcF2; margin-bottom:7px;}

/* DEBRIEF */
.ttm-d-h{font-size:19px; margin:6px 0 4px; font-weight:800;}
.ttm-d-sub{font-size:13px; color:var(--muted); margin:0 0 14px;}
.ttm-checks{display:flex; flex-direction:column; gap:8px; margin-bottom:12px;}
.ttm-check{display:flex; align-items:center; gap:12px; text-align:left; cursor:pointer; font-size:14.5px; color:var(--ink);
  background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.09); border-radius:11px; padding:12px 14px; transition:background .14s, border-color .14s;}
.ttm-check:hover{background:rgba(255,255,255,0.07);}
.ttm-check.is-on{background:rgba(243,190,67,0.10); border-color:rgba(243,190,67,0.45);}
.ttm-check:focus-visible{outline:2px solid var(--gold); outline-offset:2px;}
.ttm-check-box{flex:none; width:22px; height:22px; border-radius:6px; border:1.5px solid rgba(255,255,255,0.3); display:grid; place-items:center; font-size:13px; font-weight:800; color:var(--gold);}
.ttm-check.is-on .ttm-check-box{border-color:var(--gold);}
.ttm-tally{font-size:13px; color:var(--muted); margin:0 0 18px;}
.ttm-tally strong{color:var(--gold);}

.ttm-approach{background:rgba(255,255,255,0.04); border-left:3px solid var(--gold); border-radius:8px; padding:14px 16px; margin:0 0 18px;}
.ttm-approach-h{font-size:11px; letter-spacing:1.4px; text-transform:uppercase; color:var(--muted); font-weight:700;}
.ttm-approach p{font-size:14.5px; line-height:1.6; color:#D7DcF2; margin:7px 0 0;}
.ttm-mistakes-h{font-size:11px; letter-spacing:1.4px; text-transform:uppercase; color:#E98A8A; font-weight:700;}
.ttm-mistakes ul{margin:8px 0 0; padding-left:20px;}
.ttm-mistakes li{font-size:14px; line-height:1.55; color:#CBD2EE; margin-bottom:6px;}
.ttm-cta{display:flex; gap:10px; flex-wrap:wrap; margin:22px 0 14px;}
.ttm-src{font-size:12px; color:var(--muted); line-height:1.55; margin:0;}
.ttm-src strong{color:#CBD2EE;}

.ttm-foot{margin-top:18px; padding-top:14px; border-top:1px solid rgba(255,255,255,0.09); font-size:11px; letter-spacing:1px; text-transform:uppercase; color:var(--muted);}

@media (max-width:640px){
  .ttm-title{font-size:32px;}
  .ttm-grid{grid-template-columns:1fr;}
}
@media (prefers-reduced-motion: reduce){ .ttm-clock-fill{transition:none;} .ttm-live-dot{animation:none;} }
`;
