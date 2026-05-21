# Kỹ năng đọc hiểu tài liệu tiếng Anh nhanh (Daily English)

Lập trình viên phần mềm phải đọc tài liệu tiếng Anh hàng ngày - từ API docs, hướng dẫn của framework, bài đăng trên StackOverflow, file log console, cho đến các README trên GitHub. Bạn không cần phải đọc từng từ một. Chìa khóa để đọc hiểu hiệu quả là kỹ năng quét nhanh (scanning/skimming) để tìm chính xác dòng lệnh, cấu hình, hoặc đoạn code cần thiết.

---

## 1. Từ vựng Cốt lõi của Tài liệu Kỹ thuật tiếng Anh

Những thuật ngữ này xuất hiện trong hầu hết các tài liệu README và hướng dẫn chính thức. Hãy học chúng để cải thiện tốc độ đọc:

1. **Deprecated:** Lỗi thời, không khuyến khích dùng nữa và chuẩn bị bị xóa bỏ ở các phiên bản sau.
   * *"The `v1/users` API is deprecated. Please use `v2/users` instead."*
2. **Out of the box:** Hoạt động ngay lập tức sau khi cài đặt mà không cần cấu hình phức tạp.
   * *"Authentication works out of the box with this library."*
3. **Boilerplate:** Đoạn code mẫu/code dựng sẵn tiêu chuẩn để bạn sao chép và bắt đầu dự án.
   * *"Clone this repository to get the basic boilerplate code."*
4. **Under the hood:** Cách hệ thống hoạt động bên trong (phía sau hậu trường).
   * *"Under the hood, this library uses Redis for caching."*
5. **Production-ready:** Ổn định và bảo mật đủ để đưa vào sử dụng thực tế (ứng dụng live).
   * *"This database configuration is not production-ready."*
6. **Workaround:** Giải pháp thay thế tạm thời để vượt qua một lỗi hoặc giới hạn của hệ thống.
   * *"As a workaround, you can disable SSL check in local development."*
7. **Backwards-compatible:** Tương thích ngược (tương thích với các phiên bản cũ hơn của phần mềm).
   * *"Version 4.0 is fully backwards-compatible with version 3.x."*
8. **Edge case:** Trường hợp biên/trường hợp đặc biệt ít gặp hoặc cực đoan của hệ thống.
   * *"We need to test the edge case where the user has no email address."* *(Chúng ta cần test trường hợp đặc biệt khi người dùng không có địa chỉ email.)*
9. **Legacy code:** Hệ thống code cũ, thường khó bảo trì nhưng vẫn đang hoạt động.
   * *"We are migrating our legacy PHP code to a modern NestJS API."* *(Chúng tôi đang chuyển đổi hệ thống code PHP cũ sang API NestJS hiện đại.)*
10. **Fallback:** Giải pháp dự phòng (khi giải pháp chính bị lỗi).
    * *"The system will use local storage as a fallback if Redis is down."* *(Hệ thống sẽ dùng local storage làm dự phòng nếu Redis bị sập.)*
11. **Scaffold / Scaffolding:** Tạo khung xương/khung cấu trúc code tự động cho dự án.
    * *"Use the CLI command to scaffold a new CRUD controller."* *(Dùng lệnh CLI để tự động tạo khung controller CRUD mới.)*
12. **Overhead:** Chi phí tài nguyên (CPU, ram, thời gian) phát sinh thêm khi xử lý một tác vụ.
    * *"Adding another database layer will introduce some performance overhead."* *(Thêm một layer database sẽ gây tốn thêm một chút hiệu năng.)*
13. **Out of sync:** Lệch pha/không đồng bộ thông tin giữa các thành phần.
    * *"The local database schema is out of sync with production."* *(Cấu trúc database ở local đang không đồng bộ với production.)*
14. **Bottleneck:** Nút thắt cổ chai (điểm nghẽn làm chậm toàn bộ hệ thống).
    * *"This unindexed database query is the main bottleneck of the landing page."* *(Câu query không được đánh index này chính là điểm nghẽn làm chậm trang landing page.)*
15. **Rate limiting:** Giới hạn số lượng yêu cầu của người dùng trong một khoảng thời gian nhất định.
    * *"The API has rate limiting to prevent spam attacks."* *(API có giới hạn lượt gọi để chống tấn công spam.)*
16. **Thread-safe:** An toàn đa luồng (không bị xung đột dữ liệu khi chạy nhiều tác vụ cùng lúc).
    * *"This singleton service is thread-safe."* *(Service dạng singleton này an toàn đa luồng.)*
