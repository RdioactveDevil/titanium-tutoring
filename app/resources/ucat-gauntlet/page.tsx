"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Breadcrumb from "@/app/components/Breadcrumb";
import MedToolFooter from "@/app/components/MedToolFooter";

/**
 * Titanium Tutoring — The UCAT Gauntlet
 * A live, timed taste of the UCAT. One question at a time, on the REAL
 * per-question clock for its section — then the reveal shows how little time
 * the actual test gives you.
 *
 * Every question here is ORIGINAL, written in the UCAT style — no real UCAT
 * items are reproduced. Section structure/timing verified against 2026 UCAT ANZ
 * sources; re-check ucat.edu.au each cycle.
 */

interface Section {
  name: string; abbr: string; color: string;
  q: number; min: number; sec: number;
  tests: string; myth: string;
}

const SECTIONS: Record<string, Section> = {
  VR: {
    name: "Verbal Reasoning", abbr: "VR", color: "#5B8DEF",
    q: 44, min: 22, sec: 30,
    tests: "Reading passages fast and answering using only the information given.",
    myth: "“I read a lot, I'll be fine.” It rewards speed and resisting assumptions — not vocabulary.",
  },
  DM: {
    name: "Decision Making", abbr: "DM", color: "#C77DFF",
    q: 35, min: 37, sec: 63,
    tests: "Logic: syllogisms, puzzles, Venn diagrams, probability and argument strength.",
    myth: "“More seconds per question means it's easier.” It carries the heaviest reasoning load of any section.",
  },
  QR: {
    name: "Quantitative Reasoning", abbr: "QR", color: "#2DD4BF",
    q: 36, min: 26, sec: 43,
    tests: "Interpreting data and applied arithmetic — with a slow on-screen calculator.",
    myth: "“I'm good at maths.” It's about reading data fast and setting up the sum, not hard maths.",
  },
  SJT: {
    name: "Situational Judgement", abbr: "SJT", color: "#F3BE43",
    q: 69, min: 26, sec: 23,
    tests: "Judging how appropriate or important responses are in healthcare scenarios.",
    myth: "“Just use common sense.” It's calibrated against expert consensus and reported separately.",
  },
};
const TOTAL_Q = Object.values(SECTIONS).reduce((s, x) => s + x.q, 0); // 184

interface Question {
  sec: string;
  passage?: string;
  context?: string;
  prompt: string;
  statement?: string;
  options: string[];
  answer: number;
  explain: string;
}

