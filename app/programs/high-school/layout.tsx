import { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'High School Tutoring | Titanium Tutoring' },
  description: 'VCE and SACE tutoring for Years 10–12. Expert coaching in Maths, English, and all senior subjects — personalised to your curriculum, ATAR target, and timeline.',
  openGraph: {
    title: 'High School Tutoring | Titanium Tutoring',
    description: 'VCE and SACE tutoring for Years 10–12. Expert coaching in Maths, English, and all senior subjects — personalised to your curriculum, ATAR target, and timeline.',
  },
}

export default function HighSchoolLayout({ children }: { children: React.ReactNode }) {
  return children
}
