'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/app/components/Breadcrumb'
import { testimonials } from '@/app/data/testimonials'

const subtests = [
  {
    key: 'VR',
    title: 'Verbal Reasoning',
    desc: 'Reading speed, comprehension accuracy, and the logical inference skills that let you answer confidently without re-reading every passage. We drill the question types that trip up fast readers and slow readers alike.',
    points: [
      'True / False / Can\'t Tell logic',
      'Passage comprehension under 2-minute time pressure',
      'Inference vs. stated fact distinction',
      'Keyword scanning and passage mapping technique',
      'Timed question sets — 44 questions in 21 minutes',
      'Error-pattern analysis after every practice set',
    ],
  },
  {
    key: 'DM',
    title: 'Decision Making',
    desc: 'The subtest most candidates underestimate. We teach the logical frameworks — syllogisms, Venn diagrams, probabilistic reasoning, and statistical inference — that turn hesitation into systematic, high-speed answers.',
    points: [
      'Syllogisms and logical deduction',
      'Venn diagram interpretation',
      'Probabilistic and statistical reasoning',
      'Recognising strongest argument types',
      'Yes/No and forced-choice logic drills',
      '29 questions in 31 minutes — time management strategy',
    ],
  },
  {
    key: 'QR',
    title: 'Quantitative Reasoning',
    desc: 'UCAT Maths is not hard — it is fast. We eliminate calculator dependency, drill currency/unit conversions, ratios, and data interpretation until speed and accuracy are automatic, not effortful.',
    points: [
      'Mental arithmetic and non-calculator speed drills',
      'Ratio, proportion, and percentage problems',
      'Data interpretation — tables, graphs and charts',
      'Currency and unit conversion at speed',
      'Multi-step arithmetic under time pressure',
      '36 questions in 25 minutes — question-triage strategy',
    ],
  },
  {
    key: 'AR',
    title: 'Abstract Reasoning',
    desc: 'Abstract reasoning follows recurring patterns. We teach the six core pattern types — number, position, size, colour, shape, and rotation — until every set is decoded in under 60 seconds.',
    points: [
      'Six core pattern-recognition frameworks',
      'Set A vs Set B classification drills',
      'Next shape and statement completion practice',
      'Speed-building: from 90s to under 60s per set',
      '55 questions in 13 minutes — pacing protocol',
      'Full timed mock sets with debrief',
    ],
  },
  {
    key: 'SJT',
    title: 'Situational Judgement',
    desc: 'The SJT assesses medical ethics and professional values — not personality. We decode the marking logic behind every scenario type so you stop guessing and start applying the GMC-aligned framework that produces Band 1 responses.',
    points: [
      'Medical ethics principles (autonomy, beneficence, non-maleficence, justice)',
      'Professionalism and duty of candour frameworks',
      'Patient safety vs. confidentiality scenario types',
      'Appropriate vs. inappropriate response calibration',
      '69 questions in 26 minutes — scenario-type recognition',
      'Past scenario banks and full mock SJT',
    ],
  },
]

