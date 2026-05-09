import { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Blog | VCE, SACE, UCAT & NAPLAN Tips | Titanium Tutoring' },
  description: 'Expert study tips, exam strategies, and subject guides for VCE, SACE, UCAT, NAPLAN, and selective entry — from the Titanium Tutoring team in Adelaide and Melbourne.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | VCE, SACE, UCAT & NAPLAN Tips | Titanium Tutoring',
    description: 'Expert study tips, exam strategies, and subject guides for VCE, SACE, UCAT, NAPLAN, and selective entry — from the Titanium Tutoring team in Adelaide and Melbourne.',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
