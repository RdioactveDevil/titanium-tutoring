import { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'UCAT Preparation Adelaide & Melbourne | Titanium Tutoring' },
  description: 'Expert UCAT coaching in Adelaide & Melbourne. All five subtests: Verbal Reasoning, Decision Making, Quantitative Reasoning, Abstract Reasoning & SJT. Book a free consultation.',
  alternates: { canonical: '/programs/medical-school-admissions/ucat-preparation' },
  openGraph: {
    title: 'UCAT Preparation Adelaide & Melbourne | Titanium Tutoring',
    description: 'Expert UCAT coaching in Adelaide & Melbourne. All five subtests: Verbal Reasoning, Decision Making, Quantitative Reasoning, Abstract Reasoning & SJT. Book a free consultation.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'UCAT Preparation',
  description: 'Expert UCAT coaching covering all five subtests: Verbal Reasoning, Decision Making, Quantitative Reasoning, Abstract Reasoning, and Situational Judgement. In-person in Adelaide and Melbourne, or fully online.',
  url: 'https://www.titaniumtutoring.com.au/programs/medical-school-admissions/ucat-preparation',
  inLanguage: 'en-AU',
  provider: {
    '@type': 'EducationalOrganization',
    name: 'Titanium Tutoring',
    url: 'https://www.titaniumtutoring.com.au',
  },
  educationalLevel: 'Tertiary Entrance',
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

export default function UcatLayout({ children }: { children: React.ReactNode }) {
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
