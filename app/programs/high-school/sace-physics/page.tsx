'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/app/components/Breadcrumb'

const topics = [
  {
    key: 'Motion',
    title: 'Motion & Mechanics',
    desc: 'The foundation of SACE Physics. We build genuine understanding of kinematics and Newtonian mechanics — not formula memorisation, but the ability to analyse motion in any configuration, including the multi-step problems that appear in the external exam.',
    points: [
      'Kinematics — displacement, velocity, acceleration, SUVAT equations, and graphical analysis',
      'Newton\'s three laws — free body diagrams, net force analysis, and application to systems',
      'Projectile motion — horizontal and vertical components, time of flight, range',
      'Circular motion — centripetal acceleration, tension and normal force in circular paths',
      'Momentum and impulse — conservation of momentum, elastic and inelastic collisions',
      'Performance Standard A multi-step mechanics problem technique',
    ],
  },
  {
    key: 'Energy',
    title: 'Forces & Energy',
    desc: 'The unit that rewards students who understand the conservation principle deeply. We make energy analysis systematic — so students can choose between work-energy theorem and kinematics approaches based on what the question gives them.',
    points: [
      'Work and the work-energy theorem — calculating work from force-displacement graphs',
      'Gravitational potential and kinetic energy — conservation and energy transfers',
      'Power — rate of energy transfer, efficiency calculations',
      'Gravitational fields — field strength, field lines, potential energy at a distance',
      'Friction and drag — modelling resistive forces in energy problems',
      'Multi-body system energy analysis — springs, pulleys, inclined planes',
    ],
  },
  {
    key: 'Electricity',
    title: 'Electricity & Magnetism',
    desc: 'The most calculation-dense unit in SACE Physics. We build circuit analysis skill from first principles — so students can handle novel circuit configurations rather than pattern-matching to memorised examples.',
    points: [
      'Electric fields — field lines, field strength, force on charges, potential difference',
      'Ohm\'s law and circuit analysis — series and parallel circuits, Kirchhoff\'s laws',
      'Capacitors — charge storage, energy, charging and discharging behaviour',
      'Magnetic fields — field patterns, force on current-carrying conductors, motor effect',
      'Electromagnetic induction — Faraday\'s law, Lenz\'s law, generators and transformers',
      'AC vs DC — peak and RMS values, power in AC circuits',
    ],
  },
  {
    key: 'Waves',
    title: 'Waves & Optics',
    desc: 'A unit where conceptual understanding and calculation skill are equally tested. We make wave behaviour systematic — from the wave equation through to interference and diffraction — so every question type is familiar.',
    points: [
      'Wave properties — wavelength, frequency, period, amplitude, wave speed',
      'The wave equation — v = fλ, applied to sound, light, and other waves',
      'Interference — constructive and destructive, path difference conditions',
      'Diffraction — single and double slit, diffraction grating calculations',
      'Refraction — Snell\'s law, critical angle, total internal reflection',
      'Lens equations — converging and diverging lenses, ray diagrams, magnification',
    ],
  },
  {
    key: 'Nuclear',
    title: 'Nuclear & Modern Physics',
    desc: 'The unit that separates A students from B students in the external exam — because it requires applying unfamiliar quantum concepts rather than repeating practised procedures. We build the conceptual framework that makes these questions tractable.',
    points: [
      'Radioactive decay — alpha, beta, gamma, decay equations, half-life calculations',
      'Nuclear reactions — fission, fusion, mass defect, and binding energy per nucleon',
      'Photoelectric effect — threshold frequency, work function, Einstein\'s equation',
      'de Broglie wavelength — wave-particle duality, application to electrons',
      'Energy levels and photon emission — Bohr model, emission and absorption spectra',
      'Standard Model overview — quarks, leptons, and fundamental forces',
    ],
  },
]

