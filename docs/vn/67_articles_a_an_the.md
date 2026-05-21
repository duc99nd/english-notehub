# Mạo Từ (A / An / The) Trong Tiếng Anh Kỹ Thuật (Daily English)

Tiếng Việt không có mạo từ, điều này khiến việc sử dụng a/an/the trở thành một trong những nguồn lỗi dai dẳng nhất của lập trình viên Việt Nam. Hướng dẫn này bao gồm các quy tắc mạo từ dành riêng cho bối cảnh IT với các ví dụ thực tế từ công việc hàng ngày.

---

## 1. Khi Nào Dùng "The" (Cụ thể / Đã biết rõ)

Dùng **"the"** khi cả bạn và người nghe đều biết chính xác đang nói đến thứ gì.

### 💡 10 Ví dụ thực tế:

1.  **"The database is down."** _(Database bị sập rồi — Cả hai đều biết đang nói DB production của chúng ta)._
2.  **"Can you review the PR I submitted this morning?"** _(Một PR cụ thể mà cả hai đều biết)._
3.  **"The client approved the design mockup."** _(Khách hàng cụ thể của chúng ta, bản mockup cụ thể đó)._
4.  **"I will fix the bug you reported in Jira."** _(Con bug cụ thể từ ticket Jira)._
5.  **"The staging environment is not responding."** _(Server staging cụ thể của chúng ta)._
6.  **"Please update the README file."** _(File README trong repo này)._
7.  **"The deployment pipeline failed at the test stage."** _(Pipeline cụ thể của chúng ta)._
8.  **"The API returns a 500 error when the payload is empty."** _(API đã được xác định cụ thể)._
9.  **"The migration script needs to be run manually."** _(Script migration cụ thể đã bàn)._
10. **"Let's discuss the architecture in tomorrow's meeting."** _(Kiến trúc của dự án chúng ta)._

---

## 2. Khi Nào Dùng "A / An" (Chung chung / Lần đầu đề cập)

Dùng **"a"** (trước phụ âm) hoặc **"an"** (trước nguyên âm) khi giới thiệu một thứ lần đầu tiên, hoặc khi nói về bất kỳ một thứ nào trong nhóm.

### 💡 10 Ví dụ thực tế:

1.  **"We need to create a new branch for this feature."** _(Một nhánh mới bất kỳ, chưa xác định cụ thể)._
2.  **"There is a bug in the checkout flow."** _(Đề cập một bug lần đầu tiên)._
3.  **"I found an error in the configuration file."** _(Lần đầu đề cập — "an" trước nguyên âm)._
4.  **"We should use a load balancer to distribute traffic."** _(Một bộ cân bằng tải nào đó, nói chung)._
5.  **"He is a senior developer at our company."** _(Mô tả vai trò/nghề nghiệp)._
6.  **"Can you write a unit test for this function?"** _(Một unit test bất kỳ cho hàm này)._
7.  **"We received an alert from the monitoring dashboard."** _(Một cảnh báo chưa xác định cụ thể)._
8.  **"This requires a migration script."** _(Một script migration bất kỳ phù hợp)._
9.  **"She submitted a pull request last night."** _(Một PR mới, chưa xác định)._
10. **"We need an API key to access the third-party service."** _(Một API key hợp lệ bất kỳ)._

---

## 3. Khi Nào KHÔNG Dùng Mạo Từ (Zero Article)

Bỏ mạo từ khi dùng **danh từ không đếm được** theo nghĩa chung, **danh từ số nhiều** theo nghĩa chung, và **danh từ riêng**.

### 💡 10 Ví dụ thực tế:

1.  **"Software is eating the world."** _(Phần mềm nói chung — không dùng "the software")._
2.  **"Data flows from the frontend to the backend."** _(Dữ liệu nói chung)._
3.  **"We write code in TypeScript."** _(Code nói chung, TypeScript là danh từ riêng)._
4.  **"Developers should write unit tests."** _(Lập trình viên nói chung)._
5.  **"Redis is used for caching."** _(Redis là danh từ riêng)._
6.  **"We deploy to AWS every Friday."** _(AWS là danh từ riêng)._
7.  **"Information should be encrypted at rest."** _(Thông tin nói chung)._
8.  **"JavaScript runs in browsers."** _(Cả hai đều nói chung)._
9.  **"Equipment for the server room has arrived."** _(Thiết bị nói chung)._
10. **"We use Docker for containerization."** _(Docker = danh từ riêng, containerization = khái niệm chung)._

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

1.  ❌ "I need **an** information." → 🟢 "I need **some** information." _(Information không đếm được)_
2.  ❌ "We use **the** MongoDB." → 🟢 "We use **MongoDB**." _(Danh từ riêng)_
3.  ❌ "Please push **the** code to **the** GitHub." → 🟢 "Please push **the** code to **GitHub**."
4.  ❌ "He is **developer**." → 🟢 "He is **a** developer." _(Thiếu mạo từ mô tả nghề)_
5.  ❌ "**The** each endpoint needs testing." → 🟢 "**Each** endpoint needs testing."
6.  ❌ "We need to buy **equipments**." → 🟢 "We need to buy **equipment**." _(Không đếm được)_
7.  ❌ "Can you check **a log**?" (khi cụ thể) → 🟢 "Can you check **the log**?"
8.  ❌ "She gave **an advice**." → 🟢 "She gave **advice**." _(hoặc "**a piece of** advice")_
9.  ❌ "We had **the** meeting about deployment." (lần đầu đề cập) → 🟢 "We had **a** meeting about deployment."
10. ❌ "**A** server we discussed is down." → 🟢 "**The** server we discussed is down." _(Đã biết cụ thể)_

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
