const path = require('node:path')
const test = require('node:test')
const assert = require('node:assert/strict')
const {
  auditContent,
  findUntranslatedVietnameseHeadings,
  getPromotedSlugs,
  hasMalformedTable,
  hasSkillActivity,
  validatePracticeContract,
} = require('./content-audit-lib.cjs')

const root = path.resolve(__dirname, '..')

test('all promoted content and curriculum contracts pass the content audit', () => {
  const report = auditContent(root)
  assert.deepEqual(report.issues, [])
})

test('homepage promotes a focused set of active learning destinations', () => {
  const slugs = getPromotedSlugs(root)
  assert.ok(slugs.length >= 10)
  assert.equal(new Set(slugs).size, slugs.length)
})

test('markdown-table audit ignores code fences but rejects malformed lesson tables', () => {
  assert.equal(hasMalformedTable('| Term | Meaning |\n| --- | --- |'), false)
  assert.equal(hasMalformedTable('|| Term | Meaning |\n|| --- | --- |'), true)
  assert.equal(hasMalformedTable('```md\n|| example kept as code\n```'), false)
})

test('Vietnamese heading audit is repository-wide and keeps intentional target-language labels', () => {
  assert.deepEqual(
    findUntranslatedVietnameseHeadings(
      '## Kết quả học tập\n## Writing professional communications\n### Register switch',
    ),
    ['## Writing professional communications', '### Register switch'],
  )
  assert.deepEqual(
    findUntranslatedVietnameseHeadings('## Chuyển đổi register\n### Ví dụ: Follow-up email'),
    [],
  )
})

test('all CEFR pairs complete the structured rewrite without claiming human review', () => {
  const report = auditContent(root)
  assert.equal(report.editorial.totalPairs, 90)
  assert.equal(report.editorial.rewrittenPairs, 90)
  assert.equal(report.editorial.pendingRewritePairs, 0)
  assert.equal(report.editorial.pilotReviewedPairs, 3)
  assert.equal(report.editorial.humanReviewedPairs, 0)
  assert.equal(report.editorial.genericEnglishLoops, 0)
  assert.equal(report.editorial.genericVietnameseLoops, 0)
  assert.equal(report.editorial.untranslatedVietnameseFiles, 0)
})

test('skill audit rejects metadata-only speaking and listening labels', () => {
  assert.equal(hasSkillActivity('speaking', '## Practice lab\nWrite four sentences.'), false)
  assert.equal(
    hasSkillActivity('speaking', '### Guided speaking task\nRole-play four turns.'),
    true,
  )
  assert.equal(hasSkillActivity('listening', '## Listen & repeat\nRepeat each sentence.'), false)
  assert.equal(
    hasSkillActivity('listening', '### Listening task\nListen first for the main idea.'),
    true,
  )
})

test('practice contract validates the learner-facing model, not a claimed count', () => {
  const shortWriting = '### Model response\n\n> This model is too short.\n\n### Self-check'
  assert.deepEqual(validatePracticeContract({ mode: 'writing', minWords: 10 }, shortWriting), [
    'model has 5 words; minimum is 10',
  ])

  const dialogue = [
    '### Model response',
    '',
    '> **Lead:** Could we phase the rollout?',
    '>',
    '> **PM:** What can we deliver first?',
    '>',
    '> **Lead:** We can ship the core flow Friday.',
    '>',
    '> **PM:** Let us review the rest Monday.',
    '',
    '### Self-check',
  ].join('\n')
  assert.deepEqual(
    validatePracticeContract({ mode: 'dialogue', minTurns: 4, maxTurns: 6 }, dialogue),
    [],
  )
})
