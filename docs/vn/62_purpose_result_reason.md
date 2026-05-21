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

### 💡 10 Ví dụ thực tế:

1.  **"We introduced Redis in order to cache frequently queried user data."** *(Chúng tôi áp dụng Redis để cache dữ liệu user được truy vấn thường xuyên).*
2.  **"In order to minimize bundle size, we replaced Moment.js with date-fns."** *(Để giảm thiểu kích thước bundle, chúng tôi đã thay Moment.js bằng date-fns).*
3.  **"The Dockerfile was rewritten so as to speed up the CI/CD pipeline."** *(Dockerfile được viết lại nhằm tăng tốc pipeline CI/CD).*
4.  **"We configured absolute imports in order to make code navigation easier."** *(Chúng tôi cấu hình absolute import để giúp điều hướng code dễ dàng hơn).*
5.  **"I added error boundaries so that the application doesn't crash on minor rendering bugs."** *(Tôi đã thêm error boundary để ứng dụng không bị sập bởi các lỗi render nhỏ).*
6.  **"The team setup CPU alerts so that we could resolve resource leaks immediately."** *(Team đã cài đặt cảnh báo CPU để chúng ta có thể xử lý rò rỉ tài nguyên ngay lập tức).*
7.  **"In order to prevent layout shifts, we defined height and width for all assets."** *(Để ngăn hiện tượng nhảy layout, chúng tôi đã định nghĩa chiều cao và chiều rộng cho tất cả asset).*
8.  **"We refactored the auth controller so that Huy could integrate OAuth more easily."** *(Chúng tôi đã refactor controller auth để Huy có thể tích hợp OAuth dễ dàng hơn).*
9.  **"The database was sharded in order to handle the growing volume of transactions."** *(Database đã được sharded để xử lý lượng giao dịch ngày càng tăng).*
10. **"We set up a staging workspace so that clients can test the features before release."** *(Chúng tôi đã dựng môi trường staging để khách hàng test tính năng trước khi release).*

---

## 2. Diễn Đạt Kết Quả (Hệ quả là gì?)

Dùng các từ nối sau để mô tả kết quả của việc cập nhật database, tối ưu RAM hoặc sửa bug.

- **therefore / consequently / as a result (do đó / kết quả là):**
  - **"We added indexes to the table. As a result, query latency dropped by 50%."** *(Chúng tôi đã thêm index vào bảng. Kết quả là độ trễ truy vấn giảm 50%).*
- **thereby + V-ing (bằng cách đó / qua đó):**
  - Cấu trúc cực kỳ gọn gàng để chỉ ra kết quả tự động của hành động.
  - **"We cached the endpoint, thereby reducing database load."** *(Chúng tôi cache endpoint, qua đó giảm tải cho database).*
  - **"The script deletes temp files, thereby freeing disk space."** *(Script xóa các file tạm, qua đó giải phóng dung lượng đĩa).*

### 💡 10 Ví dụ thực tế:

1.  **"We optimized the images, thereby saving 40% bandwidth on load."** *(Chúng tôi đã tối ưu hóa hình ảnh, qua đó tiết kiệm 40% băng thông khi tải).*
2.  **"The load balancer routes traffic efficiently. Consequently, server crash occurrences dropped."** *(Bộ cân bằng tải định tuyến traffic hiệu quả. Kết quả là tần suất sập server đã giảm).*
3.  **"We compressed the bundle file. As a result, the page loads significantly faster."** *(Chúng tôi nén file bundle. Kết quả là trang tải nhanh hơn đáng kể).*
4.  **"Huy refactored the legacy functions, thereby improving code readability."** *(Huy đã refactor các hàm cũ, qua đó cải thiện độ đọc hiểu của code).*
5.  **"The background task deletes old sessions weekly, thereby optimizing database storage."** *(Tác vụ chạy ngầm xóa các session cũ hàng tuần, qua đó tối ưu bộ nhớ DB).*
6.  **"We upgraded the Node runtime. Consequently, our scripts execute way faster."** *(Chúng tôi đã nâng cấp runtime Node. Kết quả là các script thực thi nhanh hơn nhiều).*
7.  **"The team implemented lazy loading, thereby reducing the initial page load time."** *(Team đã triển khai lazy loading, qua đó giảm thời gian load trang ban đầu).*
8.  **"We enabled SSL verification. As a result, all requests are now secure."** *(Chúng tôi bật xác thực SSL. Kết quả là mọi request hiện tại đều an toàn).*
9.  **"The database index was added successfully, thereby speeding up search queries."** *(Index DB đã được thêm thành công, qua đó tăng tốc các câu query tìm kiếm).*
10. **"We isolated the payment gateway code. Consequently, failures do not affect the main portal."** *(Chúng tôi cô lập phần code cổng thanh toán. Kết quả là các lỗi phát sinh không ảnh hưởng đến trang chính).*

