import { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Selection Score Decoder — How Medical Schools Weight ATAR, UCAT & Interview | Titanium Tutoring' },
  description: 'A free interactive tool that reveals how ATAR, UCAT and interview combine into a medicine selection outcome at every Australian direct-entry program — and where your effort pays off most. Built by Titanium Tutoring.',
  alternates: { canonical: '/resources/selection-score-decoder' },
  openGraph: {
    title: 'The Selection Score Decoder | Titanium Tutoring',
    description: 'See how ATAR, UCAT and interview actually combine across every Australian direct-entry medicine program — and where your next 100 hours pay off most.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
