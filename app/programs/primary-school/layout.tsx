import { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Primary School Tutoring | Titanium Tutoring' },
  description: 'Expert primary school tutoring for Years 1–6. NAPLAN prep, selective entry coaching, and core skills in Maths and English — personalised to every student.',
  openGraph: {
    title: 'Primary School Tutoring | Titanium Tutoring',
    description: 'Expert primary school tutoring for Years 1–6. NAPLAN prep, selective entry coaching, and core skills in Maths and English — personalised to every student.',
  },
}

export default function PrimarySchoolLayout({ children }: { children: React.ReactNode }) {
  return children
}
