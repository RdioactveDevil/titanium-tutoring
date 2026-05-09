import { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'SACE Mathematical Methods Tutoring Adelaide | Titanium Tutoring' },
  description: 'Expert SACE Mathematical Methods tutoring in Adelaide. Stage 1 & Stage 2 coaching to SACE Board performance standards — functions, calculus, statistics & more.',
  alternates: { canonical: '/programs/high-school/sace-methods' },
  openGraph: {
    title: 'SACE Mathematical Methods Tutoring Adelaide | Titanium Tutoring',
    description: 'Expert SACE Mathematical Methods tutoring in Adelaide. Stage 1 & Stage 2 coaching to SACE Board performance standards — functions, calculus, statistics & more.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'SACE Mathematical Methods Tutoring',
  description: 'Specialist SACE Mathematical Methods tutoring for Stage 1 and Stage 2. All topics covered to SACE Board performance standards — functions, differential calculus, integral calculus, probability, and statistics.',
  url: 'https://www.titaniumtutoring.com.au/programs/high-school/sace-methods',
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

export default function SaceMethodsLayout({ children }: { children: React.ReactNode }) {
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
