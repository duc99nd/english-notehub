# Trình bày Kiến trúc Hệ thống (Daily English)

Giải thích cách thức các thành phần code và server tương tác với nhau là một kỹ năng cực kỳ quan trọng. Cho dù bạn đang onboarding thành viên mới hay đang trình bày giải pháp với Product Manager, bạn cần mô tả được luồng dữ liệu (data flows), cách lưu trữ server và ranh giới bảo mật. Hãy giữ cho bài trình bày đơn giản: sử dụng công thức "First, Next, Finally" và tránh các thuật ngữ học thuật khô khan, khó hiểu.

---

## 1. Tiếng Anh Học Thuật vs. Tiếng Anh Daily khi Trình Bày Kiến Trúc

Tránh nói như đọc sách giáo khoa. Hãy dùng ngôn từ thân thiện và rõ ràng.

| ❌ Học thuật / Quá trang trọng (Nên tránh) | 🟢 Daily & Giao tiếp (Nên dùng) |
| :--- | :--- |
| "The architectural topology consists of distributed microservices communicating asynchronously via a message queuing broker." | "We use microservices that talk to each other through a message queue." *(Chúng tôi dùng microservices giao tiếp với nhau qua hàng đợi tin nhắn.)* |
| "This integration is realized utilizing webhook mechanisms to synchronize transaction states." | "We use webhooks to sync transaction updates from Stripe." *(Chúng tôi dùng webhook để đồng bộ trạng thái giao dịch từ Stripe.)* |
| "Our server deployment exhibits auto-scaling properties triggered by CPU utilization thresholds." | "We automatically spin up new servers if the CPU usage gets too high." *(Hệ thống tự động bật thêm server mới nếu CPU quá tải.)* |
| "The database repository replicates data synchronously to secondary availability zones to guarantee failover capabilities." | "We copy our database to another zone so if one crashes, the other takes over immediately." *(Database được đồng bộ sang zone khác, nếu một bên sập thì bên kia lập tức chạy thay.)* |

---

## 2. Các thuật ngữ Kiến trúc Hệ thống cần biết

- **High Availability (HA):** Tính sẵn sàng cao. Hệ thống hoạt động liên tục gần như 100% thời gian, rất ít khi bị sập.
- **Failover:** Cơ chế chuyển đổi dự phòng tự động. Khi server/database chính gặp sự cố, hệ thống tự động chuyển sang server dự phòng.
- **Auto-scaling:** Tự động co giãn (thêm/bớt số lượng server) dựa trên lượng truy cập thực tế.
- **Encrypted at rest:** Mã hóa dữ liệu khi lưu trữ (trên ổ cứng).
- **Encrypted in transit:** Mã hóa dữ liệu trên đường truyền (ví dụ: chạy qua HTTPS/TLS).
- **Read replica:** Bản sao cơ sở dữ liệu chỉ dùng để đọc, giúp giảm tải và tăng tốc độ cho các câu lệnh tìm kiếm.
- **Message Queue (MQ):** Hàng đợi tin nhắn. Dùng để gửi nhận thông tin giữa các service một cách bất đồng bộ (ví dụ: RabbitMQ, Kafka).

---

## 3. Công thức luồng dữ liệu: "First, Next, Finally"

Khi muốn giải thích một luồng đi của dữ liệu hoặc cách một request của user chạy qua hệ thống, hãy dẫn dắt người nghe từng bước một:

1.  **Bắt đầu:** *"First, the user does [Action] which triggers a request to [Component]..."*
2.  **Giữa:** *"Next, this component talks to [Service] to validate/save data..."*
3.  **Kết thúc:** *"Finally, the data is saved in [Database] and the user receives a success response."*

### 💡 Ví dụ:
> "First, the user clicks checkout, and the request hits our API Gateway. Next, the gateway validates the user's token and forwards the request to the Order Service. Finally, the Order Service saves the order to PostgreSQL and sends a notification email to the user."
>
> *(Dịch nghĩa: Đầu tiên, user click checkout và request sẽ gửi tới API Gateway. Tiếp theo, gateway sẽ xác thực token của user rồi chuyển tiếp request tới Order Service. Cuối cùng, Order Service lưu đơn hàng vào DB PostgreSQL và gửi email thông báo cho user.)*

