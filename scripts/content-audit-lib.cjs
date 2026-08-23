const fs = require('node:fs')
const path = require('node:path')
const matter = require('gray-matter')

const CEFR_FILE = /^[ABC][12]-.*\.md$/
const CEFR_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
const CORE_META_KEYS = [
  'id',
  'slug',
  'level',
  'unit',
  'skill',
  'order',
  'cefr',
  'editorialStatus',
  'sourceType',
]
const ALLOWED_SKILLS = ['vocab', 'grammar', 'reading', 'writing', 'speaking', 'listening', 'review']
const REWRITTEN_STATUSES = new Set(['structured-rewrite', 'pilot-reviewed', 'human-reviewed'])
const GENERIC_EN_PROMPT = 'How would you handle **'
const GENERIC_VI_PROMPT = 'How would you handle this situation?'
const VIETNAMESE_SENTENCE =
  /\b(?:tôi|mình|chúng ta|chúng tôi|bạn|đang|không|cần|hãy|sẽ|và|của|để)\b/iu

function stripCodeFences(body) {
  return body.replace(/```[\s\S]*?```/g, '')
}

function hasMalformedTable(body) {
  return /^\|\|/m.test(stripCodeFences(body))
}

function findUntranslatedVietnameseHeadings(body) {
  const englishHeading =
    /^#{2,3}\s+(?:The|What|How|When|Where|Why|Quick|Learning|Practice|Model|Self|Register|Useful|Common|Key|Target|Authentic|Guided|Controlled|Writing|Reading|Speaking|Listening|Understanding|Building|Example|Examples)(?:\s|:|$)/i

  return (stripCodeFences(body).match(/^#{2,3}\s+.+$/gm) || []).filter((heading) =>
    englishHeading.test(heading),
  )
}

function extractModelSection(body) {
  const match = body.match(
    /^###\s+(?:Model response|Model answer|Bài mẫu)\s*\n([\s\S]*?)(?=^###\s+|^##\s+|<!--\s*learning-loop:end|(?![\s\S]))/im,
  )
  return match?.[1]?.trim() || ''
}

function extractLearningLoop(body) {
  const match = body.match(
    /<!--\s*learning-loop:start\s*-->([\s\S]*?)<!--\s*learning-loop:end\s*-->/i,
  )
  return match?.[1]?.trim().replace(/\s+/g, ' ') || ''
}

function markdownWordCount(value) {
  return value
    .replace(/<[^>]+>/g, ' ')
    .replace(/[|#>*_`\[\]()-]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length
}

function dialogueTurnCount(value) {
  return value.split('\n').filter((line) => /^>\s*\*\*[^*]+:\*\*\s*\S/.test(line.trim())).length
}

function hasSkillActivity(skill, body) {
  if (skill === 'speaking') {
    return /(?:guided speaking|speaking task|role-play|role play|record (?:a|your)|spoken exchange)/i.test(
      body,
    )
  }
  if (skill === 'listening') {
    return /(?:first listen|second listen|listen (?:once|first) for (?:gist|the main)|listen again for (?:detail|specific)|listening task)/i.test(
      body,
    )
  }
  return true
}

function validatePracticeContract(contract, body) {
  if (!contract || typeof contract !== 'object') return ['practiceContract is required']

  const model = extractModelSection(body)
  if (!model) return ['model response section is missing']

  const problems = []
  if (contract.mode === 'writing') {
    const words = markdownWordCount(model)
    if (Number.isFinite(contract.minWords) && words < contract.minWords) {
      problems.push(`model has ${words} words; minimum is ${contract.minWords}`)
    }
    if (Number.isFinite(contract.maxWords) && words > contract.maxWords) {
      problems.push(`model has ${words} words; maximum is ${contract.maxWords}`)
    }
  }
  if (contract.mode === 'dialogue') {
    const turns = dialogueTurnCount(model)
    if (Number.isFinite(contract.minTurns) && turns < contract.minTurns) {
      problems.push(`model has ${turns} dialogue turns; minimum is ${contract.minTurns}`)
    }
    if (Number.isFinite(contract.maxTurns) && turns > contract.maxTurns) {
      problems.push(`model has ${turns} dialogue turns; maximum is ${contract.maxTurns}`)
    }
  }
  return problems
}

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
    const accepted = [
      item?.answer,
      ...(Array.isArray(item?.acceptedAnswers) ? item.acceptedAnswers : []),
    ]
      .map((answer) =>
        String(answer ?? '')
          .trim()
          .toLowerCase(),
      )
      .filter(Boolean)
      .sort()
    return `${item?.type}:${accepted.join('|')}`
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
  const editorialFiles = []
  const practiceLoops = new Map()
  const skillCounts = Object.fromEntries(ALLOWED_SKILLS.map((skill) => [skill, 0]))
  let rewrittenPairs = 0
  let pilotReviewedPairs = 0
  let humanReviewedPairs = 0
  let genericEnglishLoops = 0
  let genericVietnameseLoops = 0

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

    if (en.data.skill in skillCounts) skillCounts[en.data.skill] += 1
    if (en.body.includes(GENERIC_EN_PROMPT)) genericEnglishLoops += 1
    if (vi.body.includes(GENERIC_VI_PROMPT)) genericVietnameseLoops += 1

    const rewritten = REWRITTEN_STATUSES.has(en.data.editorialStatus)
    if (rewritten) rewrittenPairs += 1
    if (en.data.editorialStatus === 'pilot-reviewed') pilotReviewedPairs += 1
    if (en.data.editorialStatus === 'human-reviewed') humanReviewedPairs += 1

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
    if (
      !/(practice lab|scenario practice|guided task|your turn|try it|writing prompt|speaking task)/.test(
        body,
      )
    ) {
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

    if (en.data.skill && !ALLOWED_SKILLS.includes(en.data.skill)) {
      add('INVALID_SKILL', `en/${file}`, `skill must be one of ${ALLOWED_SKILLS.join(', ')}`)
    }

    if (!hasSkillActivity(en.data.skill, en.body)) {
      add(
        'SKILL_ACTIVITY_MISMATCH',
        `en/${file}`,
        `${en.data.skill} lessons must contain a genuine ${en.data.skill} activity`,
      )
    }

    // Check for broken markdown tables starting with ||
    for (const item of [en, vi]) {
      if (hasMalformedTable(item.body)) {
        add(
          'MALFORMED_TABLE',
          `${item.locale}/${item.file}`,
          'table rows must start with single | not ||',
        )
      }
    }

    const untranslatedHeadings = findUntranslatedVietnameseHeadings(vi.body)
    if (untranslatedHeadings.length > 0) {
      editorialFiles.push({
        code: 'UNTRANSLATED_HEADING',
        file: `vn/${file}`,
        message: untranslatedHeadings[0],
      })
      if (rewritten) {
        add(
          'UNTRANSLATED_PROSE',
          `vn/${file}`,
          `untranslated English heading: ${untranslatedHeadings[0]}`,
        )
      }
    }

    if (rewritten) {
      const normalizedLoop = extractLearningLoop(en.body)
      if (!normalizedLoop) {
        add('MISSING_PRACTICE_LOOP', `en/${file}`, 'rewritten lesson requires a learning loop')
      } else if (practiceLoops.has(normalizedLoop)) {
        add(
          'DUPLICATE_PRACTICE_LOOP',
          `en/${file}`,
          `duplicates ${practiceLoops.get(normalizedLoop)}`,
        )
      } else {
        practiceLoops.set(normalizedLoop, `en/${file}`)
      }
      if (en.body.includes(GENERIC_EN_PROMPT) || vi.body.includes(GENERIC_VI_PROMPT)) {
        add('GENERIC_REVIEWED_LOOP', file, 'reviewed lessons must use lesson-specific practice')
      }
      if (en.data.sourceType !== 'fictional' && /\bAuthentic\b/i.test(en.body)) {
        add(
          'UNVERIFIED_AUTHENTIC_SOURCE',
          `en/${file}`,
          'mark training content fictional or provide a verified source contract',
        )
      }
      for (const [index, quizItem] of (en.data.quiz || []).entries()) {
        if (!quizItem?.explanation) {
          add('MISSING_QUIZ_EXPLANATION', `en/${file}`, `quiz item ${index + 1}`)
        }
        if (
          quizItem?.type === 'choice' &&
          (!Array.isArray(quizItem.options) || !quizItem.options.includes(quizItem.answer))
        ) {
          add('INVALID_QUIZ_ANSWER', `en/${file}`, `quiz item ${index + 1}`)
        }
        if (
          quizItem?.type === 'choice' &&
          (!quizItem.distractorFeedback ||
            !Object.keys(quizItem.distractorFeedback).some((option) => option !== quizItem.answer))
        ) {
          add('MISSING_DISTRACTOR_FEEDBACK', `en/${file}`, `quiz item ${index + 1}`)
        }
        if (
          quizItem?.type === 'fill' &&
          (!Array.isArray(quizItem.acceptedAnswers) || quizItem.acceptedAnswers.length === 0)
        ) {
          add('MISSING_ACCEPTED_ANSWERS', `en/${file}`, `quiz item ${index + 1}`)
        }
        const localizedQuizItem = vi.data.quiz?.[index]
        if (!localizedQuizItem?.explanation) {
          add('MISSING_LOCALIZED_QUIZ_EXPLANATION', `vn/${file}`, `quiz item ${index + 1}`)
        }
      }
      if (JSON.stringify(en.data.practiceContract) !== JSON.stringify(vi.data.practiceContract)) {
        add('PRACTICE_CONTRACT_PARITY', file, 'EN and VI practice contracts must match')
      }
      if (
        en.data.sourceType === 'fictional' &&
        (!/\bfictional\b/i.test(en.body) || !/\bhư cấu\b/iu.test(vi.body))
      ) {
        add(
          'MISSING_FICTIONAL_NOTICE',
          file,
          'fictional training content must be disclosed in both locales',
        )
      }
      for (const problem of validatePracticeContract(en.data.practiceContract, en.body)) {
        add('PRACTICE_CONTRACT_MISMATCH', `en/${file}`, problem)
      }
    }
  }

  const totalPairs = [...enByFile.keys()].filter(
    (file) => CEFR_FILE.test(file) && viByFile.has(file),
  ).length

  return {
    issues,
    editorial: {
      totalPairs,
      rewrittenPairs,
      pendingRewritePairs: totalPairs - rewrittenPairs,
      pilotReviewedPairs,
      humanReviewedPairs,
      genericEnglishLoops,
      genericVietnameseLoops,
      untranslatedVietnameseFiles: new Set(editorialFiles.map((item) => item.file)).size,
      skillCounts,
      findings: editorialFiles,
    },
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
  findUntranslatedVietnameseHeadings,
  getPromotedSlugs,
  hasMalformedTable,
  hasSkillActivity,
  readLessons,
  validatePracticeContract,
  extractLearningLoop,
}
