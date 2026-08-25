import { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'The MMI Simulator — Practise a Real Medicine Interview Station | Titanium Tutoring' },
  description: 'A free, timed Multiple Mini Interview simulator. Read a scenario on the prep clock, answer out loud, then see exactly what assessors score — the rubric, a strong structure, and the common mistakes. Built by Titanium Tutoring.',
  alternates: { canonical: '/resources/mmi-simulator' },
  openGraph: {
    title: 'The MMI Simulator | Titanium Tutoring',
    description: 'Run a timed Multiple Mini Interview station out loud, then see exactly what assessors are marking.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
