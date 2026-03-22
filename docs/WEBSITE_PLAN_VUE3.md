# English Notehub - Project Plan (Updated)

Last updated: 2026-03-22

## 1) Project snapshot

- Project name: `english-notehub`
- Purpose: personal English learning reference site (reading-first), mobile friendly.
- Content source: local markdown files in `docs/`.
- Design direction: ~70% inspiration from missioncompile-style study layout.
- Deployment target: Vercel Preview URL first (cost-saving).

## 2) Core goals

- Read quickly: open docs fast, clean typography, clear table of contents.
- Navigate quickly: left doc list + right TOC + mobile drawers.
- Learn comfortably: low-eye-strain palette, smooth reading flow.
- Grow later: easy to add progress, better search, section-level learning.

## 3) Finalized stack

- App: `Vue 3 + Vite + TypeScript`
- UI: `TailwindCSS + shadcn-vue + reka-ui`
- Routing: `vue-router`
- i18n: `vue-i18n` (English default, Vietnamese switch)
- Markdown render: `markdown-it + markdown-it-anchor`
- Utils/state: `@vueuse/core`, `pinia` (ready for growth)
- Icons: `lucide-vue-next`
- Tooling: `ESLint + Prettier + vue-tsc`
- Deploy: Vercel preview

## 4) Current folder layout

```text
english-notehub/
  docs/
    english_*.md
    WEBSITE_PLAN_VUE3.md
  public/
    favicon.svg
    brand/
      logo-mark.svg
      logo-wordmark.svg
  scripts/
    generate-logo.mjs
  src/
    i18n/
    lib/
      content.ts
      utils.ts
    locales/
      en.ts
      vi.ts
    router/
      index.ts
    views/
      DocsView.vue
```

## 5) Implementation status

### Phase 1 - Foundation and content engine: Completed

- Vite + Vue + TypeScript scaffold done.
- Router and app shell done.
- i18n initialized, English default + locale persistence.
- Markdown render and heading extraction implemented.
- Basic docs reading flow working end-to-end.

### Phase 2 - UI and reading experience: Completed

- Desktop 3-column layout implemented.
- Mobile drawer UX for `Docs` and `TOC` implemented.
- TOC toggle (desktop) implemented.
- Scroll-spy heading highlight implemented.
- Study-friendly typography and palette applied.
- Generated logo + favicon integrated in header.

### Post-Phase 2 optimization: Completed

- Bundle warning fixed by real code splitting:
  - lazy route import for docs view,
  - lazy markdown file loading per document,
  - lazy markdown parser loading.
- Result: no more chunk >500 kB warning in build.

### Tooling setup: Completed

- `ESLint`, `Prettier`, `type-check` scripts configured.
- TypeScript compatibility warning from `@typescript-eslint` resolved.

## 6) What remains (next milestones)

### Phase 3 - Search, progress, polish: In progress

- Current search is lightweight text match.
- Planned upgrade:
  - use `Fuse.js` ranking for better relevance,
  - include heading-level signals in search index.
- Progress features to add:
  - completed docs,
  - last opened doc,
  - last scroll position.
- UX polish to add:
  - keyboard shortcut `/` for search focus,
  - stronger empty/loading states,
  - optional section jump shortcuts.

### Phase 4 - Deploy preview on Vercel: Pending

- Build is ready.
- Next action: deploy preview and verify:
  - direct URL open,
  - refresh on deep links (`/docs/:slug` + hash),
  - mobile behavior on real device.

## 7) Commands runbook

```bash
# dev
pnpm dev

# quality
pnpm type-check
pnpm lint
pnpm lint:fix
pnpm format
pnpm format:check

# build
pnpm build
pnpm preview

# branding assets
pnpm logo:generate
```

## 8) Current acceptance checklist

- [x] Read all markdown docs from `docs/`
- [x] EN default + VI switch
- [x] Desktop + mobile-friendly reading layout
- [x] TOC with active heading highlight
- [x] Study-friendly color palette
- [x] Auto-generated logo + favicon
- [x] Lint + format + type-check scripts
- [x] Build without large chunk warning
- [ ] Fuse.js ranked search
- [ ] Local learning progress persistence
- [ ] Vercel preview deployment and URL handoff

## 9) Risks and notes

- Markdown heading consistency still matters for best TOC quality.
- Lazy loading means section counts appear after first doc load unless pre-indexed.
- If content grows much larger, consider prebuild indexing script for search + metadata.

## 10) Optional future enhancements

- Section mode and section-level bookmarks.
- Flashcards generated from key phrases.
- Small quiz mode from selected sections.
- Tag/topic filters across all docs.
- Optional account sync for progress (later backend).
