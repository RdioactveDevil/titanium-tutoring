import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Programs | Titanium Tutoring',
  description: 'Tutoring programs for every stage — primary school, middle school, VCE, SACE, selective entry, NAPLAN, medical admissions, and competition maths.',
  alternates: { canonical: '/programs' },
}

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
