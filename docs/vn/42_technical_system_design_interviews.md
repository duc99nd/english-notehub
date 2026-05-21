# PHỎNG VẤN KỸ THUẬT / SYSTEM DESIGN

## Các cụm từ, phương pháp và chiến lược cho phỏng vấn thiết kế hệ thống ở cấp độ mid đến senior

> **Mục đích của tài liệu này**
>
> - Làm chủ khung 4 bước cho phỏng vấn system design (Làm rõ yêu cầu, Thiết kế tổng quan, Đi sâu vào chi tiết, Phân tích trade-offs)
> - Học các cụm từ dùng để làm rõ yêu cầu, vẽ sơ đồ kiến trúc và thảo luận về khả năng mở rộng
> - Thực hành các khung trả lời cho các câu hỏi system design phổ biến nhất (URL shortener, chat system, news feed, file storage)
> - Tự tin hơn khi suy nghĩ thành tiếng (think out loud) bằng tiếng Anh trong buổi phỏng vấn kỹ thuật

---

# 1. TỔNG QUAN VỀ PHỎNG VẤN SYSTEM DESIGN

Phỏng vấn system design đánh giá cách bạn tư duy, không chỉ là những gì bạn biết. Người phỏng vấn muốn thấy tư duy có cấu trúc, giao tiếp rõ ràng và nhận thức về các sự đánh đổi (trade-offs). Các buổi phỏng vấn này thường kéo dài 35-45 phút và tuân theo một cấu trúc nhất định.

## 1.1. Những gì cần mong đợi

1. Người phỏng vấn sẽ đưa ra một bài toán rộng: "Design a URL shortener" hoặc "Design a chat application."
2. Bạn được kỳ vọng sẽ đặt câu hỏi làm rõ trước khi bắt tay vào thiết kế.
3. Bạn sẽ vẽ kiến trúc tổng quan trên bảng trắng hoặc công cụ cộng tác.
4. Bạn sẽ đi sâu vào chi tiết 1-2 thành phần.
5. Bạn sẽ thảo luận về các điểm nghẽn (bottlenecks) và sự đánh đổi (trade-offs).
6. Bạn sẽ tóm tắt lại bằng một lời kết ngắn.

## 1.2. Khung 4 bước

```
+----------------------------------------------------------+
|        KHUNG PHỎNG VẤN SYSTEM DESIGN                     |
+------------------+------------------+--------------------+
|   BƯỚC 1         |   BƯỚC 2         |   BƯỚC 3           |
|   LÀM RÕ        |   THIẾT KẾ       |   ĐI SÂU          |
|   (3-5 phút)     |   TỔNG QUAN      |   (10-15 phút)     |
|   Phạm vi, quy  |   (5-10 phút)    |   1-2 thành phần   |
|   mô, ràng buộc |   Hộp & mũi tên  |   chi tiết         |
+------------------+------------------+--------------------+
|                                                          |
|   BƯỚC 4: PHÂN TÍCH TRADE-OFFS & TÓM TẮT (5 phút)      |
|   Điểm nghẽn, giải pháp thay thế, các kịch bản what-if  |
+----------------------------------------------------------+
```

- **Bước 1 - Làm rõ (3-5 phút)**: Hiểu phạm vi, quy mô và các ràng buộc.
- **Bước 2 - Thiết kế tổng quan (5-10 phút)**: Phác thảo các thành phần chính và luồng dữ liệu.
- **Bước 3 - Đi sâu (10-15 phút)**: Chọn 1-2 khu vực và phân tích chi tiết.
- **Bước 4 - Trade-offs & tóm tắt (5 phút)**: Thảo luận về giải pháp thay thế, điểm nghẽn và kết luận.

## 1.3. Mở đầu buổi phỏng vấn

1. "Thank you for the question. Let me start by clarifying a few requirements before I dive into the design." *(Cảm ơn câu hỏi. Để tôi làm rõ một số yêu cầu trước khi đi vào thiết kế.)*
2. "Great, I'd like to approach this systematically. First, let me make sure I understand the scope." *(Tuyệt vời, tôi muốn tiếp cận bài toán này một cách có hệ thống. Đầu tiên, hãy đảm bảo tôi hiểu đúng phạm vi.)*
3. "Interesting problem. Before I start drawing, I have a few questions to make sure we're aligned on the requirements." *(Bài toán thú vị. Trước khi bắt đầu vẽ, tôi có vài câu hỏi để đảm bảo chúng ta thống nhất về yêu cầu.)*
4. "I'm going to break this down into a few steps: first, I'll clarify the requirements, then sketch a high-level design, and finally deep-dive into a couple of key components. Does that sound good to you?" *(Tôi sẽ chia bài toán thành vài bước: đầu tiên làm rõ yêu cầu, sau đó phác thảo thiết kế tổng quan, và cuối cùng đi sâu vào một số thành phần then chốt. Nghe có ổn không?)*

---

# 2. LÀM RÕ YÊU CẦU (CLARIFYING REQUIREMENTS)

Tuyệt đối không bắt tay vào thiết kế ngay. Hãy đặt những câu hỏi thông minh để thu hẹp phạm vi. Điều này thể hiện sự trưởng thành và tiết kiệm thời gian.

## 2.1. Câu hỏi làm rõ chung

