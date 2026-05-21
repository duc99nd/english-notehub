# Mạo Từ (A / An / The) Trong Tiếng Anh Kỹ Thuật (Daily English)

Tiếng Việt không có mạo từ, điều này khiến việc sử dụng a/an/the trở thành một trong những nguồn lỗi dai dẳng nhất của lập trình viên Việt Nam. Hướng dẫn này bao gồm các quy tắc mạo từ dành riêng cho bối cảnh IT với các ví dụ thực tế từ công việc hàng ngày.

---

## 1. Khi Nào Dùng "The" (Cụ thể / Đã biết rõ)

Dùng **"the"** khi cả bạn và người nghe đều biết chính xác đang nói đến thứ gì.

### 💡 10 Ví dụ thực tế:

1.  **"The database is down."** *(Database bị sập rồi — Cả hai đều biết đang nói DB production của chúng ta).*
2.  **"Can you review the PR I submitted this morning?"** *(Một PR cụ thể mà cả hai đều biết).*
3.  **"The client approved the design mockup."** *(Khách hàng cụ thể của chúng ta, bản mockup cụ thể đó).*
4.  **"I will fix the bug you reported in Jira."** *(Con bug cụ thể từ ticket Jira).*
5.  **"The staging environment is not responding."** *(Server staging cụ thể của chúng ta).*
6.  **"Please update the README file."** *(File README trong repo này).*
7.  **"The deployment pipeline failed at the test stage."** *(Pipeline cụ thể của chúng ta).*
8.  **"The API returns a 500 error when the payload is empty."** *(API đã được xác định cụ thể).*
9.  **"The migration script needs to be run manually."** *(Script migration cụ thể đã bàn).*
10. **"Let's discuss the architecture in tomorrow's meeting."** *(Kiến trúc của dự án chúng ta).*

---

## 2. Khi Nào Dùng "A / An" (Chung chung / Lần đầu đề cập)

Dùng **"a"** (trước phụ âm) hoặc **"an"** (trước nguyên âm) khi giới thiệu một thứ lần đầu tiên, hoặc khi nói về bất kỳ một thứ nào trong nhóm.

### 💡 10 Ví dụ thực tế:

1.  **"We need to create a new branch for this feature."** *(Một nhánh mới bất kỳ, chưa xác định cụ thể).*
2.  **"There is a bug in the checkout flow."** *(Đề cập một bug lần đầu tiên).*
3.  **"I found an error in the configuration file."** *(Lần đầu đề cập — "an" trước nguyên âm).*
4.  **"We should use a load balancer to distribute traffic."** *(Một bộ cân bằng tải nào đó, nói chung).*
5.  **"He is a senior developer at our company."** *(Mô tả vai trò/nghề nghiệp).*
6.  **"Can you write a unit test for this function?"** *(Một unit test bất kỳ cho hàm này).*
7.  **"We received an alert from the monitoring dashboard."** *(Một cảnh báo chưa xác định cụ thể).*
8.  **"This requires a migration script."** *(Một script migration bất kỳ phù hợp).*
9.  **"She submitted a pull request last night."** *(Một PR mới, chưa xác định).*
10. **"We need an API key to access the third-party service."** *(Một API key hợp lệ bất kỳ).*

---

## 3. Khi Nào KHÔNG Dùng Mạo Từ (Zero Article)

Bỏ mạo từ khi dùng **danh từ không đếm được** theo nghĩa chung, **danh từ số nhiều** theo nghĩa chung, và **danh từ riêng**.

### 💡 10 Ví dụ thực tế:

1.  **"Software is eating the world."** *(Phần mềm nói chung — không dùng "the software").*
2.  **"Data flows from the frontend to the backend."** *(Dữ liệu nói chung).*
3.  **"We write code in TypeScript."** *(Code nói chung, TypeScript là danh từ riêng).*
4.  **"Developers should write unit tests."** *(Lập trình viên nói chung).*
5.  **"Redis is used for caching."** *(Redis là danh từ riêng).*
6.  **"We deploy to AWS every Friday."** *(AWS là danh từ riêng).*
7.  **"Information should be encrypted at rest."** *(Thông tin nói chung).*
8.  **"JavaScript runs in browsers."** *(Cả hai đều nói chung).*
9.  **"Equipment for the server room has arrived."** *(Thiết bị nói chung).*
10. **"We use Docker for containerization."** *(Docker = danh từ riêng, containerization = khái niệm chung).*

---

## 4. Các Lỗi Phổ Biến Mà Dev Việt Nam Hay Mắc

### ❌ Lỗi 1: Thêm "the" trước khái niệm chung
- ❌ "**The** software development is challenging."
- 🟢 "**Software** development is challenging."

### ❌ Lỗi 2: Bỏ "the" trước vật cụ thể
- ❌ "I will check **database** now."
- 🟢 "I will check **the database** now."

### ❌ Lỗi 3: Dùng "a" với danh từ không đếm được
- ❌ "We received **a feedback** from the client."
- 🟢 "We received **feedback** from the client." (hoặc "**a piece of** feedback")

### ❌ Lỗi 4: Quên "an" trước nguyên âm
- ❌ "There is **a** error in the log file."
- 🟢 "There is **an** error in the log file."

### ❌ Lỗi 5: Thêm mạo từ trước danh từ riêng
- ❌ "We deploy our code to **the** Vercel."
- 🟢 "We deploy our code to **Vercel**."

### 💡 10 Lỗi Cần Sửa Thêm:

1.  ❌ "I need **an** information." → 🟢 "I need **some** information." *(Information không đếm được)*
2.  ❌ "We use **the** MongoDB." → 🟢 "We use **MongoDB**." *(Danh từ riêng)*
3.  ❌ "Please push **the** code to **the** GitHub." → 🟢 "Please push **the** code to **GitHub**."
4.  ❌ "He is **developer**." → 🟢 "He is **a** developer." *(Thiếu mạo từ mô tả nghề)*
5.  ❌ "**The** each endpoint needs testing." → 🟢 "**Each** endpoint needs testing."
6.  ❌ "We need to buy **equipments**." → 🟢 "We need to buy **equipment**." *(Không đếm được)*
7.  ❌ "Can you check **a log**?" (khi cụ thể) → 🟢 "Can you check **the log**?"
8.  ❌ "She gave **an advice**." → 🟢 "She gave **advice**." *(hoặc "**a piece of** advice")*
9.  ❌ "We had **the** meeting about deployment." (lần đầu đề cập) → 🟢 "We had **a** meeting about deployment."
10. ❌ "**A** server we discussed is down." → 🟢 "**The** server we discussed is down." *(Đã biết cụ thể)*

---

## 5. Sơ Đồ Quyết Định Nhanh

```
Đó có phải là danh từ riêng (Redis, AWS, Docker) không?
  → CÓ: Không cần mạo từ.
  → KHÔNG: Tiếp tục...

Đó có phải danh từ không đếm được (data, code, software, information) không?
  → CÓ: Không cần mạo từ khi dùng nghĩa chung. Dùng "the" nếu cụ thể.
  → KHÔNG: Tiếp tục...

Đây là lần đầu đề cập hoặc một thứ bất kỳ?
  → CÓ: Dùng "a" (phụ âm) hoặc "an" (nguyên âm).
  → KHÔNG: Dùng "the" (cả người nói và người nghe đều biết thứ đó).
```
