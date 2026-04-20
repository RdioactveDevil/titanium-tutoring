import { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'High School Tutoring | Titanium Tutoring' },
  description: 'VCE and SACE tutoring for Years 10–12. Expert coaching in Maths, English, and all senior subjects — personalised to your curriculum, ATAR target, and timeline.',
  openGraph: {
    title: 'High School Tutoring | Titanium Tutoring',
    description: 'VCE and SACE tutoring for Years 10–12. Expert coaching in Maths, English, and all senior subjects — personalised to your curriculum, ATAR target, and timeline.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'High School Tutoring (Years 10–12)',
  description: 'VCE and SACE tutoring for Years 10–12. Expert coaching in Maths, English, and all senior subjects — personalised to your curriculum, ATAR target, and timeline.',
  url: 'https://www.titaniumtutoring.com.au/programs/high-school',
  inLanguage: 'en-AU',
  provider: {
    '@type': 'EducationalOrganization',
    name: 'Titanium Tutoring',
    url: 'https://www.titaniumtutoring.com.au',
  },
  educationalLevel: 'High School (Years 10–12)',
  hasCourseInstance: [
    {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: 'PT1H',
    },
  ],
}

export default function HighSchoolLayout({ children }: { children: React.ReactNode }) {
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
