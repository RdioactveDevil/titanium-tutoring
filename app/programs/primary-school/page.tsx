'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/app/components/Breadcrumb'
import { testimonials } from '@/app/data/testimonials'

const subjects = [
  {
    key: 'Maths',
    title: 'Mathematics',
    desc: 'Number, operations, fractions, measurement, geometry, and early algebra — taught with genuine conceptual understanding, not just procedure drilling. Every session is personalised to the student\'s current year level and the specific gaps we find in our initial assessment.',
    points: [
      'Number bonds, place value and counting strategies',
      'Multiplication, division and fractions',
      'Decimals, percentages and ratios',
      'Measurement — length, area, volume and time',
      'Early algebra and pattern recognition',
      'Geometry and spatial reasoning',
    ],
  },
  {
    key: 'English',
    title: 'English',
    desc: 'From phonics and early reading through to structured paragraph and essay writing — we develop the literacy skills that underpin every subject. Teaching is tailored to exactly where each student is in the Australian Curriculum, then accelerated from there.',
    points: [
      'Phonics and reading fluency',
      'Vocabulary and comprehension strategies',
      'Sentence and paragraph construction',
      'Narrative and creative writing',
      'Persuasive and informative text types',
      'Spelling, grammar and punctuation',
    ],
  },
  {
    key: 'NAPLAN',
    title: 'NAPLAN Preparation',
    desc: 'Years 3 and 5 NAPLAN in Numeracy and Literacy. We drill every question type, build time awareness, and ensure test day holds no surprises — so students walk in with confidence and perform to their actual ability, not their exam anxiety.',
    points: [
      'Numeracy — calculator and non-calculator formats',
      'Reading — comprehension and inference questions',
      'Writing — narrative and persuasive prompts',
      'Language conventions — grammar, spelling, punctuation',
      'Timed practice under real test conditions',
      'Weak-area identification and targeted drilling',
    ],
  },
  {
    key: 'Selective Entry',
    title: 'Selective Entry & Scholarship Coaching',
    desc: 'Early preparation for HAST and private school scholarship exams from Year 5 or 6. We coach abstract reasoning, quantitative thinking, verbal reasoning, and written expression to the specific format of each exam — so nothing on test day is unfamiliar.',
    points: [
      'Abstract and non-verbal reasoning',
      'Quantitative and mathematical reasoning',
      'Verbal reasoning and vocabulary',
      'Written expression tasks',
      'EduTest and HAST format familiarisation',
      'Time management and exam technique',
    ],
  },
]

const yearGroups = [
  { years: 'Years 1–2', label: 'Early Foundation', points: ['Number bonds & counting strategies', 'Phonics and basic reading fluency', 'Handwriting and sentence construction', 'Listening and comprehension skills'] },
  { years: 'Years 3–4', label: 'Core Skills', points: ['Multiplication, division & fractions', 'NAPLAN Year 3 preparation', 'Paragraph writing & text types', 'Reading comprehension strategies'] },
  { years: 'Years 5–6', label: 'Acceleration', points: ['Early algebra and geometry', 'NAPLAN Year 5 preparation', 'Essay structure and extended writing', 'Selective entry & scholarship readiness'] },
]

export default function PrimarySchool() {
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

  const namedTestimonials = testimonials.filter(t => (t.cat === 'naplan' || t.cat === 'scholarship') && t.name !== 'Undisclosed')
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
      { '@type': 'ListItem', position: 3, name: 'Primary School', item: 'https://titaniumtutoring.com.au/programs/primary-school' },
    ],
  }

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Primary School Tutoring Program',
    description: 'Personalised tutoring for Years 1–6 covering core Maths and English acceleration, NAPLAN preparation, and selective entry coaching.',
    url: 'https://titaniumtutoring.com.au/programs/primary-school',
    provider: {
      '@type': 'Organization',
      name: 'Titanium Tutoring',
      url: 'https://titaniumtutoring.com.au',
    },
    educationalLevel: 'Primary School (Years 1–6)',
    teaches: ['Mathematics', 'English', 'NAPLAN Preparation', 'Selective Entry Coaching'],
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
            { label: 'Primary School' },
          ]} />
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
