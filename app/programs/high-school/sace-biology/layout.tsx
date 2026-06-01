import { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'SACE Biology Tutoring Adelaide | Titanium Tutoring' },
  description: 'Expert SACE Biology tutoring in Adelaide. Stage 1 & Stage 2 coaching covering cells, genetics, ecosystems, evolution, and immunology — mapped to SACE Board performance standards.',
  alternates: { canonical: '/programs/high-school/sace-biology' },
  openGraph: {
    title: 'SACE Biology Tutoring Adelaide | Titanium Tutoring',
    description: 'Expert SACE Biology tutoring in Adelaide. Stage 1 & Stage 2 coaching covering cells, genetics, ecosystems, evolution, and immunology — mapped to SACE Board performance standards.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'SACE Biology Tutoring',
  description: 'Specialist SACE Biology tutoring for Stage 1 and Stage 2 in Adelaide. All topics covered to SACE Board performance standards — cells and molecules, genetics, ecosystems, evolution, and immunology.',
  url: 'https://www.titaniumtutoring.com.au/programs/high-school/sace-biology',
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

export default function SaceBiologyLayout({ children }: { children: React.ReactNode }) {
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
