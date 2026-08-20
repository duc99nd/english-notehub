# Mục Đích, Kết Quả & Nguyên Nhân (Daily English)

Trong các phần mô tả Pull Request (PR description), tài liệu thiết kế hệ thống và comment code, bạn bắt buộc phải liên kết rõ ràng hành động lập trình của mình với các mục tiêu kỹ thuật. Tài liệu này cung cấp các công thức và quy tắc chính xác để diễn đạt **tại sao** bạn làm việc đó (mục đích/nguyên nhân) và **kết quả** là gì.

---

## 1. Diễn Đạt Mục Đích (Tại sao làm và để đạt được gì?)

Để mô tả mục tiêu của một thay đổi code hoặc quyết định kiến trúc, hãy dùng các mẫu sau:

### Dạng A: "In order to / So as to + Động từ nguyên mẫu" (Rất trang trọng & rõ ràng)

Có thể đứng ở đầu hoặc giữa câu.

- **"We refactored the fetch hook in order to improve page responsiveness."** _(Chúng tôi refactor hook fetch để cải thiện độ phản hồi của trang)._
- **"In order to avoid SQL injection, we prepared all raw database queries."** _(Để tránh lỗi SQL injection, chúng tôi đã parameterized tất cả các câu query DB)._
- **"We disabled the service so as to save CPU cycles."** _(Chúng tôi tắt dịch vụ đó để tiết kiệm tài nguyên CPU)._

### Dạng B: "So that / In order that + Chủ ngữ + can/could/would + Động từ"

Dùng khi mục tiêu tác động lên một đối tượng khác hoặc đi kèm điều kiện.

- **"We set up a fallback database so that users can access their profiles if the primary fails."** _(Chúng tôi dựng DB backup để user vẫn truy cập được profile nếu DB chính bị lỗi)._
- **"The script was updated so that the QA team could automate regression tests."** _(Script đã được cập nhật để team QA có thể tự động hóa việc chạy test hồi quy)._

### 💡 10 Ví dụ thực tế:

1.  **"We introduced Redis in order to cache frequently queried user data."** _(Chúng tôi áp dụng Redis để cache dữ liệu user được truy vấn thường xuyên)._
2.  **"In order to minimize bundle size, we replaced Moment.js with date-fns."** _(Để giảm thiểu kích thước bundle, chúng tôi đã thay Moment.js bằng date-fns)._
3.  **"The Dockerfile was rewritten so as to speed up the CI/CD pipeline."** _(Dockerfile được viết lại nhằm tăng tốc pipeline CI/CD)._
4.  **"We configured absolute imports in order to make code navigation easier."** _(Chúng tôi cấu hình absolute import để giúp điều hướng code dễ dàng hơn)._
5.  **"I added error boundaries so that the application doesn't crash on minor rendering bugs."** _(Tôi đã thêm error boundary để ứng dụng không bị sập bởi các lỗi render nhỏ)._
6.  **"The team setup CPU alerts so that we could resolve resource leaks immediately."** _(Team đã cài đặt cảnh báo CPU để chúng ta có thể xử lý rò rỉ tài nguyên ngay lập tức)._
7.  **"In order to prevent layout shifts, we defined height and width for all assets."** _(Để ngăn hiện tượng nhảy layout, chúng tôi đã định nghĩa chiều cao và chiều rộng cho tất cả asset)._
8.  **"We refactored the auth controller so that Huy could integrate OAuth more easily."** _(Chúng tôi đã refactor controller auth để Huy có thể tích hợp OAuth dễ dàng hơn)._
9.  **"The database was sharded in order to handle the growing volume of transactions."** _(Database đã được sharded để xử lý lượng giao dịch ngày càng tăng)._
10. **"We set up a staging workspace so that clients can test the features before release."** _(Chúng tôi đã dựng môi trường staging để khách hàng test tính năng trước khi release)._

---

## 2. Diễn Đạt Kết Quả (Hệ quả là gì?)

Dùng các từ nối sau để mô tả kết quả của việc cập nhật database, tối ưu RAM hoặc sửa bug.

- **therefore / consequently / as a result (do đó / kết quả là):**
  - **"We added indexes to the table. As a result, query latency dropped by 50%."** _(Chúng tôi đã thêm index vào bảng. Kết quả là độ trễ truy vấn giảm 50%)._
- **thereby + V-ing (bằng cách đó / qua đó):**
  - Cấu trúc cực kỳ gọn gàng để chỉ ra kết quả tự động của hành động.
  - **"We cached the endpoint, thereby reducing database load."** _(Chúng tôi cache endpoint, qua đó giảm tải cho database)._
  - **"The script deletes temp files, thereby freeing disk space."** _(Script xóa các file tạm, qua đó giải phóng dung lượng đĩa)._

### 💡 10 Ví dụ thực tế:

