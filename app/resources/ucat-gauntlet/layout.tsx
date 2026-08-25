import { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'The UCAT Gauntlet — Feel the Real UCAT Clock | Titanium Tutoring' },
  description: 'A free, timed taste of the UCAT. Six original UCAT-style questions on the real per-question clock, then the reality of what the test demands — and how to actually prepare. Built by Titanium Tutoring.',
  alternates: { canonical: '/resources/ucat-gauntlet' },
  openGraph: {
    title: 'The UCAT Gauntlet | Titanium Tutoring',
    description: 'Six original UCAT-style questions on the real clock. Feel the speed the test demands before you decide how to prepare.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
