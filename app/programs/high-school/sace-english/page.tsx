'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/app/components/Breadcrumb'

const topics = [
  {
    key: 'Essay',
    title: 'Analytical Essay Writing',
    desc: 'The core skill in SACE English. We teach thesis construction, paragraph architecture, and the kind of close textual analysis that earns Performance Standard A — not generic commentary, but specific, arguable claims about how and why texts work.',
    points: [
      'Thesis construction — how to write a claim that is arguable, specific, and analytical',
      'Paragraph structure — TEEL and its limitations; building paragraphs that develop rather than describe',
      'Embedding quotations — grammatical integration, not block quoting',
      'Analysing technique — moving from identifying a device to explaining its effect on the reader',
      'Sustaining a formal register throughout without sacrificing clarity',
      'Performance Standard A language — what "perceptive", "sustained", and "nuanced" look like in practice',
    ],
  },
  {
    key: 'Comparative',
    title: 'Comparative Study',
    desc: 'The component most students underperform because they write two separate essays with connecting sentences. We teach genuine comparative analysis — single argument, both texts as evidence, comparison as the method not the conclusion.',
    points: [
      'Choosing a comparison point that is specific and arguable across both texts',
      'Building paragraphs that include evidence from both texts — not alternating text-by-text analysis',
      'Comparative language — "whereas", "by contrast", "both authors", "unlike" — used with precision',
      'Structuring the essay so the comparison drives every paragraph, not just the conclusion',
      'Reaching a conclusion that could only be drawn by reading both texts together',
      'Common comparative essay structures and when to use each',
    ],
  },
  {
    key: 'Creative',
    title: 'Creative Response',
    desc: 'The highest-ceiling component for students who understand what is being assessed. We teach how to write creatively in response to a studied text — adapting style, voice, and form while meeting the SACE assessment criteria.',
    points: [
      'Reading the task carefully — identifying the creative constraints and what the assessment rewards',
      'Adapting style and voice from a studied text without imitation',
      'Structural choices — form, perspective, and narrative technique as deliberate decisions',
      'Author\'s note writing — explaining creative choices in relation to the studied text',
      'Maintaining quality under timed conditions — planning the creative response before writing',
      'Common mistakes that cost marks in creative tasks',
    ],
  },
  {
    key: 'Unseen',
    title: 'Unseen Text Analysis',
    desc: 'The external exam component that tests transferable analytical skill. We build a reliable reading and analysis framework so students can generate strong analytical ideas quickly on unfamiliar texts — under time pressure, without preparation.',
    points: [
      'Timed reading strategy — read for purpose and effect before reading for detail',
      'Identifying the most analytically productive features of an unseen text quickly',
      'Constructing a thesis from cold — how to form an arguable claim about a text you have never seen',
      'Writing the unseen analysis under exam conditions — pacing, planning, writing',
      'Prose vs poetry vs multimodal texts — how the approach adjusts by text type',
      'Vocabulary for discussing effect — precision without jargon',
    ],
  },
]

