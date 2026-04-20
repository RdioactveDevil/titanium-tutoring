import { programOgImage, programOgData, size, contentType } from '@/lib/program-og'

export { size, contentType }

export default function Image() {
  return programOgImage(programOgData['medical-school-admissions'])
}
