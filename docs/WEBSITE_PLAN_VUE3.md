# Website Plan (Vue 3) cho English Summary

## 1) Mục tiêu và định hướng

- Mục tiêu chính: tạo website tra cứu nhanh từ các file `.md` hiện có để học hằng ngày.
- Ưu tiên: mobile-friendly, đọc nhanh, tìm nhanh, có mục lục toggle, có tracking tiến độ cá nhân.
- Ngôn ngữ: English là mặc định, có thể chuyển sang tiếng Việt cho UI + title/mẫu câu.
- Thiết kế: lấy cảm hứng `~70%` từ `missioncompile.com` (sidebar học liệu + vùng đọc + toc).
- Triển khai: deploy dạng **Vercel Preview URL** để tiết kiệm chi phí.
- Khả năng mở rộng: dễ bổ sung custom feature sau này (quiz, flashcard, note, tag...).
- Brand: có logo tự generate để dùng ngay từ v1.

## 2) Stack đã chốt

- Framework: `Vue 3 + Vite + TypeScript`
- UI: `TailwindCSS + shadcn-vue`
- Routing: `Vue Router`
- Markdown render: `markdown-it` (render nhanh, dễ custom)
- Markdown heading/toc: `markdown-it-anchor` + parser heading custom
- Search client-side: `Fuse.js`
- i18n: `vue-i18n`
- Local state nhẹ: `pinia` (hoặc composables nếu muốn giữ cực gọn)
- Utility: `@vueuse/core` (localStorage, responsive helpers, scroll)
- Icons: `lucide-vue-next`
- Deploy: `Vercel` (Preview trước, production sau)

## 3) Gợi ý tên project

### Tên khuyên dùng

- `english-notehub` (khuyên dùng)

Lý do: đúng tinh thần “hub ghi chú + tra cứu”, phù hợp cả học cá nhân trước mắt và mở rộng blog bổ trợ cho `english-learning` sau này.

### Tên thay thế

- `english-companion`
- `english-pocket-guide`
- `english-quickref`
- `english-sidekick`

## 4) Phạm vi v1 (MVP đẹp + đủ dùng)

- Đọc tất cả file `.md` từ thư mục `english-summary`.
- Sidebar trái: danh sách tài liệu.
- Khu vực giữa: render nội dung markdown đẹp, dễ đọc.
- Cột phải: mục lục (H2/H3) sticky, có toggle ẩn/hiện.
- Search: tìm theo tiêu đề + heading + nội dung.
- i18n:
  - mặc định mở bằng English.
  - có switch EN/VI ở header.
  - hỗ trợ dịch UI + title/mẫu câu ở content.
- Progress:
  - đánh dấu đã học theo từng tài liệu.
  - lưu vị trí đọc gần nhất.
- Logo:
  - có logo SVG tự generate (không phụ thuộc dịch vụ ngoài).
  - có bản icon vuông + wordmark dùng cho header/favicon/og.
- Mobile UX:
  - sidebar và toc thành drawer.
  - nút truy cập nhanh search/toc.

## 5) Cấu trúc thư mục đề xuất

```text
english-summary/
  english_client_situations_reference.md
  english_meeting_templates_for_team_lead_notion.md
  english_small_talk_and_rapport.md
  english_speaking_grammar_reference.md
  english_vocabulary_reference.md
  english_writing_reference.md
  WEBSITE_PLAN_VUE3.md
  english-notehub/                   # app Vue 3 mới
    scripts/
      split-markdown.ts              # tách markdown thành section data
      generate-logo.ts               # generate logo SVG + favicon
    src/
      app/
      components/
      content/
        sections/                    # dữ liệu section đã tách
      locales/
        en/
        vi/
      features/
      lib/
      styles/
```

## 6) Chi tiết kỹ thuật markdown preview (nhanh + dễ custom)

### Cách làm khuyên dùng

- Dùng `import.meta.glob` để load raw markdown.
- Parse front info từ heading đầu (`#`, `##`) để tạo title/subtitle.
- Convert markdown -> html bằng `markdown-it`.
- Tự tạo dữ liệu toc từ heading để:
  - render mục lục cột phải.
  - highlight heading đang đọc.

### Tách nhỏ content để nâng chất lượng học

- Tạo script `split-markdown.ts` để chia mỗi file `.md` thành các section theo `H2/H3`.
- Mỗi section có metadata:
  - `id`, `sourceFile`, `slug`, `title_en`, `title_vi`, `level`, `content`.
- Cho phép render theo 2 mode:
  - `Document Mode`: đọc full tài liệu.
  - `Section Mode`: học theo phần nhỏ, chuyển phần nhanh hơn.
- Có thể thêm content mới ở mức section mà không cần sửa file gốc quá lớn.

### Vì sao cách này phù hợp

- Nhanh triển khai.
- Không cần backend.
- Dữ liệu hoàn toàn local, deploy static rất nhẹ.
- Sau này có thể thêm frontmatter và metadata nâng cao.

## 7) Blueprint UI (theo style 70% missioncompile)

### Layout desktop

- Header top:
  - logo tên site.
  - ô search.
  - switch ngôn ngữ EN/VI.
  - quick actions (theme, progress).
- Main 3 cột:
  - trái: sidebar docs list + completion badge.
  - giữa: markdown reader.
  - phải: TOC sticky + nút toggle.

### Layout mobile

- Header compact + search trigger.
- Nút mở `Docs` (drawer trái).
- Nút mở `TOC` (drawer phải hoặc bottom sheet).
- Typography tối ưu cho màn hình nhỏ.

### Style guide sơ bộ