export default function SaceEnglish() {
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
      { '@type': 'ListItem', position: 4, name: 'SACE English', item: 'https://titaniumtutoring.com.au/programs/high-school/sace-english' },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is the difference between SACE English and English Literary Studies?', acceptedAnswer: { '@type': 'Answer', text: 'SACE offers several English subjects at Stage 2. English focuses on a broader range of texts and communication contexts. English Literary Studies focuses specifically on literary texts and analytical writing about literature. Both count toward the ATAR. English Literary Studies is often preferred by students aiming for university humanities or law programs, while English suits students who want a broader communication focus.' } },
      { '@type': 'Question', name: 'What does Performance Standard A look like in SACE English essays?', acceptedAnswer: { '@type': 'Answer', text: 'Performance Standard A in SACE English requires analytical sophistication — a specific, arguable thesis, paragraphs that develop the argument rather than describe the text, close reading that explains effects rather than just identifying techniques, and sustained formal register. The SACE Board descriptors use words like "perceptive", "nuanced", and "cohesive". We map every student\'s current responses against these descriptors and work systematically toward them.' } },
      { '@type': 'Question', name: 'How do you help with SACE English essay feedback?', acceptedAnswer: { '@type': 'Answer', text: 'Every tutoring session that involves writing includes specific written feedback against the SACE performance standard criteria — not general comments like "good paragraph" but specific observations about what each paragraph does and does not do analytically. We mark draft essays with the same rigour a SACE Board assessor would apply.' } },
      { '@type': 'Question', name: 'How is the SACE English external exam structured?', acceptedAnswer: { '@type': 'Answer', text: 'The Stage 2 English external exam typically includes unseen text analysis tasks and an essay. The exact structure varies by subject (English vs English Literary Studies). Students must demonstrate analytical skills on texts they have not prepared, which requires a transferable framework rather than text-specific knowledge. We prepare students specifically for the timed unseen analysis component.' } },
      { '@type': 'Question', name: 'Can you help with the SACE English comparative study?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The comparative study is one of the components we focus on most specifically because it is the most commonly underperformed. Students often write two separate text analyses with connecting sentences rather than a genuine comparative essay. We teach the structural and analytical approach that produces a single argument running through both texts — which is what Performance Standard A requires.' } },
      { '@type': 'Question', name: 'Do you offer SACE English tutoring in Adelaide?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer in-person SACE English tutoring in Adelaide, South Australia, as well as fully online sessions for students anywhere in SA or Australia. Our English tutors specialise in SACE analytical writing and are familiar with the current SACE Board assessment criteria.' } },
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
            { label: 'SACE English' },
          ]} />
          <span className="eyebrow">SACE Stage 1 &amp; 2</span>
          <h1 className="section-title">SACE English Tutoring in Adelaide — Literary Studies &amp; English</h1>
          <p className="lead">A grade in SACE English starts with a thesis that actually makes an argument. We coach every component of SACE English and English Literary Studies — analytical essays, comparative study, creative response, and unseen text analysis — with specific feedback against the SACE Board performance standards.</p>
        </div>
      </div>

      <section className="curriculum">
        <div className="curriculum-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">The Study Design</span>
            <h2 className="section-title">SACE English: Stage 1 vs Stage 2</h2>
            <p className="lead" style={{ marginTop: 14 }}>Stage 1 builds the analytical foundation. Stage 2 demands sustained argumentation, comparative skill, and the ability to analyse unseen texts under exam pressure. We coach both with the same standard of feedback.</p>
            <div className="section-rule" />
          </div>
          <div className="split-grid">
            <div className="split-card navy slide-left">
              <span className="split-state">Year 11</span>
              <h3>Stage 1</h3>
              <p className="split-desc">Foundation. We develop the analytical essay skills and close reading habits that Stage 2 depends on — because a weak thesis in Year 11 becomes a pattern in Year 12.</p>
              <ul className="split-list">
                <li><span className="split-check">✓</span>Thesis construction — specific, arguable, analytical</li>
                <li><span className="split-check">✓</span>Paragraph structure that develops, not just describes</li>
                <li><span className="split-check">✓</span>Close reading — identifying and explaining textual features</li>
                <li><span className="split-check">✓</span>Formal register and written expression</li>
                <li><span className="split-check">✓</span>SAT response technique and assessment criteria</li>
                <li><span className="split-check">✓</span>Creative writing in response to texts</li>
              </ul>
              <Link href="/contact" className="btn-gold-sm">Book Stage 1 Tutoring →</Link>
            </div>
            <div className="split-card cream slide-right">
              <span className="split-state">Year 12</span>
              <h3>Stage 2</h3>
              <p className="split-desc">ATAR territory. We map every session to Performance Standard A — comparative technique, folio drafts, and external exam preparation under timed conditions.</p>
              <ul className="split-list">
                <li><span className="split-check">✓</span>Text study — sustained analytical essay technique</li>
                <li><span className="split-check">✓</span>Comparative study — genuine dual-text argument structure</li>
                <li><span className="split-check">✓</span>Creative response — task reading, planning, and execution</li>
                <li><span className="split-check">✓</span>Unseen text analysis — transferable framework for the exam</li>
                <li><span className="split-check">✓</span>Essay draft feedback against SACE Board criteria</li>
                <li><span className="split-check">✓</span>External exam preparation — timed practice and review</li>
              </ul>
              <Link href="/contact" className="btn-navy-sm">Book Stage 2 Tutoring →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="services-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">Assessment Coverage</span>
            <h2 className="section-title">What We Cover &amp; How</h2>
            <p className="lead" style={{ marginTop: 14 }}>Select a component to see exactly what we cover and how we coach it.</p>
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
              <p className="related-card-desc">SACE coaching across all subjects — English, Methods, Chemistry, Biology, and Physics together.</p>
              <span className="related-card-link">Explore High School →</span>
            </Link>
            <Link href="/programs/high-school/sace-methods" className="related-card">
              <span className="related-card-eyebrow">SACE Mathematics</span>
              <div className="related-card-title">SACE Mathematical Methods</div>
              <p className="related-card-desc">Stage 2 Methods coaching — the subject most commonly paired with English for a balanced ATAR strategy.</p>
              <span className="related-card-link">Explore SACE Methods →</span>
            </Link>
            <Link href="/programs/exam-strategy" className="related-card">
              <span className="related-card-eyebrow">Exam Technique</span>
              <div className="related-card-title">Exam Strategy Program</div>
              <p className="related-card-desc">Time management, planning under pressure, and performance technique — applied to SACE English exam conditions.</p>
              <span className="related-card-link">Explore Exam Strategy →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="consult-faq">
        <div className="consult-faq-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2 className="section-title">SACE English Tutoring — Common Questions from Adelaide Students and Parents</h2>
            <div className="section-rule" />
          </div>
          <div className="consult-faq-list">
            {[
              { q: 'What is the difference between SACE English and English Literary Studies?', a: 'SACE offers several English subjects at Stage 2. English focuses on a broader range of texts and communication contexts. English Literary Studies focuses specifically on literary texts and analytical writing about literature. Both count toward the ATAR. English Literary Studies is often preferred by students aiming for university humanities or law programs, while English suits students who want a broader communication focus.' },
              { q: 'What does Performance Standard A look like in SACE English essays?', a: 'Performance Standard A in SACE English requires analytical sophistication — a specific, arguable thesis, paragraphs that develop the argument rather than describe the text, close reading that explains effects rather than identifies techniques, and sustained formal register. We map every student\'s responses against these descriptors and work systematically toward them.' },
              { q: 'How do you help with SACE English essay feedback?', a: 'Every tutoring session that involves writing includes specific written feedback against the SACE performance standard criteria — not general comments but specific observations about what each paragraph does and does not do analytically. We mark draft essays with the same rigour a SACE Board assessor would apply.' },
              { q: 'How is the SACE English external exam structured?', a: 'The Stage 2 English external exam typically includes unseen text analysis tasks and an essay. Students must demonstrate analytical skills on texts they have not prepared, which requires a transferable framework rather than text-specific knowledge. We prepare students specifically for the timed unseen analysis component.' },
              { q: 'Can you help with the SACE English comparative study?', a: 'Yes. The comparative study is one of the components we focus on most because it is the most commonly underperformed. Students often write two separate text analyses with connecting sentences rather than a genuine comparative essay. We teach the structural and analytical approach that produces a single argument running through both texts — which is what Performance Standard A requires.' },
              { q: 'Do you offer SACE English tutoring in Adelaide?', a: 'Yes. We offer in-person SACE English tutoring in Adelaide, South Australia, as well as fully online sessions for students anywhere in SA or Australia. Our English tutors specialise in SACE analytical writing and are familiar with the current SACE Board assessment criteria.' },
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
          <div className="motto-display" style={{ fontSize: 'clamp(16px,3vw,24px)' }}>A Grade in SACE English Starts With a Thesis That Actually Makes an Argument</div>
          <p className="motto-translation" style={{ marginBottom: 28 }}>Book a free trial session and we will review a piece of your writing against the SACE performance standards — and tell you exactly what to change.</p>
          <Link href="/contact" className="btn-gold">Book a Free Trial</Link>
        </div>
      </div>
    </>
  )
}
