# Động Từ Tường Thuật Trong Báo Cáo & Tài Liệu (Daily English)

Khi viết biên bản cuộc họp (meeting minutes), giải thích các quyết định của đối tác trên Slack, hoặc soạn thảo tài liệu quyết định kiến trúc (ADRs), bạn bắt buộc phải tường thuật lại những gì người khác nói hoặc đã thống nhất. Việc dùng linh hoạt các động từ tường thuật giúp tài liệu chuyên nghiệp hơn và mô tả rõ tính cam kết của quyết định.

---

## 1. Các Cấu Trúc Động Từ Tường Thuật Cần Nhớ

Mỗi động từ tường thuật đi kèm một cấu trúc ngữ pháp cố định. Dưới đây là 3 dạng phổ biến nhất.

### Dạng A: Động từ + that + Mệnh đề (`Chủ ngữ + Động từ`)
Dùng để báo cáo trực tiếp sự thật, quyết định hoặc lời xác nhận.
- **confirm (xác nhận):**
  - **"The client confirmed that they want the dark mode option."** *(Khách hàng xác nhận họ muốn có tùy chọn dark mode).*
- **state / point out (phát biểu / chỉ ra):**
  - **"Huy pointed out that the staging server was misconfigured."** *(Huy chỉ ra rằng server staging cấu hình bị sai).*
- **agree (đồng ý/thống nhất):**
  - **"The team agreed that we should deprecate the legacy API."** *(Cả team thống nhất sẽ khai tử API cũ).*

### Dạng B: Động từ + Tân ngữ (Người) + Động từ to-V
Dùng để tường thuật lại các yêu cầu, nhắc nhở hoặc chỉ dẫn giao việc.
- **ask / request (yêu cầu):**
  - **"The client asked us to deliver the dashboard by Monday."** *(Khách hàng yêu cầu chúng tôi bàn giao dashboard vào thứ Hai).*
- **remind (nhắc nhở):**
  - **"Huy reminded me to update the environment variables."** *(Huy nhắc tôi cập nhật các biến môi trường).*
- **advise (khuyên/khuyến nghị):**
  - **"The DevOps lead advised the team to check container resources."** *(Lead DevOps khuyên team nên kiểm tra lại tài nguyên container).*

### Dạng C: Động từ + V-ing
Dùng khi báo cáo một đề xuất, gợi ý giải pháp.
- **recommend / suggest (đề xuất/gợi ý):**
  - **"The security team recommended adding two-factor authentication."** *(Đội bảo mật đề xuất thêm tính năng xác thực 2 lớp - Không nói: recommended to add).*
  - **"I suggest upgrading our Node version."** *(Tôi gợi ý nâng cấp phiên bản Node).*

---

## 2. Thể Bị Động Tường Thuật Khách Quan (Passive Reporting)

Trong tài liệu kỹ thuật, bạn có thể báo cáo các quyết định hoặc sự cố một cách trung lập, tránh chỉ đích danh cá nhân nào bằng cách dùng chủ ngữ giả `It`.

- **"It was agreed that we would use PostgreSQL."** *(Quyết định dùng PostgreSQL đã được thống nhất - Tập trung vào kết quả).*
- **"It has been reported that the payment screen experiences timeout errors."** *(Đã có báo cáo rằng màn hình thanh toán gặp lỗi timeout).*
- **"It was confirmed that the credentials expired."** *(Đã xác nhận rằng thông tin đăng nhập bị hết hạn).*

---

## 3. Mức Độ Nhấn Mạnh Của Động Từ Tường Thuật

Bạn có thể điều chỉnh sắc thái của báo cáo bằng cách lựa chọn động từ phù hợp:

- **Nhẹ nhàng (Gợi ý/Đề xuất):** *suggest, propose, recommend*
  - **"The backend team suggested sharding the database next year."** *(Team backend gợi ý chia nhỏ DB vào năm sau).*
- **Trung lập (Báo cáo sự việc):** *state, explain, report, confirm*
  - **"The developer explained how the caching logic works."** *(Developer giải thích cách logic cache chạy).*
- **Mạnh mẽ (Khẳng định/Cảnh báo):** *insist, claim, warn*
  - **"The security audit warned that our endpoints were vulnerable."** *(Đợt audit bảo mật cảnh báo các endpoint của chúng ta đang có lỗ hổng).*

---

## 4. Bảng Tra Cứu Nhanh

| Hành động cần tường thuật | Cấu trúc câu đúng | Ví dụ |
| :--- | :--- | :--- |
| Yêu cầu của khách hàng | `ask someone to-V` | "The client **asked us to rewrite** this." |
| Sự thống nhất của team | `agree that S + V` | "We **agreed that we need** caching." |
| Đề xuất giải pháp | `suggest V-ing` | "I **suggest sharding** the DB." |
| Báo cáo lỗi/sự cố | `report that S + V` | "The QAs **reported that the page crashes**." |
