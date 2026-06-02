'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/app/components/Breadcrumb'
import { testimonials } from '@/app/data/testimonials'

const vceSubjects = [
  {
    key: 'Methods',
    title: 'VCE Mathematical Methods',
    href: '/programs/high-school/vce-methods',
    desc: 'Functions, calculus, probability and statistics coached to the VCAA study design. Units 1–4 with SAC strategy and exam technique built into every session.',
    points: [
      'Functions, relations and transformations',
      'Differential calculus — chain, product and quotient rules',
      'Integral calculus and area under curves',
      'Discrete and continuous probability distributions',
      'SAC strategy and mock exam debrief',
      'Last-six-years VCAA exam question drilling',
    ],
  },
  {
    key: 'Specialist',
    title: 'VCE Specialist Mathematics',
    href: null,
    desc: "The most demanding subject on the ATAR scale. Our Specialist coaching targets the question types that separate a 35 from a 45 — with the conceptual depth that holds under exam-room pressure.",
    points: [
      'Complex numbers and argument-form algebra',
      'Vectors and vector calculus',
      'Mechanics — kinematics and dynamics',
      'Differential equations — first and second order',
      'Statistical inference and hypothesis testing',
      'Extended response technique under exam conditions',
    ],
  },
  {
    key: 'English',
    title: 'VCE English',
    href: null,
    desc: 'Text response, comparative essays, language analysis, and persuasive writing — coached to VCAA text selections and criteria. The paragraph structures and moves that examiners explicitly reward.',
    points: [
      'Text response essay structure and analysis',
      'Comparative essay technique (Text and Context)',
      'Language analysis — tone, technique, connotation',
      'Persuasive and argumentative writing',
      'Creative writing and context tasks',
      'Oral presentation and delivery coaching',
    ],
  },
  {
    key: 'Chemistry',
    title: 'VCE Chemistry',
    href: null,
    desc: 'From atomic theory to organic chemistry, coached to the VCAA Chemistry study design — building genuine conceptual understanding alongside calculation technique and SAC preparation.',
    points: [
      'Atomic structure, bonding and periodicity',
      'Acids, bases and pH calculations',
      'Chemical equilibrium and Le Chatelier\'s principle',
      'Organic chemistry — functional groups and polymers',
      'Electrochemistry and galvanic cells',
      'Quantitative analysis and stoichiometry',
    ],
  },
  {
    key: 'Physics',
    title: 'VCE Physics',
    href: null,
    desc: 'Motion, electricity, fields, and waves — coached to the VCAA Physics study design with rigorous problem-solving technique and SAC strategy built into every session.',
    points: [
      'Motion and forces — kinematics and Newton\'s laws',
      'Electrical circuits and electromagnetism',
      'Gravitational, electric and magnetic fields',
      'Waves, light, and optics',
      'Modern physics — quantum and special relativity',
      'SAC strategy and extended response technique',
    ],
  },
]

