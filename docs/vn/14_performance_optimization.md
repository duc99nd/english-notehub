# Tối ưu Hiệu năng (Performance Optimization)

Tối ưu hóa hiệu năng hệ thống là một trong những kỹ năng được đánh giá cao nhất đối với các lập trình viên senior. Thảo luận về khả năng mở rộng (scaling), tối ưu cơ sở dữ liệu và xử lý rò rỉ bộ nhớ (memory leaks) đòi hỏi vốn từ vựng kỹ thuật chuyên sâu. Tài liệu này cung cấp các thuật ngữ chuyên ngành, mẫu câu hành động và kịch bản đối thoại thực tế để giúp bạn dẫn dắt các cuộc thảo luận liên quan đến hiệu năng.

## 1. Thuật ngữ Kỹ thuật Phân loại theo Chủ đề

### Thuật ngữ Hiệu năng Frontend (Frontend Performance)
- **Bundle size / Tree-shaking:** Kích thước bundle (tổng dung lượng file JS/CSS). Tree-shaking là quá trình loại bỏ code dư thừa (không được import/sử dụng) trong quá trình build để giảm tối đa kích thước bundle này.
- **Lazy loading / Code-splitting:** Chia nhỏ code (code-splitting) thành các phần nhỏ để tải chậm (lazy load) động, chỉ khi người dùng truy cập vào một route cụ thể nào đó.
- **Memoization (Ghi nhớ/Lưu đệm kết quả):** Lưu trữ kết quả của các hàm tính toán nặng hoặc quá trình render component bằng cách dùng các hook React như `useMemo` hoặc `useCallback`.
- **Debouncing / Throttling:** Debouncing (trì hoãn thực thi cho tới khi người dùng ngừng gõ phím); Throttling (giới hạn tần suất thực thi tối đa một lần trong khoảng thời gian X mili-giây, rất hữu ích cho các sự kiện cuộn trang hoặc co giãn màn hình).

### Thuật ngữ Hiệu năng Backend & Database (Backend & Database Performance)
- **Latency vs. Throughput:** Độ trễ (Latency) là thời gian phản hồi cho một request đơn lẻ (khứ hồi); Thông lượng (Throughput) là tổng khối lượng request hệ thống có thể xử lý trong một khoảng thời gian (ví dụ: số yêu cầu mỗi giây - RPS).
- **N+1 Query Problem:** Lỗi hiệu năng xảy ra khi ứng dụng thực thi 1 câu truy vấn ban đầu để lấy danh sách bản ghi, sau đó lại thực thi thêm N câu truy vấn riêng lẻ để lấy dữ liệu liên quan của từng bản ghi đó.
- **Eager loading vs. Lazy loading (Tải trước vs. Tải chậm):** Eager loading tải dữ liệu liên quan ngay lập tức thông qua câu lệnh SQL JOIN; Lazy loading tải dữ liệu khi có yêu cầu phát sinh, điều này thường là nguyên nhân dẫn đến lỗi N+1 query.
- **Connection Pool Exhaustion (Cạn kiệt kết nối):** Trạng thái tất cả các kết nối tới database đều đang bận, buộc các request mới đến phải xếp hàng đợi, gây ra lỗi timeout (hết giờ).
- **Memory Leak / Memory Footprint:** Rò rỉ bộ nhớ (memory leak) xảy ra khi ứng dụng không giải phóng vùng nhớ đã dùng xong. Lượng bộ nhớ tiêu thụ (memory footprint) là lượng RAM thực tế ứng dụng sử dụng khi hoạt động.

---

## 2. Các mẫu câu Đề xuất Giải pháp Tối ưu chuyên nghiệp

Hãy dùng các mẫu câu cấu trúc này để chỉ ra điểm nghẽn hệ thống và đề xuất phương án giải quyết.

### Chỉ ra các vấn đề hiệu năng:
- "We are seeing a significant **CPU spike** whenever the report generation service runs." *(Chúng tôi đang thấy hiện tượng **CPU tăng vọt (spike)** mỗi khi service xuất báo cáo hoạt động.)*
- "The landing page has poor **Largest Contentful Paint (LCP)** scores due to unoptimized hero images." *(Trang landing page có điểm **LCP (thời gian hiển thị nội dung lớn nhất)** rất tệ do các ảnh hero chưa được tối ưu dung lượng.)*
- "The profile page is experiencing **high latency** because of a missing index on the foreign key column." *(Trang cá nhân đang gặp **độ trễ cao (latency)** do thiếu chỉ mục (index) ở cột khóa ngoại.)*
- "The server is crashing under load because the application is holding onto references, causing a **heap out-of-memory error**." *(Server bị sập khi chịu tải lớn do ứng dụng vẫn giữ các tham chiếu rác, gây ra lỗi **tràn bộ nhớ heap**.)*

