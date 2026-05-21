# Các buổi họp Agile & Scrum (Daily English)

Các buổi họp Scrum (Sprint Planning, Daily Standup, Backlog Refinement, và Retrospectives) là những nơi bạn cần nói tiếng Anh nhiều nhất. Bạn sẽ cần ước lượng công việc (estimate), làm rõ yêu cầu (clarify requirements), và thảo luận về các vấn đề gặp phải. Hãy giữ ngôn từ rõ ràng, hợp tác và chuyên nghiệp.

---

## 1. Tiếng Anh Học Thuật vs. Tiếng Anh Daily trong các buổi họp Scrum

Tránh nói như đọc sách lý thuyết Agile. Hãy dùng các câu nói thực tế và tự nhiên.

| ❌ Học thuật / Quá trang trọng (Nên tránh) | 🟢 Daily & Giao tiếp (Nên dùng) |
| :--- | :--- |
| "We need to perform a collaborative refinement session on our backlog to adjust priority vectors." | "Let's review the backlog and prioritize the most important tickets." *(Hãy rà soát lại backlog và ưu tiên các ticket quan trọng nhất.)* |
| "I recommend we initiate a spike task to research this technical complexity." | "Let's create a spike to research this first." *(Tạo một task spike để nghiên cứu cái này trước nhé.)* |
| "Our capacity bounds prevent us from committing to this scope of deliverables." | "We don't have enough capacity to take on this task this sprint." *(Sprint này team mình không đủ capacity để nhận thêm task này.)* |
| "We experienced significant scope modifications midway through our iteration." | "We had some scope creep in the middle of the sprint." *(Chúng ta bị thay đổi yêu cầu phát sinh ở giữa sprint.)* |

---

## 2. Các thuật ngữ Scrum cốt lõi cần nhớ

- **Story Points:** Điểm story. Đơn vị đo lường độ khó hoặc khối lượng công việc của một ticket (thường tính theo dãy Fibonacci: 1, 2, 3, 5, 8, 13).
- **Spike:** Task nghiên cứu/thử nghiệm kỹ thuật trước khi đưa ra estimate chính thức cho công việc. ("We need to do a spike on the payment gateway first.")
- **Capacity:** Tổng năng lực làm việc tối đa của team trong một sprint (tính bằng giờ hoặc điểm, sau khi trừ đi ngày nghỉ phép, họp hành).
- **Velocity:** Tốc độ trung bình (số lượng điểm story points) mà team hoàn thành được trong mỗi sprint.
- **Scope Creep:** Hiện tượng phát sinh/thay đổi yêu cầu sau khi sprint đã bắt đầu và khóa scope.
- **Acceptance Criteria (AC):** Tiêu chí nghiệm thu. Danh sách các yêu cầu cụ thể mà một ticket phải đạt được để được coi là "Done".

---

## 3. Góp ý họp Retrospective: Phương pháp "Start, Stop, Keep"

Trong buổi họp Retrospective (rút kinh nghiệm cuối sprint), thay vì đổ lỗi hoặc nói chung chung, hãy dùng công thức 3 phần đơn giản này để đưa ra đề xuất cải tiến:

1.  **Start (Bắt đầu làm gì):** Team nên bắt đầu thực hiện hành động gì mới?
    *   *"We should **start** writing unit tests for our core helpers."* (Chúng ta nên bắt đầu viết unit test cho các hàm helper cốt lõi.)
2.  **Stop (Ngừng làm gì):** Team nên ngừng làm việc gì đang gây ảnh hưởng xấu?
    *   *"We should **stop** adding new tasks to the sprint without the PM's approval."* (Chúng ta nên ngừng tự ý thêm task vào sprint mà không có sự duyệt của PM.)
3.  **Keep (Duy trì làm gì):** Việc gì tốt đang làm và nên duy trì tiếp tục?
    *   *"We should **keep** doing short code review sessions in the morning."* (Chúng ta nên duy trì việc review code nhanh vào mỗi buổi sáng.)

---

## 4. Mẫu câu điền vào chỗ trống (Templates)

### Mẫu A: Hỏi rõ về Acceptance Criteria (Khi họp Planning/Refinement)
Dùng khi mô tả trên Jira quá sơ sài hoặc khó hiểu.
> "Hi **[Tên Product Owner]**,
>
> I'm looking at ticket **[Mã ticket, ví dụ: T-123]** for the **[tên tính năng, ví dụ: user profile page]**.
>
> The acceptance criteria are a bit vague. Could you clarify **[câu hỏi của bạn, ví dụ: what happens when the user clicks 'save' without making changes]**?
>
> I want to make sure we are on the same page before estimating it."

### Mẫu B: Đề xuất làm task Spike (Nghiên cứu trước, làm sau)
Dùng khi task quá mơ hồ hoặc dùng công nghệ mới tinh mà bạn chưa chắc chắn cách làm.
> "I think **[tên/mã ticket]** has too many unknowns right now. We don't know if **[vấn đề chưa rõ, ví dụ: the library supports OAuth2]**.
>
> Instead of pointing it now, I suggest we create a **[số ngày, ví dụ: 1-day / 2-day]** **spike** to research the integration.
>
> Once we have the research done, we can estimate it accurately in the next planning session."

---

## 5. Kịch bản hội thoại thực tế: Buổi họp Backlog Refinement (Làm mịn backlog)

Đoạn hội thoại tự nhiên giữa **Đức (Product Owner - PO)**, **Huy (Frontend Dev)**, và **Linh (Backend Dev)** khi đang thảo luận về độ khó của ticket Checkout.

> **Duc (PO):** "Alright, let's look at the checkout integration ticket. It's currently unpointed. Huy, what do you think?"
> *(Được rồi, chúng ta cùng xem ticket tích hợp thanh toán (checkout). Hiện tại nó chưa được chấm điểm. Huy nghĩ sao?)*
>
> **Huy (Frontend):** "I looked at the requirements. The UI is simple, but the acceptance criteria say we need to support three different local payment wallets. That makes it much larger."
> *(Em xem qua yêu cầu rồi. Giao diện thì đơn giản, nhưng tiêu chí nghiệm thu yêu cầu hỗ trợ tới 3 ví điện tử địa phương khác nhau. Như thế thì task lớn hơn nhiều đấy.)*
>
> **Linh (Backend):** "From the backend side, we haven't integrated with those wallet APIs before. There are a lot of unknowns regarding their webhook responses."
> *(Về phía backend thì tụi em chưa từng tích hợp với API của các ví đó bao giờ. Có rất nhiều điểm chưa rõ về phản hồi webhook từ phía họ.)*
>
> **Huy (Frontend):** "Agreed. I don't think we can estimate this accurately yet. Can we create a spike first? Linh can research the wallet APIs, and I can design the payment UI state."
> *(Đồng ý. Em nghĩ lúc này chưa thể estimate chính xác được. Chúng ta tạo một spike trước được không? Linh sẽ nghiên cứu API của các ví, còn em thiết kế giao diện UI payment.)*
>
> **Duc (PO):** "That makes sense. Let's split this user story. I'll create a 3-point spike for this sprint, and we will pull the actual implementation into the next sprint."
> *(Hợp lý đấy. Vậy mình chia nhỏ user story này ra nhé. Tôi sẽ tạo một task spike 3 điểm cho sprint này, và sẽ đưa phần code thực tế sang sprint sau.)*
>
> **Linh (Backend):** "Awesome. That works for me. I'll start the research as soon as the sprint begins."
> *(Tuyệt vời. Phương án đó ổn với em. Em sẽ bắt đầu nghiên cứu ngay khi sprint bắt đầu.)*
