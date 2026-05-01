'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/app/components/Breadcrumb'
import { testimonials } from '@/app/data/testimonials'

const subjects = [
  {
    key: 'Methods',
    title: 'VCE / SACE Mathematical Methods',
    desc: 'Functions, calculus, probability and statistics — delivered in the exact sequence of the VCAA and SACE study designs. Every topic is taught with conceptual understanding first, then applied to the past-exam question patterns that actually appear on test day.',
    points: [
      'Functions, relations and graphs',
      'Differential calculus — chain, product and quotient rules',
      'Integral calculus and area under curves',
      'Discrete and continuous probability distributions',
      'SAC strategy and mock exam debrief',
      'Last-six-years exam question drilling',
    ],
  },
  {
    key: 'Specialist',
    title: 'VCE / SACE Specialist Mathematics',
    desc: "The most demanding subject on the ATAR scale. Our Specialist coaching targets the exact question types that separate a 35 from a 45 — with the conceptual depth that holds under exam-room pressure, not just in comfortable practice sessions.",
    points: [
      'Complex numbers and argument-form algebra',
      'Vectors and vector calculus',
      'Mechanics — kinematics and dynamics',
      'Differential equations — first and second order',
      'Statistical inference and hypothesis testing',
      'Exam-style extended response technique',
    ],
  },
  {
    key: 'English',
    title: 'VCE / SACE English',
    desc: 'Text response, analytical essays, persuasive writing, and oral presentation. We teach the paragraph and essay structures that examiners explicitly reward at each grade boundary — not generic writing advice, but the specific moves that lift a B+ to an A.',
    points: [
      'Text response essay structure and analysis',
      'Language analysis — tone, technique, connotation',
      'Persuasive and argumentative writing',
      'Comparative essay technique (VCE)',
      'Creative writing and context tasks',
      'Oral presentation and delivery coaching',
    ],
  },
  {
    key: 'Chemistry',
    title: 'VCE / SACE Chemistry',
    desc: 'From atomic theory to organic chemistry, our Chemistry coaching builds genuine conceptual understanding alongside the calculation technique and lab report writing that top marks require — every topic mapped to the study design.',
    points: [
      'Atomic structure, bonding and periodicity',
      'Acids, bases and pH calculations',
      'Chemical equilibrium and Le Chatelier\'s principle',
      'Organic chemistry — functional groups and polymers',
      'Electrochemistry and galvanic cells',
      'Quantitative analysis and stoichiometry',
    ],
  },
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

export default function HighSchool() {
  const [activeSubject, setActiveSubject] = useState(0)

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

  const namedTestimonials = testimonials.filter(t => (t.cat === 'atar' || t.cat === 'selective' || t.cat === 'scholarship') && t.name !== 'Undisclosed')
  const schemaReviews = namedTestimonials.slice(0, 5).map(t => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: t.name },
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    reviewBody: t.q,
  }))

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://titaniumtutoring.com.au/' },
      { '@type': 'ListItem', position: 2, name: 'Programs', item: 'https://titaniumtutoring.com.au/programs' },
      { '@type': 'ListItem', position: 3, name: 'High School', item: 'https://titaniumtutoring.com.au/programs/high-school' },
    ],
  }

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'High School Tutoring Program',
    description: 'VCE and SACE coaching for Years 10–12. Personalised tutoring in Mathematical Methods, Specialist Mathematics, English, and Chemistry to reach your ATAR target.',
    url: 'https://titaniumtutoring.com.au/programs/high-school',
    provider: {
      '@type': 'Organization',
      name: 'Titanium Tutoring',
      url: 'https://titaniumtutoring.com.au',
    },
    educationalLevel: 'High School (Years 10–12)',
    teaches: ['VCE Mathematical Methods', 'VCE Specialist Mathematics', 'SACE Mathematical Methods', 'VCE English', 'SACE English', 'VCE Chemistry', 'SACE Chemistry'],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      worstRating: '1',
      reviewCount: String(namedTestimonials.length),
    },
    review: schemaReviews,
  }

  const panel = subjects[activeSubject]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <div className="page-hero">
        <div className="page-hero-inner">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Programs', href: '/programs' },
            { label: 'High School' },
          ]} />
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
            <p className="lead" style={{ marginTop: 14 }}>Select a subject to see exactly what we cover and how we coach it.</p>
            <div className="section-rule" />
          </div>
          <div className="subject-tabs">
            {subjects.map((s, i) => (
              <button
                key={s.key}
                className={`subject-tab-btn${activeSubject === i ? ' active' : ''}`}
                onClick={() => setActiveSubject(i)}
              >
                {s.key}
              </button>
            ))}
          </div>
          <div className="subject-panel">
            <h3 className="subject-panel-title">{panel.title}</h3>
            <p className="subject-panel-desc">{panel.desc}</p>
            <span className="subject-panel-label">What We Cover</span>
            <ul className="subject-panel-points">
              {panel.points.map(pt => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            <Link href="/contact" className="btn-navy-sm">Book a Trial Session →</Link>
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
            <Link href="/programs/middle-school" className="related-card">
              <span className="related-card-eyebrow">Years 7–9</span>
              <div className="related-card-title">Middle School Program</div>
              <p className="related-card-desc">Close the gaps before senior school. We cover Maths, English, NAPLAN, and early VCE/SACE foundations.</p>
              <span className="related-card-link">Explore Middle School →</span>
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
          <div className="motto-display" style={{ fontSize: 'clamp(16px,3vw,24px)' }}>Your ATAR Target Is Achievable</div>
          <p className="motto-translation" style={{ marginBottom: 28 }}>Book a free trial session and we will map out the exact path from where you are now to the score you need.</p>
          <Link href="/contact" className="btn-gold">Book a Free Trial</Link>
        </div>
      </div>
    </>
  )
}
