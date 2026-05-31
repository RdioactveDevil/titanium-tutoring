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
  {
    slug: 'sace-atar-calculation',
    title: 'How SACE ATAR Is Calculated in South Australia: What Students and Parents Need to Know',
    date: '2026-05-11',
    excerpt: 'Most South Australian students do not fully understand how their SACE results convert into an ATAR — until after the fact. Here is exactly how the calculation works, what subject scaling does, and how to use this knowledge to choose subjects strategically.',
    cat: 'SACE',
    readMins: 7,
    sections: [
      {
        heading: 'What the ATAR Actually Measures',
        body: 'The Australian Tertiary Admission Rank (ATAR) is not a score out of 100. It is a percentile rank that indicates where a student sits relative to their entire age cohort — including students who did not finish Year 12. An ATAR of 90 means the student performed better than 90% of their age group, not that they scored 90% in their subjects. In South Australia, the ATAR is calculated by SATAC (the South Australian Tertiary Admissions Centre) based on a student\'s results across their best SACE Stage 2 subjects. Understanding this distinction matters because it changes how you should think about subject difficulty and competition.',
      },
      {
        heading: 'How SACE Grades Convert to ATAR Points',
        body: 'SACE Stage 2 subjects are graded A+ through E-. These grades are converted to a numerical score on a scale of 0 to 20, called a subject score. An A+ converts to 20, an A to 19.5, an A- to 19, a B+ to 18, and so on. These subject scores are then aggregated across your best subjects to produce a total score, which is then converted to the ATAR using a statistical table that compares South Australian student performance against a national standard. The conversion is not linear — the difference in ATAR between a 98 and a 99 is much harder to achieve than the difference between a 70 and a 71.',
      },
      {
        heading: 'The Role of Subject Scaling',
        body: 'Not all SACE subjects contribute equally to the ATAR — this is the effect of scaling. Scaling adjusts raw subject scores to account for the difficulty of the cohort sitting the subject. A subject taken by a high-achieving cohort is scaled up; a subject taken by a lower-achieving cohort is scaled down. In practice, subjects like Mathematical Methods, Physics, and Chemistry tend to scale up. Subjects with larger or more diverse cohorts tend to scale more neutrally. The scaling factors change every year depending on who takes each subject, so it is impossible to say with certainty that Subject X will always scale well. What is certain: choosing a difficult subject and performing well is almost always better than choosing an easy subject because you expect a higher grade.',
        list: [
          'Scaling is applied after grades are submitted — it is not visible during the year',
          'Scaling rewards students who choose harder subjects and succeed in them',
          'You cannot control the scaling factor, only the grade you achieve',
          'SATAC publishes historical scaling data that can inform your subject choices',
        ],
      },
      {
        heading: 'How Many Subjects Count Toward Your ATAR',
        body: 'Your ATAR in South Australia is calculated from your best 90 credits of Stage 2 SACE subjects, plus a compulsory Research Project. Most Stage 2 subjects are worth 20 credits, so you typically need results from at least four Stage 2 subjects for the ATAR calculation, with additional subjects contributing if they improve your score. The Research Project is worth 10 credits and is compulsory — it contributes to the ATAR but cannot be replaced by other subjects. Students who perform poorly in the Research Project cannot exclude it from their ATAR calculation.',
      },
      {
        heading: 'Common Misconceptions About SACE and ATAR',
        body: 'Three misconceptions consistently cause South Australian students to make poor strategic decisions:',
        list: [
          'Misconception 1: "I need straight A grades to get a high ATAR." False — the ATAR depends on your ranking within the cohort, not an absolute standard. Strong performance relative to other students is what counts.',
          'Misconception 2: "Doing more subjects guarantees a higher ATAR." False — only your best-performing subjects count. More subjects means more risk of a poor result dragging your score down if you overextend.',
          'Misconception 3: "My school\'s internal marking determines my ATAR." Partially false — the external exam is moderated independently by the SACE Board and contributes 30% for most subjects.',
        ],
      },
      {
        heading: 'What This Means for Your Subject Choices',
        body: 'The strategic implication of how ATAR is calculated is that subject choice matters more than most students appreciate. Choosing subjects where you are genuinely capable of achieving an A or A+ will almost always produce a better ATAR than choosing subjects you find easy but where your ceiling performance is a B+. The best subject choices are the intersection of three factors: subjects that scale reasonably, subjects where you can realistically achieve top grades, and subjects that satisfy prerequisites for your target university courses. If those three don\'t fully overlap, prerequisites should be treated as non-negotiable constraints, and you optimise the remaining choices.',
      },
    ],
    relatedPrograms: [
      { eyebrow: 'South Australia · Stage 1 & 2', label: 'SACE Program', href: '/programs/high-school', desc: 'SACE coaching across all Stage 2 subjects — strategy-first, from first SAT to final exam.' },
      { eyebrow: 'South Australia · Stage 1 & 2', label: 'SACE Mathematical Methods', href: '/programs/high-school/sace-methods', desc: 'Specialist SACE Methods tutoring — all topics to SACE Board performance standards.' },
    ],
  },
  {
    slug: 'glenunga-selection-guide',
    title: 'Getting Into Glenunga International High School: What the Selection Process Really Requires',
    date: '2026-05-13',
    excerpt: 'Glenunga International High School is South Australia\'s most academically prestigious government high school. The selection process is competitive and specific — here is what it actually assesses and how to prepare effectively.',
    cat: 'Selective Entry',
    readMins: 7,
    sections: [
      {
        heading: 'Why Glenunga Is Different From Other SA Government Schools',
        body: 'Glenunga International High School is a selective government school in Adelaide\'s eastern suburbs that offers the International Baccalaureate Diploma Programme (IBDP) in Years 11 and 12 alongside SACE. Entry into Year 10 at Glenunga is highly competitive — the school draws applications from across metropolitan Adelaide and beyond. Being admitted to Glenunga typically means studying alongside a peer cohort of high academic ability, which has both significant benefits (academic culture, motivated peers, university preparation) and genuine demands (the workload and assessment standards are substantially higher than most other state schools).',
      },
      {
        heading: 'The HAST Test and How It Is Used',
        body: 'Entry into Year 10 at Glenunga requires sitting the HAST (Humanities and Social Sciences, Aptitude, Science and Technology) exam. The HAST is an aptitude test, not a curriculum test — it assesses reasoning ability across four sections: Abstract Reasoning, Verbal Reasoning, Quantitative Reasoning, and Written Expression. The HAST score is a significant component of the selection decision. Importantly, the HAST is the same test used for entry into Adelaide High School and Botanic High School — students sit the test once and nominate their preferred school preferences. A strong HAST result opens all three selective school options simultaneously.',
      },
      {
        heading: 'The Academic Record Component',
        body: 'In addition to the HAST score, Glenunga considers an applicant\'s academic record from Years 7 to 9. Specifically, schools look at English and Mathematics results, because these are the two subjects most directly predictive of performance in the academically demanding Glenunga environment. Consistent A grades in core subjects across middle school strengthen an application. This means that preparation for Glenunga entry ideally starts earlier than Year 9 — building a strong academic record through middle school, not just preparing intensively for the HAST exam in the months before it is sitting.',
        list: [
          'English and Mathematics school reports carry the most weight in the academic record assessment',
          'Consistency across Years 7 to 9 matters — a sudden improvement in Year 9 alone is less compelling',
          'Extracurricular achievements can be noted but do not substitute for academic performance',
          'Some applicants provide a teacher recommendation — check with your current school whether this is required',
        ],
      },
      {
        heading: 'Adelaide High School and Botanic High School',
        body: 'South Australia has three government selective high schools that use the HAST exam for entry: Glenunga International High School, Adelaide High School, and Botanic High School. Each school has its own character and academic focus. Adelaide High School, located in the CBD, has a strong academic tradition and a broad curriculum. Botanic High School, located near the Adelaide Botanic Garden, is a newer selective school with growing academic prestige. Students rank their school preferences when applying, and HAST scores alongside academic records determine which school an applicant is offered. Listing Glenunga as a first preference does not disadvantage an application to other schools — selection is merit-based.',
      },
      {
        heading: 'The Written Expression Section of the HAST',
        body: 'The Written Expression component of the HAST requires a timed persuasive or narrative response. This section is the most directly trainable part of the exam — many students who have strong reasoning ability lose marks here because they have never practised timed structured writing under exam conditions. Preparation should include writing practice responses to a variety of prompts, receiving feedback against specific criteria (structure, argument quality, vocabulary, and engagement), and drilling a reliable planning routine that can be completed in three to five minutes before writing begins.',
      },
      {
        heading: 'How Far in Advance to Prepare',
        body: 'The HAST exam is typically held in Term 3 of Year 9, with applications opening in Term 2. For Glenunga specifically — where competition is most intense — we recommend beginning structured preparation at the start of Year 9 at the latest, with Year 8 second semester being the ideal start point. Abstract reasoning skill, in particular, develops gradually over weeks and months of repeated practice. Students who attempt last-minute preparation in the final four to six weeks before the exam consistently underperform students who have been practising regularly over a longer period. The academic record component also means the years before Year 9 contribute to the outcome.',
      },
    ],
    relatedPrograms: [
      { eyebrow: 'Selective School Entry', label: 'HAST Exam Coaching', href: '/programs/middle-school/hast-exam', desc: 'Section-by-section HAST coaching in Adelaide — abstract reasoning, verbal, quantitative, and written expression.' },
      { eyebrow: 'Years 7–9', label: 'Middle School Program', href: '/programs/middle-school', desc: 'Full middle school program covering Maths, English, NAPLAN, selective entry, and scholarships.' },
    ],
  },
  {
    slug: 'sace-english-literary-studies-stage-2',
    title: 'SACE English Literary Studies Stage 2: How to Write Essays That Score Performance Standard A',
    date: '2026-05-15',
    excerpt: 'English Literary Studies is one of the most studied SACE Stage 2 subjects in South Australia — and one of the most misunderstood in terms of what actually earns a Performance Standard A. Here is how the assessment works and what distinguishes high-scoring responses.',
    cat: 'SACE',
    readMins: 7,
    sections: [
      {
        heading: 'How Stage 2 English Literary Studies Is Assessed',
        body: 'SACE Stage 2 English Literary Studies has three assessment components: a Text Study (30%), a Comparative Study (30%), and an External Exam (40%). The Text Study requires an extended analytical essay on a single text. The Comparative Study requires a comparative analytical essay exploring connections between two or more texts. The External Exam requires timed analytical writing on unseen passages alongside a longer essay. Together these assessments require students to write analytically under varied conditions — from extended essays with multiple drafts to timed exam responses. Each component is marked against the same SACE Performance Standards, but the conditions and expectations differ significantly.',
      },
      {
        heading: 'What Performance Standard A Actually Requires',
        body: "Performance Standard A in English Literary Studies is not awarded for comprehensive knowledge of the text or for identifying many techniques. It is awarded for analytical sophistication — the ability to construct a sustained, nuanced argument about how and why a text works. The SACE Board's Performance Standard A descriptors use words like 'perceptive', 'sustained', 'cohesive', and 'nuanced'. In practice, this means: a clear thesis that makes an arguable claim (not a statement of fact), paragraphs that develop the argument (not just describe the text), and analysis that considers why an author made specific choices, not just what those choices are.",
      },
      {
        heading: 'The Comparative Study: What Markers Look For',
        body: 'The Comparative Study is the component where most students fall furthest below Performance Standard A. The most common failure mode: writing two separate text analyses and adding connecting sentences between them. A genuine comparative essay constructs a single argument about both texts simultaneously — the comparison is the analysis, not an addition to it. Strong comparative essays identify a meaningful point of similarity or difference, use both texts as evidence within each paragraph, and reach a conclusion that could only be drawn by reading both texts together.',
        list: [
          'Choose a comparison point that is specific and arguable, not generic (e.g., not "both texts explore power" — that describes thousands of texts)',
          'Write paragraphs that include evidence from both texts — not alternating text-by-text paragraphs',
          'Use comparative language throughout: "whereas", "by contrast", "similarly", "both authors"',
          'Ensure the conclusion makes a claim that depends on both texts, not just a summary of each',
        ],
      },
      {
        heading: 'The Single Text Study: Building Analytical Depth',
        body: 'For the Text Study component, the most significant differentiator between Band A and Band B responses is the quality of the thesis. A Band B response typically identifies themes and techniques accurately and discusses them intelligently. A Band A response does all of this but organises the entire essay around a single, specific, arguable claim about the text as a whole — and every paragraph advances that claim. The thesis should be a sentence that a reasonable person could disagree with. If your thesis is "The Great Gatsby explores the corruption of the American Dream," any literature teacher would agree immediately — it is too broad to be analytical. A stronger thesis identifies a specific mechanism or tension in the text and makes a claim about it.',
      },
      {
        heading: 'The External Exam: Timed Analysis of Unseen Texts',
        body: 'The external exam requires students to analyse unseen passages — texts they have not studied during the year. This tests transferable analytical skills, not text-specific knowledge. Many students who perform well on the internal components underperform on the external exam because they have not practised the skill of generating analytical ideas quickly in unfamiliar territory. Effective preparation involves timed practice with unseen passages, building a reliable reading routine: read once for overall effect, read again marking specific language choices, then plan a thesis before writing. Students who begin writing before forming a clear thesis consistently produce weaker timed responses than students who spend three to five minutes planning.',
      },
      {
        heading: 'The Most Common Language Errors That Cost Marks',
        body: 'Beyond analytical argument, the SACE Performance Standards assess written expression. Three patterns consistently pull responses below Performance Standard A:',
        list: [
          'Writing in present tense inconsistently — literary analysis should consistently use present tense ("the author presents", not "the author presented")',
          'Embedding quotes poorly — a quote should fit grammatically into the sentence that introduces it, not sit after a colon as a separate unit',
          'Over-explaining quotes — if the quote makes the point clearly, analyse the effect rather than paraphrasing the quote\'s meaning',
        ],
      },
    ],
    relatedPrograms: [
      { eyebrow: 'South Australia · Stage 2', label: 'SACE English Tutoring', href: '/programs/high-school', desc: 'SACE Stage 2 English coaching — essay technique, comparative analysis, and exam preparation.' },
      { eyebrow: 'Years 10–12', label: 'High School Program', href: '/programs/high-school', desc: 'SACE coaching across all Stage 2 subjects from first SAT to final exam.' },
    ],
  },
  {
    slug: 'sace-subject-selection',
    title: 'SACE Subject Selection: How to Choose the Right Subjects for Your ATAR Goal',
    date: '2026-05-17',
    excerpt: 'Subject selection is one of the most consequential decisions SACE students make — and most make it without enough information. Here is how to think about subject choices strategically, based on your ATAR target and university aspirations.',
    cat: 'SACE',
    readMins: 6,
    sections: [
      {
        heading: 'Why Subject Selection Matters More Than Students Realise',
        body: 'SACE subject choices affect the ATAR in two ways: through scaling (which adjusts raw subject scores based on cohort difficulty) and through prerequisite requirements (which determine whether specific university courses are accessible). Most students focus on the first effect and largely ignore the second — which is backwards. University prerequisites are non-negotiable constraints. If a student wants to study Medicine at the University of Adelaide, they must have completed Chemistry and Biology at Stage 2. No ATAR, however high, compensates for a missing prerequisite. The correct approach is to identify target university courses first, lock in any required prerequisites, and then optimise the remaining subject choices for ATAR performance.',
      },
      {
        heading: 'How Scaling Affects Your Subject Choices',
        body: 'Subject scaling in SACE adjusts raw subject scores after grades are submitted to account for the ability of each subject\'s cohort. Subjects taken by high-achieving students scale up — meaning a given grade in those subjects contributes more to the ATAR than the same grade in a less competitive subject. Mathematical Methods, Specialist Mathematics, Physics, and Chemistry have historically scaled well in South Australia. General Mathematics and some humanities subjects tend to scale more neutrally. However, choosing a high-scaling subject is only beneficial if you can actually achieve a strong grade in it. A B grade in Mathematical Methods will produce a lower ATAR contribution than an A+ grade in a neutrally-scaled subject for many students.',
      },
      {
        heading: 'The Subjects Most SA Students Underestimate',
        body: 'Two subjects that South Australian students regularly underestimate:',
        list: [
          'Research Project: the compulsory 10-credit component that most students treat as an afterthought, despite contributing to the ATAR and requiring sophisticated independent inquiry skills',
          'English subjects: English and English Literary Studies are often seen as "soft" options, but Stage 2 English at Performance Standard A is genuinely demanding — and an English subject is compulsory for SACE completion',
          'Specialist Mathematics: higher-scaling than Methods and valuable for engineering and science pathways, but significantly more abstract and demanding — only appropriate for students who are genuinely strong in Year 10 Maths',
          'Chemistry: prerequisites for Medicine, Dentistry, and many science degrees — students who avoid it often close career paths they later regret',
        ],
      },
      {
        heading: 'Stage 1 vs Stage 2: Getting the Foundation Right',
        body: 'Stage 1 SACE subjects (Years 10 and 11) do not directly contribute to the ATAR but they have two important roles. First, Stage 1 is where students build the foundational knowledge for Stage 2 — skipping Stage 1 Mathematical Methods or taking it casually makes Stage 2 significantly harder. Second, Stage 1 grades contribute to SACE completion (you need a C grade or better in required subjects), and some schools use Stage 1 performance to filter which Stage 2 subjects they allow students to take. Performing well in Stage 1 is not just academic — it protects your options for Stage 2.',
      },
      {
        heading: 'How to Approach Subject Selection Practically',
        body: 'A practical subject selection process for South Australian students:',
        list: [
          'Identify two or three target university courses and check their prerequisites on the SATAC website',
          'Lock in any prerequisites as non-negotiable Stage 2 choices',
          'Fill remaining spots with subjects where you are genuinely capable of A to A+ performance',
          'Consider scaling data as a tiebreaker, not a primary driver of choice',
          'Have an honest conversation with your teachers about your current ability level in each subject — not with the intention of avoiding challenge, but to make a realistic assessment',
        ],
      },
      {
        heading: 'When to Seek Help With Subject Choices',
        body: 'Subject selection advice from peers and parents has significant limitations. Peers typically advise based on their own preferences and abilities rather than yours. Parents often have outdated or incomplete information about SACE structure, scaling, and prerequisites. University open days are excellent for understanding prerequisite requirements directly. And a tutor who works regularly with SACE students can offer a realistic perspective on subject difficulty and the kind of grades students with your profile typically achieve. The decision is worth more time and better information than most students give it.',
      },
    ],
    relatedPrograms: [
      { eyebrow: 'South Australia · Stage 1 & 2', label: 'SACE Program', href: '/programs/high-school', desc: 'SACE coaching from subject selection through to final exams — strategy and content together.' },
      { eyebrow: 'South Australia · Stage 2', label: 'SACE Mathematical Methods', href: '/programs/high-school/sace-methods', desc: 'Specialist SACE Methods tutoring to SACE Board performance standards.' },
    ],
  },
  {
    slug: 'adelaide-private-school-scholarships',
    title: 'Academic Scholarships at Adelaide\'s Leading Private Schools: How the Selection Process Works',
    date: '2026-05-19',
    excerpt: 'Many of Adelaide\'s leading independent schools award academic scholarships that reduce fees significantly. The selection process is competitive and specific — here is what it involves, how to prepare, and what distinguishes successful applicants.',
    cat: 'Scholarship',
    readMins: 7,
    sections: [
      {
        heading: 'Which Adelaide Schools Offer Academic Scholarships',
        body: "Most of Adelaide's leading independent schools offer academic scholarships for entry at Year 7, Year 10, and occasionally Year 8 or 9. Schools including St Peter's College, Pembroke School, Scotch College, Seymour College, St Peter's Girls' School, Walford Anglican School, and Pulteney Grammar School all administer scholarship programs. The scholarships typically cover between 10% and 50% of annual fees, with some full scholarships available for exceptional candidates. The selection process varies by school but almost always includes a standardised academic ability test — most commonly the ACER Scholarship Test — alongside a school interview.",
      },
      {
        heading: 'The ACER Scholarship Test: What It Assesses',
        body: "The ACER (Australian Council for Educational Research) Scholarship Test is a standardised reasoning test used by many Australian private schools. It is not a curriculum assessment — it does not test what students have learned in school. It tests reasoning ability: mathematical problem-solving, reading comprehension and inference, and written expression. This distinction is critical for preparation. Students who prepare by revising school content often underperform. Students who prepare specifically for the ACER format — question types, time pressure, and the unfamiliar problem structures — consistently outperform their school results. Many Adelaide schools use the ACER test without publishing their cut-off scores, so preparation should aim for the upper range, not a minimum threshold.",
      },
      {
        heading: 'The School Interview',
        body: "Most Adelaide private schools include an interview in their scholarship selection process, typically after the ACER test has been administered. The interview is not a stress test — its purpose is to assess whether the student would thrive in that school's environment, and to give the school a fuller picture of the applicant beyond a test score. Common interview questions explore the student's interests, what they hope to achieve at the school, and how they have handled academic challenges. Students who have done genuine preparation — researched the school, reflected on their strengths and interests, and practised speaking confidently about themselves — consistently present better than students who approach the interview without preparation.",
        list: [
          'Research the school\'s programs, values, and co-curricular offerings before the interview',
          'Prepare answers to common questions about academic interests, challenges overcome, and future goals',
          'Practise speaking at an appropriate pace — nerves typically cause students to speak too quickly',
          'Have a question ready to ask the interviewer — it demonstrates genuine interest in the school',
        ],
      },
      {
        heading: 'Application Timelines and Deadlines',
        body: "Adelaide private school scholarship applications typically open in the second half of the preceding year (for Year 7 entry, applications often open in Term 3 or 4 of Year 6) and close in early to mid Term 1 of the application year. The ACER test is usually administered in March or April, with interviews in May. Scholarship offers are typically made in May or June for the following year's intake. These timelines vary by school, and some schools have much earlier deadlines than others. Missing a scholarship application deadline — even by one day — usually means waiting another year. Identifying deadlines in December and registering in January is the safest approach.",
      },
      {
        heading: 'What Makes a Scholarship Application Stand Out',
        body: 'Scholarship selection at Adelaide private schools considers academic ability (test score), school academic record, interview performance, and sometimes teacher references. The students who receive scholarship offers are not necessarily those with the highest test scores alone — they are those who perform well across all components. A student with a strong ACER result and a confident, well-prepared interview is a stronger candidate than a student with a slightly higher test score who interviews poorly. Authenticity matters: interviewers at Adelaide private schools are experienced and quickly identify students who are reciting prepared answers versus students who genuinely know why they want to attend.',
      },
      {
        heading: 'How Early to Start Preparation',
        body: "For Year 7 scholarship entry, we recommend beginning ACER preparation at the start of Year 6 — giving a full year of structured preparation for the test date in Term 1 of Year 7. For Year 10 entry scholarships, preparation should begin at the start of Year 9. The ACER Mathematics and Reading components improve gradually with repeated exposure to test-format questions and specific feedback — they do not respond well to intensive short-term preparation. Written Expression is similar: developing the habits that produce strong timed responses takes consistent practice over months, not weeks. Students who begin late almost always feel rushed and underperform relative to their actual academic ability.",
      },
    ],
    relatedPrograms: [
      { eyebrow: 'Selective Entry & Scholarships', label: 'Scholarship Exam Coaching', href: '/programs/exam-strategy', desc: 'ACER Scholarship Test preparation — Maths reasoning, Reading, and Written Expression technique.' },
      { eyebrow: 'Years 5–9', label: 'Primary & Middle School', href: '/programs/primary-school', desc: 'Academic foundation and scholarship preparation for entry into Adelaide\'s leading independent schools.' },
    ],
  },
  {
    slug: 'sace-biology-stage-2',
    title: 'SACE Biology Stage 2: The Internal and External Assessment Strategy That Earns Performance Standard A',
    date: '2026-05-21',
    excerpt: 'SACE Biology Stage 2 is one of the most popular science subjects in South Australia — and one of the most penalised by poor investigation technique. Here is how assessment works and what separates A-grade students from the rest.',
    cat: 'SACE',
    readMins: 7,
    sections: [
      {
        heading: 'How Stage 2 Biology Is Assessed',
        body: 'SACE Stage 2 Biology has two assessment streams: School Assessment (70%) and External Assessment (30%). The School Assessment comprises a Skills and Applications Tasks component (50%) — a series of school-based tests covering content knowledge and data analysis — and an Investigation Folio (20%), which includes at least two scientific investigations. The External Assessment is a 3-hour written exam. Understanding this structure shapes how preparation time should be allocated: the school assessment contributes more than twice as much to the final grade as the external exam, so the investigation folio deserves far more attention than most students give it.',
      },
      {
        heading: 'The Investigation Folio: Where Most Students Leave Marks Behind',
        body: "The Investigation Folio requires students to conduct, report, and reflect on scientific investigations. Most students underestimate how much the quality of the written report — not just the quality of the experiment — determines the grade. Performance Standard A requires 'systematic and thorough' investigation and reporting. In practice, this means: a clear and specific research question, a controlled experimental design with justified methodology, accurate data collection and processing, and a discussion that evaluates both the results and the limitations of the method. The limitation section is where most students fall short — they acknowledge limitations superficially without discussing how those limitations might have affected the results.",
        list: [
          'State your research question as a specific, answerable question — not a topic',
          'Identify the independent, dependent, and control variables explicitly',
          'Justify your method — explain why you made the procedural choices you did',
          'Discuss limitations in terms of their likely effect on your data, not just their existence',
          'Conclude by directly answering the research question using your results',
        ],
      },
      {
        heading: 'The Topics That Appear Most in the External Exam',
        body: 'Based on SACE Board external exam papers, three topic areas consistently feature heavily and produce the most lost marks:',
        list: [
          'DNA, protein synthesis, and gene expression: questions regularly require students to trace the path from gene to phenotype and understand how mutations affect protein structure',
          'Ecosystem dynamics: food webs, energy flow calculations, and the effects of environmental change on populations',
          'Homeostasis and thermoregulation: particularly the mechanisms of negative feedback loops and the comparison of ectotherm and endotherm strategies',
        ],
      },
      {
        heading: 'Data Analysis Questions: A Consistent Weakness',
        body: 'Stage 2 Biology external exams always include data analysis questions — graphs, tables, or experimental results that students must interpret and evaluate. These questions are worth significant marks and are consistently the area where students who know the biology content lose marks. The issue is not content knowledge — it is analytical technique. Effective data analysis answers: describe the trend precisely (using numbers from the data, not just "increases"), relate the trend to a biological explanation, and identify a possible source of experimental error or limitation. Students who describe the data without explaining it biologically, or who explain the biology without referencing the data, typically score in the middle range for these questions.',
      },
      {
        heading: 'Extended Response Questions: How to Structure for Full Marks',
        body: "Stage 2 Biology external exams include at least one extended response question worth 8 to 12 marks. These questions require students to explain a biological process or evaluate a scenario in depth. Students who lose marks on extended responses almost always do so for one of three reasons: they use the correct vocabulary imprecisely, they omit steps in a process (describing the end point without explaining the mechanism), or they do not answer the specific question asked (writing generally about a topic rather than addressing the specific scenario in the question). Before writing an extended response, spend two minutes identifying what the question is specifically asking, then plan your answer as a sequence of steps.",
      },
      {
        heading: 'How to Structure Your Preparation in the Final Eight Weeks',
        body: 'With eight weeks to the external exam, a structured approach produces consistently better results than general revision:',
        list: [
          'Weeks 1–2: identify topic areas with weakest understanding using past paper diagnostics',
          'Weeks 3–5: targeted review of weak topics, focusing on mechanism and explanation rather than definition',
          'Week 6–7: complete past papers under timed conditions, marking strictly',
          'Week 8: review marked past papers for patterns in lost marks, light consolidation',
        ],
      },
    ],
    relatedPrograms: [
      { eyebrow: 'South Australia · Stage 2', label: 'SACE Biology Tutoring', href: '/programs/high-school', desc: 'SACE Stage 2 Biology coaching — investigation technique, exam strategy, and content review.' },
      { eyebrow: 'Years 10–12', label: 'High School Program', href: '/programs/high-school', desc: 'SACE coaching across all Stage 2 science subjects from first SAT to final exam.' },
    ],
  },
  {
    slug: 'sace-chemistry-stage-2',
    title: 'SACE Chemistry Stage 2: The Topics and Techniques That Determine Your Grade',
    date: '2026-05-23',
    excerpt: 'SACE Chemistry Stage 2 is a prerequisite for Medicine, Dentistry, and most science degrees in South Australia. It is also one of the most calculation-intensive SACE subjects. Here is how to approach both the internal and external assessments strategically.',
    cat: 'SACE',
    readMins: 7,
    sections: [
      {
        heading: 'How Stage 2 Chemistry Is Structured',
        body: 'SACE Stage 2 Chemistry divides into School Assessment (70%) and External Assessment (30%). The School Assessment includes a Skills and Applications Tasks component (50%) and an Investigation Folio (20%) comprising at least two scientific investigations. The External Assessment is a 3-hour written exam. Chemistry\'s calculation-heavy content means preparation for the Skills and Applications Tasks requires consistent practice — not last-minute cramming. Errors in calculation technique accumulate: a student who misunderstands molar concentration in Term 1 will continue losing marks on stoichiometry questions throughout the year until the foundational error is corrected.',
      },
      {
        heading: 'The Calculations Students Lose Most Marks On',
        body: "Stage 2 Chemistry external exams are consistent in the calculation types that produce the most errors. These are not necessarily the most complex calculations — they are the ones students have practised least carefully:",
        list: [
          'Equilibrium constant expressions: students regularly write K expressions incorrectly when solids or liquids are involved, or when the stoichiometry requires raised exponents',
          'pH calculations: particularly the transition between strong and weak acid calculations, and buffer calculations involving the Henderson-Hasselbalch equation',
          'Electrochemistry: cell potential calculations and the conversion between Gibbs free energy, cell potential, and equilibrium constant',
          'Yield and percentage purity: multi-step stoichiometry problems where errors compound across steps',
        ],
      },
      {
        heading: 'The Practical Investigation Folio',
        body: "The Investigation Folio in Chemistry requires the same rigour as Biology — a clear research question, justified methodology, accurate data processing, and a substantive discussion of results and limitations. Chemistry investigations have an additional challenge: quantitative error analysis. Performance Standard A requires students to propagate measurement uncertainties through calculations, not just acknowledge that error exists. This means understanding how to calculate percentage uncertainty, how uncertainties combine in calculations, and how to discuss whether the experimental error is sufficient to explain any discrepancy between your results and the theoretical value. Most students state 'human error' as a limitation without this level of quantitative specificity, which is insufficient for Performance Standard A.",
      },
      {
        heading: 'Organic Chemistry: The Topic Most Students Rush',
        body: 'Organic chemistry — reaction mechanisms, functional group interconversions, and the reactions of organic molecules — features heavily in both internal assessments and the external exam. It is also the topic that students most commonly rush through. Reaction mechanisms require students to understand electron movement, not just memorise reaction outcomes. Students who memorise reactions without understanding the underlying electronic reasoning cannot answer questions about unfamiliar organic reactions — which appear regularly in SACE Chemistry exams. The preparation approach for organic chemistry should prioritise understanding over memorisation: if you understand why a nucleophile attacks an electrophile, you can reconstruct reaction mechanisms under exam pressure rather than hoping you memorised the right one.',
      },
      {
        heading: 'Extended Response and Evaluate Questions',
        body: "Stage 2 Chemistry exams include extended response questions that require evaluation — questions asking students to assess experimental designs, evaluate the reasonableness of conclusions, or justify a choice between experimental approaches. These questions are consistently the highest-value questions on the paper and the ones most students answer most superficially. An effective evaluate response: identifies specific strengths or weaknesses, explains the reason for each (not just states it), uses chemical knowledge to justify the reasoning, and reaches a supported conclusion. 'The experiment has limitations because human error is always present' is not a Chemistry evaluation — it is a generic statement that earns no marks.",
      },
      {
        heading: 'Preparing for the External Exam: A Topic Priority Order',
        body: 'Given limited preparation time, prioritise topics in this order for maximum mark gain in the external exam:',
        list: [
          'Acid-base equilibria: always heavily tested, high mark value per question',
          'Electrochemistry: complex but predictable question structures once understood',
          'Organic chemistry mechanisms: unfamiliar reactions appear regularly; understanding > memorisation',
          'Thermodynamics (enthalpy, entropy, Gibbs): calculation-based with predictable question formats',
          'Spectroscopy: high marks for identification skills that are relatively quick to develop',
        ],
      },
    ],
    relatedPrograms: [
      { eyebrow: 'South Australia · Stage 2', label: 'SACE Chemistry Tutoring', href: '/programs/high-school', desc: 'SACE Stage 2 Chemistry coaching — calculations, investigation technique, and external exam preparation.' },
      { eyebrow: 'UCAT · Interviews · Personal Statements', label: 'Medical School Admissions', href: '/programs/medical-school-admissions', desc: 'Full medical school preparation — UCAT, Chemistry prerequisites, and MMI interview coaching.' },
    ],
  },
  {
    slug: 'south-australia-university-entry-requirements',
    title: 'University Entry Requirements in South Australia: What ATARs Actually Get You In',
    date: '2026-05-25',
    excerpt: 'Understanding SATAC, minimum ATARs, and subject prerequisites is essential for South Australian students planning their university pathway. Here is an honest guide to how entry into SA universities actually works — including what most students get wrong.',
    cat: 'SACE',
    readMins: 7,
    sections: [
      {
        heading: 'How SATAC Works',
        body: 'In South Australia, university applications are processed through SATAC — the South Australian Tertiary Admissions Centre. SATAC handles applications for all three major South Australian universities: the University of Adelaide, Flinders University, and the University of South Australia (UniSA). Students submit a preference list to SATAC (up to five preferences in order), and SATAC processes all applications simultaneously after SACE results are released in December. Unlike VCE in Victoria, where VTAC processes applications, SATAC is the single point of entry for all SA undergraduate courses. Students submit their SATAC application in October, before their final SACE results are known.',
      },
      {
        heading: 'Entry to the University of Adelaide',
        body: "The University of Adelaide is South Australia's sandstone university and the most ATAR-competitive of the three. Entry requirements vary significantly by course. Medicine (including the Adelaide Undergraduate Medicine program) requires both a competitive ATAR and strong UCAT results — the ATAR alone is not sufficient. Law (LLB) and combined law degrees have historically required ATARs in the high 90s for direct entry. Engineering and science degrees typically have lower minimum ATARs but may have prerequisite requirements (Chemistry and/or Physics for some programs). The University of Adelaide publishes indicative ATAR scores — the ATAR at which the last student was admitted in the previous year. These are not minimum cut-offs: they are indicative of where the competitive threshold typically falls.",
        list: [
          'Medicine: UCAT ANZ score and ATAR are both required; interview is part of selection',
          'Law: ATAR typically in the 95–99 range for direct entry into LLB programs',
          'Engineering: ATARs typically in the 75–90 range depending on the specialisation',
          'Science: ATARs from approximately 70, with specific prerequisites for some programs',
        ],
      },
      {
        heading: 'Entry to Flinders University',
        body: "Flinders University, located in Bedford Park south of Adelaide's CBD, offers a broad range of undergraduate programs with generally more accessible entry requirements than the University of Adelaide. Flinders is notably strong in health sciences, medicine, and law. The Flinders Undergraduate Medicine program (MBBS) has a separate selection process involving UCAT and academic prerequisites. Flinders Law is highly regarded and has had entry ATARs in the low to mid 90s. Allied health programs — nursing, physiotherapy, occupational therapy, and speech pathology — have ATARs typically in the 70s to mid 80s, with specific prerequisite requirements for each. Flinders also offers alternative entry pathways for students who do not meet standard ATAR requirements.",
      },
      {
        heading: 'Entry to UniSA',
        body: "The University of South Australia (UniSA) has campuses across metropolitan Adelaide and offers extensive undergraduate programs with the most accessible entry points of the three SA universities. UniSA is particularly strong in business, education, engineering, and health programs. Many UniSA courses have minimum ATARs in the 60s or 70s, and UniSA has the most developed alternative entry program in SA — including entry based on work experience, portfolios, and bridging courses. For students who are unsure whether their ATAR will meet direct entry requirements, UniSA's alternative entry options provide a genuine pathway. However, students should note that minimum ATAR requirements are not ceiling aspirations — aiming higher than the minimum increases flexibility in course selection.",
      },
      {
        heading: 'Prerequisites vs Assumed Knowledge: A Critical Distinction',
        body: 'South Australian universities distinguish between prerequisites and assumed knowledge. A prerequisite is a non-negotiable requirement — without the specified SACE subject, you cannot be considered for the course, regardless of your ATAR. Assumed knowledge means the course assumes you have covered a topic, but does not require the specific SACE subject. Students who enter a course with assumed knowledge gaps rather than prerequisites simply find the early weeks harder. Mistaking an assumed knowledge subject for a prerequisite — or vice versa — is a common and consequential error. Always verify prerequisite status directly with SATAC or the university, not with peers or school rumour.',
      },
      {
        heading: 'Guaranteed Entry Scores and What They Actually Mean',
        body: "Some SA university courses publish 'guaranteed entry' scores — ATARs at which a student is guaranteed an offer regardless of competition. These differ from indicative entry scores, which reflect where competition actually fell last year. Guaranteed entry scores are typically higher than the indicative entry score because they represent a commitment from the university. A student with an ATAR above the guaranteed entry threshold does not need to worry about competition for a place — they are in. Students between the indicative entry score and the guaranteed entry score may be admitted, but cannot be certain until offers are made. This is a particularly important distinction for competitive health programs, where the indicative score varies year to year.",
      },
    ],
    relatedPrograms: [
      { eyebrow: 'South Australia · Stage 1 & 2', label: 'SACE Program', href: '/programs/high-school', desc: 'SACE coaching across all Stage 2 subjects — ATAR strategy from subject selection to final exam.' },
      { eyebrow: 'UCAT · Interviews · Personal Statements', label: 'Medical School Admissions', href: '/programs/medical-school-admissions', desc: 'Full SA medical school admissions preparation: UCAT, prerequisite subjects, and MMI interviews.' },
    ],
  },
  {
    slug: 'year-7-transition-south-australia',
    title: 'Starting Year 7 in South Australia: How to Support Your Child Through the Transition',
    date: '2026-05-27',
    excerpt: 'The move from primary school to high school is one of the most significant academic transitions students make. In South Australia, where Year 7 is the first year of high school, this transition happens earlier than in most other states — and the academic shift is sharper than many families expect.',
    cat: 'NAPLAN',
    readMins: 6,
    sections: [
      {
        heading: 'Why the Year 7 Transition in SA Is Different',
        body: 'South Australia is one of the few states where Year 7 is part of high school rather than primary school. This means South Australian students make the primary-to-secondary transition a year earlier than students in New South Wales, Victoria, and Queensland. In practical terms, this means navigating subject teachers (rather than a single classroom teacher), moving between rooms, managing a homework timetable across multiple subjects, and encountering a much larger peer group — all at age 12 rather than 13. The academic content also shifts sharply: Year 7 maths, science, and English at high school level is more formal and more demanding than Year 6 primary, and the expectation of independent work increases significantly.',
      },
      {
        heading: 'The Academic Skills Year 7 Actually Requires',
        body: "Most parents focus on the social aspects of the Year 7 transition — new friendships, navigating a bigger school, getting lost. These are real concerns. But the academic adjustment deserves equal attention. Three skills determine how well students adapt academically in Year 7:",
        list: [
          'Independent note-taking: high school teachers do not summarise content the way primary teachers do — students must extract and organise information themselves',
          'Managing multiple deadlines: having three or four assignments due in the same week is normal in Year 7 and requires organisational skills most students have not needed before',
          'Reading for information: Year 7 textbooks and handouts assume a higher reading level than most Year 6 students have encountered in school',
        ],
      },
      {
        heading: 'NAPLAN in Year 7: What to Expect',
        body: 'Year 7 is a NAPLAN sitting year. Students in Year 7 sit NAPLAN assessments in Literacy (Reading, Writing, and Language Conventions) and Numeracy. For South Australian students, the Year 7 NAPLAN sitting is the first since Year 5. The adaptive online format means the assessment adjusts in difficulty based on how students respond — a strong start leads to more challenging questions, while errors early direct students toward easier items. The Year 7 NAPLAN result provides a meaningful external baseline of academic standing that can inform subject and support decisions going into the middle years of high school. Students who perform significantly below the national average in either Literacy or Numeracy at Year 7 are more likely to struggle with SACE subject demands in Years 10 to 12.',
      },
      {
        heading: 'How to Identify Academic Difficulties Early',
        body: 'The students who fall furthest behind in Year 7 are often not those who are least capable — they are those whose difficulties go unnoticed and unaddressed for the longest time. Early warning signs that a student is struggling academically in Year 7:',
        list: [
          'Consistently not completing homework across multiple subjects',
          'Avoiding asking for help in class — particularly common in students who were high-achieving in primary school and find the shift to struggling uncomfortable',
          'Not understanding assessment feedback or not using it to improve subsequent work',
          'Declining grades across the first and second term with no clear explanation given at home',
        ],
      },
      {
        heading: 'Supporting the Transition at Home',
        body: "Parents cannot do their child's academic work, but they can create the conditions in which academic work gets done. The most practical supports during the Year 7 transition: a consistent homework time and location (distraction-free, phone elsewhere), a weekly check-in on upcoming deadlines rather than daily supervision, access to someone who can explain content when they are stuck (another family member, a tutor, or a trusted teacher), and the explicit permission to not understand things immediately. Many Year 7 students who fall behind do so in silence because they feel they should understand content they actually find confusing. Making it normal to be confused and to ask for help is more valuable than any specific academic intervention.",
      },
      {
        heading: 'When to Consider a Tutor',
        body: 'Not every student needs tutoring at Year 7, and not every student who needs support needs a tutor. But a tutor is worth considering if: a student is consistently confused by content in a specific subject and classroom help is not resolving it, a student is showing anxiety about school that is affecting engagement, or a student has clear academic gaps from primary school (particularly in foundational maths or reading) that are likely to compound in high school. Year 7 is an early intervention point — gaps in foundational skills are much easier to address at Year 7 than at Year 10 when SACE subject choices and early SATs are imminent.',
      },
    ],
    relatedPrograms: [
      { eyebrow: 'Years 3, 5, 7 & 9', label: 'NAPLAN Preparation', href: '/programs/naplan', desc: 'Structured NAPLAN preparation for Year 7 Literacy and Numeracy across all question types.' },
      { eyebrow: 'Years 7–9', label: 'Middle School Program', href: '/programs/middle-school', desc: 'Full middle school academic support — Maths, English, NAPLAN, and selective entry preparation in Adelaide.' },
    ],
  },
  {
    slug: 'finding-tutor-adelaide',
    title: 'Finding the Right Tutor in Adelaide: What to Look For and What to Avoid',
    date: '2026-05-29',
    excerpt: 'The tutoring market in Adelaide is large and unregulated. The quality difference between an excellent tutor and a mediocre one is significant — and often invisible until weeks or months have passed. Here is what to look for, what questions to ask, and what red flags to watch for.',
    cat: 'SACE',
    readMins: 6,
    sections: [
      {
        heading: 'How the Adelaide Tutoring Market Works',
        body: "Adelaide's private tutoring market includes sole traders, tutoring agencies, and tutoring centres — with significant variation in quality across all three categories. Sole traders (individual tutors operating independently) range from highly experienced professionals to university students picking up casual work. Agencies act as intermediaries between students and tutors, typically charging a fee for matching and taking a margin from each session rate. Tutoring centres offer group or small-group sessions in a classroom environment. None of these formats is inherently better than the others: the critical variable is the specific tutor's subject knowledge, ability to diagnose what the student doesn't understand, and skill at explaining it in a way that actually changes the student's thinking.",
      },
      {
        heading: 'The Most Important Qualification: Subject Knowledge',
        body: "For senior school students in South Australia — Year 11 and 12 SACE — subject-specific knowledge matters more than general teaching experience. A SACE Chemistry tutor who has studied Chemistry at university level understands the content deeply enough to explain not just the procedure but why it works. A tutor who is slightly ahead of the student in the same content, or who studied the subject years ago without maintaining that knowledge, will plateau at the limit of their own understanding. When assessing a tutor for SACE Stage 2, ask directly: what year did they study this subject, what grade did they achieve, and do they regularly work with students at this level. These questions are reasonable and any competent tutor should answer them confidently.",
      },
      {
        heading: 'What Good Tutoring Actually Looks Like',
        body: "The most important thing a tutor should do in every session is identify what the student doesn't understand — not cover material the student already knows. This sounds obvious, but many tutoring sessions in Adelaide amount to supervised homework help: the tutor sits beside the student while they complete assigned work and answers questions that arise. This is not the same as targeted teaching. A strong tutor begins each session with a brief diagnostic, identifies the specific point of confusion, teaches to that point specifically, checks that the student can now solve similar problems independently, and assigns practice that targets the same weakness. If after several sessions you cannot describe what specific gaps have been addressed and closed, the sessions may not be achieving much.",
        list: [
          'Sessions should include active retrieval practice, not just explanation and worked examples',
          'A good tutor identifies the root cause of errors, not just marks answers wrong',
          'The student should be doing most of the work in a session — not watching the tutor solve problems',
          'Progress should be visible in school assessments within 4 to 8 weeks of consistent tutoring',
        ],
      },
      {
        heading: 'Online vs In-Person Tutoring in Adelaide',
        body: 'Online tutoring has become a mainstream option in Adelaide since 2020, and for most subjects it is comparably effective to in-person tutoring when done well. Online tutoring is more flexible (no travel time, easier scheduling), gives access to a larger pool of specialist tutors, and — for focused students — works well. In-person tutoring remains preferable for students who find it difficult to maintain focus on screen, for hands-on subjects like Chemistry or Physics where working through problems on paper together has natural advantages, and for younger students who benefit from the physical presence of another person. The decision should be based on the specific student\'s learning style and the subject being tutored, not a general preference.',
      },
      {
        heading: 'Questions to Ask Before Committing',
        body: 'Before engaging a tutor in Adelaide — whether through an agency or directly — these questions are worth asking:',
        list: [
          'What is your specific experience with this subject at SACE Stage 2 level?',
          'How do you structure a session — what does a typical session look like?',
          'How do you track a student\'s progress and communicate it to parents?',
          'What is your cancellation policy and minimum commitment?',
          'Can you provide references from current or former students and their parents?',
        ],
      },
      {
        heading: 'Red Flags to Watch For',
        body: "After assessing hundreds of tutoring arrangements over the years, these patterns consistently indicate a poor fit or a poor tutor: sessions that consist mainly of the tutor talking and working through examples while the student watches; a tutor who agrees with everything and never identifies gaps or misunderstandings; communication that avoids giving specific feedback ('doing really well', 'working hard', 'making progress' without specifics); and tutors who cannot explain why a student is making a specific error — only that the answer is wrong. The best tutors in Adelaide welcome specific questions about their methods, communicate clearly about progress, and do not promise outcomes they cannot deliver.",
      },
    ],
    relatedPrograms: [
      { eyebrow: 'Years 10–12', label: 'High School Program', href: '/programs/high-school', desc: 'SACE coaching in Adelaide — subject-specialist tutors, SAT strategy, and exam preparation.' },
      { eyebrow: 'Years 7–9', label: 'Middle School Program', href: '/programs/middle-school', desc: 'Middle school academic support in Adelaide — Maths, English, NAPLAN, and selective entry.' },
    ],
  },
]

export function getPost(slug: string): Post | undefined {
  return posts.find(p => p.slug === slug)
}