// All questions original, written in the UCAT style.
const QUESTIONS: Question[] = [
  {
    sec: "VR",
    passage:
      "The Kestrel Ridge wind farm began operating in 2019 with 40 turbines. In its first year it produced enough electricity to power around 22,000 homes. A community fund, financed by 1.5% of the farm's annual revenue, distributes grants to nearby towns each December. In 2023 the operator announced a second stage that would add 25 turbines by 2026.",
    prompt: "Based on the passage, is the following statement true, false, or can't tell?",
    statement: "The Kestrel Ridge wind farm powered more than 22,000 homes in 2020.",
    options: ["True", "False", "Can't tell"],
    answer: 2,
    explain:
      "The passage gives output only for the first year (2019) — “around 22,000 homes.” It says nothing about 2020, which could be higher or lower. With no information given, the answer is Can't tell. Assuming the figure carries forward is the classic VR trap.",
  },
  {
    sec: "DM",
    prompt:
      "All second-year radiography students at Northbridge complete a placement at St Aldwyn's Hospital. No one who completes a placement at St Aldwyn's may also work a paid shift there in the same semester. Priya is a second-year radiography student at Northbridge this semester.",
    statement: "Which conclusion follows logically?",
    options: [
      "Priya may work a paid shift at St Aldwyn's this semester.",
      "Priya cannot work a paid shift at St Aldwyn's this semester.",
      "Priya is not doing a placement this semester.",
      "Priya works a paid shift somewhere other than St Aldwyn's.",
    ],
    answer: 1,
    explain:
      "Chain the rules: second-year ⇒ placement at St Aldwyn's; placement there ⇒ no paid shift there this semester. So Priya cannot. Option 3 contradicts the first rule; option 4 is unsupported (we know nothing about other jobs).",
  },
  {
    sec: "QR",
    context: "A hospital emergency department recorded 4,200 presentations in 2022 and 4,830 in 2023.",
    prompt: "What was the percentage increase in presentations from 2022 to 2023?",
    options: ["12%", "13%", "15%", "630%"],
    answer: 2,
    explain:
      "Percentage change = increase ÷ original × 100. The increase is 4,830 − 4,200 = 630, so 630 ÷ 4,200 = 0.15 = 15%. The 630 option is the raw increase, not a percentage — an easy grab under time pressure.",
  },
  {
    sec: "VR",
    passage:
      "Ferns in the Dalby Gorge reserve are monitored by volunteers who record leaf counts each spring. The reserve bans dogs year-round. Since 2018, three new fern species have been identified there, two of them previously thought to grow only in tropical regions.",
    prompt: "Based on the passage, is the following statement true, false, or can't tell?",
    statement: "All three fern species identified since 2018 were previously believed to grow only in tropical regions.",
    options: ["True", "False", "Can't tell"],
    answer: 1,
    explain:
      "The passage says two of the three were previously thought tropical-only — so “all three” is directly contradicted. Because the text gives you enough to reject it, the answer is False, not Can't tell.",
  },
  {
    sec: "DM",
    prompt:
      "Four registrars — Wu, Xavier, Yun and Zade — are each on call on one of four consecutive nights, Monday to Thursday. Wu is on call earlier in the week than Yun. Xavier is on call on Wednesday. Zade is not on call on Monday.",
    statement: "Who is on call on Monday?",
    options: ["Wu", "Xavier", "Yun", "Zade"],
    answer: 0,
    explain:
      "Xavier is Wednesday, so not Monday. Zade is ruled out of Monday. Yun can't be Monday because Wu must be earlier than Yun, and nothing is earlier than Monday. That leaves Wu on Monday.",
  },
  {
    sec: "QR",
    context: "A 500 mL bag of IV fluid is set to infuse over 4 hours through a giving set that delivers 20 drops per mL.",
    prompt: "Approximately how many drops per minute is that?",
    options: ["21 drops/min", "42 drops/min", "125 drops/min", "250 drops/min"],
    answer: 1,
    explain:
      "Total drops = 500 mL × 20 drops/mL = 10,000 drops. Over 4 hours = 240 minutes, that's 10,000 ÷ 240 ≈ 42 drops per minute. Two steps, one slow calculator, ~43 seconds — that's QR.",
  },
];

interface Result { sec: string; correct: boolean; inTime: boolean; answered: boolean }

function Timer({ frac, seconds }: { frac: number; seconds: number }) {
  const low = frac <= 0.25;
  return (
    <div className="ttg-timer">
      <span className="ttg-timer-num" style={{ color: low ? "#E98A8A" : "#F3BE43" }} aria-live="polite">
        {Math.ceil(seconds)}<span className="ttg-timer-s">s</span>
      </span>
      <div className="ttg-timer-track">
        <div className="ttg-timer-fill" style={{ width: `${frac * 100}%`, background: low ? "#E05A5A" : "#F3BE43" }} />
      </div>
    </div>
  );
}

