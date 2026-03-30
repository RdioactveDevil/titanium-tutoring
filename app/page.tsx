'use client'
import { useEffect, useState } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
  }, [])

  const services = [
    { icon: '🏆', title: 'Selective Entry & Scholarships', desc: 'HAST, Suzanne Cory, Melbourne High, scholarship exams. We have been through these doors and know what the markers want.', tag: 'Selective Schools' },
    { icon: '📐', title: 'VCE & SACE Maths', desc: "Polya's four-step framework applied to every problem type. Methods, Specialist, General Maths — study scores, not just passes.", tag: 'Methods · Specialist' },
    { icon: '📝', title: 'NAPLAN Preparation', desc: 'Numeracy and literacy coaching for Years 3, 5, 7, and 9. We build fundamentals that stick, not last-minute cramming.', tag: 'Years 3–9' },
    { icon: '🌟', title: 'Primary Maths & English', desc: 'Years 1–6. Building confident, curious learners. Strong foundations make every year after easier.', tag: 'Primary School' },
    { icon: '📚', title: 'Year 7–10 Acceleration', desc: 'Get ahead before VCE or SACE begins. We identify gaps early and close them before they compound.', tag: 'Secondary School' },
    { icon: '🎯', title: 'Exam Strategy & Mindset', desc: 'Time management, stress resilience, and high-stakes exam technique. The skills no textbook teaches.', tag: 'All Levels' },
  ]

  const whyItems = [
    { title: "Polya's Problem-Solving Method", desc: 'Every session uses the four-step framework: Understand, Plan, Execute, Reflect. Students learn how to think, not just what to memorise.' },
    { title: 'Personalised to the Individual', desc: 'No cookie-cutter programmes. We diagnose exactly where each student is losing marks and build from there.' },
    { title: 'Herald Sun Featured', desc: 'Our results have been independently recognised in the press. We do not just claim outcomes — they speak for themselves.' },
    { title: 'Multilingual, Multicultural', desc: 'Tutoring available in English, Hindi, and Urdu. We understand the unique pressures on students from diverse backgrounds.' },
    { title: '120+ Students Served', desc: 'Across VCE, SACE, NAPLAN, and selective entry. A proven track record across multiple curricula and states.' },
    { title: 'Branded Resources Included', desc: 'Every student receives custom worksheets, PowerPoints, and answer keys — not photocopied textbook pages.' },
  ]

  const testimonials = [
    { initial: 'P', quote: 'My daughter went from a C in Methods to a B+ in one term. The way concepts are broken down made everything click for the first time.', name: 'Parent of VCE Student', detail: 'Mathematical Methods · Victoria' },
    { initial: 'A', quote: 'We tried two other tutors before Titanium. The difference was immediately obvious — structured, patient, and genuinely invested in results.', name: 'Parent of Year 9 Student', detail: 'NAPLAN · South Australia' },
    { initial: 'R', quote: 'My son got into his first-choice selective school. The exam strategy coaching was on another level — we could not have done it without Titanium.', name: 'Parent of Year 6 Student', detail: 'Selective Entry · Victoria' },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        :root{--navy:#0a1628;--gold:#c9a84c;--gold-light:#e8c96a;--cream:#f8f4ee;--slate:#6b7a99;--text:#1a2540}
        *{box-sizing:border-box;margin:0;padding:0}
        html,body{overflow-x:hidden;max-width:100vw}
        html{scroll-behavior:smooth}
        body{font-family:'DM Sans',sans-serif;background:var(--cream);color:var(--text)}
        nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:1.2rem 5%;background:rgba(10,22,40,0.96);backdrop-filter:blur(12px);border-bottom:1px solid rgba(201,168,76,0.2)}
        .nav-logo{display:flex;align-items:center;gap:.75rem;text-decoration:none}
        .nav-logo-icon{width:38px;height:38px;background:linear-gradient(135deg,#c9a84c,#e8c96a);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:1.1rem;font-weight:900;color:#0a1628;font-family:'Playfair Display',serif;flex-shrink:0}
        .nav-logo-text{font-family:'Playfair Display',serif;font-size:1.1rem;font-weight:700;color:#fff}
        .nav-logo-text span{color:#c9a84c}
        .nav-links{display:flex;align-items:center;gap:2rem;list-style:none}
        .nav-links a{text-decoration:none;color:rgba(255,255,255,0.75);font-size:.9rem;font-weight:500;transition:color .2s}
        .nav-links a:hover{color:#c9a84c}
        .nav-cta{background:#c9a84c;color:#0a1628 !important;padding:.55rem 1.3rem;border-radius:6px;font-weight:600 !important}
        .hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;background:none;border:none;padding:4px}
        .hamburger span{display:block;width:24px;height:2px;background:#fff;border-radius:2px}
        .mobile-menu{display:none;flex-direction:column;position:fixed;top:64px;left:0;right:0;background:#0a1628;padding:1.5rem 5%;gap:1.25rem;border-bottom:1px solid rgba(201,168,76,0.15);z-index:99}
        .mobile-menu.open{display:flex}
        .mobile-menu a{text-decoration:none;color:rgba(255,255,255,0.75);font-size:1rem;font-weight:500}
        .hero{min-height:100vh;width:100%;background:#0a1628;display:flex;align-items:flex-start;justify-content:center;flex-direction:column;position:relative;overflow:hidden;padding:8rem 5% 5rem}
        .hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse 70% 60% at 60% 50%,rgba(201,168,76,0.08) 0%,transparent 70%),linear-gradient(160deg,#0a1628 0%,#0d1e3a 50%,#0a1628 100%)}
        .hero-grid{position:absolute;inset:0;opacity:.04;background-image:linear-gradient(rgba(201,168,76,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.8) 1px,transparent 1px);background-size:60px 60px}
        .hero-content{position:relative;z-index:2;max-width:680px;animation:fadeUp .9s ease both}
        .hero-badge{display:inline-flex;align-items:center;gap:.5rem;background:rgba(201,168,76,0.12);border:1px solid rgba(201,168,76,0.3);border-radius:100px;padding:.4rem 1rem;font-size:.8rem;font-weight:600;color:#c9a84c;letter-spacing:.05em;text-transform:uppercase;margin-bottom:2rem}
        .hero h1{font-family:'Playfair Display',serif;font-size:clamp(2.4rem,5vw,4.8rem);font-weight:900;color:#fff;line-height:1.08;margin-bottom:1.5rem}
        .hero h1 em{font-style:normal;background:linear-gradient(135deg,#c9a84c,#e8c96a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .hero-sub{font-size:1.05rem;line-height:1.7;color:rgba(255,255,255,0.65);margin-bottom:2.5rem;max-width:520px;font-weight:300}
        .hero-sub strong{color:rgba(255,255,255,0.9);font-weight:500}
        .hero-actions{display:flex;gap:1rem;flex-wrap:wrap;align-items:center}
        .btn-primary{background:linear-gradient(135deg,#c9a84c,#e8c96a);color:#0a1628;padding:.9rem 2rem;border-radius:8px;font-weight:700;font-size:.95rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 20px rgba(201,168,76,0.3);display:inline-flex;align-items:center;gap:.5rem}
        .btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 30px rgba(201,168,76,0.4)}
        .btn-secondary{color:rgba(255,255,255,0.8);padding:.9rem 1.5rem;border-radius:8px;font-weight:500;font-size:.95rem;text-decoration:none;border:1px solid rgba(255,255,255,0.15);transition:all .2s;display:inline-flex;align-items:center;gap:.5rem}
        .btn-secondary:hover{border-color:rgba(201,168,76,0.4);color:#c9a84c}
        .hero-stats{position:relative;display:flex;gap:2.5rem;margin-top:3rem;flex-wrap:wrap;animation:fadeUp .9s .3s ease both}
        .stat-num{font-family:'Playfair Display',serif;font-size:2rem;font-weight:700;color:#c9a84c;display:block}
        .stat-label{font-size:.75rem;color:rgba(255,255,255,0.45);text-transform:uppercase;letter-spacing:.05em}
        .press-banner{background:#fff;border-bottom:1px solid rgba(0,0,0,0.06);padding:1.25rem 5%;width:100%;display:flex;flex-direction:column;align-items:center;gap:.75rem}
        .press-label{font-size:.72rem;text-transform:uppercase;letter-spacing:.1em;color:#6b7a99;font-weight:600}
        .press-logos{display:flex;align-items:center;justify-content:center;gap:2rem;flex-wrap:wrap;width:100%}
        .press-logo-text{white-space:nowrap;font-weight:700}
        .advertiser{font-family:'Times New Roman',serif;font-size:1rem;color:#111;font-weight:400}
        .herald{font-family:Arial,sans-serif;font-size:.9rem;color:#fff;background:#1a5ca8;padding:.2rem .6rem;font-weight:700}
        .telegraph{font-family:'Times New Roman',serif;font-size:1rem;color:#111;font-weight:700}
        .courier{font-family:'Times New Roman',serif;font-size:1rem;color:#111;font-weight:700}
        section{padding:6rem 5%;width:100%}
        .section-label{font-size:.75rem;text-transform:uppercase;letter-spacing:.12em;color:#c9a84c;font-weight:700;margin-bottom:.75rem}
        .section-title{font-family:'Playfair Display',serif;font-size:clamp(2rem,4vw,3rem);font-weight:700;color:#0a1628;line-height:1.15;margin-bottom:1.25rem}
        .section-sub{font-size:1.05rem;color:#6b7a99;line-height:1.7;max-width:560px;font-weight:300}
        .services{background:#fff}
        .services-header{display:flex;justify-content:space-between;align-items:flex-end;gap:2rem;flex-wrap:wrap;margin-bottom:3.5rem}
        .services-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem}
        .service-card{background:#f8f4ee;border:1px solid rgba(0,0,0,0.06);border-radius:16px;padding:2rem;transition:transform .25s,box-shadow .25s,border-color .25s;position:relative;overflow:hidden}
        .service-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#c9a84c,#e8c96a);opacity:0;transition:opacity .25s}
        .service-card:hover{transform:translateY(-4px);box-shadow:0 16px 40px rgba(10,22,40,0.1);border-color:rgba(201,168,76,0.2)}
        .service-card:hover::before{opacity:1}
        .service-icon{width:52px;height:52px;background:linear-gradient(135deg,#0a1628,#112040);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.4rem;margin-bottom:1.25rem}
        .service-card h3{font-family:'Playfair Display',serif;font-size:1.2rem;font-weight:700;color:#0a1628;margin-bottom:.75rem}
        .service-card p{font-size:.9rem;color:#6b7a99;line-height:1.65;margin-bottom:1.25rem}
        .service-tag{display:inline-block;background:rgba(201,168,76,0.12);color:#c9a84c;font-size:.72rem;font-weight:600;padding:.25rem .6rem;border-radius:4px;text-transform:uppercase;letter-spacing:.05em}
        .why{background:#0a1628}
        .why .section-title{color:#fff}
        .why .section-sub{color:rgba(255,255,255,0.5)}
        .why-grid{display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;margin-top:3.5rem}
        .why-item{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:1.75rem;transition:background .25s,border-color .25s}
        .why-item:hover{background:rgba(201,168,76,0.06);border-color:rgba(201,168,76,0.2)}
        .why-item h4{font-size:1.05rem;font-weight:600;color:#fff;margin-bottom:.5rem;display:flex;align-items:center;gap:.6rem}
        .check{width:22px;height:22px;min-width:22px;background:linear-gradient(135deg,#c9a84c,#e8c96a);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.65rem;color:#0a1628}
        .why-item p{font-size:.88rem;color:rgba(255,255,255,0.45);line-height:1.65;padding-left:1.9rem}
        .testimonials{background:#f8f4ee}
        .testimonials-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.5rem;margin-top:3.5rem}
        .testimonial-card{background:#fff;border-radius:16px;padding:2rem;border:1px solid rgba(0,0,0,0.06)}
        .stars{color:#c9a84c;font-size:.9rem;margin-bottom:1rem}
        .testimonial-card blockquote{font-size:.95rem;color:#1a2540;line-height:1.7;margin-bottom:1.5rem;font-style:italic}
        .testimonial-author{display:flex;align-items:center;gap:.75rem}
        .author-avatar{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#0a1628,#112040);display:flex;align-items:center;justify-content:center;font-weight:700;color:#c9a84c;font-size:.9rem}
        .author-name{font-weight:600;font-size:.9rem;color:#0a1628}
        .author-detail{font-size:.78rem;color:#6b7a99}
        .motto{background:linear-gradient(135deg,#c9a84c 0%,#e8c96a 100%);padding:5rem 5%;text-align:center;width:100%}
        .motto-text{font-family:'Playfair Display',serif;font-size:clamp(1.8rem,4vw,3rem);font-weight:700;color:#0a1628;font-style:italic;margin-bottom:.5rem}
        .motto small{font-size:.85rem;color:rgba(10,22,40,0.6);text-transform:uppercase;letter-spacing:.1em}
        .contact{background:#fff}
        .contact-inner{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center}
        .contact-form{display:flex;flex-direction:column;gap:1rem}
        .form-row{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
        .form-group{display:flex;flex-direction:column;gap:.4rem}
        .form-group label{font-size:.8rem;font-weight:600;color:#1a2540;text-transform:uppercase;letter-spacing:.04em}
        .form-group input,.form-group select,.form-group textarea{padding:.8rem 1rem;border:1.5px solid rgba(0,0,0,0.1);border-radius:8px;font-family:'DM Sans',sans-serif;font-size:.92rem;color:#1a2540;background:#f8f4ee;transition:border-color .2s;outline:none;width:100%}
        .form-group input:focus,.form-group select:focus,.form-group textarea:focus{border-color:#c9a84c;background:#fff}
        .form-group textarea{resize:vertical;min-height:110px}
        .submit-btn{background:linear-gradient(135deg,#c9a84c,#e8c96a);color:#0a1628;padding:1rem;border-radius:8px;font-weight:700;font-size:1rem;border:none;cursor:pointer;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 20px rgba(201,168,76,0.3)}
        .submit-btn:hover{transform:translateY(-2px);box-shadow:0 8px 30px rgba(201,168,76,0.4)}
        .contact-info{display:flex;flex-direction:column;gap:.75rem}
        .contact-info-item{display:flex;align-items:center;gap:.75rem;color:#6b7a99;font-size:.9rem}
        .contact-info-item span{color:#c9a84c}
        footer{background:#0a1628;padding:3rem 5% 2rem;border-top:1px solid rgba(201,168,76,0.15);width:100%}
        .footer-inner{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;margin-bottom:2rem}
        .footer-logo{font-family:'Playfair Display',serif;font-size:1.2rem;font-weight:700;color:#fff}
        .footer-logo span{color:#c9a84c}
        .footer-links{display:flex;gap:1.5rem;flex-wrap:wrap}
        .footer-links a{color:rgba(255,255,255,0.45);font-size:.85rem;text-decoration:none;transition:color .2s}
        .footer-links a:hover{color:#c9a84c}
        .footer-bottom{border-top:1px solid rgba(255,255,255,0.07);padding-top:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:.75rem}
        .footer-copy{font-size:.78rem;color:rgba(255,255,255,0.25)}
        .footer-motto{font-style:italic;color:rgba(201,168,76,0.4);font-size:.75rem}
        .fade-in{opacity:0;transform:translateY(20px);transition:opacity .6s ease,transform .6s ease}
        .fade-in.visible{opacity:1;transform:translateY(0)}
        @keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
        @media(max-width:768px){
          .nav-links{display:none}
          .hamburger{display:flex}
          .hero{padding-top:100px;padding-bottom:4rem}
          .hero-content{max-width:100%}
          .hero-badge{font-size:.7rem;padding:.35rem .8rem}
          .hero-stats{gap:1.5rem;margin-top:2rem}
          .stat-num{font-size:1.6rem}
          .why-grid{grid-template-columns:1fr}
          .contact-inner{grid-template-columns:1fr;gap:2.5rem}
          .form-row{grid-template-columns:1fr}
          .services-grid{grid-template-columns:1fr}
          .testimonials-grid{grid-template-columns:1fr}
          section{padding:4rem 5%}
          .press-logos{gap:1rem}
        }
      `}</style>

      {/* NAV */}
      <nav>
        <a href="#" className="nav-logo">
          <div className="nav-logo-icon">T</div>
          <div className="nav-logo-text">Titanium <span>Tutoring</span></div>
        </a>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#why">About</a></li>
          <li><a href="#testimonials">Results</a></li>
          <li><a href="#contact" className="nav-cta">Get Started →</a></li>
        </ul>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span/><span/><span/>
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#why" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#testimonials" onClick={() => setMenuOpen(false)}>Results</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Get Started</a>
      </div>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-bg"/>
        <div className="hero-grid"/>
        <div className="hero-content">
          <div className="hero-badge">As featured in the Herald Sun</div>
          <h1>From Struggle<br/>to <em>Top Marks.</em><br/>We&apos;ve Done It.</h1>
          <p className="hero-sub">
            Expert tutoring for <strong>VCE, SACE, NAPLAN</strong>, and selective entry exams — built by a student who scored the highest possible ATAR. We know exactly what it takes.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Book a Free Consultation →</a>
            <a href="#services" className="btn-secondary">See Our Services</a>
          </div>
          <div className="hero-stats">
            <div className="stat"><span className="stat-num">120+</span><span className="stat-label">Students Taught</span></div>
            <div className="stat"><span className="stat-num">97th</span><span className="stat-label">Percentile Maths</span></div>
            <div className="stat"><span className="stat-num">4+</span><span className="stat-label">Years Experience</span></div>
          </div>
        </div>
      </section>

      {/* PRESS */}
      <div className="press-banner">
        <p className="press-label">As seen in</p>
        <div className="press-logos">
          <span className="press-logo-text advertiser">The Advertiser</span>
          <span className="press-logo-text herald">Herald Sun</span>
          <span className="press-logo-text telegraph">Daily Telegraph</span>
          <span className="press-logo-text courier">Courier Mail</span>
        </div>
      </div>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="services-header fade-in">
          <div>
            <div className="section-label">What We Offer</div>
            <h2 className="section-title">Tutoring Built<br/>for High Performers</h2>
          </div>
          <p className="section-sub">Every programme is personalised. No generic worksheets — just targeted coaching that moves the needle.</p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card fade-in" key={i}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="service-tag">{s.tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="why" id="why">
        <div className="fade-in">
          <div className="section-label">Why Titanium</div>
          <h2 className="section-title">Taught by Someone<br/>Who&apos;s Done It</h2>
          <p className="section-sub">Our founder scored the highest possible ATAR at a selective entry school and placed in the 97th percentile nationally in the Australian Maths Competition.</p>
        </div>
        <div className="why-grid">
          {whyItems.map((w, i) => (
            <div className="why-item fade-in" key={i}>
              <h4><span className="check">✓</span>{w.title}</h4>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials" id="testimonials">
        <div className="fade-in">
          <div className="section-label">Student Results</div>
          <h2 className="section-title">What Families Say</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card fade-in" key={i}>
              <div className="stars">★★★★★</div>
              <blockquote>{t.quote}</blockquote>
              <div className="testimonial-author">
                <div className="author-avatar">{t.initial}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-detail">{t.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MOTTO */}
      <div className="motto">
        <p className="motto-text">&ldquo;Per aspera ad astra.&rdquo;</p>
        <small>Through hardship to the stars — the Titanium Tutoring philosophy</small>
      </div>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="contact-inner">
          <div className="fade-in">
            <div className="section-label">Get Started</div>
            <h2 className="section-title">Book a Free<br/>Consultation</h2>
            <p className="section-sub" style={{marginBottom:'2rem'}}>No commitment. We will discuss your child&apos;s specific needs and explain exactly how we would approach their preparation.</p>
            <div className="contact-info">
              <div className="contact-info-item"><span>📍</span> Serving Adelaide, Melbourne & online Australia-wide</div>
              <div className="contact-info-item"><span>📧</span> contact@titaniumtutoring.com</div>
              <div className="contact-info-item"><span>⚡</span> Response within 24 hours</div>
            </div>
          </div>
          <form className="contact-form fade-in" action="https://formspree.io/f/YOUR_CODE" method="POST">
            <div className="form-row">
              <div className="form-group">
                <label>Parent Name</label>
                <input type="text" name="name" placeholder="Your name"/>
              </div>
              <div className="form-group">
                <label>Year Level</label>
                <select name="year">
                  <option value="">Select year...</option>
                  <option>Primary (Years 1-6)</option>
                  <option>Year 7-10</option>
                  <option>VCE / SACE</option>
                  <option>Selective Entry Prep</option>
                  <option>NAPLAN</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" placeholder="your@email.com"/>
            </div>
            <div className="form-group">
              <label>Subject / Area of Help</label>
              <input type="text" name="subject" placeholder="e.g. Mathematical Methods, scholarship prep..."/>
            </div>
            <div className="form-group">
              <label>Tell Us More (optional)</label>
              <textarea name="message" placeholder="What are the main challenges your child is facing?"/>
            </div>
            <button type="submit" className="submit-btn">Send Enquiry →</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-logo">Titanium <span>Tutoring</span></div>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#why">About</a>
            <a href="#testimonials">Results</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">2025 Titanium Tutoring. All rights reserved.</p>
          <p className="footer-motto">Per aspera ad astra.</p>
        </div>
      </footer>
    </>
  )
}