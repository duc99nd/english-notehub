<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import {
  GraduationCap,
  MessageSquare,
  Briefcase,
  AlertTriangle,
  Volume2,
  ChevronRight,
  Sparkles,
  Sun,
  Moon,
  Languages,
} from 'lucide-vue-next'
import { getDocs } from '@/lib/content'
import { persistLocale, type AppLocale } from '@/i18n'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/composables/useTheme'

const docs = getDocs()
const { t, locale } = useI18n()
const { isDark, toggleTheme } = useTheme()

const totalDocs = docs.length

// Calculate total categories dynamically
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

// Feature Cards mapping with matching icons
const features = computed(() => [
  {
    icon: MessageSquare,
    title: t('home.features.phrases.title'),
    desc: t('home.features.phrases.desc'),
    color: 'from-blue-500/10 to-indigo-500/10 border-blue-500/20 text-blue-500',
  },
  {
    icon: GraduationCap,
    title: t('home.features.grammar.title'),
    desc: t('home.features.grammar.desc'),
    color: 'from-amber-500/10 to-orange-500/10 border-amber-500/20 text-amber-500',
  },
  {
    icon: Briefcase,
    title: t('home.features.business.title'),
    desc: t('home.features.business.desc'),
    color: 'from-teal-500/10 to-emerald-500/10 border-teal-500/20 text-teal-500',
  },
  {
    icon: Sparkles,
    title: t('home.features.interviews.title'),
    desc: t('home.features.interviews.desc'),
    color: 'from-purple-500/10 to-pink-500/10 border-purple-500/20 text-purple-500',
  },
  {
    icon: AlertTriangle,
    title: t('home.features.difficult.title'),
    desc: t('home.features.difficult.desc'),
    color: 'from-rose-500/10 to-red-500/10 border-rose-500/20 text-rose-500',
  },
  {
    icon: Volume2,
    title: t('home.features.pronunciation.title'),
    desc: t('home.features.pronunciation.desc'),
    color: 'from-cyan-500/10 to-sky-500/10 border-cyan-500/20 text-cyan-500',
  },
])
</script>