### Đề xuất giải pháp tối ưu:
- "I propose we **introduce a Redis cache** for our product catalog endpoint to offload database read traffic." *(Tôi đề xuất chúng ta **thêm cache Redis** cho endpoint danh mục sản phẩm để giảm tải lượng truy cập đọc vào database.)*
- "We can reduce our bundle size by 35% if we **tree-shake** the utility library and lazy load the dashboard widgets." *(Chúng ta có thể giảm 35% kích thước bundle nếu chạy **tree-shake** thư viện tiện ích và dùng lazy load cho các widget trên dashboard.)*
- "Let's **batch these database operations** into a single transaction instead of making individual insert queries inside the loop." *(Hãy **gom nhóm (batch) các thao tác DB** này vào trong một transaction duy nhất thay vì thực thi các câu lệnh insert riêng lẻ trong vòng lặp.)*
- "We should **implement database pagination** using keyset cursor pagination to avoid performance degradation on offset-based page queries." *(Chúng ta nên **triển khai phân trang database** dùng con trỏ (keyset cursor) để tránh giảm hiệu năng khi phân trang dùng offset truyền thống.)*

---

## 3. Các chỉ số Hiệu năng dùng trong Báo cáo

Khi đề xuất tối ưu, hãy thuyết phục sếp bằng các số liệu cụ thể:

- **TTFB (Time to First Byte):** "Adding a CDN reduced our TTFB from 600ms to 50ms globally." *(Việc thêm CDN đã giúp giảm thời gian phản hồi đầu tiên (TTFB) từ 600ms xuống còn 50ms trên toàn cầu.)*
- **RPS (Requests Per Second):** "By migrating the service to Go, we boosted throughput from 200 RPS to 1,200 RPS." *(Bằng cách chuyển dịch service sang Go, chúng tôi đã tăng thông lượng từ 200 RPS lên 1.200 RPS.)*
- **Memory Footprint:** "Refactoring the file upload logic dropped the container's memory footprint by 40%." *(Việc refactor logic upload file đã giúp giảm 40% lượng bộ nhớ RAM tiêu thụ của container.)*
- **API Latency:** "Optimizing the database joins cut our average API response latency in half." *(Tối ưu hóa các lệnh JOIN database giúp giảm một nửa độ trễ phản hồi trung bình của API.)*

---

## 4. Kịch bản họp thực tế: Cân chỉnh Hiệu năng hệ thống

Lập trình viên Frontend Lead và Backend Lead gặp nhau để thảo luận về lỗi dashboard load chậm.

### 👥 Nhân vật:
- **Đức** (Frontend Lead)
- **Sarah** (Backend Lead)

### 💬 Đoạn đối thoại:
- **Đức**: "Hi Sarah, thanks for joining. I wanted to sync about the dashboard load time. Currently, it's taking almost 4 seconds for the initial paint on mobile devices. Our Core Web Vitals are in the red." *(Chào Sarah, cảm ơn bạn đã tham gia. Tôi muốn thảo luận về thời gian load dashboard. Hiện tại, mất gần 4 giây để hiển thị phần nội dung chính trên thiết bị di động. Chỉ số Core Web Vitals của chúng ta đang báo đỏ.)*
- **Sarah**: "That's quite high. Have we profiled the network requests to see where the bottleneck is?" *(Mất 4 giây thì khá cao đó. Chúng ta đã đo đạc (profile) các request mạng để xem điểm nghẽn ở đâu chưa?)*
- **Đức**: "Yes, we noticed that the `/api/dashboard/stats` endpoint takes about 2.2 seconds to return a response. That's the main blocker." *(Rồi, chúng tôi thấy endpoint `/api/dashboard/stats` mất khoảng 2,2 giây để trả về dữ liệu. Đó là nguyên nhân gây nghẽn chính.)*
- **Sarah**: "I see. Let me look at the backend query log. Ah, it looks like that endpoint is performing a complex aggregation across multiple tables without proper indexes. It's doing a full table scan." *(Tôi hiểu rồi. Để tôi xem log truy vấn của backend. À, có vẻ endpoint đó đang thực hiện một lệnh gộp dữ liệu phức tạp qua nhiều bảng mà không có index phù hợp. Nó đang quét toàn bộ bảng (full table scan).)*
- **Đức**: "That explains it. Can we optimize the query or add database indexing on the join columns?" *(Hóa ra là vậy. Chúng ta có thể tối ưu câu query hoặc đánh index database ở các cột join được không?)*
- **Sarah**: "Definitely. I'll add an index to the `organization_id` and `created_at` fields. I'll also implement query caching since the stats data only updates once an hour anyway." *(Chắc chắn rồi. Tôi sẽ đánh chỉ mục cho các trường `organization_id` và `created_at`. Tôi cũng sẽ cấu hình cache truy vấn vì dữ liệu thống kê này thực tế chỉ cập nhật mỗi giờ một lần thôi.)*
- **Đức**: "Caching is a great idea. On the frontend side, we'll also start debouncing our search input and lazy load the charts component so we don't block the initial page render." *(Dùng cache là ý tưởng tuyệt vời. Về phía frontend, chúng tôi cũng sẽ thêm debounce cho ô tìm kiếm và lazy load component biểu đồ để tránh làm chậm lần render trang đầu tiên.)*
- **Sarah**: "Sounds like a solid plan. Let's deploy the database index updates to staging first, run a load test, and compare the latency." *(Kế hoạch nghe rất chắc chắn đó. Chúng ta đẩy cập nhật index lên staging trước nhé, sau đó chạy test chịu tải (load test) và so sánh lại độ trễ.)*
- **Đức**: "Excellent. I'll keep an eye on the Lighthouse metrics on staging. Let me know when the backend updates are ready." *(Tuyệt quá. Tôi sẽ theo dõi các chỉ số Lighthouse trên staging. Báo tôi biết khi nào phần cập nhật backend sẵn sàng nhé.)*
