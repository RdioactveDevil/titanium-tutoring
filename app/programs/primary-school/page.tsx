'use client'
import { useEffect } from 'react'
import Link from 'next/link'

export default function PrimarySchool() {
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
    { n: '01', title: 'Core Acceleration', desc: 'Number, operations, fractions, and early algebra alongside phonics, reading comprehension, vocabulary, and structured writing — all personalised to the year level and the individual student.' },
    { n: '02', title: 'NAPLAN Preparation', desc: 'Years 3 and 5 NAPLAN coaching in Numeracy and Literacy. We drill every question style, build time awareness, and ensure test day holds no surprises.' },
    { n: '03', title: 'Selective Entry & Scholarship Coaching', desc: 'Early preparation for the HAST and scholarship exams from Year 5 or 6 — abstract reasoning, quantitative thinking, and written expression coached to the specific exam format.' },
  ]

  const yearGroups = [
    { years: 'Years 1–2', label: 'Early Foundation', points: ['Number bonds & counting strategies', 'Phonics and basic reading fluency', 'Handwriting and sentence construction', 'Listening and comprehension skills'] },
    { years: 'Years 3–4', label: 'Core Skills', points: ['Multiplication, division & fractions', 'NAPLAN Year 3 preparation', 'Paragraph writing & text types', 'Reading comprehension strategies'] },
    { years: 'Years 5–6', label: 'Acceleration', points: ['Early algebra and geometry', 'NAPLAN Year 5 preparation', 'Essay structure and extended writing', 'Selective entry & scholarship readiness'] },
  ]

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">Years 1–6</span>
          <h1 className="section-title">Primary School Program</h1>
          <p className="lead">Strong foundations are the difference between a student who keeps up and a student who pulls ahead. We build both — from first principles, at every year level.</p>
        </div>
      </div>

      <section className="curriculum">
        <div className="curriculum-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">Year-by-Year</span>
            <h2 className="section-title">What We Cover<br />at Each Stage</h2>
            <p className="lead" style={{ marginTop: 14 }}>Every primary year has a specific set of skills students need to master. We meet them exactly where they are and move them forward.</p>
            <div className="section-rule" />
          </div>
          <div className="split-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {yearGroups.map((g, i) => (
              <div key={i} className={`split-card ${i % 2 === 1 ? 'navy' : 'cream'} fade-in`} data-delay={`${i * 100}`}>
                <span className="split-state">{g.label}</span>
                <h3>{g.years}</h3>
                <ul className="split-list">
                  {g.points.map(pt => (
                    <li key={pt}><span className="split-check">✓</span>{pt}</li>
                  ))}
                </ul>
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
            <p className="lead" style={{ marginTop: 14 }}>Every session is personalised. Below are the core areas we cover across the primary years.</p>
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

      <section className="related-programs">
        <div className="related-programs-inner">
          <div className="section-header">
            <span className="eyebrow">Explore Other Programs</span>
            <h2 className="section-title">Find the Right Program<br />for Your Student</h2>
            <div className="section-rule" style={{ margin: '20px auto 0' }} />
          </div>
          <div className="related-grid">
            <Link href="/programs/middle-school" className="related-card">
              <span className="related-card-eyebrow">Years 7–9</span>
              <div className="related-card-title">Middle School Program</div>
              <p className="related-card-desc">Close the gaps before senior school. We cover Maths, English, NAPLAN, and early VCE/SACE foundations.</p>
              <span className="related-card-link">Explore Middle School →</span>
            </Link>
            <Link href="/programs/high-school" className="related-card">
              <span className="related-card-eyebrow">Years 10–12</span>
              <div className="related-card-title">High School Program</div>
              <p className="related-card-desc">VCE and SACE coaching. From first SAC to final exam — every subject, every study score target.</p>
              <span className="related-card-link">Explore High School →</span>
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
          <div className="motto-display" style={{ fontSize: 'clamp(16px,3vw,24px)' }}>Start Strong in Primary School</div>
          <p className="motto-translation" style={{ marginBottom: 28 }}>Book a free trial session and we will assess exactly where your child is and map out how we move them forward.</p>
          <Link href="/contact" className="btn-gold">Book a Free Trial</Link>
        </div>
      </div>
    </>
  )
}
