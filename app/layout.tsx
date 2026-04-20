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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
