# Báo tin xấu (Sập Server, Mất Data, Trễ Deadline)

Trong ngành IT, sự cố nghiêm trọng là điều không thể tránh khỏi. Server bị sập, database bị lỗi (corrupted), lỗ hổng bảo mật bị lộ, hoặc deadline bị trễ. Khi truyền đạt tin xấu cho khách hàng, ban quản lý hoặc các bên liên quan, phong cách giao tiếp của bạn cần đảm bảo:

1. **Trực diện và Minh bạch (Direct and Transparent)**: Thông báo vấn đề sớm, không che giấu sự thật.
2. **Khách quan và Bình tĩnh (Objective and Calm)**: Tập trung vào sự thật (facts), tránh hoảng loạn.
3. **Chịu trách nhiệm (Responsible and Accountable)**: Nhận trách nhiệm thay vì đổ lỗi cho người khác.
4. **Hướng tới giải pháp (Action-Oriented)**: Luôn đi kèm tin xấu với một kế hoạch phục hồi cụ thể.

---

## 1. Từ vựng & Cụm từ Khóa (Key Vocabulary & Collocations)

Trước khi học các câu giao tiếp, hãy nắm vững các cụm từ chuyên ngành sau:

| Thuật ngữ tiếng Anh           | Loại từ     | Ý nghĩa / Ngữ cảnh sử dụng                  | Ví dụ                                                                                                                                                  |
| :---------------------------- | :---------- | :------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Outage / Downtime**         | Danh từ     | Thời gian hệ thống bị sập, ngừng hoạt động  | "We are working to resolve the unexpected outage." _(Chúng tôi đang xử lý sự cố sập hệ thống ngoài ý muốn.)_                                           |
| **Data corruption**           | Danh từ     | Lỗi dữ liệu bị hỏng hoặc biến đổi sai lệch  | "The hardware failure led to data corruption in the user table." _(Lỗi phần cứng dẫn đến việc hỏng dữ liệu trong bảng user.)_                          |
| **To roll back**              | Cụm động từ | Quay trở lại phiên bản ổn định trước đó     | "We decided to roll back the deployment to version 1.4.0." _(Chúng tôi quyết định rollback bản deploy về version 1.4.0.)_                              |
| **To isolate the impact**     | Cụm động từ | Khoanh vùng/hạn chế vùng ảnh hưởng          | "We managed to isolate the impact to the staging server." _(Chúng tôi đã khoanh vùng được ảnh hưởng chỉ nằm ở server staging.)_                        |
| **Root cause analysis (RCA)** | Cụm danh từ | Phân tích nguyên nhân gốc rễ của sự cố      | "We will share the root cause analysis once it is finalized." _(Chúng tôi sẽ chia sẻ báo cáo phân tích nguyên nhân gốc rễ sau khi hoàn tất.)_          |
| **To prevent recurrence**     | Cụm động từ | Đảm bảo lỗi không tái diễn                  | "We are adding auto-scaling to prevent recurrence." _(Chúng tôi đang cấu hình auto-scaling để ngăn lỗi tái diễn.)_                                     |
| **Workaround**                | Danh từ     | Giải pháp tạm thời để đi vòng qua lỗi       | "We implemented a workaround while we develop a permanent fix." _(Chúng tôi đã áp dụng giải pháp tạm thời trong lúc phát triển bản sửa lỗi triệt để.)_ |
| **To compromise**             | Động từ     | Làm rò rỉ, gây nguy hại (bảo mật/thông tin) | "No sensitive user passwords were compromised." _(Không có mật khẩu nhạy cảm nào của user bị rò rỉ.)_                                                  |

---

## 2. Quy trình 5 Bước Báo Tin Xấu & Mẫu Câu Thực Tế

### Bước 1: Thông báo sự cố kỹ thuật (Announcing the Failure)

Nói thẳng vào vấn đề, không vòng vo hay tìm cách giảm nhẹ thái quá. Hãy nói rõ điều gì đã xảy ra ngay lập tức.

