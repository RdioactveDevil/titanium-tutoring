import { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Primary School Tutoring | Titanium Tutoring' },
  description: 'Expert primary school tutoring for Years 1–6. NAPLAN prep, selective entry coaching, and core skills in Maths and English — personalised to every student.',
  alternates: { canonical: '/programs/primary-school' },
  openGraph: {
    title: 'Primary School Tutoring | Titanium Tutoring',
    description: 'Expert primary school tutoring for Years 1–6. NAPLAN prep, selective entry coaching, and core skills in Maths and English — personalised to every student.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Primary School Tutoring (Years 1–6)',
  description: 'Expert primary school tutoring for Years 1–6. NAPLAN prep, selective entry coaching, and core skills in Maths and English — personalised to every student.',
  url: 'https://www.titaniumtutoring.com.au/programs/primary-school',
  inLanguage: 'en-AU',
  provider: {
    '@type': 'EducationalOrganization',
    name: 'Titanium Tutoring',
    url: 'https://www.titaniumtutoring.com.au',
  },
  educationalLevel: 'Primary School (Years 1–6)',
  hasCourseInstance: [
    {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: 'PT1H',
    },
  ],
}

export default function PrimarySchoolLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
