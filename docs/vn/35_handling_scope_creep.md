# Xử lý thay đổi Requirement liên tục (Scope Creep)

Scope creep (phình to phạm vi) xảy ra khi các yêu cầu, tính năng mới liên tục bị nhồi nhét vào dự án sau khi phạm vi (scope) đã được chốt từ trước, mà không có sự điều chỉnh tương ứng về mặt thời gian, ngân sách hay nhân sự. Là dân IT chuyên nghiệp, bạn cần xử lý việc này bằng cách chỉ ra sự đánh đổi (trade-offs), phân tích ảnh hưởng tới deadline và hướng các bên liên quan tập trung vào mục tiêu ban đầu.

## 1. Nhận diện & Cảnh báo phình to phạm vi (Flagging Scope Creep)

Khi khách hàng hoặc sếp cố tình lồng ghép thêm tính năng mới, hãy chỉ ra lịch sự nhưng rõ ràng rằng nó nằm ngoài thỏa thuận ban đầu.

- "That is a great feature idea, but it falls outside the original scope of our MVP." *(Ý tưởng tính năng đó rất hay, nhưng nó nằm ngoài phạm vi ban đầu của bản MVP.)*
- "This request introduces new requirements that were not part of the initial specification." *(Yêu cầu này đưa vào các đặc tả mới không hề có trong tài liệu phân tích ban đầu.)*
- "Adding this payment method would be a significant change to the current sprint backlog." *(Việc thêm phương thức thanh toán này sẽ là một thay đổi lớn đối với sprint backlog hiện tại.)*

## 2. Giải thích Ảnh hưởng tới Timeline & Nhân sự

Giúp các bên liên quan hiểu rằng thêm tính năng không phải là miễn phí; nó phải trả giá bằng thời gian và tài nguyên.

- "Adding this reporting dashboard now will delay our target release date by at least a week." *(Việc thêm dashboard báo cáo này bây giờ sẽ làm chậm ngày release mục tiêu ít nhất một tuần.)*
- "If we implement this custom user group management, we won't have enough time to complete the core payment flow in this sprint." *(Nếu chúng ta làm phần quản lý nhóm user tùy biến này, chúng ta sẽ không đủ thời gian để hoàn thành luồng thanh toán cốt lõi trong sprint này.)*
- "Our team is currently at 100% capacity. To take on this new task, we would need to push back another priority item." *(Team chúng tôi hiện đang chạy 100% công suất. Để nhận thêm task mới này, chúng tôi bắt buộc phải lùi lại một task ưu tiên khác.)*

## 3. Đề xuất Hướng tiếp cận cuốn chiếu (Phase-Based)

Thay vì nói "không" một cách thẳng thừng, hãy đề xuất làm nó ở giai đoạn sau. Cách này giữ cho mối quan hệ hợp tác luôn tích cực.

- "I suggest we put this request in our product backlog and prioritize it for Phase 2." *(Tôi đề xuất chúng ta đưa yêu cầu này vào product backlog và ưu tiên làm nó ở Giai đoạn 2.)*
- "Can we launch the core features first, and then add this enhancement in a fast-follow update?" *(Chúng ta có thể launch các tính năng cốt lõi trước, rồi thêm phần nâng cấp này trong một bản cập nhật nhanh sau đó được không?)*
- "Let's capture this requirement in a separate Jira ticket so we don't lose track of it, but keep our focus on the current release." *(Hãy ghi nhận yêu cầu này vào một ticket Jira riêng để không bị quên, nhưng vẫn giữ sự tập trung vào bản release hiện tại.)*

## 4. Kích hoạt Quy trình Kiểm soát Thay đổi (Change Control)

Nếu tính năng mới bắt buộc phải có, hãy giải thích rằng kế hoạch dự án cần được cập nhật và ký duyệt lại một cách chính thức.

- "If this is a must-have for the upcoming launch, we will need to adjust our release date." *(Nếu đây là thứ bắt buộc phải có cho đợt launch sắp tới, chúng ta sẽ cần phải điều chỉnh lại ngày release.)*
- "To accommodate this request, we should run a formal estimation and update the project proposal." *(Để đáp ứng yêu cầu này, chúng ta nên chạy một đợt estimate chính thức và cập nhật lại đề xuất dự án.)*
- "Let's discuss this in a change-control meeting this Friday to decide how to adjust the budget and schedule." *(Chúng ta hãy thảo luận việc này trong buổi họp kiểm soát thay đổi vào thứ Sáu tuần này để quyết định cách điều chỉnh ngân sách và lịch trình.)*

## 5. Mẫu câu từ chối khéo léo và an toàn

- **Khi PM yêu cầu "sửa nhanh cái này":** "Although it looks like a small change on the frontend, it requires major changes to our database schema. I recommend we defer this until after our initial release." *(Mặc dù nhìn thì có vẻ là một thay đổi nhỏ ở frontend, nhưng nó yêu cầu thay đổi rất lớn ở schema database. Tôi khuyên chúng ta nên hoãn việc này lại cho đến sau đợt release đầu tiên.)*
- **Khi khách hàng nhồi thêm tính năng giữa sprint:** "We are currently in the middle of our sprint, and our scope is locked. Let's discuss this during the next sprint planning meeting." *(Chúng tôi hiện đang ở giữa sprint và scope đã được khóa. Hãy thảo luận việc này trong buổi họp planning sprint tới nhé.)*
- **Khi yêu cầu thay đổi 180 độ:** "Given that these requirements are substantially different from the original plan, we need to pause development and re-estimate the entire module." *(Vì các yêu cầu này khác biệt về mặt bản chất so với kế hoạch ban đầu, chúng tôi cần tạm dừng phát triển và estimate lại toàn bộ module.)*
