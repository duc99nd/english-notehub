<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import {
  ChevronRight,
  Sparkles,
  Sun,
  Moon,
  Languages,
  Search,
  BookOpen,
  Volume2,
  Compass,
  Layers,
} from 'lucide-vue-next'
import { getDocs } from '@/lib/content'
import { persistLocale, type AppLocale } from '@/i18n'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/composables/useTheme'

// Sub-components
import HomeHeroSimulator from '@/components/home/HomeHeroSimulator.vue'
import HomeSituationMatrix from '@/components/home/HomeSituationMatrix.vue'
import HomePitfallsComparison from '@/components/home/HomePitfallsComparison.vue'
import HomeTracksRoadmap from '@/components/home/HomeTracksRoadmap.vue'
import HomeQuickQuiz from '@/components/home/HomeQuickQuiz.vue'
import HomeQuickSearchModal from '@/components/home/HomeQuickSearchModal.vue'

const docs = getDocs()
const { t, locale } = useI18n()
const { isDark, toggleTheme } = useTheme()

const totalDocs = docs.length
const isSearchOpen = ref(false)

const uniqueCategories = computed(() => {
  const categories = new Set<string>()
  for (const doc of docs) {
    const cat = locale.value === 'vi' ? doc.categoryVi || 'Khác' : doc.categoryEn || 'Other'
    categories.add(cat)
  }
  return categories.size
})

const currentLocale = computed<AppLocale>({
  get: () => (locale.value === 'vi' ? 'vi' : 'en'),
  set: (value) => {
    locale.value = value
    persistLocale(value)
  },
})

function handleGlobalKeydown(e: KeyboardEvent) {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault()
    isSearchOpen.value = !isSearchOpen.value
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleGlobalKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleGlobalKeydown)
})
</script>

