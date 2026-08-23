<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { CheckCircle2, Circle, RotateCcw, Sparkles, Volume2 } from 'lucide-vue-next'
import ListenButton from '@/components/learn/ListenButton.vue'
import { Button } from '@/components/ui/button'
import type { QuizItem } from '@/lib/content'

interface Props {
  slug: string
  audioScript?: string
  quiz?: QuizItem[]
  estimatedMinutes?: number
}

const props = withDefaults(defineProps<Props>(), {
  audioScript: '',
  quiz: () => [],
  estimatedMinutes: undefined,
})

const emit = defineEmits<{
  completionChange: [completed: boolean]
}>()

const { t } = useI18n()
const STORAGE_KEY = 'english-notehub:completed-lessons:v1'

const answers = ref<string[]>([])
const checked = ref(false)
const completed = ref(false)

const hasPractice = computed(() => Boolean(props.audioScript.trim()) || props.quiz.length > 0)
const answeredCount = computed(() => answers.value.filter((answer) => answer.trim()).length)
const canCheck = computed(() => props.quiz.length > 0 && answeredCount.value === props.quiz.length)
const score = computed(() =>
  props.quiz.reduce((total, item, index) => {
    return total + (normalize(answers.value[index]) === normalize(item.answer) ? 1 : 0)
  }, 0),
)

function normalize(value: string | undefined): string {
  return String(value ?? '')
    .trim()
    .toLocaleLowerCase()
    .replace(/\s+/g, ' ')
}

function readCompleted(): Set<string> {
  if (typeof window === 'undefined') return new Set()
  try {
    const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    return new Set(Array.isArray(parsed) ? parsed.filter((value) => typeof value === 'string') : [])
  } catch {
    return new Set()
  }
}

function loadLessonState(): void {
  answers.value = props.quiz.map(() => '')
  checked.value = false
  completed.value = readCompleted().has(props.slug)
  emit('completionChange', completed.value)
}

function toggleCompleted(): void {
  const stored = readCompleted()
  if (completed.value) stored.delete(props.slug)
  else stored.add(props.slug)
  completed.value = !completed.value
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...stored].sort()))
  emit('completionChange', completed.value)
}

function checkAnswers(): void {
  if (canCheck.value) checked.value = true
}

function resetQuiz(): void {
  answers.value = props.quiz.map(() => '')
  checked.value = false
}

function answerClass(item: QuizItem, index: number): string {
  if (!checked.value) return 'border-foreground/10 bg-background/70'
  return normalize(answers.value[index]) === normalize(item.answer)
    ? 'border-emerald-500/40 bg-emerald-500/10'
    : 'border-rose-500/40 bg-rose-500/10'
}

watch(() => props.slug, loadLessonState)
onMounted(loadLessonState)
</script>

