import Link from 'next/link'

type ToolKey = 'decoder' | 'gauntlet' | 'mmi'

const TOOLS: Record<ToolKey, { href: string; tag: string; title: string; desc: string }> = {
  decoder: {
    href: '/resources/selection-score-decoder',
    tag: 'Admissions',
    title: 'Selection Score Decoder',
    desc: 'See how ATAR, UCAT and interview actually combine at every Australian medical school — and where your next 100 hours of effort pay off most.',
  },
  gauntlet: {
    href: '/resources/ucat-gauntlet',
    tag: 'UCAT',
    title: 'The UCAT Gauntlet',
    desc: 'Six original questions on the real per-question clock. Feel the speed the test demands before you decide how to prepare for it.',
  },
  mmi: {
    href: '/resources/mmi-simulator',
    tag: 'Interview',
    title: 'The MMI Simulator',
    desc: 'Run a timed Multiple Mini Interview station out loud, then see exactly what assessors score — the rubric, a strong structure, and the common mistakes.',
  },
}

const ORDER: ToolKey[] = ['decoder', 'gauntlet', 'mmi']

export default function MedToolFooter({ current }: { current: ToolKey }) {
  const others = ORDER.filter((k) => k !== current)

  return (
    <>
      <section className="services" style={{ paddingTop: 8 }}>
        <div className="services-inner">
          <div className="section-header">
            <span className="eyebrow">Keep Going</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(24px,3.5vw,32px)' }}>More Medicine Tools</h2>
            <div className="section-rule" />
          </div>
          <div className="resource-grid">
            {others.map((k) => {
              const t = TOOLS[k]
              return (
                <Link key={k} href={t.href} className="resource-card">
                  <div className="resource-card-top">
                    <span style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, color: 'var(--gold-600)' }}>{t.tag}</span>
                    <span className="resource-badge guide">Tool</span>
                  </div>
                  <div className="resource-card-title">{t.title}</div>
                  <p className="resource-card-desc">{t.desc}</p>
                  <span className="resource-card-cta">Open the Tool →</span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <div className="motto-banner">
        <div className="motto-banner-inner">
          <div className="motto-display" style={{ fontSize: 'clamp(16px,3vw,24px)' }}>Turn Insight Into a Plan</div>
          <p className="motto-translation" style={{ marginBottom: 28 }}>These tools show you the landscape. A free strategy call turns it into a plan — built around your ATAR target, UCAT timeline and the schools you&apos;re aiming for.</p>
          <Link href="/contact" className="btn-gold">Book a Free Consultation</Link>
        </div>
      </div>
    </>
  )
}
