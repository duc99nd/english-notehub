# Phản hồi mang tính xây dựng (Constructive Feedback)

Phản hồi là động cơ thúc đẩy sự phát triển trong các team kỹ thuật hiệu suất cao. Tuy nhiên, nếu phản hồi không khéo léo có thể gây ra thái độ phòng thủ, rạn nứt mối quan hệ và làm mất động lực của đồng nghiệp. Đưa ra phản hồi mang tính xây dựng yêu cầu bạn phải phân tách rõ ràng giữa con người và hành vi, tập trung vào sức ảnh hưởng (impact) và đưa ra các đề xuất cải thiện rõ ràng, khả thi.

## 1. Áp dụng Mô hình Phản hồi "SBI" (Situation - Behavior - Impact)

Mô hình SBI là một khung sườn chuyên nghiệp đã được chứng minh hiệu quả:
1. **Situation (Ngữ cảnh):** Xác định thời gian, địa điểm cụ thể.
2. **Behavior (Hành vi):** Mô tả hành vi có thể quan sát được (tránh quy chụp ý đồ).
3. **Impact (Ảnh hưởng):** Giải thích hành vi đó ảnh hưởng thế nào đến bạn, team hoặc dự án.

- "During yesterday's client presentation (Situation), you interrupted the client twice while they were describing their requirements (Behavior). This made the client defensive and slowed down our alignment process (Impact)." *(Trong buổi thuyết trình với khách hàng hôm qua (Ngữ cảnh), bạn đã cắt lời khách hàng 2 lần khi họ đang mô tả yêu cầu (Hành vi). Việc này khiến khách hàng có thái độ phòng thủ và làm chậm quá trình thống nhất yêu cầu của chúng ta (Ảnh hưởng).)*
- "In the last three pull requests (Situation), you merged code without running the local build tests (Behavior). As a result, the staging build broke twice, which delayed the QA team's testing schedule (Impact)." *(Trong 3 pull request gần nhất (Ngữ cảnh), bạn đã merge code mà không chạy test build dưới local (Hành vi). Kết quả là bản build staging bị hỏng 2 lần, làm chậm trễ lịch trình test của team QA (Ảnh hưởng).)*

## 2. Phân tách rõ ràng giữa Code/Hành vi và Con người

Tuyệt đối tránh công kích cá nhân hay chỉ trích năng lực. Hãy tập trung vào đoạn code, quy trình hoặc hành động cụ thể đó.

- **Chưa tốt:** "Your code is messy and you are very careless." *(Code của bạn rác quá và bạn rất cẩu thả.)*
- **Tốt:** "I noticed several styling inconsistencies in this PR. Following our design guidelines, we should be using the tailwind utility classes for spacing rather than inline styles." *(Mình thấy có vài điểm không đồng nhất về style trong PR này. Theo quy chuẩn design, chúng ta nên dùng các class tiện ích của Tailwind để tạo khoảng cách thay vì viết inline style.)*
- **Chưa tốt:** "You are always late to meetings." *(Lúc nào bạn cũng đi họp muộn.)*
- **Tốt:** "When you arrive 10 minutes late to our daily standups, it disrupts the flow of our updates and extends the meeting time. Can we make sure to join on time?" *(Khi bạn đến muộn 10 phút trong các buổi daily standup, nó làm đứt gãy luồng cập nhật của team và kéo dài thời gian họp. Chúng ta cố gắng tham gia đúng giờ được không?)*

## 3. Luôn đi kèm Đề xuất Cải thiện khả thi (Actionable Suggestions)

Đừng bao giờ chỉ ra lỗi sai mà không gợi ý hướng khắc phục hoặc giải pháp thay thế.

