# Thuyết phục sếp/team cho phép Refactor Code

Refactor code (cấu trúc lại code) là hoạt động cốt lõi để duy trì hệ thống chạy ổn định lâu dài, nhưng quản lý và Product Owners (POs) thường chỉ ưu tiên các tính năng mới mang lại doanh thu ngay lập tức. Để thuyết phục họ đồng ý refactor, bạn phải học cách "dịch" các cải tiến kỹ thuật sang ngôn ngữ của giá trị kinh doanh: tốc độ phát triển, giảm thiểu rủi ro, phòng ngừa bug và tiết kiệm chi phí.

## 1. Chuyển dịch Ngôn ngữ Kỹ thuật sang Giá trị Kinh doanh

Tuyệt đối tránh dùng những từ mang tính chủ quan như "code xấu quá", "module viết lộn xộn" hay "viết lại cho sạch" khi nói chuyện với các quản lý phi kỹ thuật. Thay vào đó, hãy đóng khung yêu cầu của bạn xoay quanh năng suất, khả năng mở rộng và tính an toàn.

| Câu Dev hay nói (Nên tránh) | Quản lý nghe thấy (Tiêu cực) | Cách diễn đạt hướng kinh doanh (Nên dùng) |
| :--- | :--- | :--- |
| "The legacy code is a mess, we need to rewrite it." *(Code cũ rác quá, tụi em cần viết lại.)* | "Họ đang muốn lãng phí thời gian để sửa cho đẹp mắt." | "The current module complexity has increased our **friction rate**. Refactoring this block will speed up feature delivery in this module by 30%." *(Độ phức tạp của module hiện tại làm tăng **tỷ lệ cản trở (friction rate)**. Refactor lại khối này sẽ đẩy nhanh 30% tốc độ làm tính năng mới trên module này.)* |
| "We need to clean up these database tables." *(Tụi em cần dọn dẹp lại mấy bảng database này.)* | "Công việc không cần thiết và có nguy cơ làm hỏng data hiện tại." | "Consolidating duplicate user database structures will reduce database query times and **prevent potential data corruption**." *(Gộp các cấu trúc DB trùng lặp của user sẽ giúp giảm thời gian truy vấn và **ngăn chặn nguy cơ hỏng dữ liệu**.)* |
| "I want to upgrade this state management library." *(Em muốn nâng cấp thư viện quản lý state này.)* | "Họ chỉ muốn nghịch công nghệ mới thôi." | "Migrating to the newer version resolves critical security patches and **improves page load times** on mobile devices." *(Nâng cấp lên version mới sẽ giúp vá các lỗ hổng bảo mật nghiêm trọng và **cải thiện thời gian load trang** trên các thiết bị di động.)* |

---

## 2. Áp dụng các Phép ẩn dụ tài chính & Đời sống

Sử dụng các phép ẩn dụ giúp các bên liên quan phi kỹ thuật dễ dàng hình dung cái giá phải trả nếu trì hoãn refactor.

- **Ẩn dụ Thẻ tín dụng (Lãi suất - Interest):** "Việc này giống như trả nợ thẻ tín dụng lãi suất cao vậy. Hiện tại, mỗi lần làm tính năng mới, chúng ta đang phải trả 'lãi suất' dưới dạng số giờ làm việc tăng thêm để fix bug. Nếu chúng ta trả bớt nợ gốc (refactor) ngay bây giờ, các tính năng tương lai sẽ tốn ít thời gian phát triển hơn."
- **Ẩn dụ Xây dựng (Móng nhà - Foundation):** "Hiện tại, chúng ta đang cố xây tầng 3 trên một cái móng nhà bằng gỗ đã mục yếu. Trước khi thêm các phòng mới (tính năng), chúng ta phải gia cố lại móng (refactor) để tránh việc toàn bộ hệ thống bị sập khi chịu tải lớn."
- **Ẩn dụ Con đường bùn lầy (Friction):** "Phát triển tính năng ở module này giống như đang chạy trong vũng bùn sâu vậy. Chúng ta vẫn di chuyển được, nhưng tốn gấp đôi sức lực. Refactor là việc trải nhựa đường để cả team có thể chạy với tốc độ tối đa."

