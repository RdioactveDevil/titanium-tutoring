'use client'
import { useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'

export default function Home() {
  const didCount = useRef(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const smoothRef = useRef({ x: -1000, y: -1000 })
  const glowRef = useRef<HTMLDivElement>(null)

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

    const canvas = canvasRef.current
    if (!canvas) return { disconnect: () => revealObs.disconnect() }
    const ctx = canvas.getContext('2d')!
    let animId: number

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    type Pt = { x: number; y: number; vx: number; vy: number; r: number; o: number; layer: number }
    const N = 65
    let pts: Pt[] = []
    const init = () => {
      pts = Array.from({ length: N }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.16,
        r: Math.random() * 1.5 + 0.4,
        o: Math.random() * 0.4 + 0.12,
        layer: Math.random() * 3 + 1,
      }))
    }
    init()

    const tick = () => {
      const W = canvas.width, H = canvas.height
      ctx.clearRect(0, 0, W, H)

      const tx = mouseRef.current.x, ty = mouseRef.current.y
      smoothRef.current.x += (tx - smoothRef.current.x) * 0.07
      smoothRef.current.y += (ty - smoothRef.current.y) * 0.07
      const mx = smoothRef.current.x, my = smoothRef.current.y

      if (mx > 0) {
        const g = ctx.createRadialGradient(mx, my, 0, mx, my, 420)
        g.addColorStop(0, 'rgba(243,190,67,0.07)')
        g.addColorStop(0.45, 'rgba(243,190,67,0.025)')
        g.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = g
        ctx.fillRect(0, 0, W, H)
      }

      for (const p of pts) {
        const parallaxX = mx > 0 ? (mx - W / 2) / W * p.layer * 14 : 0
        const parallaxY = my > 0 ? (my - H / 2) / H * p.layer * 10 : 0
        const px = ((p.x + parallaxX) % W + W) % W
        const py = ((p.y + parallaxY) % H + H) % H

        const dx = px - mx, dy = py - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        const glow = mx > 0 ? Math.max(0, 1 - dist / 170) : 0

        ctx.beginPath()
        ctx.arc(px, py, p.r + glow * 2.2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(243,190,67,${p.o + glow * 0.55})`
        ctx.fill()

        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = W
        if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H
        if (p.y > H) p.y = 0
      }

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 115) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(243,190,67,${0.09 * (1 - d / 115)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      revealObs.disconnect()
    }
  }, [])

  const onHeroMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    mouseRef.current = { x, y }
    if (glowRef.current) {
      glowRef.current.style.left = x + 'px'
      glowRef.current.style.top = y + 'px'
      glowRef.current.style.opacity = '1'
    }
  }, [])

  const onHeroLeave = useCallback(() => {
    mouseRef.current = { x: -1000, y: -1000 }
    if (glowRef.current) glowRef.current.style.opacity = '0'
  }, [])

  const testimonials = [
    { q: 'The Accelerate Methods program helped me build amazing skills to crush VCE Methods. The regular worksheets, tests and assessments helped a lot with application-style questions. The Exam Tracker was especially helpful in the lead-up to the exams.', name: 'Alex Fazzioni', badge: 'ATAR 98.55' },
    { q: "Before joining Titanium, I was struggling with essays and tricky maths problems, but my tutor broke things down step by step. The English Writing Mastery program taught me to write essays that stood out. I wouldn't have made it this far without their support.", name: 'Jasmine Manning', badge: 'Scholarship' },
    { q: 'Thanks to Titanium, I got into John Monash Science School. The tutors made tricky maths and science concepts easy to understand and gave me great practice tests with detailed feedback. Their support boosted my confidence and kept me calm during the exam.', name: 'Undisclosed', badge: 'John Monash Science School' },
    { q: 'Thanks to Titanium, I was accepted into Bond Medicine. Their guidance and personalised support made all the difference in preparing for the entrance exams and interviews. My tutor kept me motivated every step of the way.', name: 'Tanelle Galea', badge: 'Bond University Medicine' },
  ]

  return (
    <>
      {/* HERO */}
      <section className="hero" id="home" onMouseMove={onHeroMove} onMouseLeave={onHeroLeave}>
        <canvas ref={canvasRef} className="hero-canvas" />
        <div ref={glowRef} className="hero-cursor-glow" />

        <div className="hero-layout">
          {/* Left — content */}
          <div className="hero-inner">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-rule" />
              VCE · SACE · NAPLAN · Selective Entry
            </div>
            <h1>
              Through<br />hardships,<br />
              <em>to the stars.</em>
            </h1>
            <p className="hero-attr">Built by Australia&apos;s top ATAR scorer.</p>
            <p className="hero-lead">
              Personalised tutoring — strategy-first, results-driven — for students who refuse to settle.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn-gold">Book a Trial Session</Link>
              <Link href="/programs" className="btn-ghost-light">Explore Programs →</Link>
            </div>
          </div>

          {/* Right — orbital, centred beside the text */}
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-math hero-math-1">∫ f(x) dx</div>
            <div className="hero-math hero-math-2">a² + b² = c²</div>
            <div className="hero-math hero-math-3">∇²φ = 0</div>
            <div className="hero-math hero-math-4">lim<sub>x→∞</sub></div>
            <div className="hero-math hero-math-5">e<sup>iπ</sup> + 1 = 0</div>
            <svg viewBox="0 0 420 420" className="hero-orbital-svg">
              <defs>
                <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(243,190,67,0.9)" />
                  <stop offset="60%" stopColor="rgba(243,190,67,0.3)" />
                  <stop offset="100%" stopColor="rgba(243,190,67,0)" />
                </radialGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g className="orbit-group-1">
                <ellipse cx="210" cy="210" rx="190" ry="74" fill="none" stroke="rgba(243,190,67,0.22)" strokeWidth="1" />
                <circle cx="400" cy="210" r="5" fill="#F3BE43" filter="url(#glow)" />
              </g>
              <g className="orbit-group-2">
                <ellipse cx="210" cy="210" rx="142" ry="56" fill="none" stroke="rgba(243,190,67,0.35)" strokeWidth="1" />
                <circle cx="352" cy="210" r="3.5" fill="#F3BE43" opacity="0.75" filter="url(#glow)" />
              </g>
              <g className="orbit-group-3">
                <ellipse cx="210" cy="210" rx="94" ry="37" fill="none" stroke="rgba(243,190,67,0.55)" strokeWidth="1" />
                <circle cx="304" cy="210" r="2.5" fill="#F3BE43" opacity="0.55" />
              </g>
              <circle cx="210" cy="210" r="28" fill="url(#starGlow)" className="star-pulse" />
              <circle cx="210" cy="210" r="8" fill="#F3BE43" filter="url(#glow)" />
              <line x1="210" y1="50" x2="210" y2="370" stroke="rgba(243,190,67,0.07)" strokeWidth="1" strokeDasharray="4 8" />
              <line x1="20" y1="210" x2="400" y2="210" stroke="rgba(243,190,67,0.07)" strokeWidth="1" strokeDasharray="4 8" />
            </svg>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENT TICKER */}
      {(() => {
        const items = [
          { label: 'ATAR 98.55', name: 'Alex Fazzioni' },
          { label: 'Bond University Medicine', name: 'Tanelle Galea' },
          { label: 'John Monash Science School', name: 'Selective Entry' },
          { label: '93% Improved', name: 'Within 2 Weeks' },
          { label: 'Scholarship Winner', name: 'Jasmine Manning' },
          { label: '100% Improved', name: 'Within 6 Weeks' },
          { label: 'Perfect ATAR', name: 'Our Founder' },
          { label: '120+ Students', name: 'Supported & Counting' },
          { label: 'AMC Distinction', name: 'Olympiad Prep' },
          { label: 'NAPLAN Band 10', name: 'Multiple Students' },
        ]
        const all = [...items, ...items]
        return (
          <div className="ticker-wrap">
            <div className="ticker-track">
              {all.map((item, i) => (
                <span key={i} className="ticker-item">
                  <span className="ticker-label">{item.label}</span>
                  <span className="ticker-name">{item.name}</span>
                  <span className="ticker-dot">✦</span>
                </span>
              ))}
            </div>
          </div>
        )
      })()}

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

      {/* SERVICES */}
      <section className="services">
        <div className="services-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">Our Services</span>
            <h2 className="section-title">Programs We Run</h2>
            <p className="lead" style={{ marginTop: 14 }}>From Year 3 to Year 12 — plus specialist entry and medical admissions. Every program is built around George Pólya&apos;s problem-solving method.</p>
            <div className="section-rule" />
          </div>
          <div className="services-grid">
            {[
              { n: '01', title: 'Year 3 to Year 12 Weekly Classes', desc: 'Structured weekly sessions across all year levels and subjects. Diagnose gaps, drill fundamentals, and build the consistency that compounds into results.' },
              { n: '02', title: 'Year 6–Year 8 Writing Mastery Program', desc: 'Essay structure, analytical writing, and persuasive technique for the critical middle-school years. The skills that make every English assessment easier from here.' },
              { n: '03', title: 'Australian Mathematics Competition and Olympiads Preparation', desc: 'Targeted preparation for the AMC and Mathematics Olympiad series. Problem-solving at the level that separates good from exceptional.' },
              { n: '04', title: 'Selective Entry and Scholarship Exams Weekly Classes', desc: 'Weekly coaching for HAST, Suzanne Cory, Melbourne High, and private-school scholarships. We know what the markers want.' },
              { n: '05', title: 'Medical School Admissions', desc: 'UCAT, interview technique, and portfolio preparation for Bond, Monash, UNSW and beyond. Guided by a current medical student who has been through the process.' },
            ].map(s => (
              <div className="service-card card-lift" key={s.n}>
                <span className="service-num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TITANIUM */}
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

      {/* PÓLYA METHOD */}
      <section className="polya">
        <div className="polya-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">The Pólya Method</span>
            <h2 className="section-title">Understand. Plan. Execute. Reflect.</h2>
            <p className="lead" style={{ marginTop: 14 }}>Inspired by George Pólya&apos;s <em>How to Solve It</em> — four steps we apply to every student, every week.</p>
            <div className="section-rule" />
          </div>
          <div className="polya-grid">
            {[
              { n: '01', t: 'Understand', b: 'Diagnose exactly where the student is — strengths, gaps, and how they think about problems.' },
              { n: '02', t: 'Plan', b: 'Build a personalised strategy: which topics to drill, which methods to rehearse, in what order.' },
              { n: '03', t: 'Execute', b: 'Weekly sessions, worksheets and topic tests. The work is visible and the pace is measurable.' },
              { n: '04', t: 'Reflect', b: 'Review every result. Adjust the plan. Repeat until the target is reached.' },
            ].map(s => (
              <div className="polya-card" key={s.n}>
                <span className="polya-step">Step {s.n}</span>
                <h3>{s.t}</h3>
                <p>{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
