#!/usr/bin/env node

/**
 * Normalizes the paired A1-C2 curriculum and adds a reusable learning loop.
 * This script is intentionally idempotent so editorial updates can run it
 * again without duplicating practice sections.
 */

const fs = require('node:fs')
const path = require('node:path')
const matter = require('gray-matter')

const ROOT = path.resolve(__dirname, '..')
const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
const LOOP_START = '<!-- learning-loop:start -->'
const LOOP_END = '<!-- learning-loop:end -->'

const CATEGORY_BY_LEVEL = {
  A1: ['Foundation English', 'Tiếng Anh Nền tảng'],
  A2: ['Everyday Workplace English', 'Tiếng Anh Công việc Hằng ngày'],
  B1: ['Independent Workplace Communication', 'Giao tiếp Công việc Độc lập'],
  B2: ['Technical Leadership Communication', 'Giao tiếp Dẫn dắt Kỹ thuật'],
  C1: ['Strategic Professional Communication', 'Giao tiếp Chuyên nghiệp Chiến lược'],
  C2: ['Expert Register and Influence', 'Sắc thái và Ảnh hưởng Chuyên sâu'],
}

function readLesson(locale, file) {
  const filePath = path.join(ROOT, 'docs', locale, file)
  const raw = fs.readFileSync(filePath, 'utf8')
  const parsed = matter(raw)
  return { filePath, data: parsed.data, body: parsed.content }
}

function stripExistingLoop(body) {
  const start = body.indexOf(LOOP_START)
  const end = body.indexOf(LOOP_END)
  if (start === -1 || end === -1 || end < start) return body.trimEnd()
  return `${body.slice(0, start).trimEnd()}${body.slice(end + LOOP_END.length)}`.trimEnd()
}

function firstAudioLine(audioScript) {
  return String(audioScript || '')
    .split('\n')
    .map((line) => line.trim())
    .find(Boolean)
}

