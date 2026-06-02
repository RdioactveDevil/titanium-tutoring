'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/app/components/Breadcrumb'

const guides = [
  {
    badge: 'guide',
    label: 'Stage 2 Methods',
    title: 'Mathematical Methods Investigation Guide',
    desc: 'A complete breakdown of the SACE Methods folio task — report structure, topic choice, mathematical reasoning, and what Performance Standard A actually requires.',
    href: '/resources/sace-investigation-guide',
    cta: 'Read the Guide →',
  },
  {
    badge: 'guide',
    label: 'Selective Entry',
    title: 'HAST Exam Preparation Guide',
    desc: 'What each section of SA\'s selective entry test actually assesses, how abstract reasoning is trained, common mistakes, and how to structure your preparation timeline.',
    href: '/programs/middle-school/hast-exam',
    cta: 'Read the Guide →',
  },
  {
    badge: 'guide',
    label: 'Medical Pathway',
    title: 'UCAT Subtest Breakdown',
    desc: 'All five UCAT subtests explained — what each one tests, how to approach it strategically, and the common errors that cost students percentile points.',
    href: '/programs/medical-school-admissions/ucat-preparation',
    cta: 'Read the Guide →',
  },
  {
    badge: 'guide',
    label: 'All Year Levels',
    title: 'Exam Strategy & Technique Framework',
    desc: 'Time management, working-memory load, reading-to-write techniques, and the mindset shifts that separate students who know the content from those who score it.',
    href: '/programs/exam-strategy',
    cta: 'Read the Guide →',
  },
]

const references = [
  {
    badge: 'reference',
    label: 'Stage 2 Science',
    title: 'SACE Biology — Assessment & Topics',
    desc: 'Investigation folio requirements, data analysis expectations, external exam structure, and a topic-by-topic breakdown for Stage 2 Biology.',
    href: '/programs/high-school/sace-biology',
    cta: 'View Reference →',
  },
  {
    badge: 'reference',
    label: 'Stage 2 Science',
    title: 'SACE Chemistry — Assessment & Topics',
    desc: 'Calculation techniques, practical investigation approach, stoichiometry and equilibrium breakdown, and a priority order for external exam preparation.',
    href: '/programs/high-school/sace-chemistry',
    cta: 'View Reference →',
  },
  {
    badge: 'reference',
    label: 'Stage 2 English',
    title: 'SACE English — Assessment Components',
    desc: 'Literary Studies and English assessed tasks, the response structures markers reward, and how to approach analytical, creative, and multimodal tasks.',
    href: '/programs/high-school/sace-english',
    cta: 'View Reference →',
  },
  {
    badge: 'reference',
    label: 'Stage 2 Science',
    title: 'SACE Physics — Assessment & Topics',
    desc: 'Motion, fields, waves, and modern physics — investigation report requirements, extended response technique, and the question formats most commonly lost on.',
    href: '/programs/high-school/sace-physics',
    cta: 'View Reference →',
  },
]

export default function Resources() {
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
      { threshold: 0.08 }
    )
    document.querySelectorAll('.fade-in').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Resources' },
          ]} />
          <span className="eyebrow">Free Study Tools</span>
          <h1 className="section-title">Tools & Guides</h1>
          <p className="lead">Practical tools, structured guides, and subject references — built for SA students and their parents. Use them alongside a tutor or on your own.</p>
        </div>
      </div>

      <section className="services">
        <div className="services-inner">

          {/* FEATURED TOOL */}
          <div className="section-header fade-in">
            <span className="eyebrow">Interactive Tool</span>
            <h2 className="section-title">AI-Powered</h2>
            <div className="section-rule" />
          </div>
          <Link href="/decoder" className="resource-featured fade-in">
            <div>
              <span className="resource-featured-badge">Free · No sign-up required</span>
              <div className="resource-featured-title">Report Card Decoder</div>
              <p className="resource-featured-desc">Upload your child&apos;s school report card — our AI reads it against the curriculum, identifies learning gaps and strengths, and outputs a prioritised weekly action plan with subject-specific resources.</p>
            </div>
            <span className="resource-featured-cta">Use the Tool →</span>
          </Link>

          {/* STUDY GUIDES */}
          <div className="section-header fade-in" style={{ marginTop: 16 }}>
            <span className="eyebrow">Structured Guides</span>
            <h2 className="section-title">Preparation Guides</h2>
            <p className="lead" style={{ marginTop: 14 }}>Step-by-step guidance on specific exams, assessment tasks, and preparation strategies — written by Titanium Tutoring coaches.</p>
            <div className="section-rule" />
          </div>
          <div className="resource-grid" style={{ marginBottom: 48 }}>
            {guides.map((r, i) => (
              <Link key={r.href} href={r.href} className="resource-card fade-in" data-delay={`${i * 60}`}>
                <div className="resource-card-top">
                  <span style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, color: 'var(--gold-600)' }}>{r.label}</span>
                  <span className={`resource-badge ${r.badge}`}>{r.badge === 'guide' ? 'Guide' : 'Reference'}</span>
                </div>
                <div className="resource-card-title">{r.title}</div>
                <p className="resource-card-desc">{r.desc}</p>
                <span className="resource-card-cta">{r.cta}</span>
              </Link>
            ))}
          </div>

          {/* SUBJECT REFERENCES */}
          <div className="section-header fade-in">
            <span className="eyebrow">SACE Stage 2</span>
            <h2 className="section-title">Subject References</h2>
            <p className="lead" style={{ marginTop: 14 }}>Topic-by-topic breakdowns for core SACE Stage 2 subjects — assessment structure, common mark-loss points, and what Performance Standard A actually requires.</p>
            <div className="section-rule" />
          </div>
          <div className="resource-grid">
            {references.map((r, i) => (
              <Link key={r.href} href={r.href} className="resource-card fade-in" data-delay={`${i * 60}`}>
                <div className="resource-card-top">
                  <span style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, color: 'var(--gold-600)' }}>{r.label}</span>
                  <span className={`resource-badge ${r.badge}`}>Reference</span>
                </div>
                <div className="resource-card-title">{r.title}</div>
                <p className="resource-card-desc">{r.desc}</p>
                <span className="resource-card-cta">{r.cta}</span>
              </Link>
            ))}
          </div>

        </div>
      </section>

      <div className="motto-banner">
        <div className="motto-banner-inner">
          <div className="motto-display" style={{ fontSize: 'clamp(16px,3vw,24px)' }}>Want a Personalised Plan?</div>
          <p className="motto-translation" style={{ marginBottom: 28 }}>Guides give you the framework. A free strategy call gives you the specific plan — built around your subject, year level, and ATAR target.</p>
          <Link href="/contact" className="btn-gold">Book a Free Consultation</Link>
        </div>
      </div>
    </>
  )
}
