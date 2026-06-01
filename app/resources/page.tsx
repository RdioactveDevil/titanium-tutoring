'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/app/components/Breadcrumb'

const resources = [
  {
    eyebrow: 'Stage 2 Methods',
    title: 'Mathematical Methods Investigation Guide',
    desc: 'A complete breakdown of the SACE Methods folio task — report structure, topic choice, mathematical reasoning, and what Performance Standard A actually requires.',
    href: '/resources/sace-investigation-guide',
    link: 'Read the Guide →',
  },
  {
    eyebrow: 'ATAR & Grading',
    title: 'How SACE ATAR Is Calculated',
    desc: 'How your SACE grades convert to an ATAR, what subject scaling does, and how many subjects count — explained clearly for SA students and parents.',
    href: '/blog/sace-atar-calculation',
    link: 'Read the Article →',
  },
  {
    eyebrow: 'Year 10 Planning',
    title: 'SACE Subject Selection Guide',
    desc: 'How to choose Stage 2 subjects strategically — prerequisites, scaling, and the decisions that most SA students get wrong at Year 10.',
    href: '/blog/sace-subject-selection',
    link: 'Read the Article →',
  },
  {
    eyebrow: 'Medical Pathway',
    title: 'How to Get Into Medicine in South Australia',
    desc: 'ATAR requirements, UCAT, prerequisites, MMI interviews, and the full SA medical school admissions pathway — University of Adelaide and Flinders.',
    href: '/blog/how-to-get-into-medicine-south-australia',
    link: 'Read the Article →',
  },
  {
    eyebrow: 'Selective Entry',
    title: 'HAST Exam Preparation',
    desc: 'How to prepare for SA\'s selective school entry test — what each section assesses, how abstract reasoning is trained, and when to start.',
    href: '/programs/middle-school/hast-exam',
    link: 'Explore the Program →',
  },
  {
    eyebrow: 'Year 10',
    title: 'SACE Activating Identities & Futures (AIF)',
    desc: 'What the compulsory SACE AIF subject involves, how it is assessed, and how to approach it so it becomes useful rather than just another task to complete.',
    href: '/blog/sace-activating-identities-futures',
    link: 'Read the Article →',
  },
  {
    eyebrow: 'Stage 2 Science',
    title: 'SACE Biology Stage 2 Assessment Strategy',
    desc: 'How the investigation folio and external exam work in SACE Biology — what data analysis questions require, and how to write extended responses for full marks.',
    href: '/blog/sace-biology-stage-2',
    link: 'Read the Article →',
  },
  {
    eyebrow: 'Stage 2 Science',
    title: 'SACE Chemistry Stage 2 Topics and Technique',
    desc: 'The calculations students lose most marks on, how to approach the practical investigation, and a priority order for external exam preparation.',
    href: '/blog/sace-chemistry-stage-2',
    link: 'Read the Article →',
  },
  {
    eyebrow: 'University Pathways',
    title: 'SA University Entry Requirements',
    desc: 'How SATAC works, what ATARs actually get you into the University of Adelaide, Flinders, and UniSA — and the difference between prerequisites and assumed knowledge.',
    href: '/blog/south-australia-university-entry-requirements',
    link: 'Read the Article →',
  },
  {
    eyebrow: 'Adelaide Families',
    title: 'Finding the Right Tutor in Adelaide',
    desc: 'What to look for, what questions to ask, and the red flags that indicate a poor tutoring fit — an honest guide for SA parents.',
    href: '/blog/finding-tutor-adelaide',
    link: 'Read the Article →',
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
          <span className="eyebrow">Free SACE Resources</span>
          <h1 className="section-title">SACE Study Guides for South Australian Students</h1>
          <p className="lead">In-depth guides on SACE subjects, university pathways, selective school entry, and tutoring — written by Titanium Tutoring's specialist coaches for Adelaide students and their parents.</p>
        </div>
      </div>

      <section className="services">
        <div className="services-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">All Resources</span>
            <h2 className="section-title">Guides, Breakdowns &amp; Strategy Articles</h2>
            <p className="lead" style={{ marginTop: 14 }}>Covering every stage of the SA student journey — from Year 10 subject selection to university entry.</p>
            <div className="section-rule" />
          </div>
          <div className="related-grid">
            {resources.map((r, i) => (
              <Link
                key={r.href}
                href={r.href}
                className="related-card fade-in"
                data-delay={`${Math.min(i * 40, 240)}`}
              >
                <span className="related-card-eyebrow">{r.eyebrow}</span>
                <div className="related-card-title">{r.title}</div>
                <p className="related-card-desc">{r.desc}</p>
                <span className="related-card-link">{r.link}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="motto-banner">
        <div className="motto-banner-inner">
          <div className="motto-display" style={{ fontSize: 'clamp(16px,3vw,24px)' }}>Want Personalised Guidance Instead?</div>
          <p className="motto-translation" style={{ marginBottom: 28 }}>Book a free consultation and we will build a specific plan for your subject, year level, and target — not a generic study guide.</p>
          <Link href="/contact" className="btn-gold">Book a Free Consultation</Link>
        </div>
      </div>
    </>
  )
}