1. "What is the scale we're designing for? Are we talking about thousands of users or millions?" *(Chúng ta đang thiết kế cho quy mô nào? Vài nghìn user hay hàng triệu?)*
2. "Is this system read-heavy, write-heavy, or balanced?" *(Hệ thống này thiên về đọc, ghi hay cân bằng?)*
3. "What is the expected read-to-write ratio?" *(Tỷ lệ đọc-ghi dự kiến là bao nhiêu?)*
4. "Are there any specific latency requirements I should keep in mind?" *(Có yêu cầu cụ thể nào về độ trễ mà tôi cần lưu ý không?)*
5. "Do we need to support global users, or is this regional?" *(Chúng ta cần hỗ trợ user toàn cầu hay chỉ trong khu vực?)*
6. "What platforms do we need to support? Web, mobile, or both?" *(Chúng ta cần hỗ trợ nền tảng nào? Web, mobile hay cả hai?)*
7. "Are there any specific security or compliance requirements, like GDPR or HIPAA?" *(Có yêu cầu cụ thể nào về bảo mật hay tuân thủ như GDPR hay HIPAA không?)*
8. "Should the system be highly available, or is strong consistency more important?" *(Hệ thống cần tính sẵn sàng cao hay tính nhất quán mạnh quan trọng hơn?)*
9. "What kind of availability target are we aiming for? 99.9%? 99.99%?" *(Mục tiêu sẵn sàng (availability) là bao nhiêu? 99.9%? 99.99%?)*
10. "Is this a real-time system, or is eventual consistency acceptable?" *(Đây là hệ thống real-time hay eventual consistency (nhất quán sau) là chấp nhận được?)*

## 2.2. Câu hỏi làm rõ theo từng loại hệ thống

### URL Shortener (Rút gọn link)
1. "What's the expected number of URLs created per day?" *(Số lượng URL tạo mới mỗi ngày dự kiến là bao nhiêu?)*
2. "Do we need analytics, like click tracking and geographic data?" *(Chúng ta có cần analytics như theo dõi click và dữ liệu địa lý không?)*
3. "Should shortened links expire after a certain time, or persist forever?" *(Link rút gọn có hết hạn sau một thời gian hay tồn tại mãi mãi?)*
4. "Do we need custom aliases, or are auto-generated codes sufficient?" *(Cần alias tùy chỉnh hay mã tự tạo là đủ?)*
5. "What should the redirect latency be? Under 50 milliseconds?" *(Độ trễ redirect nên là bao nhiêu? Dưới 50 mili-giây?)*

### Chat Application (Ứng dụng chat)
1. "Is this one-on-one chat, group chat, or both?" *(Đây là chat 1-1, chat nhóm hay cả hai?)*
2. "Do we need to support message history and search?" *(Cần hỗ trợ lịch sử tin nhắn và tìm kiếm không?)*
3. "Are we supporting text only, or also images, files, and video?" *(Chỉ hỗ trợ văn bản hay cả hình ảnh, file và video?)*
4. "What's the expected maximum group size?" *(Quy mô nhóm tối đa dự kiến là bao nhiêu?)*
5. "Do we need read receipts, typing indicators, and online/offline status?" *(Cần trạng thái đã đọc, đang gõ và online/offline không?)*

### E-Commerce System (Hệ thống thương mại điện tử)
1. "How many products and categories are we managing?" *(Chúng ta đang quản lý bao nhiêu sản phẩm và danh mục?)*
2. "Do we need to handle flash sales with sudden traffic spikes?" *(Cần xử lý flash sale với lượng truy cập tăng đột biến không?)*
3. "What payment methods should we support?" *(Nên hỗ trợ phương thức thanh toán nào?)*
4. "Do we need a recommendation engine?" *(Cần hệ thống gợi ý sản phẩm không?)*
5. "Should the system support multiple languages and currencies?" *(Hệ thống có cần hỗ trợ đa ngôn ngữ và đa tiền tệ không?)*

## 2.3. Cụm từ dùng khi làm rõ

- "Just to make sure I'm on the same page, are we designing for [X]?" *(Để đảm bảo chúng ta hiểu cùng nhau, chúng ta đang thiết kế cho [X] đúng không?)*
- "Can I assume that [assumption] is a hard requirement?" *(Tôi có thể giả định [giả định] là yêu cầu bắt buộc không?)*
- "For the sake of scoping this problem, let me assume [X]. Is that reasonable?" *(Để giới hạn phạm vi bài toán, tôi giả định [X]. Điều đó có hợp lý không?)*
- "Let me define the scope first. I'll assume we need to handle [X]. Please correct me if I'm wrong." *(Để tôi xác định phạm vi trước. Tôi giả định chúng ta cần xử lý [X]. Hãy sửa nếu tôi sai.)*

---

# 3. KIẾN TRÚC TỔNG QUAN (HIGH-LEVEL ARCHITECTURE)

Sau khi làm rõ yêu cầu, hãy phác thảo các thành phần chính. Hãy nghĩ theo client, API, services, database và các hệ thống bên ngoài.

## 3.1. Cụm từ giới thiệu thiết kế

