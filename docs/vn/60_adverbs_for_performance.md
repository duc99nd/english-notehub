# Trạng Tư Mô Tả Hiệu Năng Hệ Thống (Daily English)

Khi phân tích log file, mô tả các chỉ số cơ sở dữ liệu, hoặc thuyết trình biểu đồ hiệu năng trong cuộc họp, bạn cần mô tả chính xác **tần suất** xảy ra lỗi (frequency) và **mức độ** thay đổi của chỉ số hệ thống (degree).

---

## 1. Trạng từ chỉ Tần suất (Xảy ra bao lâu một lần?)

Thay vì nói các từ chung chung như "sometimes" hay "often", hãy dùng các trạng từ kỹ thuật chính xác sau để mô tả tần suất trong log hoặc hành vi user.

### 💡 10 Ví dụ thực tế:

1.  **"The database is consistently slow during midnight backups."** _(Database liên tục bị chậm trong các đợt backup lúc nửa đêm - Không viết: slow consistently)._
2.  **"This background worker periodically cleans up expired user tokens."** _(Tác vụ ngầm này định kỳ dọn dẹp các token hết hạn của user)._
3.  **"The third-party API intermittently fails with a 502 Bad Gateway."** _(API bên thứ ba thỉnh thoảng lỗi chập chờn mã 502 - "Intermittently" là từ cực kỳ đắt giá khi debug lỗi chập chờn)._
4.  **"The application pool randomly restarts without any error codes."** _(App pool tự động khởi động lại ngẫu nhiên mà không có mã lỗi nào)._
5.  **"This specific code path is rarely executed in production."** _(Đoạn code đặc thù này hiếm khi chạy trên môi trường production)._
6.  **"Our automated build scripts regularly check for outdated packages."** _(Các script build tự động của chúng tôi thường xuyên kiểm tra các package đã lỗi thời)._
7.  **"The staging environment is constantly going offline because of configuration updates."** _(Môi trường staging liên tục bị offline do cập nhật cấu hình)._
8.  **"Errors are occasionally logged when the webhook receives invalid JSON payloads."** _(Các lỗi thỉnh thoảng được ghi nhận khi webhook nhận payload JSON không hợp lệ)._
9.  **"We should frequently monitor our database connection pool size."** _(Chúng ta nên theo dõi thường xuyên kích thước connection pool của database)._
10. **"The CPU temperature occasionally spikes during heavy video transcoding jobs."** _(Nhiệt độ CPU thỉnh thoảng tăng vọt trong các tác vụ chuyển đổi định dạng video nặng)._

---

## 2. Trạng từ chỉ Mức độ (Thay đổi nhiều hay ít?)

Dùng các trạng từ này để mô tả sự biến động của CPU, rò rỉ bộ nhớ (memory leaks), tốc độ tải trang, hoặc thời gian phản hồi API.

### 💡 Mẹo 1: Mô tả biến động LỚN

- **significantly / considerably / substantially (đáng kể):**
  - **"Adding Redis significantly reduced the API response time."** _(Thêm Redis giúp giảm đáng kể thời gian phản hồi của API)._
- **drastically (mạnh mẽ/triệt để):**
  - **"The hotfix drastically lowered the database CPU usage."** _(Bản hotfix giúp hạ triệt để lượng CPU sử dụng của database)._
- **exponentially (theo cấp số nhân):**
  - **"Memory usage is increasing exponentially, indicating a memory leak."** _(Lượng RAM đang tăng theo cấp số nhân, cho thấy dấu hiệu rò rỉ bộ nhớ)._

### 💡 Mẹo 2: Mô tả biến động NHỎ hoặc DẦN DẦN

- **gradually (dần dần/từ từ):**
  - **"The connection pool size is gradually climbing."** _(Số lượng connection pool đang tăng lên từ từ)._
- **marginally / slightly (một chút / không đáng kể):**
  - **"The new asset size is marginally larger than the old build."** _(Dung lượng file mới lớn hơn một chút không đáng kể so với bản build cũ)._

### 💡 10 Ví dụ thực tế:

