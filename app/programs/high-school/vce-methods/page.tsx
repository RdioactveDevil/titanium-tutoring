'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/app/components/Breadcrumb'
import { testimonials } from '@/app/data/testimonials'

const topics = [
  {
    key: 'Functions',
    title: 'Functions & Graphs',
    desc: 'The foundation of VCE Methods. We build genuine fluency with function notation, transformations, and graphical analysis — because every later topic depends on this unit being airtight.',
    points: [
      'Function notation, domain, range and co-domain',
      'Transformations — dilations, reflections, translations',
      'Polynomial, exponential and logarithmic functions',
      'Circular functions — sin, cos, tan and their graphs',
      'Inverse functions and composition',
      'Graphical analysis and feature identification',
    ],
  },
  {
    key: 'Calculus',
    title: 'Differential Calculus',
    desc: 'The topic that separates a 30 from a 40. We teach chain rule, product rule, and quotient rule with the same rigour as a university course — then drill the exam question types that actually appear.',
    points: [
      'First principles — limit definition of the derivative',
      'Chain rule — composite function differentiation',
      'Product and quotient rules',
      'Derivatives of exponential, log and trig functions',
      'Applications — tangent lines, rates of change, optimisation',
      'Exam-style extended response technique',
    ],
  },
  {
    key: 'Integration',
    title: 'Integral Calculus',
    desc: 'Where most students lose marks they should not. We systematically close the gap between knowing the antiderivative rules and correctly evaluating definite integrals under exam conditions.',
    points: [
      'Antidifferentiation — rules and techniques',
      'Definite integrals and the Fundamental Theorem of Calculus',
      'Area between curves — setting up correctly',
      'Integration by substitution (reverse chain rule)',
      'Trapezoidal rule and numerical approximation',
      'Common exam traps — bounds, negative area, signing',
    ],
  },
  {
    key: 'Probability',
    title: 'Probability & Statistics',
    desc: 'The most misunderstood unit in VCE Methods. We make the conceptual logic explicit — conditional probability, independence, and the binomial and normal distributions — and teach the CAS technique that gets marks.',
    points: [
      'Discrete and continuous random variables',
      'Binomial distribution — conditions, parameters, CAS',
      'Normal distribution — standardising and z-scores',
      'Conditional probability and independence',
      'Confidence intervals and margin of error',
      'Hypothesis testing (Unit 4)',
    ],
  },
]

