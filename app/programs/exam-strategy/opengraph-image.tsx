import { programOgImage, size, contentType } from '@/lib/program-og'

export { size, contentType }

export default function Image() {
  return programOgImage({
    title: 'Exam Strategy & Mindset',
    subtitle: 'For All Year Levels',
  })
}
