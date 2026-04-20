# Design System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Port the Titanium Tutoring Design System handoff into the existing Next.js marketing site — updating global tokens, nav, home page sections, contact layout, and visual refresh across all pages.

**Architecture:** All changes are confined to `app/globals.css` (tokens + utilities), `app/components/Nav.tsx` (dropdown), and the five page files (`page.tsx`, `about/page.tsx`, `contact/page.tsx`, `programs/page.tsx`, `results/page.tsx`). No new routes, no new components, no backend changes. The CSS layer already has most component styles; this plan adds missing tokens, two new home sections, and targeted layout fixes.

**Tech Stack:** Next.js (App Router), TypeScript, CSS (vanilla, single globals.css), no CSS-in-JS.

---

## File map

| File | What changes |
|---|---|
| `app/globals.css` | Add missing tokens, update 3 rules, add 3 utility classes |
| `app/components/Nav.tsx` | Programs dropdown (hover reveal, 4 items) |
| `app/page.tsx` | Hero headline, Services section (new), Method section (new), testimonials expanded to 4 |
| `app/contact/page.tsx` | Info block → paper-raise box, form → white shadow wrapper, submit → btn-primary |
| `app/about/page.tsx` | Hero lead color, section-header rule added where missing |
| `app/programs/page.tsx` | Section-header rule added where missing |
| `app/results/page.tsx` | Verify testimonial cards already styled (likely no-op) |

---

## Task 1: Add missing CSS tokens and utilities

**Files:**
- Modify: `app/globals.css` (`:root` block and button/utility rules)

- [ ] **Step 1: Add missing tokens to `:root`**

In `app/globals.css`, find the closing `}` of the `:root` block (currently after `--nav-h:72px;`) and add before it:

```css
  /* ---------- MISSING TOKENS ---------- */
  --white:       #ffffff;
  --success:     #2f7a44;
  --warning:     #b5751a;
  --danger:      #a83232;
  --info:        var(--navy);

  /* Spacing (8pt grid) */
  --sp-1:  4px;  --sp-2:  8px;  --sp-3:  12px; --sp-4:  16px;
  --sp-5:  20px; --sp-6:  24px; --sp-8:  32px; --sp-10: 40px;
  --sp-12: 48px; --sp-16: 64px; --sp-20: 80px; --sp-24: 96px;
  --sp-32: 128px;

  /* Radii */
  --r-sm:     2px;
  --r-md:     4px;
  --r-lg:     8px;
  --r-pill:   9999px;
  --r-circle: 50%;

  /* Extra shadows */
  --shadow-sm:          0 1px 2px rgba(8,30,109,0.06);
  --shadow-inset-rule:  inset 0 -1px 0 var(--rule);

  /* Motion */
  --ease-out:    cubic-bezier(0.2,0.8,0.2,1);
  --ease-in-out: cubic-bezier(0.4,0,0.2,1);
  --dur-fast: 150ms;
  --dur-base: 200ms;
  --dur-slow: 300ms;
```

- [ ] **Step 2: Update hero em to serif italic**

Find line 89 in `globals.css`:
```css
.hero h1 em{font-style:normal;font-family:var(--font-display);font-weight:inherit;text-transform:uppercase;letter-spacing:0.04em;color:var(--gold)}
```
Replace with:
```css
.hero h1 em{font-style:italic;font-family:var(--font-serif);font-weight:500;text-transform:none;letter-spacing:normal;color:var(--gold)}
```

- [ ] **Step 3: Add btn-ghost-light, btn-primary, card-lift**

After the existing `.btn-navy-sm:hover` rule, add:
```css
.btn-ghost-light{color:rgba(250,246,238,0.85);padding:12px 22px;border-radius:4px;font-weight:600;font-size:15px;text-decoration:none;border:1px solid rgba(250,246,238,0.22);transition:all 200ms;display:inline-flex;align-items:center;gap:6px;background:transparent;cursor:pointer}
.btn-ghost-light:hover{border-color:rgba(243,190,67,0.5);color:var(--gold)}
.btn-primary{background:var(--navy);color:var(--paper);padding:13px;border-radius:4px;font-weight:700;font-size:15px;border:none;cursor:pointer;font-family:var(--font-body);width:100%;transition:background 200ms}
.btn-primary:hover{background:var(--navy-700)}
.card-lift{transition:transform 200ms,box-shadow 200ms}
.card-lift:hover{transform:translateY(-2px);box-shadow:var(--shadow-lift)}
```

