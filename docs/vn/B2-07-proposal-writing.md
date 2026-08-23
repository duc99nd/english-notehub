---
{
  'id': 'b2-07-proposal-writing',
  'slug': 'b2-07-proposal-writing',
  'titleEn': 'Technical Proposal Writing',
  'titleVi': 'Viết đề xuất kỹ thuật',
  'subtitleEn': 'Write engineering proposals with clear problems, phased solutions, and measurable assumptions',
  'subtitleVi': 'Viết đề xuất kỹ thuật với vấn đề rõ ràng, giải pháp theo giai đoạn và giả định có thể kiểm chứng',
  'level': 'B2',
  'unit': 2,
  'skill': 'writing',
  'order': 7,
  'cefr': 'B2',
  'minutes': 16,
  'tags': ['writing', 'proposal', 'architecture', 'ROI', 'B2'],
  'audioScript': "This fictional proposal outlines a phased strategy for migrating a session store to a distributed cache cluster.\nBased on the illustrative baseline, phase one targets a forty-percent reduction in p99 query latency.\nWe recommend approving a limited pilot to test memory usage under peak load before considering full cutover.\n",
  'listeningEnabled': true,
  'flashcardCount': 6,
  'quiz':
    [
      {
        'type': 'choice',
        'prompt': 'Which problem statement in an engineering proposal is most effective for executive leadership?',
        'options':
          [
            'Peak-hour database contention is affecting checkout performance, so the platform team should investigate caching options.',
            'Database read contention during peak hours causes p99 latency spikes of over 800ms, directly impacting checkout conversion rates.',
            'A managed Redis service could improve response times, and the proposal should focus on adopting it this quarter.',
          ],
        'answer': 'Database read contention during peak hours causes p99 latency spikes of over 800ms, directly impacting checkout conversion rates.',
        'explanation': 'Cách viết này nối triệu chứng kỹ thuật có thể đo với ảnh hưởng kinh doanh. Hai lựa chọn còn lại có thể là điểm khởi đầu, nhưng một câu thiếu bằng chứng và câu kia chọn công cụ trước khi xác định vấn đề.',
        'distractorFeedback':
          {
            'Peak-hour database contention is affecting checkout performance, so the platform team should investigate caching options.': 'Câu này xác định khu vực vấn đề và hướng điều tra, nhưng chưa định lượng triệu chứng hoặc chứng minh ảnh hưởng kinh doanh.',
            'A managed Redis service could improve response times, and the proposal should focus on adopting it this quarter.': 'Câu này chọn sẵn sản phẩm và thời điểm trước khi chứng minh vấn đề hoặc tiêu chí đánh giá.',
          },
      },
      {
        'type': 'fill',
        'prompt': 'This proposal ___ our three-phase implementation strategy.',
        'answer': 'outlines',
        'acceptedAnswers': ['outlines'],
        'explanation': '"Outlines" là động từ thường dùng khi giới thiệu ngắn gọn cấu trúc hoặc các ý chính của đề xuất.',
      },
      {
        'type': 'choice',
        'prompt': 'What is the primary function of presenting a "phased rollout" in a technical proposal?',
        'options':
          [
            'It de-risks the migration by delivering incremental value with clear rollback gates at each milestone.',
            'It divides the work into smaller milestones, although it does not by itself prove that the proposed benefits will occur.',
            'It moves approval to later phases, so the team can begin implementation before stakeholders review the risks.',
          ],
        'answer': 'It de-risks the migration by delivering incremental value with clear rollback gates at each milestone.',
        'explanation': 'Triển khai theo giai đoạn giới hạn phạm vi ảnh hưởng và tạo điểm kiểm tra bằng chứng, phê duyệt và rollback. Cách làm này không loại bỏ yêu cầu xác minh lợi ích hoặc xin phê duyệt phù hợp.',
        'distractorFeedback':
          {
            'It divides the work into smaller milestones, although it does not by itself prove that the proposed benefits will occur.': 'Đây là lưu ý đúng nhưng chưa nêu chức năng chính của đề xuất: giới hạn rủi ro bằng cổng bằng chứng và rollback rõ ràng.',
            'It moves approval to later phases, so the team can begin implementation before stakeholders review the risks.': 'Chia giai đoạn phải tạo các điểm phê duyệt; cách làm này không cho phép bắt đầu trước khi rủi ro liên quan được xem xét.',
          },
      },
    ],
  'categoryEn': 'Technical Leadership Communication',
  'categoryVi': 'Giao tiếp Dẫn dắt Kỹ thuật',
  'prerequisites': ['b2-06-business-article'],
  'editorialStatus': 'pilot-reviewed',
  'sourceType': 'fictional',
  'practiceContract': { 'mode': 'writing', 'minWords': 100, 'maxWords': 140 },
}
---

