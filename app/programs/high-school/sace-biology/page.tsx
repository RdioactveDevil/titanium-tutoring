'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/app/components/Breadcrumb'

const topics = [
  {
    key: 'Cells',
    title: 'Cells & Molecules',
    desc: 'The molecular foundation of SACE Biology. We build deep understanding of DNA structure, protein synthesis, and cell function — because these concepts underpin every other unit and appear consistently in investigation folios and exams.',
    points: [
      'DNA structure, replication and protein synthesis (transcription & translation)',
      'Cell structure — organelle function in prokaryotes and eukaryotes',
      'Membrane transport — diffusion, osmosis, active transport, endocytosis',
      'Enzyme kinetics — lock and key, induced fit, inhibition, temperature and pH effects',
      'ATP production — cellular respiration, glycolysis, Krebs cycle, electron transport chain',
      'Performance Standard A data interpretation and experimental design',
    ],
  },
  {
    key: 'Genetics',
    title: 'Genetics & Inheritance',
    desc: 'Where SACE Biology students lose the most marks on SATs. We make the logic of inheritance explicit — pedigree analysis, gene expression, and the modern understanding of how genotype becomes phenotype.',
    points: [
      'Mendelian genetics — dominance, recessiveness, co-dominance, incomplete dominance',
      'Pedigree analysis — autosomal and sex-linked patterns',
      'Gene expression — promoters, transcription factors, post-translational modification',
      'Mutations — types, causes, consequences, and repair mechanisms',
      'Epigenetics — methylation, histone modification, gene regulation without DNA sequence change',
      'Stage 1 and Stage 2 genetics question formats and common traps',
    ],
  },
  {
    key: 'Ecosystems',
    title: 'Ecosystem Dynamics',
    desc: 'The quantitative side of Biology that catches students off guard. We drill food web analysis, energy flow calculations, and population ecology so that data-response questions become straightforward.',
    points: [
      'Food webs — trophic levels, energy transfer efficiency, biomass pyramids',
      'Energy flow calculations — 10% rule applications and percentage efficiency',
      'Population ecology — carrying capacity, logistic growth, predator-prey dynamics',
      'Biogeochemical cycles — carbon, nitrogen and phosphorus cycles in detail',
      'Keystone species — definition, examples, and ecosystem consequences of removal',
      'Investigation folio ecological data analysis and graphing technique',
    ],
  },
  {
    key: 'Evolution',
    title: 'Evolution & Biodiversity',
    desc: 'A high-mark unit that rewards conceptual clarity. We build rigorous understanding of natural selection mechanisms, population genetics, and phylogenetic analysis — the topics examiners use to separate A students.',
    points: [
      'Natural selection mechanisms — variation, selection pressure, differential reproduction',
      'Hardy-Weinberg equilibrium — conditions, calculations, and departures from equilibrium',
      'Speciation — allopatric and sympatric mechanisms, reproductive isolation',
      'Phylogeny — cladogram construction and interpretation, molecular vs morphological evidence',
      'Fossil evidence — relative and absolute dating, transitional forms, the fossil record',
      'Biodiversity classification and binomial nomenclature',
    ],
  },
  {
    key: 'Immunology',
    title: 'Immunology & Disease',
    desc: 'A conceptually dense unit that is especially important for students targeting medicine or health sciences. We make the immune system systematic — so students can apply the logic rather than memorise disconnected facts.',
    points: [
      'Innate immune responses — physical barriers, inflammation, phagocytosis, fever',
      'Adaptive immune responses — clonal selection, B cells, T cells, memory cells',
      'Antibody structure and function — antigen-binding sites, antibody diversity',
      'Vaccination — active vs passive immunity, herd immunity thresholds',
      'Pathogen recognition — PAMPs, toll-like receptors, MHC presentation',
      'Autoimmunity — breakdown of self-tolerance, examples and mechanisms',
    ],
  },
]

