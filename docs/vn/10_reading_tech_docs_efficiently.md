# Đọc tài liệu tiếng Anh hiệu quả (Daily English)

Lập trình viên phải đọc tài liệu (documentation) bằng tiếng Anh hàng ngày - từ tài liệu API, hướng dẫn của thư viện, cho tới các bài viết trên StackOverflow hay các issue trên GitHub. Bạn không cần và cũng không nên đọc từng chữ một. Bí quyết ở đây là kỹ năng đọc lướt (scanning/skimming) để tìm ra đúng thứ mình cần.

---

## 1. Từ vựng cốt lõi trong Tài liệu kỹ thuật tiếng Anh

Các từ này xuất hiện ở hầu hết mọi trang tài liệu thư viện. Hãy ghi nhớ chúng để đọc hiểu nhanh hơn:

| Từ / Cụm từ | Ý nghĩa đơn giản | Ví dụ trong tài liệu |
| :--- | :--- | :--- |
| **Deprecated** | Đã lỗi thời, không còn được khuyến khích sử dụng và sẽ bị xóa trong tương lai gần. | *"The `v1/users` API is deprecated. Please use `v2/users` instead."* |
| **Out of the box** | Có sẵn để dùng ngay sau khi cài đặt mà không cần cấu hình phức tạp. | *"Authentication works out of the box with this library."* |
| **Boilerplate** | Đoạn code mẫu/code khung xương tiêu chuẩn để copy làm nền móng bắt đầu. | *"Clone this repository to get the basic boilerplate code."* |
| **Under the hood** | Cơ chế hoạt động ngầm bên dưới của hệ thống (phía sau hậu trường). | *"Under the hood, this library uses Redis for caching."* |
| **Production-ready** | Đủ ổn định, bảo mật và tốt để chạy trên môi trường thực tế (production). | *"This database configuration is not production-ready."* |
| **Workaround** | Cách sửa lỗi tạm thời khi thư viện bị lỗi hoặc bị giới hạn tính năng. | *"As a workaround, you can disable SSL check in local development."* |

---

## 2. Quy tắc 3 bước đọc lướt file README / npm page

Khi mở tài liệu của một thư viện mới, hãy tuân theo thứ tự sau để tiết kiệm thời gian:

1.  **Tìm mục "Installation" (Cài đặt):** Tìm ngay câu lệnh cài đặt trong terminal (ví dụ: `npm install [tên thư viện]`).
2.  **Tìm mục "Quick Start" hoặc "Basic Usage" (Dùng nhanh):** Xem ngay đoạn code mẫu ngắn nhất để biết cách import và sử dụng thư viện đó. Hãy bỏ qua phần chữ dài dòng, tập trung nhìn thẳng vào code block!
3.  **Kiểm tra "Prerequisites" (Yêu cầu hệ thống):** Để đảm bảo môi trường máy bạn tương thích (ví dụ: *Requires Node.js version 18 or higher*).

---

## 3. Cách đọc lướt GitHub Issues & StackOverflow khi sửa lỗi

Khi bạn copy-paste mã lỗi trên terminal lên Google, bạn thường sẽ được dẫn tới GitHub Issues hoặc StackOverflow. Đừng đọc các bài viết dài dòng lê thê của họ.

-   **StackOverflow:** Cuộn thẳng xuống câu trả lời **đầu tiên** (câu trả lời có dấu tích xanh ✅ hoặc có lượt upvote cao nhất). Hãy nhìn vào block code của họ. Copy, paste thử vào local xem chạy được không.
-   **GitHub Issues:**
    -   Cuộn xuống tìm các comment có nhiều icon thumbs-up (👍) hoặc trái tim (❤️). Đó thường là cách sửa lỗi đã được cộng đồng kiểm chứng.
    -   Nhấn `Cmd + F` (Mac) hoặc `Ctrl + F` (Windows) và tìm các từ khóa **"solved"** (đã giải quyết), **"workaround"** (cách khắc phục tạm thời), **"fix"** (sửa lỗi), hoặc **"working"** (đã chạy được).
    -   Xem kỹ ngày tháng! Lời giải từ năm 2018 có thể đã quá cũ và gây lỗi cho dự án của bạn ở hiện tại. Hãy ưu tiên các comment gần đây nhất.

---

## 4. Cách đọc Tài liệu API (API Reference)

Khi tích hợp một API mới, hãy bỏ qua các phần mô tả lý thuyết và chú ý vào 3 yếu tố:

1.  **Method & URL của Endpoint:** (ví dụ: `POST /api/v1/checkout`).
2.  **Request Body (Payload):** Xem định dạng JSON gửi lên. Xác định trường nào là **Required** (bắt buộc phải gửi) và trường nào là **Optional** (có thể gửi hoặc không).
3.  **Response & Status Codes:**
    *   `200 OK` hoặc `201 Created` (Khi chạy thành công API sẽ trả về gì).
    *   `400 Bad Request` hoặc `401 Unauthorized` (Nếu bị lỗi thì API sẽ trả về lỗi gì).
