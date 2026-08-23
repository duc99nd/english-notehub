<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { HelpCircle, CheckCircle2, XCircle, ArrowRight, Zap } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

const { t, locale } = useI18n()

interface QuizScenario {
  id: string
  contextEn: string
  contextVi: string
  questionEn: string
  questionVi: string
  options: {
    id: string
    text: string
    isCorrect: boolean
    explanationEn: string
    explanationVi: string
  }[]
  relatedDocSlug: string
}

const scenarios: QuizScenario[] = [
  {
    id: 'unreproducible-bug',
    contextEn:
      'QA files a ticket saying "Login button broken". You tested on 3 browsers and it works perfectly.',
    contextVi: 'QA báo bug "Nút Login bị lỗi", nhưng bạn test trên 3 trình duyệt đều chạy mượt mà.',
    questionEn: 'How should you respond professionally on Jira/Slack?',
    questionVi: 'Bạn nên phản hồi như thế nào trên Jira/Slack cho chuyên nghiệp nhất?',
    options: [
      {
        id: 'a',
        text: '“Works on my machine, you should clear your browser cache.”',
        isCorrect: false,
        explanationEn:
          'Too dismissive and shifts blame onto QA without constructive debugging steps.',
        explanationVi:
          'Nghe phủi trách nhiệm và đổ lỗi cho QA mà không đưa ra hướng giải quyết cụ thể.',
      },
      {
        id: 'b',
        text: '“I’m unable to reproduce this on staging; could you share your screen recording and console payload?”',
        isCorrect: true,
        explanationEn:
          'Objective, courteous, and requests actionable telemetry to diagnose the edge case.',
        explanationVi:
          'Khách quan, lịch sự và yêu cầu dữ liệu/video cần thiết để khoanh vùng nguyên nhân.',
      },
      {
        id: 'c',
        text: '“Not a bug, closing ticket.”',
        isCorrect: false,
        explanationEn: 'Extremely blunt and damages cross-team collaboration.',
        explanationVi: 'Quá cộc cằn và phá hỏng mối quan hệ hợp tác giữa Dev và QA.',
      },
    ],
    relatedDocSlug: 'client-situations',
  },
  {
    id: 'scope-creep',
    contextEn: 'Client asks for an unexpected payment method 2 days before release.',
    contextVi: 'Khách hàng yêu cầu thêm phương thức thanh toán mới 2 ngày trước đợt release.',
    questionEn: 'What is the best way to handle this request?',
    questionVi: 'Cách xử lý yêu cầu phát sinh này chuẩn mực nhất?',
    options: [
      {
        id: 'a',
        text: '“We can’t do that, the deadline is in 2 days.”',
        isCorrect: false,
        explanationEn: 'Flat refusal without offering an alternative timeline or roadmap option.',
        explanationVi:
          'Từ chối thẳng thừng mà không đưa ra phương án dời lịch hoặc lộ trình thay thế.',
      },
      {
        id: 'b',
        text: '“Sure, we will work overtime all night to finish it.”',
        isCorrect: false,
        explanationEn: 'Risks burn-out and introducing critical untested bugs into production.',
        explanationVi: 'Dễ dẫn đến kiệt sức và đưa bug chưa được kiểm thử kỹ lên production.',
      },
      {
        id: 'c',
        text: '“We’d love to support that! To avoid jeopardizing Friday’s release, can we prioritize it as phase 2 next week?”',
        isCorrect: true,
        explanationEn:
          'Validates the client’s idea while safeguarding release stability with a clear timeline.',
        explanationVi:
          'Ghi nhận mong muốn của khách nhưng bảo vệ an toàn cho bản release kèm thời gian cụ thể.',
      },
    ],
    relatedDocSlug: 'b2-01-negotiation-advanced',
  },
  {
    id: 'standup-blocker',
    contextEn: 'You are waiting for DevOps to provision an AWS S3 bucket.',
    contextVi: 'Bạn đang đợi DevOps cấp quyền AWS S3 bucket để tiếp tục công việc.',
    questionEn: 'How to state this in Daily Standup?',
    questionVi: 'Nói như thế nào trong buổi họp Standup hàng ngày?',
    options: [
      {
        id: 'a',
        text: '“I’m doing nothing today because DevOps didn’t give me the S3 bucket.”',
        isCorrect: false,
        explanationEn: 'Sounds passive-aggressive and gives the impression of being unproductive.',
        explanationVi: 'Nghe thụ động, đổ lỗi và tạo ấn tượng bạn ngồi không trong ngày.',
      },
      {
        id: 'b',
        text: '“I’m blocked on S3 bucket provisioning; I’ve messaged DevOps, and in the meantime I’ll write the mock unit tests.”',
        isCorrect: true,
        explanationEn: 'Shows proactive multitasking and clear status ownership.',
        explanationVi:
          'Thể hiện sự chủ động, vừa follow-up với DevOps vừa làm việc song song khác.',
      },
      {
        id: 'c',
        text: '“DevOps is too slow.”',
        isCorrect: false,
        explanationEn: 'Blunt criticism that is unprofessional in team meetings.',
        explanationVi: 'Chỉ trích thô thiển, không phù hợp trong môi trường chuyên nghiệp.',
      },
    ],
    relatedDocSlug: 'advanced-daily-standup',
  },
]

const currentIndex = ref(0)
const selectedOptionId = ref<string | null>(null)
const score = ref(0)

const currentScenario = computed(() => scenarios[currentIndex.value])
const isAnswered = computed(() => selectedOptionId.value !== null)
const selectedOption = computed(() =>
  currentScenario.value.options.find((o) => o.id === selectedOptionId.value),
)
const isCorrect = computed(() => selectedOption.value?.isCorrect === true)

