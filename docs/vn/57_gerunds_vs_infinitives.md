# Danh động từ vs Động từ nguyên mẫu (Daily English)

Việc dùng sai dạng động từ (V-ing hay to-V) sau các từ như *avoid*, *recommend*, *decide*, hoặc *plan* là một lỗi kinh điển khiến câu nói của bạn nghe không được tự nhiên. Tài liệu này hệ thống lại các quy tắc này kèm ví dụ thiết kế riêng cho lập trình viên.

---

## 1. Khi Nào Dùng Danh Động Từ (V-ing)

### 💡 Mẹo 1: Nhóm động từ "Hành động IT" bắt buộc đi với V-ing
Hãy nhớ dùng dạng `V-ing` ngay sau các động từ: **recommend** (khuyên dùng), **suggest** (gợi ý), **avoid** (tránh), **finish** (làm xong), **keep** (tiếp tục), **prevent** (ngăn chặn), và **delay** (trì hoãn).

- **recommend / suggest + V-ing:**
  - **"I recommend using a composite index on these fields."** *(Tôi khuyên nên dùng chỉ mục hỗn hợp cho các field này - Không nói: recommend to use)*
  - **"We suggest creating a staging database first."** *(Chúng tôi gợi ý tạo database staging trước).*
- **avoid + V-ing:**
  - **"We should avoid nesting queries to keep response times low."** *(Chúng ta nên tránh việc lồng các câu query để giữ độ trễ thấp - Không nói: avoid to nest)*
  - **"Avoid running synchronous tasks in the main thread."** *(Tránh chạy các tác vụ đồng bộ trong luồng chính).*
- **keep + V-ing:**
  - **"Please keep checking the build status."** *(Vui lòng tiếp tục theo dõi trạng thái build).*

### 💡 Mẹo 2: Động từ đi sau Giới từ (by, for, without, after, before) BẮT BUỘC là V-ing
Bất kỳ động từ nào đứng ngay sau một giới từ đều phải chia ở dạng thêm đuôi `-ing`.
- **by + V-ing** (giải thích *bằng cách nào* làm được việc gì):
  - **"We resolved the crash by updating the memory limit."** *(Chúng tôi đã sửa lỗi sập bằng cách tăng giới hạn bộ nhớ).*
- **for + V-ing** (giải thích *mục đích* của công cụ/tính năng):
  - **"This custom hook is for handling token expiration."** *(Hook tùy biến này dùng để xử lý việc token hết hạn).*
- **without + V-ing**:
  - **"We cannot deploy this without running database migrations."** *(Chúng ta không thể deploy cái này nếu không chạy file migration database).*

---

## 2. Khi Nào Dùng Động Từ Nguyên Mẫu (To + Verb)

### 💡 Mẹo 3: Nhóm động từ "Kế hoạch tương lai" bắt buộc đi với to-V
Hãy dùng dạng động từ nguyên mẫu có `to` sau các từ: **decide** (quyết định), **plan** (lên kế hoạch), **try** (cố gắng), **need** (cần), **want** (muốn), **refuse** (từ chối), và **manage** (xử lý được việc khó).

- **decide / plan + to-V:**
  - **"We decided to migrate our system to Google Cloud."** *(Chúng tôi đã quyết định di chuyển hệ thống sang Google Cloud - Không nói: decided migrating)*
  - **"We plan to rewrite the legacy frontend next month."** *(Chúng tôi kế hoạch viết lại frontend cũ vào tháng tới).*
- **try + to-V** (nỗ lực thử làm gì):
  - **"We are trying to reproduce the bug locally."** *(Chúng tôi đang cố gắng tái hiện lại lỗi ở môi trường local).*
- **manage + to-V** (xoay sở xử lý xong một việc khó khăn):
  - **"We finally managed to fix the deadlock issue."** *(Cuối cùng chúng tôi cũng đã xử lý được lỗi deadlock).*

### 💡 Mẹo 4: Sau Tính từ chỉ tính chất (It is + Adj + to-V)
Bắt buộc dùng `to-V` sau các tính từ mô tả độ dễ, độ khó, độ an toàn hay nguy hiểm.
- **easy / hard / difficult + to-V:**
  - **"This codebase is very easy to scale."** *(Codebase này rất dễ để mở rộng).*
  - **"Legacy APIs are hard to test."** *(Các API cũ rất khó để chạy test).*
- **safe / dangerous + to-V:**
  - **"Is this configuration safe to run in production?"** *(Cấu hình này có an toàn để chạy trên production không?)*

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
