/* eslint-disable */
// One-shot conversion script: prepend JSON frontmatter to legacy docs that lack it.
// Reads FILE_META from src/lib/content.ts so titles/slug/category/cefr match the runtime registry.
// Idempotent: skips files that start with `---`.

const fs = require('node:fs')
const path = require('node:path')

const ROOT = path.resolve(__dirname, '..')
const SRC_FILE = path.join(ROOT, 'src/lib/content.ts')

// Same mapping as runtime, hard-coded so we don't need to import .ts.
const FILE_META = {
  '1_vocabulary_reference': {
    slug: 'vocabulary-reference',
    titleEn: 'English Vocabulary Reference',
    titleVi: 'Từ vựng công việc cần dùng nhiều',
    subtitleEn: 'Core words and collocations for daily work',
    subtitleVi: 'Từ và cụm từ cho speaking và writing',
    order: 1,
    categoryEn: 'Foundation & Daily Communication',
    categoryVi: 'Nền tảng Kỹ năng',
    cefr: 'A2',
    estimatedMinutes: 8,
  },
  '2_speaking_grammar': {
    slug: 'speaking-grammar',
    titleEn: 'English Speaking Grammar Reference',
    titleVi: 'Ngữ pháp speaking thực dụng',
    subtitleEn: 'Practical grammar for meetings and work communication',
    subtitleVi: 'Công thức ngắn gọn để nói trong meeting',
    order: 2,
    categoryEn: 'Foundation & Daily Communication',
    categoryVi: 'Nền tảng Kỹ năng',
    cefr: 'A2',
    estimatedMinutes: 5,
  },
  '3_writing_reference': {
    slug: 'writing-reference',
    titleEn: 'English Writing Reference',
    titleVi: 'Mẫu câu writing trong công việc',
    subtitleEn: 'Practical templates for work and client communication',
    subtitleVi: 'Chat, email, follow-up để dùng ngay',
    order: 3,
    categoryEn: 'Foundation & Daily Communication',
    categoryVi: 'Nền tảng Kỹ năng',
    cefr: 'A2',
    estimatedMinutes: 6,
  },
  '4_quick_tips_short_answers': {
    slug: 'quick-tips-short-answers',
    titleEn: 'Quick Tips & Short Answers',
    titleVi: 'Mẹo Nhanh & Câu Trả Lời Ngắn',
    subtitleEn: 'Grammar hacks, vocabulary tips, and short professional responses',
    subtitleVi: 'Mẹo ngữ pháp, từ vựng và phản hồi ngắn chuyên nghiệp',
    order: 4,
    categoryEn: 'Foundation & Daily Communication',
    categoryVi: 'Nền tảng Kỹ năng',
    cefr: 'A2',
    estimatedMinutes: 3,
  },
  '5_professional_chat_communication': {
    slug: 'professional-chat-communication',
    titleEn: 'Professional Chat Communication',
    titleVi: 'Tiếng Anh chat Slack/Teams chuyên nghiệp',
    subtitleEn: 'English for Slack and Teams',
    subtitleVi: 'Giao tiếp nhanh gọn qua tin nhắn',
    order: 5,
    categoryEn: 'Foundation & Daily Communication',
    categoryVi: 'Nền tảng Kỹ năng',
    cefr: 'A2',
    estimatedMinutes: 3,
  },
  '6_requesting_time_off': {
    slug: 'requesting-time-off',
    titleEn: 'Requesting Time Off',
    titleVi: 'Cách xin nghỉ phép và báo ốm',
    subtitleEn: 'Asking for leave and reporting sick',
    subtitleVi: 'Xin nghỉ phép hợp lý và lịch sự',
    order: 6,
    categoryEn: 'Foundation & Daily Communication',
    categoryVi: 'Nền tảng Kỹ năng',
    cefr: 'A2',
    estimatedMinutes: 6,
  },
  '7_asking_for_help_support': {
    slug: 'asking-for-help-support',
    titleEn: 'Asking for Help & Support',
    titleVi: 'Nhờ vả và yêu cầu hỗ trợ từ đồng nghiệp',
    subtitleEn: 'Requesting assistance from colleagues',
    subtitleVi: 'Cách nhờ hỗ trợ lịch sự, hiệu quả',
    order: 7,
    categoryEn: 'Foundation & Daily Communication',
    categoryVi: 'Nền tảng Kỹ năng',
    cefr: 'A2',
    estimatedMinutes: 5,
  },
  '8_apology_correction_emails': {
    slug: 'apology-correction-emails',
    titleEn: 'Apology & Correction Emails',
    titleVi: 'Viết email xin lỗi và đính chính thông tin',
    subtitleEn: 'Saying sorry and correcting mistakes',
    subtitleVi: 'Xử lý sự cố giao tiếp bằng văn bản',
    order: 8,
    categoryEn: 'Foundation & Daily Communication',
    categoryVi: 'Nền tảng Kỹ năng',
    cefr: 'B1',
    estimatedMinutes: 6,
  },
  '9_explaining_tech_to_non_tech': {
    slug: 'explaining-tech-to-non-tech',
    titleEn: 'Explaining Tech to Non-tech',
    titleVi: 'Giải thích vấn đề kỹ thuật cho Non-tech',
    subtitleEn: 'Simplifying technical concepts',
    subtitleVi: 'Giao tiếp với PO, QA, và Marketing',
    order: 9,
    categoryEn: 'Foundation & Daily Communication',
    categoryVi: 'Nền tảng Kỹ năng',
    cefr: 'B1',
    estimatedMinutes: 6,
  },
  '21_meeting_templates': {
    slug: 'meeting-templates',
    titleEn: 'English Meeting Templates For Team Lead',
    titleVi: 'Mẫu câu họp hàng tuần với khách hàng',
    subtitleEn: 'Safe speaking formulas for weekly client meetings',
    subtitleVi: 'Công thức nói an toàn cho team lead',
    order: 21,
    categoryEn: 'Agile & Meetings',
    categoryVi: 'Hội họp & Quy trình',
    cefr: 'B1',
    estimatedMinutes: 12,
  },
  '22_conversation_scenarios': {
    slug: 'conversation-scenarios',
    titleEn: 'Real-world Conversation Scenarios',
    titleVi: 'Kịch bản hội thoại thực tế',
    subtitleEn: 'Bilingual reading comprehension dialogues for daily work and meetings',
    subtitleVi: 'Hội thoại mẫu đọc hiểu cho standup, client meeting và phỏng vấn',
    order: 22,
    categoryEn: 'Agile & Meetings',
    categoryVi: 'Hội họp & Quy trình',
    cefr: 'B1',
    estimatedMinutes: 6,
  },
  '25_small_talk_rapport': {
    slug: 'small-talk-rapport',
    titleEn: 'English Small Talk And Rapport',
    titleVi: 'Small talk và tạo kết nối tự nhiên',
    subtitleEn: 'Natural opening and closing lines for meetings',
    subtitleVi: 'Mở và đóng hội họp thân thiện hơn',
    order: 25,
    categoryEn: 'Agile & Meetings',
    categoryVi: 'Hội họp & Quy trình',
    cefr: 'A2',
    estimatedMinutes: 4,
  },
  '26_advanced_daily_standup': {
    slug: 'advanced-daily-standup',
    titleEn: 'Advanced Daily Standup',
    titleVi: 'Báo cáo tiến độ (Daily Standup Nâng cao)',
    subtitleEn: 'Providing clear and concise status updates',
    subtitleVi: 'Mẫu câu standup chuyên nghiệp và ngắn gọn',
    order: 26,
    categoryEn: 'Agile & Meetings',
    categoryVi: 'Hội họp & Quy trình',
    cefr: 'B1',
    estimatedMinutes: 5,
  },
  '29_interrupting_holding_floor': {
    slug: 'interrupting-holding-floor',
    titleEn: 'Interrupting & Holding the Floor',
    titleVi: 'Kỹ năng ngắt lời và giành lại quyền nói',
    subtitleEn: 'Polite interruption strategies',
    subtitleVi: 'Cách chen ngang lịch sự trong cuộc họp',
    order: 29,
    categoryEn: 'Agile & Meetings',
    categoryVi: 'Hội họp & Quy trình',
    cefr: 'B2',
    estimatedMinutes: 4,
  },
  '30_summarizing_meeting_minutes': {
    slug: 'summarizing-meeting-minutes',
    titleEn: 'Summarizing Meeting Minutes',
    titleVi: 'Cách chốt biên bản cuộc họp (MOM)',
    subtitleEn: 'Writing and confirming meeting takeaways',
    subtitleVi: 'Tóm tắt Action Items và gửi email xác nhận',
    order: 30,
    categoryEn: 'Agile & Meetings',
    categoryVi: 'Hội họp & Quy trình',
    cefr: 'B1',
    estimatedMinutes: 5,
  },
  '31_client_situations': {
    slug: 'client-situations',
    titleEn: 'English Client Situations Reference',
    titleVi: 'Tình huống khó với khách hàng',
    subtitleEn: 'Practical English for difficult client situations',
    subtitleVi: 'Mẫu câu để phản hồi lịch sự và chắc chắn',
    order: 31,
    categoryEn: 'Difficult Situations',
    categoryVi: 'Tình huống Khó',
    cefr: 'B2',
    estimatedMinutes: 7,
  },
  '34_delivering_bad_news': {
    slug: 'delivering-bad-news',
    titleEn: 'Delivering Bad News',
    titleVi: 'Báo tin xấu (Sập Server / Mất Data)',
    subtitleEn: 'Reporting critical failures and data loss',
    subtitleVi: 'Giao tiếp khi có sự cố nghiêm trọng',
    order: 34,
    categoryEn: 'Difficult Situations',
    categoryVi: 'Tình huống Khó',
    cefr: 'B2',
    estimatedMinutes: 6,
  },
  '36_pushing_back_unreasonable_requests': {
    slug: 'pushing-back-unreasonable-requests',
    titleEn: 'Pushing Back on Unreasonable Requests',
    titleVi: 'Từ chối yêu cầu vô lý từ Sếp hoặc PO',
    subtitleEn: 'Saying no to managers or POs',
    subtitleVi: 'Cách nói "Không" một cách khéo léo',
    order: 36,
    categoryEn: 'Difficult Situations',
    categoryVi: 'Tình huống Khó',
    cefr: 'B2',
    estimatedMinutes: 5,
  },
  '41_interview_preparation': {
    slug: 'interview-preparation',
    titleEn: 'Job Interview Preparation',
    titleVi: 'Chuẩn bị phỏng vấn tiếng Anh',
    subtitleEn: 'Standard QA and strategies for professional English interviews',
    subtitleVi: 'Câu hỏi thường gặp và chiến thuật trả lời phỏng vấn',
    order: 41,
    categoryEn: 'Career Growth & Interviews',
    categoryVi: 'Sự nghiệp & Phỏng vấn',
    cefr: 'B1',
    estimatedMinutes: 5,
  },
  '65_pronunciation_guide_it_terms': {
    slug: 'pronunciation-guide-it-terms',
    titleEn: 'Pronunciation Guide for IT Terms',
    titleVi: 'Hướng Dẫn Phát Âm Từ Vựng IT',
    subtitleEn: 'IPA phonetics and stress patterns for commonly mispronounced tech words',
    subtitleVi: 'Phiên âm IPA và trọng âm cho các từ kỹ thuật hay bị đọc sai',
    order: 65,
    categoryEn: 'Pronunciation & Fluency',
    categoryVi: 'Phát Âm & Trôi Chảy',
    tags: ['pronunciation', 'vocabulary', 'speaking'],
    cefr: 'A2',
    estimatedMinutes: 5,
  },
}