function modelAudio(audioScript) {
  return String(audioScript || '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .join(' ')
}

function englishOutcome(skill, title) {
  const normalizedTitle = title.toLowerCase()
  const actions = {
    vocab: `select and use useful language for ${normalizedTitle} in a short, realistic exchange`,
    grammar: `choose an appropriate structure and apply it accurately when discussing ${normalizedTitle}`,
    reading: `identify the main point, supporting detail, and register choices in a text about ${normalizedTitle}`,
    writing: `produce and revise a clear piece of writing about ${normalizedTitle} for a defined audience`,
    speaking: `respond clearly and appropriately in a conversation about ${normalizedTitle}`,
    listening: `identify the speaker's purpose and key details in an exchange about ${normalizedTitle}`,
    review: `combine the unit language to complete a realistic task about ${normalizedTitle}`,
  }
  return actions[skill] || actions.speaking
}

function englishTask(skill, title, level) {
  const audience = ['C1', 'C2'].includes(level)
    ? 'a colleague, client, and senior stakeholder'
    : 'a colleague or classmate'
  const tasks = {
    vocab: `Create a four-line exchange with ${audience}. Use at least three target expressions from **${title}** and add one follow-up question.`,
    grammar: `Write four connected sentences for ${audience}. Use the target structure twice, then revise one sentence to change its tone or emphasis.`,
    reading: `Summarize the text in two sentences for ${audience}. Identify one claim, one supporting detail, and one phrase that signals the writer's attitude.`,
    writing: `Write 80–120 words for ${audience}. State the purpose early, support it with a concrete detail, and finish with a clear next step.`,
    speaking: `Record a 45–60 second response for ${audience}. State your position, give one reason or example, and invite a response.`,
    listening: `Listen once for the main idea and again for detail. Note the speaker's purpose, two key facts, and one phrase you can reuse.`,
    review: `Complete one integrated response for ${audience} using language from at least three lessons in this unit.`,
  }
  return tasks[skill] || tasks.speaking
}

function englishLearningLoop(data) {
  const title = data.titleEn
  const line = firstAudioLine(data.audioScript)
  const model = modelAudio(data.audioScript)
  const advanced = ['C1', 'C2'].includes(data.level)
    ? '\n- [ ] I qualified claims where certainty was limited and adjusted the register for my audience.'
    : ''
  const registerSwitch = ['B2', 'C1', 'C2'].includes(data.level)
    ? `
### Register switch

Rewrite your response twice: first for a trusted teammate, then for a client or senior stakeholder. Keep the underlying message the same while changing directness, context, and the amount of explanation. Identify one phrase you softened, one detail you made explicit, and one assumption you removed. ${data.level === 'C2' ? 'Then write a plausible alternative interpretation of the model and explain which contextual evidence would help a reader choose between the two readings.' : ''}
`
    : ''

  return `${LOOP_START}
## Learning outcome

By the end of this lesson, you will be able to ${englishOutcome(data.skill, title)}.

## Practice lab

### Notice the language

Read the situation, then listen to the model once for meaning and once for phrasing.

> **Colleague:** How would you handle **${title.toLowerCase()}** in this situation?
>
> **You:** ${line}

Notice what the response does before you copy its wording: it gives the listener a clear point, enough context, and a usable next step.

> **Pattern**: clear point + concrete detail or reason + appropriate next step

### Your turn

${englishTask(data.skill, title, data.level)}

### Model response

> ${model}

The model is one possible response, not a script you must memorize. Compare its purpose, level of detail, and tone with your version, then revise once.

${registerSwitch}

### Self-check

- [ ] I completed the task without translating a full Vietnamese sentence word for word.
- [ ] I used at least two useful expressions from the lesson.
- [ ] My main point is easy to identify.
- [ ] I included a concrete detail, reason, or next step.${advanced}

${LOOP_END}`
}

function vietnameseLearningLoop(data) {
  const title = data.titleVi
  const line = firstAudioLine(data.audioScript)
  const model = modelAudio(data.audioScript)
  const advanced = ['C1', 'C2'].includes(data.level)
    ? '\n- [ ] Mình đã giới hạn mức độ chắc chắn của nhận định và điều chỉnh register theo người nghe.'
    : ''
  const registerSwitch = ['B2', 'C1', 'C2'].includes(data.level)
    ? `
### Chuyển đổi register

Viết lại câu trả lời hai lần: một bản cho đồng đội thân quen và một bản cho khách hàng hoặc stakeholder cấp cao. Giữ nguyên thông điệp nhưng thay đổi độ trực tiếp, lượng bối cảnh và mức giải thích. Chỉ ra một cụm từ bạn đã làm mềm, một chi tiết bạn nói rõ hơn và một giả định bạn đã loại bỏ. ${data.level === 'C2' ? 'Sau đó, viết thêm một cách diễn giải hợp lý khác của bài mẫu và nêu bằng chứng ngữ cảnh cần có để chọn giữa hai cách hiểu.' : ''}
`
    : ''

  return `${LOOP_START}
## Kết quả học tập

Sau bài này, bạn có thể vận dụng ngôn ngữ của chủ đề **${title}** vào một tình huống thực tế thay vì chỉ nhận biết từ vựng.

## Phòng luyện tập

### Nhận diện cách diễn đạt

Đọc tình huống, sau đó nghe bài mẫu một lần để nắm ý và một lần để chú ý cách diễn đạt.

> **Colleague:** How would you handle this situation?
>
> **You:** ${line}

Đừng chỉ chép lại câu chữ. Hãy nhận diện ba chức năng của câu trả lời: nêu ý chính, cung cấp đủ bối cảnh và đưa ra bước tiếp theo.

> **Mẫu câu**: ý chính rõ ràng + chi tiết hoặc lý do cụ thể + bước tiếp theo phù hợp

### Đến lượt bạn

Tạo một câu trả lời mới cho chủ đề **${title}**. Dùng ít nhất hai cụm từ trong bài, thêm một chi tiết cụ thể và kết thúc bằng câu hỏi hoặc bước tiếp theo phù hợp.

### Bài mẫu

> ${model}

Đây là một phương án tham khảo, không phải đoạn bắt buộc phải học thuộc. So sánh mục đích, độ chi tiết và tông giọng với câu trả lời của bạn rồi sửa lại một lần.

${registerSwitch}

### Tự kiểm tra

- [ ] Mình hoàn thành nhiệm vụ mà không dịch nguyên câu tiếng Việt từng từ một.
- [ ] Mình dùng ít nhất hai cách diễn đạt hữu ích trong bài.
- [ ] Người nghe có thể nhận ra ý chính ngay.
- [ ] Mình đưa ra chi tiết, lý do hoặc bước tiếp theo cụ thể.${advanced}

${LOOP_END}`
}

function wordCount(body) {
  return body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/[|#>*_`[\]()-]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length
}

function serialize(filePath, data, body) {
  const frontmatter = JSON.stringify(data, null, 2)
  fs.writeFileSync(filePath, `---\n${frontmatter}\n---\n${body.trimStart()}\n`, 'utf8')
}

const files = fs
  .readdirSync(path.join(ROOT, 'docs', 'en'))
  .filter((file) => /^[ABC][12]-.*\.md$/.test(file))
  .sort((a, b) => {
    const levelDelta = LEVELS.indexOf(a.slice(0, 2)) - LEVELS.indexOf(b.slice(0, 2))
    return levelDelta || a.localeCompare(b, undefined, { numeric: true })
  })

let previousSlug = null
for (const file of files) {
  const en = readLesson('en', file)
  const vi = readLesson('vn', file)
  const [categoryEn, categoryVi] = CATEGORY_BY_LEVEL[en.data.level]

  const canonical = {
    ...en.data,
    categoryEn,
    categoryVi,
    prerequisites: previousSlug ? [previousSlug] : [],
    listeningEnabled: true,
  }

  let enBody = stripExistingLoop(en.body)
  enBody = `${enBody}\n\n${englishLearningLoop(canonical)}\n`
  canonical.minutes = Math.max(
    Number(canonical.minutes) || 0,
    Math.ceil(wordCount(enBody) / 95) + 5,
  )

  const localized = {
    ...vi.data,
    categoryEn,
    categoryVi,
    prerequisites: canonical.prerequisites,
    minutes: canonical.minutes,
    audioScript: canonical.audioScript,
    listeningEnabled: true,
    flashcardCount: canonical.flashcardCount,
    quiz: canonical.quiz,
  }

  let viBody = stripExistingLoop(vi.body)
  viBody = `${viBody}\n\n${vietnameseLearningLoop({ ...localized, level: canonical.level })}\n`

  serialize(en.filePath, canonical, enBody)
  serialize(vi.filePath, localized, viBody)
  previousSlug = canonical.slug
}

console.log(`Remediated ${files.length} paired CEFR lessons.`)
