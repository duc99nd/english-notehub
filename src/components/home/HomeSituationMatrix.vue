<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import {
  MessageSquareCode,
  Users,
  ShieldAlert,
  GitPullRequest,
  TrendingUp,
  Volume2,
  ArrowRight,
  Sparkles,
} from 'lucide-vue-next'

const { t, locale } = useI18n()

interface MatrixCategory {
  id: string
  icon: any
  gradient: string
  borderAccent: string
  titleEn: string
  titleVi: string
  descEn: string
  descVi: string
  sampleFormula: string
  mainDocSlug: string
  relatedDocs: { slug: string; labelEn: string; labelVi: string }[]
  lessonCount: number
}

const matrixCategories: MatrixCategory[] = [
  {
    id: 'standup-slack',
    icon: MessageSquareCode,
    gradient: 'from-blue-500/10 via-indigo-500/5 to-transparent text-blue-500',
    borderAccent: 'hover:border-blue-500/40',
    titleEn: 'Daily Standup & Quick Chat',
    titleVi: 'Họp Standup & Chat Slack Nhanh',
    descEn: 'Status reports, blocker alerts, requesting assistance, and sick leave notices.',
    descVi: 'Báo cáo tiến độ, thông báo blocker, nhờ đồng nghiệp hỗ trợ và xin nghỉ phép ngắn gọn.',
    sampleFormula: '“I’ve wrapped up the auth migration; today I’m tackling the search latency.”',
    mainDocSlug: 'speaking-grammar',
    relatedDocs: [
      { slug: 'speaking-grammar', labelEn: 'Speaking Grammar', labelVi: 'Ngữ pháp Nói' },
      { slug: 'advanced-daily-standup', labelEn: 'Advanced Standup', labelVi: 'Standup Nâng cao' },
      {
        slug: 'professional-chat-communication',
        labelEn: 'Slack & Teams',
        labelVi: 'Chat Slack Chuyên nghiệp',
      },
    ],
    lessonCount: 8,
  },
  {
    id: 'meetings-rapport',
    icon: Users,
    gradient: 'from-emerald-500/10 via-teal-500/5 to-transparent text-emerald-500',
    borderAccent: 'hover:border-emerald-500/40',
    titleEn: 'Client Meetings & Facilitation',
    titleVi: 'Họp Khách Hàng & Team Lead',
    descEn:
      'Natural small talk, taking the floor, polite interruptions, and summarizing action items.',
    descVi: 'Mở đầu cuộc họp tự nhiên, ngắt lời lịch sự, điều phối và chốt biên bản cuộc họp.',
    sampleFormula:
      '“Before we dive into the agenda, could we quickly confirm if everyone can see my screen?”',
    mainDocSlug: 'meeting-templates',
    relatedDocs: [
      { slug: 'meeting-templates', labelEn: 'Meeting Templates', labelVi: 'Mẫu câu Họp' },
      { slug: 'small-talk-rapport', labelEn: 'Small Talk', labelVi: 'Small Talk & Kết nối' },
      {
        slug: 'interrupting-holding-floor',
        labelEn: 'Polite Interruption',
        labelVi: 'Ngắt lời Lịch sự',
      },
    ],
    lessonCount: 10,
  },
  {
    id: 'pushback-scope',
    icon: ShieldAlert,
    gradient: 'from-rose-500/10 via-orange-500/5 to-transparent text-rose-500',
    borderAccent: 'hover:border-rose-500/40',
    titleEn: 'Difficult Clients & Pushbacks',
    titleVi: 'Tình Huống Khó & Từ Chối Khéo',
    descEn:
      'Negotiating tight deadlines, saying no to scope creep, and delivering critical outage updates.',
    descVi: 'Thương lượng dời hạn chót, từ chối yêu cầu phát sinh và báo cáo sự cố sập server.',
    sampleFormula:
      '“Adding this requirement mid-sprint would risk QA validation; can we backlog it for Sprint 24?”',
    mainDocSlug: 'client-situations',
    relatedDocs: [
      { slug: 'client-situations', labelEn: 'Client Scenarios', labelVi: 'Tình huống Khách hàng' },
      {
        slug: 'b2-01-negotiation-advanced',
        labelEn: 'Negotiate Deadlines',
        labelVi: 'Đàm phán Deadline',
      },
      {
        slug: 'pushing-back-unreasonable-requests',
        labelEn: 'Saying No Politely',
        labelVi: 'Từ chối Khéo léo',
      },
    ],
    lessonCount: 10,
  },
  {
    id: 'code-review',
    icon: GitPullRequest,
    gradient: 'from-purple-500/10 via-pink-500/5 to-transparent text-purple-500',
    borderAccent: 'hover:border-purple-500/40',
    titleEn: 'Code Reviews & Architecture',
    titleVi: 'Review Code & Thảo Luận Kỹ Thuật',
    descEn:
      'Giving diplomatic feedback on pull requests, pitching refactoring, and comparing trade-offs.',
    descVi:
      'Nhận xét Pull Request xây dựng, thuyết phục sếp refactor code và phân tích trade-off hệ thống.',
    sampleFormula:
      '“What do you think about extracting this handler into a custom hook for better testability?”',
    mainDocSlug: 'b2-03-presenting-architecture',
    relatedDocs: [
      {
        slug: 'b2-03-presenting-architecture',
        labelEn: 'Code Review Phrases',
        labelVi: 'Mẫu câu Code Review',
      },
      {
        slug: 'b2-08-data-storytelling',
        labelEn: 'Tech Trade-offs',
        labelVi: 'So sánh Giải pháp',
      },
      {
        slug: 'b2-07-proposal-writing',
        labelEn: 'Pitching Refactor',
        labelVi: 'Thuyết phục Refactor',
      },
    ],
    lessonCount: 12,
  },
  {
    id: 'career-salary',
    icon: TrendingUp,
    gradient: 'from-amber-500/10 via-yellow-500/5 to-transparent text-amber-500',
    borderAccent: 'hover:border-amber-500/40',
    titleEn: 'Interviews & Career Growth',
    titleVi: 'Phỏng Vấn & Đàm Phán Lương',
    descEn:
      '60-second elevator pitches, system design interview defense, and confident compensation talks.',
    descVi: 'Giới thiệu bản thân ấn tượng, bảo vệ System Design và đàm phán đãi ngộ tự tin.',
    sampleFormula:
      '“In my previous role, I optimized database indexing which reduced query latency by 40%.”',
    mainDocSlug: 'interview-preparation',
    relatedDocs: [
      { slug: 'interview-preparation', labelEn: 'Job Interviews', labelVi: 'Phỏng vấn Tuyển dụng' },
      { slug: 'b2-01-negotiation-advanced', labelEn: 'Negotiation', labelVi: 'Thương lượng' },
      { slug: 'c1-02-board-presentations', labelEn: 'Executive Pitch', labelVi: 'Pitch Cấp cao' },
    ],
    lessonCount: 10,
  },
  {
    id: 'pronunciation-vocab',
    icon: Volume2,
    gradient: 'from-cyan-500/10 via-sky-500/5 to-transparent text-cyan-500',
    borderAccent: 'hover:border-cyan-500/40',
    titleEn: 'Pronunciation & Tech Words',
    titleVi: 'Phát Âm & Từ Vựng IT Dễ Nhầm',
    descEn:
      'IPA phonetics for tricky tech jargon (cache, archive, hierarchy) and IT phrasal verbs.',
    descVi:
      'Phiên âm chuẩn IPA các từ chuyên ngành hay đọc sai (cache, hierarchy, paradigm) và phrasal verbs.',
    sampleFormula: '“Cache is pronounced /kæʃ/ (like cash), not /keɪtʃ/ or /kætʃ/.”',
    mainDocSlug: 'pronunciation-guide-it-terms',
    relatedDocs: [
      {
        slug: 'pronunciation-guide-it-terms',
        labelEn: 'IT Pronunciation',
        labelVi: 'Phát âm Từ IT',
      },
      { slug: 'vocabulary-reference', labelEn: 'Confusing Words', labelVi: 'Từ dễ nhầm lẫn' },
      { slug: 'speaking-grammar', labelEn: 'Speaking Patterns', labelVi: 'Mẫu câu Speaking' },
    ],
    lessonCount: 8,
  },
]

