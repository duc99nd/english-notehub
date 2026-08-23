#!/usr/bin/env node

/**
 * Applies the lesson-specific structured rewrite to the 87 non-pilot CEFR
 * lesson pairs. The three B2 pilot lessons remain the editorial references.
 *
 * This script is intentionally explicit about status: `structured-rewrite`
 * means lesson-specific content plus machine-verifiable contracts. It does not
 * mean a human language specialist has approved the lesson.
 */

const fs = require('node:fs')
const path = require('node:path')
const { execFileSync } = require('node:child_process')
const matter = require('gray-matter')
const { SCENARIOS, getScenario } = require('./editorial-curriculum-spec.cjs')

const ROOT = path.resolve(__dirname, '..')
const LOOP_START = '<!-- learning-loop:start -->'
const LOOP_END = '<!-- learning-loop:end -->'
const PILOT_STATUS = 'pilot-reviewed'
const REWRITE_STATUS = 'structured-rewrite'

const WORD_RANGES = {
  A1: [20, 70],
  A2: [28, 90],
  B1: [45, 135],
  B2: [55, 170],
  C1: [65, 200],
  C2: [75, 230],
}

const DEPTH_NOTES = {
  A1: 'I keep the message short, use familiar words, and finish with one clear next step.',
  A2: 'I connect the main point to one concrete detail. I check the time, person, or action so the listener knows what happens next.',
  B1: 'I organize the response so the situation comes first, the relevant detail follows, and the final sentence makes the requested action clear. I would revise any sentence that is correct but difficult for the audience to process.',
  B2: 'I make the relationship between evidence, constraint, and recommendation explicit. The response avoids a binary claim when the situation calls for a trade-off, and it gives the audience a practical checkpoint for challenging or confirming the recommendation.',
  C1: 'I select only the evidence that changes the decision, qualify any projection that depends on an assumption, and make ownership visible. A different stakeholder could reasonably prefer another option, so the response identifies the condition that would justify revisiting the recommendation.',
  C2: 'I distinguish what the language states from what a reader may plausibly infer. The response preserves useful ambiguity only where the genre requires it, names the evidence supporting the preferred interpretation, and explicitly acknowledges what cannot be concluded without additional context or specialist review.',
}

const SECONDARY_SKILL = {
  vocab: 'speaking',
  grammar: 'guided production',
  reading: 'critical response',
  writing: 'revision',
  speaking: 'interaction',
  listening: 'note-taking',
  review: 'integrated transfer',
}

function readLesson(locale, file) {
  const filePath = path.join(ROOT, 'docs', locale, file)
  const parsed = matter(fs.readFileSync(filePath, 'utf8'))
  return { filePath, data: parsed.data, body: parsed.content }
}

function serialize(filePath, data, body) {
  const frontmatter = JSON.stringify(data, null, 2)
  fs.writeFileSync(filePath, `---\n${frontmatter}\n---\n${body.trimStart()}\n`, 'utf8')
}

function stripExistingLoop(body) {
  const start = body.indexOf(LOOP_START)
  const end = body.indexOf(LOOP_END)
  if (start === -1 || end === -1 || end < start) return body.trimEnd()
  return `${body.slice(0, start).trimEnd()}${body.slice(end + LOOP_END.length)}`.trimEnd()
}