- Màu chủ đạo: slate + emerald accent (trung tính, không quá chói).
- Font: readable sans + prose spacing tốt.
- Card/border nhẹ, focus state rõ.
- Animation nhẹ: fade/slide cho drawer + toc.

### Color palette chi tiết (ưu tiên học lâu không mỏi mắt)

- Palette mặc định: `Calm Study`
  - Background: `#F8FAFC` (slate-50)
  - Surface/card: `#FFFFFF`
  - Text chính: `#0F172A` (slate-900)
  - Text phụ: `#475569` (slate-600)
  - Border: `#E2E8F0` (slate-200)
  - Accent chính: `#0F766E` (teal-700)
  - Accent hover: `#115E59` (teal-800)
  - Highlight section đang đọc: `#ECFEFF` (cyan-50)
  - Success/progress: `#059669` (emerald-600)

- Palette thay thế nhẹ hơn (nếu muốn): `Warm Paper`
  - Background: `#FAF7F2`
  - Surface/card: `#FFFFFF`
  - Text chính: `#1F2937`
  - Text phụ: `#4B5563`
  - Accent: `#0EA5A4`

- Nguyên tắc áp dụng:
  - Giữ tương phản text/body >= WCAG AA cho nội dung đọc chính.
  - Không dùng màu quá bão hoà cho vùng đọc dài.
  - Chỉ dùng accent cho CTA, link, trạng thái active, progress.
  - Mặc định ưu tiên light mode cho học tập ban ngày; dark mode là optional sau v1.

## 8) Roadmap thực hiện (1-2 ngày)

## Phase 1 - Scaffold + content engine (0.5 ngày)

- Tạo app `english-notehub` bằng Vite + Vue TS.
- Setup Tailwind + shadcn-vue.
- Thiết lập router cơ bản.
- Implement markdown loader + parser + toc extraction.
- Render 1 trang docs detail hoạt động end-to-end.
- Setup `vue-i18n` (EN default).

## Phase 2 - UI hoàn chỉnh + trải nghiệm học (0.5 ngày)

- Làm layout 3 cột desktop + drawer mobile.
- Hoàn thiện typography cho markdown.
- TOC sticky + active heading highlight + toggle.
- Sidebar có trạng thái tài liệu đang mở.
- Thêm language switch EN/VI ở header.
- Tạo logo SVG tự generate, gắn vào header/favicon.

## Phase 3 - Search + Progress + Polish (0.5 ngày)

- Search toàn bộ docs bằng Fuse.js.
- Save progress bằng localStorage:
  - completed docs.
  - last opened doc.
  - last scroll position.
- Tạo script tách markdown thành section nhỏ để học nhanh.
- Áp dụng dịch `title` và `sample phrase` cho tiếng Việt ở section data.
- Tối ưu UX:
  - skeleton/loading state.
  - empty-state.
  - keyboard shortcuts cơ bản (`/` để focus search).

## Phase 4 - Deploy Preview Vercel (0.2 ngày)

- Build production local.
- Deploy preview bằng `vercel deploy`.
- Kiểm tra route trực tiếp, reload page, mobile view.
- Chốt URL preview để dùng học.

## 9) Acceptance criteria (điều kiện hoàn thành v1)

- Website đọc được toàn bộ 6 file `.md`.
- Có logo hiển thị tốt trên header và favicon.
- Search trả kết quả theo title/heading/content.
- Có TOC toggle và hoạt động tốt trên mobile.
- Mặc định English, switch được EN/VI ổn định.
- Với tiếng Việt: hiển thị tốt phần title/mẫu câu quan trọng.
- Có thể đọc theo file đầy đủ hoặc theo section đã tách nhỏ.
- Có lưu progress local, mở lại không mất trạng thái.
- Deploy thành công lên Vercel preview URL.
- UI thân thiện, đọc lâu không mỏi mắt.

## 10) Kế hoạch mở rộng sau v1

- Gắn tag/topic theo file và section.
- Thêm bookmark đoạn học quan trọng.
- Flashcard mode từ heading hoặc list item.
- Quiz mode tự sinh từ mẫu câu.
- Đồng bộ progress qua account (nếu sau này cần backend).

## 11) Rủi ro kỹ thuật và cách xử lý

- Rủi ro markdown heading không đồng nhất:
  - xử lý parser fallback, bỏ qua heading lỗi.
- Rủi ro đồng bộ dữ liệu EN/VI:
  - dùng key định danh cố định theo section để tránh lệch bản dịch.
- Rủi ro import markdown ngoài root:
  - đặt app trong `english-summary/english-notehub` để đọc đường dẫn ổn định.
  - nếu cần, thêm script sync content trước build.
- Rủi ro mobile toc quá dài:
  - dùng collapse theo cấp heading + giới hạn chiều cao drawer.

## 12) Lệnh triển khai dự kiến (khi bắt đầu code)

```bash
# scaffold
pnpm create vite english-notehub --template vue-ts

# install core deps
pnpm add vue-router pinia @vueuse/core markdown-it markdown-it-anchor fuse.js lucide-vue-next vue-i18n

# tailwind + shadcn-vue setup (theo CLI hiện hành của shadcn-vue)
pnpm add -D tailwindcss postcss autoprefixer
pnpm dlx shadcn-vue@latest init

# run dev
pnpm dev
```

## 13) Quy tắc triển khai Vercel cho giai đoạn này

- Chỉ deploy **Preview** để tiết kiệm.
- Chưa cần domain custom ở giai đoạn đầu.
- Chỉ chuyển production khi bạn xác nhận ổn định.
