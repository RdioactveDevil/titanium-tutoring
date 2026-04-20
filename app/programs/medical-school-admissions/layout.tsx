import { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Medical School Admissions Coaching | Titanium Tutoring' },
  description: 'Expert UCAT coaching, MMI interview prep, and personal statement guidance for medical school applicants. One-on-one coaching at every stage of admission.',
  alternates: { canonical: '/programs/medical-school-admissions' },
  openGraph: {
    title: 'Medical School Admissions Coaching | Titanium Tutoring',
    description: 'Expert UCAT coaching, MMI interview prep, and personal statement guidance for medical school applicants. One-on-one coaching at every stage of admission.',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://titaniumtutoring.com.au/' },
    { '@type': 'ListItem', position: 2, name: 'Programs', item: 'https://titaniumtutoring.com.au/programs' },
    { '@type': 'ListItem', position: 3, name: 'Medical School Admissions', item: 'https://titaniumtutoring.com.au/programs/medical-school-admissions' },
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Medical School Admissions Coaching',
  description: 'Expert UCAT coaching, MMI interview prep, and personal statement guidance for medical school applicants. One-on-one coaching at every stage of admission.',
  url: 'https://www.titaniumtutoring.com.au/programs/medical-school-admissions',
  inLanguage: 'en-AU',
  provider: {
    '@type': 'EducationalOrganization',
    name: 'Titanium Tutoring',
    url: 'https://www.titaniumtutoring.com.au',
  },
  educationalLevel: 'Higher Education',
  about: [
    { '@type': 'Thing', name: 'UCAT preparation' },
    { '@type': 'Thing', name: 'MMI interview preparation' },
    { '@type': 'Thing', name: 'Medical school personal statement' },
  ],
  hasCourseInstance: [
    {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: 'PT1H',
    },
  ],
}

export default function MedicalSchoolAdmissionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
