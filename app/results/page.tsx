'use client'
import { useEffect } from 'react'
import Link from 'next/link'

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
      { threshold: 0.1 }
    )
    document.querySelectorAll('.fade-in,.slide-left,.slide-right').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const testimonials = [
    { q: 'The Accelerate Methods program helped me build amazing skills to crush VCE Methods. The regular worksheets, tests and assessments helped a lot with application-style questions. The Exam Tracker was especially helpful in the lead-up to the exams.', name: 'Alex Fazzioni', badge: 'ATAR 98.55' },
    { q: "Before joining Titanium, I was struggling with essays and tricky maths problems, but my tutor broke things down step by step. The English Writing Mastery program taught me to write essays that stood out. I wouldn't have made it this far without their support.", name: 'Jasmine Manning', badge: 'Scholarship' },
    { q: 'Thanks to Titanium, I got into John Monash Science School. The tutors made tricky maths and science concepts easy to understand and gave me great practice tests with detailed feedback. Their support boosted my confidence and kept me calm during the exam.', name: 'Undisclosed', badge: 'John Monash Science School' },
    { q: 'Thanks to Titanium, I was accepted into Bond Medicine. Their guidance and personalised support made all the difference in preparing for the entrance exams and interviews. My tutor kept me motivated every step of the way.', name: 'Tanelle Galea', badge: 'Bond University Medicine' },
  ]

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

  return (
    <>
      {/* PAGE HEADER */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">Proof</span>
          <h1 className="section-title">Results That Speak</h1>
          <p className="lead">Real outcomes from real students — ATAR scores, scholarship wins, selective school entries, and national press recognition.</p>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="testimonials-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">Testimonials</span>
            <h2 className="section-title">Champions in Their Own Right</h2>
            <div className="section-rule" />
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card fade-in" key={i} data-delay={`${i * 80}`}>
                <blockquote>&ldquo;{t.q}&rdquo;</blockquote>
                <div className="testimonial-footer">
                  <span className="testimonial-name">{t.name}</span>
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
