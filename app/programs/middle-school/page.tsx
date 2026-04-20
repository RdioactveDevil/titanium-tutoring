'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/app/components/Breadcrumb'

export default function MiddleSchool() {
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
    { n: '01', title: 'Mathematics', desc: 'Algebra, geometry, indices, linear equations, and probability. We close the gaps from primary school before they turn into VCE crises.' },
    { n: '02', title: 'English', desc: 'Analytical writing, persuasive essays, and text response. We teach the paragraph structures and vocabulary that secondary markers actually reward.' },
    { n: '03', title: 'NAPLAN Preparation', desc: 'Year 7 and Year 9 NAPLAN coaching in Numeracy and Literacy. Full question-type familiarity, timed practice, and targeted weak-area drilling.' },
    { n: '04', title: 'Early Acceleration', desc: 'For students aiming at VCE early entry or selective placement — we introduce Year 10 concepts in Year 8 or 9 to create a genuine head start.' },
    { n: '05', title: 'Selective Entry & Scholarships', desc: 'HAST, EduTest, and private school scholarship preparation. Abstract reasoning, verbal reasoning, and written expression coaching.' },
    { n: '06', title: 'Study Skills & Organisation', desc: "How to plan a week, manage assignments and exams at once, and apply Pólya's framework to unfamiliar problems in any subject." },
  ]

  const yearGroups = [
    { years: 'Year 7', label: 'Transition Year', points: ['Consolidate primary maths — fractions, ratios, percentages', 'NAPLAN Year 7 Numeracy & Literacy', 'Introduction to analytical writing', 'Algebra foundations and linear thinking'] },
    { years: 'Year 8', label: 'Building Blocks', points: ['Equations, geometry, and graphing', 'Persuasive and expository writing', 'Vocabulary expansion and reading speed', 'Scholarship and selective entry groundwork'] },
    { years: 'Year 9', label: 'Pre-Senior Readiness', points: ['NAPLAN Year 9 Numeracy & Literacy', 'Quadratics, trigonometry, statistics', 'Extended essay writing and analysis', 'Year 10 preview: early VCE/SACE foundations'] },
  ]

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://titaniumtutoring.com.au/' },
      { '@type': 'ListItem', position: 2, name: 'Programs', item: 'https://titaniumtutoring.com.au/programs' },
      { '@type': 'ListItem', position: 3, name: 'Middle School', item: 'https://titaniumtutoring.com.au/programs/middle-school' },
    ],
  }

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Middle School Tutoring Program',
    description: 'Personalised tutoring for Years 7–9 covering Mathematics, English, NAPLAN preparation, early VCE/SACE acceleration, and selective entry coaching.',
    url: 'https://titaniumtutoring.com.au/programs/middle-school',
    provider: {
      '@type': 'Organization',
      name: 'Titanium Tutoring',
      url: 'https://titaniumtutoring.com.au',
    },
    educationalLevel: 'Middle School (Years 7–9)',
    teaches: ['Mathematics', 'English', 'NAPLAN Preparation', 'Selective Entry Coaching', 'Study Skills'],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Programs', href: '/programs' },
        { label: 'Middle School' },
      ]} />
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">Years 7–9</span>
          <h1 className="section-title">Middle School Program</h1>
          <p className="lead">The middle years are where gaps open up quietly. We find them early, close them systematically, and set students up so Year 10 and beyond feel manageable — not overwhelming.</p>
        </div>
      </div>

      <section className="curriculum">
        <div className="curriculum-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">Year-by-Year</span>
            <h2 className="section-title">A Plan for<br />Every Year Level</h2>
            <p className="lead" style={{ marginTop: 14 }}>Each middle school year has different priorities. We tailor every program to the student's year, curriculum, and target outcome.</p>
            <div className="section-rule" />
          </div>
          <div className="split-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {yearGroups.map((g, i) => (
              <div key={i} className={`split-card ${i % 2 === 0 ? 'navy' : 'cream'} fade-in`} data-delay={`${i * 100}`}>
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
            <p className="lead" style={{ marginTop: 14 }}>From core curriculum skills to scholarship readiness — every area covered with the same structured, personalised approach.</p>
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
            <Link href="/programs/primary-school" className="related-card">
              <span className="related-card-eyebrow">Years 1–6</span>
              <div className="related-card-title">Primary School Program</div>
              <p className="related-card-desc">Core acceleration, NAPLAN preparation, and early selective entry coaching built from first principles.</p>
              <span className="related-card-link">Explore Primary School →</span>
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
          <div className="motto-display" style={{ fontSize: 'clamp(16px,3vw,24px)' }}>Get Ahead Before Senior School</div>
          <p className="motto-translation" style={{ marginBottom: 28 }}>A free trial session — we diagnose where your student is and show you exactly what we would do to move them forward.</p>
          <Link href="/contact" className="btn-gold">Book a Free Trial</Link>
        </div>
      </div>
    </>
  )
}
