'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/app/components/Breadcrumb'

const topics = [
  {
    key: 'Atomic',
    title: 'Atomic Structure & Bonding',
    desc: 'The conceptual foundation of SACE Chemistry. We build rigorous understanding of how atoms bond and interact — because every subsequent topic depends on being able to reason from electronic structure, not just recall facts.',
    points: [
      'Periodic trends — atomic radius, ionisation energy, electronegativity, electron affinity',
      'Ionic, covalent, and metallic bonding — structure, properties, and comparisons',
      'VSEPR theory — predicting molecular geometry from electron pairs',
      'Intermolecular forces — London dispersion, dipole-dipole, hydrogen bonding',
      'Lewis structures, formal charge, and resonance structures',
      'Performance Standard A structure-property reasoning tasks',
    ],
  },
  {
    key: 'Organic',
    title: 'Organic Chemistry',
    desc: 'The topic SACE Chemistry students most commonly rush — and pay for in the external exam. We teach mechanisms, not patterns, so students can handle the unfamiliar reaction questions that appear in every paper.',
    points: [
      'Functional groups — identification, IUPAC naming, and physical properties',
      'Addition reactions — alkenes, Markovnikov\'s rule, mechanism',
      'Substitution reactions — halogenation, nucleophilic substitution',
      'Elimination and condensation reactions — alcohols, esters, amides',
      'Polymer chemistry — addition and condensation polymers, structure and properties',
      'Spectroscopy interpretation — linking spectra to organic structures',
    ],
  },
  {
    key: 'Equilibrium',
    title: 'Chemical Equilibrium & Acid-Base',
    desc: 'The highest-value section of the SACE Chemistry external exam. We make equilibrium systematic — Le Chatelier\'s principle, Kc expressions, and pH calculations become predictable once the logic is internalised.',
    points: [
      'Le Chatelier\'s principle — predicting and explaining equilibrium shifts',
      'Kc and Kp expressions — writing correctly, including for solids and liquids',
      'Acid-base equilibria — strong vs weak, Ka, Kb, and pKa calculations',
      'pH calculations — strong acids, weak acids, buffers, and the Henderson-Hasselbalch equation',
      'Buffer solutions — how they work, how to make them, calculation problems',
      'Solubility product Ksp — precipitation prediction and solubility calculations',
    ],
  },
  {
    key: 'Electrochem',
    title: 'Electrochemistry',
    desc: 'A calculation-heavy topic where the marks are well-defined and predictable. We build the systematic approach — from standard electrode potentials through Nernst equation applications — so every electrochemistry question is tractable.',
    points: [
      'Standard electrode potentials — reading reduction potential tables, predicting spontaneity',
      'Galvanic cells — cell notation, EMF calculations, anode/cathode identification',
      'Electrolytic cells — electrolysis products, Faraday\'s laws, charge-mass calculations',
      'Nernst equation — concentration effects on cell potential',
      'Corrosion — electrochemical mechanism, protection methods',
      'Common exam calculation types and mark-earning structures',
    ],
  },
  {
    key: 'Spectroscopy',
    title: 'Spectroscopy & Quantitative Analysis',
    desc: 'The section that rewards students who have practised interpretation skills under time pressure. We drill IR, mass spec, and quantitative analysis so these questions become reliable marks rather than sources of anxiety.',
    points: [
      'Infrared spectroscopy — key absorption bands, functional group identification',
      'Mass spectrometry — molecular ion, fragmentation patterns, isotope peaks',
      'NMR spectroscopy — chemical shift, integration, splitting patterns (Stage 2)',
      'Quantitative analysis — percentage purity, yield calculations, multi-step stoichiometry',
      'Titration calculations — acid-base, redox, back-titration',
      'Error analysis in practical investigations — propagating uncertainty',
    ],
  },
]

