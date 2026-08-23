#!/usr/bin/env node

const path = require('node:path')
const { auditContent } = require('./content-audit-lib.cjs')

const root = path.resolve(__dirname, '..')
const report = auditContent(root)

if (process.argv.includes('--json')) {
  console.log(JSON.stringify(report, null, 2))
} else {
  for (const issue of report.issues) {
    console.error(`${issue.code}\t${issue.file}\t${issue.message}`)
  }
  console.log(
    `Content inventory: ${report.counts.en} EN, ${report.counts.vi} VI, ${report.counts.cefrPairs} CEFR pairs, ${report.counts.promotedSlugs} promoted slugs`,
  )
  console.log(`Content issues: ${report.issues.length}`)
}

process.exitCode = report.issues.length ? 1 : 0
