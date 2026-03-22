import { ref, watchEffect } from 'vue'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'english-notehub.theme'

function resolveInitialTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved === 'dark' || saved === 'light') {
    return saved
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const isDark = ref(resolveInitialTheme() === 'dark')

function applyTheme(dark: boolean): void {
  const root = document.documentElement
  if (dark) {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }

  const metaTheme = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')
  if (metaTheme) {
    metaTheme.content = dark ? '#0f1117' : '#f8fafc'
  }
}

watchEffect(() => {
  applyTheme(isDark.value)
})

export function useTheme() {
  function toggleTheme(): void {
    isDark.value = !isDark.value
    window.localStorage.setItem(STORAGE_KEY, isDark.value ? 'dark' : 'light')
  }

  function setTheme(theme: Theme): void {
    isDark.value = theme === 'dark'
    window.localStorage.setItem(STORAGE_KEY, theme)
  }

  return {
    isDark,
    toggleTheme,
    setTheme,
  }
}