export default function UcatPreparation() {
  const [activeSubtest, setActiveSubtest] = useState(0)

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

  const namedTestimonials = testimonials.filter(t => t.cat === 'medical' && t.name !== 'Undisclosed')
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
      { '@type': 'ListItem', position: 3, name: 'Medical School Admissions', item: 'https://titaniumtutoring.com.au/programs/medical-school-admissions' },
      { '@type': 'ListItem', position: 4, name: 'UCAT Preparation', item: 'https://titaniumtutoring.com.au/programs/medical-school-admissions/ucat-preparation' },
    ],
  }

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'UCAT Preparation',
    description: 'Expert UCAT coaching for all five subtests. Timed practice, subtest-specific strategy, and full mock UCAT under exam conditions. In-person in Adelaide and Melbourne, or fully online.',
    url: 'https://titaniumtutoring.com.au/programs/medical-school-admissions/ucat-preparation',
    provider: {
      '@type': 'Organization',
      name: 'Titanium Tutoring',
      url: 'https://titaniumtutoring.com.au',
    },
    educationalLevel: 'Tertiary Entrance',
    teaches: ['Verbal Reasoning', 'Decision Making', 'Quantitative Reasoning', 'Abstract Reasoning', 'Situational Judgement'],
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
      { '@type': 'Question', name: 'How many UCAT coaching sessions do I need?', acceptedAnswer: { '@type': 'Answer', text: 'Most students benefit from 10–20 sessions spread over 3–6 months. We start with a diagnostic across all five subtests and build a schedule based on your weakest areas and exam date.' } },
      { '@type': 'Question', name: 'What UCAT score do I need for Australian medical schools?', acceptedAnswer: { '@type': 'Answer', text: 'Competitive UCAT scores vary by university and year, but a scaled total above 2800 (out of 3600) is generally competitive. Some schools also weight the SJT band separately.' } },
      { '@type': 'Question', name: 'Do you offer UCAT coaching in Adelaide and Melbourne?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer in-person UCAT coaching in both Adelaide (South Australia) and Melbourne (Victoria), as well as fully online sessions for students anywhere in Australia.' } },
      { '@type': 'Question', name: 'When should I start UCAT preparation?', acceptedAnswer: { '@type': 'Answer', text: 'We recommend starting 3–6 months before your UCAT test date. UCAT ANZ testing typically runs from July to August, so a March or April start is ideal.' } },
      { '@type': 'Question', name: 'Which UCAT subtest should I prioritise?', acceptedAnswer: { '@type': 'Answer', text: 'We run a diagnostic test across all five subtests in your first session, then build a subtest-specific plan. Most students underestimate Decision Making and Situational Judgement — these are usually the highest-leverage areas.' } },
      { '@type': 'Question', name: 'Do you also help with MMI interviews and personal statements?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our Medical School Admissions program covers UCAT preparation, MMI interview coaching, and personal statement guidance — either individually or as a combined package.' } },
    ],
  }

  const panel = subtests[activeSubtest]

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
            { label: 'Medical School Admissions', href: '/programs/medical-school-admissions' },
            { label: 'UCAT Preparation' },
          ]} />
          <span className="eyebrow">UCAT ANZ Coaching</span>
          <h1 className="section-title">UCAT Preparation in Adelaide &amp; Melbourne</h1>
          <p className="lead">All five subtests. Diagnostic-first. Timed from day one. Our UCAT coaching builds genuine speed and accuracy across Verbal Reasoning, Decision Making, Quantitative Reasoning, Abstract Reasoning, and Situational Judgement — so nothing on test day is unfamiliar.</p>
        </div>
      </div>

      <section className="curriculum">
        <div className="curriculum-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">The Five Subtests</span>
            <h2 className="section-title">Every Subtest.<br />Coached to the Detail.</h2>
            <p className="lead" style={{ marginTop: 14 }}>UCAT rewards preparation that is specific to each subtest — not generic test-taking advice. We drill the question types, time allocations, and reasoning patterns that actually appear on test day.</p>
            <div className="section-rule" />
          </div>
          <div className="split-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {[
              { label: 'Verbal Reasoning', detail: '44 questions · 21 minutes', variant: 'navy' },
              { label: 'Decision Making', detail: '29 questions · 31 minutes', variant: 'cream' },
              { label: 'Quantitative Reasoning', detail: '36 questions · 25 minutes', variant: 'navy' },
              { label: 'Abstract Reasoning', detail: '55 questions · 13 minutes', variant: 'cream' },
              { label: 'Situational Judgement', detail: '69 questions · 26 minutes', variant: 'navy' },
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
            <span className="eyebrow">Subtest Coaching</span>
            <h2 className="section-title">What We Cover in Each Subtest</h2>
            <p className="lead" style={{ marginTop: 14 }}>Select a subtest to see exactly what we cover and how we coach it.</p>
            <div className="section-rule" />
          </div>
          <div className="subject-tabs">
            {subtests.map((s, i) => (
              <button
                key={s.key}
                className={`subject-tab-btn${activeSubtest === i ? ' active' : ''}`}
                onClick={() => setActiveSubtest(i)}
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
            <span className="eyebrow">Our Approach</span>
            <h2 className="section-title">How We Coach UCAT</h2>
            <div className="section-rule" />
          </div>
          <div className="split-grid">
            <div className="split-card navy slide-left">
              <span className="split-state">Step 1</span>
              <h3>Diagnostic Across All Five Subtests</h3>
              <p className="split-desc">Your first session is a full diagnostic. We identify exactly where you are losing marks in each subtest before we touch strategy.</p>
              <ul className="split-list">
                <li><span className="split-check">✓</span>Baseline score across all five subtests</li>
                <li><span className="split-check">✓</span>Time-per-question analysis by type</li>
                <li><span className="split-check">✓</span>Priority subtest ranking and action plan</li>
              </ul>
            </div>
            <div className="split-card cream slide-right">
              <span className="split-state">Step 2–N</span>
              <h3>Subtest-Specific Strategy Sessions</h3>
              <p className="split-desc">Each session targets the subtest or question type with the highest-leverage improvement potential — not a fixed curriculum.</p>
              <ul className="split-list">
                <li><span className="split-check">✓</span>Technique-first, then timed drilling</li>
                <li><span className="split-check">✓</span>Error-pattern debrief after every set</li>
                <li><span className="split-check">✓</span>Progressive time reduction as accuracy stabilises</li>
              </ul>
            </div>
          </div>
          <div className="split-grid" style={{ marginTop: 24 }}>
            <div className="split-card cream slide-left">
              <span className="split-state">Final Phase</span>
              <h3>Full Mock UCAT Under Exam Conditions</h3>
              <p className="split-desc">In the final weeks before your test date, we run full timed mock exams and debrief every response — so exam day feels like another practice session.</p>
              <ul className="split-list">
                <li><span className="split-check">✓</span>Full 2-hour mock exam — all five subtests</li>
                <li><span className="split-check">✓</span>Score projection and final weak-area targeting</li>
                <li><span className="split-check">✓</span>Day-before strategy and anxiety management</li>
              </ul>
            </div>
            <div className="split-card navy slide-right">
              <span className="split-state">Results</span>
              <h3>Students Accepted to Australian Medical Programs</h3>
              <p className="split-desc">Our UCAT students have gained admission to Bond University Medicine, Monash Medicine, UNSW Medicine, University of Adelaide Medicine, and Flinders Medicine.</p>
              <ul className="split-list">
                <li><span className="split-check">✓</span>Bond University Medicine</li>
                <li><span className="split-check">✓</span>Monash University Medicine</li>
                <li><span className="split-check">✓</span>UNSW Sydney Medicine</li>
                <li><span className="split-check">✓</span>University of Adelaide Medicine</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="related-programs">
        <div className="related-programs-inner">
          <div className="section-header">
            <span className="eyebrow">Explore Related Programs</span>
            <h2 className="section-title">Complete Your Medical<br />School Application</h2>
            <div className="section-rule" style={{ margin: '20px auto 0' }} />
          </div>
          <div className="related-grid">
            <Link href="/programs/medical-school-admissions" className="related-card">
              <span className="related-card-eyebrow">Full Program</span>
              <div className="related-card-title">Medical School Admissions</div>
              <p className="related-card-desc">UCAT coaching, MMI interview preparation, and personal statement guidance — the complete admissions program.</p>
              <span className="related-card-link">Explore Full Program →</span>
            </Link>
            <Link href="/programs/high-school" className="related-card">
              <span className="related-card-eyebrow">Years 10–12</span>
              <div className="related-card-title">High School Program</div>
              <p className="related-card-desc">VCE and SACE coaching to build the ATAR foundation you need before medical school applications open.</p>
              <span className="related-card-link">Explore High School →</span>
            </Link>
            <Link href="/programs/exam-strategy" className="related-card">
              <span className="related-card-eyebrow">Selective Entry & Exams</span>
              <div className="related-card-title">Exam Strategy Program</div>
              <p className="related-card-desc">High-stakes exam technique — time management, question decoding, and performance under pressure.</p>
              <span className="related-card-link">Explore Exam Strategy →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="consult-faq">
        <div className="consult-faq-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2 className="section-title">UCAT Coaching in Adelaide &amp; Melbourne — Common Questions</h2>
            <div className="section-rule" />
          </div>
          <div className="consult-faq-list">
            {[
              { q: 'How many UCAT coaching sessions do I need?', a: 'Most students benefit from 10–20 sessions spread over 3–6 months. We start with a diagnostic across all five subtests and build a schedule based on your weakest areas and exam date.' },
              { q: 'What UCAT score do I need for Australian medical schools?', a: 'Competitive UCAT scores vary by university and year, but a scaled total above 2800 (out of 3600) is generally competitive. Some schools also weight the SJT band separately — we cover both in our coaching.' },
              { q: 'Do you offer UCAT coaching in Adelaide and Melbourne?', a: 'Yes. We offer in-person UCAT coaching in both Adelaide (South Australia) and Melbourne (Victoria), as well as fully online sessions for students anywhere in Australia.' },
              { q: 'When should I start UCAT preparation?', a: 'We recommend starting 3–6 months before your UCAT test date. UCAT ANZ testing typically runs from July to August, so a March or April start is ideal.' },
              { q: 'Which UCAT subtest should I prioritise?', a: 'We run a diagnostic test across all five subtests in your first session, then build a subtest-specific plan. Most students underestimate Decision Making and Situational Judgement — these are usually the highest-leverage areas.' },
              { q: 'Do you also help with MMI interviews and personal statements?', a: 'Yes. Our Medical School Admissions program covers UCAT preparation, MMI interview coaching, and personal statement guidance — either individually or as a combined package.' },
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
          <div className="motto-display" style={{ fontSize: 'clamp(16px,3vw,24px)' }}>Your UCAT Preparation Starts Here</div>
          <p className="motto-translation" style={{ marginBottom: 28 }}>Book a free diagnostic session and we will map out your subtest priorities and UCAT timeline in one conversation.</p>
          <Link href="/contact" className="btn-gold">Book a Free Diagnostic</Link>
        </div>
      </div>
    </>
  )
}
