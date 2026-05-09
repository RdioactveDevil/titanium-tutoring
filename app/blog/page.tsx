'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import { posts } from '../data/posts'

const catColour: Record<string, string> = {
  VCE: 'tcat-atar',
  SACE: 'tcat-scholarship',
  Medical: 'tcat-medical',
  'Selective Entry': 'tcat-selective',
  NAPLAN: 'tcat-naplan',
  Scholarship: 'tcat-amc',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function Blog() {
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

  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">Study Tips &amp; Strategies</span>
          <h1 className="section-title">The Titanium Tutoring Blog</h1>
          <p className="lead">Expert guides on VCE, SACE, UCAT, NAPLAN, and selective entry — written by our tutors to help students study smarter, not just harder.</p>
        </div>
      </div>

      <section className="testimonials">
        <div className="testimonials-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">All Articles</span>
            <h2 className="section-title">Latest from the Blog</h2>
            <div className="section-rule" />
          </div>
          <div className="testimonials-grid">
            {sorted.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="testimonial-card fade-in"
                data-delay={`${Math.min(i * 40, 240)}`}
                style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}
              >
                <span className={`testimonial-cat ${catColour[post.cat] ?? 'tcat-atar'}`}>{post.cat}</span>
                <h3 style={{ fontSize: 'clamp(15px,1.4vw,17px)', fontWeight: 700, margin: '10px 0 8px', lineHeight: 1.4, color: 'var(--navy)' }}>{post.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.6, flex: 1 }}>{post.excerpt}</p>
                <div className="testimonial-footer" style={{ marginTop: 16 }}>
                  <span className="testimonial-name">{formatDate(post.date)}</span>
                  <span className="testimonial-author">{post.readMins} min read</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="motto-banner">
        <div className="motto-banner-inner">
          <div className="motto-display" style={{ fontSize: 'clamp(16px,3vw,24px)' }}>Ready to Put It Into Practice?</div>
          <p className="motto-translation" style={{ marginBottom: 28 }}>Book a free consultation and we will build a personalised plan based on your specific subject, year level, and target score.</p>
          <Link href="/contact" className="btn-gold">Book a Free Consultation</Link>
        </div>
      </div>
    </>
  )
}