---

## 3. Mẫu Đề xuất Refactor 5 phần chuẩn (The Jira Template)

Khi đề xuất một task refactor trong buổi họp sprint planning, hãy viết một đề xuất ngắn gọn ngay trong ticket Jira theo cấu trúc sau:

1. **Objective (Mục tiêu):** Khối kỹ thuật nào cần được refactor?
2. **Business Impact (Ảnh hưởng kinh doanh):** Việc này giúp ích gì cho sản phẩm/công ty?
3. **Scope (Phạm vi):** Những phần nào của codebase sẽ bị thay đổi (và phần nào sẽ giữ nguyên)?
4. **Estimation & Capacity (Ước lượng):** Cần bao nhiêu thời gian? (ví dụ: "15% công suất sprint của team").
5. **Risk Mitigation (Giảm thiểu rủi ro):** Làm sao để đảm bảo không làm hỏng các tính năng cũ? (ví dụ: "Viết test trước khi sửa code").

### Ví dụ mô tả Jira thực tế:
> **Objective:** Refactor the legacy payment checkout service. *(Refactor service checkout thanh toán cũ.)*
>
> **Business Impact:** Reduces checkout processing latency by 500ms, directly reducing cart abandonment rates. It also unifies payment methods, making the integration of Apple Pay in Q3 twice as fast. *(Giảm 500ms độ trễ xử lý thanh toán, giảm trực tiếp tỷ lệ bỏ giỏ hàng. Nó cũng đồng nhất các phương thức thanh toán, giúp việc tích hợp Apple Pay trong quý 3 nhanh hơn gấp đôi.)*
>
> **Scope:** Limited to the checkout handler logic. Database schemas will not be modified. *(Giới hạn trong logic xử lý checkout. Sơ đồ database giữ nguyên không sửa đổi.)*
>
> **Estimation:** 3 story points (approximately 2 days of development). *(3 story points - tương đương khoảng 2 ngày dev.)*
>
> **Risk Mitigation:** Protected by existing E2E cypress tests. We will deploy behind a feature flag to allow instant rollback if necessary. *(Được bảo vệ bởi các bài test E2E Cypress sẵn có. Chúng tôi sẽ triển khai ẩn sau một feature flag để có thể rollback ngay lập tức nếu cần thiết.)*

---

## 4. Các lỗi cần tránh khi thuyết phục quản lý

- **Lỗi 1: Đề xuất một kế hoạch "Đập đi xây lại toàn bộ" (Full Rewrite).**
  - *Tại sao:* Đập đi viết lại toàn bộ cực kỳ rủi ro và hiếm khi hoàn thành đúng hạn.
  - *Khắc phục:* Luôn đề xuất **refactor cuốn chiếu (incremental refactoring)** - làm từng phần nhỏ song song với việc phát triển tính năng mới.
- **Lỗi 2: Không đo đạc hiệu năng trước và sau khi tối ưu.**
  - *Tại sao:* Quản lý thích các con số thực tế, không thích phỏng đoán mơ hồ.
  - *Khắc phục:* Đưa ra số liệu cụ thể (ví dụ: "Endpoint này phản hồi mất trung bình 1.2s; mục tiêu của chúng ta là đưa nó về 400ms").
- **Lỗi 3: Refactor nhưng không viết test.**
  - *Tại sao:* Nếu bạn làm sập hệ thống sau khi refactor, quản lý sẽ hoàn toàn mất niềm tin vào các đề xuất refactor sau này.
  - *Khắc phục:* Luôn ghi chú rõ: "Chúng tôi sẽ viết bài test bao phủ trước khi thay đổi logic code."

---

## 5. Kịch bản thương lượng thời gian Refactor thực tế

Một Tech Lead đang thảo luận về phạm vi sprint tiếp theo với một Product Owner luôn ưu tiên tính năng mới.

### 👥 Nhân vật:
- **Đức** (Tech Lead)
- **Sarah** (Product Owner)

