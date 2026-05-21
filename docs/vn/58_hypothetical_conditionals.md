# Câu Điều Kiện Giả Định khi họp Retro (Daily English)

Trong các buổi họp Sprint Retrospective, họp mổ xẻ sự cố (post-mortem), hoặc lên kế hoạch thiết kế hệ thống, bạn sẽ phải thảo luận về các tình huống giả định: hoặc là dự đoán điều gì *sẽ* xảy ra nếu ta chọn một thiết kế mới, hoặc là phân tích điều gì *lẽ ra đã* xảy ra để ngăn chặn một vụ sập server trong quá khứ.

---

## 1. Giả thuyết ở hiện tại (Câu điều kiện Loại 2)

Dùng khi bạn thảo luận về các tình huống giả định, không có thật hoặc trái ngược với thực tế ở hiện tại.

- **Công thức:** `If + S + V-quá-khứ (Past Simple), S + would/could + V-nguyên-mẫu`
- **💡 Lưu ý:** Với động từ `be`, hãy dùng `were` cho tất cả các ngôi chủ ngữ trong văn phong trang trọng (*If I were, if it were*), dù *was* vẫn thường gặp khi nói chuyện thân mật.

### 💡 10 Ví dụ thực tế:

1.  **"If we used a message queue, our servers wouldn't crash during traffic spikes."** *(Nếu ta dùng message queue thì server đã không bị sập khi traffic tăng đột biến - Thực tế hiện tại: team không dùng MQ, nên server vẫn sập).*
2.  **"If it were easy to rewrite, we would do it this sprint."** *(Nếu nó dễ viết lại thì chúng tôi đã làm ngay trong sprint này rồi - Thực tế: việc viết lại rất khó nên team chưa làm).*
3.  **"What would happen if we changed the DB password without restarting the app?"** *(Điều gì sẽ xảy ra nếu chúng ta đổi pass DB mà không restart app? - Đây là câu hỏi giả thuyết để thảo luận).*
4.  **"If Huy were here today, he would know how to configure the DNS settings."** *(Nếu Huy có ở đây hôm nay, cậu ấy sẽ biết cách cấu hình DNS - Thực tế: Huy đang nghỉ).*
5.  **"If we had a dedicated QA team, we could catch these UI bugs much faster."** *(Nếu chúng ta có team QA chuyên biệt, chúng ta có thể phát hiện các bug giao diện nhanh hơn).*
6.  **"If the API documentation were up to date, onboarding would be way simpler."** *(Nếu tài liệu API được cập nhật, việc onboarding sẽ đơn giản hơn nhiều).*
7.  **"We would use Docker for local dev if all developers had high-spec laptops."** *(Chúng tôi sẽ dùng Docker để chạy dev local nếu mọi dev đều có laptop cấu hình mạnh).*
8.  **"If the client agreed to our proposal, we would start building the payment flow."** *(Nếu khách hàng đồng ý với đề xuất của chúng ta, chúng ta sẽ bắt đầu code luồng thanh toán).*
9.  **"If the server database were smaller, indexing would only take a few minutes."** *(Nếu cơ sở dữ liệu trên server nhỏ hơn, việc đánh index sẽ chỉ mất vài phút).*
10. **"Where would we store the user logs if we disabled AWS CloudWatch?"** *(Chúng ta sẽ lưu log của user ở đâu nếu tắt AWS CloudWatch?)*

---

## 2. Rút kinh nghiệm quá khứ / Họp Post-Mortem (Câu điều kiện Loại 3)

Dùng khi họp mổ xẻ lỗi lầm (incident review) hoặc họp cải tiến (retrospectives) để phân tích các sự cố đã qua trong quá khứ và giải thích cách lẽ ra đã có thể giúp phòng ngừa lỗi đó.

- **Công thức:** `If + S + had + V3/ed, S + would/could + have + V3/ed`

### 💡 10 Ví dụ thực tế:

1.  **"If we had written unit tests, we would have caught this bug before release."** *(Nếu chúng ta viết unit test thì đã phát hiện ra con bug này trước khi release rồi - Thực tế: team đã không viết test và bug đã lọt lên production).*
2.  **"If DevOps had set up CPU alerts, they could have resolved the leak sooner."** *(Nếu DevOps thiết lập cảnh báo CPU thì họ đã xử lý lỗi rò rỉ bộ nhớ sớm hơn - Thực tế: họ đã không cài cảnh báo).*
3.  **"We wouldn't have lost user sessions if we had stored them in Redis."** *(Chúng ta đã không bị mất session của user nếu lưu chúng trong Redis - Thực tế: team lưu local nên khi restart server thì mất sạch).*
4.  **"If the client had provided the SSL certs early, we could have launched on Monday."** *(Nếu khách hàng cung cấp chứng chỉ SSL sớm hơn, chúng ta đã có thể launch vào thứ Hai).*
5.  **"I would have finished the refactoring if I hadn't been blocked by the database errors."** *(Tôi đã hoàn thành việc refactor nếu tôi không bị block bởi các lỗi DB).*
6.  **"If we had run a load test, we would have noticed the server memory bottleneck."** *(Nếu chúng ta chạy test tải từ trước, chúng ta đã nhận ra điểm nghẽn bộ nhớ của server).*
7.  **"The migration wouldn't have failed if we had backed up the legacy tables first."** *(Đợt migration đã không thất bại nếu chúng ta backup các bảng dữ liệu cũ trước).*
8.  **"If you had merged the PR on Friday, QA could have tested it over the weekend."** *(Nếu bạn merge PR vào thứ Sáu, QA đã có thể test nó trong hai ngày cuối tuần).*
9.  **"We could have avoided the downtime if we had set up a secondary replica."** *(Chúng ta đã có thể tránh được downtime nếu thiết lập một replica phụ).*
10. **"If the third-party API hadn't gone down, our sync script would have completed successfully."** *(Nếu API bên thứ ba không bị sập, script đồng bộ của chúng ta đã hoàn thành thành công).*

