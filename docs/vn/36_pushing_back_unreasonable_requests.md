# Từ chối yêu cầu vô lý từ Sếp hoặc PO

Trong sự nghiệp, chắc chắn sẽ có lúc bạn nhận phải những yêu cầu vô lý—chẳng hạn như một deadline bất khả thi, yêu cầu OT cuối tuần đột xuất mà không có kế hoạch, hoặc bắt triển khai một tính năng đi ngược lại các quy tắc bảo mật. Học cách nói "Không" một cách chuyên nghiệp, dựa trên các bằng chứng kỹ thuật và lý lẽ logic, là kỹ năng sống còn của một lập trình viên.

## 1. Từ chối Deadline bất khả thi (Impossible Timelines)

Khi bị ép làm một tính năng quá lớn trong thời gian quá ngắn, hãy giải thích về rủi ro chất lượng và bảo mật nếu làm ẩu.

- "I understand this feature is urgent, but building it in three days would mean skipping security validation and automated testing, which we cannot compromise on." *(Tôi hiểu tính năng này đang rất gấp, nhưng làm nó trong 3 ngày đồng nghĩa với việc bỏ qua bước xác thực bảo mật và viết test tự động, những thứ chúng ta không thể đánh đổi được.)*
- "Realistically, we cannot deliver a stable version by tomorrow. A rushed deployment carries a high risk of breaking existing features on production." *(Thực tế mà nói, chúng ta không thể giao một phiên bản ổn định vào ngày mai. Deploy vội vã mang rủi ro rất cao làm hỏng các tính năng đang chạy bình thường trên production.)*
- "To meet that deadline, we would have to deploy untested code. I strongly advise against this approach." *(Để kịp deadline đó, chúng ta sẽ phải deploy code chưa qua kiểm thử. Tôi khuyên chân thành là không nên đi theo cách tiếp cận này.)*

## 2. Từ chối yêu cầu "Sai quy trình" (Out-of-Process)

Khi ai đó cố tình đi đường tắt, bỏ qua quy trình Agile tiêu chuẩn (ví dụ: bắt dev deploy hotfix trực tiếp lên production mà không qua QA test, hoặc bắt làm việc không có ticket Jira).

- "To maintain system stability, we cannot deploy hotfixes directly to production without passing our standard QA regression testing flow." *(Để duy trì sự ổn định của hệ thống, chúng ta không thể deploy hotfix trực tiếp lên production mà không chạy qua luồng kiểm thử hồi quy (regression testing) của QA.)*
- "Please create a Jira ticket and prioritize it with our Product Owner first, so we can track the resources needed for this task." *(Vui lòng tạo một ticket Jira và thảo luận độ ưu tiên với Product Owner trước, để chúng tôi có thể cân đối nhân sự cho task này.)*
- "I can't start on this immediately. We need to follow our sprint planning guidelines to avoid disrupting our current commitments." *(Tôi không thể bắt đầu làm cái này ngay lập tức. Chúng ta cần tuân thủ nguyên tắc planning sprint để tránh ảnh hưởng đến các task đã cam kết.)*

## 3. Giải thích Rủi ro Kỹ thuật & Kiến trúc

Nếu yêu cầu bắt bạn phải làm theo cách kém bảo mật, không thể scale hoặc làm chậm hệ thống.

- "Storing passwords in plain text for testing is a major security vulnerability. We must use hashed passwords even in our development environment." *(Lưu mật khẩu dạng text thường (plain text) để test là một lỗ hổng bảo mật cực lớn. Chúng ta bắt buộc phải hash mật khẩu kể cả trên môi trường dev.)*
- "While writing a direct SQL query on the client side is faster to implement, it exposes us to SQL injection attacks." *(Mặc dù viết câu truy vấn SQL trực tiếp ở phía client làm nhanh hơn, nhưng nó khiến chúng ta có nguy cơ bị tấn công SQL injection.)*
- "If we add this heavy query to the homepage load, it will significantly slow down the page load time for all users. We should build a separate API endpoint for this data." *(Nếu chúng ta nhét câu truy vấn nặng này vào luồng load trang chủ, nó sẽ làm chậm đáng kể thời gian tải trang của toàn bộ user. Chúng ta nên viết một endpoint API riêng cho phần dữ liệu này.)*

## 4. Đề xuất Giải pháp Thay thế (Nói "Không" đi kèm "Có")

Luôn cố gắng đưa ra một giải pháp thay thế khả thi và an toàn hơn để thuyết phục đối phương.

- "We can't build the full dashboard by Friday, but we can display a simple CSV export button as a temporary workaround." *(Chúng ta không thể code xong toàn bộ dashboard vào thứ Sáu, nhưng chúng ta có thể làm một nút xuất file CSV đơn giản như một giải pháp tạm thời.)*
- "I can't work this weekend due to personal commitments, but I can prioritize this first thing on Monday morning and pair-program with [Name] to speed it up." *(Tôi không thể làm việc cuối tuần này vì lý do cá nhân, nhưng tôi sẽ ưu tiên làm nó ngay sáng thứ Hai và code chung (pair-program) với [Tên] để đẩy nhanh tiến độ.)*
- "Rather than building a custom chat engine, I suggest we integrate a third-party SDK to save development time and ensure reliability." *(Thay vì tự code một bộ chat engine riêng, tôi đề xuất chúng ta tích hợp một thư viện SDK bên thứ ba để tiết kiệm thời gian phát triển và đảm bảo độ tin cậy.)*

## 5. Mẫu câu phản biện chuyên nghiệp mẫu mực

- **Khi PM bắt OT vô lý:** "I understand we are close to the release, but working overtime this week will lead to developer fatigue and increase the likelihood of introducing critical bugs. Let's look at reducing the release scope instead." *(Tôi hiểu chúng ta sắp đến ngày release, nhưng làm tăng ca tuần này sẽ dẫn đến sự mệt mỏi cho dev và làm tăng khả năng sinh ra các bug nghiêm trọng. Thay vào đó, hãy xem xét giảm phạm vi release đi.)*
- **Khi sếp bảo bỏ qua viết test để làm cho nhanh:** "Writing unit tests is a core part of our Definition of Done. Skipping them to save time will create technical debt that will cost us double to fix later." *(Viết unit test là phần cốt lõi trong định nghĩa hoàn thành (Definition of Done) của team. Bỏ qua chúng để tiết kiệm thời gian sẽ tạo ra nợ kỹ thuật và chúng ta sẽ tốn gấp đôi chi phí để sửa sau này.)*
