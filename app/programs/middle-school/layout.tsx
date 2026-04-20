import { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Middle School Tutoring | Titanium Tutoring' },
  description: 'Middle school tutoring for Years 7–9. Maths, English, NAPLAN, and selective entry prep — we close the gaps before senior school and set students up to thrive.',
  alternates: { canonical: '/programs/middle-school' },
  openGraph: {
    title: 'Middle School Tutoring | Titanium Tutoring',
    description: 'Middle school tutoring for Years 7–9. Maths, English, NAPLAN, and selective entry prep — we close the gaps before senior school and set students up to thrive.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Middle School Tutoring (Years 7–9)',
  description: 'Middle school tutoring for Years 7–9. Maths, English, NAPLAN, and selective entry prep — we close the gaps before senior school and set students up to thrive.',
  url: 'https://www.titaniumtutoring.com.au/programs/middle-school',
  inLanguage: 'en-AU',
  provider: {
    '@type': 'EducationalOrganization',
    name: 'Titanium Tutoring',
    url: 'https://www.titaniumtutoring.com.au',
  },
  educationalLevel: 'Middle School (Years 7–9)',
  hasCourseInstance: [
    {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: 'PT1H',
    },
  ],
}

export default function MiddleSchoolLayout({ children }: { children: React.ReactNode }) {
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
