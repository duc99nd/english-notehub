# Giải thích vấn đề kỹ thuật cho Non-tech (Daily English)

Là một kỹ sư phần mềm, bạn sẽ thường xuyên phải giao tiếp với Product Manager (PM), khách hàng, designer, hoặc team marketing - những người không có chuyên môn về code. Nếu bạn lạm dụng quá nhiều thuật ngữ kỹ thuật phức tạp (jargon), họ sẽ dễ bị bối rối và làm chậm các quyết định quan trọng của dự án. Chìa khóa để giao tiếp hiệu quả là nói tiếng Anh đơn giản hàng ngày, tập trung vào kết quả kinh doanh và sử dụng các phép so sánh thực tế.

---

## 1. Tiếng Anh Thuật Ngữ vs. Tiếng Anh Giao Tiếp Hàng Ngày

Hãy tập trung vào trải nghiệm của người dùng hoặc ảnh hưởng đến doanh nghiệp thay vì kể lể các lớp triển khai kỹ thuật bên dưới.

| ❌ Nhiều thuật ngữ (Gây bối rối cho PM) | 🟢 Đơn giản & Daily (Phù hợp với PM) |
| :--- | :--- |
| "The payload validation failed on the API endpoint due to a null pointer exception." | "The system rejected the form because the user left the email field blank." *(Hệ thống từ chối form vì người dùng bỏ trống trường email.)* |
| "We are experiencing server overhead due to a memory leak in our background worker." | "The app is running slow because it's using too much memory. We are rebooting it now." *(Ứng dụng chạy chậm do ngốn quá nhiều bộ nhớ. Chúng tôi đang restart lại ứng dụng.)* |
| "I need to configure a Redis database instance to cache the response payload." | "I am setting up a temporary storage to save user info so the page loads faster." *(Tôi đang thiết lập bộ lưu trữ tạm thời để lưu thông tin người dùng giúp trang tải nhanh hơn.)* |
| "The CI/CD pipeline failed during the unit testing phase." | "The automated tests failed, so we cannot release the update just yet." *(Hệ thống test tự động bị lỗi, nên chúng ta chưa thể release bản cập nhật ngay lúc này.)* |
| "We need to run a migration to update the schema and re-index the foreign keys." | "We need to update our database organization so searching for users is faster." *(Chúng ta cần sắp xếp lại cấu trúc dữ liệu để tìm kiếm người dùng nhanh hơn.)* |
| "The third-party API is rate-limiting our incoming HTTP requests." | "The payment provider is blocking us because we are sending too many requests at once." *(Bên cổng thanh toán đang chặn vì chúng ta gửi quá nhiều yêu cầu cùng lúc.)* |
| "I am refactoring this spaghetti codebase to decrease technical debt." | "I am cleaning up the old code to make it easier and faster to add features later." *(Tôi đang dọn dẹp phần code cũ để sau này thêm tính năng mới dễ dàng và nhanh chóng hơn.)* |
| "We need to deploy a hotfix immediately to mitigate the production crash." | "We are releasing an emergency update right now to fix the login bug." *(Chúng tôi đang đẩy bản cập nhật khẩn cấp lên để sửa lỗi đăng nhập ngay lập tức.)* |
| "This feature requires a cron job running asynchronously every midnight." | "We will set up an automatic task that runs every night at midnight in the background." *(Chúng ta sẽ thiết lập một tác vụ chạy ngầm tự động vào mỗi nửa đêm.)* |
| "The application state is managed by Redux with unidirectional data flow." | "We use a central tool to save user selections across different pages of the app." *(Chúng tôi dùng một bộ lưu trữ chung để giữ thông tin người dùng đã chọn trên mọi màn hình.)* |
| "This library is deprecated and no longer receives security patches." | "This old tool is no longer supported and could make our system vulnerable." *(Thư viện cũ này không còn được hỗ trợ nữa và có thể gây rủi ro bảo mật cho hệ thống.)* |
| "We have high network latency due to DNS misconfiguration." | "The page is loading slowly because of a network connection setup issue." *(Trang web tải chậm do lỗi cấu hình mạng kết nối.)* |