1. "Now that we've clarified the requirements, let me sketch out the high-level architecture." *(Bây giờ khi đã làm rõ yêu cầu, để tôi phác thảo kiến trúc tổng quan.)*
2. "At a high level, I see three main components: the client layer, the application layer, and the data layer." *(Nhìn tổng quan, tôi thấy 3 thành phần chính: lớp client, lớp ứng dụng và lớp dữ liệu.)*
3. "I'll start by drawing the major building blocks and then we can go deeper into each one." *(Tôi sẽ bắt đầu bằng việc vẽ các khối chính và sau đó chúng ta có thể đi sâu vào từng cái.)*
4. "The overall flow looks like this: the client sends a request to the API gateway, which routes it to the appropriate service." *(Luồng tổng thể như sau: client gửi request đến API gateway, gateway điều hướng đến service phù hợp.)*
5. "Let me lay out the core components first, and then I'll explain the data flow between them." *(Để tôi trình bày các thành phần cốt lõi trước, sau đó giải thích luồng dữ liệu giữa chúng.)*

## 3.2. Mô tả các thành phần

1. "On the left, we have the client applications -- web and mobile." *(Bên trái, chúng ta có các ứng dụng client -- web và mobile.)*
2. "In the middle, there's an API gateway that handles authentication, rate limiting, and routing." *(Ở giữa là API gateway xử lý xác thực, giới hạn request và điều hướng.)*
3. "Behind the gateway, we have a set of microservices: a user service, an order service, and a notification service." *(Phía sau gateway là các microservice: user service, order service và notification service.)*
4. "For the data layer, I'm proposing a primary PostgreSQL database for transactional data, and a Redis cache for frequently accessed data." *(Cho lớp dữ liệu, tôi đề xuất PostgreSQL làm database chính cho dữ liệu giao dịch, và Redis cache cho dữ liệu truy cập thường xuyên.)*
5. "On the right side, we have external integrations: a payment provider, an email service, and a CDN for static assets." *(Bên phải là các tích hợp bên ngoài: nhà cung cấp thanh toán, dịch vụ email và CDN cho tài nguyên tĩnh.)*

## 3.3. Mô tả luồng dữ liệu

1. "When a user creates a new order, the request flows through the API gateway to the order service." *(Khi user tạo đơn hàng mới, request đi qua API gateway đến order service.)*
2. "The order service validates the request, writes to the database, and publishes an event to the message queue." *(Order service xác thực request, ghi vào database và xuất bản event ra message queue.)*
3. "The notification service consumes the event from the queue and sends a confirmation email to the user." *(Notification service nhận event từ queue và gửi email xác nhận đến user.)*
4. "For read operations, the request first hits the cache. If it's a cache miss, we fall through to the database and then populate the cache." *(Cho thao tác đọc, request đi vào cache trước. Nếu cache miss, query database và populate cache.)*
5. "The response is returned through the API gateway, which adds the appropriate headers and status codes." *(Response được trả về qua API gateway, kèm headers và status codes phù hợp.)*

## 3.4. Ngôn ngữ vẽ sơ đồ

- "Let me draw a box here to represent the [component]." *(Để tôi vẽ một hộp ở đây đại diện cho [thành phần].)*
- "I'll draw an arrow from [A] to [B] to show the data flow." *(Tôi sẽ vẽ mũi tên từ [A] đến [B] để thể hiện luồng dữ liệu.)*
- "This dashed line represents an asynchronous communication channel." *(Đường đứt nét này đại diện cho kênh giao tiếp bất đồng bộ.)*
- "I'm putting a database symbol here to indicate persistent storage." *(Tôi đặt biểu tượng database ở đây để chỉ lưu trữ lâu dài.)*
- "Let me label this connection as 'REST API' and this one as 'message queue.'" *(Để tôi gán nhãn kết nối này là 'REST API' và kết nối kia là 'message queue'.)*

---

# 4. CỤM TỪ ĐI SÂU VÀO CHI TIẾT (DEEP DIVE PHRASES)

Người phỏng vấn thường yêu cầu bạn đi sâu vào 1-2 thành phần. Đây là lúc bạn thể hiện chiều sâu kỹ thuật.

## 4.1. Thiết kế Database

1. "For this component, I'd use a relational database like PostgreSQL because we need ACID transactions and complex joins." *(Cho thành phần này, tôi sẽ dùng database quan hệ như PostgreSQL vì cần giao dịch ACID và join phức tạp.)*
2. "I'd go with a NoSQL option like MongoDB here because the schema is flexible and we need horizontal scaling." *(Tôi sẽ chọn NoSQL như MongoDB ở đây vì schema linh hoạt và cần mở rộng theo chiều ngang.)*
3. "For session storage, I'd use Redis because it supports TTL (time-to-live) natively and offers sub-millisecond reads." *(Cho lưu trữ session, tôi sẽ dùng Redis vì hỗ trợ TTL tự động và đọc dưới mili-giây.)*
4. "I'd design the URL table with columns for the short code, the original URL, the creation timestamp, and an expiration date." *(Tôi sẽ thiết kế bảng URL với các cột: short code, URL gốc, thời gian tạo và ngày hết hạn.)*
5. "To handle the massive read volume, I'd set up read replicas so that read queries are distributed across multiple database instances." *(Để xử lý lượng đọc khổng lồ, tôi sẽ thiết lập read replicas để phân tải query đọc.)*
6. "For the chat system, I'd use a combination of PostgreSQL for message metadata and Cassandra for message storage, since Cassandra handles high write throughput very well." *(Cho chat system, tôi sẽ kết hợp PostgreSQL cho metadata tin nhắn và Cassandra cho lưu trữ tin nhắn, vì Cassandra xử lý ghi rất tốt.)*
7. "I'd add an index on the short_code column to ensure O(1) lookups for redirects." *(Tôi sẽ thêm index cho cột short_code để đảm bảo tra cứu O(1) cho redirect.)*
8. "If the data grows beyond a single node, I'd implement sharding based on the user ID, so all data for a given user lives on the same shard." *(Nếu dữ liệu vượt quá một node, tôi sẽ triển khai sharding dựa trên user ID.)*