1.  **"We optimized the images, thereby saving 40% bandwidth on load."** _(Chúng tôi đã tối ưu hóa hình ảnh, qua đó tiết kiệm 40% băng thông khi tải)._
2.  **"The load balancer routes traffic efficiently. Consequently, server crash occurrences dropped."** _(Bộ cân bằng tải định tuyến traffic hiệu quả. Kết quả là tần suất sập server đã giảm)._
3.  **"We compressed the bundle file. As a result, the page loads significantly faster."** _(Chúng tôi nén file bundle. Kết quả là trang tải nhanh hơn đáng kể)._
4.  **"Huy refactored the legacy functions, thereby improving code readability."** _(Huy đã refactor các hàm cũ, qua đó cải thiện độ đọc hiểu của code)._
5.  **"The background task deletes old sessions weekly, thereby optimizing database storage."** _(Tác vụ chạy ngầm xóa các session cũ hàng tuần, qua đó tối ưu bộ nhớ DB)._
6.  **"We upgraded the Node runtime. Consequently, our scripts execute way faster."** _(Chúng tôi đã nâng cấp runtime Node. Kết quả là các script thực thi nhanh hơn nhiều)._
7.  **"The team implemented lazy loading, thereby reducing the initial page load time."** _(Team đã triển khai lazy loading, qua đó giảm thời gian load trang ban đầu)._
8.  **"We enabled SSL verification. As a result, all requests are now secure."** _(Chúng tôi bật xác thực SSL. Kết quả là mọi request hiện tại đều an toàn)._
9.  **"The database index was added successfully, thereby speeding up search queries."** _(Index DB đã được thêm thành công, qua đó tăng tốc các câu query tìm kiếm)._
10. **"We isolated the payment gateway code. Consequently, failures do not affect the main portal."** _(Chúng tôi cô lập phần code cổng thanh toán. Kết quả là các lỗi phát sinh không ảnh hưởng đến trang chính)._

---

## 3. Diễn Đạt Nguyên Nhân (Do đâu?)

- **because / since / as (bởi vì):** Đi kèm với một mệnh đề đầy đủ (`Chủ ngữ + Động từ`).
- **because of / due to / owing to (do / vì):** Đi kèm với một Cụm danh từ (Noun Phrase).

### 💡 10 Ví dụ thực tế:

1.  **"We chose MongoDB because the schema is highly dynamic."** _(Chúng tôi chọn MongoDB vì schema của nó cực kỳ linh hoạt)._
2.  **"Since this API is third-party, we added a fallback retry mechanism."** _(Vì API này là của bên thứ ba, chúng tôi đã thêm cơ chế retry dự phòng)._
3.  **"The build failed due to a missing environment variable."** _(Bản build bị lỗi do thiếu biến môi trường)._
4.  **"Owing to the database bottleneck, we decided to introduce Redis."** _(Do nghẽn cổ chai database, chúng tôi quyết định áp dụng Redis)._
5.  **"As our traffic is growing quickly, we must upgrade our cloud plan."** _(Vì traffic tăng nhanh, chúng ta phải nâng cấp gói cloud)._
6.  **"The pipeline crashed because of a syntax error in the configuration file."** _(Pipeline bị sập do lỗi cú pháp trong file cấu hình)._
7.  **"Since Huy was on leave, I handled the deployment scripts."** _(Vì Huy nghỉ phép, tôi đã xử lý các script deployment)._
8.  **"We paused the release because the critical test suite was failing."** _(Chúng tôi tạm dừng bản release vì bộ test quan trọng bị lỗi)._
9.  **"The page was slow due to unoptimized image assets."** _(Trang bị chậm do các asset hình ảnh chưa được tối ưu)._
10. **"Owing to the expiration of the SSL certificate, the site was marked insecure."** _(Do chứng chỉ SSL hết hạn, trang web bị đánh dấu không an toàn)._

---

## 4. Mẫu Viết Mô Tả PR Tiêu Chuẩn

Hãy sử dụng mẫu cấu trúc này cho đợt mở PR tiếp theo của bạn trên GitHub/GitLab:

### Mẫu A (Sửa sự cố khẩn cấp)

> **Proposed Changes:**
> We updated the authentication middleware **in order to** prevent token reuse.
> _(Chúng tôi đã cập nhật middleware xác thực để ngăn việc tái sử dụng token)._
>
> **Technical Reason:**
> The previous setup was vulnerable **because** tokens were stored locally without expiration validation.
> _(Hệ thống cũ có lỗ hổng vì token được lưu local mà không có xác thực hết hạn)._
>
> **Result:**
> Tokens are now validated on every request. **As a result**, unauthorized requests are rejected immediately, **thereby** improving API security.
> _(Token hiện tại được xác thực trên mỗi request. Kết quả là các request không hợp lệ bị chặn ngay lập tức, qua đó tăng cường bảo mật API)._

### Mẫu B (Nâng cấp hiệu năng)

> **Proposed Changes:**
> We sharded the transaction table **so that** read speeds remain consistent.
> _(Chúng tôi phân mảnh bảng giao dịch để tốc độ đọc duy trì ổn định)._
>
> **Technical Reason:**
> Latency was increasing **due to** the large volume of historical rows.
> _(Độ trễ tăng cao do khối lượng lớn các dòng dữ liệu lịch sử)._
>
> **Result:**
> The queries now target smaller shards. **Consequently**, database load is reduced, **thereby** stabilizing the system.
> _(Các query giờ đây nhắm vào các mảnh nhỏ hơn. Kết quả là tải database được giảm thiểu, qua đó giúp hệ thống ổn định)._
