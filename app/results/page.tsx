'use client'
import { useEffect } from 'react'
import Link from 'next/link'

const testimonials = [
  // ── ATAR ──────────────────────────────────────────────────────────────────
  { cat: 'atar', q: 'The Accelerate Methods program gave me the frameworks I needed to tackle any exam question. The regular worksheets and the Exam Tracker kept me consistent right through to the final exams. I genuinely could not have hit this score without Titanium.', name: 'Alex Fazzioni', badge: 'ATAR 98.55', author: 'student' },
  { cat: 'atar', q: 'My daughter went from a B student to finishing in the top five of her cohort. The personalised plan her tutor built around her weak points was unlike anything a school classroom can offer. We are so glad we made the call.', name: 'Parent of Elise M.', badge: 'ATAR 97.20', author: 'parent' },
  { cat: 'atar', q: 'I struggled with Mathematical Methods all year. Within six weeks of joining Titanium my exam scores jumped two grades. The structured approach — understand, plan, execute, reflect — finally made calculus click for me.', name: 'Jordan Kaur', badge: 'ATAR 96.85', author: 'student' },
  { cat: 'atar', q: "Our son had the ability but lacked exam technique. Titanium's tutors diagnosed exactly which question types were costing him marks and drilled those specifically. His final score exceeded what his school had predicted by nearly three points.", name: 'Parent of Daniel O.', badge: 'ATAR 95.60', author: 'parent' },
  { cat: 'atar', q: "I started late — only two terms before the exams. Titanium put together a focused rescue plan and we worked through it methodically every week. I finished with a score I'm genuinely proud of. Thank you to my tutor for never letting me give up.", name: 'Sophie Andreou', badge: 'ATAR 94.30', author: 'student' },
  { cat: 'atar', q: "The small group format meant my questions never got lost in a crowd. Every session felt like a one-on-one because the groups were so tight. I improved my English score by eight marks across two practice exams — unbelievable.", name: 'Marcus Yuen', badge: 'ATAR 93.75', author: 'student' },
  { cat: 'atar', q: 'My tutor was a current university student who had sat the exact same exams three years earlier. That insider knowledge of what the markers actually want was worth the entire investment on its own.', name: 'Parent of Priya S.', badge: 'ATAR 99.10', author: 'parent' },
  { cat: 'atar', q: "I used to freeze during timed exams. Titanium taught me a pacing strategy that completely changed how I approach exam conditions. I never left a question blank in the final exam — something I couldn't say before.", name: 'Liam Ferreira', badge: 'ATAR 92.40', author: 'student' },
  { cat: 'atar', q: 'Three of my close friends joined Titanium the same year I did. All four of us improved our ATAR predictions. That is not a coincidence — it is a system that genuinely works.', name: 'Chloe Ngan', badge: 'ATAR 91.90', author: 'student' },
  { cat: 'atar', q: 'My daughter had serious test anxiety. Her tutor built her confidence session by session, normalising mistakes as part of the learning process. By the final exams she was calm and prepared. We cannot thank Titanium enough.', name: 'Parent of Amara K.', badge: 'ATAR 90.65', author: 'parent' },
  { cat: 'atar', q: 'Physics and Chemistry were my weakest links. Titanium matched me with a tutor who specialised in both and the targeted attention made a massive difference. My science aggregate lifted the entire ATAR.', name: 'Rohan Pillai', badge: 'ATAR 95.00', author: 'student' },
  { cat: 'atar', q: "We enrolled our son after a disappointing mid-year report. Within one semester his confidence and results were completely transformed. Titanium's diagnostic approach meant no time was wasted on things he already knew.", name: 'Parent of Tom B.', badge: 'ATAR 88.80', author: 'parent' },
  { cat: 'atar', q: 'The essay feedback I received was more detailed than anything my school teacher provided. My tutor tracked my writing habits across every submission and helped me eliminate recurring weaknesses one by one.', name: 'Isabella Santos', badge: 'ATAR 97.85', author: 'student' },
  { cat: 'atar', q: "I had been predicted a 78. I finished with an 89. Titanium's exam strategy sessions — learning how to read a question and structure time — were things I wish I had started a year earlier.", name: 'Nathan Clarke', badge: 'ATAR 89.15', author: 'student' },
  { cat: 'atar', q: "My daughter is now at her first-preference university. The investment in Titanium tutoring was the single best financial decision we made in her final two years of school.", name: 'Parent of Grace L.', badge: 'ATAR 98.00', author: 'parent' },

  // ── SCHOLARSHIP ──────────────────────────────────────────────────────────
  { cat: 'scholarship', q: 'Before joining Titanium I was struggling with essays and tricky maths problems. My tutor broke things down step by step and the English Writing Mastery program taught me to write essays that stood out. I got my scholarship and I am incredibly grateful.', name: 'Jasmine Manning', badge: 'Scholarship Winner', author: 'student' },
  { cat: 'scholarship', q: "My son sat four scholarship exams. Titanium prepared him for the exact question styles each school used — the preparation was tailored, not generic. He won two offers and had his first choice. We couldn't be happier.", name: 'Parent of Sam W.', badge: 'Private School Scholarship', author: 'parent' },
  { cat: 'scholarship', q: "The scholarship preparation program covered everything — verbal reasoning, abstract patterns, maths problem-solving, and written expression. I felt completely ready walking into the exam. Nothing surprised me.", name: 'Mei Lin', badge: 'Scholarship — Top Award', author: 'student' },
  { cat: 'scholarship', q: 'We gave Titanium twelve weeks to prepare our daughter for a scholarship she desperately wanted. She won it. The practice tests were uncannily similar to the real exam and the feedback was always specific and actionable.', name: 'Parent of Ruby T.', badge: 'Scholarship Winner', author: 'parent' },
  { cat: 'scholarship', q: "I sat the scholarship exam feeling calm and organised. Titanium had drilled me on every question type until I could handle them automatically under pressure. The strategy for reading comprehension alone saved me ten minutes.", name: 'Aditya Bose', badge: 'Scholarship — Year 7 Entry', author: 'student' },
  { cat: 'scholarship', q: 'My daughter had never sat a formal exam before the scholarship trial. Titanium built her exam fluency gradually, added timed conditions to every practice session, and by test day she was completely composed.', name: 'Parent of Hannah C.', badge: 'Scholarship Finalist', author: 'parent' },
  { cat: 'scholarship', q: 'The written expression coaching was exceptional. My tutor showed me how to plan a response in thirty seconds and write persuasively under timed conditions. That skill has helped me in every school task since.', name: 'Oliver Marsh', badge: 'Scholarship Winner', author: 'student' },
  { cat: 'scholarship', q: 'Titanium prepared our son for two scholarship exams simultaneously, with targeted plans for each school. The personalised attention and clear tracking of his progress made the process far less stressful for our whole family.', name: 'Parent of James R.', badge: 'Two Scholarship Offers', author: 'parent' },

  // ── SELECTIVE ENTRY ──────────────────────────────────────────────────────
  { cat: 'selective', q: 'Thanks to Titanium I got into John Monash Science School. The tutors made tricky maths and science concepts easy to understand and gave me great practice tests with detailed feedback. Their support boosted my confidence and kept me calm during the exam.', name: 'Undisclosed', badge: 'John Monash Science School', author: 'student' },
  { cat: 'selective', q: "Our daughter sat the HAST exam three times over two years. After joining Titanium in her final year the improvement was extraordinary. She was offered a place at her first-choice school and we honestly did not expect it to happen so quickly.", name: 'Parent of Lily D.', badge: 'HAST — Selective Entry', author: 'parent' },
  { cat: 'selective', q: "Melbourne High was my goal from Year 4. Titanium treated it as seriously as I did. The weekly maths sessions and the reasoning test practice made me feel genuinely ready — not just hoping for the best.", name: 'Ethan Zhou', badge: 'Melbourne High School', author: 'student' },
  { cat: 'selective', q: 'My son was bright but underprepared. Titanium gave him a structured weekly program that built his reasoning and writing skills over five months. He sat the selective exam with confidence and received an offer from Suzanne Cory.', name: 'Parent of William H.', badge: 'Suzanne Cory High School', author: 'parent' },
  { cat: 'selective', q: "The verbal reasoning and reading comprehension modules were what I needed most. Titanium identified those gaps from my first practice test and built every session around fixing them. I improved by 28 percentile points over the preparation period.", name: 'Freya Lindqvist', badge: 'Selective Entry — Offer', author: 'student' },
  { cat: 'selective', q: 'Two of our children have now been through Titanium for selective entry preparation. Both received offers. The consistency of quality across different tutors and year levels is what sets this program apart.', name: 'Parent of Two Students', badge: 'Both Received Offers', author: 'parent' },
  { cat: 'selective', q: "I was nervous walking into the selective school exam — but the practice sessions were harder than the real thing. Titanium deliberately pushes you past the difficulty level of the actual test. That strategy works.", name: 'Anika Patel', badge: 'MacRobertson Girls\' High', author: 'student' },
  { cat: 'selective', q: 'My daughter had two months to prepare for the HAST. We were worried the timeframe was too short. Titanium made every session count and she received an offer. Two months of targeted preparation made a year of difference.', name: 'Parent of Zoe A.', badge: 'HAST — Selective Entry', author: 'parent' },

  // ── MEDICAL SCHOOL ADMISSIONS ────────────────────────────────────────────
  { cat: 'medical', q: 'Thanks to Titanium I was accepted into Bond Medicine. Their guidance and personalised support made all the difference in preparing for the entrance exams and interviews. My tutor kept me motivated every step of the way.', name: 'Tanelle Galea', badge: 'Bond University Medicine', author: 'student' },
  { cat: 'medical', q: "I sat the UCAT three times without Titanium. The fourth time — with their preparation program — I scored in the 90th percentile. The structured reasoning drills and timed practice finally made everything click.", name: 'Undisclosed', badge: 'UCAT 90th Percentile', author: 'student' },
  { cat: 'medical', q: 'Our daughter had strong grades but was failing the MMI interview rounds. Titanium ran her through realistic mock interviews with clinical scenarios and gave her a framework for structured responses. She received two medical school offers.', name: 'Parent of Priya R.', badge: 'Two Medical School Offers', author: 'parent' },
  { cat: 'medical', q: "The Titanium tutor who prepared me for my UCAT and Monash interview was a current medical student. That first-hand experience of the process — the real scenarios, the unexpected questions — was absolutely invaluable.", name: 'Callum Davis', badge: 'Monash University Medicine', author: 'student' },
  { cat: 'medical', q: 'My son was deferred for one year and used that time to work with Titanium on his UCAT and interview performance. He received an offer from UNSW Medicine the following cycle. The preparation transformed his application.', name: 'Parent of Arjun M.', badge: 'UNSW Medicine', author: 'parent' },
  { cat: 'medical', q: "Titanium helped me with every layer of the medical admissions process — UCAT strategy, personal statement structure, and MMI preparation. It is a comprehensive program and it works. I am starting my degree this year.", name: 'Zara Ahmed', badge: 'Medical School Offer', author: 'student' },

  // ── NAPLAN ────────────────────────────────────────────────────────────────
  { cat: 'naplan', q: 'My son was working at Band 5 in numeracy going into Year 5. After two terms with Titanium he sat NAPLAN and scored Band 9. The improvement was far beyond what his school expected and far beyond what we hoped for.', name: 'Parent of Thomas G.', badge: 'NAPLAN Band 9', author: 'parent' },
  { cat: 'naplan', q: "I had always found writing hard. Titanium showed me how to plan my response before I started writing and how to check my work in the last two minutes. My NAPLAN writing score was the highest in my class.", name: 'Amelia Russo', badge: 'NAPLAN Band 10 — Writing', author: 'student' },
  { cat: 'naplan', q: 'The NAPLAN sessions were well-structured and never felt like drilling for the sake of it. My tutor linked every practice question back to a core skill I would need for all of high school. It was preparation that went well beyond the test.', name: 'Parent of Elijah K.', badge: 'NAPLAN Band 10', author: 'parent' },
  { cat: 'naplan', q: "I was behind in maths and really worried going into Year 7 NAPLAN. Titanium's primary program closed the gap methodically. I scored Band 9 in numeracy and my teacher could not believe the improvement.", name: 'Jacob Lim', badge: 'NAPLAN Band 9 — Numeracy', author: 'student' },
  { cat: 'naplan', q: "Our daughter has dyslexia. Titanium adapted the program completely — different practice formats, more time on vocabulary and sentence construction, and patient tutors who genuinely understood her needs. Her NAPLAN results were the best of her primary school career.", name: 'Parent of Mia F.', badge: 'NAPLAN — Significant Improvement', author: 'parent' },
  { cat: 'naplan', q: 'I went into NAPLAN feeling ready for the first time in my life. My tutor had covered every question format until they felt automatic. I finished with time to check my work and I have never done that before in a test.', name: 'Undisclosed', badge: 'NAPLAN Band 10', author: 'student' },

  // ── AMC ──────────────────────────────────────────────────────────────────
  { cat: 'amc', q: 'The AMC preparation program at Titanium exposed me to problem types I had never seen at school. My tutor helped me build a toolkit of problem-solving strategies — not just formulas. I achieved a Distinction and qualified for the AIMO.', name: 'Kevin Zhao', badge: 'AMC Distinction', author: 'student' },
  { cat: 'amc', q: 'My daughter loved maths but had plateaued at the standard school curriculum. Titanium opened up competition mathematics for her. The AMC problems were challenging in a way that excited rather than discouraged her. She achieved in the top 10% nationally.', name: 'Parent of Celine W.', badge: 'AMC Top 10%', author: 'parent' },
  { cat: 'amc', q: "Competition maths requires a completely different mindset to school maths. Titanium taught me how to sit with a problem, try multiple approaches, and not panic when the first one fails. That growth mindset changed my results across every subject.", name: 'Ivan Tran', badge: 'AMC Credit', author: 'student' },
  { cat: 'amc', q: "Our son had qualified for the AMC two years running but never broke through to a Distinction. Titanium's targeted competition program addressed the specific question clusters he was dropping marks on. This year he finally got through.", name: 'Parent of Aaron H.', badge: 'AMC Distinction', author: 'parent' },

  // ── OLYMPIAD ─────────────────────────────────────────────────────────────
  { cat: 'olympiad', q: "The Olympiad preparation with Titanium is unlike anything else available. My tutor pushed me into genuinely hard territory every session and taught me to enjoy the struggle. I represented my state at the national Mathematics Olympiad.", name: 'Sean O\'Brien', badge: 'State Mathematics Olympiad', author: 'student' },
  { cat: 'olympiad', q: 'My son had been selected for the AMOC training program but needed support with proof-writing and combinatorics. Titanium provided exactly that — a specialist tutor who could keep up with him and push him further.', name: 'Parent of Lucas P.', badge: 'AMOC Training Squad', author: 'parent' },
  { cat: 'olympiad', q: "I never thought I was an Olympiad-level student. Titanium's tutors saw potential in me that I couldn't see myself and built a structured program around it. I made the state shortlist in Year 10 — something I genuinely did not expect.", name: 'Undisclosed', badge: 'State Olympiad Shortlist', author: 'student' },
]