## 4.2. Caching (Bộ nhớ đệm)

1. "To reduce database load, I'd introduce a Redis cache layer in front of the database." *(Để giảm tải database, tôi sẽ thêm lớp Redis cache phía trước database.)*
2. "For the cache eviction policy, I'd use LRU (Least Recently Used) since older entries are less likely to be accessed again." *(Cho chính sách loại bỏ cache, tôi sẽ dùng LRU vì các entry cũ ít có khả năng được truy cập lại.)*
3. "The cache-aside pattern works well here: the application checks the cache first, and on a miss, it fetches from the database and writes the result back to the cache." *(Mẫu cache-aside rất phù hợp ở đây: ứng dụng kiểm tra cache trước, nếu miss thì lấy từ database và ghi ngược lại cache.)*
4. "To prevent thundering herd problems, I'd implement cache warming to pre-populate the cache during off-peak hours." *(Để tránh thundering herd, tôi triển khai cache warming để tải trước cache vào giờ thấp điểm.)*
5. "I'd set a TTL of 5 minutes on product listing caches, which balances freshness with performance." *(Tôi sẽ đặt TTL 5 phút cho cache danh sách sản phẩm, cân bằng giữa độ mới và hiệu năng.)*
6. "For write-through caching, every write goes to both the cache and the database, ensuring consistency at the cost of slightly higher write latency." *(Với write-through caching, mỗi lần ghi đều vào cả cache và database, đảm bảo nhất quán nhưng tăng độ trễ ghi.)*

## 4.3. Load Balancing & Khả năng mở rộng

1. "To distribute traffic evenly, I'd place a load balancer -- something like Nginx or AWS ALB -- in front of the application servers." *(Để phân phối traffic đều, tôi đặt load balancer -- như Nginx hay AWS ALB -- phía trước các application server.)*
2. "For horizontal scaling, I'd deploy multiple instances of the application behind the load balancer and use auto-scaling to handle traffic spikes." *(Để mở rộng theo chiều ngang, tôi triển khai nhiều instance phía sau load balancer và dùng auto-scaling.)*
3. "I'd use consistent hashing for the cache layer so that adding or removing nodes doesn't invalidate a large portion of the cache." *(Tôi sẽ dùng consistent hashing cho cache để thêm/xóa node không làm mất nhiều cache.)*
4. "To handle the global user base, I'd use a CDN like Cloudflare to serve static assets from edge locations closest to the user." *(Để phục vụ user toàn cầu, tôi sẽ dùng CDN như Cloudflare để phân phối tài nguyên tĩnh từ edge location gần user nhất.)*
5. "For database scaling, I'd use a primary-replica setup where writes go to the primary and reads are distributed among replicas." *(Để mở rộng database, tôi dùng primary-replica: ghi vào primary, đọc phân bổ cho các replica.)*
6. "I'd implement connection pooling to avoid opening a new database connection for every request, which would quickly exhaust resources under high load." *(Tôi triển khai connection pooling để tránh mở kết nối mới cho mỗi request.)*

## 4.4. Thiết kế API

1. "I'd expose a RESTful API with clear resource-based endpoints: POST /urls for creating short links and GET /urls/{code} for redirection." *(Tôi sẽ tạo RESTful API với endpoint rõ ràng: POST /urls để tạo link ngắn và GET /urls/{code} để redirect.)*
2. "For the chat system, I'd use WebSocket connections for real-time bidirectional communication between the client and server." *(Cho chat system, tôi dùng WebSocket cho giao tiếp hai chiều real-time.)*
3. "I'd version the API from day one -- for example, /api/v1/urls -- so we can make breaking changes in the future without disrupting existing clients." *(Tôi sẽ đánh version API từ đầu -- ví dụ /api/v1/urls -- để thay đổi trong tương lai mà không ảnh hưởng client hiện tại.)*
4. "For rate limiting, I'd implement a token bucket algorithm and return 429 Too Many Requests when the limit is exceeded." *(Cho giới hạn request, tôi triển khai thuật toán token bucket và trả về 429 khi vượt giới hạn.)*
5. "I'd use idempotency keys for write operations to prevent duplicate requests from creating duplicate resources." *(Tôi sẽ dùng idempotency key cho thao tác ghi để tránh request trùng lặp.)*
6. "For the news feed, I'd use a fan-out-on-write approach: when a user posts, we push the post to the feed of all their followers." *(Cho news feed, tôi dùng fan-out-on-write: khi user đăng bài, đẩy bài đến feed của tất cả follower.)*

---

# 5. THẢO LUẬN VỀ TRADE-OFFS (SỰ ĐÁNH ĐỔI)

Thảo luận trade-offs cho thấy bạn hiểu rằng không có giải pháp hoàn hảo -- chỉ có giải pháp phù hợp với ngữ cảnh cụ thể. Luôn dùng từ "trade-off" một cách rõ ràng.

