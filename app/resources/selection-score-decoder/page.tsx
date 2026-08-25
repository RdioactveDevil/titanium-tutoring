"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import Breadcrumb from "@/app/components/Breadcrumb";
import MedToolFooter from "@/app/components/MedToolFooter";

/**
 * Titanium Tutoring — Selection Score Decoder
 * Reveals how ATAR + UCAT + interview combine into a medicine selection outcome
 * across every Australian direct-entry program, and where a student's effort
 * pays off most for the school they're targeting.
 *
 * Illustrative model, not a prediction. Exact scaling is NOT published by most
 * schools — this models the LOGIC and trade-offs. Verify current figures every
 * cycle on official pages.
 */

type PillarKey = "a" | "u" | "i";

interface Uni {
  name: string;
  short: string;
  state: string;
  course: string;
  places: string | null;
  hurdle: number;
  hasUCAT: boolean;
  hasInterview: boolean;
  gateBy: string;
  disclosed: boolean;
  thresholdATAR: boolean;
  extra: string | null;
  w: Record<PillarKey, number>;
  flags: string[];
  note: string;
}

const UNIS: Record<string, Uni> = {
  // ---- SA (priority) ----
  adelaide: {
    name: "Adelaide University", short: "Adelaide", state: "SA", course: "BMedSt/MD",
    places: "136", hurdle: 90, hasUCAT: true, hasInterview: true, gateBy: "ucat",
    disclosed: true, thresholdATAR: false, extra: null, w: { a: 0.4, u: 0.2, i: 0.4 },
    flags: ["SA priority"],
    note: "Verified: final offer 40% academic · 20% UCAT · 40% interview. Interview invites are ranked on UCAT cognitive sections only, after you clear ATAR 90. No subject bonus for medicine — only the Universities Equity Scheme (up to 5 pts) applies.",
  },
  flinders: {
    name: "Flinders University", short: "Flinders", state: "SA", course: "BClinSci/MD",
    places: null, hurdle: 95, hasUCAT: true, hasInterview: false, gateBy: "atar",
    disclosed: true, thresholdATAR: false, extra: null, w: { a: 0.9, u: 0.1, i: 0 },
    flags: ["No interview"],
    note: "Academic-dominant with a small UCAT weighting and NO interview. Progression to the MD depends on maintaining GPA. Illustrative — verify on Flinders admissions.",
  },
  // ---- VIC ----
  monash: {
    name: "Monash University", short: "Monash", state: "VIC", course: "BMedSc/MD",
    places: null, hurdle: 90, hasUCAT: true, hasInterview: true, gateBy: "ucat",
    disclosed: true, thresholdATAR: false, extra: null, w: { a: 0.34, u: 0.33, i: 0.33 },
    flags: [],
    note: "Roughly even thirds (ATAR / UCAT / interview) at final offer; UCAT does about half the work for the interview invite. Chemistry + English prerequisites. Illustrative — verify on Monash.",
  },
  // ---- NSW / ACT ----
  unsw: {
    name: "UNSW Sydney", short: "UNSW", state: "NSW", course: "BMed/MD",
    places: null, hurdle: 96, hasUCAT: true, hasInterview: true, gateBy: "ucat_atar",
    disclosed: true, thresholdATAR: false, extra: "Portfolio (unscored)", w: { a: 0.33, u: 0.33, i: 0.34 },
    flags: ["Process changing 2027–28"],
    note: "A true three-pillar school — roughly equal ATAR / UCAT / interview. ATAR floor is 96 but ALSO counts in the final rank, so effort past the minimum still matters here (unusual). A program redesign is underway and the application portal is being discontinued. Verify on UNSW.",
  },
  usyd: {
    name: "University of Sydney", short: "USyd (DDMP)", state: "NSW", course: "Double Degree Medicine",
    places: null, hurdle: 99.95, hasUCAT: false, hasInterview: true, gateBy: "atar_interview",
    disclosed: true, thresholdATAR: true, extra: null, w: { a: 0, u: 0, i: 1.0 },
    flags: ["No UCAT", "ATAR 99.95"],
    note: "The '99.95 club': entry rests on a near-perfect ATAR plus interview, with no UCAT and very few places. Verify on USyd.",
  },
  wsucsu: {
    name: "Western Sydney / Charles Sturt JMP", short: "WSU/CSU", state: "NSW", course: "Joint Program in Medicine",
    places: null, hurdle: 95.5, hasUCAT: true, hasInterview: true, gateBy: "ucat",
    disclosed: true, thresholdATAR: true, extra: null, w: { a: 0, u: 0.25, i: 0.75 },
    flags: ["Interview-heavy"],
    note: "ATAR is a HURDLE only (95.5, or 93.5 for Greater Western Sydney). Final = 25% UCAT + 75% interview, and their UCAT formula weights Verbal Reasoning heavily. A strong communicator's best shot. Verify on the JMP page.",
  },
  newcastle: {
    name: "Newcastle / New England JMP", short: "Newcastle JMP", state: "NSW", course: "BMedSc/MD",
    places: "~170", hurdle: 94.3, hasUCAT: true, hasInterview: true, gateBy: "ucat",
    disclosed: false, thresholdATAR: true, extra: "PQA (written)", w: { a: 0, u: 0.4, i: 0.6 },
    flags: ["Rewards all-rounders"],
    note: "ATAR 94.3 (rural ~85–91.4) is a threshold only. UCAT cognitive ranks you for the assessment; the final offer combines UCAT, a written Personal Qualities Assessment and an MMI. SJT is excluded. Rewards a balanced profile over a UCAT maximiser. Weighting not officially published. Verify on the JMP page.",
  },
  // ---- QLD ----
  uq: {
    name: "University of Queensland", short: "UQ (provisional)", state: "QLD", course: "Provisional MD",
    places: null, hurdle: 95, hasUCAT: true, hasInterview: false, gateBy: "atar",
    disclosed: false, thresholdATAR: false, extra: null, w: { a: 0.6, u: 0.4, i: 0 },
    flags: ["No interview at entry"],
    note: "Provisional-entry places for school leavers on ATAR (min 95, competitive ~98.8) + UCAT, with no interview at the school-leaver stage. You then complete a UQ bachelor and progress to the MD via GPA and a GAMSAT threshold. Exact weighting not published. Verify on UQ.",
  },
  jcu: {
    name: "James Cook University", short: "JCU", state: "QLD", course: "MBBS",
    places: "~200", hurdle: 95, hasUCAT: false, hasInterview: true, gateBy: "atar",
    disclosed: false, thresholdATAR: false, extra: "Written application", w: { a: 0.7, u: 0, i: 0.3 },
    flags: ["No UCAT", "Rural/remote focus"],
    note: "No UCAT and no ATAR adjustment schemes. Selection weighs your whole academic record plus a written application about rural/remote and Indigenous-health intent, then interview. Built for students genuinely committed to regional practice. Prereqs: English, Maths Methods, Chemistry. Verify on JCU / QTAC.",
  },
  bond: {
    name: "Bond University", short: "Bond", state: "QLD", course: "BMedSt/MD (4y 8m)",
    places: "~180", hurdle: 96, hasUCAT: false, hasInterview: true, gateBy: "psychometric",
    disclosed: true, thresholdATAR: true, extra: "Psychometric test", w: { a: 0, u: 0, i: 1.0 },
    flags: ["No UCAT", "Full-fee"],
    note: "Private, full-fee, accelerated. ATAR ~96 only gates a psychometric test (about half of applicants proceed); the FINAL offer is 100% interview. Latest application deadline in the country — you can apply after ATAR results. Verify on Bond / QTAC.",
  },
  griffith: {
    name: "Griffith University / UniSC", short: "Griffith/UniSC", state: "QLD", course: "BMedSc → Griffith MD (provisional)",
    places: "~80", hurdle: 99.9, hasUCAT: true, hasInterview: false, gateBy: "atar",
    disclosed: true, thresholdATAR: false, extra: null, w: { a: 0.95, u: 0.05, i: 0 },
    flags: ["No interview", "ATAR 99.90"],
    note: "Selection is by academic rank — you need a 99.90 selection rank (small adjustments apply, max ~0.20). UCAT is optional and used only as a tie-breaker within an ATAR band; without a UCAT score you sit at the bottom of your band. No interview. Progress to the Griffith MD needs GPA 5.5. Offered at Griffith (Gold Coast / Nathan) and UniSC (Sunshine Coast). Verify on Griffith / UniSC / QTAC.",
  },
  // ---- WA ----
  uwa: {
    name: "University of Western Australia", short: "UWA", state: "WA", course: "BBiomed(Spec) → MD",
    places: "~103", hurdle: 98, hasUCAT: true, hasInterview: true, gateBy: "ucat",
    disclosed: true, thresholdATAR: false, extra: null, w: { a: 0.3, u: 0.2, i: 0.5 },
    flags: ["Interview-heavy", "WA preference"],
    note: "Direct Pathway via the Bachelor of Biomedicine. Final ranking 30% ATAR · 20% UCAT · 50% interview (metro min ATAR ~98–99). Progress to the MD needs GPA 5.5. Heavily prefers WA applicants. Verify on UWA.",
  },
  curtin: {
    name: "Curtin University", short: "Curtin", state: "WA", course: "B-MBBS",
    places: null, hurdle: 95, hasUCAT: true, hasInterview: true, gateBy: "casper",
    disclosed: true, thresholdATAR: false, extra: "CASPer", w: { a: 0.4, u: 0.2, i: 0.4 },
    flags: ["Uses CASPer"],
    note: "WA's only direct-entry undergrad medical degree. Interview invite = ATAR 35% + CASPer 35% + UCAT 30%; final offer = ATAR 40% + MMI 40% + UCAT 20%. Chemistry prerequisite. Verify on Curtin.",
  },
  // ---- NT ----
  cdu: {
    name: "Charles Darwin University", short: "Charles Darwin", state: "NT", course: "BClinSci → Flinders NTMP",
    places: "12", hurdle: 90, hasUCAT: true, hasInterview: false, gateBy: "atar",
    disclosed: true, thresholdATAR: false, extra: null, w: { a: 0.9, u: 0.1, i: 0 },
    flags: ["No interview", "NT / Indigenous quotas"],
    note: "The NT pathway (via SATAC): offers are ranked on ATAR 90% + a UCAT-derived score 10%, min ATAR 90 (85 for Indigenous applicants), with no interview, feeding the Flinders NT Medical Program. Only 12 places across NT-resident and First Nations sub-quotas. Note CDU has also launched a separate 40-place Menzies BClinSciMed/MD (min ATAR 85, WITH interviews) — confirm which pathway you mean on CDU / SATAC.",
  },
  // ---- TAS ----
  utas: {
    name: "University of Tasmania", short: "UTAS", state: "TAS", course: "BMedSc/MD",
    places: null, hurdle: 95, hasUCAT: true, hasInterview: false, gateBy: "atar",
    disclosed: false, thresholdATAR: false, extra: null, w: { a: 0.85, u: 0.15, i: 0 },
    flags: ["No interview"],
    note: "Academic-primary, with UCAT as a secondary ranking factor and no interview — one of the more academically-driven pathways. Weighting not officially published. Illustrative — verify on UTAS.",
  },
};

