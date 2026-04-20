import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Results | Titanium Tutoring',
  description: 'Real results from real students — ATAR scores, scholarship wins, selective school entries, medical admissions, and national competition results.',
  alternates: { canonical: '/results' },
}

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
