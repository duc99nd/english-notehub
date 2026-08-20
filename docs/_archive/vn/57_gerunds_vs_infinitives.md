# Danh động từ vs Động từ nguyên mẫu (Daily English)

Việc dùng sai dạng động từ (V-ing hay to-V) sau các từ như _avoid_, _recommend_, _decide_, hoặc _plan_ là một lỗi kinh điển khiến câu nói của bạn nghe không được tự nhiên. Tài liệu này hệ thống lại các quy tắc này kèm ví dụ thiết kế riêng cho lập trình viên.

---

## 1. Khi Nào Dùng Danh Động Từ (V-ing)

### 💡 Mẹo 1: Nhóm động từ "Hành động IT" bắt buộc đi với V-ing

Hãy nhớ dùng dạng `V-ing` ngay sau các động từ: **recommend** (khuyên dùng), **suggest** (gợi ý), **avoid** (tránh), **finish** (làm xong), **keep** (tiếp tục), **prevent** (ngăn chặn), và **delay** (trì hoãn).

- **10 Ví dụ thực tế:**
  1.  **"I recommend using a composite index on these fields."** _(Tôi khuyên nên dùng chỉ mục hỗn hợp cho các field này - Không nói: recommend to use)._
  2.  **"We suggest creating a staging database first."** _(Chúng tôi gợi ý tạo database staging trước - Không nói: suggest to create)._
  3.  **"We should avoid query nesting to keep response times low."** _(Chúng ta nên tránh việc lồng các câu query để giữ độ trễ thấp - Không nói: avoid to nest)._
  4.  **"Avoid running sync tasks in the main thread."** _(Tránh chạy các tác vụ đồng bộ trong luồng chính)._
  5.  **"Please keep checking the build status while I reboot."** _(Vui lòng tiếp tục theo dõi trạng thái build trong lúc tôi reboot)._
  6.  **"The client delayed deploying the release until next week."** _(Khách hàng đã hoãn việc deploy bản release cho tới tuần sau)._
  7.  **"I just finished refactoring the authentication wrapper."** _(Tôi vừa hoàn thành việc refactor bộ wrapper xác thực)._
  8.  **"We need to prevent users from double-submitting forms."** _(Chúng ta cần ngăn người dùng gửi form hai lần)._
  9.  **"We suggest testing the webhook with a local proxy."** _(Chúng tôi gợi ý test thử webhook bằng một proxy ở máy local)._
  10. **"Please avoid hardcoding the API key in the config file."** _(Vui lòng tránh viết cứng API key trong file cấu hình)._

---

### 💡 Mẹo 2: Động từ đi sau Giới từ (by, for, without, after, before) BẮT BUỘC là V-ing

Bất kỳ động từ nào đứng ngay sau một giới từ đều phải chia ở dạng thêm đuôi `-ing`.

- **10 Ví dụ thực tế:**
  1.  **"We resolved the crash by updating the memory limit."** _(Chúng tôi đã sửa lỗi sập bằng cách tăng giới hạn bộ nhớ)._
  2.  **"This custom hook is for handling token expiration."** _(Hook tùy biến này dùng để xử lý việc token hết hạn)._
  3.  **"We cannot deploy this without running database migrations."** _(Chúng ta không thể deploy cái này nếu không chạy file migration database)._
  4.  **"Before starting the sync, make sure the config is loaded."** _(Trước khi bắt đầu đồng bộ, hãy đảm bảo cấu hình đã được load)._
  5.  **"After refactoring the router, our bundle size dropped by 10%."** _(Sau khi refactor router, kích thước bundle của chúng ta giảm 10%)._
  6.  **"This helper function is dedicated to parsing JSON logs."** _(Hàm helper này được dùng chuyên biệt cho việc parse log JSON - Từ "to" ở đây là giới từ)._
  7.  **"Huy is responsible for setting up the staging server."** _(Huy chịu trách nhiệm thiết lập server staging)._
  8.  **"We succeeded in reducing server latency by 50ms."** _(Chúng tôi đã thành công trong việc giảm độ trễ server đi 50ms)._
  9.  **"Instead of querying the DB, we should read from the cache."** _(Thay vì query DB, chúng ta nên đọc từ cache)._
  10. **"I am interested in automating these manual checks."** _(Tôi có hứng thú với việc tự động hóa các bước kiểm tra thủ công này)._

---

