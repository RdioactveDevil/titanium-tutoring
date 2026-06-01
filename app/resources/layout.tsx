import { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'SACE Study Resources & Guides for South Australian Students | Titanium Tutoring' },
  description: 'Free SACE study guides and resources for South Australian students — investigation task guides, performance standards explained, subject selection advice, and pathway planning for Adelaide students.',
  alternates: { canonical: '/resources' },
  openGraph: {
    title: 'SACE Study Resources & Guides | Titanium Tutoring Adelaide',
    description: 'Free SACE study guides and resources for South Australian students — investigation task guides, performance standards explained, and subject selection advice.',
  },
}

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