---

## 3. Câu điều kiện hỗn hợp (Nguyên nhân quá khứ, Kết quả hiện tại)

Đôi khi một quyết định/sai lầm trong quá khứ trực tiếp kéo theo hậu quả ở ngay thời điểm hiện tại. Hãy dùng cấu trúc hỗn hợp này để giải thích logic.

- **Công thức:** `If + S + had + V3/ed (Quá khứ), S + would + V-nguyên-mẫu (Hiện tại)`

### 💡 10 Ví dụ thực tế:

1.  **"If we had run the migrations yesterday, the app would be online now."** *(Nếu chúng ta chạy file migration ngày hôm qua thì bây giờ ứng dụng đã online rồi).*
2.  **"If the team had cached this endpoint, the database CPU usage wouldn't be this high."** *(Nếu team cache endpoint này từ trước thì hiện tại CPU của database đã không cao như thế này).*
3.  **"If we had upgraded the servers last week, we wouldn't be struggling with latency today."** *(Nếu chúng ta nâng cấp server từ tuần trước, chúng ta đã không phải vật lộn với vấn đề độ trễ ngày hôm nay).*
4.  **"If Huy had reviewed the code, we wouldn't have this bug on production right now."** *(Nếu Huy review code từ trước, chúng ta đã không có bug này trên production vào lúc này).*
5.  **"If we had automated the deployment pipeline, our release process would be much faster now."** *(Nếu chúng ta tự động hóa pipeline deployment từ trước, quy trình release của chúng ta bây giờ đã nhanh hơn nhiều).*
6.  **"The database wouldn't be locked now if we had optimized the cron queries."** *(Database bây giờ đã không bị khóa nếu chúng ta tối ưu các câu query cron từ trước).*
7.  **"If they had registered the domain name earlier, the landing page would be live today."** *(Nếu họ đăng ký tên miền sớm hơn, trang landing page đã có thể online hôm nay).*
8.  **"If we had implemented rate limiting, the API server wouldn't be down now."** *(Nếu chúng ta triển khai giới hạn rate limit từ trước, server API hiện tại đã không bị sập).*
9.  **"If the designer had sent the assets, the UI would be complete now."** *(Nếu designer gửi file asset sớm hơn, giao diện UI bây giờ đã hoàn tất).*
10. **"If we had documented the secrets, the staging setup wouldn't be this confusing now."** *(Nếu chúng ta viết tài liệu cho các secret từ trước, cấu hình staging bây giờ đã không rắc rối như thế này).*

---

## 4. Các Mẫu Câu Điền Vào Chỗ Trống Để Họp Retro & Post-Mortem

Hãy bỏ túi các công thức nói cực nhanh sau đây:

### 💡 10 Mẫu Câu Đánh Giá Cải Tiến:

1.  **"If we had tested the API on staging, we could have avoided the checkout flow downtime."** *(Nếu chúng ta test API trên staging thì đã tránh được thời gian sập của luồng thanh toán).*
2.  **"If we decided to use serverless functions, it would reduce hosting costs but it would also increase cold start latency."** *(Nếu quyết định dùng serverless, nó sẽ giảm chi phí host nhưng cũng sẽ tăng độ trễ khởi động lạnh).*
3.  **"If we had coordinated before the release, we wouldn't have run into staging conflicts."** *(Nếu chúng ta phối hợp trước đợt release, chúng ta đã không bị xung đột trên môi trường staging).*
4.  **"If we automated the database backup, we would feel far more secure during upgrades."** *(Nếu tự động hóa backup DB, chúng ta sẽ cảm thấy an tâm hơn nhiều trong các đợt nâng cấp).*
5.  **"If we had set up strict linting rules, the code formatting would be much more consistent."** *(Nếu chúng ta cấu hình các rule lint chặt chẽ, định dạng code bây giờ đã đồng nhất hơn nhiều).*
6.  **"If we implemented redis caching, it would reduce database read times significantly."** *(Nếu chúng ta triển khai cache Redis, nó sẽ giúp giảm đáng kể thời gian đọc database).*
7.  **"If we had consulted the security guidelines, we could have prevented the SQL injection bug."** *(Nếu chúng ta tham khảo hướng dẫn bảo mật từ trước, chúng ta đã có thể ngăn chặn lỗi SQL injection).*
8.  **"If we used TypeScript, it would save us from many runtime parameter type errors."** *(Nếu chúng ta dùng TypeScript, nó đã cứu chúng ta khỏi rất nhiều lỗi định dạng tham số khi runtime).*
9.  **"If we had updated the README file, onboarding the new developer would be much simpler."** *(Nếu chúng ta cập nhật file README, việc onboarding dev mới đã đơn giản hơn nhiều).*
10. **"If we kept meetings under 15 minutes, we would have way more coding time."** *(Nếu chúng ta giữ các cuộc họp dưới 15 phút, chúng ta đã có nhiều thời gian viết code hơn).*