17. **Payload:** Dữ liệu thực tế được gửi đi hoặc nhận về trong một yêu cầu HTTP.
    * *"Make sure the JSON payload contains the required fields."* *(Hãy chắc chắn rằng payload JSON chứa đủ các trường bắt buộc.)*

---

## 2. Nguyên tắc 3 Bước khi Quét nhanh file README

Khi bạn mở một thư viện mới hoặc một repo GitHub, hãy làm theo thứ tự sau để tiết kiệm thời gian:

1.  **Look for "Installation" (Tìm phần cài đặt):** Tìm chính xác câu lệnh terminal cần chạy (ví dụ: `npm install [tên-thư-viện]` hoặc `composer require [tên-gói]`).
2.  **Look for "Quick Start" or "Basic Usage" (Cách dùng cơ bản):** Tìm đoạn code mẫu nhỏ nhất hướng dẫn cách import và khởi tạo thư viện. Hãy bỏ qua chữ và nhìn thẳng vào các block code!
3.  **Check "Prerequisites" or "Requirements" (Yêu cầu hệ thống):** Đảm bảo môi trường của bạn tương thích (ví dụ: *Requires Node.js version 18 or higher* hoặc *PHP >= 8.2*).

---

## 3. Cách Đọc nhanh trên GitHub Issues & StackOverflow

Khi bạn copy-paste một mã lỗi và tìm trên Google, bạn thường sẽ dẫn đến trang GitHub Issues hoặc StackOverflow. Đừng đọc những đoạn văn dài lê thê.

*   **StackOverflow:** Cuộn thẳng xuống **câu trả lời đầu tiên** (có tích xanh ✅ hoặc có lượt vote cao nhất). Hãy nhìn vào block code, copy, paste và chạy thử ở local.
*   **GitHub Issues:**
    *   Cuộn xuống tìm các comment có nhiều emoji đồng tình như 👍 (thumbs-up) hoặc ❤️ (heart). Đây thường là những comment chứa cách sửa lỗi đã được xác minh.
    *   Nhấn `Cmd + F` (Mac) hoặc `Ctrl + F` (Windows) để tìm nhanh các từ khóa như **"solved"** (đã giải quyết), **"workaround"** (cách lách), **"fix"** (sửa lỗi), hoặc **"working"** (đang chạy).
    *   Hãy check ngày tháng! Giải pháp từ năm 2018 có thể làm hỏng dự án của bạn vào năm 2026. Hãy ưu tiên các comment gần đây.

---

## 4. Đọc Tài liệu API (Những yếu tố cần tập trung)

Khi tích hợp một API mới, hãy bỏ qua các đoạn mô tả dài dòng và kiểm tra ngay 3 yếu tố sau:

1.  **Method & URL của Endpoint:** (Ví dụ: `POST /api/v1/checkout`).
2.  **Request Body (Payload):** Nhìn vào các key trong JSON. Xác định trường nào là **Required** (bắt buộc phải gửi) và trường nào là **Optional** (không bắt buộc, có thể bỏ qua).
3.  **Response & Status Codes:**
    *   `200 OK` hoặc `201 Created` (Giao diện dữ liệu trả về khi thành công).
    *   `400 Bad Request` hoặc `401 Unauthorized` (Các lỗi bạn có thể gặp phải).

---

## 5. Cấu trúc Câu & Mẫu câu phổ biến trong Tài liệu Kỹ thuật

Tài liệu chính thức thường sử dụng các cấu trúc câu lặp đi lặp lại để mô tả yêu cầu, điều kiện và tùy chọn:

### 5.1. Câu điều kiện ràng buộc
* *"**Assuming that** [X] is installed, you can run..."* *(Giả định rằng [X] đã được cài đặt, bạn có thể chạy...)*
* *"**Unless specified otherwise**, the default port is 8080."* *(Trừ khi có cấu hình khác, port mặc định là 8080.)*
* *"**Make sure to** run migration scripts **prior to** deploying."* *(Hãy chắc chắn chạy script migration trước khi deploy.)*
* *"**Provided that** the API key is valid, the response returns 200."* *(Với điều kiện là API key hợp lệ, phản hồi sẽ trả về mã 200.)*

### 5.2. Hướng dẫn và Khuyến nghị ở thể Bị động
* *"**It is recommended that** you cache database queries."* *(Khuyến nghị bạn nên cache các truy vấn cơ sở dữ liệu.)*
* *"This option **is enabled by default**."* *(Tùy chọn này mặc định đã được bật sẵn.)*
* *"**Care should be taken when** modifying production tables."* *(Cần cẩn trọng khi chỉnh sửa các bảng dữ liệu trên production.)*
* *"This method **is automatically invoked** by the compiler."* *(Hàm này được tự động gọi bởi trình biên dịch.)*

