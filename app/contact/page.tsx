'use client'
import { useEffect } from 'react'

export default function Contact() {
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

  return (
    <>
      {/* PAGE HEADER */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">Get Started</span>
          <h1 className="section-title">Book a Free Consultation</h1>
          <p className="lead">No commitment. We will discuss your child&apos;s specific needs and explain exactly how we would approach their preparation.</p>
        </div>
      </div>

      {/* CONTACT FORM */}
      <section className="contact">
        <div className="contact-inner">
          <div className="fade-in">
            <span className="eyebrow">Reach Out</span>
            <h2 className="section-title">Let&apos;s Talk</h2>
            <p className="lead" style={{ marginTop: 14 }}>Fill in the form and we will be in touch within 24 hours to arrange a time that suits you.</p>
            <div style={{ marginTop: 28, padding: 24, background: 'var(--paper-raise)', borderRadius: 4, border: '1px solid var(--rule)' }}>
              <span className="eyebrow" style={{ marginBottom: 8 }}>Direct</span>
              <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--navy)' }}>+61 456 753 747</div>
              <div style={{ fontSize: 15, color: 'var(--ink-2)', marginTop: 2 }}>admin@titaniumtutoring.com</div>
              <div style={{ height: 1, background: 'var(--rule)', margin: '16px 0' }} />
              <span className="eyebrow" style={{ marginBottom: 8 }}>Locations</span>
              <div style={{ fontSize: 14, color: 'var(--ink-2)' }}>South Australia · Victoria · Online Australia-wide</div>
            </div>
          </div>
          <div className="fade-in" style={{ background: 'var(--white)', border: '1px solid var(--rule)', borderRadius: 4, padding: 28, boxShadow: 'var(--shadow-card)' }}>
            <form className="contact-form" action="https://formspree.io/f/YOUR_CODE" method="POST">
              <div className="form-row">
                <div className="form-group">
                  <label>Parent Name</label>
                  <input type="text" name="name" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label>Year Level</label>
                  <select name="year">
                    <option value="">Select year...</option>
                    <option>Primary (Years 1–6)</option>
                    <option>Year 7–10</option>
                    <option>VCE (Victoria)</option>
                    <option>SACE (South Australia)</option>
                    <option>Selective Entry Prep</option>
                    <option>NAPLAN</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label>Subject or Area of Help</label>
                <input type="text" name="subject" placeholder="e.g. Mathematical Methods, scholarship prep..." />
              </div>
              <div className="form-group">
                <label>Tell Us More (optional)</label>
                <textarea name="message" placeholder="What are the main challenges your child is facing?" />
              </div>
              <button type="submit" className="btn-primary">Send Enquiry</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
