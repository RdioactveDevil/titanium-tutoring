import { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Middle School Tutoring | Titanium Tutoring' },
  description: 'Middle school tutoring for Years 7–9. Maths, English, NAPLAN, and selective entry prep — we close the gaps before senior school and set students up to thrive.',
  openGraph: {
    title: 'Middle School Tutoring | Titanium Tutoring',
    description: 'Middle school tutoring for Years 7–9. Maths, English, NAPLAN, and selective entry prep — we close the gaps before senior school and set students up to thrive.',
  },
}

export default function MiddleSchoolLayout({ children }: { children: React.ReactNode }) {
  return children
}
