# THƯƠNG LƯỢNG DEADLINE & PHẠM VI

## Cách từ chối khéo, đề xuất phương án thay thế, và đạt được thỏa thuận về tiến độ với PM và Khách hàng

> **Mục đích của tài liệu này**
>
> - Nhận biết khi nào deadline không thực tế và học khi nào nên thương lượng
> - Xây dựng lập luận dựa trên dữ liệu để hỗ trợ việc thay đổi tiến độ
> - Sử dụng khung làm việc có cấu trúc: công nhận, trình bày dữ liệu, đưa ra lựa chọn
> - Đề xuất giao hàng theo giai đoạn, giảm phạm vi, hoặc tăng nhân sự sebagai các phương án thay thế
> - Xử lý các tình huống ngày cố định và ghi lại mọi thỏa thuận một cách chuyên nghiệp

---

# 1. KHI NÀO NÊN THƯƠNG LƯỢNG

Không phải mọi deadline gấp đều cần thương lượng. Điều quan trọng là nhận biết dấu hiệu khi deadline thực sự không thực tế so với chỉ là tham vọng.

### Dấu Hiệu Deadline Không Thực Tế

- "The timeline was set **without consulting the engineering team**, so we should revisit it before committing." (Timeline được đặt ra **mà không tham khảo ý kiến team kỹ thuật**, nên chúng ta nên xem xét lại trước khi cam kết.)
- "This feature requires a **third-party integration we have never worked with before**, making estimation unreliable." (Tính năng này yêu cầu **tích hợp bên thứ ba mà chúng ta chưa từng làm**, khiến việc ước lượng không đáng tin cậy.)
- "We have **three other high-priority items** in the same sprint. Something has to give." (Chúng ta có **3 item ưu tiên cao khác** trong cùng sprint. Phải có cái nào đó phải nhường.)
- "The **requirements are still being finalized**, so we can't accurately estimate the effort yet." (**Yêu cầu vẫn đang được chốt**, nên chúng ta chưa thể ước lượng chính xác công sức.)
- "We need at least **two weeks of QA and UAT**, but the current schedule only allocates three days." (Chúng ta cần ít nhất **2 tuần cho QA và UAT**, nhưng lịch hiện tại chỉ phân bổ 3 ngày.)

### Cân Nhắc Theo Giai Đoạn Dự Án

- "During the **discovery phase**, we should define an acceptable timeline range rather than a fixed date." (Trong **giai đoạn khám phá**, chúng ta nên xác định một khoảng thời gian chấp nhận được thay vì một ngày cố định.)
- "In **production incidents**, short timelines are expected. But for planned features, we should have proper lead time." (Trong **sự cố production**, timeline ngắn là bình thường. Nhưng với tính năng đã lên kế hoạch, chúng ta cần có thời gian chuẩn bị phù hợp.)
- "The **migration project** has too many unknowns. We should pad the estimate by at least 30%." (**Dự án migration** có quá nhiều thứ chưa biết. Chúng ta nên cộng thêm ít nhất 30% vào ước lượng.)
- "If we're still in **design review**, it's too early to commit to a release date for development." (Nếu chúng ta vẫn đang ở giai đoạn **design review**, thì quá sớm để cam kết ngày release cho development.)
- "This is a **greenfield project** with no historical data. Let's use a two-sprint buffer for the first iteration." (Đây là **dự án mới hoàn toàn** không có dữ liệu lịch sử. Hãy dùng buffer 2 sprint cho lần lặp đầu tiên.)

### Khi KHÔNG Nên Thương Lượng

- "This is a **critical security patch**. We should drop everything and ship it immediately." (Đây là **bản vá bảo mật quan trọng**. Chúng ta nên bỏ hết mọi thứ và ship ngay.)
- "The **regulatory compliance deadline** is legally mandated. We can't move it." (**Deadline tuân thủ quy định** là bắt buộc theo luật. Chúng ta không thể dời.)
- "This is a **production outage affecting paying customers**. All hands on deck." (Đây là **sự cố production ảnh hưởng đến khách hàng đang trả phí**. Tất cả cùng vào cuộc.)
- "The client already **contractually committed** this date to their stakeholders. We need to figure out how to deliver." (Khách hàng đã **cam kết theo hợp đồng** ngày này với các bên liên quan của họ. Chúng ta cần tìm cách hoàn thành.)

---

# 2. CHUẨN BỊ LẬP LUẬN

Đừng bao giờ bước vào cuộc thương lượng mà không chuẩn bị. Dữ liệu luôn thắng ý kiến cá nhân.

### Lập Luận Dựa Trên Dữ Liệu

- "Based on **historical data**, similar features took our team 8-10 working days, not the 4 days currently allocated." (Dựa trên **dữ liệu lịch sử**, các tính năng tương tự đã mất 8-10 ngày làm việc, không phải 4 ngày như hiện tại.)
- "Our **velocity over the last three sprints** has been 34-38 story points. This sprint is loaded with 55 points." (**Velocity trong 3 sprint gần nhất** của chúng ta là 34-38 story points. Sprint này lại chứa đến 55 points.)
- "The last time we built a comparable module, it required **3 developers for 2 weeks**, including testing." (Lần trước khi xây dựng module tương đương, cần **3 dev trong 2 tuần**, bao gồm cả testing.)
- "According to our **bug tracking data**, features rushed without proper QA have a 40% higher defect rate." (Theo **dữ liệu bug tracking**, các tính năng làm vội không có QA đúng mức có tỷ lệ lỗi cao hơn 40%.)
- "We have **Jira tickets from the previous quarter** showing this type of work consistently exceeds initial estimates." (Chúng ta có **Jira tickets từ quý trước** cho thấy loại công việc này luôn vượt ước lượng ban đầu.)

