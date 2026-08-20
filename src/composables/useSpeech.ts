import { ref, readonly } from 'vue'

export interface SpeechOptions {
  lang?: string
  rate?: number
  pitch?: number
  volume?: number
}

interface SpeechComposable {
  speaking: Readonly<ReturnType<typeof ref<boolean>>>
  supported: Readonly<ReturnType<typeof ref<boolean>>>
  voices: Readonly<ReturnType<typeof ref<SpeechSynthesisVoice[]>>>
  speak: (text: string, options?: SpeechOptions) => void
  stop: () => void
  pause: () => void
  resume: () => void
}

const SPEECH_NOT_SUPPORTED = typeof window === 'undefined' || !('speechSynthesis' in window)

let _composable: SpeechComposable | null = null

function loadVoices(): SpeechSynthesisVoice[] {
  if (SPEECH_NOT_SUPPORTED) return []
  try {
    return window.speechSynthesis.getVoices() ?? []
  } catch {
    return []
  }
}

export function useSpeech(): SpeechComposable {
  if (_composable) return _composable

  const speaking = ref(false)
  const supported = ref(!SPEECH_NOT_SUPPORTED)
  const voices = ref<SpeechSynthesisVoice[]>(loadVoices())

  function pickVoice(lang: string): SpeechSynthesisVoice | undefined {
    if (!voices.value.length) return undefined
    const exact = voices.value.find((voice) => voice.lang === lang)
    if (exact) return exact
    const base = lang.split('-')[0]
    return voices.value.find((voice) => voice.lang.startsWith(base))
  }

  function speak(text: string, options?: SpeechOptions): void {
    if (!supported.value || !text) return
    try {
      window.speechSynthesis.cancel()
      const utter = new SpeechSynthesisUtterance(text)
      const lang = options?.lang ?? 'en-US'
      utter.lang = lang
      utter.rate = options?.rate ?? 1
      utter.pitch = options?.pitch ?? 1
      utter.volume = options?.volume ?? 1
      const voice = pickVoice(lang)
      if (voice) utter.voice = voice
      utter.onstart = () => {
        speaking.value = true
      }
      utter.onend = () => {
        speaking.value = false
      }
      utter.onerror = () => {
        speaking.value = false
      }
      window.speechSynthesis.speak(utter)
    } catch {
      speaking.value = false
    }
  }

  function stop(): void {
    if (!supported.value) return
    try {
      window.speechSynthesis.cancel()
    } catch {
      // ignore
    }
    speaking.value = false
  }

  function pause(): void {
    if (!supported.value) return
    try {
      window.speechSynthesis.pause()
    } catch {
      // ignore
    }
  }

  function resume(): void {
    if (!supported.value) return
    try {
      window.speechSynthesis.resume()
    } catch {
      // ignore
    }
  }

  if (!SPEECH_NOT_SUPPORTED) {
    const refresh = () => {
      voices.value = loadVoices()
    }
    if (typeof window.speechSynthesis.onvoiceschanged !== 'undefined') {
      window.speechSynthesis.onvoiceschanged = refresh
    }
    setTimeout(refresh, 250)
  }

  _composable = {
    speaking: readonly(speaking),
    supported: readonly(supported),
    voices: readonly(voices),
    speak,
    stop,
    pause,
    resume,
  }
  return _composable
}