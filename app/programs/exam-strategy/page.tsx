'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/app/components/Breadcrumb'
import { testimonials } from '@/app/data/testimonials'

export default function ExamStrategyPage() {
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

  const pillars = [
    { n: '01', title: 'Time Management', desc: 'We teach students to budget time per question, identify which problems to attempt first, and avoid the common trap of spending too long on a single item at the expense of the rest of the paper.' },
    { n: '02', title: 'Stress Resilience', desc: 'Controlled breathing, pre-exam routines, and in-session reset techniques. Students who can manage their stress in the room consistently outperform those who cannot — even with equal preparation.' },
    { n: '03', title: 'Question Deconstruction', desc: "Every exam question contains structural signals. We train students to decode what is actually being asked — including the marks available — so they don't write three paragraphs when one will do." },
    { n: '04', title: 'Elimination & Guessing Strategy', desc: 'For multiple-choice exams: how to eliminate distractor options, when to guess, and how to avoid second-guessing a correct first instinct. Measurable marks on every paper.' },
    { n: '05', title: 'Answer Presentation', desc: 'Examiners cannot award marks they cannot find. We coach students to set out working clearly, use notation correctly, and structure written responses in the format markers are trained to reward.' },
    { n: '06', title: 'Mock Exam Debrief', desc: 'Completing a practice paper is half the work. We debrief every mock exam question by question — turning errors into insight and insight into technique adjustments before the real thing.' },
  ]

  const examTypes = [
    {
      label: 'VCE & SACE',
      variant: 'navy',
      title: 'Senior School',
      points: [
        'SAC and exam structure, mark allocations, and timing',
        'Study design alignment — answering what is actually asked',
        'Written response frameworks for high-scoring answers',
        'Managing multi-subject exam season without burnout',
      ],
    },
    {
      label: 'NAPLAN · Selective · Scholarships',
      variant: 'cream',
      title: 'Competitive Entry',
      points: [
        'NAPLAN pacing and domain-switching technique',
        'HAST and EduTest abstract reasoning under time pressure',
        'Scholarship written task planning and execution',
        'Mindset coaching for high-stakes, single-sitting exams',
      ],
    },
  ]

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
      { '@type': 'ListItem', position: 3, name: 'Exam Strategy & Mindset', item: 'https://titaniumtutoring.com.au/programs/exam-strategy' },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What exams does your Exam Strategy program cover?', acceptedAnswer: { '@type': 'Answer', text: 'We cover VCE, SACE, NAPLAN, selective entry exams (HAST, EduTest), and scholarship exams. The core framework is the same — we adapt it to the specific format and mark scheme of your child\'s exam.' } },
      { '@type': 'Question', name: 'Is Exam Strategy tutoring available for students in Adelaide and Melbourne?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer Exam Strategy coaching in person in Adelaide (South Australia) and Melbourne (Victoria), as well as online Australia-wide.' } },
      { '@type': 'Question', name: 'How much does Exam Strategy coaching cost in Adelaide or Melbourne?', acceptedAnswer: { '@type': 'Answer', text: 'Fees depend on the number and frequency of sessions. Contact us for a free consultation and we will recommend a program based on your student\'s upcoming exams and timeline.' } },
      { '@type': 'Question', name: 'When is the best time to start exam strategy coaching for VCE or SACE?', acceptedAnswer: { '@type': 'Answer', text: 'Ideally 6–8 weeks before a major exam block. However, even 2–3 sessions of targeted strategy coaching in the final weeks can produce measurable improvements in scores.' } },
      { '@type': 'Question', name: 'How do I know if my child needs exam strategy coaching?', acceptedAnswer: { '@type': 'Answer', text: 'If your child understands the content but underperforms on test day, struggles to finish exams, or gets anxious under time pressure, exam strategy coaching is likely the highest-leverage intervention.' } },
    ],
  }

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Exam Strategy & Mindset Program',
    description: 'High-stakes exam technique coaching for all year levels. Time management, stress resilience, question deconstruction, and mock exam debrief for VCE, SACE, NAPLAN, and selective entry exams.',
    url: 'https://titaniumtutoring.com.au/programs/exam-strategy',
    provider: {
      '@type': 'Organization',
      name: 'Titanium Tutoring',
      url: 'https://titaniumtutoring.com.au',
    },
    educationalLevel: 'All Year Levels',
    teaches: ['Time Management', 'Stress Resilience', 'Question Deconstruction', 'Elimination Strategy', 'Answer Presentation', 'Mock Exam Debrief'],
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="page-hero">
        <div className="page-hero-inner">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Programs', href: '/programs' },
            { label: 'Exam Strategy & Mindset' },
          ]} />
          <span className="eyebrow">All Year Levels</span>
          <h1 className="section-title">Exam Strategy &amp; Mindset Coaching in Adelaide &amp; Melbourne | VCE, SACE &amp; NAPLAN</h1>
          <p className="lead">Time management, stress resilience, and high-stakes exam technique. The skills no textbook teaches — and the ones that separate students who know the content from those who score it.</p>
        </div>
      </div>

      <section className="services">
        <div className="services-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">Six Pillars</span>
            <h2 className="section-title">What We Teach</h2>
            <p className="lead" style={{ marginTop: 14 }}>Exam performance is a skill set — learnable, practicable, and measurable. These are the six areas we develop in every student, regardless of their year level or subject.</p>
            <div className="section-rule" />
          </div>
          <div className="services-grid">
            {pillars.map((s, i) => (
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
            <span className="eyebrow">Applied to Your Exam</span>
            <h2 className="section-title">Strategy Built for<br />Your Specific Context</h2>
            <p className="lead" style={{ marginTop: 14 }}>Generic exam tips are not enough. We tailor our coaching to the specific exam format, mark allocations, and common student errors in each assessment type.</p>
            <div className="section-rule" />
          </div>
          <div className="split-grid">
            {examTypes.map((et, i) => (
              <div key={i} className={`split-card ${et.variant} ${i === 0 ? 'slide-left' : 'slide-right'}`}>
                <span className="split-state">{et.label}</span>
                <h3>{et.title}</h3>
                <ul className="split-list">
                  {et.points.map(pt => (
                    <li key={pt}><span className="split-check">✓</span>{pt}</li>
                  ))}
                </ul>
                <Link href="/contact" className={et.variant === 'navy' ? 'btn-gold-sm' : 'btn-navy-sm'}>Book a Session →</Link>
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
            <Link href="/programs/high-school" className="related-card">
              <span className="related-card-eyebrow">Years 10–12</span>
              <div className="related-card-title">High School Program</div>
              <p className="related-card-desc">VCE and SACE coaching across every subject — from your first SAC to your final ATAR exam.</p>
              <span className="related-card-link">Explore High School →</span>
            </Link>
            <Link href="/programs/naplan" className="related-card">
              <span className="related-card-eyebrow">Years 3, 5, 7 &amp; 9</span>
              <div className="related-card-title">NAPLAN Preparation</div>
              <p className="related-card-desc">Numeracy and literacy coaching that builds fundamentals — not last-minute cramming.</p>
              <span className="related-card-link">Explore NAPLAN →</span>
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

      <section className="consult-faq">
        <div className="consult-faq-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2 className="section-title">Exam Strategy Coaching in Adelaide &amp; Melbourne — Common Questions</h2>
            <div className="section-rule" />
          </div>
          <div className="consult-faq-list">
            {[
              { q: 'What exams does your Exam Strategy program cover?', a: 'We cover VCE, SACE, NAPLAN, selective entry exams (HAST, EduTest), and scholarship exams. The core framework is the same — we adapt it to the specific format and mark scheme of your child\'s exam.' },
              { q: 'Is Exam Strategy tutoring available for students in Adelaide and Melbourne?', a: 'Yes. We offer Exam Strategy coaching in person in Adelaide (South Australia) and Melbourne (Victoria), as well as online Australia-wide.' },
              { q: 'How much does Exam Strategy coaching cost in Adelaide or Melbourne?', a: 'Fees depend on the number and frequency of sessions. Contact us for a free consultation and we will recommend a program based on your student\'s upcoming exams and timeline.' },
              { q: 'When is the best time to start exam strategy coaching for VCE or SACE?', a: 'Ideally 6–8 weeks before a major exam block. However, even 2–3 sessions of targeted strategy coaching in the final weeks can produce measurable improvements in scores.' },
              { q: 'How do I know if my child needs exam strategy coaching?', a: 'If your child understands the content but underperforms on test day, struggles to finish exams, or gets anxious under time pressure, exam strategy coaching is likely the highest-leverage intervention.' },
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
          <div className="motto-display" style={{ fontSize: 'clamp(16px,3vw,24px)' }}>The Right Technique Changes Everything</div>
          <p className="motto-translation" style={{ marginBottom: 28 }}>Book a free consultation and we will identify the specific exam skills holding your student back — and build a plan to fix them before the next sitting.</p>
          <Link href="/contact" className="btn-gold">Book a Free Consultation</Link>
        </div>
      </div>
    </>
  )
}