# Viết Đề Xuất Kỹ Thuật (Technical Proposal Writing)

## Thách thức khi viết đề xuất cho Ban Lãnh đạo

Khi Senior Engineer hoặc Tech Lead đề xuất cải tiến kiến trúc, tái cấu trúc mã nguồn (refactoring), hoặc di chuyển hạ tầng đám mây, chỉ nói về cú pháp code hay công nghệ mới là chưa đủ. Ban điều hành và các bên liên quan cần thấy rõ **vấn đề thực tế (Problem Statement)**, **kế hoạch triển khai theo giai đoạn (Phased Implementation)**, và **giá trị kinh doanh đo lường được (Measurable ROI)**.

Một đề xuất kỹ thuật chuẩn mực ở cấp độ B2 sẽ liên kết trực tiếp giải pháp kỹ thuật với trải nghiệm người dùng và việc tối ưu hóa chi phí vận hành.

> **Mẫu câu**: `This proposal outlines [solution] to address [business/technical problem], delivering [quantifiable benefit] across [timeline].`
>
> _(Tài liệu này đề xuất [giải pháp] nhằm giải quyết [vấn đề], mang lại [lợi ích đo lường được] trong vòng [khoảng thời gian].)_

---

## Đề xuất mô phỏng: Di chuyển cụm Redis Cache

**Lưu ý:** Tổ chức, kiến trúc, sự cố, chi phí, tỷ lệ phần trăm và số liệu hiệu năng dưới đây đều là dữ liệu hư cấu dùng cho bài tập. Đề xuất thật phải thay chúng bằng baseline đo được, ước tính chi phí, giả định và nguồn bằng chứng cụ thể.

**Kính gửi:** Ban Cố vấn Kỹ thuật (Engineering Steering Committee)

**Người gửi:** Đội ngũ Backend Platform

**Tiêu đề:** Proposal: Distributed In-Memory Cache Migration for Checkout Services

### 1. Tóm tắt điều hành (Executive Summary)

This proposal outlines a two-phase architecture migration from our legacy monolithic session store to a managed Redis cluster. Based on the fictional baseline used in this exercise, offloading hot-key queries from PostgreSQL is expected to reduce p99 latency spikes during flash sales and could reduce cloud compute costs by an estimated 22% annually.

### 2. Mô tả vấn đề (Problem Statement)

During peak traffic events, relational database connection pool exhaustion leads to 850ms API response times. This latency bottleneck causes a 4.5% shopping cart abandonment rate and requires costly manual vertical scaling.

### 3. Giải pháp đề xuất (Proposed Solution & Architecture)

- **Phase 1 (Sprint 21):** Deploy read-through cache for static product catalogs and session tokens.
- **Phase 2 (Sprint 22):** Implement cache invalidation webhooks and shadow traffic benchmarking.
- **Chiến lược chuyển đổi (Cutover):** Triển khai blue-green với phương án rollback đã kiểm thử để giảm rủi ro chuyển đổi.

### 4. Kết quả đo lường kỳ vọng (Measurable Expected Outcomes)

- **Mục tiêu hiệu năng:** Giảm độ trễ p99 API thanh toán từ baseline minh họa 850ms xuống dưới 120ms.
- **Mục tiêu độ tin cậy:** Giảm nghẽn connection pool và kiểm chứng availability bằng peak-load test.
- **Ảnh hưởng chi phí ước tính:** Tiết kiệm khoảng 4.200 USD/tháng sau khi tính chi phí cache, database downsizing, migration và vận hành.

---

## Từ vựng & Mẫu câu cấu trúc chuyên nghiệp