### Phân Tích Ước Lượng Nỗ Lực

- "Here's the breakdown: **backend API (3 days), frontend integration (2 days), database schema changes (1 day), testing (2 days)**. That's 8 working days minimum." (Đây là phân tích: **backend API (3 ngày), tích hợp frontend (2 ngày), thay đổi database schema (1 ngày), testing (2 ngày)**. Tối thiểu là 8 ngày làm việc.)
- "I've accounted for **code review time (1 day), QA regression testing (1 day), and deployment (0.5 day)**." (Tôi đã tính **thời gian code review (1 ngày), QA regression testing (1 ngày), và deployment (0.5 ngày)**.)
- "We also need to factor in **environment setup and configuration**, which typically takes half a day." (Chúng ta cũng cần tính đến **cài đặt môi trường**, thường mất nửa ngày.)
- "The **documentation and knowledge transfer** will require an additional day if we want the team to maintain it properly." (**Tài liệu và bàn giao kiến thức** sẽ cần thêm 1 ngày nếu muốn team duy trì tốt.)

### Đánh Giá Rủi Ro

- "There's a **high-risk dependency** on the payment provider's sandbox, which has been unreliable in the past." (Có **dependency rủi ro cao** vào sandbox của nhà cung cấp thanh toán, vốn không ổn định trong quá khứ.)
- "If the **design team doesn't deliver final mockups by Wednesday**, the entire timeline shifts by 2 days." (Nếu **team design không giao mockup cuối cùng trước thứ Tư**, toàn bộ timeline sẽ lệch 2 ngày.)
- "We're using a **new library version** that hasn't been battle-tested. I'd budget extra time for debugging." (Chúng ta đang dùng **phiên bản thư viện mới** chưa được thử thách. Tôi sẽ dành thêm thời gian cho debugging.)
- "The **data migration script** needs to handle 2 million records. If it fails, rollback will take at least a day." (**Script migration dữ liệu** cần xử lý 2 triệu bản ghi. Nếu thất bại, rollback sẽ mất ít nhất 1 ngày.)
- "One of our **senior developers is on PTO next week**, which reduces our capacity by roughly 25%." (Một **senior dev sẽ nghỉ PTO tuần tới**, làm giảm capacity khoảng 25%.)

---

# 3. KHUNG THƯƠNG LƯỢNG

Sử dụng khung 3 bước mỗi khi thương lượng: Công nhận ràng buộc, trình bày dữ liệu, và đưa ra lựa chọn.

### Bước 1: Công Nhận Ràng Buộc

- "I understand that **the launch date is important for the marketing campaign**, and I want to help us get there." (Tôi hiểu rằng **ngày ra mắt quan trọng cho chiến dịch marketing**, và tôi muốn giúp chúng ta đạt được.)
- "I hear you. The **end-of-quarter target is critical for the business**, and I'm committed to finding a solution." (Tôi nghe bạn. **Mục tiêu cuối quý rất quan trọng cho business**, và tôi cam kết tìm giải pháp.)
- "I appreciate the urgency. **The client presentation is in two weeks**, and we all want to show a solid demo." (Tôi đánh giá cao sự cấp bách. **Buổi thuyết trình với khách hàng là trong 2 tuần**, và tất cả đều muốn show một bản demo chất lượng.)
- "I know the **CEO promised this feature at the conference**. Let me see what we can realistically deliver." (Tôi biết **CEO đã hứa tính năng này tại hội nghị**. Để tôi xem chúng ta thực tế có thể giao những gì.)
- "Absolutely, I get why **getting this into the Q3 release** matters. Let's work through the options together." (Chắc chắn rồi, tôi hiểu tại sao **đưa vào bản release Q3** lại quan trọng. Hãy cùng xem qua các lựa chọn.)

### Bước 2: Trình Bày Dữ Liệu

- "Here's what I've found: the feature requires **approximately 120 developer-hours**, and we have 3 developers available for 2 weeks, which gives us **240 hours total** but only about **160 hours of focused feature work** after meetings and overhead." (Đây là những gì tôi tìm ra: tính năng cần **khoảng 120 giờ dev**, và chúng ta có 3 dev trong 2 tuần, tức **240 giờ tổng** nhưng chỉ khoảng **160 giờ làm feature thực tế** sau khi trừ họp và overhead.)
- "Based on our **sprint velocity and current backlog**, we can realistically complete about 60% of the requested scope by the target date." (Dựa trên **velocity và backlog hiện tại**, thực tế chúng ta chỉ hoàn thành khoảng 60% phạm vi yêu cầu vào ngày mục tiêu.)
- "I've mapped out the **critical path**, and the longest dependency chain is 9 working days. Even with parallelization, we can't compress it below 7 days." (Tôi đã lập **critical path**, và chuỗi dependency dài nhất là 9 ngày làm việc. Ngay cả song song hóa, không thể nén dưới 7 ngày.)
- "Our **QA team is fully booked** until next Wednesday, so even if we finish coding early, testing won't start until then." (**Team QA đã kín lịch** đến thứ Tư tuần sau, nên dù code xong sớm, testing cũng không bắt đầu trước đó.)

