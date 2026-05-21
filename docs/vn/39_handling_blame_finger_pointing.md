# Xử lý tình huống bị đổ lỗi (Blame Game)

Trong phát triển phần mềm, sai sót là điều khó tránh. Code bị lỗi, deployment thất bại, hoặc trễ deadline. Khi sự cố xảy ra, mọi người đôi khi có xu hướng tìm kiếm "tội đồ" (scapegoat) thay vì tìm giải pháp. Xử lý việc bị đổ lỗi và chỉ trích một cách chuyên nghiệp yêu cầu bạn phải giữ bình tĩnh, tập trung vào sự thật (facts), thừa nhận sai sót một cách xây dựng và hướng cuộc hội thoại quay lại việc tìm giải pháp khắc phục.

## 1. Giữ bình tĩnh & Hạ nhiệt cuộc đối thoại (De-escalating)

Khi đối mặt với những lời cáo buộc trực diện, hãy tránh phản ứng một cách phòng thủ (defensive) hoặc tức giận. Hãy giữ tông giọng khách quan và trung lập.

- "I understand that this outage is frustrating. Let’s focus on resolving the issue first, and then we can analyze how it happened." *(Tôi hiểu rằng sự cố sập hệ thống này rất đáng bực mình. Chúng ta hãy tập trung xử lý lỗi trước, rồi sau đó mới phân tích xem nó xảy ra thế nào.)*
- "Let's take a step back and look at the sequence of events objectively." *(Chúng ta hãy lùi lại một bước và nhìn nhận chuỗi sự kiện một cách khách quan.)*
- "I hear your concern, and I want to make sure we address the root cause rather than assigning blame." *(Tôi hiểu lo ngại của bạn, và tôi muốn đảm bảo chúng ta giải quyết nguyên nhân gốc rễ thay vì đổ lỗi cho nhau.)*

## 2. Phản bác các Cáo buộc Vô lý bằng Sự thật (Facts)

Nếu bạn hoặc team của bạn bị đổ lỗi cho một vấn đề không phải do lỗi của các bạn, hãy dùng log hệ thống, lịch sử commit git, hoặc lịch sử ticket Jira để trình bày sự thật.

- "Actually, the database migration script was run after receiving written approval from the product team. Here is the confirmation email." *(Thực ra, script migration database đã được chạy sau khi nhận được sự phê duyệt bằng văn bản từ team product. Đây là email xác nhận.)*
- "The deployment failed because the API keys provided to us were invalid, as documented in the deployment logs here." *(Việc deploy thất bại vì key API cung cấp cho chúng tôi không hợp lệ, như được ghi nhận lại trong log deploy ở đây.)*
- "Our team was not involved in the design of the database architecture. We implemented the schema exactly as specified in the architecture document." *(Team chúng tôi không tham gia vào việc thiết kế kiến trúc database. Chúng tôi triển khai schema chính xác theo đặc tả trong tài liệu kiến trúc.)*

## 3. Thừa nhận Sai lầm một cách Xây dựng

Nếu bạn hoặc team của bạn thực sự phạm sai lầm, hãy thừa nhận nhanh chóng, chịu trách nhiệm và tập trung vào giải pháp. Đừng bao biện.

- "You are correct. We missed checking this edge case in our unit tests. I will update our test suite today to prevent this from happening again." *(Bạn nói đúng. Chúng tôi đã bỏ sót việc check case đặc biệt này trong unit test. Tôi sẽ cập nhật bộ test suite hôm nay để tránh việc này lặp lại.)*
- "I apologize for the oversight. The regression was caused by a merge conflict that I resolved incorrectly. I am working on the fix now." *(Tôi xin lỗi vì sơ suất này. Lỗi regression này xảy ra do một xung đột merge code mà tôi đã giải quyết sai. Tôi đang sửa lỗi ngay bây giờ.)*
- "We take full responsibility for the configuration error. Here is our plan to prevent similar issues in the future." *(Chúng tôi hoàn toàn chịu trách nhiệm về lỗi cấu hình này. Đây là kế hoạch của chúng tôi để ngăn ngừa các sự cố tương tự sau này.)*

## 4. Kéo cuộc thảo luận quay lại Giải pháp

Khi đối phương cứ liên tục đay nghiến lỗi lầm, hãy khéo léo chuyển hướng cuộc trò chuyện sang kế hoạch khắc phục và các rào chắn phòng ngừa sau này.

- "The mistake has occurred, and we cannot change that. The most productive thing we can do now is focus on how to restore the service." *(Sai lầm đã xảy ra và chúng ta không thể thay đổi nó. Việc hữu ích nhất cần làm bây giờ là tập trung khôi phục dịch vụ.)*
- "Instead of discussing whose fault this is, let's agree on the immediate actions needed to patch the security vulnerability." *(Thay vì bàn luận xem đây là lỗi của ai, chúng ta hãy thống nhất các hành động cần thiết ngay lập tức để vá lỗ hổng bảo mật này.)*
- "Let’s schedule a blameless post-mortem tomorrow to document the timeline and put checks in place to prevent a recurrence." *(Chúng ta hãy lên lịch một buổi họp mổ xẻ sự cố không đổ lỗi (blameless post-mortem) vào ngày mai để ghi lại timeline và đặt ra các bước kiểm tra ngăn ngừa tái diễn.)*

## 5. Mẫu câu xử lý tình huống đối đầu gay gắt

- **Khi bị đổ lỗi trễ deadline do requirement thay đổi:** "The delay was not caused by developer performance, but by the fact that the checkout flow requirements were updated three times during the sprint. To prevent this, we should lock requirements before starting development." *(Sự chậm trễ không phải do năng suất của dev, mà do luồng checkout bị cập nhật yêu cầu tới 3 lần trong sprint. Để tránh việc này, chúng ta nên khóa yêu cầu trước khi bắt đầu code.)*
- **Khi bị đổ lỗi vì để lọt bug lên production:** "While it is true that the bug slipped through to production, our current QA process doesn't cover cross-browser testing on older devices. I suggest we invest in automated cross-browser testing tools to address this gap." *(Mặc dù đúng là bug đã lọt lên production, nhưng quy trình QA hiện tại của chúng ta chưa bao phủ việc test chéo trình duyệt trên các thiết bị cũ. Tôi đề xuất chúng ta đầu tư công cụ test tự động chéo trình duyệt để lấp khoảng trống này.)*