## 5.1. SQL vs. NoSQL

1. "The trade-off here is between strong consistency with SQL and horizontal scalability with NoSQL." *(Trade-off ở đây là giữa tính nhất quán mạnh với SQL và khả năng mở rộng theo chiều ngang với NoSQL.)*
2. "PostgreSQL gives us ACID compliance and relational integrity, but it's harder to shard across multiple nodes." *(PostgreSQL cho ACID và toàn vẹn quan hệ, nhưng khó sharding qua nhiều node.)*
3. "MongoDB or Cassandra can scale horizontally more easily, but we lose the ability to do complex joins and may have eventual consistency." *(MongoDB hay Cassandra dễ mở rộng ngang hơn, nhưng mất khả năng join phức tạp và có thể chỉ có eventual consistency.)*
4. "If the data has a well-defined schema and we need transactions, I'd lean toward SQL. If the schema evolves frequently and we need to scale writes, NoSQL is the better choice." *(Nếu dữ liệu có schema rõ ràng và cần transaction, tôi chọn SQL. Nếu schema thay đổi liên tục và cần mở rộng ghi, NoSQL là lựa chọn tốt hơn.)*
5. "In practice, many systems use both: SQL for transactional data and NoSQL for high-volume, less-structured data." *(Thực tế, nhiều hệ thống dùng cả hai: SQL cho dữ liệu giao dịch và NoSQL cho dữ liệu khối lượng lớn, ít cấu trúc.)*

## 5.2. Chiến lược Caching

1. "The trade-off with aggressive caching is stale data. Users might see outdated information until the cache expires." *(Trade-off khi cache quá mức là dữ liệu cũ. User có thể thấy thông tin lỗi thời cho đến khi cache hết hạn.)*
2. "Cache-aside is simpler to implement but can lead to cache stampede under heavy load." *(Cache-aside đơn giản hơn nhưng có thể gây cache stampede khi tải cao.)*
3. "Write-through caching ensures consistency but adds latency to every write operation." *(Write-through caching đảm bảo nhất quán nhưng tăng độ trễ cho mỗi thao tác ghi.)*
4. "If we cache too aggressively, we risk serving stale data. If we cache too conservatively, the database becomes a bottleneck." *(Cache quá nhiều: rủi ro phục vụ dữ liệu cũ. Cache quá ít: database trở thành điểm nghẽn.)*
5. "A good compromise is to use a short TTL -- say, 30 seconds to 5 minutes -- combined with active cache invalidation for critical data." *(Một thỏa hiệp tốt là dùng TTL ngắn -- 30 giây đến 5 phút -- kết hợp với invalidation chủ động cho dữ liệu quan trọng.)*

## 5.3. Consistency vs. Availability (Nhất quán vs. Sẵn sàng)

1. "According to the CAP theorem, in the presence of a network partition, we must choose between consistency and availability." *(Theo định lý CAP, khi có network partition, phải chọn giữa consistency và availability.)*
2. "For a banking system, I'd prioritize consistency -- it's better to reject a request than to allow an inconsistent balance." *(Cho hệ thống ngân hàng, tôi ưu tiên consistency -- tốt hơn từ chối request cho phép số dư không nhất quán.)*
3. "For a social media feed, eventual consistency is fine. If a post takes a few seconds to appear, users won't notice." *(Cho social media feed, eventual consistency là ổn. Bài đăng mất vài giây xuất hiện thì user không để ý.)*
4. "The trade-off is: strong consistency means higher latency because every write must be confirmed by all replicas." *(Trade-off là: consistency mạnh nghĩa là độ trễ cao hơn vì mọi ghi phải được xác nhận bởi tất cả replica.)*
5. "I'd go with eventual consistency for the feed generation and strong consistency for the user authentication service." *(Tôi chọn eventual consistency cho feed và strong consistency cho xác thực user.)*

## 5.4. Monolith vs. Microservices

1. "A monolith is simpler to develop and deploy initially, but it becomes harder to scale individual components independently." *(Monolith đơn giản hơn để phát triển và deploy ban đầu, nhưng khó mở rộng từng thành phần độc lập.)*
2. "Microservices give us independent deployment and scaling, but they introduce network complexity, service discovery, and distributed tracing challenges." *(Microservices cho phép triển khai và mở rộng độc lập, nhưng thêm phức tạp mạng, service discovery và distributed tracing.)*
3. "For a small team building an MVP, I'd start with a monolith and refactor into microservices as the team and traffic grow." *(Cho nhóm nhỏ xây MVP, tôi bắt đầu với monolith và refactor thành microservices khi team và traffic tăng.)*
4. "The trade-off is operational complexity. Microservices require robust CI/CD, monitoring, and alerting from day one." *(Trade-off là độ phức tạp vận hành. Microservices cần CI/CD, monitoring và alerting vững chắc ngay từ đầu.)*
5. "If we choose microservices, we need to handle inter-service communication carefully -- either synchronous REST calls or asynchronous events via a message broker." *(Nếu chọn microservices, cần xử lý giao tiếp giữa các service cẩn thận -- REST đồng bộ hoặc event bất đồng bộ qua message broker.)*

---

# 6. NGÔN NGỮ VẼ SƠ ĐỒ & WHITEBOARDING

Khả năng mô tả những gì bạn đang vẽ quan trọng không kém bản thân bản vẽ.

