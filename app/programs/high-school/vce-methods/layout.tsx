import { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'VCE Mathematical Methods Tutoring Melbourne | Titanium Tutoring' },
  description: 'Expert VCE Mathematical Methods tutoring in Melbourne. Functions, calculus, probability & statistics coached to the VCAA study design. Book a free trial session.',
  alternates: { canonical: '/programs/high-school/vce-methods' },
  openGraph: {
    title: 'VCE Mathematical Methods Tutoring Melbourne | Titanium Tutoring',
    description: 'Expert VCE Mathematical Methods tutoring in Melbourne. Functions, calculus, probability & statistics coached to the VCAA study design. Book a free trial session.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'VCE Mathematical Methods Tutoring',
  description: 'Specialist VCE Mathematical Methods tutoring for Years 11 and 12. All topics covered to the VCAA study design — functions, differential calculus, integral calculus, probability, and statistics.',
  url: 'https://www.titaniumtutoring.com.au/programs/high-school/vce-methods',
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
      location: 'Melbourne, Victoria',
      courseWorkload: 'PT1H',
    },
  ],
}

export default function VceMethodsLayout({ children }: { children: React.ReactNode }) {
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
