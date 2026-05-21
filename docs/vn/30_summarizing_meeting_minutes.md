# Cách chốt biên bản cuộc họp (Meeting Minutes)

Khi cuộc họp kết thúc hoặc ngay sau đó, ai đó cần viết "Biên bản cuộc họp" (MoM - Minutes of Meeting). Tài liệu này tóm tắt các quyết định đã thống nhất, các câu hỏi chưa được giải quyết và các đầu việc cần làm (action items). Việc viết MoM rõ ràng, dễ theo dõi sẽ giúp mọi người đồng thuận và tránh việc trôi mất task.

## 1. Viết tiêu đề biên bản (Meeting Header)

Đưa vào các thông tin cơ bản để tài liệu dễ tra cứu sau này.

- **Date & Time:** October 12, 2026 | 10:00 AM - 11:00 AM UTC
- **Attendees:** John (Client PO), Sarah (Lead Dev), Duc (Fullstack Dev)
- **Objective:** Weekly status update & payment gateway alignment *(Mục tiêu: Cập nhật tiến độ tuần & Thống nhất cổng thanh toán)*

## 2. Tóm tắt các Quyết định chính đã thông qua (Decisions Made)

Liệt kê các thỏa thuận chính đạt được trong cuộc thảo luận. Dùng gạch đầu dòng và từ ngữ trực diện.

- "It was **agreed** to postpone the Phase 2 launch by one week to allow for extra load testing." *(Team **thống nhất** lùi lịch launch Giai đoạn 2 lại 1 tuần để có thêm thời gian test chịu tải.)*
- "We **decided** to use PostgreSQL's native UUID generation instead of generating IDs on the backend application level." *(Team **quyết định** dùng tính năng tự sinh UUID của Postgres thay vì tự sinh ID ở tầng ứng dụng backend.)*
- "The client **confirmed** that the multi-currency feature is out of scope for the MVP." *(Khách hàng **xác nhận** tính năng đa tiền tệ nằm ngoài phạm vi (out of scope) của bản MVP.)*

## 3. Liệt kê các câu hỏi còn bỏ ngỏ (Open Items)

Ghi chép lại những câu hỏi chưa thể giải quyết ngay trong cuộc họp và cần theo dõi tiếp.

- "API credentials for the production environment are still pending. **Action needed:** John (Client PO) to request these from the DevOps team by Friday." *(Key API cho môi trường production vẫn đang chờ. **Hành động cần làm:** John (PO phía khách) cần xin key từ team DevOps trước thứ Sáu.)*
- "Unresolved: Whether the user session should expire after 30 minutes or 2 hours. **Follow-up:** Sarah to share security best practices via email." *(Chưa giải quyết: Session của user nên hết hạn sau 30 phút hay 2 tiếng. **Theo dõi:** Sarah sẽ gửi tài liệu bảo mật qua email.)*
- "We need confirmation on the final logo SVG assets. **Pending:** Design team to upload to Figma." *(Chúng ta cần xác nhận về file SVG logo cuối cùng. **Đang chờ:** Team Design upload lên Figma.)*

## 4. Ghi rõ Action Items (Ai làm việc gì, hạn chót khi nào)

Đây là phần quan trọng nhất của MoM. Mỗi task bắt buộc phải đi kèm tên người chịu trách nhiệm (owner) và hạn chót thực tế (deadline).

- "**Action Item:** Duc to update the user database migration script by Wednesday." *(Đầu việc: Đức cập nhật script migration DB user trước thứ Tư.)*
- "**Action Item:** Sarah to schedule a load testing dry run for next Tuesday." *(Đầu việc: Sarah lên lịch chạy thử load test vào thứ Ba tuần tới.)*
- "**Action Item:** John to approve the updated wireframes in Figma by end of day tomorrow." *(Đầu việc: John duyệt các bản vẽ wireframe cập nhật trên Figma trước cuối ngày mai.)*

## 5. Mẫu email/chat gửi Biên bản cuộc họp chuyên nghiệp

Sử dụng các mẫu này để gửi MoM cho team qua Slack/Teams hoặc Email.

### Mẫu gửi Slack/Teams:
> Hi team, thanks for the productive sync today. Here is a quick summary of our meeting:
> - **Key Decision:** We will use Stripe for the payment gateway.
> - **Action Items:**
>   - @Duc: Update DB schema (`deadline: Friday`).
>   - @Sarah: Set up the Stripe sandbox account (`deadline: Monday`).
> Please let me know if I missed anything!

### Mẫu gửi Email:
> Subject: Meeting Minutes: Weekly Sync - Oct 12, 2026
>
> Hi everyone,
>
> Thank you for attending today's weekly sync. Below is a summary of the key decisions and action items from our discussion:
>
> **Decisions Made:**
> - The QA phase is extended by 3 days.
> - The new release date is set to October 22nd.
>
> **Action Items:**
> - Duc: Deploy the fix for the login bug to staging (Target date: Oct 14th).
> - John: Provide the testing account credentials (Target date: Oct 15th).
>
> **Next Meeting:** Scheduled for next Monday at 10:00 AM UTC.
>
> Best regards,
> [Your Name]
