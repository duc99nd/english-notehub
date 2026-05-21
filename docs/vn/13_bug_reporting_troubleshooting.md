# Báo cáo Bug & Xử lý sự cố

Giao tiếp rõ ràng và súc tích trong quá trình debug là vô cùng quan trọng. Khi phát sinh lỗi, lập trình viên, kỹ sư QA và quản lý dự án cần nhanh chóng thống nhất thông tin. Tài liệu này cung cấp các từ vựng chuyên ngành, cấu trúc câu và các mẫu hội thoại thực tế để giúp bạn báo cáo bug, giải thích quá trình điều tra sự cố và phối hợp xử lý lỗi hệ thống một cách hiệu quả.

## 1. Cấu trúc Báo cáo Bug Chuyên nghiệp (Mẫu trên Jira)

Một báo cáo bug chuyên nghiệp cần tránh những câu nói mơ hồ như "app bị lỗi rồi". Báo cáo chuẩn nên chứa tiêu đề rõ ràng, thông tin môi trường, các bước tái hiện lỗi, kết quả thực tế đối lập với mong đợi, và mức độ nghiêm trọng.

### Từ vựng Cốt lõi:
- **Flaky bug / Intermittent issue:** Lỗi chập chờn, lúc bị lúc không, rất khó tái hiện.
- **Regression:** Lỗi suy thoái (lỗi phát sinh ở một tính năng vốn đang chạy bình thường, thường xảy ra sau khi deploy code mới).
- **Edge case:** Trường hợp biên/ngoại lệ (kịch bản hiếm khi xảy ra, chỉ xuất hiện trong các điều kiện cực kỳ đặc thù).
- **Stack trace:** Luồng gọi hàm/lệnh dẫn tới lỗi, cực kỳ quan trọng đối với lập trình viên để xác định dòng code lỗi.
- **Workaround:** Giải pháp tạm thời (giúp user tiếp tục sử dụng trong lúc chờ dev xử lý triệt để lỗi).

### Mẫu báo cáo bug chuẩn:
> **Title:** [Bug] User Profile Page returns 500 error when clicking "Save" without uploading an avatar
>
> **Environment:** Staging (v2.4.1), Chrome v121, MacOS Sonoma
>
> **Severity:** High (blocks profile completion)
>
> **Reproduction Steps:**
> 1. Log in to the application.
> 2. Navigate to the `/settings/profile` page.
> 3. Modify the "Display Name" field.
> 4. Leave the avatar image field blank.
> 5. Click the "Save Changes" button.
>
> **Expected Behavior:**
> The profile should update successfully, and the system should display a toast message saying "Profile updated."
>
> **Actual Behavior:**
> The screen freezes, and a red error banner pops up saying "Internal Server Error (500)." The console displays a `TypeError: Cannot read properties of null (reading 'avatarUrl')`.

---

## 2. Mẫu câu giao tiếp khi Điều tra & Giải quyết lỗi

Khi các bên liên quan yêu cầu cập nhật tiến độ fix bug, hãy dùng các mẫu câu này để báo cáo tiến trình một cách bình tĩnh, chuyên nghiệp.

### Khi bắt đầu điều tra lỗi:
- "I'm currently **digging into** the Datadog logs to trace the root cause of this memory leak." *(Tôi hiện đang đi sâu vào phân tích log Datadog để tìm nguyên nhân gốc rễ của lỗi rò rỉ bộ nhớ này.)*
- "I have managed to **reproduce the issue locally**, and I'm currently stepping through the execution flow." *(Tôi đã tái hiện thành công lỗi này dưới local và hiện đang chạy debug từng bước để kiểm tra luồng thực thi.)*
- "I'm checking the database replica to see if we have a connection pool exhaustion problem." *(Tôi đang kiểm tra bản sao (replica) database để xem liệu có gặp tình trạng cạn kiệt tài nguyên kết nối (connection pool exhaustion) hay không.)*
- "I am **bisecting the commits** to find exactly when this regression was introduced." *(Tôi đang rà soát lại các commit để tìm chính xác thời điểm lỗi suy thoái này được đưa vào hệ thống.)*

### Khi giải thích nguyên nhân gốc rễ (Root Cause):
- "The crash was **caused by a null pointer exception** when parsing the nested JSON payload." *(Sự cố sập app xảy ra do lỗi null pointer khi parse dữ liệu JSON lồng nhau.)*
- "It turns out to be a **race condition** between our frontend state update and the WebSocket connection initialization." *(Hóa ra đó là do lỗi tranh chấp tài nguyên (race condition) giữa việc cập nhật state của frontend và việc khởi tạo kết nối WebSocket.)*
- "We hit a **rate limit** on the third-party translation API, which caused all subsequent translation queries to fail." *(Chúng ta đã vượt quá giới hạn yêu cầu (rate limit) của API dịch thuật bên thứ ba, khiến tất cả các yêu cầu dịch sau đó đều thất bại.)*
- "A database migration script failed to add a default value to the `status` column, which **triggered a constraint violation**." *(Một script cập nhật database đã không thêm giá trị mặc định cho cột `status`, dẫn đến lỗi vi phạm ràng buộc dữ liệu.)*