export default function SacePhysics() {
  const [activeTopic, setActiveTopic] = useState(0)

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

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://titaniumtutoring.com.au/' },
      { '@type': 'ListItem', position: 2, name: 'Programs', item: 'https://titaniumtutoring.com.au/programs' },
      { '@type': 'ListItem', position: 3, name: 'High School', item: 'https://titaniumtutoring.com.au/programs/high-school' },
      { '@type': 'ListItem', position: 4, name: 'SACE Physics', item: 'https://titaniumtutoring.com.au/programs/high-school/sace-physics' },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How hard is SACE Physics Stage 2?', acceptedAnswer: { '@type': 'Answer', text: 'SACE Physics Stage 2 is one of the most demanding Stage 2 subjects — it requires both conceptual understanding and calculation fluency, and the external exam regularly tests novel applications of core principles rather than routine problems. Students who have a strong Stage 1 foundation and practise past exam questions under timed conditions manage it well. The most common difficulty is students who can follow examples but struggle to set up novel problems independently.' } },
      { '@type': 'Question', name: 'Does SACE Physics scale well for the ATAR?', acceptedAnswer: { '@type': 'Answer', text: 'SACE Physics has historically been a positively-scaling subject, meaning a given grade in Physics typically contributes more to the ATAR than the same grade in a lower-scaling subject. It is one of the subjects that most benefits students who perform strongly in it. However, scaling changes year to year — the principle remains that choosing a hard subject and doing well is almost always better than choosing an easy one and coasting.' } },
      { '@type': 'Question', name: 'What is the SACE Physics investigation folio?', acceptedAnswer: { '@type': 'Answer', text: 'The investigation folio is a school-assessed component requiring students to plan, conduct, and report on a scientific investigation. Physics investigations are quantitative and require careful experimental design, data analysis, and uncertainty propagation. We help students design viable experiments, analyse data correctly, and write reports that meet Performance Standard A.' } },
      { '@type': 'Question', name: 'Which SACE Physics topics are hardest?', acceptedAnswer: { '@type': 'Answer', text: 'Nuclear and modern physics consistently produces the most difficulty because it requires applying quantum concepts rather than repeating practised procedures. Electromagnetic induction and multi-step mechanics problems are also commonly underperformed. We prioritise these topics in our preparation because they carry significant mark value and are the areas where targeted preparation produces the largest improvement.' } },
      { '@type': 'Question', name: 'Is SACE Physics needed for engineering?', acceptedAnswer: { '@type': 'Answer', text: 'Physics is strongly recommended — and often assumed knowledge — for engineering programs at the University of Adelaide, Flinders, and UniSA. Some programs list it as a formal prerequisite. Students planning engineering pathways should confirm the specific requirements with SATAC and treat Physics as a high priority subject.' } },
      { '@type': 'Question', name: 'Do you offer SACE Physics tutoring in Adelaide?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer in-person SACE Physics tutoring in Adelaide, South Australia, as well as fully online sessions for students anywhere in SA or Australia. Our Physics tutors have strong subject backgrounds and work specifically to the SACE Board performance standards.' } },
    ],
  }

  const panel = topics[activeTopic]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="page-hero">
        <div className="page-hero-inner">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Programs', href: '/programs' },
            { label: 'High School', href: '/programs/high-school' },
            { label: 'SACE Physics' },
          ]} />
          <span className="eyebrow">SACE Stage 1 &amp; 2</span>
          <h1 className="section-title">SACE Physics Tutoring in Adelaide — Stage 1 &amp; 2</h1>
          <p className="lead">Physics rewards students who understand the why, not just the formula. We coach every SACE Physics topic to the performance standards — mechanics, electricity, waves, and modern physics — with the problem-solving technique and investigation rigour that produces consistent A grades.</p>
        </div>
      </div>

      <section className="curriculum">
        <div className="curriculum-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">The Study Design</span>
            <h2 className="section-title">SACE Physics: Stage 1 vs Stage 2</h2>
            <p className="lead" style={{ marginTop: 14 }}>Stage 1 builds conceptual fluency and calculation confidence. Stage 2 demands the ability to apply principles to unfamiliar situations — a skill built gradually, not achieved by last-minute cramming.</p>
            <div className="section-rule" />
          </div>
          <div className="split-grid">
            <div className="split-card navy slide-left">
              <span className="split-state">Year 11</span>
              <h3>Stage 1</h3>
              <p className="split-desc">Foundation. We build the problem-solving habits and conceptual clarity that Stage 2 depends on — free body diagrams, energy analysis, and circuit reasoning.</p>
              <ul className="split-list">
                <li><span className="split-check">✓</span>Kinematics and Newton&apos;s laws of motion</li>
                <li><span className="split-check">✓</span>Energy, work, and power</li>
                <li><span className="split-check">✓</span>Electricity — Ohm&apos;s law, series and parallel circuits</li>
                <li><span className="split-check">✓</span>Wave properties, sound, and light</li>
                <li><span className="split-check">✓</span>Introduction to atomic and nuclear physics</li>
                <li><span className="split-check">✓</span>SAT strategy and investigation folio introduction</li>
              </ul>
              <Link href="/contact" className="btn-gold-sm">Book Stage 1 Tutoring →</Link>
            </div>
            <div className="split-card cream slide-right">
              <span className="split-state">Year 12</span>
              <h3>Stage 2</h3>
              <p className="split-desc">ATAR territory. We map every session to the performance standards — multi-step problem solving, investigation folio execution, and external exam past paper drilling.</p>
              <ul className="split-list">
                <li><span className="split-check">✓</span>Advanced mechanics — projectile, circular, and momentum</li>
                <li><span className="split-check">✓</span>Electromagnetic induction — Faraday, Lenz, generators</li>
                <li><span className="split-check">✓</span>Waves — interference, diffraction, optics</li>
                <li><span className="split-check">✓</span>Nuclear and modern physics — photoelectric, de Broglie</li>
                <li><span className="split-check">✓</span>Investigation folio — quantitative design and error analysis</li>
                <li><span className="split-check">✓</span>External exam past papers under timed conditions</li>
              </ul>
              <Link href="/contact" className="btn-navy-sm">Book Stage 2 Tutoring →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="services-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">Topic Coverage</span>
            <h2 className="section-title">What We Cover &amp; How</h2>
            <p className="lead" style={{ marginTop: 14 }}>Select a topic area to see exactly what we cover and how we coach it.</p>
            <div className="section-rule" />
          </div>
          <div className="subject-tabs">
            {topics.map((t, i) => (
              <button
                key={t.key}
                className={`subject-tab-btn${activeTopic === i ? ' active' : ''}`}
                onClick={() => setActiveTopic(i)}
              >
                {t.key}
              </button>
            ))}
          </div>
          <div className="subject-panel">
            <h3 className="subject-panel-title">{panel.title}</h3>
            <p className="subject-panel-desc">{panel.desc}</p>
            <span className="subject-panel-label">What We Cover</span>
            <ul className="subject-panel-points">
              {panel.points.map(pt => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            <Link href="/contact" className="btn-navy-sm">Book a Trial Session →</Link>
          </div>
        </div>
      </section>

      <section className="related-programs">
        <div className="related-programs-inner">
          <div className="section-header">
            <span className="eyebrow">Explore Related Programs</span>
            <h2 className="section-title">Other High School<br />Programs</h2>
            <div className="section-rule" style={{ margin: '20px auto 0' }} />
          </div>
          <div className="related-grid">
            <Link href="/programs/high-school" className="related-card">
              <span className="related-card-eyebrow">Full Program</span>
              <div className="related-card-title">High School Program</div>
              <p className="related-card-desc">SACE coaching across all subjects — Physics, Chemistry, Methods, Biology, and English together.</p>
              <span className="related-card-link">Explore High School →</span>
            </Link>
            <Link href="/programs/high-school/sace-chemistry" className="related-card">
              <span className="related-card-eyebrow">SACE Science</span>
              <div className="related-card-title">SACE Chemistry</div>
              <p className="related-card-desc">Stage 2 Chemistry coaching — the subject most commonly paired with Physics for engineering and science pathways.</p>
              <span className="related-card-link">Explore SACE Chemistry →</span>
            </Link>
            <Link href="/programs/high-school/sace-methods" className="related-card">
              <span className="related-card-eyebrow">SACE Mathematics</span>
              <div className="related-card-title">SACE Mathematical Methods</div>
              <p className="related-card-desc">Stage 2 Methods coaching — the mathematical foundation that underpins Physics calculations and problem-solving.</p>
              <span className="related-card-link">Explore SACE Methods →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="consult-faq">
        <div className="consult-faq-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2 className="section-title">SACE Physics Tutoring — Common Questions from Adelaide Parents</h2>
            <div className="section-rule" />
          </div>
          <div className="consult-faq-list">
            {[
              { q: 'How hard is SACE Physics Stage 2?', a: 'SACE Physics Stage 2 is one of the most demanding Stage 2 subjects — it requires both conceptual understanding and calculation fluency, and the external exam regularly tests novel applications rather than routine problems. Students who have a strong Stage 1 foundation and practise past exam questions under timed conditions manage it well.' },
              { q: 'Does SACE Physics scale well for the ATAR?', a: 'SACE Physics has historically been a positively-scaling subject. It is one of the subjects that most benefits students who perform strongly in it. The principle remains that choosing Physics and doing well is almost always better for the ATAR than choosing a lower-scaling subject and coasting.' },
              { q: 'What is the SACE Physics investigation folio?', a: 'The investigation folio is a school-assessed component requiring students to plan, conduct, and report on a scientific investigation. Physics investigations are quantitative and require careful experimental design, data analysis, and uncertainty propagation. We help students design viable experiments and write reports that meet Performance Standard A.' },
              { q: 'Which SACE Physics topics are hardest?', a: 'Nuclear and modern physics consistently produces the most difficulty because it requires applying quantum concepts rather than repeating practised procedures. Electromagnetic induction and multi-step mechanics problems are also commonly underperformed. We prioritise these topics because they carry significant mark value and produce the largest improvement with targeted preparation.' },
              { q: 'Is SACE Physics needed for engineering?', a: 'Physics is strongly recommended — and often assumed knowledge — for engineering programs at the University of Adelaide, Flinders, and UniSA. Some programs list it as a formal prerequisite. Students planning engineering pathways should confirm specific requirements with SATAC and treat Physics as a high priority subject.' },
              { q: 'Do you offer SACE Physics tutoring in Adelaide?', a: 'Yes. We offer in-person SACE Physics tutoring in Adelaide, South Australia, as well as fully online sessions for students anywhere in SA or Australia. Our Physics tutors have strong subject backgrounds and work specifically to the SACE Board performance standards.' },
            ].map((f, i) => (
              <div className="consult-faq-item" key={i}>
                <div className="consult-faq-q" style={{ cursor: 'default' }}>
                  <span style={{ fontWeight: 600 }}>{f.q}</span>
                </div>
                <div className="consult-faq-a" style={{ display: 'block', paddingTop: 8 }}>{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="motto-banner">
        <div className="motto-banner-inner">
          <div className="motto-display" style={{ fontSize: 'clamp(16px,3vw,24px)' }}>SACE Physics Rewards Students Who Understand the Why, Not Just the Formula</div>
          <p className="motto-translation" style={{ marginBottom: 28 }}>Book a free trial session and we will work through a problem set together — identifying exactly where reasoning breaks down and how to fix it.</p>
          <Link href="/contact" className="btn-gold">Book a Free Trial</Link>
        </div>
      </div>
    </>
  )
}
