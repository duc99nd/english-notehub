<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { Compass, ArrowRight, Sparkles, Layers, Award, Crown } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

const { t } = useI18n()

interface TrackItem {
  id: string
  levelBadge: string
  titleKey: string
  descKey: string
  icon: any
  gradient: string
  borderAccent: string
  targetSlug: string
  unitsCount: number
  estimatedHours: number
  skills: string[]
}

const tracks: TrackItem[] = [
  {
    id: 'track-a',
    levelBadge: 'CEFR A1 — A2',
    titleKey: 'home.tracks.trackA',
    descKey: 'home.tracks.trackADesc',
    icon: Layers,
    gradient: 'from-blue-500/10 via-cyan-500/5 to-transparent text-blue-500',
    borderAccent: 'hover:border-blue-500/40',
    targetSlug: 'vocabulary-reference',
    unitsCount: 30,
    estimatedHours: 4,
    skills: ['Office Small Talk', 'Slack Messaging', 'Daily Routine', 'Asking for Help'],
  },
  {
    id: 'track-b',
    levelBadge: 'CEFR B1 — B2',
    titleKey: 'home.tracks.trackB',
    descKey: 'home.tracks.trackBDesc',
    icon: Award,
    gradient: 'from-emerald-500/10 via-teal-500/5 to-transparent text-emerald-500',
    borderAccent: 'hover:border-emerald-500/40',
    targetSlug: 'meeting-templates',
    unitsCount: 30,
    estimatedHours: 6,
    skills: ['Leading Retros', 'Code Review Feedback', 'Scope Negotiation', 'Incident Reports'],
  },
  {
    id: 'track-c',
    levelBadge: 'CEFR C1 — C2',
    titleKey: 'home.tracks.trackC',
    descKey: 'home.tracks.trackCDesc',
    icon: Crown,
    gradient: 'from-purple-500/10 via-pink-500/5 to-transparent text-purple-500',
    borderAccent: 'hover:border-purple-500/40',
    targetSlug: 'system-architecture-walkthrough',
    unitsCount: 30,
    estimatedHours: 8,
    skills: [
      'System Design Defense',
      'Stakeholder Alignment',
      'Diplomatic Phrasing',
      'Technical Whitepapers',
    ],
  },
]
</script>

<template>
  <section id="roadmap" class="space-y-8 scroll-mt-24">
    <div class="text-center space-y-3 max-w-2xl mx-auto">
      <div
        class="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary"
      >
        <Compass class="size-3.5" />
        <span>{{ t('home.tracks.badge') }}</span>
      </div>
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
        {{ t('home.tracks.title') }}
      </h2>
      <p class="text-sm sm:text-base text-muted-foreground leading-relaxed">
        {{ t('home.tracks.desc') }}
      </p>
    </div>

    <!-- Bento Grid (3 Cards) -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="track in tracks"
        :key="track.id"
        class="group flex flex-col justify-between rounded-3xl border border-border/80 bg-card/60 p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        :class="track.borderAccent"
      >
        <div class="space-y-5">
          <!-- Level & Metrics -->
          <div class="flex items-center justify-between">
            <span
              class="rounded-full bg-primary/10 px-3 py-1 text-xs font-mono font-bold text-primary"
            >
              {{ track.levelBadge }}
            </span>
            <div
              class="flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br border border-border/60"
              :class="track.gradient"
            >
              <component :is="track.icon" class="size-5" />
            </div>
          </div>

          <!-- Title & Description -->
          <div class="space-y-2">
            <h3
              class="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors"
            >
              {{ t(track.titleKey) }}
            </h3>
            <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {{ t(track.descKey) }}
            </p>
          </div>

          <!-- Skills Checklist -->
          <div class="space-y-2 pt-2">
            <div
              v-for="skill in track.skills"
              :key="skill"
              class="flex items-center gap-2 text-xs text-foreground/80 font-medium"
            >
              <Sparkles class="size-3 text-primary opacity-70" />
              <span>{{ skill }}</span>
            </div>
          </div>
        </div>

        <!-- Action / CTA -->
        <div class="mt-8 pt-4 border-t border-border/50 flex items-center justify-between">
          <span class="text-xs font-mono text-muted-foreground">
            {{ t('home.tracks.unitsCount', { count: track.unitsCount }) }}
          </span>

          <RouterLink :to="`/docs/${track.targetSlug}`">
            <Button
              size="sm"
              variant="ghost"
              class="gap-1.5 rounded-xl font-semibold text-primary hover:text-primary/80"
            >
              <span>{{ t('home.tracks.exploreTrack') }}</span>
              <ArrowRight class="size-3.5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