const SKILL_BY_CATEGORY = {
  'Foundation & Daily Communication': 'speaking',
  'Technical Communication': 'writing',
  'Agile & Meetings': 'speaking',
  'Difficult Situations': 'speaking',
  'Career Growth & Interviews': 'speaking',
  'Pronunciation & Fluency': 'speaking',
  'Speaking Grammar Hacks': 'grammar',
  'Vocabulary Deep Dives': 'vocab',
}

function buildFrontmatter(fileName) {
  const meta = FILE_META[fileName]
  if (!meta) {
    throw new Error(`No FILE_META entry for ${fileName}`)
  }
  const skill = SKILL_BY_CATEGORY[meta.categoryEn] || 'vocab'
  const data = {
    id: meta.slug,
    slug: meta.slug,
    titleEn: meta.titleEn,
    titleVi: meta.titleVi,
    subtitleEn: meta.subtitleEn,
    subtitleVi: meta.subtitleVi,
    level: meta.cefr,
    cefr: meta.cefr,
    skill,
    order: meta.order,
    minutes: meta.estimatedMinutes,
    categoryEn: meta.categoryEn,
    categoryVi: meta.categoryVi,
    tags: meta.tags || [],
    isArchived: Boolean(meta.isArchived),
  }
  return `---\n${JSON.stringify(data, null, 2)}\n---\n\n`
}