---

## 4. Mẫu câu điền vào chỗ trống (Templates)

### Mẫu A: Tóm tắt tổng quan kiến trúc dự án
Dùng khi giới thiệu dự án cho một đồng nghiệp mới vào team.
> "At a high level, our project is built using a **[Kiểu kiến trúc, ví dụ: monolithic / microservices]** architecture.
>
> The frontend is **[Công nghệ frontend, ví dụ: React / Vue]**, which talks to our backend built with **[Công nghệ backend, ví dụ: Node.js / Laravel]**.
>
> Everything is hosted on **[Nhà cung cấp Cloud, ví dụ: AWS / Google Cloud]**, and we use **[Database, ví dụ: PostgreSQL / MongoDB]** to store our data."

### Mẫu B: Giải thích phương án dự phòng sự cố (Dành cho Khách hàng/Sếp)
Dùng để tạo sự tin tưởng về độ an toàn của hệ thống.
> "To prevent data loss, we have set up a **[Hệ thống dự phòng, ví dụ: database replica / daily automatic backups]**.
>
> If the primary **[Thành phần bị lỗi, ví dụ: database server]** goes down, the system will **[Hành động xử lý tự động, ví dụ: automatically fail over to the backup replica]**.
>
> This ensures we have almost zero downtime and keeps user data safe."

---

## 5. Kịch bản hội thoại thực tế: Onboarding Lập trình viên mới

Đoạn hội thoại tự nhiên giữa **Đức (Lead)** và **Huy (Dev mới)** khi cùng xem sơ đồ kiến trúc hệ thống.

> **Duc:** "Welcome to the team, Huy! Let me walk you through our backend architecture."
> *(Chào mừng Huy gia nhập team! Để tôi giới thiệu cho bạn kiến trúc backend của chúng ta nhé.)*
>
> **Huy:** "Thanks, Duc! I see we have quite a few containers on the diagram."
> *(Cảm ơn anh Đức! Em thấy trên sơ đồ có khá nhiều container.)*
>
> **Duc:** "Yes. First, when a user accesses the site, the requests always hit our Nginx load balancer. It distributes the traffic between our Node.js app containers."
> *(Đúng vậy. Đầu tiên, khi user truy cập trang, request luôn đi qua bộ cân bằng tải Nginx. Nó sẽ chia đều lượng truy cập sang các container chạy app Node.js.)*
>
> **Huy:** "Got it. And do the Node.js containers talk to the database directly?"
> *(Em hiểu rồi. Vậy các container Node.js kết nối trực tiếp với DB luôn ạ?)*
>
> **Duc:** "Yes, they connect to our primary PostgreSQL database for writes. However, for heavy search queries, they talk to a read replica to keep the main database fast."
> *(Đúng, chúng kết nối với DB PostgreSQL chính để ghi dữ liệu. Tuy nhiên, với các truy vấn tìm kiếm nặng, chúng sẽ đọc từ một bản read replica để giữ cho DB chính luôn nhanh.)*
>
> **Huy:** "Smart. What about background jobs, like sending invoices?"
> *(Thông minh quá. Còn các tác vụ chạy ngầm như gửi hóa đơn thì sao ạ?)*
>
> **Duc:** "For background jobs, we push messages to Redis. We have separate worker processes that listen to Redis and handle the PDF generation and emailing asynchronously."
> *(Với các job chạy ngầm, chúng tôi đẩy message vào Redis. Có các tiến trình worker riêng lắng nghe Redis và xử lý việc tạo file PDF cũng như gửi email bất đồng bộ.)*
>
> **Huy:** "That makes sense. It keeps the main web server responsive. Thanks for the walkthrough!"
> *(Rất hợp lý ạ. Việc đó giúp web server chính không bị nghẽn. Cảm ơn anh đã giới thiệu.)*
