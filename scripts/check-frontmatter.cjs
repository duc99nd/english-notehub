const matter = require('gray-matter')
const fs = require('fs')
const { execSync } = require('child_process')

const files = execSync('git ls-files docs/en/ docs/vn/')
  .toString()
  .trim()
  .split('\n')

const counts = {}

for (const f of files) {
  if (!f.endsWith('.md')) continue
  const raw = fs.readFileSync(f, 'utf-8')
  if (!raw.trimStart().startsWith('---')) continue
  let m
  try {
    matter(raw)
    continue
  } catch (err) {
    m = String(err.message).split('\n')[0]
  }
  let key = m
  if (m.includes('block mapping entry')) key = 'block-mapping-entry'
  else if (m.includes('incomplete explicit mapping pair')) key = 'incomplete-mapping-pair'
  else if (m.includes('bad indentation')) key = 'bad-indentation'
  counts[key] = (counts[key] || 0) + 1
}

console.log(counts)