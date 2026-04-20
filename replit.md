# Titanium Tutoring — Project Overview

## Stack
- **Framework**: Next.js 15 (App Router), TypeScript
- **Styling**: Global CSS (`app/globals.css`) — no Tailwind
- **Package manager**: npm
- **Runtime port**: 5000

## Key Pages
| Route | File |
|---|---|
| `/` | `app/page.tsx` |
| `/about` | `app/about/page.tsx` |
| `/contact` | `app/contact/page.tsx` |
| `/results` | `app/results/page.tsx` |
| `/programs/*` | `app/programs/[slug]/page.tsx` |

## Environment Variables / Secrets

| Key | Where set | Purpose |
|---|---|---|
| `NEXT_PUBLIC_FORMSPREE_ID` | Replit Secrets | Formspree form ID for the consultation form on `/contact`. Value is the ID segment from your Formspree endpoint URL (e.g. `abcd1234` from `https://formspree.io/f/abcd1234`). Must be set for form submissions to reach the inbox. |
| `SESSION_SECRET` | Replit Secrets | Session signing secret |
| `NEXT_PUBLIC_APP_URL` | Replit Secrets | Public URL of the app |

## Consultation Form (`/contact`)
The form at `/contact#consult-form` submits via `fetch` to `https://formspree.io/f/${NEXT_PUBLIC_FORMSPREE_ID}`.

- On success: shows an inline confirmation message
- On error: shows an error banner with a direct email fallback
- If `NEXT_PUBLIC_FORMSPREE_ID` is not set: fails immediately with a clear console error and shows the error state

To wire a new email address, log into [formspree.io](https://formspree.io), update the form's destination email, and update the `NEXT_PUBLIC_FORMSPREE_ID` secret if the form ID changes.
