import type { Metadata } from 'next'
import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://titaniumtutoring.com.au'),
  title: { default: 'Titanium Tutoring', template: '%s | Titanium Tutoring' },
  description: 'Specialist tutoring for VCE, SACE, NAPLAN, and selective entry exams. A team of qualified educators and subject specialists dedicated to results.',
  alternates: { canonical: '/' },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'LocalBusiness'],
  name: 'Titanium Tutoring',
  url: 'https://titaniumtutoring.com.au',
  telephone: '+61456753747',
  email: 'admin@titaniumtutoring.com',
  description:
    'Specialist tutoring for VCE, SACE, NAPLAN, and selective entry exams. A team of qualified educators and subject specialists dedicated to results.',
  areaServed: 'Australia',
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
