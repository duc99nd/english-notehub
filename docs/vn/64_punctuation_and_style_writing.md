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

---

## 3. Ngữ Pháp Viết Commit Message & PR Action

### 💡 Mẹo 5: Sử dụng Thể Mệnh Lệnh (Imperative Mood) khi viết Commit Message
Commit message nên được viết ở thể mệnh lệnh (như thể bạn đang ra lệnh cho codebase thực hiện hành động đó). Hãy tự nhẩm để hoàn thành câu này: *"If applied, this commit will..."* (Nếu áp dụng, commit này sẽ...)

- ❌ *Sai:* "Fixed the login button bug." / "Fixing the login button."
- 🟢 *Đúng:* **"Fix login button bug"**
- ❌ *Sai:* "Added Redis caching."
- 🟢 *Đúng:* **"Add Redis caching"**

---

## 4. Các Quy Tắc Viết Hoa Trong Kỹ Thuật (Capitalization)

| Kiểu viết hoa | Ngữ cảnh sử dụng | Ví dụ thực tế |
| :--- | :--- | :--- |
| **Title Case** *(Viết hoa chữ đầu mỗi từ)* | Tiêu đề tài liệu, tiêu đề email | "Add Redis Cache to Production" |
| **Sentence case** *(Chỉ viết hoa chữ đầu câu)* | Mô tả PR, giải thích tính năng | "This PR resolves the user signup deadlock." |
| **UPPERCASE** *(Viết hoa toàn bộ)* | Hằng số, biến môi trường | `DATABASE_URL` |
| **lowercase** *(Viết thường toàn bộ)* | Đường dẫn file, câu lệnh terminal | `src/index.ts` |