function audioLines(audioScript) {
  return String(audioScript || '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
}

function englishOutcome(data) {
  const topic = data.titleEn.toLowerCase()
  const outcomes = {
    vocab: `complete a four-turn exchange about ${topic}, choosing expressions that fit the relationship and immediate goal`,
    grammar: `produce a connected response about ${topic}, use the target structure accurately, and explain one effect of that choice`,
    reading: `extract the main point and supporting detail from a text about ${topic}, then make one evidence-based interpretation`,
    writing: `write and revise a response about ${topic} for a named audience, with a clear purpose, relevant support, and next step`,
    review: `combine language from the unit to resolve a realistic task involving ${topic} and justify one revision`,
  }
  return outcomes[data.skill] || outcomes.review
}

function vietnameseOutcome(data) {
  const outcomes = {
    vocab: `hoàn thành đoạn hội thoại bốn lượt về **${data.titleVi}**, chọn cách diễn đạt phù hợp quan hệ và mục tiêu trước mắt`,
    grammar: `tạo câu trả lời liền mạch về **${data.titleVi}**, dùng đúng cấu trúc trọng tâm và giải thích tác dụng của một lựa chọn`,
    reading: `rút ra ý chính và chi tiết hỗ trợ từ văn bản về **${data.titleVi}**, sau đó đưa ra một cách hiểu dựa trên bằng chứng`,
    writing: `viết và chỉnh sửa câu trả lời về **${data.titleVi}** cho người đọc xác định, có mục đích, thông tin hỗ trợ và bước tiếp theo rõ ràng`,
    review: `kết hợp ngôn ngữ trong unit để xử lý nhiệm vụ thực tế về **${data.titleVi}** và giải thích một lần chỉnh sửa`,
  }
  return outcomes[data.skill] || outcomes.review
}

function practiceContract(data) {
  if (data.skill === 'vocab') return { mode: 'dialogue', minTurns: 4, maxTurns: 6 }
  const [minWords, maxWords] = WORD_RANGES[data.level]
  return { mode: 'writing', minWords, maxWords }
}

function englishControlledTask(data) {
  const tasks = {
    vocab: `Choose three expressions from **${data.titleEn}**. Label each one as an opener, key detail, clarification, or next step. Remove any expression that does not fit the relationship in the situation.`,
    grammar: `Take two example sentences from the lesson. Transform the first with the target structure, then revise the second to change emphasis or level of certainty without changing the core facts.`,
    reading: `Before reading the explanation again, write one line for the text's main point, one line for its strongest supporting detail, and one phrase that signals tone or stance.`,
    writing: `Build a four-part outline: audience, purpose, one concrete supporting detail, and requested next step. Check that every planned sentence serves one of those four parts.`,
    review: `Select language from at least three lessons in this unit. For each choice, note the job it performs: describe, connect, qualify, request, or conclude.`,
  }
  return tasks[data.skill] || tasks.review
}

function vietnameseControlledTask(data) {
  const tasks = {
    vocab: `Chọn ba cách diễn đạt trong bài **${data.titleVi}**. Gắn nhãn chức năng cho từng cách: mở lời, nêu chi tiết, làm rõ hoặc đưa bước tiếp theo. Loại cách diễn đạt không phù hợp quan hệ trong tình huống.`,
    grammar: `Lấy hai câu ví dụ trong bài. Biến đổi câu đầu bằng cấu trúc trọng tâm, sau đó sửa câu thứ hai để thay đổi mức nhấn mạnh hoặc độ chắc chắn nhưng giữ nguyên dữ kiện.`,
    reading: `Trước khi đọc lại phần giải thích, hãy viết một dòng cho ý chính, một dòng cho chi tiết hỗ trợ mạnh nhất và một cụm từ thể hiện tông giọng hoặc lập trường.`,
    writing: `Lập dàn ý bốn phần: người đọc, mục đích, một chi tiết hỗ trợ cụ thể và bước tiếp theo được yêu cầu. Kiểm tra để mỗi câu dự kiến đều phục vụ một trong bốn phần.`,
    review: `Chọn ngôn ngữ từ ít nhất ba bài trong unit. Với mỗi lựa chọn, ghi rõ chức năng: miêu tả, kết nối, giới hạn, yêu cầu hoặc kết luận.`,
  }
  return tasks[data.skill] || tasks.review
}

function englishGuidedTask(data, scenario) {
  if (data.skill === 'vocab') {
    return `Write a four-to-six-turn exchange for this situation. Use at least three target expressions, respond to the other speaker's information, and end with a question, confirmation, or agreed action.`
  }
  const [minWords, maxWords] = WORD_RANGES[data.level]
  const actions = {
    grammar: `Write ${minWords}–${maxWords} words for the situation. Use the target structure at least twice, underline those choices, and add one sentence explaining how one structure changes emphasis, time, condition, or certainty.`,
    reading: `Write ${minWords}–${maxWords} words as structured reading notes. State the main point, cite or paraphrase one supporting detail, identify a register choice, and separate evidence from your inference.`,
    writing: `Write ${minWords}–${maxWords} words for the stated audience. Make the purpose visible in the opening, support it with a concrete detail, and close with a proportionate next step.`,
    review: `Write ${minWords}–${maxWords} words to complete the integrated task. Use material from at least three lessons, then annotate one revision that improved accuracy, tone, or clarity.`,
  }
  return actions[data.skill] || actions.review
}

function vietnameseGuidedTask(data) {
  if (data.skill === 'vocab') {
    return 'Viết đoạn hội thoại bốn đến sáu lượt cho tình huống này. Dùng ít nhất ba cách diễn đạt trọng tâm, phản hồi thông tin của người kia và kết thúc bằng câu hỏi, xác nhận hoặc hành động đã thống nhất.'
  }
  const [minWords, maxWords] = WORD_RANGES[data.level]
  const actions = {
    grammar: `Viết ${minWords}–${maxWords} từ bằng tiếng Anh cho tình huống. Dùng cấu trúc trọng tâm ít nhất hai lần, gạch chân các chỗ đó và thêm một câu giải thích cấu trúc đã thay đổi mức nhấn mạnh, thời gian, điều kiện hoặc độ chắc chắn như thế nào.`,
    reading: `Viết ${minWords}–${maxWords} từ bằng tiếng Anh dưới dạng ghi chú đọc hiểu có cấu trúc. Nêu ý chính, trích hoặc diễn đạt lại một chi tiết hỗ trợ, xác định một lựa chọn văn phong và tách bằng chứng khỏi suy luận.`,
    writing: `Viết ${minWords}–${maxWords} từ bằng tiếng Anh cho đúng người đọc. Nêu mục đích ngay phần mở đầu, hỗ trợ bằng một chi tiết cụ thể và kết thúc bằng bước tiếp theo phù hợp.`,
    review: `Viết ${minWords}–${maxWords} từ bằng tiếng Anh để hoàn thành nhiệm vụ tích hợp. Dùng nội dung từ ít nhất ba bài, sau đó chú thích một lần sửa giúp tăng độ chính xác, phù hợp tông giọng hoặc rõ ràng.`,
  }
  return actions[data.skill] || actions.review
}

function modelResponse(data, scenario) {
  const lines = audioLines(data.audioScript)
  const first = lines[0] || `This response focuses on ${data.titleEn.toLowerCase()}.`
  const second = lines[1] || 'The detail makes the intended meaning clear.'
  const third = lines[2] || 'The final line gives the audience a usable next step.'

  if (data.skill === 'vocab') {
    return `> **Partner:** We need to respond to the situation above. What would you say first?\n>\n> **You:** ${first}\n>\n> **Partner:** What detail should we confirm before we act?\n>\n> **You:** ${second} ${third}`
  }

  const labels = {
    grammar: ['Draft', 'Language choice'],
    reading: ['Main point and evidence', 'Interpretation'],
    writing: ['Draft', 'Revision note'],
    review: ['Integrated response', 'Revision note'],
  }
  const [draftLabel, noteLabel] = labels[data.skill] || labels.review
  return `> **${draftLabel}:** ${first} ${second} ${third}\n>\n> **${noteLabel}:** ${DEPTH_NOTES[data.level]} Other well-supported responses are possible.`
}

function englishLoop(data, scenario) {
  return `${LOOP_START}
## Learning outcome

By the end of this lesson, you can ${englishOutcome(data)}.

## Scenario practice

### Situation

${scenario.situationEn}

> **Training note:** This situation and its details are fictional. They are designed for language practice, not presented as a real event, policy, study, or legal interpretation.

### Controlled practice

${englishControlledTask(data)}

### Guided task

${englishGuidedTask(data, scenario)}

### Model response

${modelResponse(data, scenario)}

### Why the model works

The model shows one defensible route through the task; it is not a script to memorize. Compare its task completion, language accuracy, audience fit, and clarity with your response, then revise once.

### Transfer task

${scenario.transferEn} Keep the target language, but change the details and register needed for the new context.

### Self-check

- [ ] I completed every part of this lesson's scenario, not only the language form.
- [ ] My target language is accurate and fits the intended meaning.
- [ ] My level of directness and detail fits the named audience.
- [ ] The reader or listener can identify my main point and next step.
${['B2', 'C1', 'C2'].includes(data.level) ? '- [ ] I separated evidence, assumptions, and recommendations instead of presenting them as equally certain.\n' : ''}
${LOOP_END}`
}

function vietnameseLoop(data, scenario) {
  return `${LOOP_START}
## Kết quả học tập

Sau bài này, bạn có thể ${vietnameseOutcome(data)}.

## Luyện tập theo tình huống

### Tình huống

${scenario.situationVi}

> **Lưu ý:** Tình huống và các chi tiết đều là hư cấu để luyện ngôn ngữ; đây không phải sự kiện, chính sách, nghiên cứu hoặc diễn giải pháp lý có thật.

### Luyện tập có kiểm soát

${vietnameseControlledTask(data)}

### Nhiệm vụ có hướng dẫn

${vietnameseGuidedTask(data)}

### Bài mẫu

${modelResponse(data, scenario)}

### Vì sao bài mẫu phù hợp

Bài mẫu thể hiện một cách xử lý hợp lý, không phải kịch bản bắt buộc học thuộc. Hãy so sánh mức hoàn thành nhiệm vụ, độ chính xác, độ phù hợp với người nghe và độ rõ với bài của bạn rồi sửa một lần.

### Bài tập chuyển đổi

${scenario.transferVi} Giữ ngôn ngữ trọng tâm nhưng thay đổi chi tiết và văn phong cho bối cảnh mới.

### Tự kiểm tra

- [ ] Mình hoàn thành đủ yêu cầu của tình huống, không chỉ dùng đúng cấu trúc.
- [ ] Ngôn ngữ trọng tâm chính xác và đúng ý định.
- [ ] Độ trực tiếp và lượng chi tiết phù hợp người nghe hoặc người đọc.
- [ ] Người nhận có thể nhận ra ý chính và bước tiếp theo.
${['B2', 'C1', 'C2'].includes(data.level) ? '- [ ] Mình tách bằng chứng, giả định và khuyến nghị thay vì trình bày tất cả với cùng mức chắc chắn.\n' : ''}
${LOOP_END}`
}

function addQuizFeedback(quiz, titleEn, titleVi, locale) {
  if (!Array.isArray(quiz)) return quiz
  return quiz.map((item) => {
    const next = { ...item }
    if (item.type === 'fill') {
      next.acceptedAnswers = Array.from(
        new Set([
          item.answer,
          ...(Array.isArray(item.acceptedAnswers) ? item.acceptedAnswers : []),
        ]),
      )
    }
    if (!next.explanation || locale === 'vn') {
      next.explanation =
        locale === 'vn'
          ? `Trong ngữ cảnh câu hỏi, “${item.answer}” thể hiện đúng ý nghĩa hoặc cấu trúc trọng tâm của bài ${titleVi}. Hãy đối chiếu với câu mẫu xung quanh thay vì chỉ ghi nhớ đáp án rời rạc.`
          : `In this context, “${item.answer}” supplies the meaning or form targeted in ${titleEn}. Check it against the surrounding sentence rather than memorizing the answer in isolation.`
    }
    if (item.type === 'choice' && Array.isArray(item.options)) {
      next.distractorFeedback = { ...(item.distractorFeedback || {}) }
      for (const option of item.options.filter((value) => value !== item.answer)) {
        if (!next.distractorFeedback[option] || locale === 'vn') {
          next.distractorFeedback[option] =
            locale === 'vn'
              ? 'Phương án này không hoàn thành đúng ý định giao tiếp hoặc cấu trúc được kiểm tra trong ngữ cảnh câu hỏi.'
              : 'This option does not complete the communicative intent or target form tested by the question context.'
        }
      }
    }
    return next
  })
}

function localizeKnownHeadings(body) {
  return body
    .replace(/^## What to learn next$/gm, '## Bài học tiếp theo')
    .replace(/^## Quick quiz$/gm, '## Trắc nghiệm nhanh')
    .replace(/^### The Garden Café — Thực đơn$/gm, '### Thực đơn tại The Garden Café')
    .replace(/^## Register Chuyên nghiệp trong Q&A$/gm, '## Văn phong chuyên nghiệp trong Q&A')
}

function wordCount(body) {
  return body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/[|#>*_`[\]()-]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length
}

function escapeCell(value) {
  return String(value ?? '')
    .replace(/\|/g, '\\|')
    .replace(/\n/g, ' ')
}

function buildCurriculumMatrix(rows) {
  const header = `# English Notehub — CEFR Curriculum Matrix

**Generated:** 2026-08-23  
**Scope:** 90 paired CEFR lessons  
**Status semantics:** \`structured-rewrite\` means a lesson-specific rewrite passed machine-verifiable contracts; \`pilot-reviewed\` marks the three reference pilots. Neither status claims review by a human language specialist.

| Slug | Level | Unit | Topic | Primary skill | Secondary skill | Workplace / real-life outcome | Assessment | Prerequisite | Editorial status |
| --- | --- | ---: | --- | --- | --- | --- | --- | --- | --- |`
  const lines = rows.map((data) => {
    const scenario = getScenario(data.slug)
    const outcome = scenario
      ? englishOutcome(data)
      : `complete the lesson-specific ${data.skill} task for ${data.titleEn.toLowerCase()}`
    const assessment =
      data.skill === 'vocab'
        ? '4–6-turn exchange + quiz'
        : `${data.practiceContract?.mode || 'open'} model contract + quiz`
    return `| ${[
      data.slug,
      data.level,
      data.unit,
      data.titleEn,
      data.skill,
      SECONDARY_SKILL[data.skill] || 'transfer',
      outcome,
      assessment,
      (data.prerequisites || []).join(', ') || '—',
      data.editorialStatus || 'pending',
    ]
      .map(escapeCell)
      .join(' | ')} |`
  })
  const matrixPath = path.join(ROOT, 'docs', 'curriculum-matrix.md')
  fs.writeFileSync(matrixPath, `${header}\n${lines.join('\n')}\n`, 'utf8')
  return matrixPath
}

const files = fs
  .readdirSync(path.join(ROOT, 'docs', 'en'))
  .filter((file) => /^[ABC][12]-.*\.md$/.test(file))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

const rewrittenRows = []
const rewrittenFiles = []
let rewritten = 0
let pilots = 0

for (const file of files) {
  const en = readLesson('en', file)
  const vi = readLesson('vn', file)

  if (en.data.editorialStatus === PILOT_STATUS) {
    pilots += 1
    rewrittenRows.push(en.data)
    continue
  }

  const scenario = getScenario(en.data.slug)
  if (!scenario) throw new Error(`Missing editorial scenario for ${en.data.slug}`)

  const contract = practiceContract(en.data)
  const canonicalQuiz = addQuizFeedback(en.data.quiz, en.data.titleEn, en.data.titleVi, 'en')
  const localizedQuiz = addQuizFeedback(canonicalQuiz, en.data.titleEn, en.data.titleVi, 'vn')
  const canonical = {
    ...en.data,
    editorialStatus: REWRITE_STATUS,
    sourceType: 'fictional',
    practiceContract: contract,
    quiz: canonicalQuiz,
  }
  const localized = {
    ...vi.data,
    editorialStatus: REWRITE_STATUS,
    sourceType: 'fictional',
    practiceContract: contract,
    quiz: localizedQuiz,
  }

  const enBody = `${stripExistingLoop(en.body)}\n\n${englishLoop(canonical, scenario)}\n`
  const viBody = `${localizeKnownHeadings(stripExistingLoop(vi.body))}\n\n${vietnameseLoop(localized, scenario)}\n`
  canonical.minutes = Math.max(
    Number(canonical.minutes) || 0,
    Math.ceil(wordCount(enBody) / 95) + 6,
  )
  localized.minutes = canonical.minutes

  serialize(en.filePath, canonical, enBody)
  serialize(vi.filePath, localized, viBody)
  rewrittenFiles.push(en.filePath, vi.filePath)
  rewrittenRows.push(canonical)
  rewritten += 1
}

if (rewritten !== Object.keys(SCENARIOS).length || rewritten !== 87 || pilots !== 3) {
  throw new Error(
    `Rewrite coverage mismatch: rewrote ${rewritten}, scenarios ${Object.keys(SCENARIOS).length}, pilots ${pilots}`,
  )
}

const matrixPath = buildCurriculumMatrix(rewrittenRows)
execFileSync(path.join(ROOT, 'node_modules', '.bin', 'prettier'), [
  '--write',
  ...rewrittenFiles,
  matrixPath,
])
console.log(`Rewrote ${rewritten} lesson pairs; preserved ${pilots} reference pilots.`)
