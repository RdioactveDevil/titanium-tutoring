'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Home() {
  const didCount = useRef(false)

  useEffect(() => {
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            setTimeout(() => el.classList.add('visible'), parseInt(el.dataset.delay || '0'))
            revealObs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.fade-in,.slide-left,.slide-right').forEach(el => revealObs.observe(el))

    const statsTrigger = document.querySelector('.stats-trigger')
    if (statsTrigger) {
      const cObs = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !didCount.current) {
          didCount.current = true
          document.querySelectorAll<HTMLElement>('[data-count]').forEach(el => {
            const target = parseFloat(el.dataset.count!)
            const suffix = el.dataset.suffix || ''
            const dec = parseInt(el.dataset.dec || '0')
            const t0 = performance.now()
            const tick = (now: number) => {
              const p = Math.min((now - t0) / 1600, 1)
              const ease = 1 - Math.pow(1 - p, 3)
              el.textContent = (target * ease).toFixed(dec) + suffix
              if (p < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          })
        }
      }, { threshold: 0.5 })
      cObs.observe(statsTrigger)
    }

    return () => revealObs.disconnect()
  }, [])

  const testimonials = [
    { q: 'The Accelerate Methods program helped me build amazing skills to crush VCE Methods. The regular worksheets, tests and assessments helped a lot with application-style questions. The Exam Tracker was especially helpful in the lead-up to the exams.', name: 'Alex Fazzioni', badge: 'ATAR 98.55' },
    { q: "Before joining Titanium, I was struggling with essays and tricky maths problems, but my tutor broke things down step by step. The English Writing Mastery program taught me to write essays that stood out. I wouldn't have made it this far without their support.", name: 'Jasmine Manning', badge: 'Scholarship' },
  ]

  return (
    <>
      {/* HERO */}
      <section className="hero" id="home">
        <svg viewBox="0 0 1400 760" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
          <defs>
            <pattern id="hg" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(243,190,67,0.07)" strokeWidth="1" />
            </pattern>
            <radialGradient id="hv" cx="62%" cy="38%" r="68%">
              <stop offset="0%" stopColor="rgba(243,190,67,0.1)" />
              <stop offset="100%" stopColor="rgba(8,30,109,0)" />
            </radialGradient>
            <linearGradient id="hf" x1="0" x2="0" y1="0" y2="1">
              <stop offset="65%" stopColor="rgba(8,30,109,0)" />
              <stop offset="100%" stopColor="rgba(8,30,109,1)" />
            </linearGradient>
          </defs>
          <rect width="1400" height="760" fill="url(#hg)" />
          <rect width="1400" height="760" fill="url(#hv)" />
          <g transform="translate(1080,360)" opacity="0.8">
            <ellipse cx="0" cy="0" rx="270" ry="105" fill="none" stroke="rgba(243,190,67,0.32)" strokeWidth="1" transform="rotate(-18)" />
            <ellipse cx="0" cy="0" rx="200" ry="78" fill="none" stroke="rgba(243,190,67,0.42)" strokeWidth="1" transform="rotate(-18)" />
            <ellipse cx="0" cy="0" rx="130" ry="51" fill="none" stroke="rgba(243,190,67,0.52)" strokeWidth="1" transform="rotate(-18)" />
            <circle cx="0" cy="0" r="12" fill="rgba(243,190,67,0.18)" />
            <circle cx="0" cy="0" r="5" fill="#F3BE43" />
            <circle cx="172" cy="-46" r="4" fill="#F3BE43" />
            <circle cx="-114" cy="33" r="3" fill="#F3BE43" opacity="0.8" />
            <circle cx="228" cy="44" r="3" fill="#F3BE43" opacity="0.6" />
          </g>
          <g fill="#F3BE43">
            {([[118,108,2],[198,158,1.6],[288,118,1.4],[92,238,1.8],[238,248,1.2],[338,208,1.6],[68,358,1.4],[178,398,1.8],[298,358,1.2],[418,438,1.6]] as [number,number,number][]).map(([x,y,r],i)=>(
              <circle key={i} cx={x} cy={y} r={r} opacity={0.45 + (r-1.2)*0.25}/>
            ))}
          </g>
          <g stroke="rgba(243,190,67,0.2)" strokeWidth="1" fill="none">
            <path d="M 118 108 L 198 158 L 288 118 M 198 158 L 238 248 L 178 398 M 238 248 L 338 208 M 68 358 L 178 398 L 298 358 L 418 438"/>
          </g>
          <g transform="translate(72,560)" opacity="0.3">
            <line x1="0" y1="0" x2="0" y2="-170" stroke="rgba(243,190,67,0.5)" strokeWidth="1"/>
            <line x1="0" y1="0" x2="340" y2="0" stroke="rgba(243,190,67,0.5)" strokeWidth="1"/>
            <path d="M 0 -8 Q 80 -20, 140 -50 T 280 -130 L 318 -158" fill="none" stroke="#F3BE43" strokeWidth="1.5"/>
            <circle cx="0" cy="-8" r="3" fill="#F3BE43"/>
            <circle cx="140" cy="-50" r="3" fill="#F3BE43"/>
            <circle cx="280" cy="-130" r="3" fill="#F3BE43"/>
            <circle cx="318" cy="-158" r="4" fill="#F3BE43"/>
          </g>
          <g fontFamily="'Cormorant Garamond',serif" fill="rgba(243,190,67,0.25)" fontStyle="italic">
            <text x="420" y="195" fontSize="30">∫ f(x) dx</text>
            <text x="540" y="635" fontSize="20">f′(x) = lim</text>
            <text x="910" y="175" fontSize="22">a² + b² = c²</text>
            <text x="255" y="698" fontSize="20">π ≈ 3.14159</text>
          </g>
          <rect width="1400" height="760" fill="url(#hf)"/>
        </svg>

        <div className="hero-inner">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-rule" />
            Adelaide · Melbourne · Online Australia-wide
          </div>
          <h1>
            From Struggle<br />
            to <em>the Stars.</em><br />
            We&apos;ve Done It.
          </h1>
          <p className="hero-lead">
            Specialist tutoring for <strong>VCE, SACE, NAPLAN</strong>, scholarship and selective-entry exams — built by a student who scored the highest possible ATAR. Personalised strategy, structured drilling, measurable results.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn-gold">Book a Trial Session</Link>
            <Link href="/programs" className="btn-ghost">See Our Programs</Link>
          </div>
          <div className="hero-stats stats-trigger">
            <div className="stat">
              <span className="stat-num" data-count="93" data-suffix="%" data-dec="0">93%</span>
              <span className="stat-label">Improved in 2 Weeks</span>
            </div>
            <div className="stat">
              <span className="stat-num" data-count="100" data-suffix="%" data-dec="0">100%</span>
              <span className="stat-label">Improved in 6 Weeks</span>
            </div>
            <div className="stat">
              <span className="stat-num" data-count="120" data-suffix="+" data-dec="0">120+</span>
              <span className="stat-label">Students Supported</span>
            </div>
          </div>
        </div>
      </section>

      {/* AS FEATURED */}
      <div className="as-featured">
        <div className="as-featured-inner">
          <span className="as-featured-label">As featured on</span>
          <div className="as-featured-pubs">
            {['The Advertiser', 'Herald Sun', 'The Daily Telegraph', 'The Courier-Mail'].map(n => (
              <span key={n} className="pub-name">{n}</span>
            ))}
          </div>
        </div>
      </div>

      {/* WHY TITANIUM — condensed */}
      <section className="why">
        <div className="why-inner">
          <div className="why-photo-col slide-left">
            <img
              src="/lecture.jpg"
              alt="Titanium Tutoring founder in session"
              className="why-photo"
              onError={e => { const el = e.target as HTMLImageElement; el.style.display='none'; (el.nextElementSibling as HTMLElement).style.display='flex' }}
            />
            <div className="why-photo-placeholder" style={{ display: 'none' }}>
              <span style={{ fontSize: '2.5rem', opacity: .25 }}>📸</span>
              <span>Add your photo at<br /><code>public/lecture.jpg</code></span>
            </div>
            <div className="why-photo-badge">
              <span className="why-badge-num">7+</span>
              <span className="why-badge-lbl">Years of Results</span>
            </div>
          </div>
          <div className="why-content-col slide-right">
            <span className="eyebrow">Why Titanium</span>
            <h2 className="section-title">Taught by Someone<br />Who&apos;s Done It</h2>
            <p className="lead" style={{ marginTop: 14 }}>Our founder scored the highest possible ATAR at a selective entry school and placed in the 97th percentile nationally in the Australian Maths Competition.</p>
            <div className="why-grid">
              {[
                { title: "Pólya's Problem-Solving Method", desc: "Every session uses the four-step framework: Understand, Plan, Execute, Reflect. Students learn how to think, not just what to memorise." },
                { title: 'Personalised to the Individual', desc: 'No cookie-cutter programmes. We diagnose exactly where each student is losing marks and build from there.' },
                { title: 'Nationally Press-Featured', desc: 'Our results have been independently recognised in The Advertiser, Herald Sun, Daily Telegraph, and Courier Mail.' },
              ].map((w, i) => (
                <div className="why-item" key={i}>
                  <h4><span className="check-mark">✓</span>{w.title}</h4>
                  <p>{w.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 28 }}>
              <Link href="/about" className="btn-gold-sm">Our Full Story →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — 2 highlights */}
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
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <Link href="/results" className="btn-navy-sm">See All Results →</Link>
          </div>
        </div>
      </section>

      {/* MOTTO BANNER */}
      <div className="motto-banner">
        <div className="motto-banner-inner">
          <div className="motto-display">Per Aspera Ad Astra</div>
          <p className="motto-translation">&ldquo;Through hardships, to the stars.&rdquo;</p>
          <p className="motto-sub">The principle behind everything we do</p>
          <Link href="/contact" className="btn-gold">Start With a Trial</Link>
        </div>
      </div>
    </>
  )
}
