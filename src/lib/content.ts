import type { AppLocale } from '@/i18n'

export type TocLevel = 1 | 2 | 3

export interface DocHeading {
  id: string
  text: string
  level: TocLevel
}

export interface DocSummary {
  slug: string
  fileName: string
  titleEn: string
  titleVi: string
  subtitleEn: string
  subtitleVi: string
  order: number
}

export interface DocItem extends DocSummary {
  raw: string
  html: string
  headings: DocHeading[]
  sectionCount: number
}

interface FileMeta {
  slug: string
  titleEn: string
  subtitleEn: string
  titleVi: string
  subtitleVi: string
  order: number
}

const FILE_META: Record<string, FileMeta> = {
  '1_meeting_templates': {
    slug: 'meeting-templates',
    titleEn: 'English Meeting Templates For Team Lead',
    subtitleEn: 'Safe speaking formulas for weekly client meetings',
    titleVi: 'Mẫu câu họp hàng tuần với khách hàng',
    subtitleVi: 'Công thức nói an toàn cho team lead',
    order: 1,
  },
  '2_speaking_grammar': {
    slug: 'speaking-grammar',
    titleEn: 'English Speaking Grammar Reference',
    subtitleEn: 'Practical grammar for meetings and work communication',
    titleVi: 'Ngữ pháp speaking thực dụng',
    subtitleVi: 'Công thức ngắn gọn để nói trong meeting',
    order: 2,
  },
  '3_writing_reference': {
    slug: 'writing-reference',
    titleEn: 'English Writing Reference',
    subtitleEn: 'Practical templates for work and client communication',
    titleVi: 'Mẫu câu writing trong công việc',
    subtitleVi: 'Chat, email, follow-up để dùng ngay',
    order: 3,
  },
  '4_vocabulary_reference': {
    slug: 'vocabulary-reference',
    titleEn: 'English Vocabulary Reference',
    subtitleEn: 'Core words and collocations for daily work',
    titleVi: 'Từ vựng công việc cần dùng nhiều',
    subtitleVi: 'Từ và cụm từ cho speaking và writing',
    order: 4,
  },
  '5_client_situations': {
    slug: 'client-situations',
    titleEn: 'English Client Situations Reference',
    subtitleEn: 'Practical English for difficult client situations',
    titleVi: 'Tình huống khó với khách hàng',
    subtitleVi: 'Mẫu câu để phản hồi lịch sự và chắc chắn',
    order: 5,
  },
  '6_small_talk_rapport': {
    slug: 'small-talk-rapport',
    titleEn: 'English Small Talk And Rapport',
    subtitleEn: 'Natural opening and closing lines for meetings',
    titleVi: 'Small talk và tạo kết nối tự nhiên',
    subtitleVi: 'Mở và đóng hội họp thân thiện hơn',
    order: 6,
  },
}