export default function SaceChemistry() {
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
      { '@type': 'ListItem', position: 4, name: 'SACE Chemistry', item: 'https://titaniumtutoring.com.au/programs/high-school/sace-chemistry' },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Is SACE Chemistry a prerequisite for medicine in South Australia?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Chemistry is a formal prerequisite for undergraduate medicine at both the University of Adelaide and Flinders University. Students who do not complete SACE Stage 2 Chemistry cannot be considered for direct-entry medicine, regardless of their ATAR. We strongly recommend confirming prerequisite requirements with SATAC or your target university directly.' } },
      { '@type': 'Question', name: 'How hard is SACE Chemistry Stage 2?', acceptedAnswer: { '@type': 'Answer', text: 'Stage 2 Chemistry is genuinely demanding — it requires both conceptual understanding and calculation fluency across a wide range of topics. Students who have a solid Stage 1 foundation and keep up with the content throughout the year manage it well. The biggest predictor of difficulty is whether foundational errors from Stage 1 (particularly stoichiometry and bonding) have been corrected before Stage 2 begins.' } },
      { '@type': 'Question', name: 'Does SACE Chemistry scale well for the ATAR?', acceptedAnswer: { '@type': 'Answer', text: 'SACE Chemistry has historically scaled positively, meaning a given grade in Chemistry typically contributes more to the ATAR than the same grade in a lower-scaling subject. However, scaling factors change annually. The key principle remains: choosing Chemistry and performing strongly is almost always better for the ATAR than choosing an easier subject and coasting to a B.' } },
      { '@type': 'Question', name: 'What is the SACE Chemistry practical investigation folio?', acceptedAnswer: { '@type': 'Answer', text: 'The investigation folio requires students to plan, conduct, and report on a scientific investigation. It is school-assessed against the SACE Board performance standards. Chemistry investigations have a quantitative emphasis — students must collect numerical data, process it correctly, propagate measurement uncertainties, and discuss the implications of experimental error. We help students design viable experiments and write reports that meet Performance Standard A.' } },
      { '@type': 'Question', name: 'Which SACE Chemistry topics are hardest?', acceptedAnswer: { '@type': 'Answer', text: 'Based on past paper analysis and student experience, equilibrium (particularly buffer calculations and Ksp), electrochemistry (Nernst equation and Faraday\'s laws), and organic mechanisms are consistently the most challenging. Spectroscopy interpretation is highly learnable and becomes reliable with practice. We prioritise the topics with the highest mark value and the greatest room for improvement.' } },
      { '@type': 'Question', name: 'Do you offer SACE Chemistry tutoring in Adelaide?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer in-person SACE Chemistry tutoring in Adelaide, South Australia, as well as fully online sessions for students anywhere in SA or Australia. Our Chemistry tutors have strong subject backgrounds and work specifically to SACE Board performance standards.' } },
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
            { label: 'SACE Chemistry' },
          ]} />
          <span className="eyebrow">SACE Stage 1 &amp; 2</span>
          <h1 className="section-title">SACE Chemistry Tutoring in Adelaide — Stage 1 &amp; 2</h1>
          <p className="lead">Chemistry is a prerequisite for medicine and a high-scaling ATAR subject — but it demands calculation fluency, conceptual depth, and investigation rigour simultaneously. We coach every SACE Chemistry topic to the performance standards, with the folio strategy and exam technique that produces consistent A grades.</p>
        </div>
      </div>

      <section className="curriculum">
        <div className="curriculum-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">The Study Design</span>
            <h2 className="section-title">SACE Chemistry: Stage 1 vs Stage 2</h2>
            <p className="lead" style={{ marginTop: 14 }}>Stage 1 builds the quantitative and conceptual foundation. Stage 2 demands application, investigation skill, and the ability to reason under pressure. Every Stage 1 gap compounds in Stage 2 — we close them early.</p>
            <div className="section-rule" />
          </div>
          <div className="split-grid">
            <div className="split-card navy slide-left">
              <span className="split-state">Year 11</span>
              <h3>Stage 1</h3>
              <p className="split-desc">Foundation. We build the calculation fluency and conceptual clarity that Stage 2 depends on — stoichiometry, bonding, and equilibrium basics.</p>
              <ul className="split-list">
                <li><span className="split-check">✓</span>Atomic structure, periodicity, and bonding</li>
                <li><span className="split-check">✓</span>Stoichiometry — mole calculations, limiting reagents</li>
                <li><span className="split-check">✓</span>Introduction to organic chemistry and functional groups</li>
                <li><span className="split-check">✓</span>Acid-base concepts — strong and weak acids</li>
                <li><span className="split-check">✓</span>Introductory equilibrium and reaction rates</li>
                <li><span className="split-check">✓</span>SAT strategy and investigation folio introduction</li>
              </ul>
              <Link href="/contact" className="btn-gold-sm">Book Stage 1 Tutoring →</Link>
            </div>
            <div className="split-card cream slide-right">
              <span className="split-state">Year 12</span>
              <h3>Stage 2</h3>
              <p className="split-desc">ATAR territory. We map every session to the performance standards — equilibrium depth, electrochemistry, organic mechanisms, and investigation folio execution.</p>
              <ul className="split-list">
                <li><span className="split-check">✓</span>Chemical equilibrium — Kc, Kp, Le Chatelier, buffers</li>
                <li><span className="split-check">✓</span>Electrochemistry — cell potentials, electrolysis, Faraday</li>
                <li><span className="split-check">✓</span>Organic mechanisms — addition, substitution, elimination</li>
                <li><span className="split-check">✓</span>Spectroscopy — IR, mass spec, NMR interpretation</li>
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
              <p className="related-card-desc">SACE coaching across all subjects — Chemistry, Biology, Physics, Methods, and English together.</p>
              <span className="related-card-link">Explore High School →</span>
            </Link>
            <Link href="/programs/high-school/sace-methods" className="related-card">
              <span className="related-card-eyebrow">SACE Mathematics</span>
              <div className="related-card-title">SACE Mathematical Methods</div>
              <p className="related-card-desc">Stage 2 Mathematical Methods coaching — the subject that most commonly pairs with Chemistry for science-pathway students.</p>
              <span className="related-card-link">Explore SACE Methods →</span>
            </Link>
            <Link href="/programs/medical-school-admissions" className="related-card">
              <span className="related-card-eyebrow">Medical Pathway</span>
              <div className="related-card-title">Medical School Admissions</div>
              <p className="related-card-desc">Chemistry is the non-negotiable prerequisite for SA medicine. We connect Chemistry performance to the full medical school admissions pathway.</p>
              <span className="related-card-link">Explore Medical Admissions →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="consult-faq">
        <div className="consult-faq-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2 className="section-title">SACE Chemistry Tutoring — Common Questions from Adelaide Parents</h2>
            <div className="section-rule" />
          </div>
          <div className="consult-faq-list">
            {[
              { q: 'Is SACE Chemistry a prerequisite for medicine in South Australia?', a: 'Yes. Chemistry is a formal prerequisite for undergraduate medicine at both the University of Adelaide and Flinders University. Students who do not complete SACE Stage 2 Chemistry cannot be considered for direct-entry medicine, regardless of their ATAR. We strongly recommend confirming prerequisite requirements with SATAC or your target university directly.' },
              { q: 'How hard is SACE Chemistry Stage 2?', a: 'Stage 2 Chemistry is genuinely demanding — it requires both conceptual understanding and calculation fluency across a wide range of topics. Students who have a solid Stage 1 foundation and keep up with the content throughout the year manage it well. The biggest predictor of difficulty is whether foundational errors from Stage 1 have been corrected before Stage 2 begins.' },
              { q: 'Does SACE Chemistry scale well for the ATAR?', a: 'SACE Chemistry has historically scaled positively, meaning a given grade in Chemistry typically contributes more to the ATAR than the same grade in a lower-scaling subject. The key principle remains: choosing Chemistry and performing strongly is almost always better for the ATAR than choosing an easier subject.' },
              { q: 'What is the SACE Chemistry practical investigation folio?', a: 'The investigation folio requires students to plan, conduct, and report on a scientific investigation. Chemistry investigations have a quantitative emphasis — students must collect numerical data, process it correctly, propagate measurement uncertainties, and discuss experimental error. We help students design viable experiments and write reports that meet Performance Standard A.' },
              { q: 'Which SACE Chemistry topics are hardest?', a: 'Based on past paper analysis, equilibrium (buffer calculations and Ksp), electrochemistry (Nernst equation and Faraday\'s laws), and organic mechanisms are consistently the most challenging. Spectroscopy interpretation is highly learnable and becomes reliable with practice. We prioritise the topics with the highest mark value and greatest room for improvement.' },
              { q: 'Do you offer SACE Chemistry tutoring in Adelaide?', a: 'Yes. We offer in-person SACE Chemistry tutoring in Adelaide, South Australia, as well as fully online sessions for students anywhere in SA or Australia. Our Chemistry tutors have strong subject backgrounds and work specifically to SACE Board performance standards.' },
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
          <div className="motto-display" style={{ fontSize: 'clamp(16px,3vw,24px)' }}>SACE Chemistry Is a Prerequisite for Medicine — Don&apos;t Leave It to Chance</div>
          <p className="motto-translation" style={{ marginBottom: 28 }}>Book a free trial session and we will identify exactly where marks are being lost — and how to recover them before the next SAT.</p>
          <Link href="/contact" className="btn-gold">Book a Free Trial</Link>
        </div>
      </div>
    </>
  )
}
