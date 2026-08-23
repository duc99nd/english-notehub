---
{
  'id': 'b2-03-presenting-architecture',
  'slug': 'b2-03-presenting-architecture',
  'titleEn': 'Presenting Architecture Decisions',
  'titleVi': 'Trình bày quyết định kiến trúc',
  'subtitleEn': 'Read and discuss system architecture presentations',
  'subtitleVi': 'Đọc và thảo luận về bài thuyết trình kiến trúc hệ thống',
  'level': 'B2',
  'unit': 1,
  'skill': 'reading',
  'order': 3,
  'cefr': 'B2',
  'minutes': 12,
  'tags': ['architecture', 'system-design', 'reading', 'technical'],
  'audioScript': "The architecture we chose prioritizes scalability over simplicity.\nEach service handles its own data persistence layer.\nWe decided against a microservices approach for now.\n",
  'listeningEnabled': true,
  'flashcardCount': 6,
  'quiz':
    [
      {
        'type': 'choice',
        'prompt': 'What does "prioritizes X over Y" mean?',
        'options':
          [
            'X and Y are equally important',
            'X is more important than Y',
            'X is less important than Y',
          ],
        'answer': 'X is more important than Y',
        'explanation': 'Trong ngữ cảnh câu hỏi, “X is more important than Y” thể hiện đúng ý nghĩa hoặc cấu trúc trọng tâm của bài Trình bày quyết định kiến trúc. Hãy đối chiếu với câu mẫu xung quanh thay vì chỉ ghi nhớ đáp án rời rạc.',
        'distractorFeedback':
          {
            'X and Y are equally important': 'Phương án này không hoàn thành đúng ý định giao tiếp hoặc cấu trúc được kiểm tra trong ngữ cảnh câu hỏi.',
            'X is less important than Y': 'Phương án này không hoàn thành đúng ý định giao tiếp hoặc cấu trúc được kiểm tra trong ngữ cảnh câu hỏi.',
          },
      },
      {
        'type': 'fill',
        'prompt': 'We decided ___ a microservices approach for now.',
        'answer': 'against',
        'acceptedAnswers': ['against'],
        'explanation': 'Trong ngữ cảnh câu hỏi, “against” thể hiện đúng ý nghĩa hoặc cấu trúc trọng tâm của bài Trình bày quyết định kiến trúc. Hãy đối chiếu với câu mẫu xung quanh thay vì chỉ ghi nhớ đáp án rời rạc.',
      },
      {
        'type': 'choice',
        'prompt': 'What does "for now" imply?',
        'options': ['This is permanent', 'This may change in the future', 'This is urgent'],
        'answer': 'This may change in the future',
        'explanation': 'Trong ngữ cảnh câu hỏi, “This may change in the future” thể hiện đúng ý nghĩa hoặc cấu trúc trọng tâm của bài Trình bày quyết định kiến trúc. Hãy đối chiếu với câu mẫu xung quanh thay vì chỉ ghi nhớ đáp án rời rạc.',
        'distractorFeedback':
          {
            'This is permanent': 'Phương án này không hoàn thành đúng ý định giao tiếp hoặc cấu trúc được kiểm tra trong ngữ cảnh câu hỏi.',
            'This is urgent': 'Phương án này không hoàn thành đúng ý định giao tiếp hoặc cấu trúc được kiểm tra trong ngữ cảnh câu hỏi.',
          },
      },
    ],
  'categoryEn': 'Technical Leadership Communication',
  'categoryVi': 'Giao tiếp Dẫn dắt Kỹ thuật',
  'prerequisites': ['b2-02-conflict-resolution'],
  'editorialStatus': 'structured-rewrite',
  'sourceType': 'fictional',
  'practiceContract': { 'mode': 'writing', 'minWords': 55, 'maxWords': 170 },
}
---

# Trình bày quyết định kiến trúc

## Kịch bản

Đọc bài thuyết trình review kiến trúc từ một senior engineer trình bày với các bên liên quan.

---

**Tiêu đề: Di chuyển sang Kiến trúc Hướng sự kiện**

## Tại sao chúng ta cần thay đổi

Kiến trúc monolith hiện tại đã phục vụ tốt, nhưng nó đang bộc lộ giới hạn. Khi lưu lượng người dùng tăng, chúng ta không thể scale các component độc lập. Khi payment service gặp sự cố, toàn bộ nền tảng sập.