- [ ] **Step 4: Update contact grid and input backgrounds**

Find `.contact-inner{...grid-template-columns:1fr 1fr;...}` and change to `grid-template-columns:1fr 1.2fr;`.

Find `.form-group input,.form-group select,.form-group textarea{...background:var(--paper);...}` and change `background:var(--paper)` to `background:var(--white)`.

- [ ] **Step 5: Commit**

```bash
git add app/globals.css
git commit -m "feat: add missing design system tokens and utility classes"
```

---

## Task 2: Nav — Programs dropdown

**Files:**
- Modify: `app/components/Nav.tsx`

- [ ] **Step 1: Add dropdown state and programs list**

Replace the entire content of `app/components/Nav.tsx` with:

```tsx
'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const programs = [
  'Primary School',
  'Middle School',
  'High School',
  'Medical School Admissions',
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [progOpen, setProgOpen] = useState(false)
  const path = usePathname()

  const close = () => { setMenuOpen(false); setProgOpen(false) }
  const active = (href: string) => path === href ? 'active' : ''

  return (
    <>
      <nav>
        <div className="nav-inner">
          <Link href="/" className="nav-brand" onClick={close}>
            <img src="/logo-icon.png" alt="Titanium Tutoring" onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
            <span className="nav-brand-name">Titanium Tutoring</span>
          </Link>
          <ul className="nav-links">
            <li>
              <div
                className="nav-dropdown-wrap"
                onMouseEnter={() => setProgOpen(true)}
                onMouseLeave={() => setProgOpen(false)}
              >
                <Link href="/programs" className={active('/programs')} style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                  Programs <span style={{ fontSize: 9, opacity: 0.7 }}>▼</span>
                </Link>
                {progOpen && (
                  <div className="nav-dropdown">
                    {programs.map(p => (
                      <Link key={p} href="/programs" className="nav-dropdown-item" onClick={close}>{p}</Link>
                    ))}
                  </div>
                )}
              </div>
            </li>
            <li><Link href="/about" className={active('/about')}>About</Link></li>
            <li><Link href="/results" className={active('/results')}>Results</Link></li>
            <li><Link href="/contact" className={`nav-cta ${active('/contact')}`}>Book a Trial</Link></li>
          </ul>
          <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <Link href="/programs" className={active('/programs')} onClick={close}>Programs</Link>
        {programs.map(p => (
          <Link key={p} href="/programs" className="mobile-sub" onClick={close}>{p}</Link>
        ))}
        <Link href="/about" className={active('/about')} onClick={close}>About</Link>
        <Link href="/results" className={active('/results')} onClick={close}>Results</Link>
        <Link href="/contact" className={active('/contact')} onClick={close}>Book a Trial</Link>
      </div>
    </>
  )
}
```

- [ ] **Step 2: Add dropdown CSS**

In `app/globals.css`, after the `.mobile-menu a.active` rule, add:

```css
.nav-dropdown-wrap{position:relative}
.nav-dropdown{position:absolute;top:calc(100% + 8px);left:-16px;background:var(--paper);color:var(--ink);min-width:240px;border-radius:var(--r-md);box-shadow:var(--shadow-modal);border:1px solid var(--rule);padding:8px;z-index:200}
.nav-dropdown .nav-dropdown-item{display:block;padding:10px 14px;border-radius:var(--r-sm);color:var(--ink);text-decoration:none;font-size:13px;font-weight:500;transition:background 150ms}
.nav-dropdown .nav-dropdown-item:hover{background:var(--paper-raise);color:var(--navy)}
.mobile-sub{font-size:0.85rem !important;padding-left:1rem;color:rgba(250,246,238,0.55) !important}
```

- [ ] **Step 3: Verify dropdown renders**

```bash
cd "C:/Users/adi23/Documents/titanium-tutoring/.claude/worktrees/silly-thompson-f4f581"
npm run dev
```