<template>
  <div class="relative min-h-screen bg-background">
    <!-- Decorative background elements -->
    <div
      class="pointer-events-none absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_top_right,hsl(221_83%_53%_/_0.08),transparent_35%),radial-gradient(circle_at_left_top,hsl(210_40%_96%_/_0.15),transparent_30%)] dark:bg-[radial-gradient(circle_at_top_right,hsl(217_91%_60%_/_0.12),transparent_35%),radial-gradient(circle_at_left_top,hsl(217_33%_17%_/_0.2),transparent_30%)]"
    />
    <div
      class="pointer-events-none absolute right-[-10rem] top-[20rem] size-[30rem] rounded-full bg-primary/5 blur-3xl"
    />
    <div
      class="pointer-events-none absolute left-[-10rem] bottom-[5rem] size-[25rem] rounded-full bg-teal-500/5 blur-3xl"
    />

    <!-- Header Navigation -->
    <header class="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div class="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <RouterLink to="/" class="flex items-center gap-3">
          <span
            class="flex size-10 items-center justify-center overflow-hidden rounded-xl shadow-sm"
          >
            <img src="/brand/logo-mark.svg" alt="English Notehub logo" class="size-full" />
          </span>
          <div>
            <p class="text-base font-bold tracking-[-0.02em]">
              <span class="text-foreground">English </span
              ><span
                class="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent"
                >Notehub</span
              >
            </p>
          </div>
        </RouterLink>

        <div class="flex items-center gap-2">
          <!-- Theme toggle -->
          <Button
            variant="ghost"
            size="sm"
            class="size-9 p-0"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
            @click="toggleTheme"
          >
            <Sun v-if="isDark" class="size-4 text-foreground/80" />
            <Moon v-else class="size-4 text-foreground/80" />
          </Button>

          <!-- Language selector toggle -->
          <Button
            variant="ghost"
            size="sm"
            class="size-9 gap-1.5 rounded-full p-0 sm:w-auto sm:px-3"
            @click="currentLocale = currentLocale === 'en' ? 'vi' : 'en'"
          >
            <Languages class="size-4 text-primary" />
            <span class="hidden text-xs font-semibold sm:inline">{{
              currentLocale === 'en' ? 'EN' : 'VI'
            }}</span>
          </Button>

          <!-- Docs CTA -->
          <RouterLink :to="{ name: 'docs' }">
            <Button size="sm" class="font-medium shadow-sm transition-all duration-200">
              {{ t('nav.documents') }}
              <ChevronRight class="ml-1 size-3.5" />
            </Button>
          </RouterLink>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="relative mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:py-20">
      <!-- Hero Section -->
      <section class="text-center space-y-6 max-w-3xl mx-auto">
        <div
          class="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-4 py-1.5 shadow-sm"
        >
          <Sparkles class="size-4 text-primary animate-pulse" />
          <span class="notehub-label text-muted-foreground">{{ t('labels.bilingualMode') }}</span>
        </div>

        <h1
          class="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1]"
        >
          {{ t('home.hero.headline') }}
        </h1>

        <p class="text-lg text-muted-foreground leading-relaxed">
          {{ t('home.hero.subheadline') }}
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <RouterLink :to="{ name: 'docs' }">
            <Button
              size="lg"
              class="w-full sm:w-auto px-8 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              {{ t('home.hero.startLearning') }}
              <ChevronRight class="ml-1.5 size-4" />
            </Button>
          </RouterLink>

          <RouterLink :to="{ name: 'docs' }">
            <Button
              variant="outline"
              size="lg"
              class="w-full sm:w-auto px-8 font-semibold rounded-full hover:bg-muted/50 transition-all duration-200"
            >
              {{ t('home.hero.browseNotes', { count: totalDocs }) }}
            </Button>
          </RouterLink>
        </div>
      </section>

      <!-- Stats Bar Section -->
      <section class="mt-16 sm:mt-24">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div class="surface-panel rounded-2xl p-6 text-center transition-all hover:scale-[1.02]">
            <p class="text-3xl font-bold tracking-tight text-foreground tabular-nums">
              {{ totalDocs }}
            </p>
            <p class="mt-1 text-sm font-medium text-muted-foreground">
              {{ t('home.stats.documents') }}
            </p>
          </div>

          <div class="surface-panel rounded-2xl p-6 text-center transition-all hover:scale-[1.02]">
            <p class="text-3xl font-bold tracking-tight text-foreground tabular-nums">
              {{ uniqueCategories }}
            </p>
            <p class="mt-1 text-sm font-medium text-muted-foreground">
              {{ t('home.stats.categories') }}
            </p>
          </div>

          <div class="surface-panel rounded-2xl p-6 text-center transition-all hover:scale-[1.02]">
            <div class="flex items-center justify-center gap-1.5">
              <span class="size-2 rounded-full bg-emerald-500 animate-ping" />
              <p class="text-xl font-bold text-foreground">{{ t('home.stats.bilingual') }}</p>
            </div>
            <p class="mt-1 text-sm font-medium text-muted-foreground">
              {{ t('home.stats.bilingualDesc') }}
            </p>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="mt-20 sm:mt-32 space-y-12">
        <h2 class="text-2xl font-bold tracking-tight text-foreground text-center sm:text-3xl">
          {{ t('home.features.title') }}
        </h2>

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="feat in features"
            :key="feat.title"
            class="surface-panel group rounded-2xl border p-6 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
          >
            <div
              class="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br border"
              :class="feat.color"
            >
              <component :is="feat.icon" class="size-6" />
            </div>

            <h3
              class="mt-4 text-lg font-semibold text-foreground group-hover:text-primary transition-colors"
            >
              {{ feat.title }}
            </h3>

            <p class="mt-2 text-sm leading-relaxed text-muted-foreground">
              {{ feat.desc }}
            </p>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="border-t border-border bg-muted/30 py-10 mt-20">
      <div class="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p class="text-xs text-muted-foreground">
          &copy; {{ new Date().getFullYear() }} English Notehub. All rights reserved.
        </p>
        <p class="mt-1.5 text-[0.65rem] font-mono text-muted-foreground/60">
          Built with Vue 3 & Vite &bull; Designed for Developers
        </p>
      </div>
    </footer>
  </div>
</template>
