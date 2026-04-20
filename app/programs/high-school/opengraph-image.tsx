import { programOgImage, size, contentType } from '@/lib/program-og'

export { size, contentType }

export default function Image() {
  return programOgImage({
    title: 'High School Tutoring',
    subtitle: 'Years 10–12 · VCE & SACE',
  })
}
