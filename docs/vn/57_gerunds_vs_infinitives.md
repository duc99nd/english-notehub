# Danh động từ vs Động từ nguyên mẫu (Daily English)

Việc dùng sai dạng động từ (V-ing hay to-V) sau các từ như *avoid*, *recommend*, *decide*, hoặc *plan* là một lỗi kinh điển khiến câu nói của bạn nghe không được tự nhiên. Tài liệu này hệ thống lại các quy tắc này kèm ví dụ thiết kế riêng cho lập trình viên.

---

## 1. Khi Nào Dùng Danh Động Từ (V-ing)

### 💡 Mẹo 1: Nhóm động từ "Hành động IT" bắt buộc đi với V-ing
Hãy nhớ dùng dạng `V-ing` ngay sau các động từ: **recommend** (khuyên dùng), **suggest** (gợi ý), **avoid** (tránh), **finish** (làm xong), **keep** (tiếp tục), **prevent** (ngăn chặn), và **delay** (trì hoãn).

*   **10 Ví dụ thực tế:**
    1.  **"I recommend using a composite index on these fields."** *(Tôi khuyên nên dùng chỉ mục hỗn hợp cho các field này - Không nói: recommend to use).*
    2.  **"We suggest creating a staging database first."** *(Chúng tôi gợi ý tạo database staging trước - Không nói: suggest to create).*
    3.  **"We should avoid query nesting to keep response times low."** *(Chúng ta nên tránh việc lồng các câu query để giữ độ trễ thấp - Không nói: avoid to nest).*
    4.  **"Avoid running sync tasks in the main thread."** *(Tránh chạy các tác vụ đồng bộ trong luồng chính).*
    5.  **"Please keep checking the build status while I reboot."** *(Vui lòng tiếp tục theo dõi trạng thái build trong lúc tôi reboot).*
    6.  **"The client delayed deploying the release until next week."** *(Khách hàng đã hoãn việc deploy bản release cho tới tuần sau).*
    7.  **"I just finished refactoring the authentication wrapper."** *(Tôi vừa hoàn thành việc refactor bộ wrapper xác thực).*
    8.  **"We need to prevent users from double-submitting forms."** *(Chúng ta cần ngăn người dùng gửi form hai lần).*
    9.  **"We suggest testing the webhook with a local proxy."** *(Chúng tôi gợi ý test thử webhook bằng một proxy ở máy local).*
    10. **"Please avoid hardcoding the API key in the config file."** *(Vui lòng tránh viết cứng API key trong file cấu hình).*

---

### 💡 Mẹo 2: Động từ đi sau Giới từ (by, for, without, after, before) BẮT BUỘC là V-ing
Bất kỳ động từ nào đứng ngay sau một giới từ đều phải chia ở dạng thêm đuôi `-ing`.

*   **10 Ví dụ thực tế:**
    1.  **"We resolved the crash by updating the memory limit."** *(Chúng tôi đã sửa lỗi sập bằng cách tăng giới hạn bộ nhớ).*
    2.  **"This custom hook is for handling token expiration."** *(Hook tùy biến này dùng để xử lý việc token hết hạn).*
    3.  **"We cannot deploy this without running database migrations."** *(Chúng ta không thể deploy cái này nếu không chạy file migration database).*
    4.  **"Before starting the sync, make sure the config is loaded."** *(Trước khi bắt đầu đồng bộ, hãy đảm bảo cấu hình đã được load).*
    5.  **"After refactoring the router, our bundle size dropped by 10%."** *(Sau khi refactor router, kích thước bundle của chúng ta giảm 10%).*
    6.  **"This helper function is dedicated to parsing JSON logs."** *(Hàm helper này được dùng chuyên biệt cho việc parse log JSON - Từ "to" ở đây là giới từ).*
    7.  **"Huy is responsible for setting up the staging server."** *(Huy chịu trách nhiệm thiết lập server staging).*
    8.  **"We succeeded in reducing server latency by 50ms."** *(Chúng tôi đã thành công trong việc giảm độ trễ server đi 50ms).*
    9.  **"Instead of querying the DB, we should read from the cache."** *(Thay vì query DB, chúng ta nên đọc từ cache).*
    10. **"I am interested in automating these manual checks."** *(Tôi có hứng thú với việc tự động hóa các bước kiểm tra thủ công này).*

---

