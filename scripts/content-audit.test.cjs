const path = require('node:path')
const test = require('node:test')
const assert = require('node:assert/strict')
const { auditContent, getPromotedSlugs } = require('./content-audit-lib.cjs')

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