### 5.3. Điều cấm & Ràng buộc tuyệt đối
* *"**Under no circumstances should you** commit your environment variables to Git."* *(Trong bất kỳ tình huống nào, tuyệt đối không commit file cấu hình môi trường lên Git.)*
* *"Doing so **will result in** a runtime error."* *(Hành động này sẽ dẫn đến lỗi runtime.)*

---

## 6. Đọc Release Notes & Nhật ký thay đổi (Changelog)

Khi nâng cấp một thư viện, việc kiểm tra changelog sẽ giúp bạn tránh các bug nghiêm trọng làm sập app. Hãy quét các từ khóa:

* **Breaking Changes (Sự thay đổi gây lỗi tương thích):** Bản cập nhật quan trọng đòi hỏi bạn phải sửa lại code cũ vì nó không còn tương thích với phiên bản mới nữa. Hãy tìm phần hướng dẫn migration.
* **Features / Enhancements:** Các tính năng hoặc cải tiến mới được thêm vào.
* **Bug Fixes / Patches:** Các lỗi đã được sửa xong.
* **Security Patches:** Các bản vá bảo mật (rất khuyến khích nâng cấp ngay).

---

## 7. Cách Quét file Log & Lỗi Console

Khi ứng dụng của bạn bị crash, terminal sẽ hiển thị một danh sách lỗi (stack trace) khổng lồ. Đừng cố đọc hết toàn bộ log đó. Hãy tìm các từ khóa sau:

* **Fatal / Critical / Error:** Dấu hiệu chính cho biết ứng dụng bị lỗi ở đâu.
* **Caused by (Nguyên nhân do):** Nguyên nhân gốc rễ của lỗi. Hãy cuộn xuống để tìm dòng này.
* **Tên file dự án của bạn:** Hãy tìm các đường dẫn file tuyệt đối chứa `/src/` hoặc thư mục dự án của bạn. Hãy bỏ qua các đường dẫn chứa `/node_modules/` vì đó là code nội bộ của thư viện bên thứ ba. Hãy tập trung vào số dòng (line numbers) trong chính file code của bạn.

---

## 8. Các Lỗi Thường Gặp Cần Tránh Khi Đọc Tài Liệu

* **Đọc tài liệu từ đầu đến cuối như đọc tiểu thuyết:**
  * Tài liệu kỹ thuật là để tra cứu. Đừng đọc tuần tự. Hãy dùng thanh tìm kiếm hoặc phím tắt `Cmd + F` để đi thẳng vào phần bạn cần.
* **Bỏ qua các cảnh báo Deprecated:**
  * ❌ Lờ đi các cảnh báo màu vàng trong terminal.
  * 🟢 Hãy xử lý các cảnh báo deprecated trong các buổi refactor code trước khi thư viện đó cập nhật lên bản mới và làm hỏng code của bạn hoàn toàn.
* **Copy-paste bừa bãi không check version:**
  * Luôn xác minh phiên bản thư viện trước khi copy lệnh cài đặt. Chạy lệnh cài đặt của v3 trên dự án đang dùng v2 có thể làm hỏng toàn bộ dependency.
* **Bỏ qua phần yêu cầu cài đặt (Prerequisites):**
  * Tốn hàng giờ sửa lỗi cài đặt chỉ vì bỏ qua dòng chữ cảnh báo *"Requires Node.js version 20+"*.
* **Đọc tài liệu sai phiên bản:**
  * Hãy luôn đảm bảo link tài liệu bạn đang đọc khớp với phiên bản thư viện ghi trong file `package.json` của bạn.
* **Copy y nguyên code có chứa ký tự giữ chỗ (placeholder):**
  * ❌ Copy-paste đoạn code có chứa `your_api_key_here` và tự hỏi tại sao server báo lỗi 401 Unauthorized.
  * 🟢 Hãy tìm các ký tự nằm trong dấu ngoặc nhọn `<>` hoặc viết hoa để thay thế bằng thông tin thực tế của bạn trước khi chạy.
* **Nản lòng khi thấy stack trace lỗi quá dài:**
  * Đừng hoảng loạn khi thấy 100 dòng log. Hãy cuộn qua hết các file hệ thống của Node/Vite và tìm đúng tên file do bạn viết để biết lỗi ở dòng nào.
* **Bỏ qua các cảnh báo về an toàn đa luồng (thread-safety):**
  * Luôn kiểm tra xem một thư viện có chạy an toàn trong môi trường bất đồng bộ/đa luồng hay không trước khi đưa lên production.
