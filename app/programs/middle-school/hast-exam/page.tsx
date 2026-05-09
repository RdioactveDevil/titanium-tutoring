'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/app/components/Breadcrumb'
import { testimonials } from '@/app/data/testimonials'

const sections = [
  {
    key: 'Abstract',
    title: 'Abstract Reasoning',
    desc: 'Abstract reasoning follows six recurring pattern types — number, position, size, colour, shape, and rotation. We drill each pattern family until recognition is automatic and every set is solved in under 60 seconds.',
    points: [
      'Six core pattern families — number, position, size, colour, shape, rotation',
      'Set A vs. Set B classification strategy',
      'Progressive time reduction: 90s → 60s → 45s per set',
      'Elimination vs. positive identification technique',
      'Full timed abstract reasoning banks and mock sets',
      'Error-pattern analysis and targeted re-drilling',
    ],
  },
  {
    key: 'Verbal',
    title: 'Verbal Reasoning',
    desc: 'Analogies, odd-one-out, passage comprehension, and vocabulary in context. We build the vocabulary depth, inference skill, and reading speed that HAST verbal tasks reward.',
    points: [
      'Word analogies — relationships and category logic',
      'Odd-one-out classification frameworks',
      'Passage comprehension under time pressure',
      'Vocabulary in context and connotation recognition',
      'Inference vs. stated fact distinction',
      'Speed-reading techniques for dense passages',
    ],
  },
  {
    key: 'Quantitative',
    title: 'Quantitative Reasoning',
    desc: 'Number series, data interpretation, spatial reasoning, and word problems. We close the gap between classroom maths and the applied reasoning HAST actually tests.',
    points: [
      'Number series — linear, geometric, mixed patterns',
      'Data interpretation — tables, graphs, charts',
      'Word problems and multi-step reasoning',
      'Spatial and visual reasoning tasks',
      'Mental arithmetic and non-calculator speed',
      'Exam-format timed practice with debrief',
    ],
  },
  {
    key: 'Written',
    title: 'Written Expression',
    desc: 'Persuasive and narrative writing under time pressure. We teach the paragraph structures, vocabulary choices, and planning techniques that produce high-scoring responses in 25–30 minutes.',
    points: [
      'Persuasive essay structure — claim, evidence, reasoning',
      'Narrative writing — tension, character, resolution',
      'Timed planning: 5 minutes of structure before writing',
      'Vocabulary lift — from functional to sophisticated',
      'Editing under time pressure — what to fix and what to leave',
      'Marking rubric decoding for each school\'s criteria',
    ],
  },
]

