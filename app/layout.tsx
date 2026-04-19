import type { Metadata } from 'next'
import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: { default: 'Titanium Tutoring', template: '%s | Titanium Tutoring' },
  description: 'Specialist tutoring for VCE, SACE, NAPLAN, and selective entry exams. Built by a student who scored the highest possible ATAR.',
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
