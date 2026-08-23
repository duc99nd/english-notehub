# English Notehub — Bilingual Terminology & Localization Guide

**Date:** 2026-08-23  
**Status:** Living Standard Reference  
**Audience:** Content Authors, Translators, and AI Contributors

---

## 1. Core Editorial Philosophy

1. **Workplace English is the Canonical Target:**
   - English examples, dialogue lines, and phrases to be learned must remain in English.
   - Do not translate English target expressions into Vietnamese when teaching the phrase (e.g. keep `buy-in`, `bring on board`, `park that topic`, `hit a blocker` in the target column/box).
2. **Vietnamese is Scaffolding, Not Word-for-Word Calque:**
   - Vietnamese prose explains context, pragmatic intent, tone, and cultural nuances.
   - Avoid mechanical calques (e.g. _“chạy qua đề xuất”_ ➔ dùng _“lướt qua đề xuất / điểm lại đề xuất”_).
3. **Natural IT Professional Register:**
   - Use natural Vietnamese tech-workplace phrasing. Standard industry loanwords (`Sprint`, `Standup`, `Jira`, `PR`, `Deploy`, `Release`, `Telemetry`) can be retained in capital/lowercase standard form.

---

## 2. Standard Terminology Policy

| English Term            | Recommended Vietnamese Translation / Scaffolding | Notes & Context                                                                             |
| :---------------------- | :----------------------------------------------- | :------------------------------------------------------------------------------------------ |
| **Register**            | Văn phong / Sắc thái trang trọng                 | Phân biệt _formal_, _neutral_, _informal_.                                                  |
| **Tone**                | Tông giọng / Giọng điệu                          | Thể hiện mức độ mềm mỏng (_softened_), trực diện (_direct_), hay ngoại giao (_diplomatic_). |
| **Stakeholder**         | Bên liên quan / Các bên liên quan                | Chỉ cá nhân, nhóm có lợi ích trong dự án (khách hàng, ban điều hành, QA, PO...).            |
| **Buy-in**              | Sự đồng thuận / Sự phê chuẩn ủng hộ              | Giữ thuật ngữ `buy-in` trong ví dụ tiếng Anh, dịch nghĩa là _sự đồng thuận/ủng hộ_.         |
| **Follow-up**           | Theo dõi / Trao đổi tiếp                         | Dùng cho email, buổi họp tiếp nối (_follow-up email_, _follow-up meeting_).                 |
| **Deadline**            | Hạn chót / Thời hạn hoàn thành                   | Có thể dùng _deadline_ hoặc _hạn chót_ tùy độ trang trọng.                                  |
| **Scope creep**         | Phát sinh phạm vi / Phình to yêu cầu             | Tránh dịch máy móc; giải thích là _yêu cầu ngoài kế hoạch sprint_.                          |
| **Blocker**             | Trở ngại / Điểm nghẽn                            | Tránh nói chung chung là "khó khăn"; nói rõ là _yếu tố làm kẹt tiến độ_.                    |
| **Pull Request (PR)**   | Pull Request / Bản đề xuất code                  | Thường giữ nguyên `PR` hoặc `Pull Request`.                                                 |
| **Refactoring**         | Tái cấu trúc mã nguồn / Refactor code            | Giữ `refactor code` hoặc `tái cấu trúc`.                                                    |
| **Post-mortem / Retro** | Họp rút kinh nghiệm sự cố / Retrospective        | Giải thích mục đích: _học hỏi, cải tiến, không đổ lỗi_.                                     |
| **Hedging**             | Nói giảm nhẹ / Diễn đạt thận trọng               | Kỹ thuật dùng _might, could, appears to, it seems_ để giảm tính võ đoán.                    |
| **Acceptance Criteria** | Tiêu chí chấp thuận / Tiêu chuẩn nghiệm thu      | Thay vì dịch là "yêu cầu", dùng _tiêu chí chấp thuận tính năng_.                            |

---

## 3. Heading Localization Standards

To maintain consistency across all 110 lessons in both `docs/en/` and `docs/vn/`:

| English Heading           | Standard Vietnamese Heading   |
| :------------------------ | :---------------------------- |
| `## Learning outcome`     | `## Kết quả học tập`          |
| `## Practice lab`         | `## Phòng luyện tập`          |
| `### Notice the language` | `### Nhận diện cách diễn đạt` |
| `### Your turn`           | `### Đến lượt bạn`            |
| `### Model response`      | `### Bài mẫu`                 |
| `### Register switch`     | `### Chuyển đổi register`     |
| `### Self-check`          | `### Tự kiểm tra`             |
| `## Quick quiz`           | `## Trắc nghiệm nhanh`        |
| `## What to learn next`   | `## Bài học tiếp theo`        |

---

## 4. Markdown Formatting Rules

1. **Table Syntax:**
   - Always start table rows with a single pipe `|` followed by space: `| Column 1 | Column 2 |`.
   - Never use double pipes `||` as row starters.
2. **Formula Box / Pattern Blockquotes:**
   - Format: `> **Pattern**: \`formula...\` — explanation` (EN)
   - Format: `> **Mẫu câu**: \`formula...\` — giải thích` (VN)
3. **Dialogue Lines:**
   - Format: `> **Speaker:** Dialogue text.`
