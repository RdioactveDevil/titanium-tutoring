# Titanium Tutoring — Design System Implementation

*2026-04-19*

## Overview

Port the Titanium Tutoring Design System handoff into the existing Next.js marketing site. Scope is marketing pages only (no student app). All existing page content is preserved; only the visual layer changes. The home page additionally receives two new sections (Services, Method) that don't currently exist.

Source: `C:/Users/adi23/Desktop/Titanium Tutoring/handoff/titanium-tutoring-design-system/project/`

---

## 1. Global CSS & Design Tokens (`app/globals.css`)

Merge the design system's `colors_and_type.css` token set into the existing `globals.css`, preserving all site-specific component styles.

**Additions:**
- Full spacing scale: `--sp-1` (4px) through `--sp-32` (128px)
- Full radius tokens: `--r-sm` 2px · `--r-md` 4px · `--r-lg` 8px · `--r-pill` 9999px · `--r-circle` 50%
- Full shadow tokens: `--shadow-sm` · `--shadow-card` · `--shadow-lift` · `--shadow-modal` · `--shadow-inset-rule`
- Motion tokens: `--ease-out` · `--ease-in-out` · `--dur-fast` 150ms · `--dur-base` 200ms · `--dur-slow` 300ms
- Semantic colors: `--success` #2f7a44 · `--warning` #b5751a · `--danger` #a83232 · `--info` var(--navy)
- `--white: #ffffff`
- New button variant: `btn-ghost-light` — ghost button for use on navy backgrounds (paper-coloured border + text, hovers to gold)
- New button variant: `btn-primary` — navy fill, paper text (for forms)
- `.card-lift` utility class: `transition: transform 200ms, box-shadow 200ms` on hover → `translateY(-2px)` + `--shadow-lift`
- Eyebrow color updated to `--gold-600`

---

## 2. Navigation (`app/components/Nav.tsx`)

- **Programs dropdown**: on hover, reveals a menu with 4 items, all linking to `/programs`:
  - Primary School
  - Middle School
  - High School
  - Medical School Admissions
- Dropdown styled: `--paper` fill, `--ink` text, `--shadow-modal` shadow, `var(--r-md)` radius, 1px `var(--rule)` border, 8px padding
- Nav links order: Home · Programs ▾ · About · Results · Contact
- "Book a Trial" gold CTA button on right — unchanged
- Sticky, navy background, `rgba(243,190,67,0.2)` bottom border — unchanged

---

## 3. Home Page (`app/page.tsx`)

### 3a. Hero
- Headline updated: `"Through hardships,"` / `"to the stars."` — *"to the stars."* rendered in `var(--font-serif)` italic, `var(--gold)` color
- Lead copy, stats row (93% / 100% / 120+), and CTA buttons unchanged
- Second CTA button class updated to `btn-ghost-light`

### 3b. As Featured
- Visual refresh: publication names in `var(--font-serif)` 20px, "As featured on" label in `--ink-3`
- Layout unchanged

### 3c. Services Section (new)
Eyebrow: "Our Services" · Title: "Programs We Run"
Lead: "From Year 3 to Year 12 — plus specialist entry and medical admissions. Every program is built around George Pólya's problem-solving method."

Responsive grid (`repeat(auto-fill, minmax(320px, 1fr))`) of program cards — 5 cards sit cleanly at 3-2 across breakpoints. Card style: `--white` fill, 1px `--rule` border, `var(--r-md)` radius, `--shadow-card`, `.card-lift` hover. Title in display font (uppercase, navy, 19px). Body in `--ink-2` 14px. "Read more →" link in navy.

Cards (title + description in brand voice):

1. **Year 3 to Year 12 Weekly Classes** — Structured weekly sessions across all year levels and subjects. Diagnose gaps, drill fundamentals, and build the consistency that compounds into results.
2. **Year 6–Year 8 Writing Mastery Program** — Essay structure, analytical writing, and persuasive technique for the critical middle-school years. The skills that make every English assessment easier from here.
3. **Australian Mathematics Competition and Olympiads Preparation** — Targeted preparation for the AMC and Mathematics Olympiad series. Problem-solving at the level that separates good from exceptional.
4. **Selective Entry and Scholarship Exams Weekly Classes** — Weekly coaching for HAST, Suzanne Cory, Melbourne High, and private-school scholarships. We know what the markers want.
5. **Medical School Admissions** — UCAT, interview technique, and portfolio preparation for Bond, Monash, UNSW and beyond. Guided by a current medical student who has been through the process.