export default function HastExam() {
  const [activeSection, setActiveSection] = useState(0)

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

  const namedTestimonials = testimonials.filter(t => (t.cat === 'selective' || t.cat === 'scholarship') && t.name !== 'Undisclosed')
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
      { '@type': 'ListItem', position: 4, name: 'HAST Exam', item: 'https://titaniumtutoring.com.au/programs/middle-school/hast-exam' },
    ],
  }

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'HAST Exam Coaching',
    description: 'Selective school entry coaching for the HAST exam — abstract reasoning, verbal reasoning, quantitative reasoning, and written expression for Year 9 and 10 selective school entry.',
    url: 'https://titaniumtutoring.com.au/programs/middle-school/hast-exam',
    provider: {
      '@type': 'Organization',
      name: 'Titanium Tutoring',
      url: 'https://titaniumtutoring.com.au',
    },
    educationalLevel: 'Middle School (Years 8–9)',
    teaches: ['Abstract Reasoning', 'Verbal Reasoning', 'Quantitative Reasoning', 'Written Expression'],
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
      { '@type': 'Question', name: 'What is the HAST exam?', acceptedAnswer: { '@type': 'Answer', text: 'HAST stands for the Humanities and Social Sciences, Aptitude, Science and Technology Test. It is used for selective school entry in South Australia (including Glenunga International High School and Adelaide High School) and is similar to EduTest used in Victoria.' } },
      { '@type': 'Question', name: 'When is the HAST exam and who sits it?', acceptedAnswer: { '@type': 'Answer', text: 'The HAST exam is typically sat in Year 9 for entry into Year 10 at selective government high schools in South Australia. Applications generally open in Term 2 with the exam in Term 3.' } },
      { '@type': 'Question', name: 'How long before the HAST exam should we start preparation?', acceptedAnswer: { '@type': 'Answer', text: 'We recommend starting 3–6 months before the exam. Abstract reasoning in particular benefits from extended drilling — pattern recognition speed takes time to build.' } },
      { '@type': 'Question', name: 'Which schools use the HAST exam for selective entry?', acceptedAnswer: { '@type': 'Answer', text: 'In South Australia, selective entry schools including Glenunga International High School, Adelaide High School, and Botanic High School use the HAST or similar aptitude tests for Year 10 entry.' } },
      { '@type': 'Question', name: 'Do you also coach for EduTest and other selective entry exams?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We coach for HAST, EduTest, and the selective entry exams used by Melbourne High, Suzanne Cory, Mac.Rob, and other selective schools across Victoria and South Australia.' } },
      { '@type': 'Question', name: 'Do you offer HAST coaching in person in Adelaide?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer in-person HAST coaching in Adelaide, South Australia. We also offer fully online sessions for students elsewhere in Australia.' } },
    ],
  }

  const panel = sections[activeSection]

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
            { label: 'Middle School', href: '/programs/middle-school' },
            { label: 'HAST Exam' },
          ]} />
          <span className="eyebrow">Selective School Entry</span>
          <h1 className="section-title">HAST Exam Coaching in Adelaide &amp; Melbourne</h1>
          <p className="lead">The HAST exam rewards preparation that is specific — not generic study advice. We coach abstract reasoning, verbal reasoning, quantitative thinking, and written expression to the exact format of each selective entry exam so that nothing on test day is unfamiliar.</p>
        </div>
      </div>

      <section className="curriculum">
        <div className="curriculum-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">The HAST Exam Format</span>
            <h2 className="section-title">What the HAST Tests<br />&amp; How We Prepare For It</h2>
            <p className="lead" style={{ marginTop: 14 }}>The HAST assesses four core competencies. Each one rewards a specific preparation strategy — not general intelligence.</p>
            <div className="section-rule" />
          </div>
          <div className="split-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {[
              { label: 'Abstract Reasoning', detail: 'Pattern recognition and non-verbal logic', variant: 'navy' },
              { label: 'Verbal Reasoning', detail: 'Analogies, comprehension, vocabulary in context', variant: 'cream' },
              { label: 'Quantitative Reasoning', detail: 'Number series, data interpretation, word problems', variant: 'navy' },
              { label: 'Written Expression', detail: 'Persuasive and narrative writing under time pressure', variant: 'cream' },
            ].map((item, i) => (
              <div key={i} className={`split-card ${item.variant} fade-in`} data-delay={`${i * 80}`}>
                <span className="split-state">{item.label}</span>
                <h3 style={{ fontSize: 'clamp(14px,1.4vw,16px)', fontWeight: 500, marginBottom: 0 }}>{item.detail}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services">
        <div className="services-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">What We Teach</span>
            <h2 className="section-title">Section-by-Section Coaching</h2>
            <p className="lead" style={{ marginTop: 14 }}>Select a section to see exactly what we cover and how we coach it.</p>
            <div className="section-rule" />
          </div>
          <div className="subject-tabs">
            {sections.map((s, i) => (
              <button
                key={s.key}
                className={`subject-tab-btn${activeSection === i ? ' active' : ''}`}
                onClick={() => setActiveSection(i)}
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

      <section className="curriculum">
        <div className="curriculum-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">Selective Schools</span>
            <h2 className="section-title">Schools Our Students<br />Have Entered</h2>
            <p className="lead" style={{ marginTop: 14 }}>Our students have gained entry to some of Australia's most competitive selective government high schools.</p>
            <div className="section-rule" />
          </div>
          <div className="split-grid">
            <div className="split-card navy slide-left">
              <span className="split-state">South Australia</span>
              <h3>HAST Selective Schools</h3>
              <ul className="split-list">
                <li><span className="split-check">✓</span>Glenunga International High School</li>
                <li><span className="split-check">✓</span>Adelaide High School</li>
                <li><span className="split-check">✓</span>Botanic High School</li>
                <li><span className="split-check">✓</span>Marryatville High School</li>
              </ul>
              <Link href="/contact" className="btn-gold-sm">Book HAST Coaching →</Link>
            </div>
            <div className="split-card cream slide-right">
              <span className="split-state">Victoria</span>
              <h3>EduTest Selective Schools</h3>
              <ul className="split-list">
                <li><span className="split-check">✓</span>Melbourne High School</li>
                <li><span className="split-check">✓</span>Suzanne Cory High School</li>
                <li><span className="split-check">✓</span>Mac.Robertson Girls&apos; High School</li>
                <li><span className="split-check">✓</span>John Monash Science School</li>
              </ul>
              <Link href="/contact" className="btn-navy-sm">Book Selective Entry Coaching →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="related-programs">
        <div className="related-programs-inner">
          <div className="section-header">
            <span className="eyebrow">Explore Related Programs</span>
            <h2 className="section-title">Other Middle School<br />Programs</h2>
            <div className="section-rule" style={{ margin: '20px auto 0' }} />
          </div>
          <div className="related-grid">
            <Link href="/programs/middle-school" className="related-card">
              <span className="related-card-eyebrow">Years 7–9</span>
              <div className="related-card-title">Middle School Program</div>
              <p className="related-card-desc">Full middle school program covering Maths, English, NAPLAN, selective entry, and scholarship preparation.</p>
              <span className="related-card-link">Explore Middle School →</span>
            </Link>
            <Link href="/programs/high-school" className="related-card">
              <span className="related-card-eyebrow">Years 10–12</span>
              <div className="related-card-title">High School Program</div>
              <p className="related-card-desc">VCE and SACE coaching for the years after selective entry — from first SAC to final exam.</p>
              <span className="related-card-link">Explore High School →</span>
            </Link>
            <Link href="/programs/exam-strategy" className="related-card">
              <span className="related-card-eyebrow">High-Stakes Exams</span>
              <div className="related-card-title">Exam Strategy Program</div>
              <p className="related-card-desc">Time management, question decoding, and performance under pressure — for every high-stakes exam.</p>
              <span className="related-card-link">Explore Exam Strategy →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="consult-faq">
        <div className="consult-faq-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2 className="section-title">HAST Exam Coaching in Adelaide — Common Questions</h2>
            <div className="section-rule" />
          </div>
          <div className="consult-faq-list">
            {[
              { q: 'What is the HAST exam?', a: 'HAST stands for the Humanities and Social Sciences, Aptitude, Science and Technology Test. It is used for selective school entry in South Australia and is similar to EduTest used for selective school entry in Victoria.' },
              { q: 'When is the HAST exam and who sits it?', a: 'The HAST exam is typically sat in Year 9 for entry into Year 10 at selective government high schools in South Australia. Applications generally open in Term 2 with the exam in Term 3.' },
              { q: 'How long before the HAST exam should we start preparation?', a: 'We recommend starting 3–6 months before the exam. Abstract reasoning in particular benefits from extended drilling — pattern recognition speed takes time to build and cannot be crammed in the final weeks.' },
              { q: 'Which schools use the HAST exam for selective entry?', a: 'In South Australia, selective entry schools including Glenunga International High School, Adelaide High School, and Botanic High School use the HAST or similar aptitude tests for Year 10 entry.' },
              { q: 'Do you also coach for EduTest and other selective entry exams?', a: 'Yes. We coach for HAST, EduTest, and the selective entry exams used by Melbourne High, Suzanne Cory, Mac.Rob, and other selective schools across Victoria and South Australia.' },
              { q: 'Do you offer HAST coaching in person in Adelaide?', a: 'Yes. We offer in-person HAST coaching in Adelaide, South Australia. We also offer fully online sessions for students elsewhere in Australia.' },
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
          <div className="motto-display" style={{ fontSize: 'clamp(16px,3vw,24px)' }}>Selective Entry Is Within Reach</div>
          <p className="motto-translation" style={{ marginBottom: 28 }}>Book a free trial session and we will assess where your child is across all four HAST sections — no commitment required.</p>
          <Link href="/contact" className="btn-gold">Book a Free Trial</Link>
        </div>
      </div>
    </>
  )
}
