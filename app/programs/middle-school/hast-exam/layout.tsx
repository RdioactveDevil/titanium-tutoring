import { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'HAST Exam Coaching Adelaide & Melbourne | Titanium Tutoring' },
  description: 'Expert HAST exam coaching in Adelaide & Melbourne for selective school entry. Abstract reasoning, verbal reasoning, quantitative thinking & written expression. Book a free trial.',
  alternates: { canonical: '/programs/middle-school/hast-exam' },
  openGraph: {
    title: 'HAST Exam Coaching Adelaide & Melbourne | Titanium Tutoring',
    description: 'Expert HAST exam coaching in Adelaide & Melbourne for selective school entry. Abstract reasoning, verbal reasoning, quantitative thinking & written expression. Book a free trial.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'HAST Exam Coaching',
  description: 'Selective entry exam coaching for the HAST (Humanities and Social Sciences, Aptitude, Science and Technology Test) used for Year 10 selective school entry in South Australia and Victoria.',
  url: 'https://www.titaniumtutoring.com.au/programs/middle-school/hast-exam',
  inLanguage: 'en-AU',
  provider: {
    '@type': 'EducationalOrganization',
    name: 'Titanium Tutoring',
    url: 'https://www.titaniumtutoring.com.au',
  },
  educationalLevel: 'Middle School (Years 8–9)',
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
    {
      '@type': 'CourseInstance',
      courseMode: 'onsite',
      location: 'Melbourne, Victoria',
      courseWorkload: 'PT1H',
    },
  ],
}

export default function HastLayout({ children }: { children: React.ReactNode }) {
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