const STATE_ORDER = ["SA", "VIC", "NSW", "QLD", "WA", "NT", "TAS"];
const ATAR_MIN = 85; // allow rural/JMP thresholds below 90
const ATAR_MAX = 99.95;
const PILLARS: PillarKey[] = ["a", "u", "i"];

function clamp(x: number, lo: number, hi: number) { return Math.max(lo, Math.min(hi, x)); }
function academicSub(atar: number) { return clamp(((atar - 90) / (ATAR_MAX - 90)) * 100, 0, 100); }
function interviewBand(v: number) {
  if (v <= 50) return "Below typical";
  if (v <= 70) return "Typical";
  if (v <= 88) return "Strong";
  return "Exceptional";
}

// Compact status used by the Compare view (mirrors the Stage-1 logic).
function computeStatus(uni: Uni, atar: number, ucat: number) {
  if (atar < uni.hurdle) return "hurdle";
  if (uni.gateBy === "psychometric") return "likely";
  if (uni.gateBy === "atar_interview") return atar >= 99.9 ? "likely" : "borderline";
  if (uni.gateBy === "atar") {
    const margin = atar - uni.hurdle;
    if (margin >= 2.5 || uni.hurdle >= 99.5) return "likely";
    if (margin >= 0.5) return "borderline";
    return "unlikely";
  }
  const bump = uni.gateBy === "casper" ? -3 : 0;
  if (ucat >= 90 + bump) return "likely";
  if (ucat >= 78 + bump) return "borderline";
  return "unlikely";
}

function fitScore(uni: Uni, atar: number, ucat: number, interview: number) {
  const w = uni.w;
  const aSub = academicSub(atar);
  const uSub = uni.hasUCAT ? ucat : 0;
  const iSub = uni.hasInterview ? interview : 0;
  const cA = w.a * aSub, cU = w.u * uSub, cI = w.i * iSub;
  return { cA, cU, cI, composite: cA + cU + cI };
}

