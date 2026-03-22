import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

const rootDir = process.cwd()
const brandDir = path.join(rootDir, 'public', 'brand')

const logoMarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" role="img" aria-label="English Notehub mark">
  <defs>
    <linearGradient id="notehubGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f766e" />
      <stop offset="100%" stop-color="#0ea5a4" />
    </linearGradient>
  </defs>
  <rect x="6" y="6" width="116" height="116" rx="24" fill="#f8fafc" />
  <rect x="16" y="16" width="96" height="96" rx="18" fill="url(#notehubGradient)" />
  <rect x="34" y="34" width="60" height="60" rx="12" fill="#ffffff" opacity="0.95" />
  <path d="M46 50h20a10 10 0 0 1 10 10v18h-8V61a4 4 0 0 0-4-4H46z" fill="#0f766e" />
  <path d="M82 50h-8v28h8z" fill="#0ea5a4" />
  <circle cx="86" cy="78" r="8" fill="#0f766e" />
</svg>
`

const logoWordmarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 96" role="img" aria-label="English Notehub">
  <rect x="0" y="0" width="420" height="96" rx="20" fill="#f8fafc" />
  <g transform="translate(10,8)">
    <rect x="0" y="0" width="80" height="80" rx="18" fill="#0f766e" />
    <rect x="16" y="16" width="48" height="48" rx="10" fill="#ffffff" />
    <path d="M26 30h16a8 8 0 0 1 8 8v14h-7V39a3 3 0 0 0-3-3H26z" fill="#0f766e" />
    <path d="M55 30h-7v22h7z" fill="#0ea5a4" />
    <circle cx="58" cy="53" r="6.5" fill="#0f766e" />
  </g>
  <text x="108" y="44" fill="#0f172a" font-family="Poppins, Segoe UI, sans-serif" font-size="28" font-weight="700">ENGLISH</text>
  <text x="108" y="72" fill="#0f766e" font-family="Poppins, Segoe UI, sans-serif" font-size="28" font-weight="700">NOTEHUB</text>
</svg>
`

const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="English Notehub favicon">
  <rect x="2" y="2" width="60" height="60" rx="14" fill="#0f766e" />
  <rect x="14" y="14" width="36" height="36" rx="9" fill="#ffffff" />
  <path d="M21 24h12a6 6 0 0 1 6 6v10h-5V31a2.5 2.5 0 0 0-2.5-2.5H21z" fill="#0f766e" />
  <path d="M43 24h-5v16h5z" fill="#0ea5a4" />
  <circle cx="45" cy="40" r="4.5" fill="#0f766e" />
</svg>
`

async function run() {
  await mkdir(brandDir, { recursive: true })
  await writeFile(path.join(brandDir, 'logo-mark.svg'), logoMarkSvg, 'utf8')
  await writeFile(path.join(brandDir, 'logo-wordmark.svg'), logoWordmarkSvg, 'utf8')
  await writeFile(path.join(rootDir, 'public', 'favicon.svg'), faviconSvg, 'utf8')
  process.stdout.write('Generated logo assets in public/brand and public/favicon.svg\n')
}

run().catch((error) => {
  process.stderr.write(`${String(error)}\n`)
  process.exitCode = 1
})
