import { programOgImage, size, contentType } from '@/lib/program-og'

export { size, contentType }

export default function Image() {
  return programOgImage({
    title: 'Primary School Tutoring',
    subtitle: 'Years 1–6',
  })
}
