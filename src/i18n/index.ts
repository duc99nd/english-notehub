import { createI18n } from 'vue-i18n'
import en from '@/locales/en'
import vi from '@/locales/vi'

export type AppLocale = 'en' | 'vi'

const STORAGE_KEY = 'english-notehub.locale'

function resolveLocale(): AppLocale {
  if (typeof window === 'undefined') {
    return 'en'
  }

  const savedLocale = window.localStorage.getItem(STORAGE_KEY)
  return savedLocale === 'vi' ? 'vi' : 'en'
}

const i18n = createI18n({
  legacy: false,
  locale: resolveLocale(),
  fallbackLocale: 'en',
  messages: {
    en,
    vi,
  },
})

export function persistLocale(locale: AppLocale): void {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, locale)
  }
}

export default i18n
