import type { Metadata } from 'next'
import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { testimonials } from './data/testimonials'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://titaniumtutoring.com.au'),
  title: { default: 'Titanium Tutoring | VCE, SACE & NAPLAN Tutoring Adelaide & Melbourne', template: '%s | Titanium Tutoring' },
  description: 'Titanium Tutoring — specialist VCE, SACE & NAPLAN tutoring in Adelaide & Melbourne. Expert tutors, personalised programs, and a proven track record of results.',
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

const SCHEMA_REVIEW_COUNT = 5

const schemaReviews = testimonials
  .filter((t) => t.name !== 'Undisclosed')
  .slice(0, SCHEMA_REVIEW_COUNT)
  .map((t) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: t.name },
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    reviewBody: t.q,
  }))

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
  email: 'contact@titaniumtutoring.com',
  description:
    'Specialist tutoring for VCE, SACE, NAPLAN, and selective entry exams. A team of qualified educators and subject specialists dedicated to results.',
  areaServed: [
    { '@type': 'City', name: 'Adelaide' },
    { '@type': 'City', name: 'Melbourne' },
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
  geo: [
    {
      '@type': 'GeoCoordinates',
      latitude: -34.9285,
      longitude: 138.6007,
    },
    {
      '@type': 'GeoCoordinates',
      latitude: -37.8136,
      longitude: 144.9631,
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
  sameAs: [
    'https://www.titaniumtutoring.com',
    'https://www.facebook.com/titanium.tutoring',
    'https://www.linkedin.com/company/titanium-tutoring-au/',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    bestRating: '5',
    worstRating: '1',
    reviewCount: String(testimonials.length),
  },
  review: schemaReviews,
}

const tutoringServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Tutoring',
  name: 'Titanium Tutoring — VCE, SACE & NAPLAN Tutoring',
  url: 'https://titaniumtutoring.com.au',
  description:
    'One-on-one and small-group tutoring for students in Years 3–12, VCE, SACE, NAPLAN, selective entry, scholarship, and UCAT preparation across Adelaide, Melbourne, and online Australia-wide.',
  provider: {
    '@type': 'EducationalOrganization',
    name: 'Titanium Tutoring',
    url: 'https://titaniumtutoring.com.au',
    telephone: '+61456753747',
    email: 'contact@titaniumtutoring.com',
  },
  areaServed: [
    { '@type': 'City', name: 'Adelaide' },
    { '@type': 'City', name: 'Melbourne' },
    { '@type': 'AdministrativeArea', name: 'South Australia' },
    { '@type': 'AdministrativeArea', name: 'Victoria' },
    { '@type': 'Country', name: 'Australia' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tutoring Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'VCE Tutoring',
          description: 'Specialist tutoring for Victorian Certificate of Education subjects, coached to the specific VCE study design and exam format.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SACE Tutoring',
          description: 'Specialist tutoring for South Australian Certificate of Education subjects, coached to the SACE performance standards and assessment tasks.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'NAPLAN Preparation',
          description: 'Targeted NAPLAN preparation for Years 3, 5, 7, and 9 covering literacy and numeracy.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Selective Entry & Scholarship Exam Preparation',
          description: 'Intensive preparation for selective-entry high school and scholarship exams across South Australia and Victoria.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'UCAT & Medical School Admissions Preparation',
          description: 'Comprehensive UCAT coaching and medical school interview preparation for aspiring medical students.',
        },
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(tutoringServiceJsonLd) }}
        />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