- **Sập hệ thống nghiêm trọng (Critical Outage):**
  - _"I need to report a critical incident. Our main production database experienced a hardware failure, and the service is currently offline."_ _(Tôi cần báo cáo một sự cố nghiêm trọng. Database production chính của chúng ta đã gặp sự cố phần cứng và dịch vụ hiện đang offline.)_
  - _"We have detected an unexpected surge in server response times, which is causing timeouts on the checkout page."_ _(Chúng tôi phát hiện lượng request tăng đột biến ngoài dự kiến, gây ra lỗi timeout trên trang thanh toán.)_
- **Lỗi khi Release/Deployment:**
  - _"Unfortunately, during the database migration process, some user session data was corrupted. We have temporarily rolled back the release to prevent further corruption."_ _(Thật không may, trong quá trình di chuyển database, một số dữ liệu session của user đã bị hỏng. Chúng tôi đã tạm thời rollback bản release để tránh hỏng thêm dữ liệu.)_
  - _"The latest deployment introduced an incompatibility with our third-party payment gateway, so we have reverted to the previous build."_ _(Bản deploy mới nhất đã gây ra sự không tương thích với cổng thanh toán bên thứ ba, vì vậy chúng tôi đã rollback về bản build trước đó.)_
- **Trễ Deadline/Dự án chậm tiến độ:**
  - _"I am writing to let you know that we will not be able to deliver the reporting module by this Friday as originally planned."_ _(Tôi viết email này để thông báo rằng chúng tôi không thể bàn giao module báo cáo vào thứ Sáu tuần này như kế hoạch ban đầu.)_
  - _"Due to unforeseen integration blockers with the client's API, the completion of this sprint will be delayed by two days."_ _(Do một số lỗi tích hợp không lường trước với API của khách hàng, việc hoàn thành sprint này sẽ bị chậm 2 ngày.)_

### Bước 2: Nêu rõ mức độ ảnh hưởng (Stating the Impact)

Chỉ rõ đối tượng nào bị ảnh hưởng, đối tượng nào **không** bị ảnh hưởng, và thông tin nhạy cảm có an toàn hay không.

- **Xác định nhóm người dùng bị ảnh hưởng:**
  - _"This outage currently affects approximately 20% of our active users, specifically those trying to access the checkout flow."_ _(Sự cố này hiện ảnh hưởng khoảng 20% user đang hoạt động, cụ thể là những ai đang cố gắng thanh toán.)_
  - _"The issue is limited to users using older versions of Safari; Chrome and Firefox users are unaffected."_ _(Lỗi này chỉ giới hạn ở những user dùng Safari phiên bản cũ; người dùng Chrome và Firefox không bị ảnh hưởng.)_
- **Khoanh vùng thiệt hại (Đưa tin tốt trong tin xấu):**
  - _"The impact is isolated to the reporting dashboard. The core payment and booking engines remain fully functional."_ _(Tác động được khoanh vùng ở dashboard báo cáo. Các core engine về thanh toán và đặt chỗ vẫn hoạt động bình thường.)_
  - _"We can confirm that no user passwords, payment information, or personally identifiable information (PII) have been exposed or compromised."_ _(Chúng tôi xác nhận không có mật khẩu, thông tin thanh toán, hoặc thông tin cá nhân (PII) nào của user bị lộ hoặc bị xâm phạm.)_

### Bước 3: Đưa ra kế hoạch khắc phục (Recovery Action Plan)

Đừng bao giờ báo cáo vấn đề mà không đi kèm giải pháp. Cho thấy bạn đang kiểm soát tình hình.

- **Hành động khắc phục lập tức:**
  - _"We are currently restoring the database from the midnight snapshot. We expect the restore process to take another 30 minutes."_ _(Chúng tôi đang khôi phục database từ bản backup lúc nửa đêm. Dự kiến quá trình này mất khoảng 30 phút nữa.)_
  - _"DevOps is spinning up replica instances to handle the traffic spike while we debug the memory leak."_ _(Đội DevOps đang khởi chạy các instance dự phòng để tải lượng traffic tăng đột biến trong lúc chúng tôi tìm lỗi rò rỉ bộ nhớ (memory leak).)_