### Bước 3: Đưa Ra Lựa Chọn

- "I see three possible paths forward: **(A) extend the deadline by one week**, **(B) reduce scope to the core workflow only**, or **(C) bring in one more developer to parallelize the work**." (Tôi thấy 3 hướng đi: **(A) kéo dài deadline 1 tuần**, **(B) giảm phạm vi chỉ còn luồng chính**, hoặc **(C) thêm 1 dev để làm song song**.)
- "We could either **ship the full feature on the 20th**, or **ship the MVP on the 10th and follow up with enhancements on the 24th**." (Chúng ta có thể **ship toàn bộ tính năng vào ngày 20**, hoặc **ship MVP vào ngày 10 và bổ sung vào ngày 24**.)
- "If budget allows, we could **engage the contractor team** to handle the data migration while our team focuses on the UI." (Nếu ngân sách cho phép, chúng ta có thể **thuê team contractor** xử lý migration dữ liệu trong khi team tập trung vào UI.)
- "Another option: we **soft-launch to internal users first** on the target date, then do the full rollout the following week." (Một lựa chọn khác: **soft-launch cho nội bộ trước** vào ngày mục tiêu, rồi rollout đầy đủ tuần sau.)
- "I'd recommend we **re-prioritize the backlog** and move the notification system to the next sprint so we can focus on the dashboard." (Tôi đề xuất **sắp xếp lại ưu tiên backlog** và chuyển notification system sang sprint sau để tập trung vào dashboard.)

---

# 4. ĐỀ XUẤT TIMELINE THAY THẾ

Khi không thể đáp ứng deadline, hãy đề xuất một timeline thực tế với sự tự tin.

### Đề Xuất Timeline Thực Tế

- "Realistically, we could deliver the **complete feature by March 15th**, which gives us adequate time for development and testing." (Thực tế, chúng ta có thể giao **tính năng hoàn chỉnh vào 15 tháng 3**, đủ thời gian cho phát triển và testing.)
- "If we start today, I'd estimate **a working prototype in 5 days and the production-ready version in 10 days**." (Nếu bắt đầu hôm nay, tôi ước tính **prototype hoạt động trong 5 ngày và phiên bản production trong 10 ngày**.)
- "A more **sustainable timeline** would be 3 weeks. That gives us room for proper code review and QA without burning out the team." (Một **timeline bền vững hơn** sẽ là 3 tuần. Điều đó cho chúng ta không gian cho code review và QA đúng mức mà không burn out team.)
- "I'd like to propose **shifting the release to the following Tuesday** instead of Friday. That gives us the weekend as a buffer if anything comes up." (Tôi muốn đề xuất **dời release sang thứ Ba tuần sau** thay vì thứ Sáu. Nhờ đó có cuối tuần làm buffer nếu có vấn đề.)
- "Based on our capacity, **the earliest we can deliver with confidence is the 22nd**. Any earlier would require cutting scope." (Dựa trên capacity, **sớm nhất chúng ta có thể giao hàng tự tin là ngày 22**. Sớm hơn sẽ cần cắt giảm phạm vi.)

### Giải Thích Vì Sao Timeline Mới Khả Thi

- "This revised timeline accounts for **two rounds of QA testing** and one day for bug fixes between rounds." (Timeline sửa đổi này bao gồm **2 vòng QA testing** và 1 ngày sửa bug giữa các vòng.)
- "The extra 3 days give us **adequate time for performance testing**, which is critical for this high-traffic feature." (Thêm 3 ngày cho chúng ta **đủ thời gian cho performance testing**, rất quan trọng với tính năng traffic cao.)
- "This schedule includes a **buffer day for deployment issues**, which we've learned is necessary from past experience." (Lịch này bao gồm **ngày buffer cho vấn đề deployment**, điều chúng ta đã học là cần thiết từ kinh nghiệm.)
- "With this timeline, the team won't need to **work overtime**, which means better code quality and fewer bugs." (Với timeline này, team không cần **làm thêm giờ**, nghĩa là chất lượng code tốt hơn và ít bug hơn.)
- "I've built in **time for stakeholder review** so we can catch any misalignments before the final release." (Tôi đã tích hợp **thời gian cho stakeholder review** để phát hiện sai lệch trước release cuối cùng.)

### Trình Bày Đánh Đổi Timeline

- "If we take the extra week, we can include **automated tests**, which will save us maintenance time in the long run." (Nếu thêm 1 tuần, chúng ta có thể bao gồm **automated tests**, tiết kiệm thời gian bảo trì về lâu dài.)
- "The trade-off for rushing is that we'll **skip load testing**, and that's a risk for a feature handling 10,000 concurrent users." (Đánh đổi khi vội vã là chúng ta sẽ **bỏ qua load testing**, và đó là rủi ro cho tính năng xử lý 10,000 người dùng đồng thời.)
- "With 3 more days, we can implement **proper error handling and logging**, which will make debugging much easier post-launch." (Với thêm 3 ngày, chúng ta có thể triển khai **error handling và logging đúng cách**, giúp debug dễ hơn nhiều sau khi ra mắt.)

---

# 5. ĐỀ XUẤT GIẢM PHẠM VI THAY VÌ THAY ĐỔI DEADLINE

Khi ngày không thể dời, hãy đề xuất giảm những gì sẽ được giao.

### Đề Xuất Cắt Giảm Phạm Vi

