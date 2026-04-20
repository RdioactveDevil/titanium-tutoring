'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import { testimonials, catLabel } from '../data/testimonials'

const pressClippings = [
  { src: '/press/advertiser.png', label: 'The Advertiser' },
  { src: '/press/herald.png', label: 'Herald Sun' },
  { src: '/press/telegraph.png', label: 'Daily Telegraph' },
  { src: '/press/courier.png', label: 'Courier Mail' },
  { src: '/press/advertiser-online.png', label: 'Adelaide Now (Online)' },
  { src: '/press/herald-online.png', label: 'Herald Sun (Online)' },
  { src: '/press/telegraph-online.png', label: 'Daily Telegraph (Online)' },
  { src: '/press/courier-online.png', label: 'Courier Mail (Online)' },
]

export default function Results() {
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
    document.querySelectorAll('.fade-in,.slide-left,.slide-right').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      {/* PAGE HEADER */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">Proof</span>
          <h1 className="section-title">Results That Speak</h1>
          <p className="lead">Real outcomes from real students — ATAR scores, scholarship wins, selective school entries, medical admissions, and national competition results.</p>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="testimonials-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">Student &amp; Parent Stories</span>
            <h2 className="section-title">Champions in Their Own Right</h2>
            <p className="lead" style={{ marginTop: 14 }}>ATAR · Scholarship · Selective Entry · Medical Admissions · NAPLAN · AMC · Olympiad</p>
            <div className="section-rule" />
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card fade-in" key={i} data-delay={`${Math.min(i * 30, 300)}`}>
                <span className={`testimonial-cat tcat-${t.cat}`}>{catLabel[t.cat]}</span>
                <blockquote>&ldquo;{t.q}&rdquo;</blockquote>
                <div className="testimonial-footer">
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-author">{t.author === 'parent' ? 'Parent' : 'Student'}</span>
                  <span className="testimonial-badge">{t.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IN THE NEWS */}
      <section className="news">
        <div className="news-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">Media Coverage</span>
            <h2 className="section-title">In the News</h2>
            <p className="lead" style={{ marginTop: 14 }}>Independently featured across Australia&apos;s major mastheads — print and digital — on 29 January 2025.</p>
            <div className="section-rule" />
          </div>
          <div className="news-grid">
            {pressClippings.map((clip, i) => (
              <div className="news-card fade-in" key={i} data-delay={`${i * 50}`}>
                <img
                  src={clip.src}
                  alt={clip.label}
                  className="news-img"
                  onError={e => { const el = e.target as HTMLImageElement; el.style.display='none'; (el.nextElementSibling as HTMLElement).style.display='flex' }}
                />
                <div className="news-img-placeholder" style={{ display: 'none' }}>{clip.label}</div>
                <div className="news-label">{clip.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="motto-banner">
        <div className="motto-banner-inner">
          <div className="motto-display" style={{ fontSize: 'clamp(16px,3vw,24px)' }}>Your Result is Next</div>
          <p className="motto-translation" style={{ marginBottom: 28 }}>Book a free consultation — no commitment, just a conversation about what your child needs.</p>
          <Link href="/contact" className="btn-gold">Book a Free Consultation</Link>
        </div>
      </div>
    </>
  )
}