### 💬 Đoạn đối thoại:
- **Sarah**: "Hi Duc, looking at the draft backlog for Sprint 12, I see you added a task called 'Refactor user permission controller.' We have three critical feature requests from the sales team that I really need to fit in. Can we push this refactoring to next month?" *(Chào Đức, nhìn vào danh sách backlog dự kiến cho Sprint 12, tôi thấy bạn đã thêm một task là 'Refactor controller phân quyền user'. Chúng ta đang có 3 yêu cầu tính năng cực kỳ quan trọng từ team sales cần làm gấp. Chúng ta dời việc refactor này sang tháng sau được không?)*
- **Đức**: "I understand the sales team's features are high priority, Sarah. However, delaying this refactoring is going to create a major blocker for those exact features. The current permissions logic is heavily hardcoded." *(Tôi hiểu các tính năng của team sales có độ ưu tiên cao, Sarah. Tuy nhiên, việc trì hoãn refactor lần này sẽ tạo ra một điểm nghẽn (blocker) lớn cho chính các tính năng đó. Logic phân quyền hiện tại đang bị code cứng (hardcode) rất nhiều.)*
- **Sarah**: "How so? It seems to be working fine for current users." *(Sao lại thế? Tôi thấy nó vẫn đang chạy bình thường cho các user hiện tại mà.)*
- **Đức**: "It works for our basic user roles, but the legacy code is very rigid. If we try to build the new enterprise granular permissions on top of it, development will take twice as long, and we run a high risk of exposing security loopholes." *(Nó chạy ổn với các vai trò user cơ bản, nhưng code cũ rất cứng nhắc. Nếu chúng ta cố xây dựng hệ thống phân quyền chi tiết (granular permissions) cho khách hàng doanh nghiệp lớn đè lên nó, thời gian phát triển sẽ lâu gấp đôi, và chúng ta phải đối mặt với rủi ro bảo mật rất cao.)*
- **Sarah**: "I see. Security is definitely a concern. But how much time will this take away from the roadmap?" *(Tôi hiểu rồi. Bảo mật chắc chắn là mối bận tâm lớn. Nhưng việc này sẽ làm chậm roadmap của chúng ta mất bao lâu?)*
- **Đức**: "We aren't proposing a full rewrite. We’ve broken this down into three incremental steps. For this sprint, we only need to allocate about 15% of our capacity—about 2 days of development. This will pave the way for us to build the enterprise features much faster in the following sprint." *(Tụi em không đề xuất viết lại toàn bộ. Tụi em đã chia việc này ra làm 3 bước nhỏ cuốn chiếu. Trong sprint này, tụi em chỉ cần khoảng 15% công suất của team—tương đương khoảng 2 ngày dev. Việc này sẽ mở đường để chúng ta code các tính năng doanh nghiệp nhanh hơn nhiều ở sprint tiếp theo.)*
- **Sarah**: "Okay, that sounds manageable. If spending 2 days now saves us time and prevents security risks on the upcoming features, let's include it. Can you make sure we have a rollback plan in place?" *(Được rồi, nghe có vẻ khả thi. Nếu bỏ ra 2 ngày bây giờ giúp tiết kiệm thời gian và ngăn ngừa rủi ro bảo mật cho các tính năng sắp tới thì hãy đưa nó vào sprint này. Bạn đảm bảo có kế hoạch rollback phòng hờ chứ?)*
- **Đức**: "Absolutely. We will deploy it behind a feature flag, so we can disable the changes instantly if we see any regression bugs in staging. I'll write down the QA verification steps in the ticket as well." *(Chắc chắn rồi. Tụi em sẽ deploy ẩn sau feature flag, nên có thể tắt cập nhật ngay lập tức nếu thấy lỗi suy thoái (regression bug) trên staging. Em cũng sẽ viết rõ các bước xác thực cho QA trong ticket.)*
- **Sarah**: "Perfect. Let's add it to the sprint. Thanks for the explanation, Duc." *(Tuyệt vời. Vậy cứ đưa nó vào sprint đi. Cảm ơn phần giải thích của bạn nhé, Đức.)*
