import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <section className="page-hero" style={{ paddingBottom: 80 }}>
        <div className="page-hero-inner" style={{ textAlign: 'center' }}>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(80px, 18vw, 140px)',
              color: 'var(--gold)',
              letterSpacing: '0.04em',
              lineHeight: 1,
              display: 'block',
              marginBottom: 16,
            }}
            aria-hidden="true"
          >
            404
          </span>
          <span className="eyebrow">Page Not Found</span>
          <h1 className="section-title" style={{ marginTop: 12, marginBottom: 16 }}>
            This page doesn&rsquo;t exist.
          </h1>
          <p className="lead" style={{ marginBottom: 36 }}>
            The link may be broken or the page may have moved. Try heading back to the home page or finding what you need below.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="btn-gold">Back to Home</Link>
            <Link href="/programs" className="btn-ghost-light">Our Programs</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 5%', background: 'var(--paper)' }}>
        <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
          <div className="section-header" style={{ marginBottom: 40 }}>
            <span className="eyebrow">Quick Links</span>
            <h2 className="section-title">Where would you like to go?</h2>
            <div className="section-rule" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
            {[
              { href: '/programs', label: 'Programs', desc: 'VCE, SACE, NAPLAN, selective entry and medical admissions' },
              { href: '/about', label: 'About Us', desc: 'Our story, teaching philosophy, and team' },
              { href: '/results', label: 'Results', desc: 'Student outcomes and testimonials' },
              { href: '/contact', label: 'Contact', desc: 'Book a free strategy call' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  display: 'block',
                  padding: '20px 24px',
                  background: 'var(--white)',
                  border: '1px solid var(--rule)',
                  borderRadius: 4,
                  borderTop: '3px solid var(--gold)',
                  textDecoration: 'none',
                  transition: 'transform 200ms, box-shadow 200ms',
                }}
                className="card-lift"
              >
                <div style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: 6, fontSize: 15 }}>{l.label}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.5 }}>{l.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
