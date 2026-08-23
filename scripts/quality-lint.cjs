#!/usr/bin/env node
/**
 * Content-quality lint for lessons in docs/en and docs/vn.
 *
 * Runs structural checks on every markdown file's frontmatter and body
 * and prints a per-lesson score plus the failing criteria. Useful for
 * identifying thin or template-fill lessons that need rewriting.
 *
 * Quality criteria (per level):
 *
 *   wordCount       minimum body word count; level-dependent because
 *                   beginner lessons can be shorter and advanced lessons
 *                   should carry more nuance.
 *   hasContext      a dialogue, scenario, worked example, or reading input.
 *                   Different skills need different kinds of authentic input.
 *   hasActivity     a "try it" / "your turn" / "write" section so the
 *                   learner has somewhere to apply the lesson.
 *   hasPatternBox   a blockquote starting with `**Pattern**` so the
 *                   grammar / formula is visually distinct.
 *   quizDiversity   at least two distinct quiz `type` values. Three
 *                   identical `fill` items don't actually test different
 *                   skills.
 *   audioScript     an audioScript string in the frontmatter with at
 *                   least two sentences. Single sentences are useless
 *                   for listening practice.
 *   noEmptyRows     no table rows that are visually empty (template
 *                   filler like `| | | |`). These tend to ship with
 *                   markdown templates that were never filled in.
 *
 * Run as:  node scripts/quality-lint.cjs
 *           node scripts/quality-lint.cjs --level=A1
 *           node scripts/quality-lint.cjs --json
 *
 * Exit code is 0 always; this is an inspection tool, not a hard gate.
 */

const fs = require('fs')
const matter = require('gray-matter')
const { execSync } = require('child_process')

const argv = process.argv.slice(2)
const levelFilter = (() => {
  const arg = argv.find((a) => a.startsWith('--level='))
  return arg ? arg.slice('--level='.length) : null
})()
const jsonOutput = argv.includes('--json')

// Minimum body-word counts for micro-lessons after practice is included.
// Depth rises with level, but word count is only one signal and must be
// paired with a plausible duration rather than rewarded without a ceiling.
const minWordsByLevel = {
  A1: 250,
  A2: 350,
  B1: 450,
  B2: 450,
  C1: 500,
  C2: 550,
}

const files = execSync('git ls-files docs/en/ docs/vn/')
  .toString()
  .trim()
  .split('\n')
  .filter((f) => f.endsWith('.md'))

const reports = []