---

## 2. 3 Nguyên Tắc Vàng Khi Giao Tiếp Với Người Không Chuyên

1.  **Skip the Jargon (Bỏ qua thuật ngữ phức tạp):** Đừng bao giờ đề cập đến *Docker, API, payload, garbage collection, query execution plan* trừ khi bạn đã giải thích rõ nghĩa của chúng trước đó.
2.  **Use Everyday Analogies (Dùng phép so sánh thực tế):** Ví database như tủ đựng tài liệu, server như nhà bếp nhà hàng, và refactor code như dọn dẹp nhà cửa.
3.  **Focus on the Business Impact (Tập trung vào ảnh hưởng thực tế):** Nói cho họ biết điều này có nghĩa là gì đối với người dùng hoặc doanh nghiệp (ví dụ: "người dùng có thể mua hàng nhanh hơn" hoặc "trang web sẽ không bị sập").

---

## 3. Phép So Sánh Thực Tế Dành Cho Developer

Sử dụng 11 phép so sánh có sẵn này để giải thích các khái niệm trừu tượng trong cuộc họp hoặc khi thuyết trình với khách hàng:

| Thuật ngữ kỹ thuật | Phép so sánh thực tế | Giải thích đơn giản |
| :--- | :--- | :--- |
| **Database** | Một tủ đựng hồ sơ khổng lồ | "Nơi chúng ta lưu trữ dữ liệu. Nếu không sắp xếp ngăn nắp (indexing - đánh chỉ mục), việc tìm kiếm một tài liệu sẽ mất rất nhiều thời gian." |
| **Server** | Nhà bếp của một nhà hàng | "Nếu quá nhiều khách hàng gọi món cùng một lúc, nhà bếp sẽ bị quá tải và dịch vụ sẽ trở nên chậm chạp." |
| **Cache (Redis)** | Cuốn sổ tay của bồi bàn | "Thay vì mỗi lần đều phải chạy vào bếp hỏi menu, người bồi bàn chỉ cần nhìn vào sổ tay để có câu trả lời ngay lập tức." |
| **Refactoring** | Dọn dẹp nhà cửa | "Chúng ta không xây thêm phòng mới; chúng ta chỉ dọn dẹp rác và sắp xếp lại đồ đạc để đi lại nhanh hơn, dễ dàng hơn." |
| **Bug** | Lỗi chính tả trong công thức nấu ăn | "Đầu bếp nấu đúng theo công thức, nhưng vì công thức bị in sai chính tả nên món ăn ra lò có vị không đúng." |
| **API** | Người phục vụ bàn | "Người trung chuyển nhận order của bạn tại bàn đưa vào nhà bếp và mang món ăn ra lại cho bạn." |
| **Docker** | Thùng container chở hàng | "Chúng ta đóng gói code và mọi thứ đi kèm vào một chiếc hộp tiêu chuẩn để có thể vận chuyển và chạy ở bất kỳ máy tính nào." |
| **Firewall** | Nhân viên bảo vệ ở cổng | "Một người bảo vệ đứng ở cửa kiểm tra thẻ ra vào và chỉ cho phép những người được ủy quyền đi vào tòa nhà." |
| **Load Balancer** | Lễ tân điều phối bàn ăn | "Một nhân viên điều phối khách vào các bàn trống khác nhau để không có người phục vụ nào bị quá tải." |
| **Git / Version Control** | Tính năng Track Changes trong Word / Google Docs | "Hệ thống lưu lại mọi phiên bản của file để chúng ta biết ai đã sửa gì và có thể quay lại quá khứ nếu lỡ làm sai." |
| **Encryption** | Ngôn ngữ mật mã | "Dịch tin nhắn sang một ngôn ngữ bí mật mà chỉ người gửi và người nhận mới biết cách đọc." |