---

## 3. Diễn Đạt Nguyên Nhân (Do đâu?)

- **because / since / as (bởi vì):** Đi kèm với một mệnh đề đầy đủ (`Chủ ngữ + Động từ`).
- **because of / due to / owing to (do / vì):** Đi kèm với một Cụm danh từ (Noun Phrase).

### 💡 10 Ví dụ thực tế:

1.  **"We chose MongoDB because the schema is highly dynamic."** *(Chúng tôi chọn MongoDB vì schema của nó cực kỳ linh hoạt).*
2.  **"Since this API is third-party, we added a fallback retry mechanism."** *(Vì API này là của bên thứ ba, chúng tôi đã thêm cơ chế retry dự phòng).*
3.  **"The build failed due to a missing environment variable."** *(Bản build bị lỗi do thiếu biến môi trường).*
4.  **"Owing to the database bottleneck, we decided to introduce Redis."** *(Do nghẽn cổ chai database, chúng tôi quyết định áp dụng Redis).*
5.  **"As our traffic is growing quickly, we must upgrade our cloud plan."** *(Vì traffic tăng nhanh, chúng ta phải nâng cấp gói cloud).*
6.  **"The pipeline crashed because of a syntax error in the configuration file."** *(Pipeline bị sập do lỗi cú pháp trong file cấu hình).*
7.  **"Since Huy was on leave, I handled the deployment scripts."** *(Vì Huy nghỉ phép, tôi đã xử lý các script deployment).*
8.  **"We paused the release because the critical test suite was failing."** *(Chúng tôi tạm dừng bản release vì bộ test quan trọng bị lỗi).*
9.  **"The page was slow due to unoptimized image assets."** *(Trang bị chậm do các asset hình ảnh chưa được tối ưu).*
10. **"Owing to the expiration of the SSL certificate, the site was marked insecure."** *(Do chứng chỉ SSL hết hạn, trang web bị đánh dấu không an toàn).*

---

## 4. Mẫu Viết Mô Tả PR Tiêu Chuẩn

Hãy sử dụng mẫu cấu trúc này cho đợt mở PR tiếp theo của bạn trên GitHub/GitLab:

### Mẫu A (Sửa sự cố khẩn cấp)
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

### Mẫu B (Nâng cấp hiệu năng)
> **Proposed Changes:**
> We sharded the transaction table **so that** read speeds remain consistent.
> *(Chúng tôi phân mảnh bảng giao dịch để tốc độ đọc duy trì ổn định).*
> 
> **Technical Reason:**
> Latency was increasing **due to** the large volume of historical rows.
> *(Độ trễ tăng cao do khối lượng lớn các dòng dữ liệu lịch sử).*
> 
> **Result:**
> The queries now target smaller shards. **Consequently**, database load is reduced, **thereby** stabilizing the system.
> *(Các query giờ đây nhắm vào các mảnh nhỏ hơn. Kết quả là tải database được giảm thiểu, qua đó giúp hệ thống ổn định).*
