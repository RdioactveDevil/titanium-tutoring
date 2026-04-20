import { programOgImage, size, contentType } from '@/lib/program-og'

export { size, contentType }

export default function Image() {
  return programOgImage({
    title: 'Middle School Tutoring',
    subtitle: 'Years 7–9',
  })
}