- "If we need to hit the date, we could **reduce the scope to just the core CRUD operations** and skip the advanced filtering for now." (Nếu cần đạt deadline, chúng ta có thể **giảm phạm vi chỉ còn các thao tác CRUD cơ bản** và bỏ filtering nâng cấp tạm thời.)
- "To meet Friday's deadline, I recommend we **defer the PDF export feature** to the next release. The rest is on track." (Để kịp thứ Sáu, tôi đề xuất **hoãn tính năng xuất PDF** sang release sau. Phần còn lại đang đúng tiến độ.)
- "We could ship without the **bulk upload functionality**. Users can still add items one by one, and we add bulk in the follow-up." (Chúng ta có thể ship mà không có **chức năng tải lên hàng loạt**. Người dùng vẫn thêm từng cái một, và ta thêm hàng loạt ở bản sau.)
- "The **search autocomplete** is nice-to-have. If we cut that, we can deliver the rest of the search feature on time." (**Search autocomplete** là nice-to-have. Nếu cắt bỏ, chúng ta có thể giao phần còn lại đúng hạn.)
- "What if we **launch with the basic plan only** and add the premium and enterprise tiers in the next sprint?" (Nếu chúng ta **ra mắt chỉ với gói cơ bản** và thêm gói premium và enterprise ở sprint tiếp theo thì sao?)

### Cách Tiếp Cận MVP

- "Let's define the **minimum viable version**: user registration, login, and the dashboard. Everything else can be a fast-follow." (Hãy xác định **phiên bản khả dụng tối thiểu**: đăng ký, đăng nhập, và dashboard. Mọi thứ khác có thể theo sau nhanh.)
- "For the demo, we only need the **happy path to work end-to-end**. Edge cases and error states can come later." (Cho demo, chúng ta chỉ cần **happy path hoạt động từ đầu đến cuối**. Edge case và error state có thể làm sau.)
- "I suggest we build the **read-only version first**. Users can view their data, and we add edit/create capabilities in phase 2." (Tôi đề xuất xây dựng **phiên bản chỉ đọc trước**. Người dùng có thể xem dữ liệu, và ta thêm khả năng chỉnh sửa/tạo ở phase 2.)
- "The MVP should include: **authentication, the main list view, and detail page**. The settings page and notifications can wait." (MVP nên bao gồm: **authentication, trang danh sách chính, và trang chi tiết**. Trang cài đặt và thông báo có thể đợi.)
- "If we use **existing UI components instead of building custom ones**, we can cut development time in half for the MVP." (Nếu dùng **UI components có sẵn thay vì xây custom**, chúng ta giảm một nửa thời gian phát triển MVP.)

### Ưu Tiên Giữ Lại vs. Cắt Bỏ

- "I've categorized the features into **must-have, should-have, and nice-to-have**. Let's agree to only ship must-haves for the first release." (Tôi đã phân loại tính năng thành **must-have, should-have, và nice-to-have**. Hãy đồng ý chỉ ship must-have cho bản release đầu.)
- "The **payment integration is the highest business value item**. Let's keep that and cut the social login feature." (**Tích hợp thanh toán có giá trị business cao nhất**. Hãy giữ nó và cắt tính năng social login.)
- "From a user perspective, **being able to create and view orders is critical**. The reporting dashboard is secondary." (Từ góc nhìn người dùng, **có thể tạo và xem đơn hàng là quan trọng**. Dashboard báo cáo là thứ yếu.)
- "I'd recommend keeping **the core workflow intact** and cutting the admin configuration panel. Admins can use the database directly for now." (Tôi đề xuất giữ **luồng chính nguyên vẹn** và cắt panel cấu hình admin. Admin có thể dùng database trực tiếp tạm thời.)
- "If we have to choose, the **mobile-responsive layout is more important than the dark mode theme**." (Nếu phải chọn, **layout responsive mobile quan trọng hơn theme dark mode**.)

---

# 6. THƯƠNG LƯỢNG THÊM NHÂN SỰ

Đôi khi giải pháp không phải là thêm thời gian mà là thêm người.

### Yêu Cầu Thêm Developer

- "If we add **one more backend developer to the team**, we could parallelize the API work and meet the original deadline." (Nếu thêm **một backend developer nữa vào team**, chúng ta có thể làm song song công việc API và đạt deadline ban đầu.)
- "Bringing in **someone from the platform team** to handle the infrastructure would free us to focus on feature development." (Kéo **ai đó từ team platform** vào xử lý hạ tầng sẽ giải phóng chúng ta tập trung vào phát triển tính năng.)
- "We could borrow a developer from Team B for **two weeks to handle the data migration** while we work on the UI." (Chúng ta có thể mượn dev từ Team B trong **2 tuần để xử lý migration dữ liệu** trong khi ta làm UI.)
- "If we can **onboard a contractor by Monday**, they could take on the reporting module and we'd hit the target date." (Nếu **onboard contractor được trước thứ Hai**, họ có thể nhận module báo cáo và chúng ta sẽ đạt ngày mục tiêu.)
- "Adding a **junior developer to handle the unit tests and documentation** would let the senior devs focus on the core logic." (Thêm **junior dev xử lý unit test và tài liệu** sẽ giúp senior dev tập trung vào logic chính.)

### Yêu Cầu Nguồn Lực Hỗ Trợ

