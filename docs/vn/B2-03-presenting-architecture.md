---
{
  "id": "b2-03-presenting-architecture",
  "slug": "b2-03-presenting-architecture",
  "titleEn": "Presenting Architecture Decisions",
  "titleVi": "Trình bày quyết định kiến trúc",
  "subtitleEn": "Read and discuss system architecture presentations",
  "subtitleVi": "Đọc và thảo luận về bài thuyết trình kiến trúc hệ thống",
  "level": "B2",
  "unit": 1,
  "skill": "reading",
  "order": 3,
  "cefr": "B2",
  "minutes": 5,
  "tags": [
    "architecture",
    "system-design",
    "reading",
    "technical"
  ],
  "audioScript": "Kiến trúc chúng tôi chọn ưu tiên khả năng mở rộng hơn là sự đơn giản.\nMỗi service xử lý lớp persistence dữ liệu riêng.\nChúng tôi quyết định không dùng microservices vào lúc này.\n",
  "listeningEnabled": true,
  "flashcardCount": 6,
  "quiz": [
    {
      "type": "choice",
      "prompt": "Prioritizes X over Y nghĩa là gì?",
      "options": [
        "X và Y quan trọng như nhau",
        "X quan trọng hơn Y",
        "X ít quan trọng hơn Y"
      ],
      "answer": "X quan trọng hơn Y"
    },
    {
      "type": "fill",
      "prompt": "Chúng tôi quyết định không dùng microservices ___.",
      "answer": "for now"
    },
    {
      "type": "choice",
      "prompt": "Decoupled trong ngữ cảnh này nghĩa là gì?",
      "options": [
        "Các phần phụ thuộc lẫn nhau",
        "Các phần độc lập với nhau",
        "Các phần không hoạt động"
      ],
      "answer": "Các phần độc lập với nhau"
    }
  ]
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

Ở bài tiếp theo **B2-04-persuasion**, bạn sẽ luyện viết thuyết phục về các quyết định kỹ thuật.