| Cụm từ trọng tâm                        | Chức năng văn bản                                               | Ví dụ minh họa                                                                       |
| :-------------------------------------- | :-------------------------------------------------------------- | :----------------------------------------------------------------------------------- |
| **This proposal outlines [initiative]** | Câu mở đầu chính thức nêu rõ phạm vi tài liệu.                  | "This proposal outlines our phased strategy to modernize API authentication."        |
| **Deliver measurable ROI / value**      | Định lượng lợi ích về tốc độ, thời gian hoạt động hoặc chi phí. | "The refactoring will deliver measurable latency improvements within 30 days."       |
| **Address root causes**                 | Tập trung vào nguyên nhân gốc rễ thay vì triệu chứng bề mặt.    | "This approach addresses the root cause of connection pool exhaustion."              |
| **Phased implementation**               | Trình bày lộ trình triển khai từng bước ít rủi ro.              | "We recommend a three-phase rollout with automated rollback triggers."               |
| **Mitigate risks**                      | Thể hiện sự lường trước các điểm có thể xảy ra lỗi.             | "To mitigate cutover risk, shadow traffic testing will run concurrently for 7 days." |

---

## Trắc nghiệm nhanh

Kiểm tra khả năng tư duy và lựa chọn cách hành văn trong đề xuất kỹ thuật ở phần trắc nghiệm phía trên.

---

## Bài học tiếp theo

Ở bài tiếp theo **B2-08-data-storytelling**, bạn sẽ học cách trình bày các biểu đồ benchmark và số liệu giám sát hệ thống dưới dạng câu chuyện dữ liệu có sức thuyết phục cao.

<!-- learning-loop:start -->

## Kết quả học tập

Sau bài này, bạn có thể tự viết một bản tóm tắt đề xuất kỹ thuật từ 100 đến 140 từ, nêu bật vấn đề hệ thống, giải pháp chia giai đoạn và số liệu ROI cụ thể.

## Phòng luyện tập

### Nhận diện cấu trúc văn bản

Chú ý cách bản đề xuất bắt đầu bằng tóm tắt ngắn gọn, đi vào các điểm nghẽn có số liệu cụ thể (850ms latency, 4.5% drop), và kết thúc bằng lợi ích tài chính rõ ràng.

### Luyện tập có định hướng

**Yêu cầu viết:** Viết một bản tóm tắt đề xuất kỹ thuật (100–140 từ) gửi cho Engineering Manager đề xuất xây dựng hệ thống kiểm thử tự động End-to-End (Playwright E2E pipeline) để giảm lỗi hồi quy trước khi release lên production.

**Yêu cầu bắt buộc:**

- Câu mở đầu sử dụng cấu trúc chuẩn (`This proposal outlines...`).
- Nêu rõ số liệu vấn đề (ví dụ: số giờ test tay, số lần phải rollback).
- Chia giai đoạn thực hiện (Phase 1 / Phase 2).
- Đo lường kết quả kỳ vọng (thời gian chạy test giảm, giảm tỷ lệ bug).

### Bài mẫu

> **Proposal: Automated E2E Testing Pipeline Implementation**
>
> This proposal outlines our strategy to implement an automated Playwright testing pipeline within our CI/CD workflow. Currently, manual regression testing consumes over 35 engineering hours per sprint and delays bi-weekly releases.
>
> We propose a two-phase rollout:
>
> - **Phase 1 (Sprint 12):** Automate the top 15 critical checkout and authentication user flows.
> - **Phase 2 (Sprint 13):** Integrate test container orchestration into GitHub Actions with parallel test execution.
>
> During the next two sprints, the pilot targets a reduction in pre-release validation time from 16 hours to 18 minutes and an estimated 60% reduction in production regression incidents. We recommend approving Phase 1 setup for an evidence-gathering trial.

### Tự kiểm tra

- [ ] Câu mở đầu nêu rõ mục đích với văn phong trang trọng.
- [ ] Vấn đề được diễn đạt bằng số liệu khách quan.
- [ ] Kế hoạch được chia thành các phase rõ ràng.
- [ ] Nêu bật được lợi ích cụ thể (tiết kiệm thời gian, giảm lỗi).
- [ ] Độ dài đạt chuẩn từ 100 đến 140 từ.

<!-- learning-loop:end -->