- **Giải pháp đi vòng tạm thời (Workaround):**
  - _"For the time being, we have routed traffic away from the affected region to our backup data center to restore basic service."_ _(Tạm thời, chúng tôi đã điều hướng traffic khỏi vùng bị lỗi sang data center dự phòng để khôi phục các dịch vụ cơ bản.)_
  - _"We have disabled the buggy feature flag, allowing users to continue using the rest of the application without issues."_ _(Chúng tôi đã tắt feature flag bị lỗi, cho phép user tiếp tục dùng các phần khác của app bình thường.)_
- **Dự kiến thời gian xử lý xong (TTR - Time to Resolution):**
  - _"We expect to have a hotfix deployed to production within the next two hours."_ _(Chúng tôi dự kiến sẽ deploy bản hotfix lên production trong vòng 2 giờ tới.)_
  - _"We will provide another status update by 3:00 PM today, or sooner if we make significant progress."_ _(Chúng tôi sẽ cập nhật tình hình tiếp theo vào lúc 3h chiều nay, hoặc sớm hơn nếu có tiến triển lớn.)_

### Bước 4: Nhận trách nhiệm và Xin lỗi chuyên nghiệp (Apologizing)

Lời xin lỗi cần chân thành, chuyên nghiệp. Tuyệt đối không đổ lỗi cho thư viện ngoài, lý do khách quan kiểu "do dev junior làm lỗi" hay phân trần quá nhiều.

- **Xin lỗi Khách hàng / Stakeholders:**
  - _"We apologize for the inconvenience this outage has caused. We are doing everything in our power to bring the system back online."_ _(Chúng tôi xin lỗi vì sự bất tiện do sự cố sập hệ thống này gây ra. Chúng tôi đang nỗ lực hết sức để đưa hệ thống hoạt động trở lại.)_
  - _"I understand how critical this module is for your business operations, and I sincerely regret this delay."_ _(Tôi hiểu module này quan trọng thế nào với hoạt động kinh doanh của các bạn, và tôi rất tiếc về sự chậm trễ này.)_
- **Nhận trách nhiệm tập thể:**
  - _"We take full responsibility for the oversight in the deployment script. We are putting checks in place to ensure this does not happen again."_ _(Chúng tôi hoàn toàn chịu trách nhiệm về sơ sót trong script deploy. Chúng tôi đang thiết lập các bước kiểm tra chặt chẽ để đảm bảo việc này không tái diễn.)_
  - _"Our team is fully focused on resolving this. We take full ownership of the quality gap in this release."_ _(Team chúng tôi đang tập trung cao độ để xử lý việc này. Chúng tôi hoàn toàn nhận trách nhiệm về thiếu sót chất lượng trong bản release này.)_

### Bước 5: Theo dõi, Phân tích & Ngăn ngừa lỗi tái diễn (Prevention)

Sau khi khắc phục xong, hãy xây dựng lại lòng tin bằng cách cam kết tìm nguyên nhân gốc rễ và phòng ngừa lâu dài.

- _"Once the service is fully restored, we will compile a detailed post-mortem report outlining the root cause."_ _(Khi dịch vụ được phục hồi hoàn toàn, chúng tôi sẽ lập một báo cáo mổ xẻ sự cố (post-mortem) chi tiết để chỉ ra nguyên nhân gốc rễ.)_
- _"We will conduct a thorough code audit of this module next week to ensure long-term stability."_ _(Chúng tôi sẽ thực hiện một đợt rà soát (audit) code kỹ lưỡng cho module này vào tuần tới để đảm bảo sự ổn định lâu dài.)_
- _"To prevent recurrence, we are setting up automated alerts for high CPU utilization and adding additional unit test coverage."_ _(Để tránh lỗi tái diễn, chúng tôi đang thiết lập cảnh báo tự động khi CPU tăng cao và viết thêm unit test coverage.)_

---

## 3. Ngữ pháp & Cấu trúc Câu Đặc thù khi Báo Tin Xấu

### 3.1. Sử dụng "Buffers" để làm dịu tin xấu

