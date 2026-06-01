'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/app/components/Breadcrumb'

const sections = [
  {
    key: 'Introduction',
    title: 'Introduction & Research Question',
    desc: 'The introduction sets the standard for everything that follows. Its job is to establish a precise, answerable research question with clearly defined variables — and to signal to the marker that the investigation is mathematically purposeful, not exploratory in a vague sense.',
    points: [
      'State your research question as a specific mathematical question — "How does [independent variable] affect [dependent variable]?" — not a topic heading',
      'Define every variable algebraically before using it — do not assume the reader shares your notation',
      'State the scope explicitly: what values are you investigating, and why those values',
      'Justify the mathematical approach — why is this topic amenable to mathematical investigation?',
      'A strong introduction is one paragraph: research question, variable definitions, scope, method overview',
      'Common mistake: writing "I will investigate functions" — this is a topic, not a question',
    ],
  },
  {
    key: 'Development',
    title: 'Mathematical Development',
    desc: 'This is the body of the investigation — the section where marks are won or lost. Performance Standard A requires mathematical development that is systematic and rigorous: each step justified, each result explained, and a clear thread of reasoning from the opening question to the emerging pattern.',
    points: [
      'Work through specific cases first — calculate, tabulate, and graph before generalising',
      'Show all working — intermediate steps, not just results',
      'Explain each step: "therefore", "substituting x = 2 gives", "this result implies" — reasoning must be explicit',
      'Use multiple representations — algebraic, graphical, and numerical — to build the argument',
      'Include well-labelled graphs with axes, scales, and titles — graphs are evidence, not decoration',
      'Each paragraph should advance the investigation — do not restate what you have already shown',
    ],
  },
  {
    key: 'Generalisation',
    title: 'Generalisation & Conjecture',
    desc: 'The generalisation is where the investigation demonstrates mathematical thinking beyond computation. After establishing a pattern through specific cases, the student must state a general result — a formula, relationship, or principle that holds for all cases in the investigation\'s scope.',
    points: [
      'State your generalisation as a precise mathematical claim — use algebraic notation, not English description alone',
      'Explain how the pattern in your specific cases led you to the generalisation',
      'If you derived the generalisation algebraically, show the derivation in full',
      'If the generalisation is a conjecture (observed but not proved), label it as such',
      'Identify any conditions or restrictions on the generalisation — when does it hold?',
      'Common mistake: stating "I notice a pattern" without specifying what the pattern is mathematically',
    ],
  },
  {
    key: 'Verification',
    title: 'Verification',
    desc: 'Verification demonstrates that the generalisation holds beyond the cases used to derive it. This section is frequently omitted or done superficially — which costs marks. A strong verification section uses genuinely independent cases and explicitly confirms that the generalisation is satisfied.',
    points: [
      'Choose cases that were NOT used in the development section — new values, not re-tested ones',
      'Apply the generalisation to each verification case and show the calculation explicitly',
      'Confirm that the verification result matches what the generalisation predicts',
      'If a verification case fails, investigate why — this often reveals a constraint that strengthens the investigation',
      'Graphical verification can supplement but should not replace algebraic verification',
      'One or two well-chosen verification cases is enough — quantity does not substitute for clarity',
    ],
  },
  {
    key: 'Conclusion',
    title: 'Conclusion & Reflection',
    desc: 'The conclusion directly answers the research question using the generalisation and verification results. It also reflects on the limitations of the investigation and identifies genuine extensions — demonstrating mathematical maturity beyond the scope of the task.',
    points: [
      'Open the conclusion by directly answering the research question you stated in the introduction',
      'Reference your generalisation explicitly — the conclusion should follow from it, not restate the whole investigation',
      'Discuss at least two genuine limitations — specific constraints on your method or scope, not generic "human error"',
      'Suggest a meaningful extension that follows logically from your findings — not an arbitrary "I could do more"',
      'Keep the conclusion concise — one to two paragraphs maximum',
      'Common mistake: introducing new calculations in the conclusion that were not part of the investigation',
    ],
  },
]

