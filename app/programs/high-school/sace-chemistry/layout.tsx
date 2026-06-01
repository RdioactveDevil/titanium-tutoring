import { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'SACE Chemistry Tutoring Adelaide | Titanium Tutoring' },
  description: 'Expert SACE Chemistry tutoring in Adelaide. Stage 1 & Stage 2 coaching covering atomic structure, organic chemistry, equilibrium, electrochemistry, and spectroscopy — mapped to SACE Board performance standards.',
  alternates: { canonical: '/programs/high-school/sace-chemistry' },
  openGraph: {
    title: 'SACE Chemistry Tutoring Adelaide | Titanium Tutoring',
    description: 'Expert SACE Chemistry tutoring in Adelaide. Stage 1 & Stage 2 coaching covering atomic structure, organic chemistry, equilibrium, electrochemistry, and spectroscopy — mapped to SACE Board performance standards.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'SACE Chemistry Tutoring',
  description: 'Specialist SACE Chemistry tutoring for Stage 1 and Stage 2 in Adelaide. All topics covered to SACE Board performance standards — atomic structure, organic chemistry, equilibrium, electrochemistry, and spectroscopy.',
  url: 'https://www.titaniumtutoring.com.au/programs/high-school/sace-chemistry',
  inLanguage: 'en-AU',
  provider: {
    '@type': 'EducationalOrganization',
    name: 'Titanium Tutoring',
    url: 'https://www.titaniumtutoring.com.au',
  },
  educationalLevel: 'High School (Years 11–12)',
  hasCourseInstance: [
    {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: 'PT1H',
    },
    {
      '@type': 'CourseInstance',
      courseMode: 'onsite',
      location: 'Adelaide, South Australia',
      courseWorkload: 'PT1H',
    },
  ],
}

export default function SaceChemistryLayout({ children }: { children: React.ReactNode }) {
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
