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
  relatedPrograms: Array<{
    label: string
    href: string
    eyebrow: string
    desc: string
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
    relatedPrograms: [
      { eyebrow: 'Victoria · Units 1–4', label: 'VCE Mathematical Methods', href: '/programs/high-school/vce-methods', desc: 'Specialist VCE Methods tutoring — every topic to the VCAA study design, SAC strategy included.' },
      { eyebrow: 'Years 10–12', label: 'High School Program', href: '/programs/high-school', desc: 'VCE and SACE coaching across all subjects from first SAC to final exam.' },
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
    relatedPrograms: [
      { eyebrow: 'South Australia · Stage 1 & 2', label: 'SACE Mathematical Methods', href: '/programs/high-school/sace-methods', desc: 'Specialist SACE Methods tutoring — all topics to SACE Board performance standards, folio task strategy included.' },
      { eyebrow: 'Years 10–12', label: 'High School Program', href: '/programs/high-school', desc: 'SACE and VCE coaching across all subjects from first SAT to final exam.' },
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
    relatedPrograms: [
      { eyebrow: 'All Five Subtests', label: 'UCAT Preparation', href: '/programs/medical-school-admissions/ucat-preparation', desc: 'One-on-one UCAT coaching in Adelaide and Melbourne — diagnostic-first, timed from day one.' },
      { eyebrow: 'UCAT · Interviews · Personal Statements', label: 'Medical School Admissions', href: '/programs/medical-school-admissions', desc: 'The full medical school admissions program: UCAT, MMI interview prep, and personal statement guidance.' },
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
    relatedPrograms: [
      { eyebrow: 'Selective School Entry', label: 'HAST Exam Coaching', href: '/programs/middle-school/hast-exam', desc: 'Section-by-section HAST coaching in Adelaide — abstract reasoning, verbal, quantitative, and written expression.' },
      { eyebrow: 'Years 7–9', label: 'Middle School Program', href: '/programs/middle-school', desc: 'Full middle school program covering Maths, English, NAPLAN, selective entry, and scholarships.' },
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
    relatedPrograms: [
      { eyebrow: 'Years 3, 5, 7 & 9', label: 'NAPLAN Preparation', href: '/programs/naplan', desc: 'Structured NAPLAN preparation for Numeracy and Literacy across all year levels.' },
      { eyebrow: 'Years 7–9', label: 'Middle School Program', href: '/programs/middle-school', desc: 'Full middle school program covering Maths, English, NAPLAN, and selective entry preparation.' },
    ],
  },
  {
    slug: 'naplan-writing-marking-criteria',
    title: 'NAPLAN Writing: How the Marking Criteria Actually Works',
    date: '2026-05-09',
    excerpt: 'Most students prepare for NAPLAN Writing by practising generic "good writing." That is not what is being assessed. Understanding the marking criteria changes your preparation entirely — and produces measurably better scores.',
    cat: 'NAPLAN',
    readMins: 6,
    sections: [
      {
        heading: 'What NAPLAN Writing Actually Marks',
        body: 'NAPLAN Writing is not marked holistically. There are ten discrete criteria, each scored independently. The total score is the sum of these criteria — which means you can target specific criteria for improvement rather than trying to "write better" in some general sense. The ten criteria are: Audience, Text Structure, Ideas, Character and Setting (narrative only), Vocabulary, Cohesion, Paragraphing, Sentence Structure, Punctuation, and Spelling. Understanding which criteria carry the most marks — and which are easiest to improve quickly — is the foundation of effective NAPLAN Writing preparation.',
      },
      {
        heading: 'The High-Value Criteria Most Students Neglect',
        body: 'Audience, Ideas, and Vocabulary are each worth up to 6 marks (out of a possible 47 for narrative, 45 for persuasive). These three criteria alone account for roughly 40% of the total score. Yet most students spend their preparation time on Spelling and Punctuation — which are worth a maximum of 6 marks combined. Spelling and Punctuation are important, but they are relatively easy to mark at a ceiling once a student writes to a competent standard. The marks that separate a Band 7 from a Band 9 are almost always in Audience, Ideas, and Vocabulary.',
      },
      {
        heading: 'Audience: The Criterion Students Misunderstand Most',
        body: "The Audience criterion assesses whether the writing is deliberately crafted for a reader — not just written at a reader. A score of 5 or 6 requires the student to sustain a consistent register, use stylistic choices that create specific effects, and show awareness of how the reader will experience the text. In practice, this means: vary sentence length intentionally (short sentences for impact, longer ones to build tension), use second-person address in persuasive writing where appropriate, and open with something other than a restatement of the prompt. Students who score 3 or 4 in Audience write competently. Students who score 6 write with a clear sense of how their words will land.",
      },
      {
        heading: 'Text Structure: The Easiest Criterion to Max Out',
        body: 'Text Structure is worth up to 4 marks and is one of the most reliably improvable criteria in preparation. A score of 4 requires: an orientation that establishes the context, a complication or argument that develops the ideas, and a resolution or conclusion that brings the piece to a satisfying close. For narrative, the structure needs to feel purposeful rather than mechanical — events should connect causally, not just sequentially. The simplest fix: plan your structure before you write. Students who spend 3 minutes planning and 27 minutes writing consistently out-structure students who spend all 30 minutes writing.',
      },
      {
        heading: 'Vocabulary: Specific, Not Impressive',
        body: "The Vocabulary criterion rewards precise, purposeful word choice — not uncommon or sophisticated words for their own sake. A student who writes 'the old man shuffled down the cracked footpath' scores higher on Vocabulary than one who writes 'the elderly gentleman perambulated along the deteriorated thoroughfare.' Specific, concrete words create images. Abstract or unnecessarily formal words slow the reader down. In preparation, practise replacing generic verbs (walked, said, looked) with specific ones (shuffled, muttered, squinted) — and practise doing it quickly, under time pressure.",
      },
      {
        heading: 'Persuasive vs Narrative: Which Is Better?',
        body: "NAPLAN presents either a persuasive prompt or a narrative prompt depending on the year and sitting. Students often ask which genre they should be stronger in. The honest answer: you should be equally prepared for both, but most students find persuasive slightly more predictable because the structure is fixed. A five-paragraph persuasive essay with a clear thesis, three evidenced arguments, concessions where relevant, and a conclusion that returns to the opening hook covers every structural criterion. Narrative is higher-ceiling — a genuinely well-crafted story can max out Audience and Ideas more easily — but also higher-risk if the student loses control of the plot under time pressure.",
        list: [
          'Persuasive: plan thesis and three arguments before writing — 3 minutes maximum',
          'Narrative: plan complication and resolution before writing — do not improvise the ending',
          'Both: open with something other than a question or a definition',
          'Both: vary your sentence lengths deliberately in the final paragraph',
        ],
      },
      {
        heading: 'How Long Does Improvement Take?',
        body: "Writing improvement is slower than Numeracy improvement because it requires internalising new habits — not just learning new techniques. A student who prepares seriously for 8 weeks typically improves 1 to 2 bands. The students who improve most are those who write a practice response every week (not just read about writing), receive specific feedback against the marking criteria (not general comments), and implement one new technique per session rather than trying to change everything at once.",
      },
    ],
    relatedPrograms: [
      { eyebrow: 'Years 3, 5, 7 & 9', label: 'NAPLAN Preparation', href: '/programs/naplan', desc: 'Structured NAPLAN Numeracy and Literacy preparation — including Writing technique coaching.' },
      { eyebrow: 'Years 1–6', label: 'Primary School Program', href: '/programs/primary-school', desc: 'Core literacy and numeracy acceleration for primary school students.' },
    ],
  },
  {
    slug: 'acer-scholarship-exam-guide',
    title: 'ACER Scholarship Exam: What It Tests and How to Prepare',
    date: '2026-05-09',
    excerpt: 'The ACER Scholarship Test is used by many of Australia\'s leading private schools to award academic scholarships. It is different from school tests and different from NAPLAN — and it rewards a specific kind of preparation.',
    cat: 'Scholarship',
    readMins: 7,
    sections: [
      {
        heading: 'What Is the ACER Scholarship Test?',
        body: "The ACER (Australian Council for Educational Research) Scholarship Test is a standardised academic ability test used by many Australian private schools — including some of the most competitive — to award academic scholarships. It is not a curriculum test. It does not assess what students have been taught at school. It assesses reasoning ability: how well a student reads, writes, thinks mathematically, and solves unfamiliar problems. This distinction matters enormously for preparation. Students who prepare by reviewing school content often underperform. Students who prepare specifically for the test format — question types, time constraints, and the reasoning demands — consistently outperform their school results.",
      },
      {
        heading: 'The Four Test Components',
        body: 'The ACER Scholarship Test has four components. Not all schools use all four, and some use different combinations depending on the year level applying. It is worth confirming with the specific school which components they administer.',
        list: [
          'Written Expression — a timed writing task (persuasive or narrative) marked against a rubric similar to NAPLAN Writing criteria',
          'Mathematics — reasoning and problem-solving questions, not routine calculations; calculator use varies by school',
          'Reading — comprehension and inference questions on complex unseen passages',
          'Humanities — social science, history, and general reasoning questions (not all schools include this)',
        ],
      },
      {
        heading: 'How the Mathematics Section Works',
        body: "ACER Maths is not a school maths test. Questions are designed to assess mathematical reasoning — the ability to identify relationships, use logical inference, and solve multi-step problems — not to check whether a student has memorised a specific procedure. Many questions can be solved multiple ways, and the fastest method is not always the most obvious one. Students who have been drilled exclusively on procedures (expand, factorise, calculate) often find ACER Maths harder than expected. The preparation focus should be on problem-solving flexibility: reading the question carefully, identifying what is being asked, and working backwards from possible answers when forward methods are slow.",
      },
      {
        heading: 'How the Reading Section Works',
        body: "The Reading section uses complex, often literary or scientific passages at a level above the student's year group. Questions test inference, vocabulary in context, author purpose, and the ability to distinguish what is stated from what is implied. The most common mistake: spending too long re-reading passages. Effective ACER Reading technique involves reading the questions first (to know what to look for), then reading the passage with those questions in mind, then locating and verifying answers. Students who read passages thoroughly before looking at questions consistently run out of time.",
      },
      {
        heading: 'Written Expression: What Scores Well',
        body: "The Written Expression component is typically 25 to 30 minutes for one response. The marking criteria reward the same things as NAPLAN Writing at its higher bands: a strong opening that does not restate the prompt, deliberate vocabulary choices, structural control, and a sense that the writing was crafted for a reader rather than written at speed. The most useful preparation is timed writing practice with feedback against the marking criteria — not reading about good writing, but actually writing and being told specifically what to change.",
      },
      {
        heading: 'When Schools Run the ACER Test and How to Apply',
        body: "Most schools administer the ACER Scholarship Test in the first half of the year preceding entry — so a student applying to start Year 7 in 2027 would typically sit the test in early to mid 2026. Application deadlines vary significantly by school: some close as early as March, others as late as June. We recommend identifying your target schools' deadlines in January of the application year and registering immediately — scholarship places are limited and some schools interview shortlisted students after the written test.",
        list: [
          'Research application deadlines at each target school in January',
          'Register before the deadline — do not wait for preparation to feel complete',
          'Confirm which of the four components your school uses',
          'Check whether a calculator is permitted in the Mathematics section',
          'Ask whether there is an interview component after the written test',
        ],
      },
      {
        heading: 'How Much Preparation Is Enough?',
        body: "Students who begin preparation 3 to 6 months before the test date consistently outperform those who prepare in the final 4 to 6 weeks. The reasoning components — particularly Mathematics problem-solving and Reading inference — improve gradually with repeated exposure to test-format questions and targeted feedback. They do not respond well to last-minute cramming. Written Expression is similar: the habits that produce strong responses take weeks to develop. A realistic preparation schedule for a motivated student looks like one or two structured sessions per week across 3 to 4 months, with a focus on the weakest component and full mock tests in the final 4 weeks.",
      },
    ],
    relatedPrograms: [
      { eyebrow: 'Selective Entry & Scholarships', label: 'Exam Strategy Program', href: '/programs/exam-strategy', desc: 'High-stakes exam technique — time management, question decoding, and performance under pressure for scholarship exams.' },
      { eyebrow: 'Years 7–9', label: 'Middle School Program', href: '/programs/middle-school', desc: 'Full middle school program including scholarship coaching for private school entry.' },
    ],
  },
]

export function getPost(slug: string): Post | undefined {
  return posts.find(p => p.slug === slug)
}
