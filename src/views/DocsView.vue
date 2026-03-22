<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import {
  ArrowLeft,
  ArrowRight,
  BookOpenText,
  ChevronUp,
  Languages,
  ListTree,
  Moon,
  PanelLeftClose,
  PanelLeftOpen,
  PanelRightClose,
  PanelRightOpen,
  Search,
  Sparkles,
  Sun,
} from 'lucide-vue-next'
import { persistLocale, type AppLocale } from '@/i18n'
import {
  getDocBySlug,
  getDocs,
  getDocSubtitle,
  getDocTitle,
  type DocHeading,
  type DocItem,
  type DocSummary,
} from '@/lib/content'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/composables/useTheme'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'

const docs = getDocs()
const route = useRoute()
const router = useRouter()
const { t, locale } = useI18n()
const { isDark, toggleTheme } = useTheme()

const articleContentRef = ref<HTMLElement | null>(null)
const searchQuery = ref('')
const docsSheetOpen = ref(false)
const tocSheetOpen = ref(false)
const showDesktopToc = ref(true)
const showDesktopSidebar = ref(true)
const activeHeadingId = ref('')
const activeDoc = ref<DocItem | null>(null)
const isDocLoading = ref(false)
const sectionCountBySlug = ref<Record<string, number>>({})

let headingElements: HTMLElement[] = []
let rafId = 0
let loadRequestId = 0

const totalDocs = docs.length

const currentLocale = computed<AppLocale>({
  get: () => (locale.value === 'vi' ? 'vi' : 'en'),
  set: (value) => {
    locale.value = value
    persistLocale(value)
  },
})

const filteredDocs = computed(() => {
  const normalizedQuery = searchQuery.value.trim().toLowerCase()
  if (!normalizedQuery) {
    return docs
  }

  return docs.filter((doc) => {
    const haystack = [doc.titleEn, doc.titleVi, doc.subtitleEn, doc.subtitleVi]
      .join(' ')
      .toLowerCase()

    return haystack.includes(normalizedQuery)
  })
})

const filteredDocsCount = computed(() => filteredDocs.value.length)

const activeSlug = computed(() => {
  const routeSlug = route.params.slug
  if (typeof routeSlug === 'string') {
    return routeSlug
  }
  return docs[0]?.slug ?? ''
})

const activeDocIndex = computed(() => docs.findIndex(doc => doc.slug === activeSlug.value))

const previousDoc = computed(() => {
  if (activeDocIndex.value <= 0) {
    return null
  }

  return docs[activeDocIndex.value - 1] ?? null
})

const nextDoc = computed(() => {
  if (activeDocIndex.value === -1 || activeDocIndex.value >= docs.length - 1) {
    return null
  }

  return docs[activeDocIndex.value + 1] ?? null
})

const totalSectionCount = computed(() => {
  const counts = Object.values(sectionCountBySlug.value)
  if (!counts.length) {
    return undefined
  }

  return counts.reduce((sum, count) => sum + count, 0)
})

const quickJumpHeadings = computed(() => activeDoc.value?.headings.slice(0, 6) ?? [])

const mainGridClass = computed(() => {
  const sidebar = showDesktopSidebar.value
  const toc = showDesktopToc.value

  if (sidebar && toc) {
    return 'lg:grid-cols-[320px_minmax(0,1fr)_290px]'
  }
  if (sidebar && !toc) {
    return 'lg:grid-cols-[320px_minmax(0,1fr)]'
  }
  if (!sidebar && toc) {
    return 'lg:grid-cols-[minmax(0,1fr)_290px]'
  }
  return 'lg:grid-cols-[minmax(0,1fr)]'
})

function headingClass(level: number): string {
  if (level === 1) {
    return 'text-sm font-semibold text-foreground'
  }

  if (level === 2) {
    return 'pl-4 text-[0.82rem]'
  }

  return 'pl-8 text-[0.78rem]'
}

function getHeadingText(heading: DocHeading): string {
  return heading.text
}

function formatCount(count: number | undefined): string {
  return typeof count === 'number' ? String(count).padStart(2, '0') : '…'
}

function docOrderLabel(slug: string): string {
  const index = docs.findIndex(doc => doc.slug === slug)
  return index === -1 ? '00' : String(index + 1).padStart(2, '0')
}

