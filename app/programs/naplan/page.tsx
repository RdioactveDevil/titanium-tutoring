'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/app/components/Breadcrumb'
import { testimonials } from '@/app/data/testimonials'

export default function NaplanPage() {
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

  const focusAreas = [
    { n: '01', title: 'Numeracy', desc: 'Number and algebra, measurement and geometry, statistics and probability — every strand covered in the exact proportion the NAPLAN marking guide demands.' },
    { n: '02', title: 'Reading Comprehension', desc: 'Literary and persuasive texts, inferential questions, and vocabulary in context. We train students to extract meaning efficiently under time pressure.' },
    { n: '03', title: 'Writing', desc: 'Narrative and persuasive writing with a structured approach to planning, drafting, and editing within the test-day time limit.' },
    { n: '04', title: 'Language Conventions', desc: 'Spelling, grammar, and punctuation coached to the specific conventions the NAPLAN markers look for at each year level.' },
    { n: '05', title: 'Test Technique', desc: 'Pacing strategies, elimination methods, and stress management so the exam format holds no surprises on the day.' },
    { n: '06', title: 'Progress Tracking', desc: 'Regular practice tests scored and debriefed against NAPLAN benchmarks — so both student and parent can see the trajectory clearly.' },
  ]

  const yearGroups = [
    {
      years: 'Year 3',
      label: 'First Encounter',
      points: [
        'Build number fluency and early algebra foundations',
        'Introduce reading comprehension question types',
        'Structured paragraph and narrative writing',
        'Positive test-day mindset from the start',
      ],
    },
    {
      years: 'Year 5',
      label: 'Consolidation',
      points: [
        'Fractions, decimals, and multi-step problem solving',
        'Persuasive and analytical text responses',
        'Writing craft — structure, vocabulary, and editing',
        'Time management and pacing under exam conditions',
      ],
    },
    {
      years: 'Year 7',
      label: 'Transition',
      points: [
        'Secondary-level numeracy: ratios, geometry, data',
        'Complex inferential reading and synthesis',
        'Persuasive essay writing with clear argument structure',
        'Gap diagnosis from primary school foundations',
      ],
    },
    {
      years: 'Year 9',
      label: 'High Stakes',
      points: [
        'Advanced numeracy and algebraic reasoning',
        'Extended writing tasks with a polished, examiner-aware style',
        'Selective and scholarship exam crossover skills',
        'Results that carry weight for VCE / SACE placement',
      ],
    },
  ]

  const namedTestimonials = testimonials.filter(t => t.cat === 'naplan' && t.name !== 'Undisclosed')
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
      { '@type': 'ListItem', position: 3, name: 'NAPLAN Preparation', item: 'https://titaniumtutoring.com.au/programs/naplan' },
    ],
  }

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'NAPLAN Preparation Program',
    description: 'Numeracy and literacy coaching for Years 3, 5, 7 and 9 NAPLAN. Structured, personalised sessions covering every test domain with timed practice and progress tracking.',
    url: 'https://titaniumtutoring.com.au/programs/naplan',
    provider: {
      '@type': 'Organization',
      name: 'Titanium Tutoring',
      url: 'https://titaniumtutoring.com.au',
    },
    educationalLevel: 'Primary and Middle School (Years 3, 5, 7, 9)',
    teaches: ['Numeracy', 'Reading Comprehension', 'Writing', 'Language Conventions', 'Test Technique'],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      worstRating: '1',
      reviewCount: String(namedTestimonials.length),
    },
    review: schemaReviews,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <div className="page-hero">
        <div className="page-hero-inner">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Programs', href: '/programs' },
            { label: 'NAPLAN Preparation' },
          ]} />
          <span className="eyebrow">Years 3, 5, 7 &amp; 9</span>
          <h1 className="section-title">NAPLAN Preparation</h1>
          <p className="lead">Numeracy and literacy coaching that builds fundamentals, not last-minute cramming. We prepare students for every NAPLAN year level with structured, personalised sessions — so test day is familiar territory.</p>
        </div>
      </div>

      <section className="services">
        <div className="services-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">What We Cover</span>
            <h2 className="section-title">Every Strand. Every Question Type.</h2>
            <p className="lead" style={{ marginTop: 14 }}>NAPLAN tests five domains — we coach every one of them with the Pólya framework applied to each question type your student will face.</p>
            <div className="section-rule" />
          </div>
          <div className="services-grid">
            {focusAreas.map((s, i) => (
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
            <span className="eyebrow">Year-Level Breakdown</span>
            <h2 className="section-title">Tailored to Every<br />NAPLAN Year Level</h2>
            <p className="lead" style={{ marginTop: 14 }}>The content and benchmarks shift at each year level. Our coaching adjusts accordingly — not a one-size-fits-all program.</p>
            <div className="section-rule" />
          </div>
          <div className="split-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {yearGroups.map((g, i) => (
              <div key={i} className={`split-card ${i % 2 === 0 ? 'navy slide-left' : 'cream slide-right'}`}>
                <span className="split-state">{g.years}</span>
                <h3>{g.label}</h3>
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
            <Link href="/programs/exam-strategy" className="related-card">
              <span className="related-card-eyebrow">All Year Levels</span>
              <div className="related-card-title">Exam Strategy &amp; Mindset</div>
              <p className="related-card-desc">Time management, stress resilience, and high-stakes exam technique — the skills no textbook teaches.</p>
              <span className="related-card-link">Explore Exam Strategy →</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="motto-banner">
        <div className="motto-banner-inner">
          <div className="motto-display" style={{ fontSize: 'clamp(16px,3vw,24px)' }}>NAPLAN Is a Skill, Not a Lottery</div>
          <p className="motto-translation" style={{ marginBottom: 28 }}>Book a free consultation and we will assess where your student stands and build a preparation plan around their specific year level and timeline.</p>
          <Link href="/contact" className="btn-gold">Book a Free Consultation</Link>
        </div>
      </div>
    </>
  )
}
