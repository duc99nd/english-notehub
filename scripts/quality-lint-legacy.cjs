#!/usr/bin/env node
/**
 * Quality scan for legacy lessons that intentionally lack frontmatter
 * (these rely on FILE_META fallback in src/lib/content.ts). The linter
 * excludes them, but they are still lessons worth measuring — they
 * are the highest-quality reference content in the project.
 *
 * Reports only file size and body word count; no other criteria apply
 * because the legacy format has no frontmatter fields to check.
 *
 * Run as:  node scripts/quality-lint-legacy.cjs
 */

const fs = require('fs')
const { execSync } = require('child_process')

const files = execSync('git ls-files docs/en/ docs/vn/')
  .toString()
  .trim()
  .split('\n')
  .filter((f) => f.endsWith('.md'))

const reports = []
for (const file of files) {
  const raw = fs.readFileSync(file, 'utf-8')
  if (raw.trimStart().startsWith('---')) continue

  const body = raw.replace(/```[\s\S]*?```/g, ' ').replace(/\|/g, ' ')
  const wordCount = body.split(/\s+/).filter((w) => w.length).length
  const h2Count = (raw.match(/^## /gm) || []).length
  const h3Count = (raw.match(/^### /gm) || []).length

  reports.push({
    file: file.replace(/^docs\/(en|vn)\//, ''),
    wordCount,
    h2Count,
    h3Count,
  })
}

reports.sort((a, b) => b.wordCount - a.wordCount)

console.log('WORDS   SECTIONS  FILE')
console.log('-'.repeat(72))
for (const r of reports) {
  console.log(
    `${String(r.wordCount).padStart(5)}    ${String(r.h2Count).padStart(2)}/${String(r.h3Count).padStart(2)}      ${r.file}`,
  )
}

const total = reports.reduce((a, r) => a + r.wordCount, 0)
const avg = total / reports.length
console.log(`\nLEGACY TOTAL: ${reports.length}   AVG: ${Math.round(avg)} words`)