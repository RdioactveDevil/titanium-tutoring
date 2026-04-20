import { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Exam Strategy & Mindset | Titanium Tutoring' },
  description: 'Time management, stress resilience, and high-stakes exam technique for all year levels. The exam skills no textbook teaches — coached by Titanium Tutoring.',
  openGraph: {
    title: 'Exam Strategy & Mindset | Titanium Tutoring',
    description: 'Time management, stress resilience, and high-stakes exam technique for all year levels. The exam skills no textbook teaches — coached by Titanium Tutoring.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Exam Strategy & Mindset',
  description: 'Time management, stress resilience, and high-stakes exam technique for all year levels. The exam skills no textbook teaches — coached by Titanium Tutoring.',
  url: 'https://www.titaniumtutoring.com.au/programs/exam-strategy',
  inLanguage: 'en-AU',
  provider: {
    '@type': 'EducationalOrganization',
    name: 'Titanium Tutoring',
    url: 'https://www.titaniumtutoring.com.au',
  },
  educationalLevel: 'All Year Levels',
  hasCourseInstance: [
    {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: 'PT1H',
    },
  ],
}

export default function ExamStrategyLayout({ children }: { children: React.ReactNode }) {
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