## 6.1. Cụm từ khi đang vẽ

1. "Let me draw the overall architecture. I'll start with the client on the left." *(Để tôi vẽ kiến trúc tổng thể. Bắt đầu với client bên trái.)*
2. "I'm going to draw a box here for the API gateway. This is the entry point for all client requests." *(Tôi sẽ vẽ một hộp cho API gateway. Đây là điểm vào của tất cả request từ client.)*
3. "Next, I'll add three service boxes behind the gateway: the user service, the order service, and the notification service." *(Tiếp theo, thêm 3 hộp service phía sau gateway: user service, order service và notification service.)*
4. "Now let me connect these with arrows. The solid arrows represent synchronous calls, and the dashed arrows represent asynchronous events." *(Bây giờ kết nối bằng mũi tên. Mũi tên liền là gọi đồng bộ, mũi tên đứt là event bất đồng bộ.)*
5. "Down here, I'll draw the data layer with a primary database and two read replicas." *(Phía dưới, tôi vẽ lớp dữ liệu với database chính và hai read replica.)*
6. "Let me add a caching layer between the services and the database to handle the read-heavy traffic." *(Thêm lớp cache giữa services và database để xử lý traffic thiên về đọc.)*

## 6.2. Cụm từ giải thích sơ đồ

1. "As you can see in this diagram, the request flow goes from left to right." *(Như bạn thấy trong sơ đồ, luồng request đi từ trái sang phải.)*
2. "The key insight here is that we've separated the write path from the read path." *(Điểm quan trọng ở đây là chúng ta đã tách đường ghi khỏi đường đọc.)*
3. "I've highlighted this component in red because it's the potential bottleneck I want to discuss." *(Tôi đánh dấu thành phần này màu đỏ vì đây là điểm nghẽn tiềm ẩn cần thảo luận.)*
4. "This is a simplified view. In production, we'd also need health checks, circuit breakers, and retry logic." *(Đây là bản đơn giản hóa. Trên production cần thêm health check, circuit breaker và retry logic.)*
5. "Notice that I've placed the CDN in front of the application servers to serve static assets without hitting our backend." *(Lưu ý tôi đã đặt CDN phía trước application server để phục vụ tài nguyên tĩnh mà không qua backend.)*

## 6.3. Cụm từ khi cần sửa trên bảng

1. "Actually, let me revise this. Instead of a single queue, I'd use separate queues for different priorities." *(Thực ra, để tôi sửa lại. Thay vì một queue, tôi sẽ dùng queue riêng cho từng mức ưu tiên.)*
2. "Wait, I think I should move the cache layer. Let me redraw this part." *(Đợi đã, tôi nghĩ nên di chuyển lớp cache. Để tôi vẽ lại phần này.)*
3. "On second thought, a gRPC connection between these services would be more efficient than REST." *(Nghĩ lại, kết nối gRPC giữa các service sẽ hiệu quả hơn REST.)*
4. "I realize I forgot to add the authentication service. Let me insert that here between the gateway and the services." *(Tôi nhận ra quên thêm authentication service. Để tôi chèn vào đây giữa gateway và services.)*

---

# 7. CÂU HỎI SYSTEM DESIGN PHỔ BIẾN VỚI KHUNG TRẢ LỜI

## 7.1. Design a URL Shortener (Thiết kế hệ thống rút gọn URL)

**Làm rõ**: Bao nhiêu URL mỗi ngày? Alias tùy chỉnh? Analytics? Hết hạn?
**Tổng quan**: Client -> API Gateway -> URL Service -> Database (short_code -> long_url). Lớp cache phía trước DB.
**Đi sâu**: Hàm hash (base62 encoding), xử lý collision, redirect 301 vs 302, analytics qua async logging.
**Trade-offs**: MD5 vs. encoding tự tạo; tạo code trước vs. tạo khi cần; lưu tất cả trong 1 DB vs. sharding.

Cụm từ chính:
- "I'd generate a unique ID, encode it in base62, and use that as the short code."
- "To handle collisions, I'd check for existence before inserting and retry with a new ID if there's a conflict."
- "I'd use a 301 redirect for permanent links and 302 for temporary ones, depending on whether we need to track clicks."

## 7.2. Design a Chat System (Thiết kế hệ thống Chat)

**Làm rõ**: 1-1 hay nhóm? Loại tin nhắn? Lịch sử? Trạng thái online?
**Tổng quan**: Client -> WebSocket Server -> Message Queue -> Chat Service -> Database. Push notification cho user offline.
**Đi sâu**: Quản lý kết nối WebSocket, thứ tự tin nhắn với sequence ID, trạng thái đã đọc, fan-out chat nhóm.
**Trade-offs**: WebSocket vs. long polling; lưu tin nhắn trong DB vs. chỉ giữ gần đây trong cache; feed push vs. pull.

Cụm từ chính:
- "I'd use WebSocket for real-time communication and fall back to long polling for clients that can't maintain persistent connections."
- "For message ordering, I'd assign a monotonically increasing sequence ID per conversation."
- "When a user is offline, I'd push a notification via Firebase Cloud Messaging or Apple Push Notification Service."

## 7.3. Design a News Feed (Thiết kế News Feed)

