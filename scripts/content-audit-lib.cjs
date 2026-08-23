const fs = require('node:fs')
const path = require('node:path')
const matter = require('gray-matter')

const CEFR_FILE = /^[ABC][12]-.*\.md$/
const CEFR_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
const CORE_META_KEYS = ['id', 'slug', 'level', 'unit', 'skill', 'order', 'cefr']
const VIETNAMESE_SENTENCE =
  /\b(?:tôi|mình|chúng ta|chúng tôi|bạn|đang|không|cần|hãy|sẽ|và|của|để)\b/iu

function readLessons(root, locale) {
  const dir = path.join(root, 'docs', locale)
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.md'))
    .sort()
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), 'utf8')
      const parsed = matter(raw)
      return {
        locale,
        file,
        data: parsed.data,
        body: parsed.content,
      }
    })
}

function getPromotedSlugs(root) {
  const dir = path.join(root, 'src', 'components', 'home')
  const slugs = new Set()
  for (const file of fs.readdirSync(dir).filter((name) => name.endsWith('.vue'))) {
    const source = fs.readFileSync(path.join(dir, file), 'utf8')
    const pattern =
      /(?:slug|targetDocSlug|targetSlug|mainDocSlug|relatedDocSlug):\s*['"]([^'"]+)['"]/g
    for (const match of source.matchAll(pattern)) slugs.add(match[1])
  }
  return [...slugs].sort()
}

function quizSignature(quiz) {
  if (!Array.isArray(quiz)) return []
  return quiz.map((item) => {
    if (item?.type === 'choice' && Array.isArray(item.options)) {
      return `${item.type}:${item.options.indexOf(item.answer)}`
    }
    return `${item?.type}:${String(item?.answer ?? '')
      .trim()
      .toLowerCase()}`
  })
}

function bodyWordCount(body) {
  return body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/[|#>*_`[\]()-]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length
}

function auditContent(root) {
  const issues = []
  const enLessons = readLessons(root, 'en')
  const viLessons = readLessons(root, 'vn')
  const enByFile = new Map(enLessons.map((lesson) => [lesson.file, lesson]))
  const viByFile = new Map(viLessons.map((lesson) => [lesson.file, lesson]))
  const activeSlugs = new Set(
    enLessons
      .map((lesson) => lesson.data.slug)
      .filter(Boolean)
      .map((slug) => slug.toLowerCase()),
  )

  const add = (code, file, message) => issues.push({ code, file, message })

  for (const slug of getPromotedSlugs(root)) {
    if (!activeSlugs.has(slug.toLowerCase()))
      add('BROKEN_PROMOTED_SLUG', 'src/components/home', slug)
  }

  for (const lesson of [...enLessons, ...viLessons]) {
    for (const match of lesson.body.matchAll(/\*\*([ABC][12]-[a-z0-9-]+)\*\*/gi)) {
      if (!activeSlugs.has(match[1].toLowerCase())) {
        add('BROKEN_LESSON_REFERENCE', `${lesson.locale}/${lesson.file}`, match[1])
      }
    }
  }

  for (const file of new Set([...enByFile.keys(), ...viByFile.keys()])) {
    const en = enByFile.get(file)
    const vi = viByFile.get(file)
    if (!en || !vi) {
      add('MISSING_LOCALE_PAIR', file, !en ? 'missing EN file' : 'missing VI file')
      continue
    }

    for (const key of CORE_META_KEYS) {
      if (en.data[key] !== vi.data[key]) {
        add('LOCALE_META_MISMATCH', file, `${key}: ${en.data[key]} !== ${vi.data[key]}`)
      }
    }

    if (!CEFR_FILE.test(file)) continue

    if (!CEFR_LEVELS.includes(en.data.level))
      add('INVALID_LEVEL', `en/${file}`, String(en.data.level))
    if (!en.data.categoryEn || !en.data.categoryVi)
      add('MISSING_CATEGORY', `en/${file}`, 'categoryEn/categoryVi')
    if (!Array.isArray(en.data.prerequisites))
      add('MISSING_PREREQUISITES', `en/${file}`, 'prerequisites')

    if (!en.data.audioScript || VIETNAMESE_SENTENCE.test(en.data.audioScript)) {
      add('INVALID_ENGLISH_AUDIO', `en/${file}`, 'audioScript must contain English practice input')
    }
    if (vi.data.audioScript !== en.data.audioScript) {
      add('AUDIO_PARITY', `vn/${file}`, 'Vietnamese lesson must reuse canonical English audio')
    }

    if (!Array.isArray(en.data.quiz) || en.data.quiz.length < 3) {
      add('MISSING_QUIZ', `en/${file}`, 'at least three quiz items required')
    }
    if (quizSignature(en.data.quiz).join('\u0000') !== quizSignature(vi.data.quiz).join('\u0000')) {
      add('QUIZ_ANSWER_PARITY', `vn/${file}`, 'quiz item types and correct choices must match EN')
    }

    const body = en.body.toLowerCase()
    if (!/(learning outcome|by the end|you will be able to)/.test(body)) {
      add('MISSING_OUTCOME', `en/${file}`, 'explicit learner outcome')
    }
    if (!/(practice lab|your turn|try it|writing prompt|speaking task)/.test(body)) {
      add('MISSING_ACTIVITY', `en/${file}`, 'learner production activity')
    }
    if (!/(model answer|model response|self-check)/.test(body)) {
      add('MISSING_MODEL_OR_RUBRIC', `en/${file}`, 'model response or self-check rubric')
    }

    const minutes = Number(en.data.minutes)
    const words = bodyWordCount(en.body)
    if (!Number.isFinite(minutes) || minutes < Math.ceil(words / 110) + 3) {
      add('IMPLAUSIBLE_DURATION', `en/${file}`, `${words} words in ${minutes || 0} minutes`)
    }
  }

  return {
    issues,
    counts: {
      en: enLessons.length,
      vi: viLessons.length,
      cefrPairs: [...enByFile.keys()].filter((file) => CEFR_FILE.test(file) && viByFile.has(file))
        .length,
      promotedSlugs: getPromotedSlugs(root).length,
    },
  }
}

module.exports = {
  auditContent,
  bodyWordCount,
  getPromotedSlugs,
  readLessons,
}
