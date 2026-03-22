<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { BookOpenText, ChevronUp, ListTree, PanelRightClose, PanelRightOpen } from 'lucide-vue-next'
import { persistLocale, type AppLocale } from '@/i18n'
import {
  getDocBySlug,
  getDocs,
  getDocSubtitle,
  getDocTitle,
  type DocHeading,
  type DocItem,
} from '@/lib/content'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'

const docs = getDocs()
const route = useRoute()
const router = useRouter()
const { t, locale } = useI18n()

const articleContentRef = ref<HTMLElement | null>(null)
const searchQuery = ref('')
const docsSheetOpen = ref(false)
const tocSheetOpen = ref(false)
const showDesktopToc = ref(true)
const activeHeadingId = ref('')

let headingElements: HTMLElement[] = []
let rafId = 0

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
    const haystack = [
      doc.titleEn,
      doc.titleVi,
      doc.subtitleEn,
      doc.subtitleVi,
      ...doc.headings.map((heading) => heading.text),
    ]
      .join(' ')
      .toLowerCase()

    return haystack.includes(normalizedQuery)
  })
})

const activeSlug = computed(() => {
  const value = route.params.slug
  return typeof value === 'string' ? value : ''
})

const activeDoc = computed<DocItem | null>(() => {
  if (!docs.length) {
    return null
  }

  if (activeSlug.value) {
    return getDocBySlug(activeSlug.value) ?? docs[0]
  }

  return docs[0]
})

const mainGridClass = computed(() => {
  if (showDesktopToc.value) {
    return 'lg:grid-cols-[280px_minmax(0,1fr)_260px]'
  }

  return 'lg:grid-cols-[280px_minmax(0,1fr)]'
})

watch(
  () => route.params.slug,
  (slugParam) => {
    if (!docs.length) {
      return
    }

    if (typeof slugParam !== 'string' || !getDocBySlug(slugParam)) {
      void router.replace({
        name: 'docs',
        params: { slug: docs[0].slug },
      })
    }
  },
  { immediate: true },
)

function headingClass(level: number): string {
  return level === 3 ? 'pl-4 text-xs' : 'text-sm'
}

function getHeadingText(heading: DocHeading): string {
  return heading.text
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

  const threshold = window.scrollY + 120
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
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', queueHeadingSync)
  window.removeEventListener('resize', queueHeadingSync)
  if (rafId) {
    window.cancelAnimationFrame(rafId)
  }
})

function selectDocument(slug: string): void {
  docsSheetOpen.value = false
  tocSheetOpen.value = false

  void router.push({
    name: 'docs',
    params: { slug },
  })
}

function jumpToHeading(id: string): void {
  if (!activeDoc.value) {
    return
  }

  activeHeadingId.value = id
  tocSheetOpen.value = false

  void router.push({
    name: 'docs',
    params: { slug: activeDoc.value.slug },
    hash: `#${id}`,
  })
}

function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function docTitle(doc: DocItem): string {
  return getDocTitle(doc, currentLocale.value)
}

function docSubtitle(doc: DocItem): string {
  return getDocSubtitle(doc, currentLocale.value)
}
</script>

