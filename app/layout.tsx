import type { Metadata } from 'next'
import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://titaniumtutoring.com.au'),
  title: { default: 'Titanium Tutoring', template: '%s | Titanium Tutoring' },
  description: 'Specialist tutoring for VCE, SACE, NAPLAN, and selective entry exams. A team of qualified educators and subject specialists dedicated to results.',
  alternates: { canonical: '/' },
  openGraph: {
    siteName: 'Titanium Tutoring',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: 'Titanium Tutoring' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-default.jpg'],
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'LocalBusiness'],
  name: 'Titanium Tutoring',
  url: 'https://titaniumtutoring.com.au',
  logo: {
    '@type': 'ImageObject',
    url: 'https://titaniumtutoring.com.au/logo-full-badge.png',
    width: 512,
    height: 512,
  },
  image: 'https://titaniumtutoring.com.au/og-default.jpg',
  telephone: '+61456753747',
  email: 'admin@titaniumtutoring.com',
  description:
    'Specialist tutoring for VCE, SACE, NAPLAN, and selective entry exams. A team of qualified educators and subject specialists dedicated to results.',
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'South Australia' },
    { '@type': 'AdministrativeArea', name: 'Victoria' },
    { '@type': 'Country', name: 'Australia' },
  ],
  address: [
    {
      '@type': 'PostalAddress',
      addressLocality: 'Adelaide',
      addressRegion: 'SA',
      addressCountry: 'AU',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'Melbourne',
      addressRegion: 'VIC',
      addressCountry: 'AU',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tutoring Programs',
    itemListElement: [
      { '@type': 'Course', name: 'Year 3 to Year 12 Weekly Classes', provider: { '@type': 'EducationalOrganization', name: 'Titanium Tutoring' } },
      { '@type': 'Course', name: 'Year 6–Year 8 Writing Mastery Program', provider: { '@type': 'EducationalOrganization', name: 'Titanium Tutoring' } },
      { '@type': 'Course', name: 'AMC and Mathematics Olympiad Preparation', provider: { '@type': 'EducationalOrganization', name: 'Titanium Tutoring' } },
      { '@type': 'Course', name: 'Selective Entry and Scholarship Exam Preparation', provider: { '@type': 'EducationalOrganization', name: 'Titanium Tutoring' } },
      { '@type': 'Course', name: 'Medical School Admissions (UCAT & Interview Preparation)', provider: { '@type': 'EducationalOrganization', name: 'Titanium Tutoring' } },
    ],
  },
  knowsAbout: ['VCE', 'SACE', 'NAPLAN', 'Selective Entry Exams', 'Scholarship Exams', 'UCAT', 'Medical School Admissions', 'Mathematics Olympiad'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
