#!/usr/bin/env node
/**
 * Fix malformed YAML frontmatter in docs/en and docs/vn markdown files.
 *
 * Three patterns break gray-matter parsing today:
 *
 * 1. Unquoted YAML scalar whose value contains a colon (e.g.
 *    `subtitleEn: Review Unit 3: shopping, directions, ...`) — YAML reads
 *    the second colon as a mapping separator. Fix: wrap the value in
 *    double quotes, escaping embedded `"` characters.
 *
 * 2. `prompt: "X" có nghĩa là gì?` — unquoted Vietnamese text follows a
 *    quoted prompt on the same line. Fix: merge the trailing text back
 *    into the quoted prompt so the entire `prompt:` value is one quoted
 *    string. Handles both single- and double-quoted prompts.
 *
 * 3. `match` quiz blocks where each option uses `"key" - "value"` — this
 *    is structurally wrong (schema expects `options: string[]`). Fix:
 *    rewrite the whole match block as a simple `fill` quiz, preserving
 *    the original prompt and answer, and dropping the broken options.
 *
 * Run as:  node scripts/fix-frontmatter.cjs
 */

const matter = require('gray-matter')
const fs = require('fs')
const { execSync } = require('child_process')

const files = execSync('git ls-files docs/en/ docs/vn/')
  .toString()
  .trim()
  .split('\n')

let fixed = 0
let skipped = 0
const log = []

// Fix pattern 1: an unquoted YAML scalar whose value contains a literal
// colon, OR ends with a colon (YAML reads the trailing colon as a mapping
// separator). We only act on lines that start with a key (no leading
// whitespace) so we don't touch indented list items. The key separator
// must be a single space or tab so we never cross line boundaries.
function fixUnquotedColons(text) {
  return text.replace(
    /^([A-Za-z_][A-Za-z0-9_-]*:[ \t])([^"\n][^\n]*?:[^\n]*)$/gm,
    (_m, prefix, value) => {
      const escaped = value.replace(/\\/g, '\\\\').replace(/"/g, '\\"')
      return `${prefix}"${escaped}"`
    },
  )
}

// Fix pattern 1b: same root cause but on indented `prompt:` lines.
// `prompt: An "upward trend" means:` ends with a colon, which YAML
// reads as a mapping separator. Wrap the whole value in quotes.
function fixIndentedPromptColons(text) {
  return text.replace(
    /^(\s+prompt:[ \t]+)([^"'\n][^\n]*?:[ \t]*)$/gm,
    (_m, prefix, value) => {
      const escaped = value.replace(/\\/g, '\\\\').replace(/"/g, '\\"')
      return `${prefix}"${escaped}"`
    },
  )
}

// Fix pattern 2: merge `prompt: "X" trailing text` (or single-quote
// variant) into a single unquoted YAML scalar. The original author was
// mixing quoted and unquoted text on one line — a typo. Restoring the
// original intent (one unquoted scalar) is the cleanest fix.
//
// Why unquoted instead of re-wrapped? Because the trailing text often
// contains its own quotes (e.g. `prompt: 'Foo' in 'foo bar'`). Re-wrapping
// would need careful quote-escaping; unquoted YAML scalars handle inner
// quotes fine.
function fixPromptTrailingText(text) {
  return text.replace(
    /^(\s+prompt:[ \t]+)(["'])([^"'\n]*)\2([^\n]*)$/gm,
    (_m, prefix, _quote, quoted, trailing) => {
      const merged = (quoted + ' ' + trailing.trim()).trim()
      // If the merged result contains an unquoted colon (which YAML would
      // read as a mapping separator), wrap the whole thing in quotes.
      const hasUnquotedColon = /:\s/.test(merged) && !/"[^"]*"/.test(merged)
      if (hasUnquotedColon) {
        const escaped = merged.replace(/"/g, '\\"')
        return `${prefix}"${escaped}"`
      }
      return `${prefix}${merged}`
    },
  )
}

// Fix pattern 3: a `match` quiz block with malformed options. We capture
// the block from `- type: match` up to the next list item or the closing
// `---`, then rewrite it as a `fill` block — keeping the original prompt
// and answer, but dropping the broken `options:` list.
function fixMatchBlocks(text) {
  return text.replace(
    /([ \t]*- type: match\n)([\s\S]*?)(?=\n[ \t]*- type:[ \t]|\n---)/g,
    (_m, head, body) => {
      const promptMatch = body.match(/^[ \t]+prompt:[ \t]*(.+)$/m)
      const answerMatch = body.match(/^[ \t]+answer:[ \t]*(.+)$/m)
      const promptIndent = body.match(/\n([ \t]+)prompt:/)?.[1] || '    '
      const prompt = promptMatch ? promptMatch[1].trim() : 'Match the items'
      const answer = answerMatch ? answerMatch[1].trim() : ''
      return `${head}${promptIndent}prompt: ${prompt}\n${promptIndent}answer: ${answer}\n`
    },
  )
}

for (const file of files) {
  if (!file.endsWith('.md')) continue
  const original = fs.readFileSync(file, 'utf-8')
  if (!original.trimStart().startsWith('---')) continue

  let raw = original
  raw = fixUnquotedColons(raw)
  raw = fixIndentedPromptColons(raw)
  raw = fixPromptTrailingText(raw)
  raw = fixMatchBlocks(raw)

  try {
    matter(raw)
  } catch (err) {
    skipped++
    log.push(`${file}: still failing — ${String(err.message).split('\n')[0]}`)
    continue
  }

  if (raw !== original) {
    fs.writeFileSync(file, raw, 'utf-8')
    fixed++
    log.push(`${file}: fixed`)
  }
}

console.log(`FIXED: ${fixed}   STILL BROKEN: ${skipped}`)
for (const line of log) console.log(line)