1.  **"The refactored code has significantly improved the bundle loading speed."** _(Đoạn code được refactor đã cải thiện đáng kể tốc độ load bundle)._
2.  **"Webpack compilation times dropped drastically after configuring the build cache."** _(Thời gian biên dịch của Webpack giảm mạnh sau khi cấu hình cache build)._
3.  **"Concurrent user traffic is increasing exponentially this month."** _(Lượng traffic người dùng đồng thời đang tăng theo cấp số nhân trong tháng này)._
4.  **"The cache size is gradually growing as users visit the site."** _(Kích thước bộ nhớ cache đang tăng dần khi người dùng truy cập trang)._
5.  **"Response latency is marginally higher than it was yesterday."** _(Độ trễ phản hồi cao hơn một chút không đáng kể so với hôm qua)._
6.  **"Adding indexes considerably reduced table scanning operations."** _(Thêm index đã giảm đáng kể các thao tác scan bảng)._
7.  **"We have slightly modified the CSS values to prevent layout shifting."** _(Chúng tôi đã sửa một chút các giá trị CSS để ngăn việc nhảy layout)._
8.  **"Server load has substantially decreased since we activated Cloudflare caching."** _(Tải của server đã giảm đáng kể kể từ khi chúng tôi kích hoạt cache Cloudflare)._
9.  **"Memory leaks will gradually consume all available server resources."** _(Rò rỉ bộ nhớ sẽ dần dần ngốn sạch tài nguyên server hiện có)._
10. **"Our testing suite execution time is marginally shorter after upgrading Node."** _(Thời gian chạy bộ test ngắn hơn một chút không đáng kể sau khi nâng cấp Node)._

---

## 3. Quy Tắc Vị Trí Của Trạng Từ Trong Câu

Nhiều lập trình viên đặt trạng từ sai vị trí khiến câu nghe rất gượng gạo.

### Quy tắc A: Đặt trạng từ TRƯỚC động từ thường

- **"We significantly improved the loading speed."** _(Chúng tôi đã cải thiện đáng kể tốc độ tải trang - Không nói: We improved significantly...)_
- **"The scheduler automatically runs the job."** _(Bộ lập lịch tự động chạy job - Không nói: runs automatically the job)_

### Quy tắc B: Đặt trạng từ SAU động từ Tobe (is/are/was/were) hoặc Trợ động từ (have/has, can)

- **"The servers are consistently overloaded."** _(Các server liên tục bị quá tải - Trạng từ đứng sau "are")._
- **"We have already deployed the fix."** _(Chúng tôi đã deploy bản sửa lỗi rồi - Trạng từ đứng sau "have")._

### 💡 10 Ví dụ về Vị trí Trạng từ:

1.  **"The system automatically exports reports every Sunday."** _(Hệ thống tự động xuất báo cáo mỗi Chủ Nhật - Đặt trước động từ thường exports)._
2.  **"The server has successfully recovered from the crash."** _(Server đã phục hồi thành công sau sự cố sập - Đặt sau trợ động từ has)._
3.  **"We heavily rely on third-party APIs for map rendering."** _(Chúng tôi phụ thuộc rất nhiều vào các API bên thứ ba để vẽ bản đồ)._
4.  **"The configuration files were manually updated by Huy."** _(Các file cấu hình đã được Huy cập nhật thủ công)._
5.  **"You can easily scale the application with Kubernetes."** _(Bạn có thể dễ dàng scale ứng dụng bằng Kubernetes)._
6.  **"The background job is currently running on the server."** _(Job chạy ngầm hiện tại đang chạy trên server)._
7.  **"We immediately paused the database migration scripts."** _(Chúng tôi đã tạm dừng các script migration DB ngay lập tức)._
8.  **"The backup script has consistently failed since Monday."** _(Script backup đã liên tục lỗi kể từ thứ Hai)._
9.  **"I normally test the endpoints on local before committing."** _(Tôi thường chạy test các endpoint ở local trước khi commit)._
10. **"The credentials should always be stored in environment variables."** _(Thông tin tài khoản nên luôn được lưu trong các biến môi trường)._

---

## 4. Bảng Tổng Hợp Diễn Đạt Hiệu Năng

| Biến động hệ thống | Trạng từ phù hợp                    | Ví dụ thực tế                                       |
| :----------------- | :---------------------------------- | :-------------------------------------------------- |
| Giảm mạnh          | **drastically** / **significantly** | "CPU usage has **significantly** dropped."          |
| Tăng từ từ         | **gradually**                       | "Memory is **gradually** leaking over time."        |
| Chập chờn          | **intermittently**                  | "The API is **intermittently** failing."            |
| Định kỳ            | **periodically**                    | "Cron jobs run **periodically**."                   |
| Tự động            | **automatically**                   | "The server restarts **automatically** on failure." |