## Đề xuất

Chúng tôi khuyến nghị chuyển sang kiến trúc hướng sự kiện. Mỗi domain — thanh toán, tồn kho, thông báo — sẽ trở thành một service độc lập giao tiếp qua event bus.

> **Cụm từ quan trọng**: "We decided to move away from the monolith toward event-driven services."

## Các trade-off đã cân nhắc

| Hướng tiếp cận         | Ưu điểm                  | Nhược điểm          |
| ---------------------- | ------------------------ | ------------------- |
| Monolith (hiện tại)    | Đơn giản, nhanh xây dựng | Không scale độc lập |
| Microservices          | Rất scalable             | Phức tạp để bảo trì |
| Event-driven (đề xuất) | Scalable, decoupled      | Cần công cụ mới     |

## Lộ trình triển khai

**Giai đoạn 1** (Q1): Xây dựng hạ tầng event
**Giai đoạn 2** (Q2): Di chuyển payment service
**Giai đoạn 3** (Q3): Di chuyển các service còn lại

## Câu hỏi để xem xét

1. Vấn đề chính mà kiến trúc này hướng tới giải quyết là gì?
2. Tại sao họ chọn event-driven thay vì pure microservices?
3. "Decoupled" nghĩa là gì trong ngữ cảnh này?

## Bài học tiếp theo

Ở bài tiếp theo **B2-04-meeting-facilitation**, bạn sẽ luyện điều phối một nhóm đi đến quyết định rõ ràng.

<!-- learning-loop:start -->

## Kết quả học tập

Sau bài này, bạn có thể rút ra ý chính và chi tiết hỗ trợ từ văn bản về **Trình bày quyết định kiến trúc**, sau đó đưa ra một cách hiểu dựa trên bằng chứng.

## Luyện tập theo tình huống

### Tình huống

Đọc biên bản quyết định kiến trúc hư cấu. Xác định phương án đã chọn, ưu tiên chi phối, phương án bị loại và rủi ro còn lại.

> **Lưu ý:** Tình huống và các chi tiết đều là hư cấu để luyện ngôn ngữ; đây không phải sự kiện, chính sách, nghiên cứu hoặc diễn giải pháp lý có thật.

### Luyện tập có kiểm soát

Trước khi đọc lại phần giải thích, hãy viết một dòng cho ý chính, một dòng cho chi tiết hỗ trợ mạnh nhất và một cụm từ thể hiện tông giọng hoặc lập trường.

### Nhiệm vụ có hướng dẫn

Viết 55–170 từ bằng tiếng Anh dưới dạng ghi chú đọc hiểu có cấu trúc. Nêu ý chính, trích hoặc diễn đạt lại một chi tiết hỗ trợ, xác định một lựa chọn văn phong và tách bằng chứng khỏi suy luận.

### Bài mẫu

> **Main point and evidence:** The architecture we chose prioritizes scalability over simplicity. Each service handles its own data persistence layer. We decided against a microservices approach for now.
>
> **Interpretation:** I make the relationship between evidence, constraint, and recommendation explicit. The response avoids a binary claim when the situation calls for a trade-off, and it gives the audience a practical checkpoint for challenging or confirming the recommendation. Other well-supported responses are possible.

### Vì sao bài mẫu phù hợp

Bài mẫu thể hiện một cách xử lý hợp lý, không phải kịch bản bắt buộc học thuộc. Hãy so sánh mức hoàn thành nhiệm vụ, độ chính xác, độ phù hợp với người nghe và độ rõ với bài của bạn rồi sửa một lần.

### Bài tập chuyển đổi

Giải thích quyết định cho product manager thay vì kỹ sư. Giữ ngôn ngữ trọng tâm nhưng thay đổi chi tiết và văn phong cho bối cảnh mới.

### Tự kiểm tra

- [ ] Mình hoàn thành đủ yêu cầu của tình huống, không chỉ dùng đúng cấu trúc.
- [ ] Ngôn ngữ trọng tâm chính xác và đúng ý định.
- [ ] Độ trực tiếp và lượng chi tiết phù hợp người nghe hoặc người đọc.
- [ ] Người nhận có thể nhận ra ý chính và bước tiếp theo.
- [ ] Mình tách bằng chứng, giả định và khuyến nghị thay vì trình bày tất cả với cùng mức chắc chắn.

<!-- learning-loop:end -->