- "If we can get a **dedicated QA engineer for this sprint**, we won't have to wait in the QA queue and can test continuously." (Nếu có **QA engineer chuyên trách cho sprint này**, chúng ta không cần chờ trong hàng đợi QA và có thể test liên tục.)
- "Having a **DevOps engineer on standby** during the release would cut deployment time from a full day to a few hours." (Có **DevOps engineer túc trực** trong lúc release sẽ giảm thời gian deploy từ cả ngày xuống vài giờ.)
- "If the **design team can provide a developer-ready Figma file** with all specs and assets by tomorrow, we save a day of back-and-forth." (Nếu **team design cung cấp file Figma sẵn sàng cho dev** với mọi spec và asset vào ngày mai, ta tiết kiệm 1 ngày qua lại.)
- "We need the **DBA to review and approve the schema changes** before we proceed. Can we expedite that review?" (Chúng ta cần **DBA review và approve schema changes** trước khi tiếp tục. Có thể đẩy nhanh review đó không?)
- "Could we get **priority access to the staging environment**? We're currently sharing it with two other teams." (Chúng ta có thể được **quyền truy cập ưu tiên vào staging environment** không? Hiện tại đang chia sẻ với 2 team khác.)

### Giải Thích ROI Của Thêm Nguồn Lực

- "Adding one developer for two weeks **costs less than missing the launch date**, which would delay revenue by a full quarter." (Thêm 1 dev trong 2 tuần **rẻ hơn là lỡ ngày ra mắt**, điều sẽ làm chậm doanh thu cả quý.)
- "The cost of **bringing in a contractor** is offset by the fact that we won't need to pay overtime for the rest of the team." (Chi phí **thuê contractor** được bù đắp bởi việc chúng ta không cần trả overtime cho phần còn lại của team.)
- "With the extra resource, we can deliver a **higher-quality product** that won't need emergency hotfixes in the first week." (Với nguồn lực thêm, chúng ta có thể giao **sản phẩm chất lượng cao hơn** mà không cần hotfix khẩn cấp trong tuần đầu.)
- "Investing in **proper testing now** saves us from expensive production incidents later. The ROI is clear." (Đầu tư vào **testing đúng mức ngay bây giờ** giúp tránh các sự cố production đắt đỏ sau này. ROI rất rõ ràng.)

---

# 7. ĐỀ XUẤT GIAO HÀNG THEO GIAI ĐOẠN

Chia sản phẩm thành các giai đoạn để cho thấy tiến độ trong khi quản lý kỳ vọng.

### Đề Xuất Kế Hoạch Giai Đoạn

- "I suggest a **two-phase approach**: Phase 1 delivers the core workflow by the 15th, and Phase 2 adds reporting and exports by the 30th." (Tôi đề xuất **cách tiếp cận 2 giai đoạn**: Giai đoạn 1 giao luồng chính trước 15, Giai đoạn 2 thêm báo cáo và xuất dữ liệu trước 30.)
- "We could do a **soft launch to 10% of users** on the target date, then do a full rollout a week later after we gather feedback." (Chúng ta có thể **soft launch cho 10% người dùng** vào ngày mục tiêu, rồi rollout đầy đủ 1 tuần sau khi thu thập feedback.)
- "How about we ship the **backend API first**, and then the frontend team builds the UI on top of it in the following sprint?" (Thế còn việc ship **backend API trước**, rồi team frontend xây UI trên đó ở sprint tiếp theo?)
- "Phase 1 could be the **internal tool for our team**, and Phase 2 opens it up to external clients once we've ironed out the issues." (Giai đoạn 1 có thể là **công cụ nội bộ cho team**, và Giai đoạn 2 mở rộng cho client bên ngoài khi đã khắc phục vấn đề.)
- "Let's do a **beta release to power users first**. They'll give us feedback, and we fix issues before the general availability launch." (Hãy **beta release cho power users trước**. Họ sẽ cho feedback, và ta sửa vấn đề trước khi ra mắt rộng rãi.)

### Bán Ý Tưởng Phương Pháp Phân Giai Đoạn

- "Phased delivery means **users get value sooner**, even if it's not the complete feature set." (Giao hàng theo giai đoạn nghĩa là **người dùng nhận được giá trị sớm hơn**, dù chưa phải toàn bộ tính năng.)
- "This approach lets us **gather real user feedback** before building the advanced features, so we build the right things." (Cách tiếp cận này cho phép chúng ta **thu thập feedback thực tế** trước khi xây tính năng nâng cao, đảm bảo xây đúng thứ cần.)
- "With phased delivery, the **risk is much lower**. If there's an issue in Phase 1, we catch it before building Phase 2 on top of it." (Với giao hàng theo giai đoạn, **rủi ro thấp hơn nhiều**. Nếu có vấn đề ở Giai đoạn 1, ta phát hiện trước khi xây Giai đoạn 2 trên đó.)
- "The client sees **tangible progress at each milestone**, which builds confidence in the project." (Khách hàng thấy **tiến độ hữu hình ở mỗi mốc**, giúp xây dựng niềm tin vào dự án.)
- "We can **adjust priorities between phases** based on what we learn, rather than being locked into a fixed plan." (Chúng ta có thể **điều chỉnh ưu tiên giữa các giai đoạn** dựa trên những gì học được, thay vì bị khóa vào kế hoạch cố định.)

### Ví Dụ Phân Tích Giai Đoạn

