'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/app/components/Breadcrumb'
import { testimonials } from '@/app/data/testimonials'

const topics = [
  {
    key: 'Functions',
    title: 'Functions & Graphs',
    desc: 'The foundation of SACE Methods. We build fluency with function notation, transformations, and graphical analysis against the SACE Board performance standards — because every later topic depends on this unit being solid.',
    points: [
      'Function notation, domain, range and co-domain',
      'Transformations — dilations, reflections, translations',
      'Polynomial, exponential and logarithmic functions',
      'Circular functions — sin, cos, tan and their graphs',
      'Inverse functions and composition',
      'Performance Standard A graphical interpretation tasks',
    ],
  },
  {
    key: 'Calculus',
    title: 'Differential Calculus',
    desc: 'The unit that separates an A from a B in SACE Methods. We teach chain rule, product rule, and quotient rule with the rigour the performance standards require — then drill the question types that appear in assessments.',
    points: [
      'First principles — limit definition of the derivative',
      'Chain rule — composite function differentiation',
      'Product and quotient rules',
      'Derivatives of exponential, log and trig functions',
      'Applications — tangent lines, rates of change, optimisation',
      'Folio task and exam response technique',
    ],
  },
  {
    key: 'Integration',
    title: 'Integral Calculus',
    desc: 'Where SACE Methods students lose marks they should not. We systematically close the gap between knowing the antiderivative rules and correctly evaluating definite integrals — especially the area between curves setup.',
    points: [
      'Antidifferentiation — rules and techniques',
      'Definite integrals and the Fundamental Theorem of Calculus',
      'Area between curves — setting up correctly',
      'Integration by substitution (reverse chain rule)',
      'Common assessment traps — bounds, negative area, signing',
      'Stage 1 and Stage 2 integration task formats',
    ],
  },
  {
    key: 'Probability',
    title: 'Probability & Statistics',
    desc: 'The most misunderstood unit in SACE Methods. We make the conceptual logic explicit — conditional probability, independence, and the binomial and normal distributions — and teach the calculator technique that gets marks.',
    points: [
      'Discrete and continuous random variables',
      'Binomial distribution — conditions, parameters, calculator',
      'Normal distribution — standardising and z-scores',
      'Conditional probability and independence',
      'Confidence intervals and margin of error',
      'Statistical inference task formats (Stage 2)',
    ],
  },
]

