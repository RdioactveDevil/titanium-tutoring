'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/app/components/Breadcrumb'
import { testimonials } from '@/app/data/testimonials'

const subjects = [
  {
    key: 'Maths',
    title: 'Mathematics',
    desc: 'Algebra, geometry, indices, linear equations, probability and statistics — building systematically on primary foundations while preparing students for the demands of Year 10 and beyond. We close gaps before they turn into VCE and SACE crises.',
    points: [
      'Algebra — expressions, equations and factorisation',
      'Geometry — angles, triangles and circle theorems',
      'Indices, surds and exponential rules',
      'Linear and non-linear graphs',
      'Statistics and probability',
      'Quadratics and trigonometry (Year 9)',
    ],
  },
  {
    key: 'English',
    title: 'English',
    desc: 'Analytical writing, persuasive essays, and text response — with the paragraph structures and vocabulary choices that secondary markers actually reward. We focus on the skills that directly transfer to VCE, SACE, and every written task in between.',
    points: [
      'Analytical and persuasive essay structure',
      'Text response and literary analysis',
      'Language technique identification and analysis',
      'Vocabulary and sophistication of expression',
      'Narrative and creative writing',
      'Grammar, punctuation and mechanics',
    ],
  },
  {
    key: 'IGNITE',
    title: 'IGNITE — Advanced Acceleration',
    desc: 'Our IGNITE program is designed for high-achieving middle school students who are ready to move beyond their year level. We introduce Year 10 and early VCE concepts in Year 8 or 9, creating a genuine head start for senior school and separating students from their cohort.',
    points: [
      'Year 10 Mathematics content in Year 8 or 9',
      'Advanced problem solving and mathematical thinking',
      'Early introduction to VCE and SACE concepts',
      'Extension and enrichment beyond the curriculum',
      'Competition-style problem solving (AMC, IMAS)',
      'Pólya framework for unfamiliar and complex problems',
    ],
  },
  {
    key: 'NAPLAN',
    title: 'NAPLAN Preparation',
    desc: 'Years 7 and 9 NAPLAN in Numeracy and Literacy. Full question-type familiarity, timed practice, and targeted weak-area drilling — so students perform to their actual ability on test day, not their anxiety level.',
    points: [
      'Numeracy — all question formats and difficulty bands',
      'Reading — complex comprehension and inference',
      'Writing — persuasive and narrative prompts',
      'Language conventions — grammar, spelling and punctuation',
      'Year 7 and Year 9 specific preparation',
      'Diagnostic testing and personalised drilling',
    ],
  },
  {
    key: 'Selective Entry',
    title: 'Selective Entry Coaching',
    desc: 'HAST and EduTest preparation for Year 9 and 10 selective school entry. We coach abstract reasoning, verbal reasoning, quantitative thinking, and written tasks to the exact format of each exam — so nothing on test day is unfamiliar.',
    points: [
      'Abstract and non-verbal reasoning',
      'Verbal reasoning and reading speed',
      'Quantitative and mathematical reasoning',
      'Written expression under time pressure',
      'School-specific formats — HAST and EduTest',
      'Mock exams and performance debrief',
    ],
  },
  {
    key: 'Scholarships',
    title: 'Scholarship Coaching',
    desc: 'Private school scholarship exam preparation — combining academic testing with written expression and, where required, interview preparation. We coach to the specific criteria and rubric of each school\'s selection process.',
    points: [
      'Academic testing — Maths and English components',
      'Written expression and creative tasks',
      'Scholarship essay and personal statement drafting',
      'Interview preparation and confidence coaching',
      'School-specific criteria and exam formats',
      'Merit and means-tested scholarship strategy',
    ],
  },
]

const yearGroups = [
  { years: 'Year 7', label: 'Transition Year', points: ['Consolidate primary maths — fractions, ratios, percentages', 'NAPLAN Year 7 Numeracy & Literacy', 'Introduction to analytical writing', 'Algebra foundations and linear thinking'] },
  { years: 'Year 8', label: 'Building Blocks', points: ['Equations, geometry, and graphing', 'Persuasive and expository writing', 'Vocabulary expansion and reading speed', 'Scholarship and selective entry groundwork'] },
  { years: 'Year 9', label: 'Pre-Senior Readiness', points: ['NAPLAN Year 9 Numeracy & Literacy', 'Quadratics, trigonometry, statistics', 'Extended essay writing and analysis', 'Year 10 preview: early VCE/SACE foundations'] },
]

export default function MiddleSchool() {
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

  const namedTestimonials = testimonials.filter(t => (t.cat === 'selective' || t.cat === 'naplan') && t.name !== 'Undisclosed')
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
      { '@type': 'ListItem', position: 3, name: 'Middle School', item: 'https://titaniumtutoring.com.au/programs/middle-school' },
    ],
  }

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Middle School Tutoring Program',
    description: 'Personalised tutoring for Years 7–9 covering Mathematics, English, NAPLAN preparation, IGNITE advanced acceleration, selective entry coaching, and scholarship preparation.',
    url: 'https://titaniumtutoring.com.au/programs/middle-school',
    provider: {
      '@type': 'Organization',
      name: 'Titanium Tutoring',
      url: 'https://titaniumtutoring.com.au',
    },
    educationalLevel: 'Middle School (Years 7–9)',
    teaches: ['Mathematics', 'English', 'NAPLAN Preparation', 'Selective Entry Coaching', 'Scholarship Coaching', 'Advanced Acceleration'],
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
            { label: 'Middle School' },
          ]} />
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