export default function SaceInvestigationGuide() {
  const [activeSection, setActiveSection] = useState(0)

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
      { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://titaniumtutoring.com.au/resources' },
      { '@type': 'ListItem', position: 3, name: 'SACE Methods Investigation Guide', item: 'https://titaniumtutoring.com.au/resources/sace-investigation-guide' },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How much is the SACE Mathematical Methods investigation worth?', acceptedAnswer: { '@type': 'Answer', text: 'The Mathematical Investigation is worth 20% of your Stage 2 SACE Mathematical Methods school assessment mark, which contributes 70% of your final subject result. This makes the investigation worth approximately 14% of your total Methods grade — more than any single SAT.' } },
      { '@type': 'Question', name: 'How long should the SACE Methods investigation be?', acceptedAnswer: { '@type': 'Answer', text: 'There is no fixed length requirement, but most investigations that score Performance Standard A are 8 to 12 pages of mathematical content, including graphs, tables, and working. The key is depth rather than length — a 6-page investigation with rigorous reasoning scores higher than a 15-page investigation that is repetitive and shallow.' } },
      { '@type': 'Question', name: 'Can I choose my own investigation topic?', acceptedAnswer: { '@type': 'Answer', text: 'Schools typically provide a topic area or a list of approved topics, and students choose a specific direction within that scope. The choice of direction within the topic significantly affects how easy it is to achieve depth — some directions run out of mathematical content quickly, while others support genuine generalisation. Choosing well is part of the task.' } },
      { '@type': 'Question', name: 'What is the difference between a conjecture and a proof in the investigation?', acceptedAnswer: { '@type': 'Answer', text: 'A conjecture is a general statement that has been observed to hold in the cases you tested but has not been formally proved. A proof establishes that the statement holds for all cases within the claimed scope. Stage 2 Mathematical Methods investigations can include either — the important thing is to label which you are doing and to be explicit about the distinction. Claiming a proof when you have only a conjecture costs marks.' } },
      { '@type': 'Question', name: 'How is the Mathematical Investigation marked?', acceptedAnswer: { '@type': 'Answer', text: 'The investigation is marked by your school against the SACE Board\'s Performance Standards, which are descriptors ranging from A (highest) to E. Performance Standard A requires systematic and thorough mathematical reasoning communicated clearly and concisely. The markers assess both the quality of the mathematics and the quality of the written communication — correct mathematics presented poorly will not score Performance Standard A.' } },
    ],
  }

  const panel = sections[activeSection]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="page-hero">
        <div className="page-hero-inner">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Resources', href: '/resources' },
            { label: 'SACE Methods Investigation Guide' },
          ]} />
          <span className="eyebrow">SACE Stage 2 Mathematics</span>
          <h1 className="section-title">The Complete SACE Mathematical Methods Investigation Guide</h1>
          <p className="lead">The Mathematical Investigation is worth 20% of your SACE Methods school mark — yet most students treat it as an afterthought. This guide breaks down every section of the investigation report, what Performance Standard A actually requires, and the common mistakes that cost marks at each stage.</p>
        </div>
      </div>

      <section className="curriculum">
        <div className="curriculum-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">Assessment Overview</span>
            <h2 className="section-title">What the Investigation Requires</h2>
            <p className="lead" style={{ marginTop: 14 }}>Understanding the assessment structure is the first step toward performing well in it.</p>
            <div className="section-rule" />
          </div>
          <div className="split-grid">
            <div className="split-card navy slide-left">
              <span className="split-state">Weight &amp; Structure</span>
              <h3>Assessment Overview</h3>
              <p className="split-desc">The investigation folio is a formal mathematical inquiry — not an extended homework task. The marker expects a structured report demonstrating genuine mathematical reasoning.</p>
              <ul className="split-list">
                <li><span className="split-check">✓</span>Worth 20% of school assessment (70% of total grade)</li>
                <li><span className="split-check">✓</span>Marked against SACE Board Performance Standards A–E</li>
                <li><span className="split-check">✓</span>Assessed on both mathematical rigour and written communication</li>
                <li><span className="split-check">✓</span>Typically 3–4 weeks allocated by the school</li>
                <li><span className="split-check">✓</span>Requires a formal written report with all sections</li>
                <li><span className="split-check">✓</span>Generalisation and verification are mandatory components</li>
              </ul>
            </div>
            <div className="split-card cream slide-right">
              <span className="split-state">Why Students Underperform</span>
              <h3>Common Failure Modes</h3>
              <p className="split-desc">Most students who underperform on the investigation do so for reasons that are entirely preventable with the right preparation.</p>
              <ul className="split-list">
                <li><span className="split-check">✓</span>Choosing a topic that runs out of mathematical content after two pages</li>
                <li><span className="split-check">✓</span>Presenting calculations without explaining the reasoning between steps</li>
                <li><span className="split-check">✓</span>Stating a generalisation without showing how the specific cases led to it</li>
                <li><span className="split-check">✓</span>Verifying with the same cases used to derive the generalisation</li>
                <li><span className="split-check">✓</span>Undefined variables and inconsistent notation throughout</li>
                <li><span className="split-check">✓</span>A conclusion that does not answer the opening research question</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="services-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">Report Structure</span>
            <h2 className="section-title">Section by Section Breakdown</h2>
            <p className="lead" style={{ marginTop: 14 }}>Select a section to see exactly what it requires and the specific mistakes to avoid.</p>
            <div className="section-rule" />
          </div>
          <div className="subject-tabs">
            {sections.map((s, i) => (
              <button
                key={s.key}
                className={`subject-tab-btn${activeSection === i ? ' active' : ''}`}
                onClick={() => setActiveSection(i)}
              >
                {s.key}
              </button>
            ))}
          </div>
          <div className="subject-panel">
            <h3 className="subject-panel-title">{panel.title}</h3>
            <p className="subject-panel-desc">{panel.desc}</p>
            <span className="subject-panel-label">Requirements &amp; Common Mistakes</span>
            <ul className="subject-panel-points">
              {panel.points.map(pt => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            <Link href="/contact" className="btn-navy-sm">Get Investigation Coaching →</Link>
          </div>
        </div>
      </section>

      <section className="curriculum">
        <div className="curriculum-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">Topic Selection</span>
            <h2 className="section-title">Choosing a Direction That Works</h2>
            <p className="lead" style={{ marginTop: 14 }}>The investigation direction you choose within the given topic area significantly affects how achievable Performance Standard A is.</p>
            <div className="section-rule" />
          </div>
          <div className="split-grid">
            <div className="split-card navy slide-left">
              <span className="split-state">Strong Topic Characteristics</span>
              <h3>Topics That Work Well</h3>
              <p className="split-desc">Good investigation topics share common characteristics — they support depth, generalisation, and verification without running dry or becoming unmanageable.</p>
              <ul className="split-list">
                <li><span className="split-check">✓</span>A clear independent variable whose effect on a dependent variable can be measured mathematically</li>
                <li><span className="split-check">✓</span>Multiple specific cases that build toward a visible pattern</li>
                <li><span className="split-check">✓</span>A generalisation that can be stated algebraically and verified</li>
                <li><span className="split-check">✓</span>Scope that is wide enough for 3–4 pages of genuine content</li>
                <li><span className="split-check">✓</span>Connection to calculus, functions, or statistics — the core Methods topics</li>
              </ul>
            </div>
            <div className="split-card cream slide-right">
              <span className="split-state">Common Pitfalls</span>
              <h3>Topics to Avoid</h3>
              <p className="split-desc">Some topic directions consistently underperform — not because students are weak, but because the direction does not support the kind of mathematical investigation the assessment rewards.</p>
              <ul className="split-list">
                <li><span className="split-check">✓</span>Topics that are purely computational with no discernible pattern</li>
                <li><span className="split-check">✓</span>Directions so broad that the investigation never goes deep into any single idea</li>
                <li><span className="split-check">✓</span>Topics whose generalisation is the starting formula, not a discovered result</li>
                <li><span className="split-check">✓</span>Directions that produce the same calculation type repeated with different numbers</li>
                <li><span className="split-check">✓</span>Real-world applications where the mathematics is secondary to the context</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="consult-faq">
        <div className="consult-faq-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2 className="section-title">SACE Methods Investigation — Questions from Adelaide Students</h2>
            <div className="section-rule" />
          </div>
          <div className="consult-faq-list">
            {[
              { q: 'How much is the SACE Mathematical Methods investigation worth?', a: 'The Mathematical Investigation is worth 20% of your Stage 2 SACE Mathematical Methods school assessment mark, which contributes 70% of your final subject result. This makes the investigation worth approximately 14% of your total Methods grade — more than any single SAT.' },
              { q: 'How long should the SACE Methods investigation be?', a: 'There is no fixed length requirement, but most investigations that score Performance Standard A are 8 to 12 pages of mathematical content, including graphs, tables, and working. The key is depth rather than length — a 6-page investigation with rigorous reasoning scores higher than a 15-page investigation that is repetitive and shallow.' },
              { q: 'Can I choose my own investigation topic?', a: 'Schools typically provide a topic area and students choose a specific direction within that scope. The choice of direction significantly affects how easy it is to achieve depth — some directions run out of mathematical content quickly, while others support genuine generalisation. Choosing well is part of the task.' },
              { q: 'What is the difference between a conjecture and a proof in the investigation?', a: 'A conjecture is a general statement observed to hold in tested cases but not formally proved. A proof establishes it holds for all cases within the claimed scope. Both are valid in SACE Methods investigations — the important thing is to label which you are doing and be explicit about the distinction. Claiming a proof when you have only a conjecture costs marks.' },
              { q: 'How is the Mathematical Investigation marked?', a: 'The investigation is marked by your school against the SACE Board\'s Performance Standards (A–E). Performance Standard A requires systematic and thorough mathematical reasoning communicated clearly and concisely. The markers assess both the quality of the mathematics and the written communication — correct mathematics presented poorly will not score Performance Standard A.' },
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

      <section className="related-programs">
        <div className="related-programs-inner">
          <div className="section-header">
            <span className="eyebrow">Related Resources &amp; Programs</span>
            <h2 className="section-title">More for SACE<br />Methods Students</h2>
            <div className="section-rule" style={{ margin: '20px auto 0' }} />
          </div>
          <div className="related-grid">
            <Link href="/programs/high-school/sace-methods" className="related-card">
              <span className="related-card-eyebrow">SACE Stage 1 &amp; 2</span>
              <div className="related-card-title">SACE Mathematical Methods Tutoring</div>
              <p className="related-card-desc">One-on-one Methods coaching in Adelaide — every topic to the performance standards, investigation folio strategy included.</p>
              <span className="related-card-link">Explore the Program →</span>
            </Link>
            <Link href="/blog/sace-methods-mathematical-investigation" className="related-card">
              <span className="related-card-eyebrow">Blog Article</span>
              <div className="related-card-title">SACE Methods Investigation: How to Write for Performance Standard A</div>
              <p className="related-card-desc">A concise article version of this guide — report structure, topic choice, and the mathematical reasoning that earns top marks.</p>
              <span className="related-card-link">Read the Article →</span>
            </Link>
            <Link href="/programs/high-school" className="related-card">
              <span className="related-card-eyebrow">Years 10–12</span>
              <div className="related-card-title">High School Program</div>
              <p className="related-card-desc">Full SACE coaching across all Stage 2 subjects — Methods, Chemistry, Biology, Physics, and English in Adelaide.</p>
              <span className="related-card-link">Explore High School →</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="motto-banner">
        <div className="motto-banner-inner">
          <div className="motto-display" style={{ fontSize: 'clamp(16px,3vw,24px)' }}>Want One-on-One Help With Your Investigation?</div>
          <p className="motto-translation" style={{ marginBottom: 28 }}>Book a trial session and we will review your topic, your draft, or your working — and give you specific feedback against the SACE performance standards.</p>
          <Link href="/contact" className="btn-gold">Book a Free Trial</Link>
        </div>
      </div>
    </>
  )
}
