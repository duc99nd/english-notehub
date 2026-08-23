---
{
  'id': 'b2-01-negotiation-advanced',
  'slug': 'b2-01-negotiation-advanced',
  'titleEn': 'Advanced Negotiation Strategies',
  'titleVi': 'Chiến lược đàm phán nâng cao',
  'subtitleEn': 'Practice proposing trade-offs, pushing back on scope, and reaching workable compromises',
  'subtitleVi': 'Luyện đề xuất trade-off, phản hồi yêu cầu tăng phạm vi và tìm phương án hai bên có thể thực hiện',
  'level': 'B2',
  'unit': 1,
  'skill': 'speaking',
  'order': 1,
  'cefr': 'B2',
  'minutes': 16,
  'tags': ['negotiation', 'speaking', 'trade-offs', 'meetings', 'B2'],
  'audioScript': "Let me run this alternative proposal by you before we commit.\nTo protect our release date, we can find some middle ground by phasing the analytics rollout.\nIf we circle back after the load test, we will have hard data to finalize the SLA.\n",
  'listeningEnabled': true,
  'flashcardCount': 6,
  'quiz':
    [
      {
        'type': 'choice',
        'prompt': 'In a sprint negotiation, which response most diplomatically pushes back against an unrealistic scope addition?',
        'options':
          [
            'We cannot do this; you should have submitted the request three weeks ago.',
            "To ensure stability for Friday's release, could we find some middle ground by shipping the core flow first and backlogging the export feature?",
            'We can try to deliver both features and review our progress on Thursday before making a final commitment.',
          ],
        'answer': "To ensure stability for Friday's release, could we find some middle ground by shipping the core flow first and backlogging the export feature?",
        'explanation': 'Câu trả lời ghi nhận mục tiêu phát hành, nêu ràng buộc chất lượng và đưa ra phương án chia giai đoạn cụ thể thay vì chỉ từ chối hoặc hứa khi chưa đủ cơ sở.',
        'distractorFeedback':
          {
            'We cannot do this; you should have submitted the request three weeks ago.': 'Câu này có nêu giới hạn nhưng mang tính đổ lỗi và không đưa ra hướng xử lý.',
            'We can try to deliver both features and review our progress on Thursday before making a final commitment.': 'Câu này có vẻ hợp tác nhưng che mất rủi ro ổn định đã biết và không nói rõ phần nào sẽ được chia giai đoạn hoặc dời lại.',
          },
      },
      {
        'type': 'fill',
        'prompt': 'Before we present the revised SLA to the client, let me ___ this proposal by the infrastructure lead.',
        'answer': 'run',
        'acceptedAnswers': ['run'],
        'explanation': 'Cụm cố định là "run something by someone": đưa nội dung cho ai đó xem và góp ý trước khi cam kết.',
      },
      {
        'type': 'choice',
        'prompt': "Why is 'Let us circle back after the benchmark results' more effective than 'We cannot decide now'?",
        'options':
          [
            'It defers the conversation while anchoring the next decision to concrete evidence and a clear checkpoint.',
            'It softens the refusal, but it intentionally leaves the next decision criteria undefined.',
            'It signals that the benchmark is only a formality and the decision has already been made.',
          ],
        'answer': 'It defers the conversation while anchoring the next decision to concrete evidence and a clear checkpoint.',
        'explanation': 'Một cách dùng "circle back" hiệu quả cần nêu điều kiện để quay lại quyết định. Trong câu này, kết quả benchmark chính là điều kiện và bằng chứng cho lần trao đổi tiếp theo.',
        'distractorFeedback':
          {
            'It softens the refusal, but it intentionally leaves the next decision criteria undefined.': 'Kết quả benchmark đã xác định tiêu chí cho quyết định, nên lần trao đổi tiếp theo không bị để mơ hồ có chủ đích.',
            'It signals that the benchmark is only a formality and the decision has already been made.': 'Cách diễn đạt vẫn để ngỏ quyết định và coi benchmark là dữ liệu quan trọng cho quyết định đó.',
          },
      },
    ],
  'categoryEn': 'Technical Leadership Communication',
  'categoryVi': 'Giao tiếp Dẫn dắt Kỹ thuật',
  'prerequisites': ['b1-15-review-unit3'],
  'editorialStatus': 'pilot-reviewed',
  'sourceType': 'fictional',
  'practiceContract': { 'mode': 'dialogue', 'minTurns': 4, 'maxTurns': 6 },
}
---