## 2. Khi Nào Dùng Động Từ Nguyên Mẫu (To + Verb)

### 💡 Mẹo 3: Nhóm động từ "Kế hoạch tương lai" bắt buộc đi với to-V
Hãy dùng dạng động từ nguyên mẫu có `to` sau các từ: **decide** (quyết định), **plan** (lên kế hoạch), **try** (cố gắng), **need** (cần), **want** (muốn), **refuse** (từ chối), và **manage** (xử lý được việc khó).

*   **10 Ví dụ thực tế:**
    1.  **"We decided to migrate our system to Google Cloud."** *(Chúng tôi đã quyết định di chuyển hệ thống sang Google Cloud - Không nói: decided migrating).*
    2.  **"We plan to rewrite the legacy frontend next month."** *(Chúng tôi kế hoạch viết lại frontend cũ vào tháng tới).*
    3.  **"We are trying to reproduce the bug locally."** *(Chúng tôi đang cố gắng tái hiện lại lỗi ở môi trường local).*
    4.  **"We finally managed to fix the deadlock issue."** *(Cuối cùng chúng tôi cũng đã xử lý được lỗi deadlock).*
    5.  **"The client refused to pay for the out-of-scope features."** *(Khách hàng từ chối trả tiền cho các tính năng nằm ngoài phạm vi dự án).*
    6.  **"I need to review the testing documentation today."** *(Tôi cần phải xem lại tài liệu chạy test hôm nay).*
    7.  **"We want to implement OAuth authentication in Sprint 3."** *(Chúng tôi muốn triển khai xác thực OAuth trong Sprint 3).*
    8.  **"Huy offered to cover my tasks while I am out of office."** *(Huy đề nghị nhận lại các task của tôi trong khi tôi nghỉ phép).*
    9.  **"The pipeline failed to complete the build script."** *(Pipeline đã không hoàn thành được script build).*
    10. **"We hope to finalize the UI adjustments by Friday."** *(Chúng tôi hy vọng chốt được các chỉnh sửa UI trước thứ Sáu).*

---

### 💡 Mẹo 4: Sau Tính từ chỉ tính chất (It is + Adj + to-V)
Bắt buộc dùng `to-V` sau các tính từ mô tả độ dễ, độ khó, độ an toàn hay nguy hiểm.

*   **10 Ví dụ thực tế:**
    1.  **"This codebase is very easy to scale."** *(Codebase này rất dễ để mở rộng).*
    2.  **"Legacy APIs are hard to test."** *(Các API cũ rất khó để chạy test).*
    3.  **"Is this configuration safe to run in production?"** *(Cấu hình này có an toàn để chạy trên production không?)*
    4.  **"The new layout is simple to build using flexbox."** *(Layout mới rất đơn giản để dựng bằng flexbox).*
    5.  **"It is critical to backup the database before migration."** *(Việc sao lưu database trước khi migrate là cực kỳ quan trọng).*
    6.  **"This code pattern is difficult to understand without comments."** *(Pattern code này rất khó hiểu nếu thiếu comment).*
    7.  **"It is impossible to retrieve deleted files without backups."** *(Không thể khôi phục file đã xóa nếu không có bản backup).*
    8.  **"The server is ready to accept incoming connections."** *(Server đã sẵn sàng nhận các kết nối đi vào).*
    9.  **"It is necessary to renew our SSL certificates today."** *(Việc gia hạn chứng chỉ SSL hôm nay là bắt buộc).*
    10. **"This library is convenient to use for mock requests."** *(Thư viện này rất tiện lợi để dùng tạo các request giả lập).*

---

## 3. Bảng Tra Cứu Nhanh V-ing vs To-V

| Từ khóa chính | Dạng chia đúng | Ví dụ thực tế |
| :--- | :--- | :--- |
| **recommend** | V-ing | "I recommend **using** Vite." |
| **avoid** | V-ing | "Avoid **storing** secrets in raw text." |
| **by** (giới từ) | V-ing | "Fix it by **restarting** the container." |
| **decide** | to-V | "We decided **to update** Node.js." |
| **plan** | to-V | "We plan **to release** this Friday." |
| **easy / hard** | to-V | "This bug is hard **to debug**." |
| **suggest** | V-ing | "I suggest **refactoring** this class." |
| **manage** | to-V | "We managed **to pass** all tests." |