"Buffer" là các cụm từ mở đầu lịch sự, giúp chuẩn bị tâm lý cho người đọc trước khi tiếp nhận thông tin tiêu cực.

- **Công thức:** `Buffer Phrase + Subject + Verb`
- **Các cụm từ phổ biến:**
  - **"Regrettably, we have run into..."** _(Đáng tiếc là chúng tôi đã gặp phải...)_
  - **"I am writing to share some difficult news regarding..."** _(Tôi viết thư này để chia sẻ một số tin tức không mấy thuận lợi về...)_
  - **"Despite our best efforts, we were unable to..."** _(Mặc dù đã cố gắng hết sức, chúng tôi đã không thể...)_
  - **"I wish I had better news, but we have encountered..."** _(Tôi ước mình có tin tốt hơn, nhưng chúng tôi đã gặp phải...)_

### 3.2. Sử dụng Thể Bị động (Diplomatic Passive Voice) để Tránh Đổ lỗi

Trong môi trường chuyên nghiệp, việc chỉ đích danh ai làm sai (ví dụ: "Dev A quên chạy script") cực kỳ thiếu chuyên nghiệp. Thể bị động giúp tập trung vào **sự việc khách quan** thay vì **cá nhân mắc lỗi**.

- **Chủ động (Thiếu chuyên nghiệp):** _"John forgot to run the migration script, so we crashed the server."_ _(John quên chạy script migration nên chúng tôi làm sập server.)_
- **Bị động (Chuyên nghiệp / Khách quan):** _"The migration script was not executed before deployment, which resulted in a database mismatch. We have corrected the configuration."_ _(Script migration đã không được thực thi trước khi deploy, dẫn đến sự không khớp database. Chúng tôi đã sửa lại cấu hình.)_
- **Chủ động:** _"Our API team broke the endpoint."_ _(Team API của chúng tôi đã làm hỏng endpoint.)_
- **Bị động:** _"The API endpoint was accidentally broken during yesterday's update."_ _(Endpoint API đã vô tình bị lỗi trong bản cập nhật ngày hôm qua.)_

### 3.3. Present Perfect (Hiện tại hoàn thành) vs. Past Simple (Quá khứ đơn)

- Sử dụng **Present Perfect** để báo cáo trạng thái khắc phục ở hiện tại (kết quả ở hiện tại quan trọng hơn mốc thời gian):
  - _"We **have rolled back** the release."_ (Việc rollback đã xong, hệ thống hiện đã ổn định).
  - _"We **have identified** the bug."_ (Chúng tôi đã tìm ra bug rồi và hiện đang biết nó là gì).
- Sử dụng **Past Simple** khi báo cáo cụ thể thời điểm xảy ra lỗi trong quá khứ:
  - _"The server **went down** at 2:15 PM."_ (Có mốc thời gian cụ thể).
  - _"The database connection **failed** during the cron job."_ (Xảy ra trong một sự kiện cụ thể đã qua).

---

## 4. Nghệ thuật Diễn đạt & Trình bày Tin Xấu

1. **Phương pháp "Sandwich" (Kẹp bánh mì)**: Đặt tin xấu vào giữa hai thông điệp tích cực hoặc mang tính xây dựng:
   - _Tích cực/Hành động_: "We are currently investigating a connection issue..." _(Chúng tôi đang điều tra lỗi kết nối...)_
   - _Tin xấu_: "...which has caused the payment page to go offline..." _(...khiến trang thanh toán bị ngoại tuyến...)_
   - _Tích cực/Giải pháp_: "...but we have routed traffic to a backup and expect to be fully online in 10 minutes." _(...nhưng chúng tôi đã chuyển hướng traffic sang backup và dự kiến hoạt động lại sau 10 phút.)_
2. **Sử dụng Con số Cụ thể**: Thay vì nói mơ hồ "Nhiều user bị ảnh hưởng," hãy nói "Khoảng 15% user đang hoạt động bị chậm khi tải trang." Điều này thể hiện sự kiểm soát tốt tình hình.
3. **Tránh Ngôn ngữ Phòng thủ (Defensive)**: Tránh nói "Đây không phải lỗi của chúng tôi vì..." hoặc "Chúng tôi bận quá." Hãy thay thế bằng "Do độ phức tạp kỹ thuật phát sinh ngoài dự kiến..." hoặc "Chúng tôi gặp phải một số vướng mắc tích hợp chưa lường trước..."

