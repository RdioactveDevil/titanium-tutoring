'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Contact() {
  const router = useRouter()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormStatus('submitting')
    const form = e.currentTarget
    const data = new FormData(form)
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID
    if (!formspreeId) {
      console.error('NEXT_PUBLIC_FORMSPREE_ID is not set — form submissions will not be delivered.')
      setFormStatus('error')
      return
    }
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        router.push('/contact/thank-you')
      } else {
        const body = await res.json().catch(() => ({}))
        console.error('Formspree submission failed', res.status, body)
        setFormStatus('error')
      }
    } catch {
      setFormStatus('error')
    }
  }

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

  const faqs = [
    {
      q: 'Is there any cost?',
      a: 'None at all. The call is completely complimentary — our way of understanding your child\'s situation properly before recommending anything.'
    },
    {
      q: 'What will we actually cover on the call?',
      a: 'We listen to where your child is, where they need to be, and what has stood in the way. Then we map out a strategy tailored to them. You will leave with a clear picture of what to do next.'
    },
    {
      q: 'What if we are not in SA or VIC?',
      a: 'No issue. We work with students across Australia — all sessions are available online, and the call itself is by video or phone wherever you are.'
    },
    {
      q: 'What happens after the call?',
      a: 'You receive a written strategy summary — yours to keep regardless of what you decide. If you choose to move forward, we match your child with the right tutor and begin immediately.'
    },
  ]

  const benefits = [
    {
      icon: '◎',
      title: 'Precise Gap Diagnosis',
      desc: 'We identify exactly where your child is dropping marks — not a general overview, a subject-by-subject breakdown.'
    },
    {
      icon: '◈',
      title: 'Written Strategy to Keep',
      desc: 'You leave with a structured plan: which topics, in what order, and over what timeline — yours regardless of what you decide.'
    },
    {
      icon: '◇',
      title: 'Matched to the Right Tutor',
      desc: 'Every student is different. We match based on learning style, goals, and curriculum — not availability.'
    },
    {
      icon: '◉',
      title: 'No Pressure, Ever',
      desc: 'This is a genuine conversation. Take our strategy and walk away if you wish — we would rather earn your trust than your signature.'
    },
  ]

  const testimonials = [
    {
      cat: 'atar',
      q: "My daughter went from a B student to finishing in the top five of her cohort. The personalised plan her tutor built around her weak points was unlike anything a school classroom can offer. We are so glad we made the call.",
      name: 'Parent of Elise M.',
      badge: 'ATAR 97.20'
    },
    {
      cat: 'selective',
      q: 'Melbourne High was my goal from Year 4. Titanium treated it as seriously as I did. The weekly maths sessions and the reasoning test practice made me feel genuinely ready — not just hoping for the best.',
      name: 'Ethan Zhou',
      badge: 'Melbourne High School'
    },
    {
      cat: 'scholarship',
      q: 'The written expression coaching was exceptional. My tutor showed me how to plan a response in thirty seconds and write persuasively under timed conditions. That skill has helped me in every school task since.',
      name: 'Oliver Marsh',
      badge: 'Scholarship Winner'
    },
    {
      cat: 'naplan',
      q: 'My son was working at Band 5 in numeracy going into Year 5. After two terms with Titanium he sat NAPLAN and scored Band 9. The improvement was far beyond what his school expected and far beyond what we hoped for.',
      name: 'Parent of Thomas G.',
      badge: 'NAPLAN Band 9'
    },
  ]

  return (
    <>
      {/* ============================================================
          HERO — cream/paper, centered, serif-led
          ============================================================ */}
      <section className="ch-hero">
        <div className="ch-hero-rule" aria-hidden="true" />

        <div className="ch-hero-inner">
          <span className="ch-eyebrow">No Obligation · Strategy Call</span>

          <h1 className="ch-heading">
            Students who work with us<br />
            <em>go further.</em>
          </h1>

          <p className="ch-sub">
            Tell us where your child is. We will map out exactly what is holding them back and hand you a written strategy to take away — no strings attached.
          </p>

          <a href="#consult-form" className="btn-navy-lg">
            Book Your Call
          </a>

          <p className="ch-scarcity">
            <span className="ch-scarcity-dot" />
            Limited call slots available each week
          </p>

          <div className="ch-stats">
            <div className="ch-stat-item">
              <span className="ch-stat-num">99.95</span>
              <span className="ch-stat-lbl">Top student ATAR</span>
            </div>
            <div className="ch-stat-divider" />
            <div className="ch-stat-item">
              <span className="ch-stat-num">120+</span>
              <span className="ch-stat-lbl">Students supported</span>
            </div>
            <div className="ch-stat-divider" />
            <div className="ch-stat-item">
              <span className="ch-stat-num">7+</span>
              <span className="ch-stat-lbl">Years of results</span>
            </div>
            <div className="ch-stat-divider" />
            <div className="ch-stat-item">
              <span className="ch-stat-num">✦</span>
              <span className="ch-stat-lbl">Scholarship &amp; selective-entry wins</span>
            </div>
          </div>

          <div className="ch-press">
            <span className="ch-press-label">As featured on</span>
            <div className="as-featured-pubs">
              {[
                { label: 'The Advertiser', src: '/press/advertiser.png' },
                { label: 'Herald Sun', src: '/press/herald.png' },
                { label: 'The Daily Telegraph', src: '/press/telegraph.png' },
                { label: 'The Courier-Mail', src: '/press/courier.png' },
              ].map(p => (
                <a
                  key={p.label}
                  href={p.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pub-name ch-pub-link"
                >
                  {p.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS STRIP */}
      <div className="consult-process">
        <div className="consult-process-inner">
          <div className="consult-process-step fade-in">
            <span className="consult-process-num">01</span>
            <div>
              <div className="consult-process-label">Fill in the form below</div>
              <div className="consult-process-desc">Takes under a minute</div>
            </div>
          </div>
          <div className="consult-process-arrow" aria-hidden="true">→</div>
          <div className="consult-process-step fade-in" data-delay="100">
            <span className="consult-process-num">02</span>
            <div>
              <div className="consult-process-label">We reach out within 24 h</div>
              <div className="consult-process-desc">At a time that suits you</div>
            </div>
          </div>
          <div className="consult-process-arrow" aria-hidden="true">→</div>
          <div className="consult-process-step fade-in" data-delay="200">
            <span className="consult-process-num">03</span>
            <div>
              <div className="consult-process-label">Your written strategy is ready</div>
              <div className="consult-process-desc">Yours to keep, no matter what</div>
            </div>
          </div>
        </div>
      </div>

      {/* BENEFITS */}
      <section className="consult-benefits">
        <div className="consult-benefits-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">What You Walk Away With</span>
            <h2 className="section-title">One Call. A Clearer Path Forward.</h2>
            <p className="lead" style={{ marginTop: 14 }}>No fluff, no filler — a focused conversation that ends with a plan your child can act on.</p>
            <div className="section-rule" />
          </div>
          <div className="consult-benefits-grid">
            {benefits.map((b, i) => (
              <div className="consult-benefit-card fade-in" key={i} data-delay={`${i * 80}`}>
                <span className="consult-benefit-icon">{b.icon}</span>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + TESTIMONIALS */}
      <section className="consult-main" id="consult-form">
        <div className="consult-main-inner">

          {/* LEFT — testimonials */}
          <div className="consult-proof fade-in">
            <span className="eyebrow">What Our Students Say</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(22px,3vw,30px)' }}>Results That Speak for Themselves</h2>
            <div className="consult-testimonials">
              {testimonials.map((t, i) => (
                <div className="consult-testimonial" key={i}>
                  <span className={`testimonial-cat tcat-${t.cat}`}>{t.cat === 'atar' ? 'ATAR' : t.cat === 'selective' ? 'Selective Entry' : t.cat === 'naplan' ? 'NAPLAN' : 'Scholarship'}</span>
                  <blockquote>&ldquo;{t.q}&rdquo;</blockquote>
                  <div className="consult-testimonial-footer">
                    <span className="testimonial-name">{t.name}</span>
                    <span className="testimonial-badge">{t.badge}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="consult-contact-details">
              <span className="eyebrow" style={{ marginBottom: 8 }}>Prefer to call or email directly?</span>
              <a href="tel:+61456753747" className="consult-contact-link">+61 456 753 747</a>
              <a href="mailto:admin@titaniumtutoring.com" className="consult-contact-link">admin@titaniumtutoring.com</a>
              <p style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 6 }}>South Australia · Victoria · Online Australia-wide</p>
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="consult-form-wrap fade-in" data-delay="80">
            <div className="consult-form-header">
              <p className="consult-form-prompt">Takes under a minute</p>
              <h3 className="consult-form-title">Book Your Call</h3>
              <p className="ch-scarcity" style={{ justifyContent: 'flex-start', marginTop: 10 }}>
                <span className="ch-scarcity-dot" />
                Limited slots — we keep groups small
              </p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Parent Name</label>
                    <input type="text" name="name" placeholder="Your name" required />
                  </div>
                  <div className="form-group">
                    <label>Student Year Level</label>
                    <select name="year" required>
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
                  <input type="email" name="email" placeholder="your@email.com" required />
                </div>
                <div className="form-group">
                  <label>Subject / Goal</label>
                  <input type="text" name="subject" placeholder="e.g. Mathematical Methods, scholarship prep, UCAT..." required />
                </div>
                <div className="form-group">
                  <label>Anything else we should know? <span style={{ fontWeight: 400, color: 'var(--ink-3)' }}>(optional)</span></label>
                  <textarea name="message" placeholder="What are the main challenges your child is facing?" />
                </div>
                {formStatus === 'error' && (
                  <p className="consult-form-error">
                    Something went wrong — please try again or email us directly at <a href="mailto:admin@titaniumtutoring.com">admin@titaniumtutoring.com</a>.
                  </p>
                )}
                <button type="submit" className="btn-consult-submit" disabled={formStatus === 'submitting'}>
                  {formStatus === 'submitting' ? 'Sending…' : 'Book Your Call'}
                </button>
              </form>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="consult-faq">
        <div className="consult-faq-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">Common Questions</span>
            <h2 className="section-title">Straight Answers.</h2>
            <div className="section-rule" />
          </div>
          <div className="consult-faq-list">
            {faqs.map((f, i) => (
              <div className={`consult-faq-item${openFaq === i ? ' open' : ''}`} key={i}>
                <button
                  className="consult-faq-q"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{f.q}</span>
                  <span className="consult-faq-chevron" aria-hidden="true">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && <div className="consult-faq-a">{f.a}</div>}
              </div>
            ))}
          </div>
          <div className="consult-faq-cta fade-in">
            <p>Any other questions? Reach out directly and we will get back to you promptly.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: 20 }}>
              <a href="tel:+61456753747" className="btn-navy-sm">Call +61 456 753 747</a>
              <a href="mailto:admin@titaniumtutoring.com" className="btn-gold-sm">Email Us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