**Làm rõ**: Thuật toán xếp hạng? Theo thời gian hay cá nhân hóa? Đính kèm media?
**Tổng quan**: Fan-out-on-write cho tạo feed. Bài viết lưu DB và phân phát đến feed table của follower.
**Đi sâu**: Xếp hạng feed, phân trang với cursor, CDN cho media, cache top-N feed cho mỗi user.
**Trade-offs**: Fan-out-on-write vs. fan-out-on-read; pre-computing feeds vs. tính khi cần; tính nhất quán thứ tự feed.

Cụm từ chính:
- "For a system with millions of users, I'd use fan-out-on-read for celebrities with millions of followers and fan-out-on-write for regular users."
- "I'd pre-compute the top 100 posts for each user's feed and cache it in Redis. The full feed is computed on demand when the user scrolls further."
- "For feed ranking, I'd factor in recency, engagement signals, and the user's social graph."

## 7.4. Design a File Storage System (Thiết kế hệ thống lưu trữ file)

**Làm rõ**: Giới hạn dung lượng? Versioning? Chia sẻ file? Cộng tác?
**Tổng quan**: Client -> API Gateway -> File Service -> Object Storage (S3) + Metadata DB. Upload theo block cho file lớn.
**Đi sâu**: Upload phân đoạn có thể resume, khử trùng lặp qua content hashing, giải quyết xung đột khi chỉnh sửa đồng thời, chia sẻ file qua ACL.
**Trade-offs**: Block storage vs. object storage; strong vs. eventual consistency cho metadata; mã hóa client-side vs. server-side.

Cụm từ chính:
- "For large files, I'd implement chunked uploads. The client splits the file into 4MB chunks and uploads them in parallel."
- "I'd use content-addressable storage for deduplication: hash each chunk with SHA-256 and skip uploading if the chunk already exists."
- "For versioning, I'd keep a metadata record pointing to different versions of the file in object storage."

---

# 8. ƯỚC TÍNH & LẬP KẾ HOẠCH DUNG LƯỢNG (ESTIMATION & CAPACITY PLANNING)

Tính toán nhanh cho thấy tư duy có cấu trúc. Người phỏng vấn muốn thấy quá trình của bạn, không phải con số hoàn hảo.

## 8.1. Cụm từ bắt đầu ước tính

1. "Let me do some back-of-envelope calculations to understand the scale we need to support." *(Để tôi tính nhẩm để hiểu quy mô cần hỗ trợ.)*
2. "I'd like to estimate the storage and bandwidth requirements before we finalize the design." *(Tôi muốn ước tính yêu cầu lưu trữ và băng thông trước khi chốt thiết kế.)*
3. "Let's start with the user base. If we assume 100 million users with 10% being daily active users, that's 10 million DAU." *(Bắt đầu với user base. Giả sử 100 triệu user với 10% DAU, tức là 10 triệu DAU.)*
4. "If each user creates an average of 5 shortened URLs per day, that's 50 million new URLs daily." *(Nếu mỗi user tạo trung bình 5 URL mỗi ngày, tức 50 triệu URL mới mỗi ngày.)*
5. "Let me write down these assumptions so we can refer back to them." *(Để tôi ghi lại các giả định để có thể tham chiếu lại.)*

## 8.2. Giải thích phép tính

1. "For storage, each URL record takes roughly 200 bytes. At 50 million new URLs per day, that's about 10 GB of new data daily." *(Về lưu trữ, mỗi bản ghi URL chiếm khoảng 200 bytes. 50 triệu URL mỗi ngày tương đương khoảng 10 GB dữ liệu mới.)*
2. "Over 5 years, that's roughly 18 TB of data, which is manageable with a sharded database setup." *(Trong 5 năm, khoảng 18 TB dữ liệu, hoàn toàn khả thi với sharding.)*
3. "For QPS (queries per second), 50 million daily writes translates to about 600 writes per second on average, with peak traffic being 2-3x that." *(Về QPS, 50 triệu ghi mỗi ngày tương đương khoảng 600 ghi/giây trung bình, peak cao gấp 2-3 lần.)*
4. "The read-to-write ratio for a URL shortener is typically 100:1, so we'd expect about 60,000 reads per second." *(Tỷ lệ đọc:ghi cho URL shortener thường là 100:1, nên kỳ vọng khoảng 60.000 đọc/giây.)*
5. "For bandwidth, if the average API response is 500 bytes, 60,000 reads per second means about 30 MB/s of outbound traffic." *(Về băng thông, nếu response trung bình 500 bytes, 60.000 đọc/giây nghĩa là khoảng 30 MB/s traffic ra.)*

## 8.3. Cụm từ khi không chắc chắn

1. "I'm not 100% sure about the exact number, but let me estimate conservatively and we can adjust from there." *(Tôi không chắc 100% về con số chính xác, nhưng để tôi ước tính thận trọng và điều chỉnh sau.)*
2. "I might be off on this number, but the important thing is the order of magnitude -- are we talking about thousands or millions?" *(Tôi có thể sai số, nhưng quan trọng là bậc độ lớn -- đang nói về nghìn hay triệu?)*
3. "Let me sanity-check this. If [X], then [Y] should be roughly [Z]. That seems reasonable." *(Để tôi kiểm tra lại. Nếu [X], thì [Y] khoảng [Z]. Có vẻ hợp lý.)*
4. "I'd like to double-check my math here. Let me recompute this step." *(Tôi muốn kiểm tra lại phép tính. Để tôi tính lại bước này.)*

---