function processFile(filePath, locale) {
  const fileName = path.basename(filePath, '.md')
  const raw = fs.readFileSync(filePath, 'utf-8')
  if (raw.trimStart().startsWith('---')) {
    return { skipped: true, reason: 'already has frontmatter' }
  }
  if (!FILE_META[fileName]) {
    return { skipped: true, reason: 'no FILE_META entry' }
  }
  const frontmatter = buildFrontmatter(fileName)
  fs.writeFileSync(filePath, frontmatter + raw, 'utf-8')
  return { skipped: false }
}

function processDir(dir, locale) {
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'))
  const stats = { converted: 0, skipped: 0, errors: [] }
  for (const f of files) {
    const full = path.join(dir, f)
    try {
      const result = processFile(full, locale)
      if (result.skipped) {
        stats.skipped += 1
      } else {
        stats.converted += 1
        console.log(`  [${locale}] + ${f}`)
      }
    } catch (err) {
      stats.errors.push({ file: f, error: err.message })
    }
  }
  return stats
}

const enDir = path.join(ROOT, 'docs/en')
const vnDir = path.join(ROOT, 'docs/vn')

console.log('--- Converting docs/en/ ---')
const enStats = processDir(enDir, 'en')
console.log(`EN: ${enStats.converted} converted, ${enStats.skipped} skipped`)
if (enStats.errors.length) {
  console.log('EN errors:', enStats.errors)
}

console.log('--- Converting docs/vn/ ---')
const vnStats = processDir(vnDir, 'vi')
console.log(`VN: ${vnStats.converted} converted, ${vnStats.skipped} skipped`)
if (vnStats.errors.length) {
  console.log('VN errors:', vnStats.errors)
}