# Chiến lược Đàm phán Nâng cao trong Dự án IT

## Thách thức trong Giao tiếp Kỹ thuật

Trong các dự án phần mềm đa chức năng, Tech Lead và lập trình viên hiếm khi có thể trả lời "Có" hoặc "Không" một cách đơn giản. Product Manager thường muốn đẩy nhanh tiến độ bàn giao, trong khi khách hàng liên tục thêm yêu cầu phát sinh (scope creep) giữa sprint.

Để đàm phán hiệu quả ở cấp độ B2, bạn cần nắm vững kỹ thuật **đưa ra trade-off hợp lý**, tìm **điểm cân bằng (middle ground)**, và gắn lý do đàm phán vào sự ổn định của hệ thống thay vì cảm xúc cá nhân.

> **Mẫu câu**: `To ensure [priority outcome], we can [concession A], provided that we [condition B].`
>
> _(Để đảm bảo [mục tiêu cốt lõi], chúng ta có thể [nhượng bộ A], với điều kiện là [điều kiện B].)_

---

## Tình huống mô phỏng: Cuộc họp điều chỉnh Sprint

**Lưu ý:** Đây là tình huống học tập hư cấu. Tên, số sprint, yêu cầu và mốc giao hàng chỉ dùng để minh họa.

**Ngữ cảnh:** Elena (Frontend Tech Lead) đang họp với Marcus (Product Manager) trong buổi Sprint Refinement. Marcus muốn đưa tính năng xuất báo cáo PDF vào Sprint 18 đang chạy.

> **Marcus (PM):** "Khách hàng thử nghiệm muốn tính năng xuất PDF chạy được vào thứ Sáu này. Chúng ta có thể nhét nó vào Sprint 18 không?"
>
> **Elena (Tech Lead):** "I understand the urgency for the pilot, but adding PDF rendering now risks our checkout latency targets. **Let me run an alternative proposal by you**: we can deliver the CSV export on Friday, and **find some middle ground** by shipping the PDF generator in the fast-follow patch next Tuesday."
> _(Tôi hiểu tính cấp bách của bản demo này, nhưng thêm tính năng PDF lúc này sẽ ảnh hưởng đến tốc độ checkout. **Để tôi đề xuất một phương án khác**: chúng ta bàn giao bản xuất CSV vào thứ Sáu, và **thống nhất giải pháp cân bằng** bằng cách đưa bộ xuất PDF vào bản vá ngay thứ Ba tuần sau.)_
>
> **Marcus (PM):** "Liệu bản CSV có đáp ứng được yêu cầu kiểm toán ngay của khách hàng không?"
>
> **Elena (Tech Lead):** "Yes, it covers all audit fields. If we **circle back** on Monday after staging verification, we can confirm the exact rollout hour for the PDF release."
> _(Có chứ, nó chứa đầy đủ các trường dữ liệu kiểm toán. Nếu chúng ta **họp lại đồng bộ** vào thứ Hai sau khi kiểm thử xong trên staging, chúng ta có thể chốt chính xác giờ phát hành bản PDF.)_

---

## Từ vựng & Chiến thuật Đàm phán trọng tâm

| Thuật ngữ / Cụm từ                   | Chức năng giao tiếp                                                     | So sánh sắc thái                                                             |
| :----------------------------------- | :---------------------------------------------------------------------- | :--------------------------------------------------------------------------- |
| **Run [proposal] by [person]**       | Trao đổi nhanh ý tưởng để lấy ý kiến trước khi chốt cam kết chính thức. | _Hợp tác & linh hoạt_ vs. _Áp đặt mệnh lệnh_ ("This is what we will do").    |
| **Find middle ground**               | Đề xuất giải pháp dung hòa lợi ích hai bên (cắt scope hoặc dời lịch).   | _Đưa ra trade-off xây dựng_ vs. _Từ chối cụt ngủn_ ("That is impossible").   |
| **Circle back [time/trigger]**       | Hẹn lịch họp lại dựa trên dữ liệu mới hoặc mốc kiểm thử cụ thể.         | _Có kế hoạch hành động rõ ràng_ vs. _Hoãn binh mơ hồ_ ("We will see later"). |
| **Secure buy-in from [stakeholder]** | Đạt được sự đồng thuận và phê chuẩn từ người ra quyết định.             | _Đồng thuận tập thể_ vs. _Tự quyết đơn lẻ_.                                  |
| **Take a phased approach**           | Chia nhỏ yêu cầu phức tạp thành các giai đoạn phát hành an toàn.        | _Quản trị rủi ro chuyên nghiệp_ vs. _Làm tất cả hoặc không làm gì_.          |