Open http://localhost:3000. Hover "Programs" in the nav — dropdown should appear with 4 items. Stop the server with Ctrl+C.

- [ ] **Step 4: Commit**

```bash
git add app/components/Nav.tsx app/globals.css
git commit -m "feat: add Programs dropdown to nav"
```

---

## Task 3: Home page — hero headline and CTA

**Files:**
- Modify: `app/page.tsx` (lines ~115–126)

- [ ] **Step 1: Update hero h1**

Find the `<h1>` block in `app/page.tsx`:
```tsx
          <h1>
            From Struggle<br />
            to <em>the Stars.</em><br />
            We&apos;ve Done It.
          </h1>
```
Replace with:
```tsx
          <h1>
            Through hardships,<br />
            <em>to the stars.</em>
          </h1>
```

- [ ] **Step 2: Update second CTA button class**

Find:
```tsx
            <Link href="/programs" className="btn-ghost">See Our Programs</Link>
```
Replace with:
```tsx
            <Link href="/programs" className="btn-ghost-light">See Our Programs</Link>
```

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: update home hero headline to design system copy"
```

---

## Task 4: Home page — Services section

**Files:**
- Modify: `app/page.tsx` (insert after `{/* AS FEATURED */}` section, before `{/* WHY TITANIUM */}`)

- [ ] **Step 1: Insert Services section**

Find the comment `{/* WHY TITANIUM — condensed */}` in `app/page.tsx` and insert the following block **immediately before** it:

```tsx
      {/* SERVICES */}
      <section className="services">
        <div className="services-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">Our Services</span>
            <h2 className="section-title">Programs We Run</h2>
            <p className="lead" style={{ marginTop: 14 }}>From Year 3 to Year 12 — plus specialist entry and medical admissions. Every program is built around George Pólya&apos;s problem-solving method.</p>
            <div className="section-rule" />
          </div>
          <div className="services-grid">
            {[
              { n: '01', title: 'Year 3 to Year 12 Weekly Classes', desc: 'Structured weekly sessions across all year levels and subjects. Diagnose gaps, drill fundamentals, and build the consistency that compounds into results.' },
              { n: '02', title: 'Year 6–Year 8 Writing Mastery Program', desc: 'Essay structure, analytical writing, and persuasive technique for the critical middle-school years. The skills that make every English assessment easier from here.' },
              { n: '03', title: 'Australian Mathematics Competition and Olympiads Preparation', desc: 'Targeted preparation for the AMC and Mathematics Olympiad series. Problem-solving at the level that separates good from exceptional.' },
              { n: '04', title: 'Selective Entry and Scholarship Exams Weekly Classes', desc: 'Weekly coaching for HAST, Suzanne Cory, Melbourne High, and private-school scholarships. We know what the markers want.' },
              { n: '05', title: 'Medical School Admissions', desc: 'UCAT, interview technique, and portfolio preparation for Bond, Monash, UNSW and beyond. Guided by a current medical student who has been through the process.' },
            ].map(s => (
              <div className="service-card card-lift" key={s.n}>
                <span className="service-num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

```

- [ ] **Step 2: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add Services section to home page"
```

---

## Task 5: Home page — Method section

**Files:**
- Modify: `app/page.tsx` (insert after `{/* WHY TITANIUM */}` section, before `{/* TESTIMONIALS */}`)

- [ ] **Step 1: Insert Method section**

Find the comment `{/* TESTIMONIALS` in `app/page.tsx` and insert the following block **immediately before** it:

```tsx
      {/* PÓLYA METHOD */}
      <section className="polya">
        <div className="polya-inner">
          <div className="section-header fade-in">
            <span className="eyebrow">The Pólya Method</span>
            <h2 className="section-title">Understand. Plan. Execute. Reflect.</h2>
            <p className="lead" style={{ marginTop: 14 }}>Inspired by George Pólya&apos;s <em>How to Solve It</em> — four steps we apply to every student, every week.</p>
            <div className="section-rule" />
          </div>
          <div className="polya-grid">
            {[
              { n: '01', t: 'Understand', b: 'Diagnose exactly where the student is — strengths, gaps, and how they think about problems.' },
              { n: '02', t: 'Plan', b: 'Build a personalised strategy: which topics to drill, which methods to rehearse, in what order.' },
              { n: '03', t: 'Execute', b: 'Weekly sessions, worksheets and topic tests. The work is visible and the pace is measurable.' },
              { n: '04', t: 'Reflect', b: 'Review every result. Adjust the plan. Repeat until the target is reached.' },
            ].map(s => (
              <div className="polya-card" key={s.n}>
                <span className="polya-step">Step {s.n}</span>
                <h3>{s.t}</h3>
                <p>{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

```

- [ ] **Step 2: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add Method section to home page"
```

---

## Task 6: Home page — expand testimonials to 4

**Files:**
- Modify: `app/page.tsx` (lines ~49–53)

- [ ] **Step 1: Replace testimonials array**

Find the `testimonials` array in `app/page.tsx`:
```tsx
  const testimonials = [
    { q: 'The Accelerate Methods program helped me build amazing skills to crush VCE Methods. The regular worksheets, tests and assessments helped a lot with application-style questions. The Exam Tracker was especially helpful in the lead-up to the exams.', name: 'Alex Fazzioni', badge: 'ATAR 98.55' },
    { q: "Before joining Titanium, I was struggling with essays and tricky maths problems, but my tutor broke things down step by step. The English Writing Mastery program taught me to write essays that stood out. I wouldn't have made it this far without their support.", name: 'Jasmine Manning', badge: 'Scholarship' },
  ]
```
Replace with:
```tsx
  const testimonials = [
    { q: 'The Accelerate Methods program helped me build amazing skills to crush VCE Methods. The regular worksheets, tests and assessments helped a lot with application-style questions. The Exam Tracker was especially helpful in the lead-up to the exams.', name: 'Alex Fazzioni', badge: 'ATAR 98.55' },
    { q: "Before joining Titanium, I was struggling with essays and tricky maths problems, but my tutor broke things down step by step. The English Writing Mastery program taught me to write essays that stood out. I wouldn't have made it this far without their support.", name: 'Jasmine Manning', badge: 'Scholarship' },
    { q: 'Thanks to Titanium, I got into John Monash Science School. The tutors made tricky maths and science concepts easy to understand and gave me great practice tests with detailed feedback. Their support boosted my confidence and kept me calm during the exam.', name: 'Undisclosed', badge: 'John Monash Science School' },
    { q: 'Thanks to Titanium, I was accepted into Bond Medicine. Their guidance and personalised support made all the difference in preparing for the entrance exams and interviews. My tutor kept me motivated every step of the way.', name: 'Tanelle Galea', badge: 'Bond University Medicine' },
  ]
```

- [ ] **Step 2: Start dev server and verify home page**

```bash
npm run dev
```

Open http://localhost:3000. Check:
- Hero reads "Through hardships, / *to the stars.*" with gold italic serif accent
- "See Our Programs" button has ghost styling on navy (paper border, hovers to gold)
- Services section visible with 5 cards in a 3-2 grid
- Pólya Method section with 4 step cards on cream background
- Testimonials section shows 4 quote cards with 3px gold top border

Stop with Ctrl+C.

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: expand home testimonials to 4 quotes"
```

---

## Task 7: Contact page — info block and form wrapper

**Files:**
- Modify: `app/contact/page.tsx`

- [ ] **Step 1: Replace left-column info block**

In `app/contact/page.tsx`, find the `<div className="contact-info-list">` block and everything inside it. Replace the entire `.contact-info-list` div with:

```tsx
            <div style={{ marginTop: 28, padding: 24, background: 'var(--paper-raise)', borderRadius: 4, border: '1px solid var(--rule)' }}>
              <span className="eyebrow" style={{ marginBottom: 8 }}>Direct</span>
              <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--navy)' }}>+61 456 753 747</div>
              <div style={{ fontSize: 15, color: 'var(--ink-2)', marginTop: 2 }}>contact@titaniumtutoring.com</div>
              <div style={{ height: 1, background: 'var(--rule)', margin: '16px 0' }} />
              <span className="eyebrow" style={{ marginBottom: 8 }}>Locations</span>
              <div style={{ fontSize: 14, color: 'var(--ink-2)' }}>South Australia · Victoria · Online Australia-wide</div>
            </div>
```

- [ ] **Step 2: Wrap form in white shadow container**

Find the `<form className="contact-form fade-in"` opening tag. Wrap the entire `<form>…</form>` block in:

```tsx
          <div style={{ background: 'var(--white)', border: '1px solid var(--rule)', borderRadius: 4, padding: 28, boxShadow: 'var(--shadow-card)' }}>
            <form className="contact-form" action="https://formspree.io/f/YOUR_CODE" method="POST">
              {/* existing form fields unchanged */}
              <button type="submit" className="btn-primary">Send Enquiry</button>
            </form>
          </div>
```

The `fade-in` class moves from `<form>` to the wrapper `<div>`.

- [ ] **Step 3: Update submit button class**

Inside the form, find:
```tsx
            <button type="submit" className="submit-btn">Send Enquiry →</button>
```
Replace with:
```tsx
              <button type="submit" className="btn-primary">Send Enquiry</button>
```

- [ ] **Step 4: Start dev server and verify contact page**

```bash
npm run dev
```

Open http://localhost:3000/contact. Check:
- Two-column layout: left has eyebrow + title + lead + paper-raise info box
- Right has white shadow form container
- Field labels are uppercase small-tracked
- Submit button is navy fill (btn-primary)

Stop with Ctrl+C.

- [ ] **Step 5: Commit**

```bash
git add app/contact/page.tsx
git commit -m "feat: redesign contact page to two-column info + form layout"
```

---

## Task 8: About, Programs, Results — verify and spot-fix

**Files:**
- Modify: `app/about/page.tsx`, `app/programs/page.tsx`, `app/results/page.tsx` (minor only)

- [ ] **Step 1: Verify About page visually**

```bash
npm run dev
```

Open http://localhost:3000/about. The existing CSS already handles `.page-hero`, `.why`, `.journey-track`, `.insights`. Check:
- Page hero is navy with dot-grid overlay ✓
- "Why Titanium" items have hover lift ✓
- Journey steps render with gold bubbles ✓

If the about page hero `lead` text is dark (hard to read on navy), find the `<p className="lead"` inside `.page-hero-inner` and add `style={{ color: 'rgba(250,246,238,0.65)' }}`.

- [ ] **Step 2: Verify Programs page visually**

Open http://localhost:3000/programs. The `.split-card`, `.split-list`, `.services-grid`, `.polya-grid` CSS already exists. Check:
- VCE/SACE cards render with navy and cream variants ✓
- Services cards have hover lift ✓
- Pólya steps are on cream cards ✓

If the section headers are missing the gold rule, find any `<div className="section-header">` blocks and add `<div className="section-rule" />` as the last child.

- [ ] **Step 3: Verify Results page visually**

Open http://localhost:3000/results. The `.testimonial-card` CSS already includes `border-top:3px solid var(--gold)`. Check testimonial cards look identical to home page style.

Press clipping grid uses `.news-card` — check hover lift works (already in CSS).

Stop with Ctrl+C.

- [ ] **Step 4: Commit any spot fixes**

```bash
git add app/about/page.tsx app/programs/page.tsx app/results/page.tsx
git commit -m "fix: visual refresh spot fixes for About, Programs, Results"
```

(If no changes were needed, skip this step.)

---

## Task 9: Final review pass

- [ ] **Step 1: Run dev server and walk all pages**

```bash
npm run dev
```

Visit each page and check:

| Page | Key checks |
|---|---|
| `/` | Hero serif accent, 5 service cards, 4 method cards, 4 testimonials, dot-grid motto banner |
| `/programs` | Programs dropdown works on hover, closes on mouse-leave |
| `/about` | Navy hero, Why Titanium cards, journey steps |
| `/contact` | Two-column, info box, white form container, navy submit button |
| `/results` | 4 testimonials with gold top border, press clipping grid |

- [ ] **Step 2: Check mobile (resize to 375px)**

Resize browser to 375px wide. Check:
- Hamburger opens mobile menu with Programs + 4 sub-items
- Services cards stack to 1 column
- Pólya steps stack to 1 column
- Contact layout stacks to single column

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "feat: complete design system implementation for marketing site"
```
