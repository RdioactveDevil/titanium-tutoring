import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thank You — We\'ll Be in Touch',
  description: 'Your enquiry has been received. We will reach out within 24 hours to arrange your free strategy call.',
  robots: { index: false },
  alternates: { canonical: '/contact/thank-you' },
}

const steps = [
  {
    num: '01',
    label: 'Enquiry received',
    desc: 'We have your details and will review them shortly',
  },
  {
    num: '02',
    label: 'We reach out within 24 h',
    desc: 'At a time that suits your family',
  },
  {
    num: '03',
    label: 'Your written strategy is ready',
    desc: 'Yours to keep, no matter what you decide',
  },
]

export default function ThankYou() {
  return (
    <>
      {/* HERO CONFIRMATION */}
      <section className="ch-hero" style={{ paddingBottom: 64 }}>
        <div className="ch-hero-rule" aria-hidden="true" />
        <div className="ch-hero-inner">
          <span
            className="consult-form-success-icon"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 64,
              height: 64,
              borderRadius: '50%',
              background: 'var(--navy)',
              color: 'var(--gold)',
              fontSize: 28,
              fontWeight: 700,
              margin: '0 auto 28px',
            }}
            aria-hidden="true"
          >
            ✓
          </span>

          <span className="ch-eyebrow">Enquiry Confirmed</span>

          <h1 className="ch-heading" style={{ marginBottom: 20 }}>
            We&rsquo;ve got your details.<br />
            <em>We&rsquo;ll be in touch soon.</em>
          </h1>

          <p className="ch-sub" style={{ maxWidth: 520, margin: '0 auto 36px' }}>
            Thank you for reaching out. A member of our team will contact you within
            24 hours to schedule your free strategy call at a time that works for you.
          </p>

          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="btn-navy-lg">
              Back to Home
            </Link>
            <Link href="/programs" className="btn-gold-sm" style={{ padding: '15px 28px', fontSize: 15 }}>
              Explore Our Programs
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <div className="consult-process">
        <div className="consult-process-inner">
          {steps.map((step, i) => (
            <div key={step.num} style={{ display: 'contents' }}>
              {i > 0 && (
                <div className="consult-process-arrow" aria-hidden="true">→</div>
              )}
              <div className="consult-process-step">
                <span
                  className="consult-process-num"
                  style={i === 0 ? { color: 'var(--gold)' } : undefined}
                >
                  {step.num}
                </span>
                <div>
                  <div
                    className="consult-process-label"
                    style={i === 0 ? { color: 'var(--gold)' } : undefined}
                  >
                    {step.label}
                  </div>
                  <div className="consult-process-desc">{step.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* REASSURANCE SECTION */}
      <section className="consult-benefits" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="consult-benefits-inner">
          <div className="section-header">
            <span className="eyebrow">While You Wait</span>
            <h2 className="section-title">A Few Things Worth Knowing</h2>
            <div className="section-rule" />
          </div>

          <div className="consult-benefits-grid">
            {[
              {
                icon: '◉',
                title: 'No Obligation',
                desc: 'The strategy call is completely free. You walk away with a written plan regardless of whether you choose to work with us.',
              },
              {
                icon: '◈',
                title: 'Tailored to Your Child',
                desc: 'We listen first. Every recommendation we make is based on your child\'s specific gaps, goals, and learning style.',
              },
              {
                icon: '◎',
                title: 'Available Australia-Wide',
                desc: 'Whether you are in South Australia, Victoria, or elsewhere — all sessions are available online at a time that suits you.',
              },
              {
                icon: '◇',
                title: 'Questions? Reach Us Directly',
                desc: (
                  <>
                    Call us on{' '}
                    <a href="tel:+61456753747" style={{ color: 'var(--navy)', fontWeight: 700 }}>
                      +61 456 753 747
                    </a>{' '}
                    or email{' '}
                    <a href="mailto:admin@titaniumtutoring.com" style={{ color: 'var(--navy)', fontWeight: 700 }}>
                      admin@titaniumtutoring.com
                    </a>
                  </>
                ),
              },
            ].map((card, i) => (
              <div className="consult-benefit-card" key={i}>
                <span className="consult-benefit-icon">{card.icon}</span>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