### 3d. Method Section (new)
Background: `--paper-raise`
Eyebrow: "The Pólya Method" · Title: "Understand. Plan. Execute. Reflect."
Lead: "Inspired by George Pólya's *How to Solve It* — four steps we apply to every student, every week."

4-column grid. Each step card: `--paper` fill, 1px `--rule` border, `var(--r-md)` radius, `--shadow-sm`. Step number in display font 13px `--gold-600` tracked. Title in display font uppercase navy 22px. Body in `--ink-2` 14px.

Steps:
- 01 Understand — Diagnose exactly where the student is — strengths, gaps, and how they think about problems.
- 02 Plan — Build a personalised strategy: which topics to drill, which methods to rehearse, in what order.
- 03 Execute — Weekly sessions, worksheets and topic tests. The work is visible and the pace is measurable.
- 04 Reflect — Review every result. Adjust the plan. Repeat until the target is reached.

### 3e. Testimonials
Expanded from 2 to 4 quotes. Card style updated: `--white` fill, `3px` solid `--gold` top border, `var(--r-md)` radius, `--shadow-card`. Quote in `var(--font-serif)` italic 17px. Footer: name bold navy + badge (11px uppercase, gold-100 background, navy-900 text).

All 4 quotes from the design system (Alex Fazzioni, Jasmine Manning, Undisclosed/John Monash, Tanelle Galea/Bond Medicine).

### 3f. Motto Banner
- Motto: **"Per Aspera Ad Astra"** — unchanged
- Background: `--navy` with `radial-gradient(rgba(243,190,67,0.1) 1px, transparent 1px)` dot grid at `24px 24px`, 50% opacity
- Display font, `--gold`, `0.22em` letter-spacing, 34px
- Translation line and CTA unchanged

---

## 4. About Page (`app/about/page.tsx`)

Visual refresh only — all existing sections and content preserved.

- Page hero: navy background with dot-grid overlay (existing `.page-hero` class preserved), eyebrow in `--gold`, title uses `.section-title`, lead in `rgba(250,246,238,0.65)`
- Team member cards (if present): circular avatar with `2px solid var(--gold)` border, `--gold-100` background for initials, display font name
- Section headers: eyebrow + display title + 80px centered gold rule (`--section-rule`)
- "Why Titanium" feature cards: refresh to `.card-lift` hover, `--shadow-card`
- Journey steps: refresh card styling to design system card pattern
- All content text unchanged

---

## 5. Contact Page (`app/contact/page.tsx`)

Two-column layout: `grid-template-columns: 1fr 1.2fr` at desktop, stacks on mobile.

**Left column:**
- Eyebrow: "Get in Touch"
- Title: "Book a Trial." (existing)
- Lead paragraph (existing)
- Info block: `--paper-raise` fill, `var(--r-md)` radius, 1px `--rule` border. Sections: Direct (phone + email), Locations. Eyebrow labels above each.

**Right column (form):**
- Container: `--white` fill, `--shadow-card`, `var(--r-md)` radius, 28px padding
- Field labels: 11px uppercase, `0.14em` tracking, `--ink-2`
- Inputs: `--white` fill, 1px `--rule-strong` border, `var(--r-md)` radius, 14px font
- Submit button: `btn-primary` (navy fill)
- Existing form fields and `action` attribute unchanged

---

## 6. Programs Page (`app/programs/page.tsx`)

Visual refresh only — all existing sections and content preserved.

- Page hero: refresh to design system pattern
- VCE/SACE split cards: refresh borders, shadows, hover to `.card-lift`
- Services list cards: refresh to design system card pattern (display font titles, `--shadow-card`)
- Pólya steps: refresh to match home page Method section style
- All content unchanged

---

## 7. Results Page (`app/results/page.tsx`)

Visual refresh only — all existing sections and content preserved.

- Testimonial cards: updated to `--white` fill + `3px` top `--gold` border (matching home style)
- Press clipping grid: visual refresh (card borders, shadows)
- All content unchanged

---

## Non-goals

- No pricing page or tiers
- No student app (Dashboard, Booking, Lesson screens)
- No changes to existing page content or copy (except home hero headline and new home sections)
- No Sifonn Pro → woff2 conversion (otf is fine for now)
- No new pages added

---

## Files changed

| File | Change |
|---|---|
| `app/globals.css` | Token additions + new utility classes |
| `app/components/Nav.tsx` | Programs dropdown |
| `app/page.tsx` | Hero update, Services section, Method section, Testimonials expand, MottoBanner update |
| `app/about/page.tsx` | Visual refresh |
| `app/contact/page.tsx` | Two-column layout |
| `app/programs/page.tsx` | Visual refresh |
| `app/results/page.tsx` | Testimonial card style update |
