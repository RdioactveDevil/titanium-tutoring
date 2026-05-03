'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumb from '@/app/components/Breadcrumb'
import { testimonials } from '@/app/data/testimonials'

export default function MedicalSchoolAdmissions() {
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
    { n: '01', title: 'UCAT Coaching', desc: 'All five subtests: Verbal Reasoning, Decision Making, Quantitative Reasoning, Abstract Reasoning, and Situational Judgement. We drill each subtest with timed practice and targeted strategy.' },
    { n: '02', title: 'Decision Making Mastery', desc: 'The subtest most candidates underestimate. We teach the logical frameworks — syllogisms, Venn diagrams, statistical inference — that turn a 600 into a 900.' },
    { n: '03', title: 'Situational Judgement Training', desc: 'Medical ethics, professionalism, and the GMC-aligned principles that underpin every SJT scenario. We decode the marking logic so you stop guessing and start scoring.' },
    { n: '04', title: 'Interview Preparation', desc: 'MMI circuit coaching, panel interview technique, and structured scenario practice. We run full mock MMI stations and debrief every response for tone, content, and self-awareness.' },
    { n: '05', title: 'Personal Statement Guidance', desc: 'From brainstorming through to final polish. We help you identify the experiences that matter, structure a compelling narrative, and write with the clarity medical schools expect.' },
    { n: '06', title: 'Application Strategy', desc: 'Course shortlisting, timing of applications, and understanding what each medical school actually looks for. We help you build a competitive portfolio, not just a form.' },
  ]

  const phases = [
    {
      phase: 'UCAT Preparation',
      timeline: '3–6 months before test',
      title: 'Build Your UCAT Score Systematically',
      points: ['Diagnostic test across all five subtests', 'Subtest-specific strategy and timed drilling', 'Full mock UCAT under exam conditions', 'Weak-subtest targeting in final weeks'],
      variant: 'navy',
    },
    {
      phase: 'Application & Personal Statement',
      timeline: 'Concurrent with UCAT prep',
      title: 'A Statement That Opens Doors',
      points: ['Experience audit — what counts, what to highlight', 'Structured drafting with iterative feedback', 'Final review against university-specific criteria', 'Supplementary application support'],
      variant: 'cream',
    },
    {
      phase: 'Interview Preparation',
      timeline: '4–8 weeks before interview',
      title: 'Perform When It Counts',
      points: ['MMI circuit — 8–10 full mock stations', 'Panel interview Q&A and structured debrief', 'Medical ethics and professionalism frameworks', 'Body language, pacing, and self-awareness coaching'],
      variant: 'navy',
    },
  ]

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
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How much does UCAT coaching in Adelaide or Melbourne cost?', acceptedAnswer: { '@type': 'Answer', text: 'Pricing depends on the number of sessions and whether you are combining UCAT coaching with interview preparation and personal statement guidance. Book a free consultation for a tailored quote.' } },
      { '@type': 'Question', name: 'Do you offer UCAT tutoring in person in Adelaide and Melbourne?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer in-person UCAT and medical admissions coaching in Adelaide (South Australia) and Melbourne (Victoria), as well as fully online sessions.' } },
      { '@type': 'Question', name: 'What medical schools does your admissions coaching cover?', acceptedAnswer: { '@type': 'Answer', text: 'We coach students applying to Bond University, Monash, UNSW, Flinders, University of Adelaide, and all other Australian medical programs that use the UCAT and MMI interview.' } },
      { '@type': 'Question', name: 'How early should I start UCAT preparation?', acceptedAnswer: { '@type': 'Answer', text: 'We recommend starting 3–6 months before your UCAT test date. This gives sufficient time to work through all five subtests systematically and run full mock exams in the final weeks.' } },
      { '@type': 'Question', name: 'Do you offer MMI interview coaching for medical school?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We run full mock MMI circuits covering ethical scenarios, communication tasks, and role plays. Each session is debriefed in detail so you can improve before your real interview.' } },
    ],
  }

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Medical School Admissions Coaching',
    description: 'Expert coaching for medical school admissions including UCAT preparation, MMI interview technique, and personal statement guidance.',
    url: 'https://titaniumtutoring.com.au/programs/medical-school-admissions',
    provider: {
      '@type': 'Organization',
      name: 'Titanium Tutoring',
      url: 'https://titaniumtutoring.com.au',
    },
    educationalLevel: 'Tertiary Entrance',
    teaches: ['UCAT Coaching', 'Decision Making', 'Situational Judgement', 'MMI Interview Preparation', 'Personal Statement Guidance', 'Medical School Application Strategy'],
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
            { label: 'Medical School Admissions' },
          ]} />
          <span className="eyebrow">UCAT · Interviews · Personal Statements</span>
          <h1 className="section-title">Medical School Admissions Coaching</h1>
        </div>
      </div>

      <section className="uni-logos fade-in">
        <div className="uni-logos-inner">
          <div className="section-header" style={{ marginBottom: 28 }}>
            <span className="eyebrow">Proven Results</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(18px,2.2vw,24px)' }}>Our Students Have Been Accepted To</h2>
            <div className="section-rule" style={{ margin: '14px auto 0' }} />
          </div>
          <div className="uni-logos-row">
            {[
              { src: '/universities/adelaide.png', alt: 'University of Adelaide' },
              { src: '/universities/flinders.png', alt: 'Flinders University' },
              { src: '/universities/monash.png', alt: 'Monash University' },
              { src: '/universities/unsw.png', alt: 'UNSW Sydney' },
              { src: '/universities/melbourne.png', alt: 'University of Melbourne' },
              { src: '/universities/bond.png', alt: 'Bond University' },
              { src: '/universities/jcu.png', alt: 'James Cook University' },
            ].map((logo) => (
              <div key={logo.alt} className="uni-logo-item">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={60}
                  className="uni-logo-img"
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="med-split">
        <div className="med-split-inner">
          <div className="med-split-photo slide-left">
            <Image
              src="/medical/hero.jpg"
              alt="Medical student preparing for university admissions"
              width={640}
              height={480}
              className="med-split-img"
              priority
            />
          </div>
          <div className="med-split-content slide-right">
            <span className="eyebrow">Our Track Record</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(22px,2.8vw,32px)', marginBottom: 16 }}>From Aspiration to Acceptance</h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ink-2)', marginBottom: 20 }}>We have guided students through every stage of medical school admissions — from their first UCAT diagnostic to their final MMI station. Our coaching is built around the specific demands of each university, not a generic playbook.</p>
            <ul className="med-split-list">
              <li><span className="split-check">✓</span>One-on-one sessions tailored to your timeline and target schools</li>
              <li><span className="split-check">✓</span>Full mock UCAT and MMI circuits under realistic conditions</li>
              <li><span className="split-check">✓</span>Personal statement reviewed against university-specific criteria</li>
              <li><span className="split-check">✓</span>In-person in Adelaide &amp; Melbourne, or fully online</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="curriculum">
        <div className="curriculum-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">The Three Phases</span>
            <h2 className="section-title">A Plan for Every<br />Stage of Admission</h2>
            <p className="lead" style={{ marginTop: 14 }}>Medical school admissions has three distinct phases. We coach each one with the same structured, personalised approach — never generic, always targeted to your schools and timeline.</p>
            <div className="section-rule" />
          </div>
          <div className="split-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {phases.map((p, i) => (
              <div key={i} className={`split-card ${p.variant} fade-in`} data-delay={`${i * 100}`}>
                <span className="split-state">{p.phase}</span>
                <h3 style={{ fontSize: 'clamp(15px,1.5vw,18px)', marginBottom: 6 }}>{p.timeline}</h3>
                <p className="split-desc" style={{ marginBottom: 16, fontWeight: 600 }}>{p.title}</p>
                <ul className="split-list">
                  {p.points.map(pt => (
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
            <span className="eyebrow">What We Offer</span>
            <h2 className="section-title">Services & Focus Areas</h2>
            <p className="lead" style={{ marginTop: 14 }}>Every service is delivered one-on-one. No group courses, no pre-recorded content — just targeted coaching built around your application.</p>
            <div className="section-rule" />
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div className="service-card fade-in" key={i} data-delay={`${i * 70}`}>
                <span className="service-num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
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
            <Link href="/programs/high-school" className="related-card">
              <span className="related-card-eyebrow">Years 10–12</span>
              <div className="related-card-title">High School Program</div>
              <p className="related-card-desc">VCE and SACE coaching. From first SAC to final exam — every subject, every study score target.</p>
              <span className="related-card-link">Explore High School →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="consult-faq">
        <div className="consult-faq-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2 className="section-title">UCAT &amp; Medical School Admissions Coaching in Adelaide &amp; Melbourne — Common Questions</h2>
            <div className="section-rule" />
          </div>
          <div className="consult-faq-list">
            {[
              { q: 'How much does UCAT coaching in Adelaide or Melbourne cost?', a: 'Pricing depends on the number of sessions and whether you are combining UCAT coaching with interview preparation and personal statement guidance. Book a free consultation for a tailored quote.' },
              { q: 'Do you offer UCAT tutoring in person in Adelaide and Melbourne?', a: 'Yes. We offer in-person UCAT and medical admissions coaching in Adelaide (South Australia) and Melbourne (Victoria), as well as fully online sessions.' },
              { q: 'What medical schools does your admissions coaching cover?', a: 'We coach students applying to Bond University, Monash, UNSW, Flinders, University of Adelaide, and all other Australian medical programs that use the UCAT and MMI interview.' },
              { q: 'How early should I start UCAT preparation?', a: 'We recommend starting 3–6 months before your UCAT test date. This gives sufficient time to work through all five subtests systematically and run full mock exams in the final weeks.' },
              { q: 'Do you offer MMI interview coaching for medical school?', a: 'Yes. We run full mock MMI circuits covering ethical scenarios, communication tasks, and role plays. Each session is debriefed in detail so you can improve before your real interview.' },
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
          <div className="motto-display" style={{ fontSize: 'clamp(16px,3vw,24px)' }}>Your Medical School Application Starts Here</div>
          <p className="motto-translation" style={{ marginBottom: 28 }}>Book a free consultation and we will map out your UCAT timeline, interview prep, and application strategy in one session.</p>
          <Link href="/contact" className="btn-gold">Book a Free Consultation</Link>
        </div>
      </div>
    </>
  )
}