---

## 4. Mẹo Ngữ Phép Giúp Đơn Giản Hóa Khái Niệm

### 4.1. Định nghĩa thuật ngữ bằng Mệnh đề quan hệ xác định
Sử dụng công thức: `[Tech Term] + is a [general noun] + that + [action in simple terms]`.
* *"**Docker is a tool that** packages our software so it runs the same way on every computer."* *(Docker là một công cụ giúp đóng gói phần mềm để nó chạy giống hệt nhau trên mọi máy tính.)*
* *"**An API is like a bridge that** allows two different systems to talk to each other."* *(API giống như một chiếc cầu nối cho phép hai hệ thống khác nhau nói chuyện được với nhau.)*
* *"**A migration is a script that** updates the structure of our database safely."* *(Migration là script giúp cập nhật cấu trúc cơ sở dữ liệu một cách an toàn.)*

### 4.2. Giảm nhẹ mức độ rủi ro bằng Động từ khuyết thiếu
Khi cảnh báo các bên liên quan (non-tech) về rủi ro kỹ thuật, hãy dùng các động từ khuyết thiếu như *might, could,* hoặc *may* để nghe khách quan, chuyên nghiệp và tránh làm họ hoảng loạn.
* *"If we don't fix this now, it **could lead to** security vulnerabilities down the road."* *(Nếu chúng ta không sửa cái này bây giờ, nó có thể dẫn đến các lỗ hổng bảo mật sau này.)*
* *"Without caching, the database **might crash** under heavy traffic."* *(Nếu không có cache, database có thể bị sập khi lượng truy cập tăng cao.)*
* *"If we rush this feature, we **may introduce** unexpected bugs into production."* *(Nếu làm vội tính năng này, chúng ta có thể vô tình tạo ra lỗi trên môi trường production.)*

### 4.3. Lấy "Trải nghiệm của Người dùng" làm Chủ ngữ
Thay vì biến các thành phần code thành chủ ngữ của câu, hãy lấy **người dùng** hoặc **hành vi của hệ thống** làm chủ ngữ.
* **Tập trung vào tech:** *"The database query returned an empty set."* *(Truy vấn database trả về một tập rỗng.)*
* **Tập trung vào user:** *"The user **won't see** any search results on the screen."* *(Người dùng sẽ không thấy bất kỳ kết quả tìm kiếm nào trên màn hình.)*
* **Tập trung vào tech:** *"The server returned a 500 error due to thread exhaustion."* *(Server báo lỗi 500 do cạn kiệt tài nguyên xử lý.)*
* **Tập trung vào user:** *"The user **will see** an error screen when they try to save their profile."* *(Người dùng sẽ thấy màn hình báo lỗi khi họ cố gắng lưu thông tin cá nhân.)*

---

## 5. Các Mẫu Tin Nhắn Điền Vào Chỗ Trống Cho PM & Khách Hàng

### Mẫu A: Giải thích một lỗi Production (Nhắn Slack cho PM)
> "Hi **[Tên PM]**,
>
> We found the issue with the **[tính năng bị lỗi, ví dụ: checkout button]**.
>
> * **In simple terms:** **[Giải thích đơn giản, ví dụ: the system was confused when users clicked twice very fast]**.
> * **The fix:** I have written code to disable the button after the first click.
> * **Timeline:** I am testing it now, and it will be live in **[Thời gian, ví dụ: 20 minutes]**. Users will be able to check out normally then."

### Mẫu B: Giải thích lý do bị chậm tiến độ (Do nợ kỹ thuật / Code cũ quá rối)
> "Hi **[Tên PM]**,
>
> We need about **[Thời gian cần thêm, ví dụ: one extra day]** to complete this feature.
>
> * **Why?** The old code in this section is like a **[Phép so sánh, ví dụ: tangled ball of wires]**. If we just force the new code in, it might break other parts of the app.
> * **What we are doing:** We are spending today cleaning it up first. This will make the app more stable and help us build future features much faster."

