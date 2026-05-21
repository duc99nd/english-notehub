# Mục Đích, Kết Quả & Nguyên Nhân (Daily English)

Trong các phần mô tả Pull Request (PR description), tài liệu thiết kế hệ thống và comment code, bạn bắt buộc phải liên kết rõ ràng hành động lập trình của mình với các mục tiêu kỹ thuật. Tài liệu này cung cấp các công thức và quy tắc chính xác để diễn đạt **tại sao** bạn làm việc đó (mục đích/nguyên nhân) và **kết quả** là gì.

---

## 1. Diễn Đạt Mục Đích (Tại sao làm và để đạt được gì?)

Để mô tả mục tiêu của một thay đổi code hoặc quyết định kiến trúc, hãy dùng các mẫu sau:

### Dạng A: "In order to / So as to + Động từ nguyên mẫu" (Rất trang trọng & rõ ràng)
Có thể đứng ở đầu hoặc giữa câu.
- **"We refactored the fetch hook in order to improve page responsiveness."** *(Chúng tôi refactor hook fetch để cải thiện độ phản hồi của trang).*
- **"In order to avoid SQL injection, we prepared all raw database queries."** *(Để tránh lỗi SQL injection, chúng tôi đã parameterized tất cả các câu query DB).*
- **"We disabled the service so as to save CPU cycles."** *(Chúng tôi tắt dịch vụ đó để tiết kiệm tài nguyên CPU).*

### Dạng B: "So that / In order that + Chủ ngữ + can/could/would + Động từ"
Dùng khi mục tiêu tác động lên một đối tượng khác hoặc đi kèm điều kiện.
- **"We set up a fallback database so that users can access their profiles if the primary fails."** *(Chúng tôi dựng DB backup để user vẫn truy cập được profile nếu DB chính bị lỗi).*
- **"The script was updated so that the QA team could automate regression tests."** *(Script đã được cập nhật để team QA có thể tự động hóa việc chạy test hồi quy).*

---

## 2. Diễn Đạt Kết Quả (Hệ quả là gì?)

Dùng các từ nối sau để mô tả kết quả của việc cập nhật database, tối ưu RAM hoặc sửa bug.

- **therefore / consequently / as a result (do đó / kết quả là):**
  - **"We added indexes to the table. As a result, query latency dropped by 50%."** *(Chúng tôi đã thêm index vào bảng. Kết quả là độ trễ truy vấn giảm 50%).*
- **thereby + V-ing (bằng cách đó / qua đó):**
  - Cấu trúc cực kỳ gọn gàng để chỉ ra kết quả tự động của hành động.
  - **"We cached the endpoint, thereby reducing database load."** *(Chúng tôi cache endpoint, qua đó giảm tải cho database).*
  - **"The script deletes temp files, thereby freeing disk space."** *(Script xóa các file tạm, qua đó giải phóng dung lượng đĩa).*

---

## 3. Diễn Đạt Nguyên Nhân (Do đâu?)

- **because / since / as (bởi vì):** Đi kèm với một mệnh đề đầy đủ (`Chủ ngữ + Động từ`).
  - **"We chose MongoDB because the schema is highly dynamic."** *(Chúng tôi chọn MongoDB vì schema của nó cực kỳ linh hoạt).*
  - **"Since this API is third-party, we added a fallback retry mechanism."** *(Vì API này là của bên thứ ba, chúng tôi đã thêm cơ chế retry dự phòng).*
- **because of / due to / owing to (do / vì):** Đi kèm với một Cụm danh từ (Noun Phrase).
  - **"The build failed due to a missing environment variable."** *(Bản build bị lỗi do thiếu biến môi trường).*
  - **"Owing to the database bottleneck, we decided to introduce Redis."** *(Do nghẽn cổ chai database, chúng tôi quyết định áp dụng Redis).*

---

## 4. Mẫu Viết Mô Tả PR Tiêu Chuẩn

Hãy sử dụng mẫu cấu trúc này cho đợt mở PR tiếp theo của bạn trên GitHub/GitLab:

> **Proposed Changes:**
> We updated the authentication middleware **in order to** prevent token reuse. 
> *(Chúng tôi đã cập nhật middleware xác thực để ngăn việc tái sử dụng token).*
> 
> **Technical Reason:**
> The previous setup was vulnerable **because** tokens were stored locally without expiration validation.
> *(Hệ thống cũ có lỗ hổng vì token được lưu local mà không có xác thực hết hạn).*
> 
> **Result:**
> Tokens are now validated on every request. **As a result**, unauthorized requests are rejected immediately, **thereby** improving API security.
> *(Token hiện tại được xác thực trên mỗi request. Kết quả là các request không hợp lệ bị chặn ngay lập tức, qua đó tăng cường bảo mật API).*