function shortStatus(status: string, uni: Uni) {
  if (status === "hurdle") return "ATAR too low";
  if (status === "likely") return uni.hasInterview ? "In range" : "Competitive";
  if (status === "borderline") return "Borderline";
  return "Long shot";
}

function Decoder() {
  const [mode, setMode] = useState<"decode" | "compare">("decode");
  const [uniKey, setUniKey] = useState("adelaide");
  const [atar, setAtar] = useState(96.0);
  const [ucat, setUcat] = useState(75);
  const [interview, setInterview] = useState(65);

  const uni = UNIS[uniKey];
  const w = uni.w;

  const aSub = academicSub(atar);
  const uSub = uni.hasUCAT ? ucat : 0;
  const iSub = uni.hasInterview ? interview : 0;

  const cA = w.a * aSub;
  const cU = w.u * uSub;
  const cI = w.i * iSub;
  const composite = cA + cU + cI;

  const clearsHurdle = atar >= uni.hurdle;

  // ---- Stage 1: the gate ----
  let s1: { status: string; label: string; detail: string } = { status: "unlikely", label: "", detail: "" };
  if (!clearsHurdle) {
    s1 = {
      status: "hurdle",
      label: `ATAR below the ${uni.hurdle.toFixed(uni.hurdle % 1 ? 2 : 0)} minimum`,
      detail: "The door doesn't open here until you clear the ATAR threshold — nothing else counts before that.",
    };
  } else if (uni.gateBy === "psychometric") {
    s1 = {
      status: "likely",
      label: "You'd be invited to the psychometric test",
      detail: "ATAR only unlocks Bond's psychometric test — about half of eligible applicants go through. Your ATAR does no more work after this point; the offer is 100% interview.",
    };
  } else if (uni.gateBy === "atar_interview") {
    const clubbed = atar >= 99.9;
    s1 = {
      status: clubbed ? "likely" : "borderline",
      label: clubbed ? "In range for the '99.95 club'" : "Below the near-perfect ATAR needed",
      detail: "This pathway is almost entirely about a near-perfect ATAR plus interview. Without ~99.95, it's effectively closed.",
    };
  } else if (uni.gateBy === "atar") {
    const margin = atar - uni.hurdle;
    const strong = margin >= 2.5 || uni.hurdle >= 99.5; // clearing a 99.5+ rank is itself competitive
    const ok = margin >= 0.5;
    s1 = {
      status: strong ? "likely" : ok ? "borderline" : "unlikely",
      label: strong ? "Competitive on academics" : ok ? "In the mix" : "Only just over the line",
      detail: uni.hasInterview
        ? "A strong academic record (plus the written application) drives selection here — no UCAT involved."
        : "No interview and little/no UCAT — a strong, consistent ATAR does almost all the work.",
    };
  } else {
    // UCAT-driven gate (ucat / ucat_atar / casper)
    const bump = uni.gateBy === "casper" ? -3 : 0; // CASPer/ATAR share the load, so UCAT bar is a touch lower
    if (ucat >= 90 + bump) {
      s1 = { status: "likely", label: "Likely to rank for an interview", detail: gateDetail(uni, "high") };
    } else if (ucat >= 78 + bump) {
      s1 = { status: "borderline", label: "Borderline for an interview", detail: gateDetail(uni, "mid") };
    } else {
      s1 = { status: "unlikely", label: "Below the usual interview range", detail: gateDetail(uni, "low") };
    }
  }

  // ---- Stage 2 positioning (qualitative, never a probability) ----
  let band: { label: string; tone: string };
  if (composite >= 78) band = { label: "Within the competitive range", tone: "gold" };
  else if (composite >= 62) band = { label: "Borderline", tone: "amber" };
  else band = { label: "Below the typical successful profile", tone: "dim" };

  // ---- Lever analysis ----
  const trainability: Record<PillarKey, number> = { a: 0.5, u: 1.0, i: 1.0 };
  const meta: Record<PillarKey, { name: string; color: string; tip: string }> = {
    a: { name: "ATAR / academic", color: "#5B8DEF", tip: "Consistency, smart subjects, acceleration." },
    u: { name: "UCAT", color: "#2DD4BF", tip: "Months of timed practice + reviewing every mistake." },
    i: { name: "Interview", color: "#C77DFF", tip: "Practise out loud with a real person; structure over scripts." },
  };
  const subs: Record<PillarKey, number> = { a: aSub, u: uSub, i: iSub };
  const pillars = PILLARS.map((k) => {
    const weight = w[k];
    const headroom = (100 - subs[k]) / 100;
    return { key: k, ...meta[k], weight, sub: subs[k], lever: weight * headroom * trainability[k] };
  });
  const active = pillars.filter((p) => p.weight > 0);
  const maxLever = Math.max(...active.map((p) => p.lever), 0.0001);
  const ranked = [...active].sort((x, y) => y.lever - x.lever);

  let leverHero: React.ReactNode;
  if (!clearsHurdle) {
    leverHero = (<>Get your ATAR to the <strong style={{ color: "#F3BE43" }}>{uni.hurdle}</strong> threshold — nothing else counts until you clear it.</>);
  } else if (uni.thresholdATAR && ranked.length) {
    leverHero = (<>Your ATAR just needs to clear the bar here. Your biggest lever is <strong style={{ color: ranked[0].color }}>{ranked[0].name}</strong>.</>);
  } else if (ranked.length) {
    leverHero = (<>Your biggest lever right now: <strong style={{ color: ranked[0].color }}>{ranked[0].name}</strong>.</>);
  } else {
    leverHero = <>Clear the threshold and the rest follows.</>;
  }

  const groups = STATE_ORDER.map((st) => ({
    st,
    items: Object.entries(UNIS).filter(([, u]) => u.state === st),
  }));

  return (
    <div className="tt-decoder">
      <style>{css}</style>

      <header className="tt-head">
        <div className="tt-brand">
          <Image className="tt-crest-img" src="/logo-icon.png" alt="" width={24} height={24} aria-hidden="true" />
          <span className="tt-wordmark">TITANIUM TUTORING</span>
        </div>
        <span className="tt-eyebrow">Medicine Admissions</span>
      </header>

      <div className="tt-title-wrap">
        <h1 className="tt-title">The Selection Score Decoder</h1>
        <p className="tt-sub">
          A high ATAR alone doesn&apos;t get you in — and every school counts it differently.
          Pick a program, move the sliders, and see how the score is <em>actually</em> built.
        </p>
      </div>

      <div className="tt-mode" role="tablist" aria-label="View mode">
        <button role="tab" aria-selected={mode === "decode"} className={`tt-mode-btn ${mode === "decode" ? "is-on" : ""}`} onClick={() => setMode("decode")}>Decode one school</button>
        <button role="tab" aria-selected={mode === "compare"} className={`tt-mode-btn ${mode === "compare" ? "is-on" : ""}`} onClick={() => setMode("compare")}>Compare all 15</button>
      </div>

      {mode === "decode" && (<>
      {/* University selector grouped by state */}
      <div className="tt-unis" role="tablist" aria-label="Choose a program">
        {groups.map((g) => (
          <div className="tt-uni-group" key={g.st}>
            <span className="tt-uni-state">{g.st}</span>
            <div className="tt-uni-chips">
              {g.items.map(([key, u]) => (
                <button
                  key={key} role="tab" aria-selected={key === uniKey}
                  className={`tt-chip ${key === uniKey ? "is-on" : ""}`}
                  onClick={() => setUniKey(key)}
                >
                  {u.short}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* At-a-glance strip */}
      <div className="tt-glance">
        <div className="tt-glance-main">
          <span className="tt-glance-name">{uni.name}</span>
          <span className="tt-glance-course">{uni.course}</span>
        </div>
        <div className="tt-glance-facts">
          <Fact label="Min ATAR" value={uni.hurdle.toFixed(uni.hurdle % 1 ? 2 : 0)} />
          <Fact label="UCAT" value={uni.hasUCAT ? "Yes" : "No"} off={!uni.hasUCAT} />
          <Fact label="Interview" value={uni.hasInterview ? "Yes" : "No"} off={!uni.hasInterview} />
          <Fact label="Extra" value={uni.extra || "—"} />
          {uni.places && <Fact label="Places" value={uni.places} />}
        </div>
      </div>
      {uni.flags.length > 0 && (
        <div className="tt-flags">
          {uni.flags.map((f) => <span className="tt-flag" key={f}>{f}</span>)}
          {!uni.disclosed && <span className="tt-flag tt-flag--warn">Weighting not officially published</span>}
        </div>
      )}

      <div className="tt-grid">
        {/* INPUTS */}
        <section className="tt-panel tt-inputs" aria-label="Your profile">
          <h2 className="tt-panel-h">Your profile</h2>

          <div className="tt-field">
            <div className="tt-field-top">
              <label htmlFor="atar">Predicted ATAR</label>
              <span className="tt-val" style={{ color: "#5B8DEF" }}>{atar.toFixed(2)}</span>
            </div>
            <input id="atar" type="range" min={ATAR_MIN} max={ATAR_MAX} step={0.05}
              value={atar} onChange={(e) => setAtar(parseFloat(e.target.value))} style={rangeStyle("#5B8DEF")} />
            <div className="tt-scale"><span>85.00</span><span>99.95</span></div>
            {uni.thresholdATAR && <p className="tt-microtip">Threshold only here — it clears the bar, but doesn&apos;t lift your rank.</p>}
          </div>

          <div className={`tt-field ${uni.hasUCAT ? "" : "is-disabled"}`}>
            <div className="tt-field-top">
              <label htmlFor="ucat">UCAT percentile</label>
              <span className="tt-val" style={{ color: "#2DD4BF" }}>{uni.hasUCAT ? `${ucat}th` : "N/A"}</span>
            </div>
            <input id="ucat" type="range" min={1} max={99} step={1} value={ucat} disabled={!uni.hasUCAT}
              onChange={(e) => setUcat(parseInt(e.target.value))} style={rangeStyle("#2DD4BF")} />
            <div className="tt-scale"><span>1st</span><span>99th · cognitive</span></div>
            {!uni.hasUCAT && <p className="tt-microtip">This school doesn&apos;t use the UCAT at all.</p>}
          </div>

          <div className={`tt-field ${uni.hasInterview ? "" : "is-disabled"}`}>
            <div className="tt-field-top">
              <label htmlFor="interview">Interview strength</label>
              <span className="tt-val" style={{ color: "#C77DFF" }}>
                {uni.hasInterview ? interviewBand(interview) : "No interview"}
              </span>
            </div>
            <input id="interview" type="range" min={0} max={100} step={1} value={interview} disabled={!uni.hasInterview}
              onChange={(e) => setInterview(parseInt(e.target.value))} style={rangeStyle("#C77DFF")} />
            <div className="tt-scale"><span>Below typical</span><span>Exceptional</span></div>
            {!uni.hasInterview && <p className="tt-microtip">No interview — good news if speaking under pressure isn&apos;t your strength.</p>}
          </div>

          <div className="tt-weights">
            <span className="tt-weights-h">Final-offer weighting</span>
            <div className="tt-weight-row">
              <WeightPip c="#5B8DEF" v={w.a} label="Academic" thresh={uni.thresholdATAR && w.a === 0} />
              <WeightPip c="#2DD4BF" v={w.u} label="UCAT" na={!uni.hasUCAT} />
              <WeightPip c="#C77DFF" v={w.i} label="Interview" na={!uni.hasInterview} />
            </div>
          </div>
        </section>

        {/* READOUT */}
        <section className="tt-readout" aria-label="Result">
          <div className={`tt-panel tt-stage tt-stage--${s1.status}`}>
            <div className="tt-stage-head">
              <span className="tt-stage-eyebrow">Stage 1 · The gate</span>
              <StageIcon status={s1.status} />
            </div>
            <h3 className="tt-stage-title">
              {uni.gateBy === "psychometric" ? "Do you reach the psychometric test?"
                : !uni.hasInterview ? "Do you rank on academics?"
                : "Do you get an interview?"}
            </h3>
            <p className="tt-stage-verdict">{s1.label}</p>
            <p className="tt-stage-detail">{s1.detail}</p>
          </div>

          <div className="tt-panel tt-stage2">
            <div className="tt-stage-head">
              <span className="tt-stage-eyebrow">Stage 2 · The final offer</span>
              <span className={`tt-band tt-band--${band.tone}`}>{band.label}</span>
            </div>
            <div className="tt-bar" role="img" aria-label={`Composite ${Math.round(composite)} of 100`}>
              {cA > 0 && <div className="tt-bar-seg" style={{ width: `${cA}%`, background: "#5B8DEF" }} />}
              {cU > 0 && <div className="tt-bar-seg" style={{ width: `${cU}%`, background: "#2DD4BF" }} />}
              {cI > 0 && <div className="tt-bar-seg" style={{ width: `${cI}%`, background: "#C77DFF" }} />}
              <div className="tt-bar-num">{Math.round(composite)}<span>/100</span></div>
            </div>
            <div className="tt-legend">
              {w.a > 0 && <LegendItem c="#5B8DEF" label="Academic" v={cA} />}
              {uni.hasUCAT && w.u > 0 && <LegendItem c="#2DD4BF" label="UCAT" v={cU} />}
              {uni.hasInterview && w.i > 0 && <LegendItem c="#C77DFF" label="Interview" v={cI} />}
            </div>
            <p className="tt-insight-line">{stage2Insight(uni)}</p>
          </div>

          <div className="tt-panel tt-lever">
            <span className="tt-stage-eyebrow">Where your next 100 hours pay off most</span>
            <p className="tt-lever-hero">{leverHero}</p>
            <div className="tt-lever-bars">
              {ranked.map((p) => (
                <div className="tt-lever-item" key={p.key}>
                  <div className="tt-lever-top">
                    <span style={{ color: p.color }}>{p.name}</span>
                    <span className="tt-lever-pct">{Math.round(p.weight * 100)}% of offer</span>
                  </div>
                  <div className="tt-lever-track">
                    <div className="tt-lever-fill" style={{ width: `${(p.lever / maxLever) * 100}%`, background: p.color }} />
                  </div>
                  <p className="tt-lever-tip">{p.tip}</p>
                </div>
              ))}
            </div>
            <p className="tt-lever-foot">Ranked by <em>weakest × most-trainable × highest-weighted</em> — the same logic the formula uses, pointed at your effort.</p>
          </div>
        </section>
      </div>
      </>)}

      {mode === "compare" && (
        <CompareSection atar={atar} ucat={ucat} interview={interview}
          setAtar={setAtar} setUcat={setUcat} setInterview={setInterview} />
      )}

      <footer className="tt-foot">
        <p className="tt-foot-note">
          <span className="tt-info">i</span>
          {mode === "decode"
            ? <span>Illustrative model, not a prediction. Most schools don&apos;t publish exact scaling and there are no official cut-offs — the sub-scores are a teaching proxy for how the levers interact. Figures change every cycle. <strong>{uni.short}:</strong> {uni.note}</span>
            : <span>Illustrative model, not a prediction. Bars show how your profile <strong>scores under each school&apos;s formula</strong> — how well your strengths fit what they reward, not your odds. Hurdles, undisclosed weightings and yearly changes still apply. Always verify on official pages.</span>}
        </p>
        <div className="tt-links">
          <span>Verify before you apply:</span>
          <a href="https://www.satac.edu.au" target="_blank" rel="noreferrer">SATAC</a>
          <a href="https://www.ucat.edu.au" target="_blank" rel="noreferrer">UCAT ANZ</a>
          <a href="https://www.uac.edu.au" target="_blank" rel="noreferrer">UAC</a>
          <a href="https://www.qtac.edu.au" target="_blank" rel="noreferrer">QTAC</a>
        </div>
        <p className="tt-motto">Per aspera ad astra · Titanium Tutoring</p>
      </footer>
    </div>
  );
}

function gateDetail(uni: Uni, level: "high" | "mid" | "low") {
  if (uni.gateBy === "casper")
    return level === "high"
      ? "Curtin ranks the interview invite on ATAR 35% + CASPer 35% + UCAT 30% — so a strong UCAT helps, but CASPer and ATAR share the load."
      : "Curtin blends ATAR, CASPer and UCAT for the invite — don't neglect the CASPer situational-judgement test.";
  if (uni.gateBy === "ucat_atar")
    return "UNSW ranks the interview invite on ATAR and UCAT together, with UCAT doing the heavy lifting — a rare school where a higher ATAR still helps you here.";
  if (uni.short === "WSU/CSU")
    return "The JMP formula weights Verbal Reasoning about double — a lopsided UCAT can still get you in if your VR is strong.";
  if (uni.short === "Newcastle JMP")
    return "UCAT cognitive ranks you, but the written PQA and MMI decide the offer — take the SJT and personal-qualities side seriously.";
  return level === "high"
    ? "Your UCAT is doing all the ranking here — clearing the ATAR minimum is enough at this stage."
    : level === "mid"
    ? "You're near the UCAT range that ranks for interview — the line moves yearly and differs by state."
    : "At most UCAT-gated schools this rarely ranks for interview. A higher UCAT is the unlock.";
}

function stage2Insight(uni: Uni) {
  if (!uni.hasInterview) return "No interview here — your academic rank carries almost the entire decision.";
  if (uni.thresholdATAR && !uni.hasUCAT) return "Your ATAR only opened the door — from here the interview is everything.";
  if (uni.thresholdATAR) return "Your ATAR is spent once it clears the bar. UCAT and interview do all the real work.";
  if (uni.gateBy === "ucat_atar") return "Every pillar counts, and unusually your ATAR keeps working past the minimum. No single weakness is survivable.";
  return "Notice how UCAT decides Stage 1 on its own, then shrinks to a slice of Stage 2 — your interview and ATAR do most of the final work.";
}

function Fact({ label, value, off }: { label: string; value: string; off?: boolean }) {
  return (<div className="tt-fact"><span className="tt-fact-l">{label}</span><span className={`tt-fact-v ${off ? "is-off" : ""}`}>{value}</span></div>);
}
function WeightPip({ c, v, label, thresh, na }: { c: string; v: number; label: string; thresh?: boolean; na?: boolean }) {
  return (
    <div className="tt-pip">
      <span className="tt-pip-dot" style={{ background: na ? "#3A4270" : c }} />
      <span className="tt-pip-v">{na ? "—" : thresh ? "gate" : `${Math.round(v * 100)}%`}</span>
      <span className="tt-pip-l">{label}</span>
    </div>
  );
}
function LegendItem({ c, label, v }: { c: string; label: string; v: number }) {
  return (<div className="tt-leg"><span className="tt-leg-dot" style={{ background: c }} /><span className="tt-leg-l">{label}</span><span className="tt-leg-v">+{v.toFixed(1)}</span></div>);
}
function StageIcon({ status }: { status: string }) {
  const open = status === "likely" || status === "borderline";
  const color = status === "likely" ? "#F3BE43" : status === "borderline" ? "#E7B24A" : "#7E86AE";
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="11" width="16" height="10" rx="2" stroke={color} strokeWidth="1.6" />
      <path d={open ? "M8 11V8a4 4 0 0 1 7.5-1.9" : "M8 11V8a4 4 0 0 1 8 0v3"} stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function rangeStyle(color: string): CSSProperties { return { "--tt-accent": color } as CSSProperties; }

interface SliderProps {
  atar: number; ucat: number; interview: number;
  setAtar: (n: number) => void; setUcat: (n: number) => void; setInterview: (n: number) => void;
}

function ProfileSliders({ atar, ucat, interview, setAtar, setUcat, setInterview, uni }: SliderProps & { uni: Uni | null }) {
  const uHas = uni ? uni.hasUCAT : true;
  const iHas = uni ? uni.hasInterview : true;
  return (
    <div className="tt-fields tt-fields--row">
      <div className="tt-field">
        <div className="tt-field-top"><label htmlFor="c-atar">Predicted ATAR</label><span className="tt-val" style={{ color: "#5B8DEF" }}>{atar.toFixed(2)}</span></div>
        <input id="c-atar" type="range" min={ATAR_MIN} max={ATAR_MAX} step={0.05} value={atar} onChange={(e) => setAtar(parseFloat(e.target.value))} style={rangeStyle("#5B8DEF")} />
        <div className="tt-scale"><span>85.00</span><span>99.95</span></div>
      </div>
      <div className={`tt-field ${uHas ? "" : "is-disabled"}`}>
        <div className="tt-field-top"><label htmlFor="c-ucat">UCAT percentile</label><span className="tt-val" style={{ color: "#2DD4BF" }}>{uHas ? `${ucat}th` : "N/A"}</span></div>
        <input id="c-ucat" type="range" min={1} max={99} step={1} value={ucat} disabled={!uHas} onChange={(e) => setUcat(parseInt(e.target.value))} style={rangeStyle("#2DD4BF")} />
        <div className="tt-scale"><span>1st</span><span>99th · cognitive</span></div>
      </div>
      <div className={`tt-field ${iHas ? "" : "is-disabled"}`}>
        <div className="tt-field-top"><label htmlFor="c-int">Interview strength</label><span className="tt-val" style={{ color: "#C77DFF" }}>{iHas ? interviewBand(interview) : "None"}</span></div>
        <input id="c-int" type="range" min={0} max={100} step={1} value={interview} disabled={!iHas} onChange={(e) => setInterview(parseInt(e.target.value))} style={rangeStyle("#C77DFF")} />
        <div className="tt-scale"><span>Below typical</span><span>Exceptional</span></div>
      </div>
    </div>
  );
}

function CompareSection({ atar, ucat, interview, setAtar, setUcat, setInterview }: SliderProps) {
  const rows = Object.entries(UNIS).map(([key, u]) => {
    const f = fitScore(u, atar, ucat, interview);
    return { key, u, ...f, status: computeStatus(u, atar, ucat) };
  });
  const rank: Record<string, number> = { likely: 3, borderline: 2, unlikely: 1, hurdle: 0 };
  rows.sort((a, b) => (rank[b.status] - rank[a.status]) || (b.composite - a.composite));

  const prof: Record<PillarKey, number> = { a: academicSub(atar), u: ucat, i: interview };
  const strongestKey = [...PILLARS].sort((x, y) => prof[y] - prof[x])[0];
  const strongName = { a: "ATAR / academics", u: "UCAT", i: "interviews" }[strongestKey];
  const bestNames = rows.filter((r) => r.status !== "hurdle").slice(0, 2).map((r) => r.u.short);

  return (
    <>
      <div className="tt-panel tt-cmp-inputs">
        <h2 className="tt-panel-h">Your profile — scored against every program at once</h2>
        <ProfileSliders atar={atar} ucat={ucat} interview={interview}
          setAtar={setAtar} setUcat={setUcat} setInterview={setInterview} uni={null} />
      </div>

      <p className="tt-cmp-insight">
        Your strongest pillar is <strong>{strongName}</strong>. The schools that reward it rise to the top — this is <em>apply to your strength</em> on one screen.
        {bestNames.length > 0 && <> Best current fits: <strong>{bestNames.join(" and ")}</strong>.</>}
      </p>

      <div className="tt-cmp-list">
        {rows.map((r, i) => (
          <div className={`tt-crow tt-crow--${r.status} ${i < 3 && r.status !== "hurdle" ? "is-top" : ""}`} key={r.key}>
            <span className="tt-crow-rank">{i + 1}</span>
            <div className="tt-crow-id">
              <span className="tt-crow-name">{r.u.short}</span>
              <span className="tt-crow-meta">{r.u.state} · {r.u.hasUCAT ? "UCAT" : "no UCAT"} · {r.u.hasInterview ? "interview" : "no interview"}</span>
            </div>
            <div className="tt-crow-bar">
              {r.cA > 0 && <div className="tt-bar-seg" style={{ width: `${r.cA}%`, background: "#5B8DEF" }} />}
              {r.cU > 0 && <div className="tt-bar-seg" style={{ width: `${r.cU}%`, background: "#2DD4BF" }} />}
              {r.cI > 0 && <div className="tt-bar-seg" style={{ width: `${r.cI}%`, background: "#C77DFF" }} />}
            </div>
            <span className="tt-crow-score">{Math.round(r.composite)}</span>
            <span className={`tt-crow-status tt-status--${r.status}`}>{shortStatus(r.status, r.u)}</span>
          </div>
        ))}
      </div>

      <div className="tt-cmp-legend">
        <span><span className="tt-leg-dot" style={{ background: "#5B8DEF" }} /> Academic</span>
        <span><span className="tt-leg-dot" style={{ background: "#2DD4BF" }} /> UCAT</span>
        <span><span className="tt-leg-dot" style={{ background: "#C77DFF" }} /> Interview</span>
        <span className="tt-cmp-legend-note">Bar length = fit to that school&apos;s formula (0–100)</span>
      </div>
    </>
  );
}

export default function Page() {
  return (
    <>
      <div className="tool-shell">
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Selection Score Decoder" },
        ]} />
        <Decoder />
      </div>
      <MedToolFooter current="decoder" />
    </>
  );
}

const css = `
.tt-decoder{
  --gold:#F3BE43; --ink:#EEF1FA; --muted:#9AA4CE;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  color:var(--ink);
  background:
    radial-gradient(1200px 600px at 15% -10%, rgba(243,190,67,0.10), transparent 60%),
    linear-gradient(160deg, #0A1A5C 0%, #081E6D 40%, #050F35 100%);
  padding:28px 22px 22px; border-radius:18px; max-width:1080px; margin:0 auto;
  box-shadow:0 30px 80px -30px rgba(0,0,0,0.6);
}
.tt-decoder *{box-sizing:border-box;}
.tt-head{display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;}
.tt-brand{display:flex; align-items:center; gap:9px;}
.tt-crest-img{display:block; object-fit:contain;}
.tt-wordmark{font-weight:800; letter-spacing:2.5px; font-size:13px; font-family:"Sifonn Pro","Arial Black",system-ui,sans-serif;}
.tt-eyebrow{color:var(--muted); font-size:11px; letter-spacing:1.5px; text-transform:uppercase;}
.tt-title-wrap{margin-bottom:18px; max-width:660px;}
.tt-title{font-size:33px; line-height:1.05; margin:0 0 10px; font-family:"Sifonn Pro","Arial Black",system-ui,sans-serif; font-weight:800; letter-spacing:-0.5px;}
.tt-sub{color:var(--muted); font-size:15px; line-height:1.5; margin:0;}
.tt-sub em{color:var(--gold); font-style:normal;}

.tt-unis{display:flex; flex-wrap:wrap; gap:14px 18px; margin-bottom:16px; padding-bottom:16px; border-bottom:1px solid rgba(255,255,255,0.09);}
.tt-uni-group{display:flex; flex-direction:column; gap:6px;}
.tt-uni-state{font-size:10px; letter-spacing:1.5px; color:var(--muted); text-transform:uppercase; font-weight:700;}
.tt-uni-chips{display:flex; flex-wrap:wrap; gap:6px;}
.tt-chip{cursor:pointer; font-size:12.5px; font-weight:600; color:var(--ink);
  background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.09);
  border-radius:20px; padding:6px 12px; transition:border-color .18s, background .18s;}
.tt-chip:hover{background:rgba(255,255,255,0.09);}
.tt-chip.is-on{border-color:var(--gold); background:rgba(243,190,67,0.14); color:#FCE9B6;}
.tt-chip:focus-visible{outline:2px solid var(--gold); outline-offset:2px;}

.tt-glance{display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:14px; margin-bottom:10px;}
.tt-glance-main{display:flex; flex-direction:column;}
.tt-glance-name{font-size:18px; font-weight:800; font-family:"Sifonn Pro","Arial Black",system-ui,sans-serif;}
.tt-glance-course{font-size:12.5px; color:var(--muted);}
.tt-glance-facts{display:flex; gap:18px; flex-wrap:wrap;}
.tt-fact{display:flex; flex-direction:column; align-items:flex-start;}
.tt-fact-l{font-size:10px; letter-spacing:1px; text-transform:uppercase; color:var(--muted);}
.tt-fact-v{font-size:14px; font-weight:700; font-variant-numeric:tabular-nums;}
.tt-fact-v.is-off{color:#7E86AE;}
.tt-flags{display:flex; gap:8px; flex-wrap:wrap; margin-bottom:16px;}
.tt-flag{font-size:11px; font-weight:600; color:#CBD2EE; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.10); border-radius:6px; padding:3px 9px;}
.tt-flag--warn{color:#F3BE43; border-color:rgba(243,190,67,0.3); background:rgba(243,190,67,0.08);}

.tt-grid{display:grid; grid-template-columns:0.85fr 1.15fr; gap:16px;}
.tt-panel{background:rgba(255,255,255,0.045); border:1px solid rgba(255,255,255,0.09); border-radius:16px; padding:18px;}
.tt-panel-h{font-size:12px; letter-spacing:1.5px; text-transform:uppercase; color:var(--muted); margin:0 0 16px; font-weight:700;}

.tt-field{margin-bottom:18px;}
.tt-field.is-disabled{opacity:.45;}
.tt-field-top{display:flex; justify-content:space-between; align-items:baseline; margin-bottom:8px;}
.tt-field label{font-size:14px; font-weight:600;}
.tt-val{font-size:18px; font-weight:800; font-variant-numeric:tabular-nums; font-family:"Sifonn Pro","Arial Black",system-ui,sans-serif;}
.tt-scale{display:flex; justify-content:space-between; margin-top:6px; font-size:10.5px; color:var(--muted);}
.tt-microtip{font-size:11.5px; color:var(--muted); margin:8px 0 0; line-height:1.4;}

.tt-decoder input[type=range]{-webkit-appearance:none; appearance:none; width:100%; height:6px; border-radius:6px; background:rgba(255,255,255,0.14); outline:none; margin:0;}
.tt-decoder input[type=range]::-webkit-slider-thumb{-webkit-appearance:none; appearance:none; width:20px; height:20px; border-radius:50%; background:var(--tt-accent,#F3BE43); border:3px solid #0A1A5C; cursor:pointer; box-shadow:0 2px 8px rgba(0,0,0,.4); transition:transform .1s;}
.tt-decoder input[type=range]::-webkit-slider-thumb:hover{transform:scale(1.12);}
.tt-decoder input[type=range]::-moz-range-thumb{width:20px; height:20px; border-radius:50%; background:var(--tt-accent,#F3BE43); border:3px solid #0A1A5C; cursor:pointer;}
.tt-decoder input[type=range]:focus-visible::-webkit-slider-thumb{outline:2px solid var(--gold); outline-offset:2px;}
.tt-decoder input[type=range]:disabled::-webkit-slider-thumb{cursor:not-allowed;}

.tt-weights{margin-top:4px; padding-top:16px; border-top:1px solid rgba(255,255,255,0.09);}
.tt-weights-h{font-size:11px; color:var(--muted); text-transform:uppercase; letter-spacing:1px;}
.tt-weight-row{display:flex; gap:14px; margin-top:12px;}
.tt-pip{display:flex; flex-direction:column; align-items:flex-start; gap:1px; flex:1;}
.tt-pip-dot{width:100%; height:4px; min-width:34px; border-radius:3px; margin-bottom:5px;}
.tt-pip-v{font-weight:800; font-size:15px; font-variant-numeric:tabular-nums;}
.tt-pip-l{font-size:11px; color:var(--muted);}

.tt-readout{display:flex; flex-direction:column; gap:14px;}
.tt-stage-head{display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;}
.tt-stage-eyebrow{font-size:11px; letter-spacing:1.4px; text-transform:uppercase; color:var(--muted); font-weight:700;}
.tt-stage-title{font-size:17px; margin:2px 0 8px; font-weight:700;}
.tt-stage-verdict{font-size:15px; font-weight:800; margin:0 0 4px;}
.tt-stage-detail{font-size:13px; color:var(--muted); line-height:1.5; margin:0;}
.tt-stage--likely .tt-stage-verdict{color:var(--gold);}
.tt-stage--borderline .tt-stage-verdict{color:#E7B24A;}
.tt-stage--unlikely .tt-stage-verdict,.tt-stage--hurdle .tt-stage-verdict{color:#B9C0E0;}

.tt-bar{position:relative; display:flex; height:44px; border-radius:10px; overflow:hidden; background:rgba(255,255,255,0.08); margin:6px 0 12px;}
.tt-bar-seg{height:100%; transition:width .35s cubic-bezier(.4,0,.2,1);}
.tt-bar-num{position:absolute; right:12px; top:50%; transform:translateY(-50%); font-weight:800; font-size:22px; font-variant-numeric:tabular-nums; font-family:"Sifonn Pro","Arial Black",system-ui,sans-serif; text-shadow:0 1px 6px rgba(0,0,0,.5);}
.tt-bar-num span{font-size:12px; color:var(--muted); font-weight:600;}
.tt-legend{display:flex; gap:16px; flex-wrap:wrap; margin-bottom:12px;}
.tt-leg{display:flex; align-items:center; gap:6px; font-size:12px;}
.tt-leg-dot{width:9px; height:9px; border-radius:3px;}
.tt-leg-l{color:var(--muted);}
.tt-leg-v{font-weight:700; font-variant-numeric:tabular-nums;}
.tt-band{font-size:11px; font-weight:800; padding:4px 10px; border-radius:20px;}
.tt-band--gold{background:rgba(243,190,67,0.16); color:var(--gold);}
.tt-band--amber{background:rgba(231,178,74,0.14); color:#E7B24A;}
.tt-band--dim{background:rgba(255,255,255,0.08); color:#B9C0E0;}
.tt-insight-line{font-size:12.5px; line-height:1.5; margin:0; padding:10px 12px; background:rgba(243,190,67,0.07); border-radius:10px;}

.tt-lever-hero{font-size:15px; margin:8px 0 14px; line-height:1.4;}
.tt-lever-bars{display:flex; flex-direction:column; gap:12px;}
.tt-lever-top{display:flex; justify-content:space-between; font-size:12.5px; font-weight:600; margin-bottom:5px;}
.tt-lever-pct{color:var(--muted); font-weight:600;}
.tt-lever-track{height:8px; border-radius:5px; background:rgba(255,255,255,0.10); overflow:hidden;}
.tt-lever-fill{height:100%; border-radius:5px; transition:width .35s cubic-bezier(.4,0,.2,1);}
.tt-lever-tip{font-size:11.5px; color:var(--muted); margin:5px 0 0;}
.tt-lever-foot{font-size:11.5px; color:var(--muted); margin:14px 0 0; line-height:1.5;}
.tt-lever-foot em{color:#B9C0E0; font-style:normal;}

.tt-foot{margin-top:18px; padding-top:16px; border-top:1px solid rgba(255,255,255,0.09);}
.tt-foot-note{display:flex; gap:10px; font-size:11.5px; color:var(--muted); line-height:1.55; margin:0 0 12px;}
.tt-foot-note strong{color:#CBD2EE;}
.tt-info{flex:none; width:18px; height:18px; border-radius:50%; border:1px solid var(--muted); display:grid; place-items:center; font-style:italic; font-size:11px; font-weight:700;}
.tt-links{display:flex; gap:14px; flex-wrap:wrap; align-items:center; font-size:12px; color:var(--muted); margin-bottom:10px;}
.tt-links a{color:var(--gold); text-decoration:none; border-bottom:1px solid rgba(243,190,67,0.3);}
.tt-links a:hover{border-bottom-color:var(--gold);}
.tt-motto{font-size:11px; letter-spacing:1px; color:var(--muted); margin:0; text-transform:uppercase;}

@media (max-width:820px){
  .tt-grid{grid-template-columns:1fr;}
  .tt-title{font-size:26px;}
  .tt-glance-facts{gap:14px;}
}
.tt-mode{display:inline-flex; gap:4px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.09); border-radius:12px; padding:4px; margin-bottom:18px;}
.tt-mode-btn{cursor:pointer; font-size:13px; font-weight:700; color:var(--muted); background:transparent; border:none; border-radius:9px; padding:8px 16px; transition:background .18s,color .18s;}
.tt-mode-btn.is-on{background:rgba(243,190,67,0.16); color:#FCE9B6;}
.tt-mode-btn:focus-visible{outline:2px solid var(--gold); outline-offset:2px;}

.tt-cmp-inputs{margin-bottom:16px;}
.tt-fields--row{display:grid; grid-template-columns:repeat(3,1fr); gap:22px;}
.tt-fields--row .tt-field{margin-bottom:0;}
.tt-cmp-insight{font-size:14px; line-height:1.5; margin:0 0 16px; padding:12px 14px; background:rgba(243,190,67,0.07); border-radius:10px;}
.tt-cmp-insight em{color:var(--gold); font-style:normal;}
.tt-cmp-list{display:flex; flex-direction:column; gap:7px;}
.tt-crow{display:flex; align-items:center; gap:12px; padding:10px 12px; border-radius:11px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.07);}
.tt-crow.is-top{border-color:rgba(243,190,67,0.35);}
.tt-crow--hurdle{opacity:.5;}
.tt-crow-rank{font-size:13px; font-weight:800; color:var(--muted); width:20px; text-align:center; flex:none; font-variant-numeric:tabular-nums;}
.tt-crow-id{width:152px; flex:none; display:flex; flex-direction:column;}
.tt-crow-name{font-size:14px; font-weight:700;}
.tt-crow-meta{font-size:10.5px; color:var(--muted);}
.tt-crow-bar{flex:1; display:flex; height:20px; border-radius:6px; overflow:hidden; background:rgba(255,255,255,0.07); min-width:60px;}
.tt-crow-score{font-size:15px; font-weight:800; font-variant-numeric:tabular-nums; width:30px; text-align:right; flex:none; font-family:"Sifonn Pro","Arial Black",system-ui,sans-serif;}
.tt-crow-status{font-size:10.5px; font-weight:700; padding:3px 8px; border-radius:6px; flex:none; width:96px; text-align:center;}
.tt-status--likely{background:rgba(243,190,67,0.16); color:var(--gold);}
.tt-status--borderline{background:rgba(231,178,74,0.14); color:#E7B24A;}
.tt-status--unlikely{background:rgba(255,255,255,0.08); color:#B9C0E0;}
.tt-status--hurdle{background:rgba(224,110,110,0.16); color:#E98A8A;}
.tt-cmp-legend{display:flex; gap:16px; flex-wrap:wrap; margin-top:12px; font-size:11.5px; color:var(--muted);}
.tt-cmp-legend span{display:inline-flex; align-items:center; gap:6px;}
.tt-cmp-legend-note{color:#7E86AE; font-style:italic;}
@media (max-width:820px){
  .tt-fields--row{grid-template-columns:1fr; gap:16px;}
  .tt-crow{flex-wrap:wrap;}
  .tt-crow-id{width:auto; flex:1; min-width:120px;}
  .tt-crow-bar{order:5; flex-basis:100%; min-width:100%;}
}
@media (prefers-reduced-motion: reduce){ .tt-bar-seg,.tt-lever-fill{transition:none;} }
`;
