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
  'minutes': 11,
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
      },
      {
        'type': 'fill',
        'prompt': 'We decided ___ a microservices approach for now.',
        'answer': 'against',
      },
      {
        'type': 'choice',
        'prompt': 'What does "for now" imply?',
        'options': ['This is permanent', 'This may change in the future', 'This is urgent'],
        'answer': 'This may change in the future',
      },
    ],
  'categoryEn': 'Technical Leadership Communication',
  'categoryVi': 'Giao tiếp Dẫn dắt Kỹ thuật',
  'prerequisites': ['b2-02-conflict-resolution'],
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

Sau bài này, bạn có thể vận dụng ngôn ngữ của chủ đề **Trình bày quyết định kiến trúc** vào một tình huống thực tế thay vì chỉ nhận biết từ vựng.

## Phòng luyện tập

### Nhận diện cách diễn đạt

Đọc tình huống, sau đó nghe bài mẫu một lần để nắm ý và một lần để chú ý cách diễn đạt.

> **Colleague:** How would you handle this situation?
>
> **You:** The architecture we chose prioritizes scalability over simplicity.

Đừng chỉ chép lại câu chữ. Hãy nhận diện ba chức năng của câu trả lời: nêu ý chính, cung cấp đủ bối cảnh và đưa ra bước tiếp theo.

> **Mẫu câu**: ý chính rõ ràng + chi tiết hoặc lý do cụ thể + bước tiếp theo phù hợp

### Đến lượt bạn

Tạo một câu trả lời mới cho chủ đề **Trình bày quyết định kiến trúc**. Dùng ít nhất hai cụm từ trong bài, thêm một chi tiết cụ thể và kết thúc bằng câu hỏi hoặc bước tiếp theo phù hợp.

### Bài mẫu

> The architecture we chose prioritizes scalability over simplicity. Each service handles its own data persistence layer. We decided against a microservices approach for now.

Đây là một phương án tham khảo, không phải đoạn bắt buộc phải học thuộc. So sánh mục đích, độ chi tiết và tông giọng với câu trả lời của bạn rồi sửa lại một lần.

### Chuyển đổi register

Viết lại câu trả lời hai lần: một bản cho đồng đội thân quen và một bản cho khách hàng hoặc stakeholder cấp cao. Giữ nguyên thông điệp nhưng thay đổi độ trực tiếp, lượng bối cảnh và mức giải thích. Chỉ ra một cụm từ bạn đã làm mềm, một chi tiết bạn nói rõ hơn và một giả định bạn đã loại bỏ.

### Tự kiểm tra

- [ ] Mình hoàn thành nhiệm vụ mà không dịch nguyên câu tiếng Việt từng từ một.
- [ ] Mình dùng ít nhất hai cách diễn đạt hữu ích trong bài.
- [ ] Người nghe có thể nhận ra ý chính ngay.
- [ ] Mình đưa ra chi tiết, lý do hoặc bước tiếp theo cụ thể.

<!-- learning-loop:end -->