function Gauntlet() {
  const [screen, setScreen] = useState<"intro" | "question" | "reveal" | "summary">("intro");
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [timedOut, setTimedOut] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [results, setResults] = useState<Result[]>([]);
  const lock = useRef(false);

  const q = QUESTIONS[qIndex];
  const sec = q ? SECTIONS[q.sec] : null;

  function startQuestion(idx: number) {
    lock.current = false;
    setQIndex(idx);
    setSelected(null);
    setTimedOut(false);
    setTimeLeft(SECTIONS[QUESTIONS[idx].sec].sec);
    setScreen("question");
  }

  function finish(choice: number | null) {
    if (lock.current) return;
    lock.current = true;
    const correct = choice === q.answer;
    const inTime = choice !== null && timeLeft > 0;
    setSelected(choice);
    setTimedOut(choice === null);
    setResults((r) => [...r, { sec: q.sec, correct, inTime, answered: choice !== null }]);
    setScreen("reveal");
  }

  // Countdown driver
  useEffect(() => {
    if (screen !== "question") return;
    if (timeLeft <= 0) { finish(null); return; }
    const id = setTimeout(() => setTimeLeft((t) => Math.max(0, Math.round((t - 0.1) * 10) / 10)), 100);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen, timeLeft]);

  // Keyboard answer selection (A–D or 1–4) — real UCAT lets you keep hands on keys
  useEffect(() => {
    if (screen !== "question") return;
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      let idx = -1;
      if (k >= "1" && k <= "9") idx = parseInt(k, 10) - 1;
      else if (k >= "a" && k <= "z") idx = k.charCodeAt(0) - 97;
      if (idx >= 0 && idx < q.options.length) { e.preventDefault(); finish(idx); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen, qIndex]);

  function restart() {
    setResults([]);
    lock.current = false;
    setScreen("intro");
  }

  const correctCount = results.filter((r) => r.correct).length;
  const inTimeCount = results.filter((r) => r.inTime).length;

  return (
    <div className="ttg">
      <style>{css}</style>

      <header className="ttg-head">
        <div className="ttg-brand">
          <Image className="ttg-crest-img" src="/logo-icon.png" alt="" width={22} height={22} aria-hidden="true" />
          <span className="ttg-wordmark">TITANIUM TUTORING</span>
        </div>
        <span className="ttg-eyebrow">UCAT · 2026</span>
      </header>

      {/* INTRO */}
      {screen === "intro" && (
        <div className="ttg-intro">
          <h1 className="ttg-title">The UCAT Gauntlet</h1>
          <p className="ttg-lead">
            Most people think they can wing the UCAT. Six questions — each on the <em>real</em> clock
            the actual test gives you. See how it feels before you decide how to prepare.
          </p>
          <div className="ttg-facts">
            {Object.values(SECTIONS).map((s) => (
              <div className="ttg-fact" key={s.abbr}>
                <span className="ttg-fact-dot" style={{ background: s.color }} />
                <span className="ttg-fact-ab">{s.abbr}</span>
                <span className="ttg-fact-sec">{s.sec}s / question</span>
              </div>
            ))}
          </div>
          <button className="ttg-btn ttg-btn--go" onClick={() => startQuestion(0)}>
            Start the gauntlet →
          </button>
          <p className="ttg-note">6 original questions in the UCAT style · ~4 minutes · no sign-up</p>
        </div>
      )}

      {/* QUESTION */}
      {screen === "question" && sec && (
        <div className="ttg-q">
          <div className="ttg-q-bar">
            <span className="ttg-badge" style={{ background: sec.color }}>{sec.abbr}</span>
            <span className="ttg-q-count">Question {qIndex + 1} of {QUESTIONS.length}</span>
            <span className="ttg-q-name">{sec.name}</span>
          </div>

          <Timer frac={timeLeft / sec.sec} seconds={timeLeft} />

          {q.passage && <p className="ttg-passage">{q.passage}</p>}
          {q.context && <p className="ttg-context">{q.context}</p>}
          <p className="ttg-prompt">{q.prompt}</p>
          {q.statement && <p className="ttg-statement">“{q.statement}”</p>}

          <div className="ttg-options">
            {q.options.map((opt, i) => (
              <button key={i} className="ttg-opt" onClick={() => finish(i)}>
                <span className="ttg-opt-key">{String.fromCharCode(65 + i)}</span>
                <span>{opt}</span>
              </button>
            ))}
          </div>
          <p className="ttg-kbd-hint">Tip: press <kbd>A</kbd>–<kbd>{String.fromCharCode(64 + q.options.length)}</kbd> or <kbd>1</kbd>–<kbd>{q.options.length}</kbd> to answer.</p>
        </div>
      )}

      {/* REVEAL */}
      {screen === "reveal" && sec && (
        <div className="ttg-reveal">
          <div className="ttg-verdict">
            {timedOut ? (
              <span className="ttg-verdict-tag ttg-vt--out">⏱ Time&apos;s up</span>
            ) : selected === q.answer ? (
              <span className="ttg-verdict-tag ttg-vt--right">✓ Correct</span>
            ) : (
              <span className="ttg-verdict-tag ttg-vt--wrong">✗ Not quite</span>
            )}
            <span className="ttg-badge" style={{ background: sec.color }}>{sec.abbr}</span>
          </div>

          {q.statement && <p className="ttg-statement ttg-statement--sm">“{q.statement}”</p>}

          <div className="ttg-answers">
            {q.options.map((opt, i) => {
              const isAns = i === q.answer;
              const isPick = i === selected;
              return (
                <div key={i} className={`ttg-ans ${isAns ? "is-correct" : ""} ${isPick && !isAns ? "is-wrong" : ""}`}>
                  <span className="ttg-opt-key">{String.fromCharCode(65 + i)}</span>
                  <span>{opt}</span>
                  {isAns && <span className="ttg-ans-tag">correct</span>}
                  {isPick && !isAns && <span className="ttg-ans-tag ttg-ans-tag--x">your pick</span>}
                </div>
              );
            })}
          </div>

          <p className="ttg-explain">{q.explain}</p>

          <div className="ttg-reality" style={{ borderColor: sec.color }}>
            <span className="ttg-reality-h">The reality</span>
            <p>
              That was one question. The real <strong>{sec.name}</strong> section gives you{" "}
              <strong>{sec.q} questions in {sec.min} minutes</strong> — about <strong>{sec.sec} seconds each</strong>,
              with no going back once the section clock runs out.
            </p>
          </div>

          {qIndex < QUESTIONS.length - 1 ? (
            <button className="ttg-btn" onClick={() => startQuestion(qIndex + 1)}>Next question →</button>
          ) : (
            <button className="ttg-btn ttg-btn--go" onClick={() => setScreen("summary")}>See your result →</button>
          )}
        </div>
      )}

      {/* SUMMARY */}
      {screen === "summary" && (
        <div className="ttg-summary">
          <h2 className="ttg-sum-title">
            You got <span className="ttg-hl">{correctCount}/{QUESTIONS.length}</span> right —
            and only <span className="ttg-hl">{inTimeCount}</span> in time.
          </h2>
          <p className="ttg-sum-lead">
            You just did 6 questions. The real UCAT is <strong>{TOTAL_Q} questions in under two hours</strong>,
            with a hard timer on every section and no negative marking. This is a stamina-and-speed test —
            not an IQ test, and not something you cram in a weekend.
          </p>

          <div className="ttg-table">
            <div className="ttg-tr ttg-tr--head">
              <span>Section</span><span>Questions</span><span>Time</span><span>Per Q</span>
            </div>
            {Object.values(SECTIONS).map((s) => (
              <div className="ttg-tr" key={s.abbr}>
                <span><span className="ttg-fact-dot" style={{ background: s.color }} /> {s.name}</span>
                <span>{s.q}</span><span>{s.min} min</span><span>{s.sec}s</span>
              </div>
            ))}
          </div>

          <div className="ttg-good">
            <span className="ttg-good-h">The good news — it&apos;s trainable</span>
            <ul className="ttg-list">
              <li>Start <strong>3–4 months out</strong>, not two weeks. Speed at this level is built, not summoned.</li>
              <li>Learn a <strong>repeatable method for each question type</strong> before you chase speed.</li>
              <li>Drill in <strong>timed conditions</strong> from early — untimed practice teaches the wrong habits.</li>
              <li><strong>Review every mistake</strong> to find the pattern; that&apos;s where the score actually moves.</li>
              <li>Build stamina with <strong>full-length mocks</strong> so two hours of focus feels normal.</li>
              <li>Master the <strong>“flag and move on”</strong> discipline — top scorers aren&apos;t the most thorough.</li>
            </ul>
          </div>

          <div className="ttg-cta">
            <button className="ttg-btn" onClick={restart}>↺ Run it again</button>
            <span className="ttg-cta-line">Want a real plan? Titanium builds one around your timeline.</span>
          </div>

          <p className="ttg-src">
            Structure &amp; timing: 2026 UCAT ANZ. Always verify at{" "}
            <a href="https://www.ucat.edu.au" target="_blank" rel="noreferrer">ucat.edu.au</a>. Questions are original, UCAT-style practice.
          </p>
        </div>
      )}

      <footer className="ttg-foot">
        <span>Per aspera ad astra · Titanium Tutoring</span>
      </footer>
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
          { label: "The UCAT Gauntlet" },
        ]} />
        <Gauntlet />
      </div>
      <MedToolFooter current="gauntlet" />
    </>
  );
}