<template>
  <section
    v-if="hasPractice"
    class="border-t border-foreground/10 bg-primary/[0.035] px-6 py-8 sm:px-8 lg:px-12"
    :aria-labelledby="`practice-${slug}`"
  >
    <div class="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <div class="flex items-center gap-2 text-primary">
          <Sparkles class="size-4" aria-hidden="true" />
          <p class="notehub-label">{{ t('lessonPractice.eyebrow') }}</p>
        </div>
        <h2 :id="`practice-${slug}`" class="mt-2 text-xl font-semibold text-foreground">
          {{ t('lessonPractice.title') }}
        </h2>
        <p class="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
          {{ t('lessonPractice.description') }}
        </p>
      </div>

      <Button
        type="button"
        :variant="completed ? 'secondary' : 'outline'"
        class="shrink-0 gap-2"
        @click="toggleCompleted"
      >
        <CheckCircle2 v-if="completed" class="size-4 text-emerald-500" aria-hidden="true" />
        <Circle v-else class="size-4" aria-hidden="true" />
        {{ completed ? t('lessonPractice.completed') : t('lessonPractice.markComplete') }}
      </Button>
    </div>

    <div v-if="audioScript" class="mt-7 rounded-2xl border border-foreground/10 bg-card p-5">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div class="flex items-center gap-2 font-semibold text-foreground">
            <Volume2 class="size-4 text-primary" aria-hidden="true" />
            <h3>{{ t('lessonPractice.listeningTitle') }}</h3>
          </div>
          <p class="mt-1 text-sm text-muted-foreground">
            {{ t('lessonPractice.listeningDescription') }}
          </p>
        </div>
        <ListenButton
          :text="audioScript"
          lang="en-US"
          :rate="0.92"
          :label="t('lessonPractice.listen')"
          :stop-label="t('lessonPractice.stop')"
        />
      </div>
      <details class="mt-4 rounded-xl bg-muted/50 px-4 py-3 text-sm">
        <summary class="cursor-pointer font-medium text-foreground">
          {{ t('lessonPractice.transcript') }}
        </summary>
        <p class="mt-3 whitespace-pre-line leading-6 text-muted-foreground">{{ audioScript }}</p>
      </details>
    </div>

    <form v-if="quiz.length" class="mt-6 space-y-4" @submit.prevent="checkAnswers">
      <div class="flex items-end justify-between gap-4">
        <div>
          <h3 class="font-semibold text-foreground">{{ t('lessonPractice.quizTitle') }}</h3>
          <p class="mt-1 text-sm text-muted-foreground">
            {{ t('lessonPractice.quizProgress', { answered: answeredCount, total: quiz.length }) }}
          </p>
        </div>
        <p v-if="checked" class="font-mono text-sm font-semibold text-primary" role="status">
          {{ t('lessonPractice.score', { score, total: quiz.length }) }}
        </p>
      </div>

      <fieldset
        v-for="(item, index) in quiz"
        :key="`${slug}-${index}`"
        class="rounded-2xl border p-5 transition-colors"
        :class="answerClass(item, index)"
      >
        <legend class="px-1 text-sm font-semibold leading-6 text-foreground">
          {{ index + 1 }}. {{ item.prompt }}
        </legend>

        <div v-if="item.type === 'choice' && item.options?.length" class="mt-3 grid gap-2">
          <label
            v-for="option in item.options"
            :key="option"
            class="flex cursor-pointer items-start gap-3 rounded-xl border border-foreground/10 bg-card px-4 py-3 text-sm text-foreground transition-colors hover:border-primary/30"
          >
            <input
              v-model="answers[index]"
              type="radio"
              :name="`${slug}-${index}`"
              :value="option"
              class="mt-1"
            />
            <span>{{ option }}</span>
          </label>
        </div>

        <label v-else class="mt-3 block">
          <span class="sr-only">{{ item.prompt }}</span>
          <input
            v-model="answers[index]"
            type="text"
            autocomplete="off"
            class="h-11 w-full rounded-xl border border-foreground/10 bg-card px-4 text-sm text-foreground outline-none transition-colors focus:border-primary/50"
            :placeholder="t('lessonPractice.answerPlaceholder')"
          />
        </label>

        <p v-if="checked" class="mt-3 text-sm" aria-live="polite">
          <span
            v-if="normalize(answers[index]) === normalize(item.answer)"
            class="font-medium text-emerald-600 dark:text-emerald-400"
          >
            {{ t('lessonPractice.correct') }}
          </span>
          <span v-else class="text-rose-600 dark:text-rose-400">
            {{ t('lessonPractice.correctAnswer', { answer: item.answer }) }}
          </span>
        </p>
      </fieldset>

      <div class="flex flex-wrap gap-3">
        <Button type="submit" :disabled="!canCheck">{{ t('lessonPractice.check') }}</Button>
        <Button v-if="checked" type="button" variant="outline" class="gap-2" @click="resetQuiz">
          <RotateCcw class="size-4" aria-hidden="true" />
          {{ t('lessonPractice.retry') }}
        </Button>
      </div>
    </form>
  </section>
</template>