# 9. MẸO CHO NGƯỜI NÓI TIẾNG ANH KHÔNG PHẢI TIẾNG MẸ ĐẺ

Phỏng vấn system design đòi hỏi giao tiếp rất nhiều. Dưới đây là các chiến lược giúp bạn thể hiện tốt nhất.

## 9.1. Cách suy nghĩ thành tiếng (Think out loud)

1. "Let me think through this step by step. First, I need to consider..." *(Để tôi suy nghĩ từng bước. Đầu tiên, cần xem xét...)*
2. "OK, so at this point I'm considering two options. Option A is [X], and Option B is [Y]." *(OK, lúc này tôi đang cân nhắc hai lựa chọn. Lựa chọn A là [X], Lựa chọn B là [Y].)*
3. "I'm leaning toward [X] because... but let me also consider the downside." *(Tôi nghiêng về [X] vì... nhưng hãy xem xét mặt trái.)*
4. "Let me reason through this out loud so you can follow my thought process." *(Để tôi lập luận thành tiếng để bạn theo dõi quá trình tư duy.)*
5. "What I'm thinking here is... The reason is..." *(Những gì tôi đang nghĩ ở đây là... Lý do là...)*

## 9.2. Câu nói để kiếm thêm thời gian

1. "That's a great question. Let me take a moment to think about that." *(Câu hỏi hay. Để tôi dành chút thời gian suy nghĩ.)*
2. "Hmm, interesting. Let me consider the implications of that." *(Hmm, thú vị. Để tôi xem xét hệ quả.)*
3. "Good point. Let me structure my thoughts on this before I answer." *(Ý hay. Để tôi sắp xếp ý tưởng trước khi trả lời.)*
4. "I want to make sure I give you a thorough answer, so give me just a second." *(Tôi muốn trả lời kỹ lưỡng, cho tôi một chút thời gian.)*
5. "Let me think about the best way to approach this part of the system." *(Để tôi nghĩ cách tiếp cận tốt nhất cho phần này.)*

## 9.3. Hỏi gợi ý một cách chuyên nghiệp

1. "I want to make sure I'm heading in the right direction. Does this approach seem reasonable to you so far?" *(Tôi muốn đảm bảo đi đúng hướng. Cách tiếp cận này có hợp lý không?)*
2. "I'm considering a few options here. Would you like me to explore a specific one?" *(Tôi đang cân nhắc vài lựa chọn. Bạn muốn tôi đi sâu vào cái nào?)*
3. "I want to be efficient with our time. Are there any specific areas you'd like me to focus on?" *(Tôi muốn dùng thời gian hiệu quả. Có khu vực nào bạn muốn tôi tập trung không?)*
4. "Is there a particular aspect of the system you're most interested in discussing?" *(Có khía cạnh nào của hệ thống bạn quan tâm thảo luận nhất không?)*
5. "I've covered the main components. Are there any edge cases or failure scenarios you'd like me to address?" *(Tôi đã bao quát các thành phần chính. Có edge case hay kịch bản lỗi nào cần xử lý không?)*

## 9.4. Xử lý khi thiếu từ vựng

1. "I'm looking for the right term... it's the pattern where the cache sits between the application and the database." *(Tôi đang tìm từ đúng... là pattern mà cache nằm giữa app và database.)*
2. "I can't recall the exact name, but the concept is [describe it]. Ah yes, it's called 'cache-aside.'" *(Tôi quên tên chính xác, nhưng khái niệm là [mô tả]. À đúng rồi, gọi là 'cache-aside'.)*
3. "How do you say... the process of distributing data across multiple nodes? Right, 'sharding.'" *(Nói thế nào nhỉ... quá trình phân phối dữ liệu qua nhiều node? Đúng rồi, 'sharding'.)*
4. "The term escapes me at the moment, but the idea is that we [explain the concept]." *(Tôi quên từ lúc này, nhưng ý tưởng là chúng ta [giải thích khái niệm].)*

---

# KẾT LUẬN

Phỏng vấn system design quan trọng ngang nhau giữa giao tiếp và kiến thức kỹ thuật. Hãy ghi nhớ các nguyên tắc sau:

- **Luôn làm rõ trước khi thiết kế.** Đặt câu hỏi thông minh thể hiện sự trưởng thành và tránh thiết kế sai hệ thống.
- **Tuân thủ khung 4 bước.** Làm rõ, Thiết kế tổng quan, Đi sâu, Trade-offs. Khung này tạo cấu trúc cho câu trả lời.
- **Suy nghĩ thành tiếng.** Người phỏng vấn không thể đọc suy nghĩ của bạn. Kể lại quá trình lập luận, kể cả khi chưa chắc chắn.
- **Gọi tên trade-offs một cách rõ ràng.** Nói "The trade-off here is..." để cho thấy bạn hiểu cả hai mặt của một quyết định.
- **Đừng hoảng nếu không biết điều gì đó.** Thành thật, suy luận từ nguyên lý cơ bản và hỏi gợi ý nếu cần.
- **Luyện tập vừa vẽ vừa giải thích.** Đây là kỹ năng cải thiện qua thực hành. Dùng bảng trắng hoặc tablet ở nhà.
- **Học từ vựng chuyên ngành.** Các thuật ngữ như "sharding," "fan-out," "cache-aside," "eventual consistency," và "idempotency" được kỳ vọng ở cấp độ mid-senior.
