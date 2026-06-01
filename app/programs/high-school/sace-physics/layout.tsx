import { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'SACE Physics Tutoring Adelaide | Titanium Tutoring' },
  description: 'Expert SACE Physics tutoring in Adelaide. Stage 1 & Stage 2 coaching — motion, forces, electricity, waves, and nuclear physics mapped to SACE Board performance standards.',
  alternates: { canonical: '/programs/high-school/sace-physics' },
  openGraph: {
    title: 'SACE Physics Tutoring Adelaide | Titanium Tutoring',
    description: 'Expert SACE Physics tutoring in Adelaide. Stage 1 & Stage 2 coaching — motion, forces, electricity, waves, and nuclear physics mapped to SACE Board performance standards.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'SACE Physics Tutoring',
  description: 'Specialist SACE Physics tutoring for Stage 1 and Stage 2 in Adelaide. All topics covered to SACE Board performance standards — mechanics, electricity, waves, and modern physics.',
  url: 'https://www.titaniumtutoring.com.au/programs/high-school/sace-physics',
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

export default function SacePhysicsLayout({ children }: { children: React.ReactNode }) {
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