<template>
  <div
    class="relative min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary"
  >
    <!-- Ambient Radial Background Elements -->
    <div
      class="pointer-events-none absolute inset-x-0 top-0 h-[45rem] bg-[radial-gradient(circle_at_top_right,hsl(221_83%_53%_/_0.12),transparent_40%),radial-gradient(circle_at_left_top,hsl(160_84%_39%_/_0.08),transparent_35%)] dark:bg-[radial-gradient(circle_at_top_right,hsl(217_91%_60%_/_0.15),transparent_45%),radial-gradient(circle_at_left_top,hsl(160_84%_39%_/_0.1),transparent_35%)]"
    />
    <div
      class="pointer-events-none absolute right-[-10rem] top-[25rem] size-[35rem] rounded-full bg-primary/5 blur-3xl"
    />
    <div
      class="pointer-events-none absolute left-[-10rem] top-[60rem] size-[30rem] rounded-full bg-emerald-500/5 blur-3xl"
    />

    <!-- Header Navigation -->
    <header
      class="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-xl transition-all"
    >
      <div
        class="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <!-- Logo & Branding -->
        <RouterLink to="/" class="flex items-center gap-3 group">
          <span
            class="flex size-10 items-center justify-center overflow-hidden rounded-2xl shadow-sm border border-border/60 bg-muted/40 transition-transform group-hover:scale-105"
          >
            <img src="/brand/logo-mark.svg" alt="English Notehub logo" class="size-full" />
          </span>
          <div>
            <p class="text-base font-extrabold tracking-tight">
              <span class="text-foreground">English </span
              ><span
                class="bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent"
                >Notehub</span
              >
            </p>
            <p
              class="text-[0.65rem] font-mono text-muted-foreground uppercase tracking-widest hidden sm:block"
            >
              Developer Desk
            </p>
          </div>
        </RouterLink>

        <!-- Center Nav Links (Desktop) -->
        <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="#situations" class="hover:text-foreground transition-colors">
            {{ t('nav.situations') }}
          </a>
          <a href="#pitfalls" class="hover:text-foreground transition-colors">
            {{ t('nav.pitfalls') }}
          </a>
          <a href="#roadmap" class="hover:text-foreground transition-colors">
            {{ t('nav.roadmap') }}
          </a>
          <a href="#quiz" class="hover:text-foreground transition-colors">
            {{ t('nav.quickDrill') }}
          </a>
        </nav>

        <!-- Right Action Controls -->
        <div class="flex items-center gap-2">
          <!-- Search Trigger Button -->
          <Button
            variant="outline"
            size="sm"
            class="hidden sm:flex items-center gap-2 rounded-xl border-border/80 bg-muted/30 px-3 text-xs text-muted-foreground hover:text-foreground hover:bg-muted"
            @click="isSearchOpen = true"
          >
            <Search class="size-3.5" />
            <span>Search</span>
            <kbd
              class="rounded bg-background border border-border px-1.5 py-0.5 text-[0.65rem] font-mono font-bold"
            >
              ⌘K
            </kbd>
          </Button>

          <!-- Mobile Search Trigger -->
          <Button
            variant="ghost"
            size="sm"
            class="sm:hidden size-9 p-0 rounded-xl"
            aria-label="Search documents"
            @click="isSearchOpen = true"
          >
            <Search class="size-4 text-foreground/80" />
          </Button>

          <!-- Theme toggle -->
          <Button
            variant="ghost"
            size="sm"
            class="size-9 p-0 rounded-xl"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
            @click="toggleTheme"
          >
            <Sun v-if="isDark" class="size-4 text-amber-400" />
            <Moon v-else class="size-4 text-foreground/80" />
          </Button>

          <!-- Language toggle -->
          <Button
            variant="ghost"
            size="sm"
            class="size-9 sm:w-auto sm:px-2.5 rounded-xl gap-1.5 text-xs font-semibold"
            @click="currentLocale = currentLocale === 'en' ? 'vi' : 'en'"
          >
            <Languages class="size-4 text-primary" />
            <span class="hidden sm:inline">{{ currentLocale === 'en' ? 'EN' : 'VI' }}</span>
          </Button>

          <!-- Docs CTA -->
          <RouterLink :to="{ name: 'docs' }">
            <Button
              size="sm"
              class="font-semibold shadow-sm rounded-xl transition-all duration-200"
            >
              {{ t('nav.documents') }}
              <ChevronRight class="ml-1 size-3.5" />
            </Button>
          </RouterLink>
        </div>
      </div>
    </header>

    <!-- Main Content Container -->
    <main class="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
      <!-- Hero Section -->
      <section class="text-center space-y-8 pt-4 sm:pt-8 max-w-4xl mx-auto">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 shadow-sm"
        >
          <Sparkles class="size-4 text-primary animate-pulse" />
          <span class="text-xs font-semibold text-primary tracking-wide">{{
            t('home.hero.badge')
          }}</span>
        </div>

        <!-- Headline -->
        <h1
          class="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] sm:leading-[1.15]"
        >
          <span class="text-foreground">{{ locale === 'vi' ? 'Làm chủ ' : 'Master ' }}</span>
          <span
            class="bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent"
          >
            {{ locale === 'vi' ? 'tiếng Anh cho Developer' : 'Developer English' }}
          </span>
          <br class="hidden sm:inline" />
          <span
            class="text-foreground text-2xl sm:text-4xl lg:text-5xl font-bold opacity-90 block mt-2"
          >
            {{
              locale === 'vi'
                ? 'Tự tin họp hành, review code & deal lương.'
                : 'Speak & write with confidence in remote tech.'
            }}
          </span>
        </h1>

        <!-- Subheadline -->
        <p class="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {{ t('home.hero.subheadline') }}
        </p>

        <!-- CTA Action Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <RouterLink :to="{ name: 'docs' }">
            <Button
              size="lg"
              class="w-full sm:w-auto px-8 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              {{ t('home.hero.startLearning') }}
              <ChevronRight class="ml-1.5 size-4" />
            </Button>
          </RouterLink>

          <!-- Search Trigger Button -->
          <Button
            variant="outline"
            size="lg"
            class="w-full sm:w-auto px-6 font-medium rounded-2xl border-border/80 hover:bg-muted/60 transition-all duration-200 gap-2 text-muted-foreground hover:text-foreground"
            @click="isSearchOpen = true"
          >
            <Search class="size-4" />
            <span>{{ t('home.hero.browseNotes', { count: totalDocs }) }}</span>
            <kbd
              class="hidden sm:inline-block rounded bg-muted border border-border px-1.5 py-0.5 text-[0.65rem] font-mono font-bold"
            >
              ⌘K
            </kbd>
          </Button>
        </div>

        <!-- Live Hero Simulator Widget -->
        <div class="pt-6 sm:pt-10">
          <HomeHeroSimulator />
        </div>
      </section>

      <!-- Key Metrics Stats Bar -->
      <section class="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <div
          class="surface-panel rounded-3xl p-6 text-center transition-all hover:scale-[1.02] border border-border/60"
        >
          <div class="flex items-center justify-center mb-1 text-primary">
            <BookOpen class="size-5" />
          </div>
          <p class="text-3xl font-extrabold tracking-tight text-foreground tabular-nums">
            {{ totalDocs }}+
          </p>
          <p class="mt-1 text-xs font-medium text-muted-foreground">
            {{ t('home.stats.documents') }}
          </p>
        </div>

        <div
          class="surface-panel rounded-3xl p-6 text-center transition-all hover:scale-[1.02] border border-border/60"
        >
          <div class="flex items-center justify-center mb-1 text-emerald-500">
            <Compass class="size-5" />
          </div>
          <p class="text-3xl font-extrabold tracking-tight text-foreground tabular-nums">
            {{ uniqueCategories }}
          </p>
          <p class="mt-1 text-xs font-medium text-muted-foreground">
            {{ t('home.stats.categories') }}
          </p>
        </div>

        <div
          class="surface-panel rounded-3xl p-6 text-center transition-all hover:scale-[1.02] border border-border/60"
        >
          <div class="flex items-center justify-center mb-1 text-purple-500">
            <Layers class="size-5" />
          </div>
          <p class="text-xl sm:text-2xl font-extrabold text-foreground">A1 — C2</p>
          <p class="mt-1 text-xs font-medium text-muted-foreground">
            {{ t('home.stats.cefrDesc') }}
          </p>
        </div>

        <div
          class="surface-panel rounded-3xl p-6 text-center transition-all hover:scale-[1.02] border border-border/60"
        >
          <div class="flex items-center justify-center mb-1 text-cyan-500">
            <Volume2 class="size-5" />
          </div>
          <p class="text-xl sm:text-2xl font-extrabold text-foreground">
            {{ t('home.stats.audioSupport') }}
          </p>
          <p class="mt-1 text-xs font-medium text-muted-foreground">
            {{ t('home.stats.audioDesc') }}
          </p>
        </div>
      </section>

      <!-- Section 1: Quick Situation Matrix -->
      <HomeSituationMatrix />

      <!-- Section 2: Before vs After Pitfalls Comparison -->
      <HomePitfallsComparison />

      <!-- Section 3: Structured Learning Tracks & Roadmap -->
      <HomeTracksRoadmap />

      <!-- Section 4: Daily Micro Drill / Quiz -->
      <HomeQuickQuiz />
    </main>

    <!-- Search Modal Dialog -->
    <HomeQuickSearchModal v-model:open="isSearchOpen" />

    <!-- Modern Footer -->
    <footer class="border-t border-border/80 bg-muted/20 py-12 mt-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div class="space-y-1">
            <p class="text-sm font-bold text-foreground">
              English Notehub &bull; Developer English Study Desk
            </p>
            <p class="text-xs text-muted-foreground">
              &copy; {{ new Date().getFullYear() }} English Notehub. Crafted for software engineers
              and remote teams.
            </p>
          </div>

          <div class="flex items-center gap-4 text-xs text-muted-foreground font-mono">
            <span
              >Shortcut:
              <kbd class="rounded bg-muted border border-border px-1.5 py-0.5 font-bold">⌘K</kbd> to
              search</span
            >
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