function docTitle(doc: DocSummary | DocItem): string {
  return getDocTitle(doc, currentLocale.value)
}

function docSubtitle(doc: DocSummary | DocItem): string {
  return getDocSubtitle(doc, currentLocale.value)
}

function docSectionCount(slug: string): string {
  const count = sectionCountBySlug.value[slug]
  return typeof count === 'number' ? String(count) : '…'
}

function closePanels(): void {
  docsSheetOpen.value = false
  tocSheetOpen.value = false
}

function handleHeadingNavigation(id: string): void {
  activeHeadingId.value = id
  tocSheetOpen.value = false
  nextTick(() => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'instant', block: 'start' })
    }
  })
}

function getHeadingElements(): HTMLElement[] {
  if (!activeDoc.value || !articleContentRef.value) {
    return []
  }

  return activeDoc.value.headings
    .map((heading) => {
      const selector = `#${window.CSS.escape(heading.id)}`
      return articleContentRef.value?.querySelector<HTMLElement>(selector) ?? null
    })
    .filter((element): element is HTMLElement => element !== null)
}

function syncActiveHeadingFromScroll(): void {
  if (!headingElements.length) {
    activeHeadingId.value = ''
    return
  }

  const threshold = window.scrollY + 160
  let matched = headingElements[0]?.id ?? ''

  for (const heading of headingElements) {
    if (heading.offsetTop <= threshold) {
      matched = heading.id
      continue
    }
    break
  }

  activeHeadingId.value = matched
}

function queueHeadingSync(): void {
  if (rafId) {
    window.cancelAnimationFrame(rafId)
  }

  rafId = window.requestAnimationFrame(() => {
    syncActiveHeadingFromScroll()
  })
}

async function refreshHeadingsAndSync(): Promise<void> {
  await nextTick()
  headingElements = getHeadingElements()

  const hashId = route.hash.replace('#', '')
  if (hashId) {
    activeHeadingId.value = hashId
    return
  }

  queueHeadingSync()
}

function getTargetSlug(input: string): string {
  if (!docs.length) {
    return ''
  }

  if (docs.some(doc => doc.slug === input)) {
    return input
  }

  return docs[0].slug
}

async function loadActiveDocBySlug(slug: string): Promise<void> {
  if (!slug) {
    activeDoc.value = null
    return
  }

  isDocLoading.value = true
  activeDoc.value = null
  headingElements = []
  activeHeadingId.value = ''

  loadRequestId += 1
  const requestId = loadRequestId
  const loadedDoc = await getDocBySlug(slug, currentLocale.value)
  if (requestId !== loadRequestId) {
    return
  }

  activeDoc.value = loadedDoc ?? null
  if (loadedDoc) {
    sectionCountBySlug.value = {
      ...sectionCountBySlug.value,
      [loadedDoc.slug]: loadedDoc.sectionCount,
    }
  }
  isDocLoading.value = false
}

async function preloadSectionCounts(): Promise<void> {
  const entries = await Promise.all(
    docs.map(async (doc) => {
      const loadedDoc = await getDocBySlug(doc.slug, currentLocale.value)
      return loadedDoc ? ([doc.slug, loadedDoc.sectionCount] as const) : null
    }),
  )

  const nextCounts = Object.fromEntries(
    entries.filter((entry): entry is [string, number] => entry !== null),
  )

  sectionCountBySlug.value = {
    ...sectionCountBySlug.value,
    ...nextCounts,
  }
}

function scheduleSectionCountPreload(): void {
  const run = () => {
    void preloadSectionCounts()
  }

  if (typeof window.requestIdleCallback === 'function') {
    window.requestIdleCallback(run)
    return
  }

  window.setTimeout(run, 160)
}

watch(
  () => route.params.slug,
  (slugParam) => {
    const requestedSlug = typeof slugParam === 'string' ? slugParam : ''
    const targetSlug = getTargetSlug(requestedSlug)
    if (!targetSlug) {
      activeDoc.value = null
      return
    }

    if (requestedSlug !== targetSlug) {
      void router.replace({
        name: 'docs',
        params: { slug: targetSlug },
      })
      return
    }

    void loadActiveDocBySlug(targetSlug)
  },
  { immediate: true },
)

