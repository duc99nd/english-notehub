# Câu Điều Kiện Giả Định khi họp Retro (Daily English)

Trong các buổi họp Sprint Retrospective, họp mổ xẻ sự cố (post-mortem), hoặc lên kế hoạch thiết kế hệ thống, bạn sẽ phải thảo luận về các tình huống giả định: hoặc là dự đoán điều gì *sẽ* xảy ra nếu ta chọn một thiết kế mới, hoặc là phân tích điều gì *lẽ ra đã* xảy ra để ngăn chặn một vụ sập server trong quá khứ.

---

## 1. Giả thuyết ở hiện tại (Câu điều kiện Loại 2)

Dùng khi bạn thảo luận về các tình huống giả định, không có thật hoặc trái ngược với thực tế ở hiện tại.

- **Công thức:** `If + S + V-quá-khứ (Past Simple), S + would/could + V-nguyên-mẫu`
- **💡 Lưu ý:** Với động từ `be`, hãy dùng `were` cho tất cả các ngôi chủ ngữ trong văn phong trang trọng (*If I were, if it were*), dù *was* vẫn thường gặp khi nói chuyện thân mật.

### 💡 Ví dụ thực tế:
- **"If we used a message queue, our servers wouldn't crash during traffic spikes."**
  *(Nếu ta dùng message queue thì server đã không bị sập khi traffic tăng đột biến - Thực tế hiện tại: team không dùng MQ, nên server vẫn sập).*
- **"If it were easy to rewrite, we would do it this sprint."**
  *(Nếu nó dễ viết lại thì chúng tôi đã làm ngay trong sprint này rồi - Thực tế: việc viết lại rất khó nên team chưa làm).*
- **"What would happen if we changed the DB password without restarting the app?"**
  *(Điều gì sẽ xảy ra nếu chúng ta đổi pass DB mà không restart app? - Đây là câu hỏi giả thuyết để thảo luận).*

---

## 2. Rút kinh nghiệm quá khứ / Họp Post-Mortem (Câu điều kiện Loại 3)

Dùng khi họp mổ xẻ lỗi lầm (incident review) hoặc họp cải tiến (retrospectives) để phân tích các sự cố đã qua trong quá khứ và giải thích cách lẽ ra đã có thể giúp phòng ngừa lỗi đó.

- **Công thức:** `If + S + had + V3/ed, S + would/could + have + V3/ed`

### 💡 Ví dụ thực tế:
- **"If we had written unit tests, we would have caught this bug before release."**
  *(Nếu chúng ta viết unit test thì đã phát hiện ra con bug này trước khi release rồi - Thực tế: team đã không viết test và bug đã lọt lên production).*
- **"If DevOps had set up CPU alerts, they could have resolved the leak sooner."**
  *(Nếu DevOps thiết lập cảnh báo CPU thì họ đã xử lý lỗi rò rỉ bộ nhớ sớm hơn - Thực tế: họ đã không cài cảnh báo).*
- **"We wouldn't have lost user sessions if we had stored them in Redis."**
  *(Chúng ta đã không bị mất session của user nếu lưu chúng trong Redis - Thực tế: team lưu local nên khi restart server thì mất sạch).*

---

## 3. Câu điều kiện hỗn hợp (Nguyên nhân quá khứ, Kết quả hiện tại)

Đôi khi một quyết định/sai lầm trong quá khứ trực tiếp kéo theo hậu quả ở ngay thời điểm hiện tại. Hãy dùng cấu trúc hỗn hợp này để giải thích logic.

- **Công thức:** `If + S + had + V3/ed (Quá khứ), S + would + V-nguyên-mẫu (Hiện tại)`

### 💡 Ví dụ thực tế:
- **"If we had run the migrations yesterday, the app would be online now."**
  *(Nếu chúng ta chạy file migration ngày hôm qua thì bây giờ ứng dụng đã online rồi).*
- **"If the team had cached this endpoint, the database CPU usage wouldn't be this high."**
  *(Nếu team cache endpoint này từ trước thì hiện tại CPU của database đã không cao như thế này).*

---

## 4. Các Mẫu Câu Điền Vào Chỗ Trống Để Họp Retro & Post-Mortem

Hãy bỏ túi các công thức nói cực nhanh sau đây:

### Mẫu A: Giải thích cách phòng ngừa sự cố trong quá khứ
> *"If we had **[hành động phòng ngừa chia ở V3/ed]**, we could have avoided the **[sự cố/sự chậm trễ]**."*
>
> *Ví dụ:* "If we had **tested the API on staging**, we could have avoided the **checkout flow downtime**." *(Nếu chúng ta test API trên staging thì đã tránh được thời gian sập của luồng thanh toán).*

### Mẫu B: Đề xuất phương án kiến trúc thay thế
> *"If we decided to **[phương án thiết kế chia ở động từ nguyên mẫu]**, it would **[lợi ích]** but it would also **[chi phí/nhược điểm]**."*
>
> *Ví dụ:* "If we decided to **use serverless functions**, it would **reduce hosting costs** but it would also **increase cold start latency**." *(Nếu quyết định dùng serverless, nó sẽ giảm chi phí host nhưng cũng sẽ tăng độ trễ khởi động lạnh).*
