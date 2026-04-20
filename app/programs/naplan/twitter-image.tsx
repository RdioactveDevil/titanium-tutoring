import { programOgImage, size, contentType } from '@/lib/program-og'

export { size, contentType }

export default function Image() {
  return programOgImage({
    title: 'NAPLAN Preparation',
    subtitle: 'Years 3, 5, 7 & 9',
  })
}
