# Quy Tắc Dấu Câu & Hành Văn Kỹ Thuật (Daily English)

Việc viết tài liệu kỹ thuật (email, mô tả PR, tin nhắn commit và tài liệu API) yêu cầu sự chính xác cao độ. Việc dùng sai dấu phẩy, dấu hai chấm hoặc viết hoa bừa bãi có thể khiến hướng dẫn của bạn trở nên tối nghĩa. Tài liệu này chi tiết hóa các quy tắc hành văn và dấu câu chuẩn chỉnh cho lập trình viên.

---

## 1. Dấu Chấm Phẩy (;) vs. Dấu Hai Chấm (:)

Sử dụng đúng dấu chấm phẩy và dấu hai chấm giúp tài liệu dễ đọc, mạch lạc hơn nhiều.

### 💡 Mẹo 1: Quy tắc dùng Dấu hai chấm (:)
- Dùng dấu hai chấm để **liệt kê danh sách** hoặc **mở đầu một lời giải thích trực tiếp**.
  - **"The system requires three environment variables: DB_HOST, DB_USER, and DB_PASS."** *(Hệ thống yêu cầu 3 biến môi trường: DB_HOST, DB_USER và DB_PASS).*
  - **"We chose MongoDB for one key reason: high schema flexibility."** *(Chúng tôi chọn MongoDB vì một lý do cốt lõi: độ linh hoạt của schema).*
- **Lưu ý quan trọng:** Không đặt dấu hai chấm ngay sau động từ (ví dụ: *❌ "The variables are: host, user..."* ➔ *🟢 "The variables are host, user..."*).

### 💡 Mẹo 2: Quy tắc dùng Dấu chấm phẩy (;)
- Dùng dấu chấm phẩy để **nối hai vế câu độc lập** có liên kết logic chặt chẽ với nhau mà không cần dùng liên từ như *and* hoặc *but*.
  - **"The staging build succeeded; the production build failed."** *(Bản build staging thành công; bản build production thất bại).*
- Dùng dấu chấm phẩy để phân tách các mục trong một danh sách liệt kê nếu bản thân các mục đó đã chứa dấu phẩy bên trong.
  - **"Our servers are in Hanoi, Vietnam; Tokyo, Japan; and Oregon, USA."**

### 💡 10 Ví dụ thực tế:

1.  **"We need to install three packages: express, cors, and dotenv."** *(Chúng ta cần cài đặt 3 package: express, cors và dotenv).*
2.  **"The migration was successful; all tables were updated correctly."** *(Đợt migration đã thành công; toàn bộ các bảng dữ liệu được cập nhật chính xác).*
3.  **"Please configure the following parameters: database port, pool size, and connection timeout."** *(Vui lòng cấu hình các tham số sau: port DB, pool size và timeout kết nối).*
4.  **"The staging build succeeded; the production pipeline failed."** *(Bản build staging thành công; pipeline production bị lỗi).*
5.  **"Our offices are in Hanoi, Vietnam; Tokyo, Japan; and Singapore."** *(Các văn phòng của chúng ta nằm ở Hà Nội, Việt Nam; Tokyo, Nhật Bản; và Singapore).*
6.  **"The load balancer routes traffic efficiently; consequently, server load is low."** *(Bộ cân bằng tải định tuyến traffic hiệu quả; do đó tải của server luôn thấp).*
7.  **"There is only one solution: refactoring the entire legacy controller."** *(Chỉ có một giải pháp duy nhất: refactor lại toàn bộ controller cũ).*
8.  **"The frontend utilizes React; the backend utilizes NestJS."** *(Frontend sử dụng React; backend sử dụng NestJS).*
9.  **"The API accepts three content types: application/json, text/plain, and multipart/form-data."** *(API chấp nhận 3 loại nội dung: application/json, text/plain và multipart/form-data).*
10. **"The first query selects active users; the second updates their status."** *(Câu query thứ nhất lấy ra các user đang hoạt động; câu query thứ hai cập nhật trạng thái của họ).*

---

## 2. Quy Tắc Dấu Phẩy (Commas)

### 💡 Mẹo 3: Dấu phẩy sau Trạng từ dẫn dắt (Introductory Comma)
Luôn đặt dấu phẩy sau các từ dẫn dắt hoặc trạng từ chuyển tiếp đứng ở đầu câu.
- **"Currently, the login page redirects incorrectly."** *(Hiện tại, trang đăng nhập đang redirect bị sai - Không viết: Currently the login...)*
- **"However, we decided to postpone the release."** *(Tuy nhiên, chúng tôi đã quyết định hoãn đợt release).*

