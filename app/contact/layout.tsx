import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Book a Free Tutoring Consultation | Adelaide & Melbourne | Titanium Tutoring' },
  description: 'Book a free tutoring consultation in Adelaide or Melbourne. We diagnose gaps, set a clear target, and hand you a written plan to take away — no obligation.',
  alternates: { canonical: '/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