const css = `
.ttg{
  --gold:#F3BE43; --ink:#EEF1FA; --muted:#9AA4CE;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  color:var(--ink);
  background:
    radial-gradient(1100px 560px at 85% -12%, rgba(243,190,67,0.10), transparent 60%),
    linear-gradient(160deg, #0A1A5C 0%, #081E6D 42%, #050F35 100%);
  padding:26px 22px 18px; border-radius:18px; max-width:760px; margin:0 auto;
  box-shadow:0 30px 80px -30px rgba(0,0,0,0.6);
}
.ttg *{box-sizing:border-box;}
.ttg-head{display:flex; justify-content:space-between; align-items:center; margin-bottom:22px;}
.ttg-brand{display:flex; align-items:center; gap:9px;}
.ttg-crest-img{display:block; object-fit:contain;}
.ttg-wordmark{font-weight:800; letter-spacing:2.5px; font-size:13px; font-family:"Sifonn Pro","Arial Black",system-ui,sans-serif;}
.ttg-eyebrow{color:var(--muted); font-size:11px; letter-spacing:1.5px; text-transform:uppercase;}

.ttg-btn{cursor:pointer; font-size:15px; font-weight:700; color:var(--ink);
  background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.14);
  border-radius:12px; padding:13px 22px; transition:background .18s, transform .1s;}
.ttg-btn:hover{background:rgba(255,255,255,0.12);}
.ttg-btn:active{transform:translateY(1px);}
.ttg-btn:focus-visible{outline:2px solid var(--gold); outline-offset:2px;}
.ttg-btn--go{background:var(--gold); color:#0A1440; border-color:var(--gold);}
.ttg-btn--go:hover{background:#f6cb63;}

/* INTRO */
.ttg-intro{text-align:center; padding:12px 4px 8px;}
.ttg-title{font-size:40px; line-height:1.02; margin:0 0 14px; font-family:"Sifonn Pro","Arial Black",system-ui,sans-serif; font-weight:800; letter-spacing:-1px;}
.ttg-lead{color:#CBD2EE; font-size:16px; line-height:1.55; max-width:520px; margin:0 auto 24px;}
.ttg-lead em{color:var(--gold); font-style:normal;}
.ttg-facts{display:flex; flex-wrap:wrap; justify-content:center; gap:10px 14px; margin-bottom:26px;}
.ttg-fact{display:flex; align-items:center; gap:7px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.09); border-radius:20px; padding:6px 13px;}
.ttg-fact-dot{width:9px; height:9px; border-radius:3px; flex:none;}
.ttg-fact-ab{font-weight:800; font-size:12px;}
.ttg-fact-sec{font-size:12px; color:var(--muted); font-variant-numeric:tabular-nums;}
.ttg-note{color:var(--muted); font-size:12px; margin:16px 0 0;}

/* QUESTION */
.ttg-q-bar{display:flex; align-items:center; gap:10px; margin-bottom:14px;}
.ttg-badge{font-size:12px; font-weight:800; color:#0A1440; padding:3px 9px; border-radius:6px; letter-spacing:.5px;}
.ttg-q-count{font-size:12px; color:var(--muted); font-weight:600;}
.ttg-q-name{font-size:12px; color:var(--muted); margin-left:auto;}

.ttg-timer{display:flex; align-items:center; gap:12px; margin-bottom:20px;}
.ttg-timer-num{font-size:26px; font-weight:800; font-variant-numeric:tabular-nums; font-family:"Sifonn Pro","Arial Black",system-ui,sans-serif; min-width:52px;}
.ttg-timer-s{font-size:13px; color:var(--muted); font-weight:600; margin-left:1px;}
.ttg-timer-track{flex:1; height:8px; border-radius:5px; background:rgba(255,255,255,0.10); overflow:hidden;}
.ttg-timer-fill{height:100%; border-radius:5px; transition:width .1s linear;}

.ttg-passage,.ttg-context{font-size:14.5px; line-height:1.6; color:#D7DcF2; background:rgba(255,255,255,0.045); border:1px solid rgba(255,255,255,0.08); border-radius:12px; padding:14px 16px; margin:0 0 16px;}
.ttg-context{color:#CBD2EE;}
.ttg-prompt{font-size:16px; font-weight:600; line-height:1.5; margin:0 0 6px;}
.ttg-statement{font-size:16px; line-height:1.5; margin:0 0 16px; color:var(--gold); font-weight:600;}
.ttg-statement--sm{font-size:14px; margin-bottom:14px;}

.ttg-options{display:flex; flex-direction:column; gap:9px;}
.ttg-opt{display:flex; align-items:center; gap:12px; text-align:left; cursor:pointer;
  background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.11); color:var(--ink);
  border-radius:12px; padding:14px 15px; font-size:15px; transition:background .15s, border-color .15s, transform .08s;}
.ttg-opt:hover{background:rgba(243,190,67,0.10); border-color:rgba(243,190,67,0.4);}
.ttg-opt:active{transform:translateY(1px);}
.ttg-opt:focus-visible{outline:2px solid var(--gold); outline-offset:2px;}
.ttg-opt-key{flex:none; width:26px; height:26px; border-radius:7px; background:rgba(255,255,255,0.10); display:grid; place-items:center; font-weight:800; font-size:13px;}
.ttg-kbd-hint{font-size:11.5px; color:var(--muted); margin:12px 0 0; text-align:center;}
.ttg-kbd-hint kbd{font-family:ui-monospace,SFMono-Regular,Menlo,monospace; font-size:11px; background:rgba(255,255,255,0.10); border:1px solid rgba(255,255,255,0.18); border-radius:5px; padding:1px 6px; color:#E4E9FB;}

/* REVEAL */
.ttg-verdict{display:flex; align-items:center; gap:10px; margin-bottom:16px;}
.ttg-verdict-tag{font-size:15px; font-weight:800; padding:5px 12px; border-radius:8px;}
.ttg-vt--right{background:rgba(105,209,150,0.16); color:#7ED9A6;}
.ttg-vt--wrong{background:rgba(224,110,110,0.16); color:#E98A8A;}
.ttg-vt--out{background:rgba(243,190,67,0.16); color:var(--gold);}
.ttg-answers{display:flex; flex-direction:column; gap:8px; margin-bottom:16px;}
.ttg-ans{display:flex; align-items:center; gap:12px; padding:12px 15px; border-radius:11px; font-size:15px;
  background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08);}
.ttg-ans.is-correct{background:rgba(105,209,150,0.12); border-color:rgba(105,209,150,0.5);}
.ttg-ans.is-wrong{background:rgba(224,110,110,0.10); border-color:rgba(224,110,110,0.45);}
.ttg-ans-tag{margin-left:auto; font-size:10.5px; font-weight:700; text-transform:uppercase; letter-spacing:.5px; color:#7ED9A6;}
.ttg-ans-tag--x{color:#E98A8A;}
.ttg-explain{font-size:14.5px; line-height:1.6; color:#CBD2EE; margin:0 0 16px;}
.ttg-reality{background:rgba(255,255,255,0.04); border-left:3px solid var(--gold); border-radius:8px; padding:13px 15px; margin:0 0 20px;}
.ttg-reality-h{font-size:11px; letter-spacing:1.4px; text-transform:uppercase; color:var(--muted); font-weight:700;}
.ttg-reality p{font-size:14px; line-height:1.55; margin:6px 0 0; color:#D7DcF2;}

/* SUMMARY */
.ttg-sum-title{font-size:26px; line-height:1.2; margin:4px 0 12px; font-family:"Sifonn Pro","Arial Black",system-ui,sans-serif; font-weight:800;}
.ttg-hl{color:var(--gold);}
.ttg-sum-lead{font-size:15px; line-height:1.6; color:#CBD2EE; margin:0 0 22px;}
.ttg-table{border:1px solid rgba(255,255,255,0.09); border-radius:12px; overflow:hidden; margin-bottom:22px;}
.ttg-tr{display:grid; grid-template-columns:2fr 1fr 1fr 1fr; padding:11px 14px; font-size:13.5px; align-items:center; border-top:1px solid rgba(255,255,255,0.07);}
.ttg-tr span:first-child{display:flex; align-items:center; gap:8px;}
.ttg-tr span:not(:first-child){font-variant-numeric:tabular-nums; color:#CBD2EE;}
.ttg-tr--head{border-top:none; background:rgba(255,255,255,0.04); font-size:11px; text-transform:uppercase; letter-spacing:1px; color:var(--muted); font-weight:700;}
.ttg-tr--head span:not(:first-child){color:var(--muted);}
.ttg-good-h{font-size:13px; font-weight:800; color:var(--gold); text-transform:uppercase; letter-spacing:1px;}
.ttg-list{margin:12px 0 0; padding-left:20px;}
.ttg-list li{font-size:14.5px; line-height:1.6; color:#D7DcF2; margin-bottom:8px;}
.ttg-cta{display:flex; align-items:center; gap:14px; flex-wrap:wrap; margin:24px 0 16px; padding-top:18px; border-top:1px solid rgba(255,255,255,0.09);}
.ttg-cta-line{font-size:13.5px; color:var(--muted);}
.ttg-src{font-size:11.5px; color:var(--muted); line-height:1.5; margin:0;}
.ttg-src a{color:var(--gold); text-decoration:none; border-bottom:1px solid rgba(243,190,67,0.3);}

.ttg-foot{margin-top:18px; padding-top:14px; border-top:1px solid rgba(255,255,255,0.09); font-size:11px; letter-spacing:1px; text-transform:uppercase; color:var(--muted);}

@media (max-width:640px){
  .ttg-title{font-size:32px;}
  .ttg-tr{grid-template-columns:1.6fr 1fr 1fr 1fr; font-size:12.5px;}
}
@media (prefers-reduced-motion: reduce){ .ttg-timer-fill{transition:none;} }
`;
