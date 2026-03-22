import MarkdownIt from 'markdown-it'
import markdownItAnchor from 'markdown-it-anchor'
import type { AppLocale } from '@/i18n'

export type TocLevel = 2 | 3

export interface DocHeading {
  id: string
  text: string
  level: TocLevel
}

export interface DocItem {
  slug: string
  fileName: string
  titleEn: string
  titleVi: string
  subtitleEn: string
  subtitleVi: string
  raw: string
  html: string
  headings: DocHeading[]
  sectionCount: number
}

interface FileMeta {
  slug: string
  titleVi: string
  subtitleVi: string
  order: number
}

const FILE_META: Record<string, FileMeta> = {
  english_meeting_templates_for_team_lead_notion: {
    slug: 'meeting-templates',
    titleVi: 'Mau cau hop hang tuan voi khach hang',
    subtitleVi: 'Cong thuc noi an toan cho team lead',
    order: 1,
  },
  english_speaking_grammar_reference: {
    slug: 'speaking-grammar',
    titleVi: 'Ngu phap speaking thuc dung',
    subtitleVi: 'Cong thuc ngan gon de noi trong meeting',
    order: 2,
  },
  english_writing_reference: {
    slug: 'writing-reference',
    titleVi: 'Mau cau writing trong cong viec',
    subtitleVi: 'Chat, email, follow-up de dung ngay',
    order: 3,
  },
  english_vocabulary_reference: {
    slug: 'vocabulary-reference',
    titleVi: 'Tu vung cong viec can dung nhieu',
    subtitleVi: 'Tu va cum tu cho speaking va writing',
    order: 4,
  },
  english_client_situations_reference: {
    slug: 'client-situations',
    titleVi: 'Tinh huong kho voi khach hang',
    subtitleVi: 'Mau cau de phan hoi lich su va chac chan',
    order: 5,
  },
  english_small_talk_and_rapport: {
    slug: 'small-talk-rapport',
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

function extractHeading(markdown: string, level: 1 | 2): string {
  const pattern = new RegExp(`^${'#'.repeat(level)}\\s+(.+)$`, 'm')
  const matched = markdown.match(pattern)
  return matched ? stripMarkdownSyntax(matched[1]) : ''
}

function createFallbackTitle(fileName: string): string {
  return fileName
    .replace(/^english_/, '')
    .replace(/_reference$/, '')
    .replace(/_notion$/, '')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
}

function renderMarkdown(raw: string): Pick<DocItem, 'html' | 'headings' | 'sectionCount'> {
  const headings: DocHeading[] = []
  const slugCounts = new Map<string, number>()

  const parser = new MarkdownIt({
    html: false,
    linkify: true,
    typographer: true,
  }).use(markdownItAnchor, {
    level: [2, 3],
    slugify: (value: string) => {
      const base = slugify(value)
      const currentCount = slugCounts.get(base) ?? 0
      const nextCount = currentCount + 1
      slugCounts.set(base, nextCount)
      return nextCount === 1 ? base : `${base}-${nextCount}`
    },
    callback: (token: any, info: { slug: string; title: string }) => {
      const level = Number(String(token.tag).replace('h', ''))
      if (level === 2 || level === 3) {
        headings.push({
          id: info.slug,
          text: stripMarkdownSyntax(info.title),
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

const markdownModules = import.meta.glob('../../docs/english_*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const docs: DocItem[] = Object.entries(markdownModules)
  .map(([filePath, raw]) => {
    const fileName = filePath.split('/').pop()?.replace('.md', '') ?? ''
    const meta = FILE_META[fileName]
    const rendered = renderMarkdown(raw)
    const titleEn = extractHeading(raw, 1) || createFallbackTitle(fileName)
    const subtitleEn = extractHeading(raw, 2)

    return {
      slug: meta?.slug ?? slugify(fileName),
      fileName,
      titleEn,
      titleVi: meta?.titleVi ?? titleEn,
      subtitleEn,
      subtitleVi: meta?.subtitleVi ?? subtitleEn,
      raw,
      html: rendered.html,
      headings: rendered.headings,
      sectionCount: rendered.sectionCount,
    }
  })
  .sort((a, b) => {
    const orderA = FILE_META[a.fileName]?.order ?? 999
    const orderB = FILE_META[b.fileName]?.order ?? 999
    return orderA - orderB
  })

export function getDocs(): DocItem[] {
  return docs
}

export function getDocBySlug(slug: string): DocItem | undefined {
  return docs.find((doc) => doc.slug === slug)
}

export function getDocTitle(doc: DocItem, locale: AppLocale): string {
  return locale === 'vi' ? doc.titleVi : doc.titleEn
}

export function getDocSubtitle(doc: DocItem, locale: AppLocale): string {
  return locale === 'vi' ? doc.subtitleVi : doc.subtitleEn
}