- "**Phase 1 (Week 1-2)**: User authentication, basic CRUD, simple list view. **Phase 2 (Week 3-4)**: Search, filters, pagination. **Phase 3 (Week 5-6)**: Reporting, exports, admin panel."
- "**MVP (Sprint 1)**: Single-page dashboard with static data. **V2 (Sprint 2)**: Real-time data with WebSockets. **V3 (Sprint 3)**: Customizable widgets and layout."
- "**Release 0.1**: API endpoints with mock data. **Release 0.2**: Connected to real database. **Release 1.0**: Full UI with error handling and tests."

---

# 8. XỬ LÝ TÌNH HUỐNG "NGÀY LÀ CỐ ĐỊNH"

Khi khách hàng hoặc business tuyệt đối không dời ngày, bạn cần các chiến lược khác.

### Công Nhận Mà Không Đầu Hàng

- "I understand the date is fixed. Let me **figure out the most we can realistically deliver** by then." (Tôi hiểu ngày là cố định. Để tôi **tìm xem nhiều nhất chúng ta thực tế giao được gì** vào lúc đó.)
- "The date stays. Got it. Let's have an **honest conversation about what quality level** we can achieve in that timeframe." (Ngày giữ nguyên. Rõ rồi. Hãy có một **cuộc trò chuyện thẳng thắn về mức chất lượng** mà chúng ta có thể đạt trong khung thời gian đó.)
- "If the launch date is non-negotiable, then **scope must be negotiable**. We can't fix both time and scope." (Nếu ngày ra mắt không thể thương lượng, thì **phạm vi phải có thể thương lượng**. Không thể cố định cả thời gian và phạm vi.)
- "I respect that the date can't move. In that case, I need **authority to make scope decisions** so we can hit the target." (Tôi tôn trọng việc ngày không thể dời. Trong trường hợp này, tôi cần **quyền quyết định về phạm vi** để đạt mục tiêu.)
- "Understood. To meet that date, I'll need **certain commitments from the team** and **quick decision-making from stakeholders**." (Đã hiểu. Để đạt deadline đó, tôi cần **cam kết nhất định từ team** và **quyết định nhanh từ stakeholders**.)

### Leo Thang Chuyên Nghiệp

- "I want to be transparent: meeting this date with the full scope **carries a significant risk of production issues**. I want to make sure leadership is aware." (Tôi muốn minh bạch: đạt deadline với toàn bộ phạm vi **mang rủi ro lớn về vấn đề production**. Tôi muốn đảm bảo leadership biết rõ.)
- "I've documented the risks of the current plan. **Can we schedule a 15-minute call with the director** to discuss trade-offs?" (Tôi đã ghi nhận rủi ro của kế hoạch hiện tại. **Chúng ta có thể sắp xếp cuộc gọi 15 phút với director** để thảo luận đánh đổi không?)
- "I'm raising this now so it's not a surprise later. **If we proceed as planned, there's a real chance we'll need a hotfix within 48 hours of launch.**" (Tôi nêu ra vấn đề này ngay để không bị bất ngờ sau này. **Nếu tiếp tục theo kế hoạch, có khả năng thực sự cần hotfix trong 48 giờ sau khi ra mắt.**)
- "I've done my best to make this work, but I need to **escalate this to the VP level**. The current plan puts the team at risk of burnout and the product at risk of failure." (Tôi đã cố hết sức, nhưng cần **leo thang lên cấp VP**. Kế hoạch hiện tại đặt team vào nguy cơ burnout và sản phẩm vào nguy cơ thất bại.)

### Khi Ngày Không Thể Dời, Làm Sao Cho Kịp

- "Here's my plan: **suspend all non-critical work**, bring in two additional developers, and run daily standups to remove blockers immediately." (Đây là kế hoạch của tôi: **tạm dừng mọi công việc không quan trọng**, kéo thêm 2 dev, và chạy daily standup để gỡ blocker ngay lập tức.)
- "To hit this date, we need to **implement a feature freeze by Thursday**. Anything not merged by then ships in the next release." (Để đạt deadline, cần **đóng băng tính năng (feature freeze) trước thứ Năm**. Bất cứ gì chưa merge sẽ ship ở release sau.)
- "I'm going to set up a **war room** with the core team for the next 5 days. No meetings, no distractions, just focused execution." (Tôi sẽ thiết lập **war room** với team cốt lõi trong 5 ngày tới. Không họp, không phân tâm, chỉ tập trung thực thi.)
- "Let's do a **code-complete by Wednesday**, then spend Thursday-Friday on **hardening, testing, and bug fixes only**." (Hãy **hoàn thành code trước thứ Tư**, rồi dành thứ Năm-thứ Sáu cho **hardening, testing, và chỉ sửa bug**.)
- "I'll take **personal ownership of the critical path items** and delegate everything else to the team." (Tôi sẽ **chịu trách nhiệm cá nhân cho các item critical path** và ủy quyền phần còn lại cho team.)

---

# 9. GHI NHẬN THỎA THUẬN

Sau mọi cuộc thương lượng, hãy gửi xác nhận bằng văn bản. Điều này bảo vệ tất cả và ngăn hiểu lầm.

### Mẫu Email: Xác Nhận Deadline Đã Thương Lượng

```
Subject: Follow-up: Revised Timeline for [Feature Name]

Hi [Name],

Thank you for the discussion today regarding the [Feature Name] timeline.
I want to confirm what we agreed on:

- **Revised delivery date**: [New Date]
- **Scope included in this release**: [List items]
- **Scope deferred to next release**: [List items]
- **Additional resources approved**: [If any]
- **Assumptions**: [List any dependencies, e.g., "Design delivers final mockups by [Date]"]

I'll send a progress update on [Check-in Date].

Best regards,
[Your Name]
```

