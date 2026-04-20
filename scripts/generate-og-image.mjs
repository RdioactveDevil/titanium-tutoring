import sharp from 'sharp'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const navy = '#081e6d'
const gold = '#f3be43'
const paper = '#faf6ee'

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#081e6d"/>
      <stop offset="100%" stop-color="#0a247f"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Gold accent bar left -->
  <rect x="0" y="0" width="8" height="630" fill="${gold}"/>

  <!-- Gold accent bar bottom -->
  <rect x="0" y="594" width="1200" height="8" fill="${gold}"/>

  <!-- Decorative gold circle top-right -->
  <circle cx="1100" cy="80" r="180" fill="${gold}" fill-opacity="0.08"/>
  <circle cx="1100" cy="80" r="100" fill="${gold}" fill-opacity="0.06"/>

  <!-- Decorative circle bottom-left -->
  <circle cx="100" cy="560" r="120" fill="${gold}" fill-opacity="0.05"/>

  <!-- Logo badge (white rounded rect as placeholder) -->
  <rect x="80" y="72" width="80" height="80" rx="12" fill="${gold}" fill-opacity="0.15"/>
  <text x="120" y="128" font-family="Arial, sans-serif" font-weight="900" font-size="44"
        fill="${gold}" text-anchor="middle">T</text>

  <!-- Brand name -->
  <text x="80" y="260"
        font-family="Arial Black, Arial, sans-serif"
        font-weight="900"
        font-size="76"
        fill="${paper}"
        letter-spacing="-1">Titanium</text>
  <text x="80" y="350"
        font-family="Arial Black, Arial, sans-serif"
        font-weight="900"
        font-size="76"
        fill="${gold}"
        letter-spacing="-1">Tutoring</text>

  <!-- Divider line -->
  <rect x="80" y="382" width="120" height="4" fill="${gold}" rx="2"/>

  <!-- Tagline -->
  <text x="80" y="434"
        font-family="Arial, sans-serif"
        font-weight="400"
        font-size="28"
        fill="${paper}"
        fill-opacity="0.85">Specialist tutoring for VCE, SACE, NAPLAN</text>
  <text x="80" y="472"
        font-family="Arial, sans-serif"
        font-weight="400"
        font-size="28"
        fill="${paper}"
        fill-opacity="0.85">and selective entry exams.</text>

  <!-- URL -->
  <text x="80" y="560"
        font-family="Arial, sans-serif"
        font-weight="600"
        font-size="22"
        fill="${gold}"
        fill-opacity="0.9">titaniumtutoring.com.au</text>

  <!-- Decorative dots pattern top-right area -->
  <g fill="${gold}" fill-opacity="0.18">
    <circle cx="880" cy="200" r="4"/>
    <circle cx="920" cy="200" r="4"/>
    <circle cx="960" cy="200" r="4"/>
    <circle cx="880" cy="240" r="4"/>
    <circle cx="920" cy="240" r="4"/>
    <circle cx="960" cy="240" r="4"/>
    <circle cx="880" cy="280" r="4"/>
    <circle cx="920" cy="280" r="4"/>
    <circle cx="960" cy="280" r="4"/>
    <circle cx="880" cy="320" r="4"/>
    <circle cx="920" cy="320" r="4"/>
    <circle cx="960" cy="320" r="4"/>
    <circle cx="880" cy="360" r="4"/>
    <circle cx="920" cy="360" r="4"/>
    <circle cx="960" cy="360" r="4"/>
    <circle cx="880" cy="400" r="4"/>
    <circle cx="920" cy="400" r="4"/>
    <circle cx="960" cy="400" r="4"/>
    <circle cx="1000" cy="200" r="4"/>
    <circle cx="1000" cy="240" r="4"/>
    <circle cx="1000" cy="280" r="4"/>
    <circle cx="1000" cy="320" r="4"/>
    <circle cx="1000" cy="360" r="4"/>
    <circle cx="1000" cy="400" r="4"/>
  </g>
</svg>
`

const outputPath = join(root, 'public', 'og-default.jpg')

await sharp(Buffer.from(svg))
  .jpeg({ quality: 90 })
  .toFile(outputPath)

console.log('Generated:', outputPath)