// Re-load doc content when locale changes
watch(
  currentLocale,
  () => {
    const slug = typeof route.params.slug === 'string' ? route.params.slug : ''
    if (slug) {
      void loadActiveDocBySlug(slug)
    }
  },
)

watch(
  () => [activeDoc.value?.slug, route.hash],
  () => {
    void refreshHeadingsAndSync()
  },
  { immediate: true },
)

onMounted(() => {
  window.addEventListener('scroll', queueHeadingSync, { passive: true })
  window.addEventListener('resize', queueHeadingSync)
  scheduleSectionCountPreload()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', queueHeadingSync)
  window.removeEventListener('resize', queueHeadingSync)
  if (rafId) {
    window.cancelAnimationFrame(rafId)
  }
})

function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'instant' })
}
</script>

<template>
  <a href="#main-content" class="skip-link">{{ t('nav.skipToContent') }}</a>

  <div class="relative min-h-screen bg-background">
    <div
      class="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_top_right,hsl(221_83%_53%_/_0.08),transparent_30%),radial-gradient(circle_at_left_top,hsl(210_40%_96%_/_0.15),transparent_24%)] dark:bg-[radial-gradient(circle_at_top_right,hsl(217_91%_60%_/_0.12),transparent_30%),radial-gradient(circle_at_left_top,hsl(217_33%_17%_/_0.2),transparent_24%)]"
    />

    <header class="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-xl">
      <div class="mx-auto flex min-h-20 max-w-[1500px] items-center gap-4 px-4 py-3 sm:px-6">
        <RouterLink to="/docs" class="group flex shrink-0 items-center gap-3 sm:gap-4">
          <span class="flex size-10 items-center justify-center overflow-hidden rounded-xl shadow-sm sm:size-12">
            <img src="/brand/logo-mark.svg" alt="English Notehub logo" class="size-full" />
          </span>
          <div class="hidden min-w-0 sm:block">
            <p class="text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-muted-foreground">Study Desk</p>
            <p class="text-base font-bold tracking-[-0.02em]">
              <span class="text-foreground">English </span><span class="bg-gradient-to-br from-teal-500 to-blue-500 bg-clip-text text-transparent">Notehub</span>
            </p>
          </div>
        </RouterLink>

        <div class="ml-auto flex items-center gap-1.5 sm:gap-2">
          <Button
            variant="outline"
            size="sm"
            class="size-9 p-0 lg:hidden"
            :aria-label="t('actions.openDocs')"
            @click="docsSheetOpen = true"
          >
            <BookOpenText class="size-4" aria-hidden="true" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            class="size-9 p-0 lg:hidden"
            :aria-label="t('actions.openContents')"
            @click="tocSheetOpen = true"
          >
            <ListTree class="size-4" aria-hidden="true" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            class="hidden lg:inline-flex"
            @click="showDesktopSidebar = !showDesktopSidebar"
          >
            <PanelLeftClose v-if="showDesktopSidebar" class="size-4" aria-hidden="true" />
            <PanelLeftOpen v-else class="size-4" aria-hidden="true" />
            {{ showDesktopSidebar ? t('actions.hideDocs') : t('actions.showDocs') }}
          </Button>

          <Button
            variant="outline"
            size="sm"
            class="hidden lg:inline-flex"
            @click="showDesktopToc = !showDesktopToc"
          >
            <PanelRightClose v-if="showDesktopToc" class="size-4" aria-hidden="true" />
            <PanelRightOpen v-else class="size-4" aria-hidden="true" />
            {{ showDesktopToc ? t('actions.hideContents') : t('actions.showContents') }}
          </Button>

          <Button
            variant="outline"
            size="sm"
            class="size-9 p-0"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
            @click="toggleTheme"
          >
            <Sun v-if="isDark" class="size-4" aria-hidden="true" />
            <Moon v-else class="size-4" aria-hidden="true" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            class="size-9 gap-2 rounded-full p-0 sm:w-auto sm:px-3"
            @click="currentLocale = currentLocale === 'en' ? 'vi' : 'en'"
          >
            <Languages class="size-4 text-primary" aria-hidden="true" />
            <span class="hidden text-sm font-semibold sm:inline">{{ currentLocale === 'en' ? 'EN' : 'VI' }}</span>
          </Button>
        </div>
      </div>
    </header>

    <main
      id="main-content"
      class="relative mx-auto grid max-w-[1500px] grid-cols-1 gap-6 px-4 pb-14 pt-6 sm:px-6 lg:pb-16 lg:pt-8"
      :class="mainGridClass"
    >
      <aside v-if="showDesktopSidebar" class="hidden lg:block">
        <div class="surface-panel sticky top-24 flex h-[calc(100vh-7.5rem)] flex-col overflow-hidden rounded-[1.9rem]">
          <div class="border-b border-foreground/10 px-5 pb-4 pt-5">
            <p class="notehub-label text-muted-foreground">{{ t('labels.referenceLibrary') }}</p>
            <div class="mt-4 grid grid-cols-2 gap-3">
              <div class="rounded-[1.25rem] bg-background/70 p-3">
                <p class="notehub-label text-muted-foreground">{{ t('labels.totalDocs') }}</p>
                <p class="mt-3 text-2xl font-semibold tracking-[-0.04em] tabular-nums text-foreground">
                  {{ formatCount(totalDocs) }}
                </p>
              </div>
              <div class="rounded-[1.25rem] bg-background/70 p-3">
                <p class="notehub-label text-muted-foreground">{{ t('labels.filteredDocs') }}</p>
                <p class="mt-3 text-2xl font-semibold tracking-[-0.04em] tabular-nums text-foreground">
                  {{ formatCount(filteredDocsCount) }}
                </p>
              </div>
            </div>
          </div>

          <div class="border-b border-foreground/10 px-5 py-4">
            <label for="desktop-doc-search" class="sr-only">{{ t('actions.searchDocuments') }}</label>
            <div class="relative">
              <Search
                class="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                id="desktop-doc-search"
                v-model="searchQuery"
                type="search"
                name="desktop-doc-search"
                autocomplete="off"
                :placeholder="t('placeholders.search')"
                class="pl-11"
              />
            </div>
          </div>

          <nav
            class="docs-scroll min-h-0 flex-1 overflow-y-auto px-3 pb-6 pt-3"
            :aria-label="t('nav.documents')"
          >
            <RouterLink
              v-for="doc in filteredDocs"
              :key="doc.slug"
              :to="{ name: 'docs', params: { slug: doc.slug } }"
              class="group block rounded-[1.4rem] border p-4 text-left transition-[transform,border-color,background-color,box-shadow] duration-200"
              :class="
                activeSlug === doc.slug
                  ? 'border-primary/30 bg-primary/10 shadow-[0_18px_36px_rgba(255,107,75,0.08)]'
                  : 'border-border bg-card hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_8px_24px_rgba(59,130,246,0.10)]'
              "
              :aria-current="activeSlug === doc.slug ? 'page' : undefined"
              @click="closePanels"
            >
              <div class="flex items-start gap-3">
                <span
                  class="flex size-10 shrink-0 items-center justify-center rounded-full border text-[0.72rem] font-semibold tracking-[0.18em] tabular-nums"
                  :class="
                    activeSlug === doc.slug
                      ? 'border-primary/30 bg-primary/20 text-primary'
                      : 'border-foreground/10 bg-background/80 text-muted-foreground'
                  "
                >
                  {{ docOrderLabel(doc.slug) }}
                </span>

                <div class="min-w-0 flex-1">
                  <div class="flex items-start justify-between gap-3">
                    <p class="line-clamp-2 text-sm font-semibold tracking-[-0.02em] text-foreground">
                      {{ docTitle(doc) }}
                    </p>
                    <Badge variant="outline" class="shrink-0 tabular-nums">
                      {{ docSectionCount(doc.slug) }}
                    </Badge>
                  </div>
                  <p class="mt-2 line-clamp-2 text-xs leading-5 text-muted-foreground">
                    {{ docSubtitle(doc) }}
                  </p>
                </div>
              </div>
            </RouterLink>
          </nav>
        </div>
      </aside>

      <section class="min-w-0 space-y-6">
        <section class="surface-panel-dark relative overflow-hidden rounded-[2rem] px-5 py-5 text-white sm:px-6 sm:py-6">
          <div class="absolute -right-10 top-[-20px] h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
          <div class="absolute bottom-[-48px] left-[18%] h-36 w-36 rounded-full bg-amber-200/10 blur-3xl" />

          <div class="relative flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
            <div class="max-w-3xl">
              <div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
                <Sparkles class="size-4 text-primary" aria-hidden="true" />
                <span class="notehub-label text-white/70">{{ t('labels.bilingualMode') }}</span>
              </div>

              <p class="mt-5 notehub-label text-white/40">
                {{ activeDoc ? `Doc ${docOrderLabel(activeDoc.slug)} / ${formatCount(totalDocs)}` : 'Reference Library' }}
              </p>
              <h1 class="mt-3 max-w-3xl text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl lg:text-4xl">
                {{ activeDoc ? docTitle(activeDoc) : t('app.name') }}
              </h1>
              <p class="mt-4 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                {{ activeDoc ? docSubtitle(activeDoc) : t('app.subtitle') }}
              </p>
            </div>

            <div class="grid gap-2 sm:grid-cols-3 xl:min-w-[360px]">
              <div class="rounded-[1.35rem] border border-white/10 bg-white/5 p-3">
                <p class="notehub-label text-white/50">{{ t('labels.totalDocs') }}</p>
                <p class="mt-3 text-3xl font-semibold tracking-[-0.05em] tabular-nums text-white">
                  {{ formatCount(totalDocs) }}
                </p>
              </div>

              <div class="rounded-[1.35rem] border border-white/10 bg-white/5 p-3">
                <p class="notehub-label text-white/50">{{ t('labels.totalSections') }}</p>
                <p class="mt-3 text-3xl font-semibold tracking-[-0.05em] tabular-nums text-white">
                  {{ formatCount(totalSectionCount) }}
                </p>
              </div>

              <div class="rounded-[1.35rem] border border-white/10 bg-white/5 p-3">
                <p class="notehub-label text-white/50">{{ t('labels.filteredDocs') }}</p>
                <p class="mt-3 text-3xl font-semibold tracking-[-0.05em] tabular-nums text-white">
                  {{ formatCount(filteredDocsCount) }}
                </p>
              </div>
            </div>
          </div>

          <div v-if="quickJumpHeadings.length && activeDoc" class="relative mt-5">
            <div class="flex items-center gap-3">
              <p class="notehub-label text-white/50">{{ t('labels.quickJump') }}</p>
              <div class="h-px flex-1 bg-white/10" />
            </div>

            <div class="mt-4 flex flex-wrap gap-2">
              <RouterLink
                v-for="heading in quickJumpHeadings"
                :key="heading.id"
                :to="{ name: 'docs', params: { slug: activeDoc.slug }, hash: `#${heading.id}` }"
                class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition-[transform,background-color,border-color,color] duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:text-white"
                @click="handleHeadingNavigation(heading.id)"
              >
                {{ getHeadingText(heading) }}
              </RouterLink>
            </div>
          </div>
        </section>

        <article v-if="activeDoc" class="surface-panel overflow-hidden rounded-[2rem]">


          <div ref="articleContentRef" class="notehub-prose max-w-none px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
            <div v-html="activeDoc.html" />
          </div>

          <div class="border-t border-foreground/10 bg-background/50 px-6 py-6 sm:px-8">
            <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p class="notehub-label text-muted-foreground">{{ t('labels.continueReading') }}</p>
                <p class="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                  {{ t('app.subtitle') }}
                </p>
              </div>

              <div class="grid gap-3 sm:grid-cols-2">
                <RouterLink
                  v-if="previousDoc"
                  :to="{ name: 'docs', params: { slug: previousDoc.slug } }"
                  class="group flex min-w-[220px] items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-left transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_8px_24px_rgba(59,130,246,0.10)]"
                >
                  <span class="flex size-9 items-center justify-center rounded-full bg-background text-foreground">
                    <ArrowLeft class="size-4" aria-hidden="true" />
                  </span>
                  <div class="min-w-0">
                    <p class="notehub-label text-muted-foreground">{{ t('actions.previousDoc') }}</p>
                    <p class="mt-1 line-clamp-1 text-sm font-semibold text-foreground">
                      {{ docTitle(previousDoc) }}
                    </p>
                  </div>
                </RouterLink>

                <RouterLink
                  v-if="nextDoc"
                  :to="{ name: 'docs', params: { slug: nextDoc.slug } }"
                  class="group flex min-w-[220px] items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-left transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_8px_24px_rgba(59,130,246,0.10)]"
                >
                  <span class="flex size-9 items-center justify-center rounded-full bg-background text-foreground">
                    <ArrowRight class="size-4" aria-hidden="true" />
                  </span>
                  <div class="min-w-0">
                    <p class="notehub-label text-muted-foreground">{{ t('actions.nextDoc') }}</p>
                    <p class="mt-1 line-clamp-1 text-sm font-semibold text-foreground">
                      {{ docTitle(nextDoc) }}
                    </p>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </article>

        <div v-else-if="isDocLoading" class="surface-panel rounded-[2rem] px-6 py-8 sm:px-8">
          <div class="animate-pulse space-y-5">
            <div class="h-5 w-32 rounded-full bg-muted" />
            <div class="h-12 w-3/4 rounded-[1rem] bg-muted" />
            <div class="h-4 w-2/3 rounded-full bg-muted" />
            <div class="h-4 w-full rounded-full bg-muted" />
            <div class="h-4 w-11/12 rounded-full bg-muted" />
            <div class="h-4 w-10/12 rounded-full bg-muted" />
          </div>
        </div>

        <div v-else class="surface-panel rounded-[2rem] px-6 py-8 text-muted-foreground sm:px-8">
          {{ t('labels.noSections') }}
        </div>
      </section>

      <aside v-if="showDesktopToc" class="hidden lg:block">
        <div class="surface-panel sticky top-24 h-[calc(100vh-7.5rem)] overflow-hidden rounded-[1.9rem]">
          <div class="border-b border-foreground/10 px-5 pb-4 pt-5">
            <p class="notehub-label text-muted-foreground">{{ t('nav.contents') }}</p>
            <div class="mt-3 flex items-center justify-between gap-3">
              <h2 class="text-lg font-semibold tracking-[-0.03em] text-foreground">
                {{ t('nav.contents') }}
              </h2>
              <Badge variant="outline" class="tabular-nums">
                {{ formatCount(activeDoc?.headings.length) }}
              </Badge>
            </div>
          </div>

          <div class="docs-scroll flex h-[calc(100%-5.75rem)] flex-col overflow-y-auto px-4 pb-4 pt-4">
            <nav v-if="activeDoc?.headings.length" class="space-y-1.5" :aria-label="t('nav.contents')">
              <RouterLink
                v-for="heading in activeDoc.headings"
                :key="heading.id"
                :to="{ name: 'docs', params: { slug: activeDoc.slug }, hash: `#${heading.id}` }"
                class="block rounded-[1rem] border px-3 py-2.5 text-left transition-[background-color,border-color,color,transform] duration-200 hover:-translate-y-0.5"
                :class="[
                  headingClass(heading.level),
                  activeHeadingId === heading.id
                    ? 'border-primary/30 bg-primary/10 text-foreground shadow-[0_10px_24px_rgba(255,107,75,0.08)]'
                    : 'border-transparent text-muted-foreground hover:border-foreground/10 hover:bg-background/80 hover:text-foreground',
                ]"
                :aria-current="activeHeadingId === heading.id ? 'location' : undefined"
                @click="handleHeadingNavigation(heading.id)"
              >
                {{ getHeadingText(heading) }}
              </RouterLink>
            </nav>

            <p v-else class="text-sm text-muted-foreground">
              {{ t('labels.noSections') }}
            </p>

            <div class="mt-auto pt-5">
              <div class="h-px bg-foreground/10" />
              <Button size="sm" variant="outline" class="mt-5 w-full" @click="scrollToTop">
                <ChevronUp class="size-4" aria-hidden="true" />
                {{ t('actions.backToTop') }}
              </Button>
            </div>
          </div>
        </div>
      </aside>
    </main>

    <Sheet v-model:open="docsSheetOpen">
      <SheetContent side="left" class="w-[92vw] border-none bg-transparent p-0 shadow-none sm:max-w-md">
        <div class="surface-panel flex h-full flex-col overflow-hidden rounded-[1.75rem]">
          <SheetHeader class="border-b border-foreground/10 p-5">
            <SheetTitle class="text-left">{{ t('labels.referenceLibrary') }}</SheetTitle>
          </SheetHeader>

          <div class="border-b border-foreground/10 px-5 py-4">
            <label for="mobile-doc-search" class="sr-only">{{ t('actions.searchDocuments') }}</label>
            <div class="relative">
              <Search
                class="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                id="mobile-doc-search"
                v-model="searchQuery"
                type="search"
                name="mobile-doc-search"
                autocomplete="off"
                :placeholder="t('placeholders.search')"
                class="pl-11"
              />
            </div>
          </div>

          <nav
            class="docs-scroll h-[calc(100vh-10.75rem)] overflow-y-auto px-3 py-3"
            :aria-label="t('nav.documents')"
          >
            <RouterLink
              v-for="doc in filteredDocs"
              :key="`mobile-${doc.slug}`"
              :to="{ name: 'docs', params: { slug: doc.slug } }"
              class="group block rounded-[1.35rem] border p-4 text-left transition-[transform,border-color,background-color,box-shadow] duration-200"
              :class="
                activeSlug === doc.slug
                  ? 'border-primary/30 bg-primary/10 shadow-[0_18px_36px_rgba(255,107,75,0.08)]'
                  : 'border-border/80 bg-white/60 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_8px_24px_rgba(59,130,246,0.10)]'
              "
              :aria-current="activeSlug === doc.slug ? 'page' : undefined"
              @click="closePanels"
            >
              <div class="flex items-start gap-3">
                <span
                  class="flex size-10 shrink-0 items-center justify-center rounded-full border text-[0.72rem] font-semibold tracking-[0.18em] tabular-nums"
                  :class="
                    activeSlug === doc.slug
                      ? 'border-primary/30 bg-primary/20 text-primary'
                      : 'border-foreground/10 bg-background/80 text-muted-foreground'
                  "
                >
                  {{ docOrderLabel(doc.slug) }}
                </span>

                <div class="min-w-0 flex-1">
                  <div class="flex items-start justify-between gap-3">
                    <p class="line-clamp-2 text-sm font-semibold tracking-[-0.02em] text-foreground">
                      {{ docTitle(doc) }}
                    </p>
                    <Badge variant="outline" class="shrink-0 tabular-nums">
                      {{ docSectionCount(doc.slug) }}
                    </Badge>
                  </div>
                  <p class="mt-2 line-clamp-2 text-xs leading-5 text-muted-foreground">
                    {{ docSubtitle(doc) }}
                  </p>
                </div>
              </div>
            </RouterLink>
          </nav>
        </div>
      </SheetContent>
    </Sheet>

    <Sheet v-model:open="tocSheetOpen">
      <SheetContent side="right" class="w-[92vw] border-none bg-transparent p-0 shadow-none sm:max-w-md">
        <div class="surface-panel flex h-full flex-col overflow-hidden rounded-[1.75rem]">
          <SheetHeader class="border-b border-foreground/10 p-5">
            <SheetTitle class="text-left">{{ t('nav.contents') }}</SheetTitle>
          </SheetHeader>

          <div class="docs-scroll h-[calc(100vh-10.25rem)] overflow-y-auto px-4 py-4">
            <nav v-if="activeDoc?.headings.length" class="space-y-1.5" :aria-label="t('nav.contents')">
              <RouterLink
                v-for="heading in activeDoc.headings"
                :key="`mobile-${heading.id}`"
                :to="{ name: 'docs', params: { slug: activeDoc.slug }, hash: `#${heading.id}` }"
                class="block rounded-[1rem] border px-3 py-2.5 text-left transition-[background-color,border-color,color,transform] duration-200"
                :class="[
                  headingClass(heading.level),
                  activeHeadingId === heading.id
                    ? 'border-primary/30 bg-primary/10 text-foreground shadow-[0_10px_24px_rgba(255,107,75,0.08)]'
                    : 'border-transparent text-muted-foreground hover:border-foreground/10 hover:bg-background/80 hover:text-foreground',
                ]"
                :aria-current="activeHeadingId === heading.id ? 'location' : undefined"
                @click="handleHeadingNavigation(heading.id)"
              >
                {{ getHeadingText(heading) }}
              </RouterLink>
            </nav>

            <p v-else class="text-sm text-muted-foreground">
              {{ t('labels.noSections') }}
            </p>

            <div class="mt-5 h-px bg-foreground/10" />
            <Button size="sm" variant="outline" class="mt-5 w-full" @click="scrollToTop">
              <ChevronUp class="size-4" aria-hidden="true" />
              {{ t('actions.backToTop') }}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  </div>
</template>
