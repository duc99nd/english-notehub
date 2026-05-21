# Hướng dẫn Kỹ sư Tập sự / Junior (Mentoring)

Hướng dẫn (mentoring) các developer junior là một cột mốc quan trọng trên con đường trở thành Senior Developer hoặc Tech Lead. Mentoring hiệu quả không phải là nhảy vào code hộ họ, mà là dẫn dắt họ tự tìm ra câu trả lời, đưa ra phản hồi mang tính xây dựng, giải thích ngữ cảnh kỹ thuật và xây dựng sự tự tin cho họ.

## 1. Hướng dẫn Onboard cho Dev Junior mới

Chào mừng họ vào dự án và giải thích cách tổ chức cấu trúc của codebase.

- "Welcome to the team! Today, I’ll help you set up your local environment and walk you through our codebase structure." *(Chào mừng bạn đến với team! Hôm nay mình sẽ hỗ trợ bạn setup môi trường local và giới thiệu qua cấu trúc codebase của chúng ta.)*
- "Don't worry about understanding everything on day one. Our primary goal for this week is just to get your first local build running and complete a simple ticket." *(Đừng lo lắng về việc phải hiểu hết mọi thứ trong ngày đầu tiên. Mục tiêu chính của bạn trong tuần này chỉ là chạy được bản build local đầu tiên và hoàn thành một ticket đơn giản.)*
- "Here is our project onboarding guide. Let me know if you run into any permission issues while cloning the repository." *(Đây là tài liệu onboard của dự án. Báo mình biết nếu bạn gặp bất kỳ vấn đề gì về quyền hạn khi clone repo về nhé.)*

## 2. Dẫn dắt tự tìm Giải pháp (Tránh làm hộ)

Hạn chế việc giật bàn phím gõ hộ. Thay vào đó, hãy đặt các câu hỏi mở để gợi mở tư duy cho họ.

- "Instead of copying my solution, let’s look at the documentation together. What does the API say about this parameter?" *(Thay vì copy giải pháp của mình, chúng ta cùng xem tài liệu xem. API nói gì về tham số này nhỉ?)*
- "Where do you think the bottleneck is? Let's add some log statements to trace the flow of data." *(Bạn nghĩ điểm nghẽn đang nằm ở đâu? Hãy thêm vài dòng log để kiểm tra luồng dữ liệu chạy thế nào nhé.)*
- "That's a good attempt. What would happen to this logic if the array is empty?" *(Cách làm đó khá tốt đấy. Nhưng logic này sẽ thế nào nếu mảng bị rỗng?)*
- "Let's debug this together. What error message is displayed in the console?" *(Chúng ta cùng debug nhé. Có thông báo lỗi nào hiển thị ở tab console không?)*

## 3. Giải thích Quy chuẩn & Lý do kỹ thuật (Why)

Giải thích cặn kẽ lý do đằng sau các tiêu chuẩn code hoặc các quyết định kiến trúc.

- "We use async/await here instead of raw promises to keep the code clean and make error handling easier with try-catch blocks." *(Chúng ta dùng async/await ở đây thay vì raw promise để code sạch hơn và giúp xử lý lỗi dễ hơn bằng try-catch.)*
- "We normalize this data in the database because it prevents data redundancy and ensures database consistency." *(Chúng ta chuẩn hóa dữ liệu này trong database vì nó giúp tránh trùng lặp dữ liệu và đảm bảo tính nhất quán.)*
- "I suggest extracting this logic into a helper function because we are going to reuse it in three different components." *(Mình đề xuất tách logic này ra một hàm helper vì chúng ta sẽ tái sử dụng nó ở 3 component khác nhau.)*

## 4. Đưa ra Nhận xét mang tính Xây dựng khi Review Code

Đưa ra feedback một cách khích lệ, tập trung vào code chứ không nhắm vào cá nhân.

- "Nice job on implementing this logic! A minor suggestion: we can make this block slightly cleaner by using optional chaining here." *(Làm logic này tốt quá! Gợi ý nhỏ: chúng ta có thể viết khối này sạch hơn một chút bằng cách dùng optional chaining ở đây.)*
- "I noticed this database query is inside a loop. If we run this in production, it will trigger too many queries. Can we fetch the data before the loop instead?" *(Mình thấy câu query DB này nằm trong vòng lặp. Nếu chạy trên production, nó sẽ bắn quá nhiều query. Chúng ta lấy dữ liệu ra trước vòng lặp được không?)*
- "Great start on these unit tests! Let’s also add one test case to handle the error scenario." *(Khởi đầu tốt với các unit test này đấy! Hãy thêm cả một test case để xử lý kịch bản lỗi nữa nhé.)*

## 5. Động viên & Xây dựng sự Tự tin

Ghi nhận sự tiến bộ và nỗ lực của các bạn junior.

- "You did a great job resolving that bug today. Your troubleshooting skills are really improving!" *(Hôm nay bạn giải quyết bug đó tốt quá. Kỹ năng tìm và sửa lỗi của bạn đang tiến bộ rõ rệt đấy!)*
- "Don't hesitate to ask questions. There are no stupid questions here, and we've all been in your shoes before." *(Đừng ngần ngại đặt câu hỏi. Không có câu hỏi nào là ngốc nghếch cả, tất cả chúng mình đều đã từng trải qua giai đoạn như bạn thôi.)*
- "Thanks for taking the initiative on this cleanup task. The team really appreciates it." *(Cảm ơn bạn đã chủ động dọn dẹp code thừa. Cả team rất ghi nhận điều này.)*
