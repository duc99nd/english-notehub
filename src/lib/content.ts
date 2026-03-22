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
  english_meeting_templates_for_team_lead_notion: {
    slug: 'meeting-templates',
    titleEn: 'English Meeting Templates For Team Lead',
    subtitleEn: 'Safe speaking formulas for weekly client meetings',
    titleVi: 'Mau cau hop hang tuan voi khach hang',
    subtitleVi: 'Cong thuc noi an toan cho team lead',
    order: 1,
  },
  english_speaking_grammar_reference: {
    slug: 'speaking-grammar',
    titleEn: 'English Speaking Grammar Reference',
    subtitleEn: 'Practical grammar for meetings and work communication',
    titleVi: 'Ngu phap speaking thuc dung',
    subtitleVi: 'Cong thuc ngan gon de noi trong meeting',
    order: 2,
  },
  english_writing_reference: {
    slug: 'writing-reference',
    titleEn: 'English Writing Reference',
    subtitleEn: 'Practical templates for work and client communication',
    titleVi: 'Mau cau writing trong cong viec',
    subtitleVi: 'Chat, email, follow-up de dung ngay',
    order: 3,
  },
  english_vocabulary_reference: {
    slug: 'vocabulary-reference',
    titleEn: 'English Vocabulary Reference',
    subtitleEn: 'Core words and collocations for daily work',
    titleVi: 'Tu vung cong viec can dung nhieu',
    subtitleVi: 'Tu va cum tu cho speaking va writing',
    order: 4,
  },
  english_client_situations_reference: {
    slug: 'client-situations',
    titleEn: 'English Client Situations Reference',
    subtitleEn: 'Practical English for difficult client situations',
    titleVi: 'Tinh huong kho voi khach hang',
    subtitleVi: 'Mau cau de phan hoi lich su va chac chan',
    order: 5,
  },
  english_small_talk_and_rapport: {
    slug: 'small-talk-rapport',
    titleEn: 'English Small Talk And Rapport',
    subtitleEn: 'Natural opening and closing lines for meetings',
    titleVi: 'Small talk va tao ket noi tu nhien',
    subtitleVi: 'Mo va dong hoi hop than thien hon',
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
    .replace(/^english_/, '')
    .replace(/_reference$/, '')
    .replace(/_notion$/, '')
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

const markdownModules = import.meta.glob('../../docs/english_*.md', {
  query: '?raw',
  import: 'default',
}) as Record<string, () => Promise<string>>

const moduleLoaderByFileName = new Map<string, () => Promise<string>>(
  Object.entries(markdownModules).map(([filePath, loader]) => [
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
const cacheBySlug = new Map<string, DocItem>()
const pendingBySlug = new Map<string, Promise<DocItem | undefined>>()

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

      if ((level === 1 || level === 2 || level === 3) && !isTocPreludeHeading(text)) {
        headings.push({
          id: info.slug,
          text,
          level,
        })
      }
    },
  })

  return {
    html: parser.render(raw),
    headings,
    sectionCount: headings.length,
  }
}

async function loadDoc(summary: DocSummary): Promise<DocItem | undefined> {
  const loader = moduleLoaderByFileName.get(summary.fileName)
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

export async function getDocBySlug(slug: string): Promise<DocItem | undefined> {
  if (cacheBySlug.has(slug)) {
    return cacheBySlug.get(slug)
  }

  if (pendingBySlug.has(slug)) {
    return pendingBySlug.get(slug)
  }

  const summary = docBySlug.get(slug)
  if (!summary) {
    return undefined
  }

  const pending = loadDoc(summary)
    .then((doc) => {
      if (doc) {
        cacheBySlug.set(slug, doc)
      }
      return doc
    })
    .finally(() => {
      pendingBySlug.delete(slug)
    })

  pendingBySlug.set(slug, pending)
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
