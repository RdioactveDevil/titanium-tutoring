import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Titanium Tutoring',
  description: 'Meet the team behind Titanium Tutoring — qualified teachers, university lecturers, and subject specialists dedicated to getting results for every student.',
  alternates: { canonical: '/about' },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