## 2. Khi Nào Dùng Động Từ Nguyên Mẫu (To + Verb)

### 💡 Mẹo 3: Nhóm động từ "Kế hoạch tương lai" bắt buộc đi với to-V

Hãy dùng dạng động từ nguyên mẫu có `to` sau các từ: **decide** (quyết định), **plan** (lên kế hoạch), **try** (cố gắng), **need** (cần), **want** (muốn), **refuse** (từ chối), và **manage** (xử lý được việc khó).

- **10 Ví dụ thực tế:**
  1.  **"We decided to migrate our system to Google Cloud."** _(Chúng tôi đã quyết định di chuyển hệ thống sang Google Cloud - Không nói: decided migrating)._
  2.  **"We plan to rewrite the legacy frontend next month."** _(Chúng tôi kế hoạch viết lại frontend cũ vào tháng tới)._
  3.  **"We are trying to reproduce the bug locally."** _(Chúng tôi đang cố gắng tái hiện lại lỗi ở môi trường local)._
  4.  **"We finally managed to fix the deadlock issue."** _(Cuối cùng chúng tôi cũng đã xử lý được lỗi deadlock)._
  5.  **"The client refused to pay for the out-of-scope features."** _(Khách hàng từ chối trả tiền cho các tính năng nằm ngoài phạm vi dự án)._
  6.  **"I need to review the testing documentation today."** _(Tôi cần phải xem lại tài liệu chạy test hôm nay)._
  7.  **"We want to implement OAuth authentication in Sprint 3."** _(Chúng tôi muốn triển khai xác thực OAuth trong Sprint 3)._
  8.  **"Huy offered to cover my tasks while I am out of office."** _(Huy đề nghị nhận lại các task của tôi trong khi tôi nghỉ phép)._
  9.  **"The pipeline failed to complete the build script."** _(Pipeline đã không hoàn thành được script build)._
  10. **"We hope to finalize the UI adjustments by Friday."** _(Chúng tôi hy vọng chốt được các chỉnh sửa UI trước thứ Sáu)._

---

### 💡 Mẹo 4: Sau Tính từ chỉ tính chất (It is + Adj + to-V)

Bắt buộc dùng `to-V` sau các tính từ mô tả độ dễ, độ khó, độ an toàn hay nguy hiểm.

- **10 Ví dụ thực tế:**
  1.  **"This codebase is very easy to scale."** _(Codebase này rất dễ để mở rộng)._
  2.  **"Legacy APIs are hard to test."** _(Các API cũ rất khó để chạy test)._
  3.  **"Is this configuration safe to run in production?"** _(Cấu hình này có an toàn để chạy trên production không?)_
  4.  **"The new layout is simple to build using flexbox."** _(Layout mới rất đơn giản để dựng bằng flexbox)._
  5.  **"It is critical to backup the database before migration."** _(Việc sao lưu database trước khi migrate là cực kỳ quan trọng)._
  6.  **"This code pattern is difficult to understand without comments."** _(Pattern code này rất khó hiểu nếu thiếu comment)._
  7.  **"It is impossible to retrieve deleted files without backups."** _(Không thể khôi phục file đã xóa nếu không có bản backup)._
  8.  **"The server is ready to accept incoming connections."** _(Server đã sẵn sàng nhận các kết nối đi vào)._
  9.  **"It is necessary to renew our SSL certificates today."** _(Việc gia hạn chứng chỉ SSL hôm nay là bắt buộc)._
  10. **"This library is convenient to use for mock requests."** _(Thư viện này rất tiện lợi để dùng tạo các request giả lập)._

---

## 3. Bảng Tra Cứu Nhanh V-ing vs To-V

| Từ khóa chính    | Dạng chia đúng | Ví dụ thực tế                             |
| :--------------- | :------------- | :---------------------------------------- |
| **recommend**    | V-ing          | "I recommend **using** Vite."             |
| **avoid**        | V-ing          | "Avoid **storing** secrets in raw text."  |
| **by** (giới từ) | V-ing          | "Fix it by **restarting** the container." |
| **decide**       | to-V           | "We decided **to update** Node.js."       |
| **plan**         | to-V           | "We plan **to release** this Friday."     |
| **easy / hard**  | to-V           | "This bug is hard **to debug**."          |
| **suggest**      | V-ing          | "I suggest **refactoring** this class."   |
| **manage**       | to-V           | "We managed **to pass** all tests."       |
