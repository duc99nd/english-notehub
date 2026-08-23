<script setup lang="ts">
import { computed } from 'vue'
import { Play, Square, Volume2, AlertCircle } from 'lucide-vue-next'
import { useSpeech, type SpeechOptions } from '@/composables/useSpeech'
import { Button } from '@/components/ui/button'

interface Props {
  text?: string
  lang?: string
  rate?: number
  label?: string
  stopLabel?: string
  variant?: 'default' | 'outline' | 'ghost' | 'secondary'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

const props = withDefaults(defineProps<Props>(), {
  text: '',
  lang: 'en-US',
  rate: 1,
  label: 'Listen',
  stopLabel: 'Stop',
  variant: 'outline',
  size: 'sm',
})

const { speaking, supported, speak, stop } = useSpeech()

const hasText = computed(() => Boolean(props.text && props.text.trim()))

function handleClick(): void {
  if (!supported.value || !hasText.value) return
  if (speaking.value) {
    stop()
    return
  }
  const options: SpeechOptions = { lang: props.lang, rate: props.rate }
  speak(props.text, options)
}
</script>

<template>
  <Button
    v-if="!supported"
    :variant="variant"
    :size="size"
    disabled
    class="cursor-not-allowed opacity-60"
    :aria-label="`Listen (audio not supported in this browser)`"
  >
    <AlertCircle class="size-4" />
    <span>Audio not supported</span>
  </Button>

  <Button
    v-else
    :variant="speaking ? 'default' : variant"
    :size="size"
    :disabled="!hasText"
    class="gap-2"
    :aria-label="speaking ? stopLabel : label"
    @click="handleClick"
  >
    <Square v-if="speaking" class="size-4 animate-pulse" />
    <Play v-else-if="hasText" class="size-4" />
    <Volume2 v-else class="size-4 opacity-60" />
    <span>{{ speaking ? stopLabel : label }}</span>
  </Button>
</template>