---

## Phân tích sắc thái: Trực diện thô cứng vs. Ngoại giao chuyên nghiệp

- ❌ **Trực diện quá mức:** "No, we don't have enough bandwidth. That's out of scope."
  _(Dễ gây căng thẳng và biến đội ngũ kỹ thuật thành "kẻ cản trở" bước tiến của sản phẩm)._
- ✅ **Đàm phán trade-off:** "To protect our core release timeline, we could phase this rollout: deliver the baseline endpoint this sprint, and circle back on advanced filtering next week."
  _(Vừa tôn trọng nhu cầu kinh doanh, vừa bảo vệ tính ổn định và chất lượng kiến trúc)._

---

## Trắc nghiệm nhanh

Làm các câu hỏi trắc nghiệm ngữ cảnh ở phần trên để củng cố phản xạ ngôn ngữ đàm phán.

---

## Bài học tiếp theo

Ở bài tiếp theo **B2-02-conflict-resolution**, bạn sẽ học các cấu trúc ngữ pháp nâng cao (câu điều kiện đảo ngữ, thể bị động giảm nhẹ) để xử lý bất đồng kỹ thuật chuyên nghiệp.

<!-- learning-loop:start -->

## Kết quả học tập

Sau bài này, bạn có thể tham gia một đoạn hội thoại 4-6 lượt nói để đàm phán khi phát sinh yêu cầu mới, biết cách đề xuất chia giai đoạn (phased trade-off) và chốt lịch tái đồng bộ (circle back).

## Phòng luyện tập

### Nhận diện cách diễn đạt

Lắng nghe đoạn hội thoại mẫu giữa Marcus và Elena. Chú ý cách Elena mở đầu bằng sự đồng cảm ("I understand the urgency"), xoay chuyển bằng một giải pháp trade-off ("To protect X, we can Y"), và kết lại bằng mốc thời gian cụ thể ("circle back on Monday").

### Luyện tập có định hướng

**Tình huống:** Quản lý dự án muốn đưa một đợt di chuyển dữ liệu (data migration) phức tạp vào sprint hiện tại. Bạn biết cơ sở dữ liệu chưa được đánh chỉ mục (indexing) đầy đủ trên môi trường staging.

Thực hiện hội thoại 4-6 lượt. Nhờ một người đóng vai Project Manager, hoặc tự viết cả hai vai trước khi thu âm.

**Yêu cầu của bạn:**

- Ghi nhận mục tiêu của quản lý.
- Đề xuất giải pháp dung hòa sử dụng `find middle ground` hoặc `phased approach`.
- Đưa ra mốc chốt lại thông tin bằng `circle back once...`.

### Bài mẫu

> **Project Manager:** "The sales team needs the complete migration for Friday's demo. Can we add it to this sprint?"
>
> **Tech Lead:** "I appreciate why it matters for the demo. Running the full migration before we validate the indexes could cause production query spikes, so could we take a phased approach?"
>
> **Project Manager:** "What could we deliver by Friday without taking that risk?"
>
> **Tech Lead:** "We can migrate the read-only reporting tables on Thursday, then circle back once the staging load-test results are available and schedule the remaining tables."

### Phân tích bài mẫu:

- **Tông giọng:** Chuyên nghiệp, khách quan, hướng tới giải pháp.
- **Lý do:** Gắn với rủi ro kỹ thuật khách quan ("risks production query spikes") thay vì phàn nàn thiếu thời gian.
- **Độ rõ ràng:** Nêu rõ đầu việc cụ thể ("read-only reporting tables") và điều kiện nghiệm thu ("load testing metrics are validated").

### Tự kiểm tra

- [ ] Mình đưa ra phương án thỏa hiệp cụ thể thay vì chỉ nói "Yes" hoặc "No".
- [ ] Mình sử dụng ít nhất hai cụm từ đàm phán (`middle ground`, `circle back`, `run by`).
- [ ] Lý do được giải thích dựa trên sự an toàn của hệ thống.
- [ ] Có thời điểm hoặc điều kiện tái đồng bộ rõ ràng.

<!-- learning-loop:end -->