export default function VceMethods() {
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
      { '@type': 'ListItem', position: 4, name: 'VCE Mathematical Methods', item: 'https://titaniumtutoring.com.au/programs/high-school/vce-methods' },
    ],
  }

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'VCE Mathematical Methods Tutoring',
    description: 'Specialist VCE Mathematical Methods tutoring for Years 11 and 12. All topics covered to the VCAA study design — functions, differential calculus, integral calculus, probability, and statistics.',
    url: 'https://titaniumtutoring.com.au/programs/high-school/vce-methods',
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
      { '@type': 'Question', name: 'What study score do I need in VCE Mathematical Methods?', acceptedAnswer: { '@type': 'Answer', text: 'A study score of 40 or above in Methods places you in approximately the top 5% of students. Most ATAR targets above 90 require at least a 30–35 in Methods. We work backwards from your ATAR target to set a specific Methods goal.' } },
      { '@type': 'Question', name: 'How many sessions per week do VCE Methods students need?', acceptedAnswer: { '@type': 'Answer', text: 'Most students benefit from one or two sessions per week depending on the unit and proximity to SACs and exams. We recommend weekly sessions as a minimum and increase frequency in the weeks before each SAC.' } },
      { '@type': 'Question', name: 'Do you help with SAC preparation for VCE Methods?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. SAC preparation is a core part of our VCE Methods coaching. We run targeted practice sessions before each SAC, review feedback from completed SACs, and adjust our plan based on what each SAC revealed.' } },
      { '@type': 'Question', name: 'Do you offer VCE Mathematical Methods tutoring in Melbourne?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer in-person VCE Mathematical Methods tutoring in Melbourne. We also offer fully online sessions for VCE students anywhere in Victoria or Australia.' } },
      { '@type': 'Question', name: 'What is the difference between VCE Methods and VCE Specialist Mathematics?', acceptedAnswer: { '@type': 'Answer', text: 'Mathematical Methods (Units 1–4) is a prerequisite for Specialist Mathematics. Methods covers functions, calculus, probability and statistics. Specialist extends into complex numbers, vectors, mechanics, and differential equations — and is generally considered more challenging.' } },
      { '@type': 'Question', name: 'Can you help if my child is behind in VCE Methods mid-year?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We regularly take on VCE students mid-year. The first step is a diagnostic session to identify exactly which topics are incomplete, then we build a priority plan that covers the gaps before the next SAC.' } },
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
            { label: 'VCE Mathematical Methods' },
          ]} />
          <span className="eyebrow">VCE Units 1–4</span>
          <h1 className="section-title">VCE Mathematical Methods Tutoring in Melbourne</h1>
          <p className="lead">Methods is the subject that lifts or limits your ATAR. We coach every topic to the VCAA study design — functions, calculus, probability, and statistics — with the SAC strategy and exam technique that turns understanding into marks.</p>
        </div>
      </div>

      <section className="curriculum">
        <div className="curriculum-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">The Study Design</span>
            <h2 className="section-title">VCE Methods: Year 11 vs Year 12</h2>
            <p className="lead" style={{ marginTop: 14 }}>Units 1 and 2 establish the foundations. Units 3 and 4 determine your study score. We coach both with the same rigour — because what gets skipped in Year 11 becomes a crisis in Year 12.</p>
            <div className="section-rule" />
          </div>
          <div className="split-grid">
            <div className="split-card navy slide-left">
              <span className="split-state">Year 11</span>
              <h3>Units 1 &amp; 2</h3>
              <p className="split-desc">Foundation. Every gap here compounds into Year 12. We build understanding — not just working knowledge.</p>
              <ul className="split-list">
                <li><span className="split-check">✓</span>Functions, relations and graphs</li>
                <li><span className="split-check">✓</span>Algebra and transformations</li>
                <li><span className="split-check">✓</span>Introduction to differential calculus</li>
                <li><span className="split-check">✓</span>Circular functions</li>
                <li><span className="split-check">✓</span>Probability and counting</li>
                <li><span className="split-check">✓</span>SAC strategy and CAS proficiency</li>
              </ul>
              <Link href="/contact" className="btn-gold-sm">Book Year 11 Tutoring →</Link>
            </div>
            <div className="split-card cream slide-right">
              <span className="split-state">Year 12</span>
              <h3>Units 3 &amp; 4</h3>
              <p className="split-desc">Study score territory. Every session is mapped to the exam — calculus depth, SAC preparation, and past-paper drilling.</p>
              <ul className="split-list">
                <li><span className="split-check">✓</span>Advanced calculus — chain, product, quotient rules</li>
                <li><span className="split-check">✓</span>Integral calculus and area under curves</li>
                <li><span className="split-check">✓</span>Discrete and continuous probability distributions</li>
                <li><span className="split-check">✓</span>Binomial and normal distributions</li>
                <li><span className="split-check">✓</span>Statistical inference and hypothesis testing</li>
                <li><span className="split-check">✓</span>Exam 1 (no CAS) and Exam 2 (CAS) technique</li>
              </ul>
              <Link href="/contact" className="btn-navy-sm">Book Year 12 Tutoring →</Link>
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
              <p className="related-card-desc">VCE and SACE coaching across all subjects — not just Methods. English, Chemistry, Physics and more.</p>
              <span className="related-card-link">Explore High School →</span>
            </Link>
            <Link href="/programs/high-school/sace-methods" className="related-card">
              <span className="related-card-eyebrow">South Australia</span>
              <div className="related-card-title">SACE Mathematical Methods</div>
              <p className="related-card-desc">Stage 1 and Stage 2 SACE Mathematical Methods coaching in Adelaide — the same subject, different board.</p>
              <span className="related-card-link">Explore SACE Methods →</span>
            </Link>
            <Link href="/programs/exam-strategy" className="related-card">
              <span className="related-card-eyebrow">Exam Technique</span>
              <div className="related-card-title">Exam Strategy Program</div>
              <p className="related-card-desc">Time management, question decoding, and performance under pressure — applied to VCE exam conditions.</p>
              <span className="related-card-link">Explore Exam Strategy →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="consult-faq">
        <div className="consult-faq-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2 className="section-title">VCE Mathematical Methods Tutoring — Common Questions from Melbourne Parents</h2>
            <div className="section-rule" />
          </div>
          <div className="consult-faq-list">
            {[
              { q: 'What study score do I need in VCE Mathematical Methods?', a: 'A study score of 40 or above in Methods places you in approximately the top 5% of students. Most ATAR targets above 90 require at least a 30–35 in Methods. We work backwards from your ATAR target to set a specific Methods goal.' },
              { q: 'How many sessions per week do VCE Methods students need?', a: 'Most students benefit from one or two sessions per week depending on the unit and proximity to SACs and exams. We recommend weekly sessions as a minimum and increase frequency in the weeks before each SAC.' },
              { q: 'Do you help with SAC preparation for VCE Methods?', a: 'Yes. SAC preparation is a core part of our VCE Methods coaching. We run targeted practice sessions before each SAC, review feedback from completed SACs, and adjust our plan based on what each SAC revealed.' },
              { q: 'Do you offer VCE Mathematical Methods tutoring in Melbourne?', a: 'Yes. We offer in-person VCE Mathematical Methods tutoring in Melbourne. We also offer fully online sessions for VCE students anywhere in Victoria or Australia.' },
              { q: 'What is the difference between VCE Methods and VCE Specialist Mathematics?', a: 'Mathematical Methods (Units 1–4) is a prerequisite for Specialist Mathematics. Methods covers functions, calculus, probability and statistics. Specialist extends into complex numbers, vectors, mechanics, and differential equations.' },
              { q: 'Can you help if my child is behind in VCE Methods mid-year?', a: 'Yes. We regularly take on VCE students mid-year. The first step is a diagnostic session to identify exactly which topics are incomplete, then we build a priority plan that covers the gaps before the next SAC.' },
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
          <div className="motto-display" style={{ fontSize: 'clamp(16px,3vw,24px)' }}>Your VCE Methods Score Is Improvable</div>
          <p className="motto-translation" style={{ marginBottom: 28 }}>Book a free trial session and we will identify exactly where marks are being lost — and how to recover them before the next SAC.</p>
          <Link href="/contact" className="btn-gold">Book a Free Trial</Link>
        </div>
      </div>
    </>
  )
}