### Mẫu Email: Xác Nhận Giảm Phạm Vi

```
Subject: Confirmed: Scope Adjustment for [Project Name]

Hi [Name],

Following our conversation, here's the confirmed scope for the [Date] release:

**In Scope (V1)**:
- [Feature A]
- [Feature B]
- [Feature C]

**Deferred to V2 (Target: [Date])**:
- [Feature D]
- [Feature E]

**Out of Scope**:
- [Feature F] (will be re-evaluated in Q3 planning)

Please reply with your confirmation so we can proceed.

Thanks,
[Your Name]
```

### Mẫu Chat: Xác Nhận Nhanh

- "Just to confirm what we discussed: **we'll deliver [X] by [Date]**, and [Y] will move to the next sprint. I'll follow up with an email." (Xác nhận lại: **chúng ta sẽ giao [X] trước [Ngày]**, và [Y] sẽ chuyển sang sprint sau. Tôi sẽ gửi email theo dõi.)
- "Summarizing our agreement: **deadline extended to [Date]**, scope unchanged, and I'll pull in an extra dev starting Monday." (Tóm tắt thỏa thuận: **deadline kéo dài đến [Ngày]**, phạm vi không đổi, và tôi sẽ kéo thêm dev từ thứ Hai.)
- "To recap: **scope reduced to MVP**, original deadline stays, and we'll do a follow-up sprint for the remaining features." (Tóm lại: **phạm vi giảm xuống MVP**, deadline giữ nguyên, và sẽ làm sprint bổ sung cho tính năng còn lại.)
- "Confirmed: **[Feature A] and [Feature B] are in scope** for this release. [Feature C] is deferred. I'll update the Jira board accordingly." (Xác nhận: **[Feature A] và [Feature B] nằm trong phạm vi** bản release này. [Feature C] bị hoãn. Tôi sẽ cập nhật Jira board.)
- "As discussed, **we'll do a phased delivery**: Phase 1 on [Date], Phase 2 on [Date]. I've updated the project plan." (Như đã thảo luận, **chúng ta sẽ giao hàng theo giai đoạn**: Giai đoạn 1 vào [Ngày], Giai đoạn 2 vào [Ngày]. Tôi đã cập nhật kế hoạch dự án.)

---

# 10. KỊCH BẢN THƯƠNG LƯỢNG HOÀN CHỈNH

### Kịch Bản 1: Thương Lượng Thêm Thời Gian Cho Tính Năng Phức Tạp

```
You:  "Hey [PM Name], do you have a few minutes to discuss the timeline for the reporting module?"

PM:   "Sure, what's up?"

You:  "I've been scoping out the work, and I want to flag that the current estimate of 5 days is
       likely too tight. The module requires aggregation queries across 4 tables, export to Excel
       and PDF, and a role-based access control layer."

PM:   "But the client is expecting this by the 20th."

You:  "I understand that. Here's what I'd suggest: we can deliver the dashboard with basic
       charts and table views by the 20th, and add the export and advanced filtering in a
       follow-up release on the 30th. That way the client still gets something to review."

PM:   "OK, let me check with the client. Can you send me a breakdown of what's in each phase?"

You:  "Absolutely. I'll email that to you within the hour."
```

### Kịch Bản 2: Từ Chối Deadline Từ Trên Xuống

```
Director:  "The board wants this feature live by end of month. Can your team make it happen?"

You:       "I appreciate the urgency from the board. Let me give you an honest assessment.
            Based on our team's velocity and the complexity of this feature, end of month is
            very tight. We'd be looking at roughly 200 developer-hours of work, and with our
            current commitments, we can allocate about 120 hours."

Director:  "What would it take to hit the date?"

You:       "Three options: one, extend to mid-next month and deliver the full scope. Two,
            reduce scope to the essential user flow and hit end of month. Three, bring in
            a contractor to augment the team. I'd recommend option two as the lowest-risk path."

Director:  "Let's go with option two. Set up a meeting to define what 'essential' means."

You:       "Great. I'll prepare a must-have vs. nice-to-have list for that meeting."
```

### Kịch Bản 3: Thương Lượng Với Khách Hàng Muốn Mọi Thứ Trước Thứ Sáu

```
Client:  "We need the full portal, including the admin panel, user management, and reporting
          dashboard, ready by this Friday."

You:     "I understand this is a priority for your team. Let me share what we can realistically
          deliver by Friday, and propose a plan for the rest."

Client:  "We really need everything."

You:     "I hear you. Here's the situation: the user-facing portal is nearly done and will be
          ready by Friday. The admin panel needs another week for proper testing, and the
          reporting dashboard is a two-week effort on its own. If we rush everything, we risk
          shipping buggy software that your users will encounter on day one."

Client:  "What if Friday is absolutely non-negotiable?"

You:     "Then here's what I recommend: we ship the user portal and basic admin functions on
          Friday. We add reporting the following Friday, and the advanced admin features the
          week after. You get something functional for your launch, and we ensure it's solid."

Client:  "OK, that could work. Send me the revised plan."
```

### Kịch Bản 4: Yêu Cầu Thêm Nguồn Lực