### 💡 Mẹo 4: Dấu phẩy Oxford (Oxford Comma trong Liệt kê)
Luôn đặt dấu phẩy trước chữ `and` hoặc `or` cuối cùng trong một danh sách có từ 3 mục trở lên để tránh gây mơ hồ về nghĩa.
- ❌ *Mơ hồ:* "The API supports JSON, XML and CSV formatting."
- 🟢 *Rõ ràng:* **"The API supports JSON, XML, and CSV formatting."**

### 💡 10 Ví dụ thực tế:

1.  **"Consequently, the database CPU usage dropped significantly."** *(Kết quả là lượng CPU sử dụng của database đã giảm đáng kể).*
2.  **"The setup requires a client ID, a client secret, and a callback URL."** *(Setup yêu cầu một client ID, một client secret và một callback URL - Sử dụng dấu phẩy Oxford).*
3.  **"First, clone the repository to your local machine."** *(Trước tiên, hãy clone repo về máy local của bạn).*
4.  **"Next, run the npm install command to download dependencies."** *(Tiếp theo, hãy chạy lệnh npm install để tải các dependency).*
5.  **"We support Google, GitHub, and Apple login options."** *(Chúng tôi hỗ trợ các tùy chọn đăng nhập bằng Google, GitHub và Apple).*
6.  **"For example, the auth middleware rejects invalid tokens."** *(Ví dụ, middleware xác thực sẽ từ chối các token không hợp lệ).*
7.  **"In addition, we need to update the configuration file."** *(Ngoài ra, chúng ta cần cập nhật file cấu hình).*
8.  **"The build script compiles the assets, runs the tests, and packages the app."** *(Script build sẽ biên dịch các asset, chạy test và đóng gói app).*
9.  **"Currently, we are investigating the database deadlock."** *(Hiện tại, chúng tôi đang điều tra lỗi deadlock database).*
10. **"Alternatively, you can run the application using Docker Compose."** *(Hoặc là bạn có thể chạy ứng dụng bằng Docker Compose).*

---

## 3. Ngữ Pháp Viết Commit Message & PR Action

### 💡 Mẹo 5: Sử dụng Thể Mệnh Lệnh (Imperative Mood) khi viết Commit Message
Commit message nên được viết ở thể mệnh lệnh (như thể bạn đang ra lệnh cho codebase thực hiện hành động đó). Hãy tự nhẩm để hoàn thành câu này: *"If applied, this commit will..."* (Nếu áp dụng, commit này sẽ...)

- ❌ *Sai:* "Fixed the login button bug." / "Fixing the login button."
- 🟢 *Đúng:* **"Fix login button bug"**
- ❌ *Sai:* "Added Redis caching."
- 🟢 *Đúng:* **"Add Redis caching"**

### 💡 10 Ví dụ Commit Message chuẩn:

1.  **"Refactor authentication middleware for performance"** *(Refactor middleware xác thực để tối ưu hiệu năng).*
2.  **"Add absolute imports to frontend config"** *(Thêm absolute import vào cấu hình frontend).*
3.  **"Fix query nesting in user statistics route"** *(Sửa lỗi query lồng nhau ở route thống kê user).*
4.  **"Update README with staging environment details"** *(Cập nhật file README kèm thông tin chi tiết môi trường staging).*
5.  **"Configure Docker build cache to speed up CI"** *(Cấu hình cache build Docker để tăng tốc CI).*
6.  **"Optimize image assets for homepage loading"** *(Tối ưu hóa các hình ảnh để trang chủ load nhanh hơn).*
7.  **"Remove unused packages from package.json"** *(Xóa các package không sử dụng khỏi file package.json).*
8.  **"Implement rate limiting on registration endpoint"** *(Triển khai giới hạn rate limit ở endpoint đăng ký).*
9.  **"Resolve database deadlock in cron scheduler"** *(Xử lý lỗi deadlock database trong bộ lập lịch cron).*
10. **"Migrate database connection to pg pool"** *(Di chuyển kết nối database sang cơ chế pg pool).*

---

## 4. Các Quy Tắc Viết Hoa Trong Kỹ Thuật (Capitalization)

| Kiểu viết hoa | Ngữ cảnh sử dụng | Ví dụ thực tế |
| :--- | :--- | :--- |
| **Title Case** *(Viết hoa chữ đầu mỗi từ)* | Tiêu đề tài liệu, tiêu đề email | "Add Redis Cache to Production" |
| **Sentence case** *(Chỉ viết hoa chữ đầu câu)* | Mô tả PR, giải thích tính năng | "This PR resolves the user signup deadlock." |
| **UPPERCASE** *(Viết hoa toàn bộ)* | Hằng số, biến môi trường | `DATABASE_URL` |
| **lowercase** *(Viết thường toàn bộ)* | Đường dẫn file, câu lệnh terminal | `src/index.ts` |