### Mẫu C: Từ chối một yêu cầu tính năng phi thực tế (Giao tiếp khéo léo)
> "I understand why we want **[tên tính năng]**. It's a great idea.
>
> However, there is a technical constraint. **[Nêu giới hạn kỹ thuật, ví dụ: Apple's system does not allow apps to access this data]**.
>
> As an alternative, can we **[đề xuất giải pháp đơn giản hơn, ví dụ: ask the user to input the data manually]** instead? It is much faster to build and achieves the same goal."

### Mẫu D: Thuyết phục PM cho phép Refactor Code
> "Hi **[Tên PM]**,
>
> I'd like to allocate 10% of our next sprint to refactor the **[tên module, ví dụ: report generator]**.
>
> * **Why it matters:** Right now, the code is very complex, making it slow to add new features. Refactoring is like organizing a messy warehouse—it will allow us to deliver future reports twice as fast and reduce the chance of bugs."

### Mẫu E: Giải thích lý do cần nâng cấp/migration server
> "Hi **[Tên]**,
>
> We need to schedule a database migration this Sunday at midnight.
>
> * **What this means:** We are upgrading our database server to a newer version. It is like moving our store to a larger, more secure building.
> * **Impact:** The site will be offline for about **[Thời gian, ví dụ: 10 minutes]**. We chose midnight on Sunday to minimize the impact on our users.
> * **Benefits:** This will prevent database crashes during high-traffic sales events next month."

### Mẫu F: Giải thích sự cố lỗi tích hợp/bị Rate Limit với đối tác
> "Hi **[Tên khách hàng]**,
>
> We are currently unable to sync inventory data because the shipping partner's system is overloaded.
>
> * **In simple terms:** They have a speed limit on how much data we can send them. We have reached that limit, so they are temporarily blocking our requests.
> * **Our solution:** We are modifying our code to send the data in smaller packages throughout the day rather than all at once. This should resolve the blocking issue."

### Mẫu G: Giải thích tầm quan trọng của việc viết test tự động (Vì sao QA mất thời gian)
> "Hi **[Tên]**,
>
> I wanted to explain why we need an extra day for automated testing.
>
> * **Why it matters:** Writing automated tests is like hiring robots to check our work. They will run through hundreds of user scenarios in seconds every time we push an update.
> * **Benefits:** This prevents new updates from accidentally breaking old features, saving us from emergency hotfixes in production later."

### Mẫu H: Giải thích độ trễ cập nhật tên miền (DNS Propagation) cho khách hàng
> "Hi **[Tên]**,
>
> We have successfully launched the new website. However, some users might still see the old site for the next few hours.
>
> * **In simple terms:** Internet address books around the world need time to update. This process (called DNS propagation) is like updating your address in every phonebook globally—it takes time.
> * **Timeline:** The new site should be visible to everyone within **[Thời gian, ví dụ: 2 to 24 hours]**. No action is needed on your part."

---

## 6. Dịch Từ Thuật Ngữ Sang Ngôn Ngữ Kinh Doanh

Dưới đây là bảng tra cứu nhanh khi trình bày các khái niệm kỹ thuật trước các stakeholder kinh doanh:

| Thuật ngữ kỹ thuật | Cách dịch sang ngôn ngữ kinh doanh |
| :--- | :--- |
| **CI/CD Pipeline** | "Hệ thống kiểm tra và deploy tự động" |
| **Technical Debt** | "Chi phí bảo trì code cũ / Dọn dẹp hệ thống" |
| **API Rate Limit** | "Giới hạn an toàn khi kết nối bên thứ ba" |
| **Hotfix** | "Cập nhật sửa lỗi khẩn cấp lập tức" |
| **Microservices** | "Chia nhỏ ứng dụng thành các module độc lập" |
| **SQL Indexing** | "Tối ưu hóa tốc độ tìm kiếm dữ liệu" |
| **Elasticsearch** | "Công cụ tìm kiếm nâng cao như Google tích hợp trong app" |
| **Data Validation** | "Hệ thống kiểm tra bảo mật đầu vào" |
| **SSL Certificate** | "Khóa kết nối bảo mật trang web (HTTPS)" |
| **Webhooks** | "Hệ thống tự động gửi thông báo trực tiếp từ bên ngoài" |

---

## 7. Kịch bản Hội thoại Thực tế (Developer & PM)

* **PM:** *"Why is the user history page loading so slowly? Is the database broken?"* *(Tại sao trang lịch sử người dùng tải chậm thế? Database bị hỏng à em?)*
* **Dev:** *"No, the database is healthy. To put it simply, our database is like a library with millions of books, but we haven't created an index for the user history section yet. The librarian has to check every single book to find the user's history."* *(Dạ không, database vẫn chạy tốt ạ. Để giải thích đơn giản thì database của mình giống như một thư viện với hàng triệu cuốn sách, nhưng chúng ta chưa lập mục lục cho phần lịch sử người dùng. Thủ thư phải đi dò từng cuốn một để tìm đúng lịch sử của người dùng đó.)*
* **PM:** *"Ah, I see. How do we fix that?"* *(À anh hiểu rồi. Thế sửa thế nào em?)*
* **Dev:** *"We just need to create an index. It's like adding a catalog to the library. I will write a migration script to set this up today. Once it's deployed, the page should load instantly."* *(Chúng ta chỉ cần tạo một mục lục (index) thôi ạ. Việc này giống như làm một cuốn danh mục tra cứu trong thư viện. Hôm nay em sẽ viết code cấu hình phần này. Khi deploy xong, trang sẽ tải ngay lập tức.)*
* **PM:** *"Perfect! Let's get that done."* *(Tuyệt vời! Làm luôn em nhé.)*
* **Dev:** *"Great. I'll make sure it's tested on staging first to ensure there's zero impact on live users."* *(Dạ vâng. Em sẽ test kỹ trên staging trước để đảm bảo không ảnh hưởng đến người dùng thực tế.)*

---

## 8. Các Lỗi Thường Gặp Cần Tránh

* **Sử dụng từ "Đơn giản" hoặc "Dễ":**
  * Đừng nói: *"It's very simple, you just configure a Docker container."* (Rất đơn giản, anh chỉ cần cấu hình container Docker là xong). Câu nói này có thể gây cảm giác trịch thượng. Thay vào đó hãy nói: *"We can set up a tool to handle this automatically."* (Chúng ta có thể thiết lập một công cụ để xử lý việc này tự động.)
* **Đưa ra Code thô hoặc Log lỗi:**
  * Tránh chụp màn hình log lỗi terminal hoặc payload JSON gửi cho PM hay khách hàng. Họ sẽ bị ngợp thông tin. Hãy tóm tắt kết quả cuối cùng.
* **Nghe có vẻ bực bội, khó chịu:**
  * Khi PM hỏi *"Why does this take three days?"*, đừng phản ứng phòng thủ. Hãy giải thích các bước ẩn (như viết test, migrate database, kiểm tra bảo mật) bằng ngôn ngữ đời thường.
* **Chỉ nói về phần phát triển mà bỏ qua kết quả cho người dùng:**
  * PM chỉ quan tâm đến *trải nghiệm của người dùng*. Thay vì nói *"Tôi đang viết regex để validate độ dài chuỗi bên backend"* hãy nói *"Tôi đang đảm bảo mật khẩu của người dùng đủ dài để tài khoản của họ được bảo mật."*
* **Sử dụng phép so sánh không đồng nhất:**
  * Đảm bảo phép so sánh của bạn đồng bộ từ đầu đến cuối. Nếu đã ví server là nhà hàng, đừng nhảy sang ví von nó là cái xe ô tô ở giữa chừng cuộc họp kẻo gây bối rối cho người nghe.
