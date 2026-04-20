'use client'
import { useEffect } from 'react'
import Link from 'next/link'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Tutoring Programs – Titanium Tutoring',
  description:
    'From Year 1 to Year 12 — plus specialist entry exams and UCAT preparation. Every program is built around the Pólya method and personalised to the individual student.',
  url: 'https://www.titaniumtutoring.com.au/programs',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'High School Tutoring (Years 10–12)',
      url: 'https://www.titaniumtutoring.com.au/programs/high-school',
      item: {
        '@type': 'Course',
        name: 'High School Tutoring (Years 10–12)',
        description:
          'VCE and SACE tutoring for Years 10–12. Expert coaching in Maths, English, and all senior subjects — personalised to your curriculum, ATAR target, and timeline.',
        url: 'https://www.titaniumtutoring.com.au/programs/high-school',
        provider: {
          '@type': 'EducationalOrganization',
          name: 'Titanium Tutoring',
          url: 'https://www.titaniumtutoring.com.au',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'NAPLAN Preparation',
      url: 'https://www.titaniumtutoring.com.au/programs/naplan',
      item: {
        '@type': 'Course',
        name: 'NAPLAN Preparation',
        description:
          'Numeracy and literacy coaching for Years 3, 5, 7 and 9. We build fundamentals that stick, not last-minute cramming.',
        url: 'https://www.titaniumtutoring.com.au/programs/naplan',
        provider: {
          '@type': 'EducationalOrganization',
          name: 'Titanium Tutoring',
          url: 'https://www.titaniumtutoring.com.au',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Primary School Tutoring (Years 1–6)',
      url: 'https://www.titaniumtutoring.com.au/programs/primary-school',
      item: {
        '@type': 'Course',
        name: 'Primary School Tutoring (Years 1–6)',
        description:
          'Years 1–6 Maths and English. Building confident, curious learners — strong foundations that make every year after easier.',
        url: 'https://www.titaniumtutoring.com.au/programs/primary-school',
        provider: {
          '@type': 'EducationalOrganization',
          name: 'Titanium Tutoring',
          url: 'https://www.titaniumtutoring.com.au',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Middle School Tutoring (Years 7–10)',
      url: 'https://www.titaniumtutoring.com.au/programs/middle-school',
      item: {
        '@type': 'Course',
        name: 'Middle School Tutoring (Years 7–10)',
        description:
          'Get ahead before VCE or SACE begins. We identify gaps early and close them before they compound.',
        url: 'https://www.titaniumtutoring.com.au/programs/middle-school',
        provider: {
          '@type': 'EducationalOrganization',
          name: 'Titanium Tutoring',
          url: 'https://www.titaniumtutoring.com.au',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Exam Strategy & Mindset',
      url: 'https://www.titaniumtutoring.com.au/programs/exam-strategy',
      item: {
        '@type': 'Course',
        name: 'Exam Strategy & Mindset',
        description:
          'Time management, stress resilience, and high-stakes exam technique. The skills no textbook teaches.',
        url: 'https://www.titaniumtutoring.com.au/programs/exam-strategy',
        provider: {
          '@type': 'EducationalOrganization',
          name: 'Titanium Tutoring',
          url: 'https://www.titaniumtutoring.com.au',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 6,
      name: 'UCAT & Medical School Admissions',
      url: 'https://www.titaniumtutoring.com.au/programs/medical-school-admissions',
      item: {
        '@type': 'Course',
        name: 'UCAT & Medical School Admissions',
        description:
          'All five UCAT subtests, MMI interview coaching, personal statement guidance, and application strategy for aspiring medical students.',
        url: 'https://www.titaniumtutoring.com.au/programs/medical-school-admissions',
        provider: {
          '@type': 'EducationalOrganization',
          name: 'Titanium Tutoring',
          url: 'https://www.titaniumtutoring.com.au',
        },
      },
    },
  ],
}

export default function Programs() {
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

  const services = [
    { n: '01', title: 'Selective Entry & Scholarships', desc: 'HAST, Suzanne Cory, Melbourne High, scholarship exams. We have been through these doors and know what the markers want.', href: '/programs/high-school' },
    { n: '02', title: 'VCE & SACE Mathematics', desc: "Pólya's four-step framework applied to every problem type. Methods, Specialist, General Maths — study scores, not just passes.", href: '/programs/high-school' },
    { n: '03', title: 'NAPLAN Preparation', desc: 'Numeracy and literacy coaching for Years 3, 5, 7 and 9. We build fundamentals that stick, not last-minute cramming.', href: '/programs/naplan' },
    { n: '04', title: 'Primary Maths & English', desc: 'Years 1–6. Building confident, curious learners. Strong foundations make every year after easier.', href: '/programs/primary-school' },
    { n: '05', title: 'Year 7–10 Acceleration', desc: 'Get ahead before VCE or SACE begins. We identify gaps early and close them before they compound.', href: '/programs/middle-school' },
    { n: '06', title: 'Exam Strategy & Mindset', desc: 'Time management, stress resilience, and high-stakes exam technique. The skills no textbook teaches.', href: '/programs/exam-strategy' },
    { n: '07', title: 'UCAT & Medical School Admissions', desc: 'All five UCAT subtests, MMI interview coaching, personal statement guidance, and application strategy for aspiring medical students.', href: '/programs/medical-school-admissions' },
  ]

  const polyaSteps = [
    { n: '01', title: 'Understand', desc: 'Diagnose exactly where the student is — strengths, gaps, and how they think about problems.' },
    { n: '02', title: 'Plan', desc: 'Build a personalised strategy: which topics to drill, which methods to rehearse, in what order.' },
    { n: '03', title: 'Execute', desc: 'Weekly sessions, worksheets and topic tests. The work is visible and the pace is measurable.' },
    { n: '04', title: 'Reflect', desc: 'Review every result. Adjust the plan. Repeat until the target is reached.' },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* PAGE HEADER */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">What We Offer</span>
          <h1 className="section-title">Our Programs</h1>
          <p className="lead">From Year 1 to Year 12 — plus specialist entry exams. Every program is built around the Pólya method and personalised to the individual student.</p>
        </div>
      </div>

      {/* VCE vs SACE */}
      <section className="curriculum">
        <div className="curriculum-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">Choose Your Path</span>
            <h2 className="section-title">VCE or SACE?<br />We Know Both Inside Out.</h2>
            <p className="lead" style={{ marginTop: 14 }}>Whether you are in Victoria or South Australia — our coaching is built for your specific curriculum, your specific exam board, and your specific ATAR target.</p>
            <div className="section-rule" />
          </div>
          <div className="split-grid">
            <div className="split-card navy slide-left">
              <span className="split-state">Victoria</span>
              <h3>VCE</h3>
              <p className="split-desc">Victorian Certificate of Education — we coach Year 11 and 12 students from their first SAC to their final exam, with study score targets in every subject.</p>
              <ul className="split-list">
                {['Mathematical Methods & Specialist Maths','VCE English & Literature','General Achievement Test (GAT) preparation','SAC strategy, mock exams & deep debrief','Selective entry — Melbourne High, Mac.Rob, Suzanne Cory'].map(item => (
                  <li key={item}><span className="split-check">✓</span>{item}</li>
                ))}
              </ul>
              <Link href="/contact" className="btn-gold-sm">Book VCE Tutoring →</Link>
            </div>
            <div className="split-card cream slide-right">
              <span className="split-state">South Australia</span>
              <h3>SACE</h3>
              <p className="split-desc">South Australian Certificate of Education — Stage 1 and Stage 2, with full ATAR coaching to the SACE Board&apos;s Performance Standards from the very first lesson.</p>
              <ul className="split-list">
                {['Mathematical Methods & Specialist Maths','SACE English & Essential English','Research Project (Personal Interest Project)','Performance Standards & marking rubric mastery','Scholarship prep for Adelaide\'s top schools'].map(item => (
                  <li key={item}><span className="split-check">✓</span>{item}</li>
                ))}
              </ul>
              <Link href="/contact" className="btn-navy-sm">Book SACE Tutoring →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <div className="services-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">All Programs</span>
            <h2 className="section-title">Programs We Run</h2>
            <p className="lead" style={{ marginTop: 14 }}>From primary school through to ATAR season — every program is structured, personalised, and results-focused.</p>
            <div className="section-rule" />
          </div>
          <div className="services-grid">
            {services.map((s, i) => {
              const inner = (
                <>
                  <span className="service-num">STEP {s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  {s.href && <span className="service-link-hint">Learn more →</span>}
                </>
              )
              return s.href ? (
                <Link href={s.href} className="service-card service-card--link fade-in" key={i} data-delay={`${i * 70}`}>
                  {inner}
                </Link>
              ) : (
                <div className="service-card fade-in" key={i} data-delay={`${i * 70}`}>
                  {inner}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* PÓLYA METHOD */}
      <section className="polya">
        <div className="polya-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">The Pólya Method</span>
            <h2 className="section-title">Understand. Plan.<br />Execute. Reflect.</h2>
            <p className="lead" style={{ marginTop: 14 }}>Inspired by George Pólya&apos;s <em>How to Solve It</em> — four steps we apply to every student, every subject, every week.</p>
            <div className="section-rule" />
          </div>
          <div className="polya-grid">
            {polyaSteps.map((s, i) => (
              <div className="polya-card fade-in" key={i} data-delay={`${i * 80}`}>
                <span className="polya-step">STEP {s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="motto-banner">
        <div className="motto-banner-inner">
          <div className="motto-display" style={{ fontSize: 'clamp(16px,3vw,24px)' }}>Ready to Start?</div>
          <p className="motto-translation" style={{ marginBottom: 28 }}>Book a free consultation and we will map out exactly how we would approach your preparation.</p>
          <Link href="/contact" className="btn-gold">Book a Free Consultation</Link>
        </div>
      </div>
    </>
  )
}
