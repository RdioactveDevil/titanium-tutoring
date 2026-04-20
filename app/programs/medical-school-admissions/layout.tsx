import { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Medical School Admissions Coaching | Titanium Tutoring' },
  description: 'Expert UCAT coaching, MMI interview prep, and personal statement guidance for medical school applicants. One-on-one coaching at every stage of admission.',
  openGraph: {
    title: 'Medical School Admissions Coaching | Titanium Tutoring',
    description: 'Expert UCAT coaching, MMI interview prep, and personal statement guidance for medical school applicants. One-on-one coaching at every stage of admission.',
  },
}

export default function MedicalSchoolAdmissionsLayout({ children }: { children: React.ReactNode }) {
  return children
}