```
You:    "Hi [Manager], I want to discuss the Q2 project. We're currently tracking to miss
         the deadline by about 2 weeks based on our capacity."

Manager: "That's concerning. What's driving the delay?"

You:    "Two things: the API integration with the vendor has been more complex than expected,
         and one of our senior developers is out on parental leave for the next month.
         If we could bring in a contractor for 3 weeks to handle the integration work, we'd
         be back on track."

Manager: "What's the cost impact?"

You:    "Roughly [amount] for 3 weeks. But the cost of missing the launch date is estimated
         at [larger amount] in delayed revenue. So the ROI is clear. I can have a contractor
         onboarded by next Monday if we approve today."

Manager: "Send me the business case in an email and I'll get approval."
```

### Kịch Bản 5: Đề Xuất Giao Hàng Theo Giai Đoạn Để Tránh Trễ Deadline

```
You:    "I've been looking at the project timeline, and I want to propose a different approach
         that I think will work better for everyone."

PM:     "What did you have in mind?"

You:    "Instead of trying to deliver everything in one big release on the 30th, what if we
         break it into three smaller releases? Release 1 on the 15th with the core functionality,
         Release 2 on the 25th with search and filters, and Release 3 on the 5th with reporting.
         Users get value earlier, and we reduce the risk of a big-bang release going wrong."

PM:     "The client might not like getting an incomplete product first."

You:    "I'd frame it differently: the client gets to start using the product 2 weeks earlier
         than the original plan. And their feedback on the first release directly shapes what
         we build in releases 2 and 3. It's actually a better outcome for them."

PM:     "That's a fair point. Put together a phased delivery plan and I'll pitch it to the client."
```

### Kịch Bản 6: Xử Lý "Cứ Làm Thêm Giờ Là Được"

```
PM:     "Can the team just put in some extra hours to meet the deadline?"

You:    "I appreciate the suggestion. We can do a focused push for a few days, but I want to
         be transparent about the trade-offs. Overtime for more than a week leads to lower
         code quality, more bugs, and team burnout. The last time we did a crunch sprint,
         we spent the following sprint fixing bugs we introduced."

PM:     "But just this once?"

You:    "Here's what I'm comfortable with: we can extend our working hours for 3 days this
         week to close the gap. Beyond that, the risk to quality is too high. I'd rather we
         have an honest conversation about adjusting either the scope or the date. Which would
         you prefer to explore?"

PM:     "Let's look at what we can cut from scope."

You:    "Great. I've already prepared a prioritized list of features. Let's walk through it."
```

### Kịch Bản 7: Thương Lượng Khi Yêu Cầu Thay Đổi Giữa Sprint

```
You:    "Hi [PM], I need to raise a concern about the sprint scope. We received new requirements
         for the checkout flow yesterday that weren't in the original sprint plan."

PM:     "Yes, the client requested those changes. They said it was urgent."

You:    "I understand the urgency. But adding these changes means we now have approximately 30%
         more work in the sprint. We can't absorb that without making adjustments. I see three
         options: we remove some of the lower-priority items from this sprint, we extend the
         sprint by 3 days, or we split the checkout changes across two sprints."

PM:     "The client won't accept a delay on the checkout."

You:    "Then let's remove the notification feature and the user profile page from this sprint.
         Both can move to next sprint. That frees up enough capacity to absorb the checkout
         changes while keeping the sprint on track."

PM:     "OK, update the sprint board and I'll inform the client about the profile page."
```

### Kịch Bản 8: Thương Lượng Với Technical Lead Từ Team Khác

```
You:        "Hi [Tech Lead], I wanted to talk about the API contract for the integration our
             teams are working on."

Tech Lead:  "Sure, what's the issue?"

You:        "Your team's proposed timeline for the API is end of next month, but our frontend
             needs a stable endpoint at least a week before that to build and test against.
             Is there any way we could get a mock or stub API earlier?"

Tech Lead:  "We're pretty loaded this month. I don't think we can deliver the full API earlier."

You:        "I don't need the full implementation. Even a **mock server that returns hardcoded
             responses** with the correct data structure would be enough for us to start
             integration. Would that be feasible by the 15th?"

Tech Lead:  "A mock server... yeah, we could probably set that up in a day. I'll have one of
             our devs create a stub based on the contract we agreed on."

You:        "That would be perfect. Could you share the mock URL and documentation once it's
             ready? I'll make sure our team starts integration as soon as we have it."
```

---

# KẾT LUẬN

Thương lượng deadline không phải là nói "không" -- mà là tìm con đường tốt nhất cho tất cả. Các nguyên tắc chính là:

1. **Luôn mang theo dữ liệu.** Ý kiến có thể tranh luận; biểu đồ velocity, ước lượng lịch sử, và đánh giá rủi ro thì khó phản bác hơn.
2. **Đưa ra lựa chọn, không phải vấn đề.** Đừng chỉ nói "không làm được". Hãy nói "đây là 3 cách để giải quyết."
3. **Thương lượng sớm.** Càng sớm nêu quan ngại, càng nhiều lựa chọn. Chờ đến phút chót hạn chế tất cả.
4. **Ghi lại mọi thứ.** Email theo dõi sau mỗi cuộc thương lượng ngăn hiểu lầm và tạo trách nhiệm giải trình.
5. **Trung thực về rủi ro.** Nếu leadership chọn chấp nhận rủi ro, đó là quyết định của họ. Nhiệm vụ của bạn là đảm bảo họ được thông báo đầy đủ.

Nhớ: một kỹ sư giỏi giao phần mềm chất lượng. Một kỹ sư xuất sắc giao phần mềm chất lượng **và** quản lý kỳ vọng hiệu quả.
