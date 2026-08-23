<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { XCircle, CheckCircle2, AlertTriangle, Copy, Check, Volume2, Square } from 'lucide-vue-next'
import { useSpeech } from '@/composables/useSpeech'

const { t, locale } = useI18n()
const { speaking, supported, speak, stop } = useSpeech()

const copiedId = ref<string | null>(null)
const playingId = ref<string | null>(null)

interface PitfallItem {
  id: string
  bad: string
  good: string
  tag: string
  whyEn: string
  whyVi: string
}

const pitfalls: PitfallItem[] = [
  {
    id: 'explain',
    bad: 'I will explain you the system design.',
    good: 'Let me explain the system design to you / Let me walk you through this.',
    tag: 'Preposition Pitfall',
    whyEn:
      "'Explain' requires a direct object before the person ('explain X to someone') or use the natural idiom 'walk you through'.",
    whyVi:
      'Động từ "explain" không đi kèm trực tiếp tân ngữ chỉ người (phải dùng "explain something to someone") hoặc tự nhiên hơn là "walk someone through".',
  },
  {
    id: 'requirements',
    bad: 'Can you give me requirement?',
    good: 'Could you share the acceptance criteria and specifications?',
    tag: 'Professional Jargon',
    whyEn:
      "'Requirement' is countable and vague; in Agile, 'acceptance criteria' or 'specifications' is precise and polite.",
    whyVi:
      'Hỏi "requirement" nghe cộc lốc và mơ hồ; trong môi trường Agile chuẩn, dùng "acceptance criteria" hoặc "specs" sẽ chuyên nghiệp hơn.',
  },
  {
    id: 'blame-backend',
    bad: 'I think this is bug in backend.',
    good: 'It looks like an edge case in the backend payload response.',
    tag: 'Diplomatic Phrasing',
    whyEn:
      'Avoid direct finger-pointing. Frame bugs objectively around payload schemas or unexpected edge cases.',
    whyVi:
      'Tránh đổ lỗi trực diện ("lỗi do backend"). Hãy mô tả khách quan bằng các thuật ngữ như "edge case", "payload schema".',
  },
  {
    id: 'urgent-demand',
    bad: 'Please fix immediately.',
    good: 'Could we prioritize this hotfix for the upcoming patch release?',
    tag: 'Polite Urgency',
    whyEn:
      "Demanding 'immediately' creates unnecessary friction; framing urgency through release priority maintains team trust.",
    whyVi:
      'Yêu cầu "immediately" dễ tạo cảm giác gay gắt, hách dịch; đề xuất "prioritize as a hotfix" vừa thúc đẩy tiến độ vừa giữ hòa khí.',
  },
  {
    id: 'cannot-do',
    bad: 'I cannot do this task.',
    good: 'This is currently outside our sprint scope; should we ticket it for next cycle?',
    tag: 'Scrum Alignment',
    whyEn:
      "Avoid stopping at 'cannot'. Explain the current constraint and propose a realistic planning option.",
    whyVi:
      'Tránh nói thẳng "không làm được". Hãy viện dẫn phạm vi sprint và đề xuất tạo ticket để lập kế hoạch trong đợt sau.',
  },
  {
    id: 'agree-be',
    bad: 'I am agree with your proposal.',
    good: 'I agree with your proposal / That aligns well with our architectural goals.',
    tag: 'Grammar Trap',
    whyEn: "'Agree' is a verb, not an adjective. Saying 'I am agree' is a common ESL error.",
    whyVi:
      '"Agree" là động từ, không dùng "I am agree". Để nghe đẳng cấp hơn, bạn có thể dùng "That aligns with our goals".',
  },
]

function handlePlay(text: string, id: string) {
  if (!supported.value) return
  if (speaking.value && playingId.value === id) {
    stop()
    playingId.value = null
    return
  }
  playingId.value = id
  speak(text, { rate: 0.95 })
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
  <section id="pitfalls" class="space-y-8 scroll-mt-24">
    <div class="text-center space-y-3 max-w-2xl mx-auto">
      <div
        class="inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 px-3 py-1 text-xs font-semibold text-amber-500"
      >
        <AlertTriangle class="size-3.5" />
        <span>{{ t('home.pitfalls.badge') }}</span>
      </div>
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
        {{ t('home.pitfalls.title') }}
      </h2>
      <p class="text-sm sm:text-base text-muted-foreground leading-relaxed">
        {{ t('home.pitfalls.desc') }}
      </p>
    </div>

    <!-- Pitfalls Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="item in pitfalls"
        :key="item.id"
        class="flex flex-col justify-between rounded-3xl border border-border/80 bg-card/60 p-6 backdrop-blur-md transition-all duration-300 hover:shadow-lg hover:border-border"
      >
        <div class="space-y-4">
          <!-- Tag -->
          <div class="flex items-center justify-between">
            <span
              class="rounded-full bg-muted px-2.5 py-0.5 text-[0.7rem] font-mono font-medium text-muted-foreground"
            >
              {{ item.tag }}
            </span>
          </div>

          <!-- Bad Example -->
          <div class="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-3.5 space-y-1">
            <div class="flex items-center gap-1.5 text-xs font-bold text-rose-500">
              <XCircle class="size-3.5" />
              <span>{{ t('home.pitfalls.awkwardLabel') }}</span>
            </div>
            <p class="text-sm text-foreground/80 line-through opacity-75 font-mono">
              {{ item.bad }}
            </p>
          </div>

          <!-- Good Example -->
          <div class="rounded-2xl border border-emerald-500/25 bg-emerald-500/5 p-3.5 space-y-2">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-1.5 text-xs font-bold text-emerald-500">
                <CheckCircle2 class="size-3.5" />
                <span>{{ t('home.pitfalls.recommendedLabel') }}</span>
              </div>

              <!-- Quick Audio and Copy -->
              <div class="flex items-center gap-1">
                <button
                  class="p-1 rounded-lg hover:bg-emerald-500/10 text-emerald-500 transition-colors cursor-pointer"
                  :title="t('home.simulator.listen')"
                  @click="handlePlay(item.good, item.id)"
                >
                  <Square v-if="speaking && playingId === item.id" class="size-3.5 animate-pulse" />
                  <Volume2 v-else class="size-3.5" />
                </button>
                <button
                  class="p-1 rounded-lg hover:bg-emerald-500/10 text-emerald-500 transition-colors cursor-pointer"
                  :title="t('home.pitfalls.copyRecommended')"
                  @click="handleCopy(item.good, item.id)"
                >
                  <Check v-if="copiedId === item.id" class="size-3.5 text-emerald-600 font-bold" />
                  <Copy v-else class="size-3.5" />
                </button>
              </div>
            </div>

            <p class="text-sm font-medium text-foreground leading-snug">
              {{ item.good }}
            </p>
          </div>

          <!-- Explanation -->
          <div class="text-xs text-muted-foreground leading-relaxed pt-1">
            <span class="font-semibold text-foreground/80"
              >{{ t('home.pitfalls.whyLabel') }}:
            </span>
            <span>{{ locale === 'vi' ? item.whyVi : item.whyEn }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
