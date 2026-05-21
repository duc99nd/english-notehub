# Trạng Từ Mô Tả Hiệu Năng Hệ Thống (Daily English)

Khi phân tích log file, mô tả các chỉ số cơ sở dữ liệu, hoặc thuyết trình biểu đồ hiệu năng trong cuộc họp, bạn cần mô tả chính xác **tần suất** xảy ra lỗi (frequency) và **mức độ** thay đổi của chỉ số hệ thống (degree).

---

## 1. Trạng từ chỉ Tần suất (Xảy ra bao lâu một lần?)

Thay vì nói các từ chung chung như "sometimes" hay "often", hãy dùng các trạng từ kỹ thuật chính xác sau để mô tả tần suất trong log hoặc hành vi user.

- **consistently / constantly (liên tục/nhất quán):**
  - **"The database is consistently slow during midnight backups."** *(Database liên tục bị chậm trong các đợt backup lúc nửa đêm).*
- **periodically / regularly (định kỳ):**
  - **"This background worker periodically cleans up expired user tokens."** *(Tác vụ ngầm này định kỳ dọn dẹp các token hết hạn của user).*
- **occasionally / intermittently (thỉnh thoảng / chập chờn - không liên tục):**
  - **"The third-party API intermittently fails with a 502 Bad Gateway."** *(API bên thứ ba thỉnh thoảng lỗi chập chờn mã 502 - "Intermittently" là từ cực kỳ đắt giá khi debug lỗi chập chờn).*
- **randomly (ngẫu nhiên):**
  - **"The application pool randomly restarts without any error codes."** *(App pool tự động khởi động lại ngẫu nhiên mà không có mã lỗi nào).*
- **rarely (hiếm khi):**
  - **"This specific code path is rarely executed in production."** *(Đoạn code đặc thù này hiếm khi chạy trên môi trường production).*

---

## 2. Trạng từ chỉ Mức độ (Thay đổi nhiều hay ít?)

Dùng các trạng từ này để mô tả sự biến động của CPU, rò rỉ bộ nhớ (memory leaks), tốc độ tải trang, hoặc thời gian phản hồi API.

### 💡 Mẹo 1: Mô tả biến động LỚN
- **significantly / considerably / substantially (đáng kể):**
  - **"Adding Redis significantly reduced the API response time."** *(Thêm Redis giúp giảm đáng kể thời gian phản hồi của API).*
- **drastically (mạnh mẽ/triệt để):**
  - **"The hotfix drastically lowered the database CPU usage."** *(Bản hotfix giúp hạ triệt để lượng CPU sử dụng của database).*
- **exponentially (theo cấp số nhân):**
  - **"Memory usage is increasing exponentially, indicating a memory leak."** *(Lượng RAM đang tăng theo cấp số nhân, cho thấy dấu hiệu rò rỉ bộ nhớ).*

### 💡 Mẹo 2: Mô tả biến động NHỎ hoặc DẦN DẦN
- **gradually (dần dần/từ từ):**
  - **"The connection pool size is gradually climbing."** *(Số lượng connection pool đang tăng lên từ từ).*
- **marginally / slightly (một chút / không đáng kể):**
  - **"The new asset size is marginally larger than the old build."** *(Dung lượng file mới lớn hơn một chút không đáng kể so với bản build cũ).*

---

## 3. Quy Tắc Vị Trí Của Trạng Từ Trong Câu

Nhiều lập trình viên đặt trạng từ sai vị trí khiến câu nghe rất gượng gạo.

### Quy tắc A: Đặt trạng từ TRƯỚC động từ thường
- **"We significantly improved the loading speed."** *(Chúng tôi đã cải thiện đáng kể tốc độ tải trang - Không nói: We improved significantly...)*
- **"The scheduler automatically runs the job."** *(Bộ lập lịch tự động chạy job - Không nói: runs automatically the job)*

### Quy tắc B: Đặt trạng từ SAU động từ Tobe (is/are/was/were) hoặc Trợ động từ (have/has, can)
- **"The servers are consistently overloaded."** *(Các server liên tục bị quá tải - Trạng từ đứng sau "are").*
- **"We have already deployed the fix."** *(Chúng tôi đã deploy bản sửa lỗi rồi - Trạng từ đứng sau "have").*

---

## 4. Bảng Tổng Hợp Diễn Đạt Hiệu Năng

| Biến động hệ thống | Trạng từ phù hợp | Ví dụ thực tế |
| :--- | :--- | :--- |
| Giảm mạnh | **drastically** / **significantly** | "CPU usage has **significantly** dropped." |
| Tăng từ từ | **gradually** | "Memory is **gradually** leaking over time." |
| Chập chờn | **intermittently** | "The API is **intermittently** failing." |
| Định kỳ | **periodically** | "Cron jobs run **periodically**." |
