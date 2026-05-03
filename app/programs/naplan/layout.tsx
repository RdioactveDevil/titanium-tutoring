import { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'NAPLAN Preparation Adelaide & Melbourne | Years 3, 5, 7 & 9 | Titanium Tutoring' },
  description: 'NAPLAN coaching in Adelaide & Melbourne for Years 3, 5, 7 & 9. Build numeracy & literacy fundamentals — not last-minute cramming. Book your free consult today.',
  alternates: { canonical: '/programs/naplan' },
  openGraph: {
    title: 'NAPLAN Preparation Adelaide & Melbourne | Years 3, 5, 7 & 9 | Titanium Tutoring',
    description: 'NAPLAN coaching in Adelaide & Melbourne for Years 3, 5, 7 & 9. Build numeracy & literacy fundamentals — not last-minute cramming. Book your free consult today.',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://titaniumtutoring.com.au/' },
    { '@type': 'ListItem', position: 2, name: 'Programs', item: 'https://titaniumtutoring.com.au/programs' },
    { '@type': 'ListItem', position: 3, name: 'NAPLAN Preparation', item: 'https://titaniumtutoring.com.au/programs/naplan' },
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'NAPLAN Preparation (Years 3, 5, 7 & 9)',
  description: 'NAPLAN coaching for Years 3, 5, 7 and 9. Numeracy and literacy preparation that builds fundamentals — not last-minute cramming. Personalised sessions for every year level.',
  url: 'https://www.titaniumtutoring.com.au/programs/naplan',
  inLanguage: 'en-AU',
  provider: {
    '@type': 'EducationalOrganization',
    name: 'Titanium Tutoring',
    url: 'https://www.titaniumtutoring.com.au',
  },
  educationalLevel: 'Primary and Secondary School (Years 3–9)',
  hasCourseInstance: [
    {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: 'PT1H',
    },
  ],
}

export default function NaplanLayout({ children }: { children: React.ReactNode }) {
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
