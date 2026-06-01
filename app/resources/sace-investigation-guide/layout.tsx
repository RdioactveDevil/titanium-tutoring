import { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'SACE Mathematical Methods Investigation Task Guide | Titanium Tutoring Adelaide' },
  description: 'The complete guide to the SACE Stage 2 Mathematical Methods investigation folio task — report structure, topic choice, mathematical reasoning, and how to score Performance Standard A.',
  alternates: { canonical: '/resources/sace-investigation-guide' },
  openGraph: {
    title: 'SACE Mathematical Methods Investigation Task Guide | Titanium Tutoring',
    description: 'Complete guide to the SACE Stage 2 Methods investigation folio — structure, reasoning, generalisation, and Performance Standard A criteria explained in full.',
  },
}

export default function SaceInvestigationGuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
