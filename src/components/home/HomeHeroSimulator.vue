<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import {
  Volume2,
  Square,
  Copy,
  Check,
  ArrowRight,
  Sparkles,
  Terminal,
  Radio,
  ShieldAlert,
  GitPullRequest,
  Flame,
  BadgeDollarSign,
} from 'lucide-vue-next'
import { useSpeech } from '@/composables/useSpeech'
import { Button } from '@/components/ui/button'

const { t, locale } = useI18n()
const { speaking, supported, speak, stop } = useSpeech()

const copiedId = ref<string | null>(null)

interface ScenarioItem {
  id: string
  icon: any
  tag: string
  titleEn: string
  titleVi: string
  targetDocSlug: string
  formula: string
  highlightKeywords: string[]
  explanationEn: string
  explanationVi: string
  phoneticTip: string
  context: string
}

const scenarios: ScenarioItem[] = [
  {
    id: 'standup',
    icon: Radio,
    tag: 'Daily Standup',
    titleEn: 'Reporting a blocker without sounding helpless',
    titleVi: 'Báo cáo blocker ngắn gọn và chủ động',
    targetDocSlug: 'speaking-grammar',
    formula:
      "I'm currently blocked by the auth API; I've reached out to Alex and I'll circle back once the endpoint is deployed.",
    highlightKeywords: ['blocked by', 'reached out to', 'circle back once'],
    explanationEn:
      "Proactive status updates always pair the problem with the action you've already taken and your expected follow-up.",
    explanationVi:
      'Nguyên tắc vàng: Đừng chỉ nói "bị kẹt", hãy nêu rõ ai là người bạn đã liên hệ và hành động tiếp theo của bạn.',
    phoneticTip: "Stress 'blocked' and link 'reached-out-to' smoothly.",
    context: 'Daily Scrum • Standup Call',
  },
  {
    id: 'deadlines',
    icon: ShieldAlert,
    tag: 'Negotiating Deadlines',
    titleEn: 'Pushing back on unrealistic scope politely',
    titleVi: 'Từ chối dời deadline hoặc đề xuất cắt giảm scope',
    targetDocSlug: 'b2-01-negotiation-advanced',
    formula:
      'To ensure system stability, we can either ship the core checkout flow by Friday, or include all edge-case validations if we push the release to Tuesday.',
    highlightKeywords: [
      'To ensure system stability',
      'we can either... or...',
      'if we push the release',
    ],
    explanationEn:
      'Avoid a flat "No" when options exist. Give the stakeholder clear trade-offs between scope and timeline.',
    explanationVi:
      'Đừng bao giờ nói "Không làm được". Hãy đưa ra sự lựa chọn giữa chất lượng/tính năng và thời gian.',
    phoneticTip: "Pause briefly after 'stability' to give weight to engineering rigor.",
    context: 'Sprint Planning • Client Sync',
  },
  {
    id: 'code-review',
    icon: GitPullRequest,
    tag: 'Code Review & PR',
    titleEn: 'Giving constructive code review feedback',
    titleVi: 'Góp ý PR nhẹ nhàng, mang tính xây dựng',
    targetDocSlug: 'b2-03-presenting-architecture',
    formula:
      'Nit: Consider memoizing this calculation with useMemo to prevent unnecessary re-renders when the parent component updates.',
    highlightKeywords: ['Nit:', 'Consider memoizing', 'to prevent unnecessary re-renders'],
    explanationEn:
      "Using 'Nit:' signals that this is a minor suggestion, not a blocking request, keeping communication friction-free.",
    explanationVi:
      'Dùng tiền tố "Nit:" (tiểu tiết) để báo hiệu góp ý nhỏ, không chặn merge, giúp thảo luận PR dễ chịu hơn.',
    phoneticTip: "Pronounce 'memoizing' as /ˈmɛm.oʊ.aɪ.zɪŋ/.",
    context: 'GitHub / GitLab PR Review',
  },
  {
    id: 'incident',
    icon: Flame,
    tag: 'Live Incident',
    titleEn: 'Communicating during a live outage',
    titleVi: 'Thông báo sự cố Production cho khách hàng',
    targetDocSlug: 'delivering-bad-news',
    formula:
      "We've identified elevated latency in the payment gateway; we've rolled back the latest release and error rates are now returning to normal.",
    highlightKeywords: ["We've identified", "we've rolled back", 'returning to normal'],
    explanationEn:
      'In incident channels, prioritize concise state updates: Diagnosis ➔ Mitigation taken ➔ Current status.',
    explanationVi:
      'Trong kênh sự cố: Luôn nêu 3 bước ngắn gọn: Phát hiện lỗi ➔ Đã rollback/vá ➔ Trạng thái hiện tại.',
    phoneticTip: "Keep tone calm and steady; emphasize 'returning to normal'.",
    context: 'Slack #incident-war-room',
  },
  {
    id: 'salary',
    icon: BadgeDollarSign,
    tag: 'Salary & Offer',
    titleEn: 'Countering an offer professionally',
    titleVi: 'Thương lượng lương khéo léo khi nhận Offer',
    targetDocSlug: 'interview-preparation',
    formula:
      'Thank you for the offer! Given my hands-on experience scaling microservices and leading remote sprints, I was targeting a range closer to $X.',
    highlightKeywords: ['Given my hands-on experience', 'I was targeting a range closer to'],
    explanationEn:
      'Ground your counter-offer on specific high-impact value you bring rather than personal financial needs.',
    explanationVi:
      'Gắn mức lương mong muốn với kinh nghiệm thực chiến mang lại giá trị cho cty thay vì lý do cá nhân.',
    phoneticTip: 'Maintain an appreciative, confident tone without rushing.',
    context: 'HR Call • Offer Negotiation',
  },
]