- "The current database query is quite slow under load. To improve this, I suggest indexing the `created_at` field and writing a join query instead of using nested queries." *(Câu truy vấn database hiện tại chạy khá chậm khi chịu tải. Để cải thiện, tôi đề xuất đánh chỉ mục (index) cho trường `created_at` và viết một câu truy vấn JOIN thay vì dùng các câu truy vấn lồng nhau.)*
- "I feel that your PR descriptions are a bit brief. It would be highly helpful if you could include quick reproduction steps and a link to the Jira ticket in the future." *(Mình thấy phần mô tả PR của bạn hơi ngắn gọn quá. Sẽ rất hữu ích nếu sau này bạn có thể đưa vào các bước test nhanh và link dẫn tới ticket Jira.)*
- "I noticed you struggled with explaining the architecture to the PO. Next time, I suggest using a simple flow diagram to visualize the components first." *(Mình thấy bạn hơi chật vật khi giải thích kiến trúc cho PO. Lần tới, mình khuyên bạn nên dùng một sơ đồ luồng đơn giản để trực quan hóa các thành phần trước.)*

## 4. Khích lệ và củng cố Hành vi Tốt (Positive Feedback)

Phản hồi mang tính xây dựng không chỉ là sửa lỗi; nó còn là việc ghi nhận và củng cố các đóng góp tích cực của đồng nghiệp.

- "I wanted to give you some quick positive feedback. Your explanation of the database migration plan during the team sync was incredibly clear and helped everyone align quickly." *(Mình muốn gửi tới bạn một lời khen nhanh. Phần giải thích của bạn về kế hoạch database migration trong buổi sync team cực kỳ rõ ràng và giúp mọi người thống nhất rất nhanh.)*
- "Great job resolving that memory leak yesterday. Your debugging approach was highly systematic, and the post-incident documentation was excellent." *(Làm tốt lắm trong việc xử lý lỗi rò rỉ bộ nhớ hôm qua. Cách tiếp cận debug của bạn cực kỳ bài bản và tài liệu viết lại sau sự cố rất xuất sắc.)*
- "Thank you for taking the time to help the junior developers onboard this week. Your support made a big difference in their ramp-up time." *(Cảm ơn bạn đã dành thời gian hỗ trợ các dev junior onboard tuần này. Sự giúp đỡ của bạn giúp các bạn ấy làm quen dự án nhanh hơn rất nhiều.)*

## 5. Mẫu kịch bản đưa ra phản hồi thực tế

- **Phản hồi giữa các đồng nghiệp (Peer-to-peer):** "Hey [Name], I wanted to share some quick feedback regarding our code reviews. I really appreciate your attention to detail, but sometimes the tone of the comments feels a bit direct. It would be helpful if we could frame suggestions as questions, like 'What if we do X?' instead of commands. This would help keep our PR discussions collaborative. What do you think?" *(Chào [Tên], mình muốn góp ý nhanh một chút liên quan đến việc review code. Mình rất trân trọng sự kỹ lưỡng của bạn, nhưng đôi khi giọng điệu của các comment hơi bị trực diện quá. Sẽ rất tốt nếu chúng ta định hình các gợi ý dưới dạng câu hỏi, kiểu 'Nếu chúng ta làm X thì sao?' thay vì ra lệnh. Việc này giúp các cuộc thảo luận PR mang tính hợp tác hơn. Bạn nghĩ sao?)*
- **Phản hồi ngược lên Quản lý/Sếp:** "Hi [Name], thanks for asking. I really appreciate how you protect the team from distractions. One suggestion I have is if we could get the sprint goals finalized a bit earlier in the planning session. This would give us more time to run technical estimates and avoid rushed sprints." *(Chào sếp, cảm ơn sếp đã hỏi. Em rất trân trọng cách sếp bảo vệ team khỏi những tác nhân gây xao nhãng bên ngoài. Em có một gợi ý nhỏ là liệu chúng ta có thể chốt các mục tiêu sprint sớm hơn một chút trong buổi planning được không ạ. Việc này sẽ giúp team có thêm thời gian chạy estimate kỹ thuật và tránh việc các sprint bị vội vã.)*
