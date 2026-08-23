<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { Search, FileText, X, CornerDownLeft } from 'lucide-vue-next'
import { getDocs, type DocSummary } from '@/lib/content'

const props = defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  (e: 'update:open', value: boolean): void
}>()

const { t, locale } = useI18n()
const router = useRouter()
const docs = getDocs()

const searchQuery = ref('')
const selectedIndex = ref(0)
const inputRef = ref<HTMLInputElement | null>(null)

const filteredDocs = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) {
    // Show top curated or first 8 documents as defaults
    return docs.slice(0, 8)
  }
  return docs
    .filter((doc) => {
      const titleEn = (doc.titleEn || '').toLowerCase()
      const titleVi = (doc.titleVi || '').toLowerCase()
      const subEn = (doc.subtitleEn || '').toLowerCase()
      const subVi = (doc.subtitleVi || '').toLowerCase()
      const catEn = (doc.categoryEn || '').toLowerCase()
      const catVi = (doc.categoryVi || '').toLowerCase()
      const tags = (doc.tags || []).join(' ').toLowerCase()
      const level = (doc.level || doc.cefr || '').toLowerCase()
      return (
        titleEn.includes(q) ||
        titleVi.includes(q) ||
        subEn.includes(q) ||
        subVi.includes(q) ||
        catEn.includes(q) ||
        catVi.includes(q) ||
        tags.includes(q) ||
        level.includes(q)
      )
    })
    .slice(0, 12)
})

watch(
  () => props.open,
  (isOpen) => {
    if (isOpen) {
      searchQuery.value = ''
      selectedIndex.value = 0
      nextTick(() => {
        inputRef.value?.focus()
      })
    }
  },
)

watch(searchQuery, () => {
  selectedIndex.value = 0
})

function closeModal() {
  emit('update:open', false)
}

function selectDoc(doc: DocSummary) {
  closeModal()
  router.push(`/docs/${doc.slug}`)
}

function handleKeydown(e: KeyboardEvent) {
  if (!props.open) return

  if (e.key === 'ArrowDown') {
    e.preventDefault()
    if (filteredDocs.value.length > 0) {
      selectedIndex.value = (selectedIndex.value + 1) % filteredDocs.value.length
    }
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    if (filteredDocs.value.length > 0) {
      selectedIndex.value =
        (selectedIndex.value - 1 + filteredDocs.value.length) % filteredDocs.value.length
    }
  } else if (e.key === 'Enter') {
    e.preventDefault()
    const target = filteredDocs.value[selectedIndex.value]
    if (target) {
      selectDoc(target)
    }
  } else if (e.key === 'Escape') {
    closeModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24 bg-background/80 backdrop-blur-md transition-all duration-200"
      @click.self="closeModal"
    >
      <div
        class="w-full max-w-2xl rounded-3xl border border-border/80 bg-card shadow-2xl overflow-hidden transition-all duration-200 animate-in fade-in zoom-in-95"
      >
        <!-- Search Bar Header -->
        <div class="relative flex items-center border-b border-border px-4 py-3 sm:px-6">
          <Search class="size-5 text-muted-foreground mr-3 shrink-0" />
          <input
            ref="inputRef"
            v-model="searchQuery"
            type="text"
            class="w-full bg-transparent text-base sm:text-lg font-medium text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
            :placeholder="t('home.searchModal.placeholder')"
          />
          <button
            class="p-1 rounded-xl hover:bg-muted text-muted-foreground transition-colors ml-2"
            @click="closeModal"
          >
            <X class="size-4" />
          </button>
        </div>

        <!-- Results List -->
        <div class="max-h-[60vh] overflow-y-auto p-2 space-y-1">
          <div
            v-if="filteredDocs.length === 0"
            class="p-8 text-center text-sm text-muted-foreground"
          >
            {{ t('home.searchModal.noResults', { query: searchQuery }) }}
          </div>

          <button
            v-for="(doc, idx) in filteredDocs"
            :key="doc.id"
            class="w-full flex items-center justify-between rounded-2xl px-4 py-3 text-left transition-all duration-150 cursor-pointer group"
            :class="
              selectedIndex === idx
                ? 'bg-primary/10 text-foreground border border-primary/30'
                : 'text-foreground/80 hover:bg-muted/60 border border-transparent'
            "
            @click="selectDoc(doc)"
            @mouseenter="selectedIndex = idx"
          >
            <div class="flex items-center gap-3 min-w-0 pr-3">
              <div
                class="flex size-9 shrink-0 items-center justify-center rounded-xl border text-muted-foreground transition-colors"
                :class="
                  selectedIndex === idx
                    ? 'border-primary/40 bg-primary/10 text-primary'
                    : 'border-border bg-muted/40'
                "
              >
                <FileText class="size-4" />
              </div>

              <div class="min-w-0">
                <p class="text-sm font-bold truncate text-foreground">
                  {{ locale === 'vi' ? doc.titleVi : doc.titleEn }}
                </p>
                <p class="text-xs text-muted-foreground truncate">
                  {{
                    locale === 'vi' ? doc.subtitleVi || doc.titleEn : doc.subtitleEn || doc.titleVi
                  }}
                </p>
              </div>
            </div>

            <div class="flex items-center gap-2 shrink-0">
              <span
                v-if="doc.level || doc.cefr"
                class="rounded-full bg-primary/10 px-2 py-0.5 text-[0.65rem] font-mono font-bold text-primary"
              >
                {{ doc.level || doc.cefr }}
              </span>
              <CornerDownLeft
                class="size-3.5 text-muted-foreground transition-transform"
                :class="selectedIndex === idx ? 'text-primary translate-x-0.5' : 'opacity-0'"
              />
            </div>
          </button>
        </div>

        <!-- Footer Shortcuts -->
        <div
          class="flex items-center justify-between border-t border-border/60 bg-muted/30 px-4 py-2.5 text-xs text-muted-foreground font-mono"
        >
          <div class="flex items-center gap-3">
            <span>{{ t('home.searchModal.navigate') }}</span>
            <span>{{ t('home.searchModal.pressEnter') }}</span>
          </div>
          <span>{{ t('home.searchModal.pressEsc') }}</span>
        </div>
      </div>
    </div>
  </Teleport>
</template>