const saceSubjects = [
  {
    key: 'Methods',
    title: 'SACE Mathematical Methods',
    href: '/programs/high-school/sace-methods',
    desc: 'Functions, calculus, probability and statistics coached to SACE Board performance standards. Stage 1 and Stage 2 with folio task strategy and SAT preparation.',
    points: [
      'Functions, relations and transformations',
      'Differential calculus and applications',
      'Integral calculus and area under curves',
      'Discrete and continuous probability distributions',
      'Folio task strategy and SAT preparation',
      'Performance Standard A techniques',
    ],
  },
  {
    key: 'Physics',
    title: 'SACE Physics',
    href: '/programs/high-school/sace-physics',
    desc: 'Motion, electricity, waves, and modern physics — coached to SACE Board performance standards with rigorous problem-solving and investigation report technique.',
    points: [
      'Motion — linear, projectile and circular',
      'Electrical circuits, electromagnetism and induction',
      'Gravitational, electric and magnetic fields',
      'Waves, light, interference and diffraction',
      'Modern physics — quantum theory and special relativity',
      'Investigation report writing for assessment',
    ],
  },
  {
    key: 'Chemistry',
    title: 'SACE Chemistry',
    href: '/programs/high-school/sace-chemistry',
    desc: 'From atomic structure to organic chemistry, coached to SACE Board performance standards — conceptual understanding plus calculation technique and investigation skills.',
    points: [
      'Atomic structure, bonding and periodicity',
      'Acids, bases and pH calculations',
      'Chemical equilibrium and Le Chatelier\'s principle',
      'Organic chemistry — functional groups and reactions',
      'Electrochemistry and galvanic cells',
      'Quantitative analysis and stoichiometry',
    ],
  },
  {
    key: 'Biology',
    title: 'SACE Biology',
    href: '/programs/high-school/sace-biology',
    desc: 'Cells, genetics, evolution, and ecosystems — coached to SACE Board performance standards with investigation design skills and data analysis technique built in.',
    points: [
      'Cell biology — structure, function and cellular processes',
      'Genetics — inheritance, mutation and gene expression',
      'Evolution and natural selection',
      'Ecosystems and ecological interactions',
      'Investigation design and data analysis',
      'Performance Standard A response technique',
    ],
  },
  {
    key: 'English',
    title: 'SACE English',
    href: '/programs/high-school/sace-english',
    desc: 'Text analysis, essays, creative and multimodal tasks — coached to SACE English performance standards with the specific response structures and language that markers reward.',
    points: [
      'Text analysis and literary essay structure',
      'Analytical and comparative responses',
      'Language technique identification and effect',
      'Creative writing — narrative and reflective',
      'Multimodal and oral presentation tasks',
      'Performance Standard A writing technique',
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

const subjectDeepDives = [
  { eyebrow: 'Victoria · Units 1–4', title: 'VCE Mathematical Methods', desc: 'Functions, calculus, probability and statistics coached to the VCAA study design. SAC strategy and exam technique included.', href: '/programs/high-school/vce-methods', link: 'Explore VCE Methods →' },
  { eyebrow: 'South Australia · Stage 1 & 2', title: 'SACE Mathematical Methods', desc: 'Functions, calculus, probability and statistics coached to SACE Board performance standards. Folio task and SAT strategy included.', href: '/programs/high-school/sace-methods', link: 'Explore SACE Methods →' },
  { eyebrow: 'South Australia · Stage 1 & 2', title: 'SACE Physics', desc: 'Motion, electricity, waves, and modern physics coached to SACE Board performance standards with investigation report technique.', href: '/programs/high-school/sace-physics', link: 'Explore SACE Physics →' },
  { eyebrow: 'South Australia · Stage 1 & 2', title: 'SACE Chemistry', desc: 'Atomic theory to organic chemistry — conceptual understanding, calculation technique, and investigation skills to Performance Standard A.', href: '/programs/high-school/sace-chemistry', link: 'Explore SACE Chemistry →' },
  { eyebrow: 'South Australia · Stage 1 & 2', title: 'SACE Biology', desc: 'Cells, genetics, evolution, and ecosystems — with investigation design and data analysis technique built into every session.', href: '/programs/high-school/sace-biology', link: 'Explore SACE Biology →' },
  { eyebrow: 'South Australia · Stage 1 & 2', title: 'SACE English', desc: 'Text analysis, essays, and creative tasks coached to SACE English performance standards — the structures and language markers reward.', href: '/programs/high-school/sace-english', link: 'Explore SACE English →' },
]

export default function HighSchool() {
  const [activeCurriculum, setActiveCurriculum] = useState<'vic' | 'sa'>('vic')
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

  const handleCurriculumChange = (c: 'vic' | 'sa') => {
    setActiveCurriculum(c)
    setActiveSubject(0)
  }

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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How much does VCE or SACE tutoring in Adelaide and Melbourne cost?', acceptedAnswer: { '@type': 'Answer', text: 'Pricing depends on the subject, year level, and session frequency. We offer a free strategy call where we map out exactly what is needed before any cost discussion.' } },
      { '@type': 'Question', name: 'What year levels does your High School program cover?', acceptedAnswer: { '@type': 'Answer', text: 'We tutor Year 10, Year 11, and Year 12 students across both VCE (Victoria) and SACE (South Australia). We also accept Year 9 students who want to get ahead before senior school begins.' } },
      { '@type': 'Question', name: 'Do you offer tutoring in-person in Adelaide and Melbourne, or is it online?', acceptedAnswer: { '@type': 'Answer', text: 'We work with students in Adelaide and Melbourne in-person, and we also offer fully online sessions for students across the rest of Australia.' } },
      { '@type': 'Question', name: 'How long before exams should we start VCE or SACE tutoring?', acceptedAnswer: { '@type': 'Answer', text: 'Ideally at the start of Year 11 or at minimum the start of Year 12. We regularly take on students mid-year or even in the final term before exams.' } },
      { '@type': 'Question', name: 'Which VCE and SACE subjects do you tutor?', acceptedAnswer: { '@type': 'Answer', text: 'We cover Mathematical Methods, Specialist Mathematics, English, Literature, Chemistry, Physics, and most other VCE and SACE subjects.' } },
      { '@type': 'Question', name: 'How do I know if my child is on track to hit their ATAR target?', acceptedAnswer: { '@type': 'Answer', text: 'In our free strategy call, we do a subject-by-subject gap analysis based on their current results and target ATAR. You leave with a written plan showing exactly where marks are being lost and how to recover them.' } },
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

  const currentSubjects = activeCurriculum === 'vic' ? vceSubjects : saceSubjects
  const panel = currentSubjects[activeSubject]

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
            { label: 'High School' },
          ]} />
          <span className="eyebrow">Years 10–12</span>
          <h1 className="section-title">VCE &amp; SACE Tutoring</h1>
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
            <p className="lead" style={{ marginTop: 14 }}>Select your state, then choose a subject to see exactly what we cover and how we coach it.</p>
            <div className="section-rule" />
          </div>
          <div style={{ textAlign: 'center' }}>
            <div className="curriculum-toggle">
              <button
                className={`curriculum-toggle-btn${activeCurriculum === 'vic' ? ' active' : ''}`}
                onClick={() => handleCurriculumChange('vic')}
              >
                VIC — VCE
              </button>
              <button
                className={`curriculum-toggle-btn${activeCurriculum === 'sa' ? ' active' : ''}`}
                onClick={() => handleCurriculumChange('sa')}
              >
                SA — SACE
              </button>
            </div>
          </div>
          <div className="subject-tabs">
            {currentSubjects.map((s, i) => (
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
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-navy-sm">Book a Trial Session →</Link>
              {panel.href && (
                <Link href={panel.href} style={{ fontSize: 13, fontWeight: 700, color: 'var(--gold-600)', letterSpacing: '0.06em', textDecoration: 'none' }}>
                  Full {panel.key} subject guide →
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="related-programs">
        <div className="related-programs-inner">
          <div className="section-header">
            <span className="eyebrow">Specialist Coaching</span>
            <h2 className="section-title">Subject-Specific<br />Deep Dives</h2>
            <div className="section-rule" style={{ margin: '20px auto 0' }} />
          </div>
          <div className="related-grid" style={{ marginBottom: 48 }}>
            {subjectDeepDives.map((s) => (
              <Link key={s.href} href={s.href} className="related-card">
                <span className="related-card-eyebrow">{s.eyebrow}</span>
                <div className="related-card-title">{s.title}</div>
                <p className="related-card-desc">{s.desc}</p>
                <span className="related-card-link">{s.link}</span>
              </Link>
            ))}
          </div>
          <div className="section-header" style={{ marginTop: 0 }}>
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

      <section className="consult-faq">
        <div className="consult-faq-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2 className="section-title">VCE &amp; SACE Tutoring — Common Questions from Adelaide &amp; Melbourne Parents</h2>
            <div className="section-rule" />
          </div>
          <div className="consult-faq-list">
            {[
              { q: 'How much does VCE or SACE tutoring in Adelaide and Melbourne cost?', a: 'Pricing depends on the subject, year level, and session frequency. We offer a free strategy call where we map out exactly what is needed before any cost discussion — so you are never paying for sessions you do not need.' },
              { q: 'What year levels does your High School program cover?', a: 'We tutor Year 10, Year 11, and Year 12 students across both VCE (Victoria) and SACE (South Australia). We also accept Year 9 students who want to get ahead before senior school begins.' },
              { q: 'Do you offer tutoring in-person in Adelaide and Melbourne, or is it online?', a: 'We work with students in Adelaide and Melbourne in-person, and we also offer fully online sessions for students across the rest of Australia. The quality of coaching is identical either way.' },
              { q: 'How long before exams should we start VCE or SACE tutoring?', a: 'Ideally at the start of Year 11 or at minimum the start of Year 12. However, we regularly take on students mid-year or even in the final term before exams — we work with the timeline available and make every session count.' },
              { q: 'Which VCE and SACE subjects do you tutor?', a: 'We cover Mathematical Methods, Specialist Mathematics, English, Literature, Chemistry, Physics, and most other VCE and SACE subjects. Contact us with your specific subject and we will confirm availability.' },
              { q: 'How do I know if my child is on track to hit their ATAR target?', a: 'In our free strategy call, we do a subject-by-subject gap analysis based on their current results and target ATAR. You leave with a written plan showing exactly where marks are being lost and how to recover them.' },
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
          <div className="motto-display" style={{ fontSize: 'clamp(16px,3vw,24px)' }}>Your ATAR Target Is Achievable</div>
          <p className="motto-translation" style={{ marginBottom: 28 }}>Book a free trial session and we will map out the exact path from where you are now to the score you need.</p>
          <Link href="/contact" className="btn-gold">Book a Free Trial</Link>
        </div>
      </div>
    </>
  )
}
