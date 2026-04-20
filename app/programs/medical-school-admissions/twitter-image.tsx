import { programOgImage, size, contentType } from '@/lib/program-og'

export { size, contentType }

export default function Image() {
  return programOgImage({
    title: 'Medical School Admissions',
    subtitle: 'UCAT · MMI · Personal Statement',
  })
}