export default function SaceMethods() {
  const [activeTopic, setActiveTopic] = useState(0)

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

  const namedTestimonials = testimonials.filter(t => t.cat === 'atar' && t.name !== 'Undisclosed')
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
      { '@type': 'ListItem', position: 4, name: 'SACE Mathematical Methods', item: 'https://titaniumtutoring.com.au/programs/high-school/sace-methods' },
    ],
  }

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'SACE Mathematical Methods Tutoring',
    description: 'Specialist SACE Mathematical Methods tutoring for Stage 1 and Stage 2. All topics covered to SACE Board performance standards — functions, differential calculus, integral calculus, probability, and statistics.',
    url: 'https://titaniumtutoring.com.au/programs/high-school/sace-methods',
    provider: {
      '@type': 'Organization',
      name: 'Titanium Tutoring',
      url: 'https://titaniumtutoring.com.au',
    },
    educationalLevel: 'High School (Years 11–12)',
    teaches: ['Functions and Graphs', 'Differential Calculus', 'Integral Calculus', 'Probability', 'Statistics'],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      worstRating: '1',
      reviewCount: String(Math.max(namedTestimonials.length, 1)),
    },
    review: schemaReviews,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What performance standard do I need in SACE Mathematical Methods?', acceptedAnswer: { '@type': 'Answer', text: 'A Performance Standard A (the highest) puts you in the top tier and gives the strongest ATAR contribution from Methods. We map every student\'s current performance against the SACE Board\'s descriptors and build a plan to move them up.' } },
      { '@type': 'Question', name: 'How does SACE Mathematical Methods differ from VCE Mathematical Methods?', acceptedAnswer: { '@type': 'Answer', text: 'The content is very similar — both cover functions, calculus, probability, and statistics. The main difference is assessment structure: SACE uses school-based assessments (SATs) and a Performance Standards framework rather than study scores, and Stage 2 includes a folio component.' } },
      { '@type': 'Question', name: 'Do you help with SACE Mathematical Methods folio tasks and SATs?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Folio task and SAT preparation is a core part of our SACE Methods coaching. We help students understand the assessment criteria, structure their responses to hit Performance Standard A descriptors, and review drafts.' } },
      { '@type': 'Question', name: 'Do you offer SACE Mathematical Methods tutoring in Adelaide?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer in-person SACE Mathematical Methods tutoring in Adelaide, South Australia. We also offer fully online sessions for SACE students anywhere in South Australia or Australia.' } },
      { '@type': 'Question', name: 'What is the difference between SACE Stage 1 and Stage 2 Methods?', acceptedAnswer: { '@type': 'Answer', text: 'Stage 1 is typically Year 11 and covers the foundational topics — functions, introductory calculus, and statistics. Stage 2 is Year 12 and is the subject that contributes to your ATAR. It extends calculus and probability significantly and includes a folio assessment component.' } },
      { '@type': 'Question', name: 'Can you help if my child is behind in SACE Methods mid-year?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We regularly take on SACE students mid-year. The first step is a diagnostic session to identify exactly which topics are incomplete, then we build a priority plan that covers the gaps before the next SAT or exam.' } },
    ],
  }

  const panel = topics[activeTopic]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="page-hero">
        <div className="page-hero-inner">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Programs', href: '/programs' },
            { label: 'High School', href: '/programs/high-school' },
            { label: 'SACE Mathematical Methods' },
          ]} />
          <span className="eyebrow">SACE Stage 1 &amp; 2</span>
          <h1 className="section-title">SACE Mathematical Methods Tutoring in Adelaide</h1>
          <p className="lead">Methods is the subject most SACE students underestimate until it is too late. We coach every topic to the SACE Board performance standards — functions, calculus, probability, and statistics — with the folio strategy and exam technique that turns understanding into an A.</p>
        </div>
      </div>

      <section className="curriculum">
        <div className="curriculum-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">The Study Design</span>
            <h2 className="section-title">SACE Methods: Stage 1 vs Stage 2</h2>
            <p className="lead" style={{ marginTop: 14 }}>Stage 1 builds the foundation. Stage 2 determines your ATAR. We coach both with the same structured rigour — because what gets skipped in Stage 1 becomes a crisis in Stage 2.</p>
            <div className="section-rule" />
          </div>
          <div className="split-grid">
            <div className="split-card navy slide-left">
              <span className="split-state">Year 11</span>
              <h3>Stage 1</h3>
              <p className="split-desc">Foundation. Every gap here compounds into Stage 2. We build understanding — not just working knowledge.</p>
              <ul className="split-list">
                <li><span className="split-check">✓</span>Functions, relations and graphs</li>
                <li><span className="split-check">✓</span>Algebra and transformations</li>
                <li><span className="split-check">✓</span>Introduction to differential calculus</li>
                <li><span className="split-check">✓</span>Circular functions</li>
                <li><span className="split-check">✓</span>Probability and counting</li>
                <li><span className="split-check">✓</span>SAT strategy and assessment criteria</li>
              </ul>
              <Link href="/contact" className="btn-gold-sm">Book Stage 1 Tutoring →</Link>
            </div>
            <div className="split-card cream slide-right">
              <span className="split-state">Year 12</span>
              <h3>Stage 2</h3>
              <p className="split-desc">ATAR territory. Every session is mapped to the performance standards — calculus depth, folio preparation, and past-exam drilling.</p>
              <ul className="split-list">
                <li><span className="split-check">✓</span>Advanced calculus — chain, product, quotient rules</li>
                <li><span className="split-check">✓</span>Integral calculus and area under curves</li>
                <li><span className="split-check">✓</span>Discrete and continuous probability distributions</li>
                <li><span className="split-check">✓</span>Binomial and normal distributions</li>
                <li><span className="split-check">✓</span>Statistical inference</li>
                <li><span className="split-check">✓</span>Folio task strategy and Performance Standard A criteria</li>
              </ul>
              <Link href="/contact" className="btn-navy-sm">Book Stage 2 Tutoring →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="services-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">Topic Coverage</span>
            <h2 className="section-title">What We Cover &amp; How</h2>
            <p className="lead" style={{ marginTop: 14 }}>Select a topic area to see exactly what we cover and how we coach it.</p>
            <div className="section-rule" />
          </div>
          <div className="subject-tabs">
            {topics.map((t, i) => (
              <button
                key={t.key}
                className={`subject-tab-btn${activeTopic === i ? ' active' : ''}`}
                onClick={() => setActiveTopic(i)}
              >
                {t.key}
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
            <span className="eyebrow">Explore Related Programs</span>
            <h2 className="section-title">Other High School<br />Programs</h2>
            <div className="section-rule" style={{ margin: '20px auto 0' }} />
          </div>
          <div className="related-grid">
            <Link href="/programs/high-school" className="related-card">
              <span className="related-card-eyebrow">Full Program</span>
              <div className="related-card-title">High School Program</div>
              <p className="related-card-desc">SACE and VCE coaching across all subjects — not just Methods. English, Chemistry, Physics and more.</p>
              <span className="related-card-link">Explore High School →</span>
            </Link>
            <Link href="/programs/high-school/vce-methods" className="related-card">
              <span className="related-card-eyebrow">Victoria</span>
              <div className="related-card-title">VCE Mathematical Methods</div>
              <p className="related-card-desc">Units 1–4 VCE Mathematical Methods coaching in Melbourne — the same subject, VCAA study design.</p>
              <span className="related-card-link">Explore VCE Methods →</span>
            </Link>
            <Link href="/programs/exam-strategy" className="related-card">
              <span className="related-card-eyebrow">Exam Technique</span>
              <div className="related-card-title">Exam Strategy Program</div>
              <p className="related-card-desc">Time management, question decoding, and performance under pressure — applied to SACE exam conditions.</p>
              <span className="related-card-link">Explore Exam Strategy →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="consult-faq">
        <div className="consult-faq-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2 className="section-title">SACE Mathematical Methods Tutoring — Common Questions from Adelaide Parents</h2>
            <div className="section-rule" />
          </div>
          <div className="consult-faq-list">
            {[
              { q: 'What performance standard do I need in SACE Mathematical Methods?', a: 'A Performance Standard A (the highest) puts you in the top tier and gives the strongest ATAR contribution from Methods. We map every student\'s current performance against the SACE Board\'s descriptors and build a plan to move them up.' },
              { q: 'How does SACE Mathematical Methods differ from VCE Mathematical Methods?', a: 'The content is very similar — both cover functions, calculus, probability, and statistics. The main difference is assessment structure: SACE uses school-based assessments (SATs) and a Performance Standards framework rather than study scores, and Stage 2 includes a folio component.' },
              { q: 'Do you help with SACE Mathematical Methods folio tasks and SATs?', a: 'Yes. Folio task and SAT preparation is a core part of our SACE Methods coaching. We help students understand the assessment criteria, structure their responses to hit Performance Standard A descriptors, and review drafts.' },
              { q: 'Do you offer SACE Mathematical Methods tutoring in Adelaide?', a: 'Yes. We offer in-person SACE Mathematical Methods tutoring in Adelaide, South Australia. We also offer fully online sessions for SACE students anywhere in South Australia or Australia.' },
              { q: 'What is the difference between SACE Stage 1 and Stage 2 Methods?', a: 'Stage 1 is typically Year 11 and covers the foundational topics — functions, introductory calculus, and statistics. Stage 2 is Year 12 and is the subject that contributes to your ATAR. It extends calculus and probability significantly and includes a folio assessment component.' },
              { q: 'Can you help if my child is behind in SACE Methods mid-year?', a: 'Yes. We regularly take on SACE students mid-year. The first step is a diagnostic session to identify exactly which topics are incomplete, then we build a priority plan that covers the gaps before the next SAT or exam.' },
            ].map((f, i) => (
              <div className="consult-faq-item" key={i}>
                <div className="consult-faq-q" style={{ cursor: 'default' }}>
                  <span style={{ fontWeight: 600 }}>{f.q}</span>
                </div>
                <div className="consult-faq-a" style={{ display: 'block', paddingTop: 8 }}>{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="motto-banner">
        <div className="motto-banner-inner">
          <div className="motto-display" style={{ fontSize: 'clamp(16px,3vw,24px)' }}>Your SACE Methods Grade Is Improvable</div>
          <p className="motto-translation" style={{ marginBottom: 28 }}>Book a free trial session and we will identify exactly where performance standard marks are being lost — and how to recover them.</p>
          <Link href="/contact" className="btn-gold">Book a Free Trial</Link>
        </div>
      </div>
    </>
  )
}