<template>
  <div class="min-h-screen bg-background">
    <header class="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div class="mx-auto flex h-16 max-w-[1400px] items-center gap-3 px-4">
        <RouterLink to="/docs" class="flex min-w-0 items-center gap-3">
          <img
            src="/brand/logo-mark.svg"
            alt="English Notehub"
            class="size-9 rounded-lg border bg-card object-cover"
          />
          <img
            src="/brand/logo-wordmark.svg"
            alt="English Notehub"
            class="hidden h-7 w-auto sm:block"
          />
        </RouterLink>

        <div class="ml-auto flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            class="inline-flex lg:hidden"
            @click="docsSheetOpen = true"
          >
            <BookOpenText class="mr-1 size-4" />
            {{ t('actions.openDocs') }}
          </Button>

          <Button
            variant="outline"
            size="sm"
            class="inline-flex lg:hidden"
            @click="tocSheetOpen = true"
          >
            <ListTree class="mr-1 size-4" />
            {{ t('actions.openContents') }}
          </Button>

          <Button
            variant="outline"
            size="sm"
            class="hidden lg:inline-flex"
            @click="showDesktopToc = !showDesktopToc"
          >
            <PanelRightClose v-if="showDesktopToc" class="mr-1 size-4" />
            <PanelRightOpen v-else class="mr-1 size-4" />
            {{ showDesktopToc ? t('actions.hideContents') : t('actions.showContents') }}
          </Button>

          <label for="locale" class="hidden text-xs font-medium text-muted-foreground sm:block">
            {{ t('nav.language') }}
          </label>
          <select
            id="locale"
            v-model="currentLocale"
            class="h-9 rounded-md border bg-background px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <option value="en">{{ t('locale.en') }}</option>
            <option value="vi">{{ t('locale.vi') }}</option>
          </select>
        </div>
      </div>
    </header>

    <main class="mx-auto grid max-w-[1400px] grid-cols-1" :class="mainGridClass">
      <aside class="hidden border-r lg:block">
        <div class="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto p-4">
          <p class="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {{ t('nav.documents') }}
          </p>
          <Input
            v-model="searchQuery"
            :placeholder="t('placeholders.search')"
            class="mb-4 bg-card"
          />
          <div class="space-y-2">
            <button
              v-for="doc in filteredDocs"
              :key="doc.slug"
              type="button"
              class="w-full rounded-lg border p-3 text-left transition hover:bg-accent/60"
              :class="
                activeDoc?.slug === doc.slug
                  ? 'border-primary/40 bg-accent/60'
                  : 'border-border bg-card'
              "
              @click="selectDocument(doc.slug)"
            >
              <p class="line-clamp-2 text-sm font-medium text-foreground">{{ docTitle(doc) }}</p>
              <p class="mt-1 line-clamp-2 text-xs text-muted-foreground">{{ docSubtitle(doc) }}</p>
              <Badge variant="secondary" class="mt-2">
                {{ doc.sectionCount }} {{ t('labels.sections') }}
              </Badge>
            </button>
          </div>
        </div>
      </aside>

      <section class="min-w-0">
        <article v-if="activeDoc" class="px-4 py-8 sm:px-6 lg:px-10">
          <div class="mb-6 rounded-xl border bg-card p-4">
            <p class="text-xs uppercase tracking-wide text-muted-foreground">
              {{ t('actions.openDocument') }}
            </p>
            <h1 class="mt-2 text-2xl font-semibold text-foreground">{{ docTitle(activeDoc) }}</h1>
            <p class="mt-1 text-sm text-muted-foreground">{{ docSubtitle(activeDoc) }}</p>
            <Badge variant="secondary" class="mt-3">
              {{ activeDoc.sectionCount }} {{ t('labels.sections') }}
            </Badge>
          </div>

          <div
            ref="articleContentRef"
            class="prose prose-slate max-w-none prose-headings:scroll-mt-24 prose-headings:font-semibold prose-p:leading-7 prose-li:leading-7 prose-a:text-primary hover:prose-a:text-primary/80 prose-pre:rounded-xl prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground"
          >
            <div v-html="activeDoc.html" />
          </div>
        </article>

        <div v-else class="px-6 py-10 text-muted-foreground">
          {{ t('labels.noSections') }}
        </div>
      </section>

      <aside v-if="showDesktopToc" class="hidden border-l lg:block">
        <div class="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto p-4">
          <p class="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {{ t('nav.contents') }}
          </p>

          <div v-if="activeDoc?.headings.length" class="space-y-1">
            <button
              v-for="heading in activeDoc.headings"
              :key="heading.id"
              type="button"
              class="block w-full rounded px-2 py-1 text-left text-muted-foreground transition hover:bg-accent hover:text-accent-foreground"
              :class="[
                headingClass(heading.level),
                activeHeadingId === heading.id ? 'bg-accent text-accent-foreground' : '',
              ]"
              @click="jumpToHeading(heading.id)"
            >
              {{ getHeadingText(heading) }}
            </button>
          </div>

          <p v-else class="text-sm text-muted-foreground">
            {{ t('labels.noSections') }}
          </p>

          <Separator class="my-4" />
          <Button size="sm" variant="outline" class="w-full" @click="scrollToTop">
            <ChevronUp class="mr-1 size-4" />
            {{ t('actions.backToTop') }}
          </Button>
        </div>
      </aside>
    </main>

    <Sheet v-model:open="docsSheetOpen">
      <SheetContent side="left" class="w-[92vw] p-0 sm:max-w-sm">
        <SheetHeader class="border-b p-4">
          <SheetTitle>{{ t('nav.documents') }}</SheetTitle>
        </SheetHeader>
        <div class="h-[calc(100vh-4.5rem)] overflow-y-auto p-4">
          <Input
            v-model="searchQuery"
            :placeholder="t('placeholders.search')"
            class="mb-4 bg-card"
          />
          <div class="space-y-2">
            <button
              v-for="doc in filteredDocs"
              :key="`mobile-${doc.slug}`"
              type="button"
              class="w-full rounded-lg border p-3 text-left transition hover:bg-accent/60"
              :class="
                activeDoc?.slug === doc.slug
                  ? 'border-primary/40 bg-accent/60'
                  : 'border-border bg-card'
              "
              @click="selectDocument(doc.slug)"
            >
              <p class="line-clamp-2 text-sm font-medium text-foreground">{{ docTitle(doc) }}</p>
              <p class="mt-1 line-clamp-2 text-xs text-muted-foreground">{{ docSubtitle(doc) }}</p>
              <Badge variant="secondary" class="mt-2">
                {{ doc.sectionCount }} {{ t('labels.sections') }}
              </Badge>
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>

    <Sheet v-model:open="tocSheetOpen">
      <SheetContent side="right" class="w-[88vw] p-0 sm:max-w-sm">
        <SheetHeader class="border-b p-4">
          <SheetTitle>{{ t('nav.contents') }}</SheetTitle>
        </SheetHeader>
        <div class="h-[calc(100vh-4.5rem)] overflow-y-auto p-4">
          <div v-if="activeDoc?.headings.length" class="space-y-1">
            <button
              v-for="heading in activeDoc.headings"
              :key="`mobile-${heading.id}`"
              type="button"
              class="block w-full rounded px-2 py-1 text-left text-muted-foreground transition hover:bg-accent hover:text-accent-foreground"
              :class="[
                headingClass(heading.level),
                activeHeadingId === heading.id ? 'bg-accent text-accent-foreground' : '',
              ]"
              @click="jumpToHeading(heading.id)"
            >
              {{ getHeadingText(heading) }}
            </button>
          </div>
          <p v-else class="text-sm text-muted-foreground">
            {{ t('labels.noSections') }}
          </p>

          <Separator class="my-4" />
          <Button size="sm" variant="outline" class="w-full" @click="scrollToTop">
            <ChevronUp class="mr-1 size-4" />
            {{ t('actions.backToTop') }}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  </div>
</template>
