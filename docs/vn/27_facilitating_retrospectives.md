# Điều phối họp Retrospective hiệu quả

Họp Retrospective (Retro - Cải tiến quy trình) là buổi lễ Scrum quan trọng nơi cả team nhìn lại sprint vừa qua để rút kinh nghiệm: cái gì làm tốt cần phát huy, cái gì chưa tốt cần sửa đổi. Điều phối cuộc họp này yêu cầu bạn phải giữ thảo luận mang tính xây dựng, khuyến khích những thành viên ít nói phát biểu, và tập trung vào các hành động thực tế (action items) thay vì đổ lỗi cho nhau.

## 1. Mở đầu cuộc họp & Thiết lập bầu không khí (Setting the Stage)

Bắt đầu cuộc họp bằng việc nêu rõ chương trình và khuyến khích mọi người đưa ra phản hồi cởi mở, trung thực.

- "Welcome everyone to our Sprint 15 Retrospective. Today we’ll look back at what we did well, what could be improved, and how we can optimize our processes moving forward." *(Chào mừng mọi người đến với buổi Retro của Sprint 15. Hôm nay chúng ta sẽ nhìn lại những gì đã làm tốt, những gì có thể cải thiện và cách tối ưu hóa quy trình trong tương lai.)*
- "Remember, this is a safe space. The goal is not to assign blame, but to improve as a team." *(Hãy nhớ rằng đây là một không gian an toàn. Mục tiêu không phải là đổ lỗi cho cá nhân, mà là để cùng tiến bộ với tư cách một tập thể.)*
- "Let's review the action items from our last retro. Did we manage to automate the staging deployments?" *(Chúng ta cùng xem lại các action items từ buổi retro trước nhé. Team đã tự động hóa việc deploy lên staging chưa nhỉ?)*

## 2. Dẫn dắt thảo luận (Cái gì tốt & Cái gì chưa tốt)

Hướng dẫn team trong lúc brainstorming (đóng góp ý kiến). Đặt câu hỏi để đào sâu các vấn đề.

- "Let’s start with 'What went well.' I see a lot of cards praising the new design assets. Would anyone like to share their thoughts on why the integration went so smoothly?" *(Hãy bắt đầu với 'Cái gì làm tốt'. Mình thấy rất nhiều card khen ngợi bộ UI design mới. Có ai muốn chia sẻ lý do tại sao đợt tích hợp này lại mượt mà thế không?)*
- "Moving on to 'What could be improved.' Several cards mention communication delays during code reviews. Can we discuss what exactly caused the bottleneck?" *(Chuyển sang phần 'Cái gì cần cải thiện'. Vài card có nhắc đến việc chậm trễ giao tiếp khi review code. Chúng ta thảo luận xem điều gì đã gây ra điểm nghẽn này được không?)*
- "Does anyone want to elaborate on this card about database synchronization issues?" *(Có ai muốn giải thích rõ hơn về chiếc card nói về lỗi đồng bộ database này không?)*

## 3. Khuyến khích những thành viên ít nói phát biểu

Đảm bảo mọi người, đặc biệt là các bạn junior hoặc những dev hướng nội, có cơ hội được lên tiếng.

- "[Name], you worked closely on the migration task. What was your experience during this sprint?" *([Tên] ơi, bạn làm việc rất sát với task migration. Trải nghiệm của bạn trong sprint này thế nào?)*
- "We haven’t heard from the QA team yet. [Name], did you notice any patterns in the bugs that were reported?" *(Team mình vẫn chưa nghe ý kiến từ phía QA. [Tên] ơi, bạn có nhận thấy quy luật nào trong số các bug được report đợt này không?)*
- "I want to make sure everyone has a voice. Does anyone else have something to add to this topic before we vote?" *(Mình muốn đảm bảo mọi người đều được lên tiếng. Có ai muốn bổ sung gì về chủ đề này trước khi chúng ta tiến hành vote không?)*

## 4. Giữ thảo luận mang tính xây dựng (Xử lý xung đột)

Nếu cuộc thảo luận bắt đầu biến thành một buổi đổ lỗi, hãy kéo team quay lại hướng tìm giải pháp.

- "Let's focus on the process rather than individuals. How can we prevent this configuration mismatch in the future?" *(Chúng ta hãy tập trung vào quy trình thay vì cá nhân. Làm thế nào để tránh việc lệch cấu hình này trong tương lai?)*
- "I hear your frustration, but let’s look at this constructively. What guardrails can we put in place to catch these bugs earlier?" *(Mình hiểu sự ức chế của các bạn, nhưng hãy nhìn nhận việc này một cách xây dựng. Chúng ta có thể dựng hàng rào kỹ thuật (guardrails) nào để bắt được những bug này sớm hơn?)*
- "It seems we have a difference of opinion here. Let’s list the pros and cons of both options and vote on how to proceed." *(Có vẻ như chúng ta đang có những ý kiến trái chiều. Hãy liệt kê các điểm ưu và nhược của cả hai phương án rồi vote xem nên làm thế nào nhé.)*

## 5. Chốt cuộc họp & Tạo Action Items

Mỗi buổi Retro bắt buộc phải kết thúc bằng các hành động cải tiến cụ thể, có người chịu trách nhiệm rõ ràng.

- "Let's vote on the most critical items to address in the next sprint." *(Chúng ta hãy vote xem những việc nào là quan trọng nhất cần giải quyết ngay trong sprint tới.)*
- "We have three main action items. [Name], can you own the task of updating the Docker setup documentation?" *(Chúng ta có 3 action items chính. [Tên] ơi, bạn nhận lead task cập nhật tài liệu setup Docker nhé?)*
- "To wrap up, our actions are: 1. Add Pre-commit hooks, 2. Schedule daily design syncs. I will track these in our Jira backlog." *(Để chốt lại, các action của chúng ta là: 1. Thêm pre-commit hook, 2. Lên lịch họp sync hàng ngày với design. Mình sẽ tracking các task này trong backlog Jira.)*
- "Thanks everyone for the open discussion. Let's make the next sprint even better!" *(Cảm ơn mọi người vì đã thảo luận cởi mở. Cùng làm sprint tới tốt hơn nữa nhé!)*