### Khi đề xuất giải pháp:
- "I've rolled out a **hotfix** to patch the security vulnerability on staging. Can you verify it on your end?" *(Tôi đã triển khai một hotfix để vá lỗ hổng bảo mật trên môi trường staging. Bạn kiểm tra lại giúp tôi nhé?)*
- "We deployed a **workaround** by disabling the broken feature flag, which restores basic checkout functionality while we work on a permanent patch." *(Chúng tôi đã áp dụng giải pháp tạm thời là tắt feature flag bị lỗi, giúp khôi phục chức năng checkout cơ bản trong khi chuẩn bị bản vá lỗi triệt để.)*
- "To prevent this from happening again, we will add an integration test to cover this specific edge case." *(Để ngăn lỗi này lặp lại, chúng tôi sẽ viết thêm một bài test tích hợp để phủ hết trường hợp ngoại lệ đặc thù này.)*

---

## 3. Cộng tác hiệu quả với các Kỹ sư QA

Lập trình viên và QA cần giao tiếp mượt mà. Hãy dùng các mẫu câu lịch sự này để yêu cầu thêm thông tin hoặc log.

- "Could you share the **network payload** or the console logs from that session?" *(Bạn có thể chia sẻ dữ liệu network payload hoặc log console từ phiên làm việc đó không?)*
- "Does this bug happen on Safari as well, or is it **isolated to** Chromium browsers?" *(Lỗi này có xảy ra trên Safari không, hay nó chỉ bị giới hạn (isolated) trên các trình duyệt Chromium?)*
- "I couldn't reproduce this on my end. Could you record a quick **screen capture** showing the steps?" *(Tôi chưa tái hiện được lỗi này ở máy tôi. Bạn có thể quay màn hình nhanh các bước thao tác giúp tôi được không?)*
- "Which user account were you using when this error occurred? I want to check their permissions in the database." *(Bạn đã dùng tài khoản user nào khi gặp lỗi này thế? Tôi muốn check phân quyền của họ trong DB.)*

---

## 4. Kịch bản thực tế: Phòng Chiến sự (War Room) xử lý lỗi Production

Một lỗi nghiêm trọng đã vượt qua vòng test và đang xảy ra trên môi trường chạy thực tế (Production). Tech Lead và QA Lead đang chat phối hợp trên Slack.

### 👥 Nhân vật:
- **Đức** (Tech Lead)
- **Sarah** (QA Lead)

### 💬 Đoạn đối thoại:
- **Sarah**: "Hi Duc, we are seeing a spike in checkout errors in production. Multiple users are reporting that the Stripe modal doesn't open. It's currently blocking all payments." *(Chào Đức, bên mình đang thấy lượng lỗi checkout tăng vọt trên production. Rất nhiều user báo modal của Stripe không mở được. Việc này đang chặn tất cả các giao dịch thanh toán.)*
- **Đức**: "Understood. That's a blocker. Do we have any error codes from the logs?" *(Tôi hiểu rồi. Lỗi này nghiêm trọng đây. Chúng ta có mã lỗi nào từ log không?)*
- **Sarah**: "Yes, here is a screenshot of the browser console. It shows a `Stripe is not defined` error. It seems like the Stripe SDK script is failing to load." *(Có, đây là ảnh chụp màn hình log console. Nó hiện lỗi `Stripe is not defined`. Có vẻ như script SDK của Stripe đang tải thất bại.)*
- **Đức**: "Ah, it might be an issue with our Content Security Policy (CSP). Let me check if our latest security update blocked the Stripe CDN." *(À, có thể là do cấu hình CSP (Content Security Policy). Để tôi check xem đợt update bảo mật mới nhất có chặn CDN của Stripe không.)*
- **Sarah**: "Good idea. It started right after our deployment at 2 PM. So it's definitely a regression." *(Ý kiến hay đấy. Lỗi bắt đầu ngay sau đợt deploy lúc 2h chiều. Vậy chắc chắn đây là lỗi suy thoái (regression) rồi.)*
- **Đức**: "Found it. The CSP configuration file is missing the Stripe domain in the `script-src` directive. I'll add it immediately and trigger a hotfix release." *(Tìm thấy rồi. File cấu hình CSP đang thiếu domain của Stripe trong khai báo `script-src`. Tôi sẽ thêm vào ngay và kích hoạt bản release hotfix.)*
- **Sarah**: "Great. Please let me know once the hotfix is deployed to staging. I'll run a quick smoke test before we push it to production." *(Tuyệt vời. Báo tôi biết ngay khi hotfix được deploy lên staging nhé. Tôi sẽ chạy test nhanh (smoke test) trước khi chúng ta đẩy nó lên production.)*
- **Đức**: "It's building now. Staging deployment should be finished in 3 minutes. I'll ping you then." *(Code đang build rồi. Việc deploy staging sẽ hoàn thành trong 3 phút nữa. Tôi sẽ báo bạn lúc đó nhé.)*
- **Sarah**: "Staging tests passed. Payments are working now. Go ahead and deploy to production." *(Các bài test staging đã pass. Thanh toán chạy ngon rồi. Triển khai đẩy lên production đi sếp.)*
- **Đức**: "The production hotfix is live. I'll monitor the logs to make sure the error rate drops back to zero." *(Hotfix trên production đã live. Tôi sẽ tiếp tục giám sát log để đảm bảo tỷ lệ lỗi giảm về 0. Cảm ơn bạn!)*
