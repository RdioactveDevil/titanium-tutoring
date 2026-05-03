import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Student Results & Success Stories | Titanium Tutoring Adelaide & Melbourne' },
  description: 'Real results from Titanium Tutoring students — top ATAR scores, scholarship wins, selective school entries, UCAT success & national competition results.',
  alternates: { canonical: '/results' },
  openGraph: {
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: 'Titanium Tutoring Student Results' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-default.jpg'],
  },
}

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