export default function SaceBiology() {
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
      { '@type': 'ListItem', position: 4, name: 'SACE Biology', item: 'https://titaniumtutoring.com.au/programs/high-school/sace-biology' },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is the SACE Biology investigation folio?', acceptedAnswer: { '@type': 'Answer', text: 'The investigation folio is a school-assessed component of SACE Biology that requires students to plan, conduct, and report on a scientific investigation. It is marked against the SACE Board performance standards and contributes to your school mark. We help students choose a viable investigation question, structure their report to hit Performance Standard A, and interpret their data correctly.' } },
      { '@type': 'Question', name: 'How important is data analysis in SACE Biology?', acceptedAnswer: { '@type': 'Answer', text: 'Data analysis is central to SACE Biology — both in the investigation folio and in the external exam. Questions regularly ask students to interpret graphs, calculate means, identify trends, and evaluate experimental design. We explicitly teach these skills because they are often underprepared.' } },
      { '@type': 'Question', name: 'What does the SACE Biology external exam cover?', acceptedAnswer: { '@type': 'Answer', text: 'The Stage 2 Biology external exam covers all topics from the study design — cells and molecules, genetics, ecosystems, evolution, and immunology. It includes short-answer, extended-response, and data-analysis questions. We work through past papers and model exam technique to help students perform under timed conditions.' } },
      { '@type': 'Question', name: 'Do I need Biology as a prerequisite for medicine?', acceptedAnswer: { '@type': 'Answer', text: 'Biology is not always a formal prerequisite for medicine in South Australia, but it is strongly recommended. A strong Biology result demonstrates the academic foundation medical schools expect, and the content directly underpins medicine. Chemistry is typically the more critical prerequisite subject.' } },
      { '@type': 'Question', name: 'What is the difference between Stage 1 and Stage 2 SACE Biology?', acceptedAnswer: { '@type': 'Answer', text: 'Stage 1 Biology (Year 11) introduces the core concepts and does not contribute to your ATAR, but it builds the foundation for Stage 2. Stage 2 Biology (Year 12) extends all topics, includes the investigation folio and an external exam, and contributes to your ATAR. We coach both stages with the same rigour.' } },
      { '@type': 'Question', name: 'Can you help with SACE Biology in Adelaide?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer in-person SACE Biology tutoring in Adelaide, South Australia, as well as fully online sessions for students anywhere in South Australia or Australia. Our tutors have strong Biology backgrounds and are familiar with the SACE Board performance standards.' } },
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
            { label: 'SACE Biology' },
          ]} />
          <span className="eyebrow">SACE Stage 1 &amp; 2</span>
          <h1 className="section-title">SACE Biology Tutoring in Adelaide — Stage 1 &amp; 2</h1>
          <p className="lead">Biology rewards students who understand the logic, not just the vocabulary. We coach every SACE Biology topic to the performance standards — cells, genetics, ecosystems, evolution, and immunology — with the investigation folio strategy and exam technique that turns understanding into an A.</p>
        </div>
      </div>

      <section className="curriculum">
        <div className="curriculum-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">The Study Design</span>
            <h2 className="section-title">SACE Biology: Stage 1 vs Stage 2</h2>
            <p className="lead" style={{ marginTop: 14 }}>Stage 1 introduces the conceptual framework. Stage 2 demands depth, data analysis, and investigation skills. We coach both with the same structured rigour — because surface-level Biology in Stage 1 becomes a liability in Stage 2.</p>
            <div className="section-rule" />
          </div>
          <div className="split-grid">
            <div className="split-card navy slide-left">
              <span className="split-state">Year 11</span>
              <h3>Stage 1</h3>
              <p className="split-desc">Foundation. We build conceptual clarity across all core areas so that Stage 2 extensions land on solid ground — not memorised definitions.</p>
              <ul className="split-list">
                <li><span className="split-check">✓</span>Cell structure and function — organelles and their roles</li>
                <li><span className="split-check">✓</span>DNA, genes, and protein synthesis</li>
                <li><span className="split-check">✓</span>Mendelian inheritance and basic pedigree analysis</li>
                <li><span className="split-check">✓</span>Ecosystems, food webs, and energy flow</li>
                <li><span className="split-check">✓</span>Evolution — natural selection and adaptation</li>
                <li><span className="split-check">✓</span>SAT strategy and investigation folio introduction</li>
              </ul>
              <Link href="/contact" className="btn-gold-sm">Book Stage 1 Tutoring →</Link>
            </div>
            <div className="split-card cream slide-right">
              <span className="split-state">Year 12</span>
              <h3>Stage 2</h3>
              <p className="split-desc">ATAR territory. We map every session to the performance standards — depth of content, investigation folio execution, and external exam preparation.</p>
              <ul className="split-list">
                <li><span className="split-check">✓</span>Advanced molecular biology — regulation, epigenetics</li>
                <li><span className="split-check">✓</span>Immunology — innate and adaptive immune system in depth</li>
                <li><span className="split-check">✓</span>Population genetics — Hardy-Weinberg and speciation</li>
                <li><span className="split-check">✓</span>Investigation folio — question design, data analysis, report structure</li>
                <li><span className="split-check">✓</span>External exam technique and past paper analysis</li>
                <li><span className="split-check">✓</span>Performance Standard A criteria applied to every response type</li>
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
              <p className="related-card-desc">SACE coaching across all subjects — not just Biology. English, Chemistry, Physics, Methods and more.</p>
              <span className="related-card-link">Explore High School →</span>
            </Link>
            <Link href="/programs/high-school/sace-methods" className="related-card">
              <span className="related-card-eyebrow">SACE Mathematics</span>
              <div className="related-card-title">SACE Mathematical Methods</div>
              <p className="related-card-desc">Stage 1 &amp; 2 Mathematical Methods coaching — the subject that pairs with Biology for most ATAR-focused students.</p>
              <span className="related-card-link">Explore SACE Methods →</span>
            </Link>
            <Link href="/programs/medical-school-admissions" className="related-card">
              <span className="related-card-eyebrow">Medical Pathway</span>
              <div className="related-card-title">Medical School Admissions</div>
              <p className="related-card-desc">Biology is the backbone of medicine. We help SA students build the ATAR and UCAT results needed to secure a medical school offer.</p>
              <span className="related-card-link">Explore Medical Admissions →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="consult-faq">
        <div className="consult-faq-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2 className="section-title">SACE Biology Tutoring — Common Questions from Adelaide Parents</h2>
            <div className="section-rule" />
          </div>
          <div className="consult-faq-list">
            {[
              { q: 'What is the SACE Biology investigation folio?', a: 'The investigation folio is a school-assessed component of SACE Biology that requires students to plan, conduct, and report on a scientific investigation. It is marked against the SACE Board performance standards and contributes to your school mark. We help students choose a viable investigation question, structure their report to hit Performance Standard A, and interpret their data correctly.' },
              { q: 'How important is data analysis in SACE Biology?', a: 'Data analysis is central to SACE Biology — both in the investigation folio and in the external exam. Questions regularly ask students to interpret graphs, calculate means, identify trends, and evaluate experimental design. We explicitly teach these skills because they are often underprepared.' },
              { q: 'What does the SACE Biology external exam cover?', a: 'The Stage 2 Biology external exam covers all topics from the study design — cells and molecules, genetics, ecosystems, evolution, and immunology. It includes short-answer, extended-response, and data-analysis questions. We work through past papers and model exam technique to help students perform under timed conditions.' },
              { q: 'Do I need Biology as a prerequisite for medicine?', a: 'Biology is not always a formal prerequisite for medicine in South Australia, but it is strongly recommended. A strong Biology result demonstrates the academic foundation medical schools expect, and the content directly underpins medicine. Chemistry is typically the more critical prerequisite subject.' },
              { q: 'What is the difference between Stage 1 and Stage 2 SACE Biology?', a: 'Stage 1 Biology (Year 11) introduces the core concepts and does not contribute to your ATAR, but it builds the foundation for Stage 2. Stage 2 Biology (Year 12) extends all topics, includes the investigation folio and an external exam, and contributes to your ATAR. We coach both stages with the same rigour.' },
              { q: 'Can you help with SACE Biology in Adelaide?', a: 'Yes. We offer in-person SACE Biology tutoring in Adelaide, South Australia, as well as fully online sessions for students anywhere in South Australia or Australia. Our tutors have strong Biology backgrounds and are familiar with the SACE Board performance standards.' },
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
          <div className="motto-display" style={{ fontSize: 'clamp(16px,3vw,24px)' }}>SACE Biology Results Are Made in the Investigation Folio</div>
          <p className="motto-translation" style={{ marginBottom: 28 }}>Book a free trial session and we will identify exactly where performance standard marks are being lost — and how to recover them.</p>
          <Link href="/contact" className="btn-gold">Book a Free Trial</Link>
        </div>
      </div>
    </>
  )
}
