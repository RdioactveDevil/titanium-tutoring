import { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'VCE & SACE Tutoring Adelaide & Melbourne | Years 10–12 | Titanium Tutoring' },
  description: 'Expert VCE & SACE tutoring in Adelaide & Melbourne for Years 10–12. Specialist coaching in Maths Methods, Physics, English & more. Book a free consultation.',
  alternates: { canonical: '/programs/high-school' },
  openGraph: {
    title: 'VCE & SACE Tutoring Adelaide & Melbourne | Years 10–12 | Titanium Tutoring',
    description: 'Expert VCE & SACE tutoring in Adelaide & Melbourne for Years 10–12. Specialist coaching in Maths Methods, Physics, English & more. Book a free consultation.',
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