function stripMarkdownSyntax(input: string): string {
  return input
    .replace(/\*\*/g, '')
    .replace(/`/g, '')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .trim()
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

function createFallbackTitle(fileName: string): string {
  return fileName
    .replace(/^\d+_/, '')
    .replace(/_reference$/, '')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase())
}

function stripLeadingDocHeadings(markdown: string): string {
  return markdown
    .replace(/^#\s+.+\n+/, '')
    .replace(/^##\s+.+\n+/, '')
    .trimStart()
}

function isTocPreludeHeading(input: string): boolean {
  const normalized = slugify(input)
  return normalized === 'muc-luc' || normalized === 'contents' || normalized === 'table-of-contents'
}

// English (default) markdown modules — docs/en/
const markdownModules = import.meta.glob('../../docs/en/*.md', {
  query: '?raw',
  import: 'default',
}) as Record<string, () => Promise<string>>

// Vietnamese markdown modules — docs/vn/
const markdownModulesVi = import.meta.glob('../../docs/vn/*.md', {
  query: '?raw',
  import: 'default',
}) as Record<string, () => Promise<string>>

const moduleLoaderByFileName = new Map<string, () => Promise<string>>(
  Object.entries(markdownModules).map(([filePath, loader]) => [
    filePath.split('/').pop()?.replace('.md', '') ?? filePath,
    loader,
  ]),
)

// Vietnamese loaders share the same base filenames as English
const viModuleLoaderByFileName = new Map<string, () => Promise<string>>(
  Object.entries(markdownModulesVi).map(([filePath, loader]) => [
    filePath.split('/').pop()?.replace('.md', '') ?? filePath,
    loader,
  ]),
)

const docs: DocSummary[] = Object.keys(markdownModules)
  .map((filePath) => {
    const fileName = filePath.split('/').pop()?.replace('.md', '') ?? ''
    const meta = FILE_META[fileName]
    const fallbackTitle = createFallbackTitle(fileName)

    return {
      slug: meta?.slug ?? slugify(fileName),
      fileName,
      titleEn: meta?.titleEn ?? fallbackTitle,
      titleVi: meta?.titleVi ?? fallbackTitle,
      subtitleEn: meta?.subtitleEn ?? '',
      subtitleVi: meta?.subtitleVi ?? '',
      order: meta?.order ?? 999,
    }
  })
  .sort((a, b) => a.order - b.order)

const docBySlug = new Map(docs.map(doc => [doc.slug, doc]))
const cacheByKey = new Map<string, DocItem>()
const pendingByKey = new Map<string, Promise<DocItem | undefined>>()

async function renderMarkdown(raw: string): Promise<Pick<DocItem, 'html' | 'headings' | 'sectionCount'>> {
  const [{ default: MarkdownIt }, { default: markdownItAnchor }] = await Promise.all([
    import('markdown-it'),
    import('markdown-it-anchor'),
  ])

  const headings: DocHeading[] = []
  const slugCounts = new Map<string, number>()

  const parser = new MarkdownIt({
    html: false,
    linkify: true,
    typographer: true,
  }).use(markdownItAnchor, {
    level: [1, 2, 3],
    slugify: (value: string) => {
      const base = slugify(value)
      const currentCount = slugCounts.get(base) ?? 0
      const nextCount = currentCount + 1
      slugCounts.set(base, nextCount)
      return nextCount === 1 ? base : `${base}-${nextCount}`
    },
    callback: (token: any, info: { slug: string; title: string }) => {
      const level = Number(String(token.tag).replace('h', ''))
      const text = stripMarkdownSyntax(info.title)

      if ((level === 1 || level === 2) && !isTocPreludeHeading(text)) {
        headings.push({
          id: info.slug,
          text,
          level,
        })
      }
    },
  })

  let html = parser.render(raw)

  // Strip inline TOC section (MỤC LỤC / Contents / Table of Contents) from rendered HTML.
  // This heading + its following list is redundant because the sidebar TOC already shows it.
  html = html.replace(
    /<h1[^>]*>(?:MỤC LỤC|MỤC LỤC|Contents|Table of Contents)<\/h1>\s*(?:<(?:ul|ol)[^>]*>[\s\S]*?<\/(?:ul|ol)>\s*)*/gi,
    '',
  )

  // Convert inline code references to .md files into clickable links
  // e.g. <code>english_speaking_grammar_reference.md</code>  →  <a href="/docs/speaking-grammar">…</a>
  // Supports both new numbered filenames and legacy english_* filenames
  const LEGACY_SLUG_MAP: Record<string, string> = {
    english_meeting_templates_for_team_lead_notion: 'meeting-templates',
    english_speaking_grammar_reference: 'speaking-grammar',
    english_writing_reference: 'writing-reference',
    english_vocabulary_reference: 'vocabulary-reference',
    english_client_situations_reference: 'client-situations',
    english_small_talk_and_rapport: 'small-talk-rapport',
  }

  html = html.replace(
    /<code>([a-z0-9_]+)\.md<\/code>/gi,
    (_match: string, fileName: string) => {
      const meta = FILE_META[fileName]
      const slug = meta?.slug ?? LEGACY_SLUG_MAP[fileName]
      if (slug) {
        return `<a href="/docs/${slug}" class="doc-file-link"><code>${fileName}.md</code></a>`
      }
      return `<code>${fileName}.md</code>`
    },
  )

  return {
    html,
    headings,
    sectionCount: headings.length,
  }
}

async function loadDoc(summary: DocSummary, locale: AppLocale = 'en'): Promise<DocItem | undefined> {
  // Try Vietnamese loader first if locale is 'vi'
  const loader = locale === 'vi'
    ? (viModuleLoaderByFileName.get(summary.fileName) ?? moduleLoaderByFileName.get(summary.fileName))
    : moduleLoaderByFileName.get(summary.fileName)

  if (!loader) {
    return undefined
  }

  const raw = await loader()
  const content = stripLeadingDocHeadings(raw)
  const rendered = await renderMarkdown(content)

  return {
    ...summary,
    raw: content,
    html: rendered.html,
    headings: rendered.headings,
    sectionCount: rendered.sectionCount,
  }
}

export function getDocs(): DocSummary[] {
  return docs
}

export async function getDocBySlug(slug: string, locale: AppLocale = 'en'): Promise<DocItem | undefined> {
  const cacheKey = `${slug}:${locale}`

  if (cacheByKey.has(cacheKey)) {
    return cacheByKey.get(cacheKey)
  }

  if (pendingByKey.has(cacheKey)) {
    return pendingByKey.get(cacheKey)
  }

  const summary = docBySlug.get(slug)
  if (!summary) {
    return undefined
  }

  const pending = loadDoc(summary, locale)
    .then((doc) => {
      if (doc) {
        cacheByKey.set(cacheKey, doc)
      }
      return doc
    })
    .finally(() => {
      pendingByKey.delete(cacheKey)
    })

  pendingByKey.set(cacheKey, pending)
  return pending
}

export function getDocTitle(
  doc: Pick<DocSummary, 'titleEn' | 'titleVi'>,
  locale: AppLocale,
): string {
  return locale === 'vi' ? doc.titleVi : doc.titleEn
}

export function getDocSubtitle(
  doc: Pick<DocSummary, 'subtitleEn' | 'subtitleVi'>,
  locale: AppLocale,
): string {
  return locale === 'vi' ? doc.subtitleVi : doc.subtitleEn
}