for (const file of files) {
  const raw = fs.readFileSync(file, 'utf-8')
  if (!raw.trimStart().startsWith('---')) continue

  let parsed
  try {
    parsed = matter(raw)
  } catch {
    reports.push({
      file,
      parseError: true,
      score: 0,
      issues: ['PARSE_FAILED'],
    })
    continue
  }

  const data = parsed.data
  const body = parsed.content
  const isCurriculum = /^[ABC][12]-/.test(file.replace(/^docs\/(en|vn)\//, ''))

  const lvl = data.level || data.cefr || '?'
  if (levelFilter && lvl !== levelFilter) continue

  const bodyText = body.replace(/```[\s\S]*?```/g, ' ').replace(/\|/g, ' ')
  const wordCount = bodyText.split(/\s+/).filter((w) => w.length).length
  const minWords = minWordsByLevel[lvl] ?? 400

  // Detect dialogue: lines containing a speaker label like `Anna:` or
  // `**Anna**:` (with optional markdown bold). We allow the label to
  // appear anywhere in the body because dialogues are usually formatted
  // as blockquotes, lists, or plain lines.
  const hasDialogue =
    /\*\*[A-Z][a-zA-Z]+:\*\*\s/.test(body) || /\*\*?[A-Z][a-zA-Z]+(?:\*\*?)?:\s/.test(body)
  const hasContext =
    hasDialogue ||
    /(^|\n)#{2,3}\s+(scenario|the situation|reading|example|worked example|kịch bản|tình huống|bài đọc|ví dụ)/im.test(
      body,
    )
  const hasActivity =
    /\b(try it|your turn|write a|writing prompt|practice:|exercise:|now you try|đến lượt|thử viết|luyện tập|tự kiểm)\b/i.test(
      body,
    )
  const hasPatternBox = /\*\*Pattern\b|\*\*Mẫu[^\*]*?\*\*|\*\*Pattern\s+[A-Z]/i.test(body)
  const emptyRows = (body.match(/^\|[ \t]*\|[ \t]*\|?[ \t]*$/gm) || []).length
  const h2Count = (body.match(/^## /gm) || []).length
  const h3Count = (body.match(/^### /gm) || []).length

  const quiz = Array.isArray(data.quiz) ? data.quiz : []
  const quizTypes = new Set(quiz.map((q) => q?.type).filter(Boolean))
  const quizDiversity = quizTypes.size

  const audioScript = typeof data.audioScript === 'string' ? data.audioScript : ''
  const audioSentences = audioScript
    .split(/[.!?\n]+/)
    .map((s) => s.trim())
    .filter(Boolean).length

  const issues = []
  if (wordCount < minWords) issues.push(`LOW_WORDS(${wordCount}/${minWords})`)
  if (isCurriculum && !hasContext) issues.push('NO_CONTEXT')
  if (isCurriculum && !hasActivity) issues.push('NO_ACTIVITY')
  if (isCurriculum && !hasPatternBox && ['A1', 'A2'].includes(lvl)) issues.push('NO_PATTERN')
  if (isCurriculum && quizDiversity < 2) issues.push(`QUIZ_MONOTONE(${quizDiversity})`)
  if (isCurriculum && audioSentences < 2) issues.push(`AUDIO_THIN(${audioSentences})`)
  if (emptyRows > 0) issues.push(`EMPTY_ROWS(${emptyRows})`)

  // Score: 100 minus weighted penalties. Each unmet criterion costs 15.
  // wordCount is harsher (-25) because thin content is the headline
  // problem across the new A1-C2 set.
  let score = 100
  if (wordCount < minWords) score -= 25
  if (isCurriculum && !hasContext) score -= 15
  if (isCurriculum && !hasActivity) score -= 15
  if (isCurriculum && !hasPatternBox && ['A1', 'A2'].includes(lvl)) score -= 10
  if (isCurriculum && quizDiversity < 2) score -= 15
  if (isCurriculum && audioSentences < 2) score -= 5
  if (emptyRows > 0) score -= 15

  reports.push({
    file: file.replace(/^docs\/(en|vn)\//, ''),
    lang: file.startsWith('docs/vn/') ? 'vn' : 'en',
    level: lvl,
    skill: data.skill ?? null,
    score,
    wordCount,
    minWords,
    h2Count,
    h3Count,
    quizCount: quiz.length,
    quizTypes: [...quizTypes].sort(),
    audioSentences,
    isCurriculum,
    hasContext,
    hasDialogue,
    hasActivity,
    hasPatternBox,
    emptyRows,
    issues,
  })
}

// Sort: lowest score first so worst offenders surface immediately.
reports.sort((a, b) => a.score - b.score)

if (jsonOutput) {
  console.log(JSON.stringify(reports, null, 2))
  process.exit(0)
}

const tier = (score) => {
  if (score >= 80) return 'GOOD   '
  if (score >= 60) return 'OK     '
  if (score >= 40) return 'THIN   '
  return 'CRITICAL'
}

console.log('TIER    SCORE  WORDS   ISSUES                              FILE')
console.log('-'.repeat(96))
for (const r of reports) {
  const issues = r.issues.length ? r.issues.join(' ').padEnd(36).slice(0, 36) : '-'.padEnd(36)
  console.log(
    `${tier(r.score)} ${String(r.score).padStart(3)}    ${String(r.wordCount).padStart(5)}    ${issues}  ${r.file}`,
  )
}

// Aggregate stats by tier for a quick health check.
const counts = { GOOD: 0, OK: 0, THIN: 0, CRITICAL: 0 }
for (const r of reports) {
  const t = tier(r.score).trim()
  counts[t]++
}
console.log()
console.log(
  `GOOD: ${counts.GOOD}   OK: ${counts.OK}   THIN: ${counts.THIN}   CRITICAL: ${counts.CRITICAL}   TOTAL: ${reports.length}`,
)
