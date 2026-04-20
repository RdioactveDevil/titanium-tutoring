import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Programs | Titanium Tutoring',
  description: 'Tutoring programs for every stage — primary school, middle school, VCE, SACE, selective entry, NAPLAN, medical admissions, and competition maths.',
  alternates: { canonical: '/programs' },
  openGraph: {
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: 'Titanium Tutoring Programs' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-default.jpg'],
  },
}

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
