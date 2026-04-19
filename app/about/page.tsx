'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function About() {
  const [email, setEmail] = useState('')
  const [emailSent, setEmailSent] = useState(false)

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

  const journeySteps = [
    { num: '01', phase: 'Foundation Years', years: 'Years 7–9', title: 'Build the Base Others Skip', desc: 'Most tutors wait until the panic sets in. We start early — algebra, geometry, essay structure, and mathematical reasoning built from first principles before gaps compound.', stats: [{ num: '3×', label: 'faster gap-close vs reactive tutoring' }, { num: '100%', label: 'VIC & SA curriculum alignment' }] },
    { num: '02', phase: 'Year 10 Readiness', years: 'Year 10', title: 'Close Gaps Before They Compound', desc: "Year 10 determines VCE and SACE outcomes. We diagnose exactly where marks are lost and apply Pólya's four-step framework to close every weakness before it becomes a crisis.", stats: [{ num: '94%', label: 'of students improve within 2 weeks' }, { num: '4+', label: 'grade levels average gain' }] },
    { num: '03', phase: 'VCE / SACE Mastery', years: 'Years 11–12', title: 'Study Scores, Not Just Passes', desc: 'Methods, Specialist, English, General Maths. Every subject coached with the same structured rigour — custom resources, weekly feedback, and targeted exam technique.', stats: [{ num: '93%', label: 'of students improve 2+ grades' }, { num: '120+', label: 'students across VIC & SA' }] },
    { num: '04', phase: 'Exam Strategy', years: 'Throughout', title: 'The Skills No Textbook Teaches', desc: 'Time management under pressure, question decoding, error-checking protocols. We run full mock exams and debrief every mistake so nothing surprises you on the day.', stats: [{ num: '7+', label: 'years high-stakes exam coaching' }, { num: '99.95', label: "ATAR — our founder's own score" }] },
    { num: '05', phase: 'Final Push', years: 'ATAR Season', title: 'Cross the Line at the Top', desc: 'In the final term we shift to pure exam simulation. Past papers, timed sessions, targeted revision on high-yield topics. No guesswork — just precision.', stats: [{ num: '100%', label: 'of students would recommend Titanium' }, { num: '★ 5/5', label: 'average parent satisfaction' }] },
  ]

  const weeklyTopics = [
    { tag: 'VCE Methods', title: 'Integration traps that cost 5+ marks', preview: 'The chain rule in reverse — most students set up correctly but evaluate bounds wrong. One technique fixes it.' },
    { tag: 'SACE English', title: 'The paragraph structure examiners reward', preview: 'PEEL works for Year 10. Stage 2 markers reward complexity: claim → concede → counter. Here is how.' },
    { tag: 'Scholarship Prep', title: 'Pattern recognition in abstract reasoning', preview: 'HAST abstract reasoning follows 6 recurring patterns. Drill these and 80% of questions become predictable.' },
  ]

  return (
    <>
      {/* PAGE HEADER */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">Our Story</span>
          <h1 className="section-title">About Titanium Tutoring</h1>
          <p className="lead">Built by a student who lived the exam pressure — and came out the other side with the highest possible ATAR. Now we help others do the same.</p>
        </div>
      </div>

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
                { title: '120+ Students Served', desc: 'Across VCE, SACE, NAPLAN, and selective entry. A proven track record across multiple curricula and states.' },
                { title: 'Personalised Resources', desc: 'Every student receives custom worksheets, PowerPoints, and answer keys — not photocopied textbook pages.' },
              ].map((w, i) => (
                <div className="why-item" key={i}>
                  <h4><span className="check-mark">✓</span>{w.title}</h4>
                  <p>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* YOUR JOURNEY */}
      <section className="journey">
        <div className="journey-inner">
          <div className="fade-in">
            <span className="eyebrow">The Titanium Method</span>
            <h2 className="section-title">Your Journey<br />to the Top</h2>
            <p className="lead" style={{ maxWidth: 600, marginTop: 14 }}>Every student starts somewhere different. Here is how Titanium guides students from wherever they are now to wherever they need to be.</p>
          </div>
          <div className="journey-track">
            {journeySteps.map((step, i) => (
              <div className="journey-step fade-in" key={i} data-delay={`${i * 100}`}>
                <div className="step-bubble">{step.num}</div>
                <div className="step-card">
                  <div className="step-meta">
                    <span className="step-phase">{step.phase}</span>
                    <span className="step-years">{step.years}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                  <div className="step-stats">
                    {step.stats.map((s, j) => (
                      <div className="step-stat" key={j}>
                        <span className="step-stat-num">{s.num}</span>
                        <span className="step-stat-label">{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEEKLY INSIGHTS */}
      <section className="insights">
        <div className="insights-inner">
          <div className="fade-in">
            <span className="eyebrow">Stay Sharp</span>
            <h2 className="section-title">Weekly Insights<br />for High Achievers</h2>
            <p className="lead" style={{ maxWidth: 560, marginTop: 14 }}>Every week: the exact trap that costs VCE and SACE students marks, the structure examiners reward, and a scholarship prep tip — direct to your inbox.</p>
          </div>
          <div className="insights-layout">
            <div className="insight-cards">
              {weeklyTopics.map((t, i) => (
                <div className="insight-card slide-left" key={i} data-delay={`${i * 80}`}>
                  <span className="insight-tag">{t.tag}</span>
                  <h4>{t.title}</h4>
                  <p>{t.preview}</p>
                </div>
              ))}
            </div>
            <div className="slide-right">
              <div className="signup-box">
                <h3>Join 120+ Families</h3>
                <p>One email per week. VCE and SACE exam insights, delivered by the tutor who has lived it.</p>
                <div className="signup-proof">
                  <div className="proof-avatars">
                    {['A','J','T','R','M'].map((l, i) => <div className="proof-dot" key={i}>{l}</div>)}
                  </div>
                  <span className="proof-text">120+ families already subscribed</span>
                </div>
                {emailSent ? (
                  <div className="signup-success">You are in. First issue lands this week.</div>
                ) : (
                  <div className="signup-form">
                    <input type="email" className="signup-input" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} />
                    <button className="btn-gold" style={{ width: '100%', justifyContent: 'center' }} onClick={() => { if (email.includes('@')) setEmailSent(true) }}>
                      Send Me Weekly Insights
                    </button>
                    <p className="signup-note">No spam. Unsubscribe anytime.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