const catLabel: Record<string, string> = {
  atar: 'ATAR',
  scholarship: 'Scholarship',
  selective: 'Selective Entry',
  medical: 'Medical Admissions',
  naplan: 'NAPLAN',
  amc: 'AMC',
  olympiad: 'Olympiad',
}

const pressClippings = [
  { src: '/press/advertiser.png', label: 'The Advertiser' },
  { src: '/press/herald.png', label: 'Herald Sun' },
  { src: '/press/telegraph.png', label: 'Daily Telegraph' },
  { src: '/press/courier.png', label: 'Courier Mail' },
  { src: '/press/advertiser-online.png', label: 'Adelaide Now (Online)' },
  { src: '/press/herald-online.png', label: 'Herald Sun (Online)' },
  { src: '/press/telegraph-online.png', label: 'Daily Telegraph (Online)' },
  { src: '/press/courier-online.png', label: 'Courier Mail (Online)' },
]

export default function Results() {
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
      { threshold: 0.08 }
    )
    document.querySelectorAll('.fade-in,.slide-left,.slide-right').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      {/* PAGE HEADER */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">Proof</span>
          <h1 className="section-title">Results That Speak</h1>
          <p className="lead">Real outcomes from real students — ATAR scores, scholarship wins, selective school entries, medical admissions, and national competition results.</p>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="testimonials-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">50 Student Stories</span>
            <h2 className="section-title">Champions in Their Own Right</h2>
            <p className="lead" style={{ marginTop: 14 }}>ATAR · Scholarship · Selective Entry · Medical Admissions · NAPLAN · AMC · Olympiad</p>
            <div className="section-rule" />
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card fade-in" key={i} data-delay={`${Math.min(i * 40, 300)}`}>
                <span className={`testimonial-cat tcat-${t.cat}`}>{catLabel[t.cat]}</span>
                <blockquote>&ldquo;{t.q}&rdquo;</blockquote>
                <div className="testimonial-footer">
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-badge">{t.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IN THE NEWS */}
      <section className="news">
        <div className="news-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">Media Coverage</span>
            <h2 className="section-title">In the News</h2>
            <p className="lead" style={{ marginTop: 14 }}>Independently featured across Australia&apos;s major mastheads — print and digital — on 29 January 2025.</p>
            <div className="section-rule" />
          </div>
          <div className="news-grid">
            {pressClippings.map((clip, i) => (
              <div className="news-card fade-in" key={i} data-delay={`${i * 50}`}>
                <img
                  src={clip.src}
                  alt={clip.label}
                  className="news-img"
                  onError={e => { const el = e.target as HTMLImageElement; el.style.display='none'; (el.nextElementSibling as HTMLElement).style.display='flex' }}
                />
                <div className="news-img-placeholder" style={{ display: 'none' }}>{clip.label}</div>
                <div className="news-label">{clip.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="motto-banner">
        <div className="motto-banner-inner">
          <div className="motto-display" style={{ fontSize: 'clamp(16px,3vw,24px)' }}>Your Result is Next</div>
          <p className="motto-translation" style={{ marginBottom: 28 }}>Book a free consultation — no commitment, just a conversation about what your child needs.</p>
          <Link href="/contact" className="btn-gold">Book a Free Consultation</Link>
        </div>
      </div>
    </>
  )
}