const activeIndex = ref(0)
const currentScenario = computed(() => scenarios[activeIndex.value])

function handlePlayAudio() {
  if (!supported.value) return
  if (speaking.value) {
    stop()
    return
  }
  speak(currentScenario.value.formula, { rate: 0.95 })
}

async function handleCopy(text: string, id: string) {
  try {
    await navigator.clipboard.writeText(text)
    copiedId.value = id
    setTimeout(() => {
      if (copiedId.value === id) {
        copiedId.value = null
      }
    }, 2000)
  } catch {
    // fallback
  }
}
</script>

<template>
  <div
    class="w-full max-w-4xl mx-auto rounded-3xl border border-border/80 bg-card/70 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-primary/5"
  >
    <!-- Terminal Title Bar -->
    <div
      class="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 bg-muted/40 px-4 py-3 sm:px-6"
    >
      <div class="flex items-center gap-2">
        <div class="flex items-center gap-1.5">
          <span class="size-3 rounded-full bg-rose-500/80 inline-block" />
          <span class="size-3 rounded-full bg-amber-500/80 inline-block" />
          <span class="size-3 rounded-full bg-emerald-500/80 inline-block" />
        </div>
        <div class="h-4 w-px bg-border/80 mx-1" />
        <span class="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
          <Terminal class="size-3.5 text-primary" />
          <span>{{ currentScenario.context }}</span>
        </span>
      </div>

      <div
        class="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
      >
        <Sparkles class="size-3" />
        <span>{{ t('home.simulator.badge') }}</span>
      </div>
    </div>

    <!-- Scenario Tabs -->
    <div
      class="flex overflow-x-auto border-b border-border/60 bg-muted/20 p-1.5 sm:p-2 no-scrollbar"
    >
      <button
        v-for="(item, idx) in scenarios"
        :key="item.id"
        class="flex items-center gap-2 whitespace-nowrap rounded-xl px-3.5 py-2 text-xs font-medium transition-all duration-200 cursor-pointer"
        :class="
          activeIndex === idx
            ? 'bg-background text-foreground shadow-sm border border-border font-semibold'
            : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground'
        "
        @click="activeIndex = idx"
      >
        <component
          :is="item.icon"
          class="size-3.5"
          :class="activeIndex === idx ? 'text-primary' : 'opacity-60'"
        />
        <span>{{ item.tag }}</span>
      </button>
    </div>

    <!-- Content Panel -->
    <div class="p-5 sm:p-8 space-y-6">
      <!-- Title & Context -->
      <div class="space-y-1">
        <h3
          class="text-lg sm:text-xl font-bold tracking-tight text-foreground flex items-center gap-2"
        >
          <span>{{ locale === 'vi' ? currentScenario.titleVi : currentScenario.titleEn }}</span>
        </h3>
        <p class="text-xs sm:text-sm text-muted-foreground">
          {{ locale === 'vi' ? currentScenario.explanationVi : currentScenario.explanationEn }}
        </p>
      </div>

      <!-- Formula Box (Interactive Quote) -->
      <div
        class="relative group rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-teal-500/5 p-5 sm:p-6 transition-all duration-200"
      >
        <div class="flex items-start justify-between gap-4">
          <p class="text-base sm:text-lg lg:text-xl font-medium text-foreground leading-relaxed">
            “{{ currentScenario.formula }}”
          </p>
        </div>

        <!-- Phonetic / Pronunciation Tip -->
        <div
          class="mt-4 pt-3 border-t border-border/40 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground"
        >
          <span class="flex items-center gap-1.5 font-mono text-muted-foreground/80">
            <span class="text-amber-500 font-semibold">💡 Tip:</span>
            <span>{{ currentScenario.phoneticTip }}</span>
          </span>

          <span class="text-[0.7rem] font-mono opacity-60 uppercase tracking-wider">
            Ready to use
          </span>
        </div>
      </div>

      <!-- Action Toolbar -->
      <div class="flex flex-wrap items-center justify-between gap-3 pt-1">
        <div class="flex items-center gap-2">
          <!-- Audio Play Button -->
          <Button
            variant="default"
            size="sm"
            class="gap-2 rounded-xl shadow-sm transition-all duration-200"
            :class="speaking ? 'bg-rose-500 hover:bg-rose-600 text-white' : ''"
            @click="handlePlayAudio"
          >
            <Square v-if="speaking" class="size-4 animate-pulse" />
            <Volume2 v-else class="size-4" />
            <span>{{ speaking ? t('home.simulator.stop') : t('home.simulator.listen') }}</span>
          </Button>

          <!-- Copy Button -->
          <Button
            variant="outline"
            size="sm"
            class="gap-1.5 rounded-xl transition-all duration-200"
            @click="handleCopy(currentScenario.formula, currentScenario.id)"
          >
            <Check v-if="copiedId === currentScenario.id" class="size-4 text-emerald-500" />
            <Copy v-else class="size-4 text-muted-foreground" />
            <span>{{
              copiedId === currentScenario.id
                ? t('home.simulator.copied')
                : t('home.simulator.copy')
            }}</span>
          </Button>
        </div>

        <!-- Deep Link to Full Guide -->
        <RouterLink :to="`/docs/${currentScenario.targetDocSlug}`">
          <Button
            variant="ghost"
            size="sm"
            class="gap-1.5 rounded-xl text-xs font-semibold text-primary hover:text-primary/80"
          >
            <span>{{ t('home.simulator.viewDoc') }}</span>
            <ArrowRight class="size-3.5" />
          </Button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
