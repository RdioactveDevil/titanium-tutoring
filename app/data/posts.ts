export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  cat: string
  readMins: number
  sections: Array<{
    heading: string
    body: string
    list?: string[]
  }>
}

export const posts: Post[] = [
  {
    slug: 'vce-methods-mistakes',
    title: '5 VCE Mathematical Methods Mistakes That Cost Students Marks',
    date: '2026-05-07',
    excerpt: 'Most VCE Methods students lose marks in the same five places — not because the maths is too hard, but because of fixable technique errors. Here is how to close them before your next SAC.',
    cat: 'VCE',
    readMins: 6,
    sections: [
      {
        heading: '1. Setting Up Definite Integrals With the Wrong Bounds',
        body: 'Area-under-a-curve questions are a gift — the method is always the same. Yet most students lose marks not on the integration itself, but on the setup. The two most common errors: using x-intercepts when the question specifies a different interval, and forgetting to check whether part of the curve dips below the x-axis (which requires splitting the integral into two separate calculations). Before you integrate anything, sketch the graph, mark the bounds, and check the sign of the function on the interval. Thirty seconds of setup saves two marks.',
      },
      {
        heading: '2. Confusing the Chain Rule With the Product Rule',
        body: "Composite functions and products look similar on paper but require different techniques. f(g(x)) needs the chain rule: differentiate the outer function, keep the inner function, multiply by the derivative of the inner function. f(x)·g(x) needs the product rule: first times derivative of second, plus second times derivative of first. The fix is simple: before you differentiate anything, identify which case you are looking at. Write 'chain' or 'product' next to the question before picking up your pen. Students who do this almost never mix them up under exam pressure.",
      },
      {
        heading: '3. CAS Dependency on Exam 1',
        body: "Exam 1 is the no-CAS paper. Every year, students who have relied on their calculator for arithmetic and routine algebra run out of time on Exam 1 because they can't move fluently without it. The solution is to ban yourself from CAS for at least two sessions per week from the start of Unit 3. You should be able to differentiate standard functions, evaluate simple definite integrals, and manipulate logarithmic and exponential expressions entirely by hand — not fast, but reliably.",
      },
      {
        heading: '4. Misreading Probability Questions',
        body: "The probability section of Methods consistently produces the most student complaints of 'I knew this but wrote the wrong thing.' The two traps: (1) confusing P(A|B) with P(A∩B) — conditional probability is not the same as joint probability; (2) applying the binomial distribution when the trials are not independent. Before writing a probability answer, state the distribution you are using and check that all conditions are satisfied. Examiners reward students who justify their model — not just those who get the number right.",
      },
      {
        heading: '5. Not Reading the "Hence" Instruction',
        body: "When a question says 'hence find...' it is telling you exactly which tool to use — the result from the previous part. Students who ignore this and use a different method often get no marks even if their answer is numerically correct, because the marks are awarded for method, not just the final value. 'Hence' is not a suggestion. It is a constraint. Read every question stem twice before starting your working.",
      },
    ],
  },
  {
    slug: 'sace-methods-stage-2',
    title: 'SACE Mathematical Methods Stage 2: What to Expect and How to Prepare',
    date: '2026-05-05',
    excerpt: 'Stage 2 Methods is the subject that contributes most to your ATAR in South Australia. Here is exactly what the assessment looks like, what the Performance Standards require, and how to prepare for each component.',
    cat: 'SACE',
    readMins: 7,
    sections: [
      {
        heading: 'How Stage 2 Methods Is Assessed',
        body: 'Stage 2 Mathematical Methods has three assessment components: School Assessment (70%) and External Assessment (30%). The School Assessment is split into two parts — a Skills and Applications Tasks component (50%) and a Mathematical Investigation folio task (20%). The External Assessment is a single 3-hour written exam. Understanding this structure matters because your preparation strategy should be different for each component.',
      },
      {
        heading: 'The Skills and Applications Tasks (SATs)',
        body: "SATs are your school's internal assessments — think of them as controlled tests. Each SAT is marked against SACE Board Performance Standards, with grades from A (highest) to E. The standard you need depends on your ATAR target, but most students aiming for an ATAR above 85 need consistent A grades in their SATs. Preparing for SATs means understanding the Performance Standard A descriptors, not just practising calculations. Performance Standard A requires you to demonstrate thorough mathematical reasoning, not just correct answers.",
        list: [
          "Learn the Performance Standard A language — 'systematic', 'thorough', 'concise' are the words examiners use",
          'Show all working — a correct answer with no working can score below an answer that shows clear reasoning',
          'Use correct mathematical notation throughout',
          'State your conclusions explicitly — do not assume the marker infers them',
        ],
      },
      {
        heading: 'The Mathematical Investigation',
        body: "The folio investigation is worth 20% of your final grade and is the most misunderstood component. You are given a topic and must produce an independent mathematical investigation with a formal report. Most students underestimate how much the report structure matters. The investigation is marked on both the quality of the mathematics and the quality of your written communication. A technically correct investigation presented poorly will not score Performance Standard A.",
        list: [
          'Introduce your investigation with a clear research question',
          'Justify every mathematical choice you make — explain why, not just what',
          'Include a reflective conclusion that discusses limitations of your approach',
          'Use graphs and diagrams to support your analysis, not replace it',
        ],
      },
      {
        heading: 'The External Exam',
        body: 'The 3-hour external exam covers the full Stage 2 course. Unlike the VCE Exam 1, SACE Methods allows a graphics calculator throughout. This means the exam tests deeper understanding — if calculator technique were enough, everyone would score A. Questions in the external exam regularly require students to interpret results, construct arguments, and identify errors in given working. Practise past SACE exam papers under timed conditions from at least 8 weeks before your exam date.',
      },
      {
        heading: 'The Topics That Trip Students Up Most',
        body: 'Based on our experience with SACE students, three topic areas produce the most lost marks:',
        list: [
          'Integration: specifically setting up area calculations when curves cross the x-axis',
          'Statistical inference: constructing confidence intervals and interpreting margin of error',
          'Differential equations: students who understand the technique often lose marks on the initial conditions',
        ],
      },
    ],
  },
  {
    slug: 'ucat-subtest-guide',
    title: 'UCAT Preparation: A Practical Guide to All Five Subtests',
    date: '2026-05-03',
    excerpt: 'Each UCAT subtest requires a completely different preparation strategy. Here is what you need to know about each one — what it tests, the time pressure, and the techniques that actually work.',
    cat: 'Medical',
    readMins: 8,
    sections: [
      {
        heading: 'Verbal Reasoning — 44 Questions, 21 Minutes',
        body: "Verbal Reasoning gives you approximately 28 seconds per question. The questions test your ability to assess whether a statement is true, false, or cannot be determined based solely on a given passage. The critical word is 'solely' — you must answer only from the passage, not from your own knowledge. The most common mistake is answering based on real-world knowledge rather than what the text actually says. Develop a scanning technique rather than reading every passage in full: read the question first, locate the relevant section of the passage, then evaluate the statement.",
      },
      {
        heading: 'Decision Making — 29 Questions, 31 Minutes',
        body: 'Decision Making is the most diverse subtest — it covers logical syllogisms, Venn diagrams, probabilistic reasoning, interpreting statistical information, and selecting the strongest argument. The extended time per question (about 64 seconds) tempts students to over-think. The key is recognising which question type you are facing in the first 5 seconds, then applying the appropriate framework.',
        list: [
          'Syllogisms: draw a Venn diagram, never rely on intuition',
          'Statistical reasoning: look for sample size, confounding variables, and causal language',
          'Strongest argument: it must be directly relevant, significant, and not based on personal values',
          'Yes/No questions: eliminate extreme answers first',
        ],
      },
      {
        heading: 'Quantitative Reasoning — 36 Questions, 25 Minutes',
        body: "QR gives you about 40 seconds per question. The maths is not advanced — it is Year 10 standard at most. The challenge is speed and accuracy under time pressure with a basic on-screen calculator. Most marks are lost to slow arithmetic, not conceptual confusion. Train yourself to estimate before calculating: if the answer needs to be 'roughly 400', you can eliminate three wrong answers immediately without completing the full calculation.",
      },
      {
        heading: 'Abstract Reasoning — 55 Questions, 13 Minutes',
        body: 'Abstract Reasoning is the most time-constrained subtest at roughly 14 seconds per question. The good news: it is also the most trainable. Abstract reasoning sets follow predictable patterns. Once you have drilled the six core pattern families — number, position, size, colour, shape, and rotation — you will recognise most sets within the first 10 seconds. Students who try to identify patterns by general inspection without a systematic framework consistently underperform students who have drilled specific pattern types.',
        list: [
          'Number: count elements, sides, intersections',
          'Position: track movement across frames',
          'Size: large to small, or a fixed sequence',
          'Colour: fill patterns, alternating shading',
          'Shape: specific shape types being added or removed',
          'Rotation: clockwise or anticlockwise movement per frame',
        ],
      },
      {
        heading: 'Situational Judgement — 69 Questions, 26 Minutes',
        body: "The SJT assesses professional values and medical ethics — but it is not a personality test. There is a right answer, and it is determined by a framework derived from GMC guidance on good medical practice. The four core principles are autonomy (respecting patient decisions), beneficence (acting in the patient's best interest), non-maleficence (avoiding harm), and justice (fair treatment). Most SJT scenarios test one or two of these principles in tension with each other. Understanding the hierarchy — patient safety first, then patient autonomy, then team and institutional concerns — resolves most scenarios without guessing.",
      },
      {
        heading: 'When to Start and How Long to Prepare',
        body: 'UCAT ANZ testing runs from July to August. We recommend starting preparation in March or April — giving you 4 to 6 months. In that time, a structured approach covers: diagnostic testing in all five subtests, subtest-specific strategy sessions, timed practice sets, and at least two full mock exams in the final three weeks. Students who start in June typically have time to address one or two weak subtests but not all five.',
      },
    ],
  },
  {
    slug: 'hast-exam-guide',
    title: 'HAST Exam Guide: How to Prepare for Selective School Entry in South Australia',
    date: '2026-05-01',
    excerpt: 'The HAST exam is the gateway to South Australia\'s most competitive selective government high schools. Here is what it tests, how it is scored, and the preparation strategy that gives students the best chance of entry.',
    cat: 'Selective Entry',
    readMins: 6,
    sections: [
      {
        heading: 'What Is the HAST Exam?',
        body: "HAST stands for the Humanities and Social Sciences, Aptitude, Science and Technology Test. It is an aptitude test used for Year 10 selective school entry in South Australia — including Glenunga International High School, Adelaide High School, and Botanic High School. Unlike school tests, the HAST does not assess curriculum knowledge directly. It assesses reasoning ability: how well you think, not what you already know. This distinction matters for preparation — memorising facts is far less useful than drilling specific reasoning skills.",
      },
      {
        heading: 'The Four Sections',
        body: 'The HAST covers four assessed areas:',
        list: [
          'Abstract Reasoning — pattern recognition using non-verbal sequences and shapes',
          'Verbal Reasoning — analogies, odd-one-out, vocabulary in context, and comprehension',
          'Quantitative Reasoning — number series, data interpretation, word problems, and spatial reasoning',
          'Written Expression — a timed persuasive or narrative writing task',
        ],
      },
      {
        heading: 'How Abstract Reasoning Is Tested',
        body: "Abstract reasoning is typically the section students find most unfamiliar — there is nothing like it in regular school assessments. Sets of shapes follow a rule, and you must identify the pattern and apply it to a new case. The key insight: abstract reasoning follows a finite number of pattern types. Students who have been drilled on pattern families (number, position, size, colour, shape, rotation) consistently outperform students who try to 'work out' each pattern from scratch. Drilled pattern recognition is faster and more reliable than general intelligence.",
      },
      {
        heading: 'The Written Expression Section',
        body: 'The written expression task is timed — typically 25 to 30 minutes for a persuasive or narrative response. Most students underperform this section not because they cannot write, but because they do not plan under time pressure. A strong response starts with 3 to 5 minutes of planning: thesis, three supporting points, and a conclusion structure. Students who begin writing immediately without planning typically produce unstructured responses that score lower, even when individual sentences are well-written.',
      },
      {
        heading: 'When to Start Preparing',
        body: 'The HAST exam is typically held in Term 3 of Year 9, with applications opening in Term 2. We recommend starting preparation at the beginning of Year 9 at the latest — and ideally in the second half of Year 8. Abstract reasoning in particular benefits from extended practice: pattern recognition speed improves gradually over weeks and months, not in a few intensive sessions. Students who start four to six months before the exam consistently outperform students who start six to eight weeks before.',
      },
      {
        heading: 'A Common Misconception About Aptitude Tests',
        body: "Many parents and students believe aptitude tests cannot be prepared for — that they measure innate ability. This is incorrect. While raw general intelligence cannot be significantly changed in the short term, test performance absolutely can be. Familiarity with question formats, knowledge of pattern types, time management under pressure, and written expression technique are all trainable. The difference between a prepared and unprepared student on the HAST is substantial and consistent.",
      },
    ],
  },
  {
    slug: 'naplan-year-9-preparation',
    title: 'NAPLAN Year 9: What Schools Don\'t Tell You About Preparation',
    date: '2026-04-28',
    excerpt: 'NAPLAN Year 9 is harder and more consequential than most students expect. The score follows students into senior school and can affect scholarship and selective entry decisions. Here is how to prepare properly.',
    cat: 'NAPLAN',
    readMins: 5,
    sections: [
      {
        heading: 'Why Year 9 NAPLAN Matters More Than Year 7',
        body: "Year 9 NAPLAN is the final NAPLAN sitting, and the results carry more weight than students often realise. Many independent and selective schools use Year 9 NAPLAN scores as part of scholarship assessments. Some selective school applications reference NAPLAN performance alongside aptitude test results. And NAPLAN results at Year 9 provide an honest baseline of academic standing at the point students are choosing senior school subjects — a low Year 9 Numeracy score is a meaningful early signal of future difficulty in VCE or SACE Mathematics.",
      },
      {
        heading: 'What Has Changed in Recent NAPLAN',
        body: 'NAPLAN moved to an adaptive online format in 2023. Questions adjust in difficulty based on how students answer — meaning a strong start leads to harder questions, and a weak start leads to easier ones. The final score reflects both accuracy and the difficulty level reached. This change has implications for preparation: students need to perform well early in each test, because a stumble in the first few questions can cascade. Calm, accurate early answers matter more than speed.',
      },
      {
        heading: 'The Numeracy Section: What Actually Appears',
        body: "Year 9 NAPLAN Numeracy covers a wider range of mathematical content than most students expect. Areas that regularly appear and that students underestimate:",
        list: [
          'Proportional reasoning — rates, ratios, and percentage calculations',
          'Algebraic thinking — solving equations and interpreting expressions',
          'Geometric reasoning — angle relationships and area/volume problems',
          'Statistical interpretation — reading and comparing data displays',
          'Financial mathematics — interest, tax, and budgeting problems',
        ],
      },
      {
        heading: 'The Writing Section: The Prompt Is a Constraint',
        body: "The NAPLAN Writing task requires a persuasive or narrative response to a given prompt. The most common preparation mistake is practising generic 'good writing' rather than writing to the NAPLAN marking criteria. Examiners assess: text structure, ideas, persuasive or narrative devices, vocabulary, paragraphing, and sentence structure. Each criterion is weighted. Students who understand the weighting — and write specifically to it — consistently score higher than students who write naturally but without awareness of what is being assessed.",
      },
      {
        heading: 'How to Prepare Effectively in 8 Weeks',
        body: 'Eight weeks is enough time for significant improvement if preparation is structured rather than generalised.',
        list: [
          'Week 1–2: diagnostic tests in Numeracy and Literacy to identify weak areas',
          'Week 3–5: targeted drilling on the two or three weakest question types only',
          'Week 6–7: full-length timed practice tests under exam conditions',
          'Week 8: review errors from practice tests, light revision, test-day logistics',
        ],
      },
    ],
  },
]

export function getPost(slug: string): Post | undefined {
  return posts.find(p => p.slug === slug)
}
