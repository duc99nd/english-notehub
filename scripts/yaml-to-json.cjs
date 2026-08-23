#!/usr/bin/env node
/**
 * Convert all YAML frontmatter in docs/en and docs/vn markdown files to
 * JSON frontmatter. The body markdown is left untouched.
 *
 * YAML→JSON pitfalls handled here:
 *
 * - Block scalars using `|` become plain strings with embedded `\n`.
 * - Booleans / numbers / arrays keep their JSON types.
 * - Unquoted strings that contain `:`, `"`, `'`, or Vietnamese text are
 *   passed through JSON.stringify, which escapes them correctly.
 * - `match` quiz blocks whose `options:` list uses the broken
 *   `"key" - "value"` form are downgraded to a `fill` quiz. The
 *   schema (`QuizItem.options: string[]`) cannot represent pairs, so
 *   preserving them as `match` would silently lose data at render time.
 *
 * Run as:  node scripts/yaml-to-json.cjs
 *
 * After running, verify with:  node scripts/check-frontmatter.cjs
 */

const matter = require('gray-matter')
const fs = require('fs')
const { execSync } = require('child_process')

const files = execSync('git ls-files docs/en/ docs/vn/').toString().trim().split('\n')

let converted = 0
let skipped = 0
let fixed = 0
const log = []

/**
 * Normalize a parsed YAML/JSON value for JSON.stringify. gray-matter may
 * return Date instances for date-typed fields, which we want to keep as
 * ISO strings.
 */
function normalize(value) {
  if (value === null || value === undefined) return value
  if (Array.isArray(value)) return value.map(normalize)
  if (value instanceof Date) return value.toISOString()
  if (typeof value === 'object') {
    const out = {}
    for (const [k, v] of Object.entries(value)) out[k] = normalize(v)
    return out
  }
  return value
}

/**
 * Detect `match` quiz blocks whose options use the broken `"key" - "value"`
 * form. Returns true when at least one option line contains ` - "` (the
 * quoted dash string we cannot represent as a plain string[]).
 */
function hasBrokenMatchOptions(parsed) {
  if (!parsed.data.quiz || !Array.isArray(parsed.data.quiz)) return false
  for (const item of parsed.data.quiz) {
    if (item.type !== 'match') continue
    if (!Array.isArray(item.options)) continue
    for (const opt of item.options) {
      if (typeof opt === 'string' && opt.includes(' - ')) return true
    }
  }
  return false
}

/**
 * Downgrade a `match` quiz block to a `fill` quiz. We discard the
 * broken `options` list and keep only `prompt` + `answer`, which is what
 * the renderer can actually use.
 */
function downgradeMatchToFill(quiz) {
  return quiz.map((item) => {
    if (item.type !== 'match') return item
    const { type: _type, options: _options, ...rest } = item
    return { ...rest, type: 'fill' }
  })
}

for (const file of files) {
  if (!file.endsWith('.md')) continue
  const original = fs.readFileSync(file, 'utf-8')

  // Skip files without frontmatter — they intentionally use FILE_META.
  if (!original.trimStart().startsWith('---')) {
    skipped++
    continue
  }

  let parsed
  try {
    parsed = matter(original)
  } catch (err) {
    skipped++
    log.push(`${file}: parse failed — ${String(err.message).split('\n')[0]}`)
    continue
  }

  const data = normalize(parsed.data)
  if (hasBrokenMatchOptions(parsed)) {
    data.quiz = downgradeMatchToFill(data.quiz)
    fixed++
  }

  // Pretty-print JSON with 2-space indent for human readability.
  const jsonBlock = JSON.stringify(data, null, 2)
  const body = parsed.content

  // Reassemble. Leading newline after `---` matches the prior YAML style
  // and keeps the markdown body intact.
  const newFile = `---\n${jsonBlock}\n---\n${body}`

  if (newFile !== original) {
    fs.writeFileSync(file, newFile, 'utf-8')
    converted++
  }
}

console.log(`CONVERTED: ${converted}   SKIPPED: ${skipped}   MATCH FIXED: ${fixed}`)
for (const line of log) console.log(line)
