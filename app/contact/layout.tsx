import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Free Consultation | Titanium Tutoring',
  description: 'Book a free strategy call with Titanium Tutoring. We diagnose exactly where your child is losing marks and hand you a written plan to take away — no obligation.',
  alternates: { canonical: '/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
