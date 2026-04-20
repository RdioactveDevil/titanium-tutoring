'use client'
import { useEffect } from 'react'
import Link from 'next/link'

export default function HighSchool() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            setTimeout(() => el.classList.add('visible'), parseInt(el.dataset.delay || '0'))
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.fade-in,.slide-left,.slide-right').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const subjects = [
    { n: '01', title: 'VCE / SACE Mathematical Methods', desc: 'Functions, calculus, probability, and statistics. We use the Pólya framework on every topic — not just drilling worked examples but building genuine understanding.' },
    { n: '02', title: 'VCE / SACE Specialist Mathematics', desc: "The hardest subject on the ATAR scale. We've coached Specialist students from a C to a 40+ study score by targeting the exact question types that discriminate at the top." },
    { n: '03', title: 'VCE / SACE English', desc: 'Text response, analytical essays, persuasive writing, and oral preparation. We teach the paragraph and essay structures that examiners explicitly reward at each grade boundary.' },
    { n: '04', title: 'GAT & Research Project', desc: 'GAT preparation for VCE students and Personal Interest Project coaching for SACE Stage 2. Written argument, source analysis, and extended response technique.' },
    { n: '05', title: 'Year 10 Bridging & Acceleration', desc: 'Targeted at Year 10 students moving into VCE or SACE — we identify gaps, introduce senior-level thinking early, and make the Step 1 transition seamless.' },
    { n: '06', title: 'Selective Entry (Years 9–10)', desc: 'Coaching for selective school entry exams at the Year 9/10 level — HAST, EduTest, and school-specific written tasks. Abstract reasoning, verbal and quantitative.' },
  ]

  const curricula = [
    {
      state: 'Victoria',
      cert: 'VCE',
      desc: 'Victorian Certificate of Education. We coach Year 11 and 12 students from their first SAC through to the final exam, with study score targets in every subject.',
      points: ['Mathematical Methods & Specialist Maths', 'VCE English & Literature', 'General Achievement Test (GAT)', 'SAC strategy, mock exams & deep debrief', 'Selective entry — Melbourne High, Mac.Rob, Suzanne Cory'],
      cta: 'Book VCE Tutoring',
      variant: 'navy',
    },
    {
      state: 'South Australia',
      cert: 'SACE',
      desc: "South Australian Certificate of Education. Stage 1 and Stage 2, with full ATAR coaching to the SACE Board's Performance Standards from lesson one.",
      points: ['Mathematical Methods & Specialist Maths', 'SACE English & Essential English', 'Research Project (Personal Interest Project)', 'Performance Standards & marking rubric mastery', "Scholarship prep for Adelaide's top schools"],
      cta: 'Book SACE Tutoring',
      variant: 'cream',
    },
  ]

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">Years 10–12</span>
          <h1 className="section-title">High School Program</h1>
          <p className="lead">VCE and SACE — the two years that determine your ATAR. We coach every subject with the same structured rigour, personalised to your specific exam board, target score, and timeline.</p>
        </div>
      </div>

      <section className="curriculum">
        <div className="curriculum-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">Choose Your Path</span>
            <h2 className="section-title">VCE or SACE?<br />We Know Both Inside Out.</h2>
            <p className="lead" style={{ marginTop: 14 }}>Whether you are in Victoria or South Australia — our coaching is built for your specific curriculum, your specific exam board, and your specific ATAR target.</p>
            <div className="section-rule" />
          </div>
          <div className="split-grid">
            {curricula.map((c, i) => (
              <div key={i} className={`split-card ${c.variant} ${i === 0 ? 'slide-left' : 'slide-right'}`}>
                <span className="split-state">{c.state}</span>
                <h3>{c.cert}</h3>
                <p className="split-desc">{c.desc}</p>
                <ul className="split-list">
                  {c.points.map(pt => (
                    <li key={pt}><span className="split-check">✓</span>{pt}</li>
                  ))}
                </ul>
                <Link href="/contact" className={c.variant === 'navy' ? 'btn-gold-sm' : 'btn-navy-sm'}>{c.cta} →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services">
        <div className="services-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">What We Teach</span>
            <h2 className="section-title">Subjects & Focus Areas</h2>
            <p className="lead" style={{ marginTop: 14 }}>From core curriculum subjects to selective entry and exam strategy — every area delivered with the same personalised, results-focused approach.</p>
            <div className="section-rule" />
          </div>
          <div className="services-grid">
            {subjects.map((s, i) => (
              <div className="service-card fade-in" key={i} data-delay={`${i * 70}`}>
                <span className="service-num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="motto-banner">
        <div className="motto-banner-inner">
          <div className="motto-display" style={{ fontSize: 'clamp(16px,3vw,24px)' }}>Your ATAR Target Is Achievable</div>
          <p className="motto-translation" style={{ marginBottom: 28 }}>Book a free trial session and we will map out the exact path from where you are now to the score you need.</p>
          <Link href="/contact" className="btn-gold">Book a Free Trial</Link>
        </div>
      </div>
    </>
  )
}