const localizedCategories = computed(() =>
  matrixCategories.map((cat) => ({
    ...cat,
    title: locale.value === 'vi' ? cat.titleVi : cat.titleEn,
    desc: locale.value === 'vi' ? cat.descVi : cat.descEn,
  })),
)
</script>

<template>
  <section id="situations" class="space-y-8 scroll-mt-24">
    <div class="text-center space-y-3 max-w-2xl mx-auto">
      <div
        class="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary"
      >
        <Sparkles class="size-3.5" />
        <span>{{ t('home.matrix.badge') }}</span>
      </div>
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
        {{ t('home.matrix.title') }}
      </h2>
      <p class="text-sm sm:text-base text-muted-foreground leading-relaxed">
        {{ t('home.matrix.desc') }}
      </p>
    </div>

    <!-- Matrix Grid (3x2) -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="cat in localizedCategories"
        :key="cat.id"
        class="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card/60 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        :class="cat.borderAccent"
      >
        <!-- Top Section -->
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div
              class="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br border border-border/60"
              :class="cat.gradient"
            >
              <component :is="cat.icon" class="size-6" />
            </div>
            <span
              class="rounded-full bg-muted px-2.5 py-1 text-[0.7rem] font-mono font-medium text-muted-foreground"
            >
              {{ t('home.matrix.lessonsCount', { count: cat.lessonCount }) }}
            </span>
          </div>

          <div class="space-y-1.5">
            <h3
              class="text-lg font-bold text-foreground group-hover:text-primary transition-colors"
            >
              {{ cat.title }}
            </h3>
            <p class="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
              {{ cat.desc }}
            </p>
          </div>

          <!-- Formula Snippet Highlight -->
          <div
            class="rounded-xl border border-border/50 bg-muted/40 p-3 text-xs italic text-foreground/90 font-medium"
          >
            {{ cat.sampleFormula }}
          </div>
        </div>

        <!-- Bottom Links -->
        <div class="mt-6 pt-4 border-t border-border/50 space-y-3">
          <div class="flex flex-wrap gap-1.5">
            <RouterLink
              v-for="rel in cat.relatedDocs"
              :key="rel.slug"
              :to="`/docs/${rel.slug}`"
              class="rounded-lg bg-background/80 border border-border/60 px-2 py-1 text-[0.7rem] font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all"
            >
              {{ locale === 'vi' ? rel.labelVi : rel.labelEn }}
            </RouterLink>
          </div>

          <RouterLink
            :to="`/docs/${cat.mainDocSlug}`"
            class="flex items-center justify-between text-xs font-semibold text-primary hover:text-primary/80 transition-colors pt-1"
          >
            <span>{{ t('home.matrix.viewGuide') }}</span>
            <ArrowRight class="size-3.5 group-hover:translate-x-1 transition-transform" />
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