function selectOption(id: string) {
  if (isAnswered.value) return
  selectedOptionId.value = id
  if (currentScenario.value.options.find((o) => o.id === id)?.isCorrect) {
    score.value++
  }
}

function handleNext() {
  selectedOptionId.value = null
  currentIndex.value = (currentIndex.value + 1) % scenarios.length
}
</script>

<template>
  <section id="quiz" class="space-y-8 scroll-mt-24">
    <div class="text-center space-y-3 max-w-2xl mx-auto">
      <div
        class="inline-flex items-center gap-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 px-3 py-1 text-xs font-semibold text-purple-500"
      >
        <Zap class="size-3.5" />
        <span>{{ t('home.quiz.badge') }}</span>
      </div>
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
        {{ t('home.quiz.title') }}
      </h2>
      <p class="text-sm sm:text-base text-muted-foreground leading-relaxed">
        {{ t('home.quiz.desc') }}
      </p>
    </div>

    <!-- Micro Quiz Box -->
    <div
      class="max-w-3xl mx-auto rounded-3xl border border-border/80 bg-card/70 backdrop-blur-xl p-6 sm:p-8 shadow-xl space-y-6"
    >
      <!-- Header / Context Bar -->
      <div class="flex items-center justify-between border-b border-border/60 pb-4">
        <span class="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
          <HelpCircle class="size-4 text-purple-500" />
          <span>Scenario {{ currentIndex + 1 }} of {{ scenarios.length }}</span>
        </span>

        <span
          class="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-mono font-bold text-purple-500"
        >
          {{ t('home.quiz.streakLabel') }}: {{ score }} / {{ scenarios.length }}
        </span>
      </div>

      <!-- Situation Context Prompt -->
      <div class="rounded-2xl border border-border/60 bg-muted/30 p-4 space-y-1">
        <p class="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
          Context
        </p>
        <p class="text-sm text-foreground/90 font-medium leading-relaxed">
          {{ locale === 'vi' ? currentScenario.contextVi : currentScenario.contextEn }}
        </p>
      </div>

      <!-- Question -->
      <div class="space-y-1">
        <h3 class="text-base sm:text-lg font-bold text-foreground">
          {{ locale === 'vi' ? currentScenario.questionVi : currentScenario.questionEn }}
        </h3>
      </div>

      <!-- Options List -->
      <div class="space-y-3">
        <button
          v-for="opt in currentScenario.options"
          :key="opt.id"
          :disabled="isAnswered"
          class="w-full text-left rounded-2xl border p-4 text-sm font-medium transition-all duration-200 cursor-pointer flex items-start gap-3"
          :class="[
            !isAnswered &&
              'hover:bg-muted/60 hover:border-primary/40 border-border/70 bg-background/50',
            isAnswered &&
              opt.isCorrect &&
              'border-emerald-500/60 bg-emerald-500/10 text-foreground',
            isAnswered &&
              !opt.isCorrect &&
              selectedOptionId === opt.id &&
              'border-rose-500/60 bg-rose-500/10 text-foreground',
            isAnswered &&
              !opt.isCorrect &&
              selectedOptionId !== opt.id &&
              'opacity-50 border-border/40 bg-background/30',
          ]"
          @click="selectOption(opt.id)"
        >
          <span
            class="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs font-mono font-bold"
            :class="[
              !isAnswered && 'border-border bg-muted text-muted-foreground',
              isAnswered && opt.isCorrect && 'border-emerald-500 bg-emerald-500 text-white',
              isAnswered &&
                !opt.isCorrect &&
                selectedOptionId === opt.id &&
                'border-rose-500 bg-rose-500 text-white',
              isAnswered &&
                !opt.isCorrect &&
                selectedOptionId !== opt.id &&
                'border-border text-muted-foreground',
            ]"
          >
            {{ opt.id.toUpperCase() }}
          </span>
          <span class="flex-1 leading-snug">{{ opt.text }}</span>
        </button>
      </div>

      <!-- Feedback Banner (When Answered) -->
      <div
        v-if="isAnswered && selectedOption"
        class="rounded-2xl border p-4 space-y-2 transition-all duration-300"
        :class="
          isCorrect ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-rose-500/30 bg-rose-500/5'
        "
      >
        <div
          class="flex items-center gap-2 font-bold text-sm"
          :class="isCorrect ? 'text-emerald-500' : 'text-rose-500'"
        >
          <CheckCircle2 v-if="isCorrect" class="size-4" />
          <XCircle v-else class="size-4" />
          <span>{{ isCorrect ? t('home.quiz.correctAlert') : t('home.quiz.incorrectAlert') }}</span>
        </div>

        <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          {{ locale === 'vi' ? selectedOption.explanationVi : selectedOption.explanationEn }}
        </p>
      </div>

      <!-- Bottom Controls -->
      <div class="flex items-center justify-between pt-2">
        <RouterLink
          :to="`/docs/${currentScenario.relatedDocSlug}`"
          class="text-xs font-semibold text-primary hover:underline"
        >
          {{ t('home.quiz.viewLesson') }} →
        </RouterLink>

        <Button
          v-if="isAnswered"
          size="sm"
          class="gap-1.5 rounded-xl font-semibold shadow-sm"
          @click="handleNext"
        >
          <span>{{ t('home.quiz.nextScenario') }}</span>
          <ArrowRight class="size-3.5" />
        </Button>
      </div>
    </div>
  </section>
</template>
