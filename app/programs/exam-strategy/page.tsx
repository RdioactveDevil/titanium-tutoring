'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/app/components/Breadcrumb'

export default function ExamStrategyPage() {
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

  const pillars = [
    { n: '01', title: 'Time Management', desc: 'We teach students to budget time per question, identify which problems to attempt first, and avoid the common trap of spending too long on a single item at the expense of the rest of the paper.' },
    { n: '02', title: 'Stress Resilience', desc: 'Controlled breathing, pre-exam routines, and in-session reset techniques. Students who can manage their stress in the room consistently outperform those who cannot — even with equal preparation.' },
    { n: '03', title: 'Question Deconstruction', desc: "Every exam question contains structural signals. We train students to decode what is actually being asked — including the marks available — so they don't write three paragraphs when one will do." },
    { n: '04', title: 'Elimination & Guessing Strategy', desc: 'For multiple-choice exams: how to eliminate distractor options, when to guess, and how to avoid second-guessing a correct first instinct. Measurable marks on every paper.' },
    { n: '05', title: 'Answer Presentation', desc: 'Examiners cannot award marks they cannot find. We coach students to set out working clearly, use notation correctly, and structure written responses in the format markers are trained to reward.' },
    { n: '06', title: 'Mock Exam Debrief', desc: 'Completing a practice paper is half the work. We debrief every mock exam question by question — turning errors into insight and insight into technique adjustments before the real thing.' },
  ]

  const examTypes = [
    {
      label: 'VCE & SACE',
      variant: 'navy',
      title: 'Senior School',
      points: [
        'SAC and exam structure, mark allocations, and timing',
        'Study design alignment — answering what is actually asked',
        'Written response frameworks for high-scoring answers',
        'Managing multi-subject exam season without burnout',
      ],
    },
    {
      label: 'NAPLAN · Selective · Scholarships',
      variant: 'cream',
      title: 'Competitive Entry',
      points: [
        'NAPLAN pacing and domain-switching technique',
        'HAST and EduTest abstract reasoning under time pressure',
        'Scholarship written task planning and execution',
        'Mindset coaching for high-stakes, single-sitting exams',
      ],
    },
  ]

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Programs', href: '/programs' },
            { label: 'Exam Strategy & Mindset' },
          ]} />
          <span className="eyebrow">All Year Levels</span>
          <h1 className="section-title">Exam Strategy &amp; Mindset</h1>
          <p className="lead">Time management, stress resilience, and high-stakes exam technique. The skills no textbook teaches — and the ones that separate students who know the content from those who score it.</p>
        </div>
      </div>

      <section className="services">
        <div className="services-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">Six Pillars</span>
            <h2 className="section-title">What We Teach</h2>
            <p className="lead" style={{ marginTop: 14 }}>Exam performance is a skill set — learnable, practicable, and measurable. These are the six areas we develop in every student, regardless of their year level or subject.</p>
            <div className="section-rule" />
          </div>
          <div className="services-grid">
            {pillars.map((s, i) => (
              <div className="service-card fade-in" key={i} data-delay={`${i * 70}`}>
                <span className="service-num">STEP {s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="curriculum">
        <div className="curriculum-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">Applied to Your Exam</span>
            <h2 className="section-title">Strategy Built for<br />Your Specific Context</h2>
            <p className="lead" style={{ marginTop: 14 }}>Generic exam tips are not enough. We tailor our coaching to the specific exam format, mark allocations, and common student errors in each assessment type.</p>
            <div className="section-rule" />
          </div>
          <div className="split-grid">
            {examTypes.map((et, i) => (
              <div key={i} className={`split-card ${et.variant} ${i === 0 ? 'slide-left' : 'slide-right'}`}>
                <span className="split-state">{et.label}</span>
                <h3>{et.title}</h3>
                <ul className="split-list">
                  {et.points.map(pt => (
                    <li key={pt}><span className="split-check">✓</span>{pt}</li>
                  ))}
                </ul>
                <Link href="/contact" className={et.variant === 'navy' ? 'btn-gold-sm' : 'btn-navy-sm'}>Book a Session →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="related-programs">
        <div className="related-programs-inner">
          <div className="section-header">
            <span className="eyebrow">Explore Other Programs</span>
            <h2 className="section-title">Find the Right Program<br />for Your Student</h2>
            <div className="section-rule" style={{ margin: '20px auto 0' }} />
          </div>
          <div className="related-grid">
            <Link href="/programs/high-school" className="related-card">
              <span className="related-card-eyebrow">Years 10–12</span>
              <div className="related-card-title">High School Program</div>
              <p className="related-card-desc">VCE and SACE coaching across every subject — from your first SAC to your final ATAR exam.</p>
              <span className="related-card-link">Explore High School →</span>
            </Link>
            <Link href="/programs/naplan" className="related-card">
              <span className="related-card-eyebrow">Years 3, 5, 7 &amp; 9</span>
              <div className="related-card-title">NAPLAN Preparation</div>
              <p className="related-card-desc">Numeracy and literacy coaching that builds fundamentals — not last-minute cramming.</p>
              <span className="related-card-link">Explore NAPLAN →</span>
            </Link>
            <Link href="/programs/medical-school-admissions" className="related-card">
              <span className="related-card-eyebrow">UCAT · Interviews · Personal Statements</span>
              <div className="related-card-title">Medical School Admissions</div>
              <p className="related-card-desc">UCAT coaching, MMI interview prep, and personal statement guidance for aspiring medical students.</p>
              <span className="related-card-link">Explore Medical Admissions →</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="motto-banner">
        <div className="motto-banner-inner">
          <div className="motto-display" style={{ fontSize: 'clamp(16px,3vw,24px)' }}>The Right Technique Changes Everything</div>
          <p className="motto-translation" style={{ marginBottom: 28 }}>Book a free consultation and we will identify the specific exam skills holding your student back — and build a plan to fix them before the next sitting.</p>
          <Link href="/contact" className="btn-gold">Book a Free Consultation</Link>
        </div>
      </div>
    </>
  )
}