---

## 5. Mẫu Email / Tin nhắn Thực tế (Copy & Tùy biến)

### Mẫu A: Tin nhắn Slack/Teams khẩn cấp (Sập hệ thống Production)

> **Subject: [Incident Update] Core API Service Interruption**
>
> Team,
>
> We are currently experiencing an outage on our Core API service. The issue started at approximately 10:15 AM UTC.
>
> - **Impact**: Users are currently unable to log in or register. The mobile app is showing a "Network Error" code.
> - **Action Plan**: DevOps is restarting the authentication container and checking the API gateway logs. We are also preparing a database rollback if the restart does not resolve the issue.
> - **Next Update**: We will provide another update in 15 minutes, or as soon as service is restored.
>
> We apologize for the disruption and are working to resolve this as quickly as possible.

### Mẫu B: Email chuyên nghiệp gửi Khách hàng (Trễ Deadline dự án)

> **Subject: Project Update: Milestone 2 Timeline Adjustment**
>
> Dear [Client Name],
>
> I am writing to provide an update on the timeline for Milestone 2 (User Dashboard).
>
> Despite the team's best efforts, we have encountered unforeseen integration issues with the legacy API. As a result, we will not be able to deliver the complete dashboard by this Friday, May 24th, as originally scheduled.
>
> **Our Recovery Plan:**
>
> 1. We have assigned two senior backend developers to work directly on the API mapping wrapper starting today.
> 2. We will deliver the core layout and static pages for your review by Friday to keep the feedback loop moving.
> 3. The fully integrated dashboard will be deployed to staging by next Tuesday, May 28th.
>
> I sincerely apologize for this delay. We are taking this extra time to ensure the integration is completely stable and secure. Please let me know if you would like to jump on a quick call to discuss the revised schedule.
>
> Best regards,
>
> [Your Name]
> [Your Title]

### Mẫu C: Thông báo Sự cố Bảo mật / Rò rỉ Dữ liệu (Mức độ Nghiêm trọng)

> **Subject: Security Incident Notice: Unauthorized Access Attempt**
>
> Dear Stakeholders,
>
> We want to inform you of a security incident that occurred on our staging server early this morning.
>
> At approximately 2:00 AM, our automated monitoring detected unauthorized API requests targeting our staging database.
>
> - **Impact**: The staging environment was taken offline immediately to protect data. We have verified that **no production database or sensitive customer data (passwords, credit cards) was compromised or accessed**.
> - **Corrective Measures**: We have rotated all staging database credentials, updated our firewall rules to restrict IP access, and patched the vulnerable API endpoint.
> - **Next Steps**: Staging services will remain offline for another hour while we complete a security audit.
>
> We take security extremely seriously and apologize for any concern this causes. A full post-mortem analysis will be shared with you by tomorrow afternoon.

---

## 6. Lỗi giao tiếp thường gặp & Cách khắc phục

| Cách diễn đạt Tệ / Thiếu Chuyên Nghiệp                                    | Tại sao lỗi?                                       | Cách diễn đạt Tốt / Chuyên Nghiệp                                                                                                                    |
| :------------------------------------------------------------------------ | :------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| "Our developer forgot to check the code, so a bug got into production."   | Đổ lỗi cá nhân, hạ thấp uy tín của team.           | "A regression was introduced in the latest release. We have identified the cause and rolled back."                                                   |
| "The server crashed. We don't know why or when it will be back."          | Gây hoang mang, thiếu tính kiểm soát và giải pháp. | "We are investigating an unexpected server outage that began at 9:00 AM. We are analyzing log files and expect to have an update within 30 minutes." |
| "Sorry, we are too busy with other projects so we couldn't finish yours." | Khiến khách hàng cảm thấy họ không quan trọng.     | "Due to unforeseen technical challenges on our current tasks, we have adjusted the delivery schedule for this feature to next Monday."               |
