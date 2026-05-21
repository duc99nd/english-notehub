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

---

## 2. 3 Nguyên Tắc Vàng Khi Giao Tiếp Với Người Không Chuyên

1.  **Skip the Jargon (Bỏ qua thuật ngữ phức tạp):** Đừng bao giờ đề cập đến *Docker, API, payload, garbage collection, query execution plan* trừ khi bạn đã giải thích rõ nghĩa của chúng trước đó.
2.  **Use Everyday Analogies (Dùng phép so sánh thực tế):** Ví database như tủ đựng tài liệu, server như nhà bếp nhà hàng, và refactor code như dọn dẹp nhà cửa.
3.  **Focus on the Business Impact (Tập trung vào ảnh hưởng thực tế):** Nói cho họ biết điều này có nghĩa là gì đối với người dùng hoặc doanh nghiệp (ví dụ: "người dùng có thể mua hàng nhanh hơn" hoặc "trang web sẽ không bị sập").

---

## 3. Phép So Sánh Thực Tế Dành Cho Developer

Sử dụng các phép so sánh có sẵn này để giải thích các khái niệm trừu tượng trong cuộc họp:

| Thuật ngữ kỹ thuật | Phép so sánh thực tế | Giải thích đơn giản |
| :--- | :--- | :--- |
| **Database** | Một tủ đựng hồ sơ khổng lồ | "Nơi chúng ta lưu trữ dữ liệu. Nếu không sắp xếp ngăn nắp (indexing - đánh chỉ mục), việc tìm kiếm một tài liệu sẽ mất rất nhiều thời gian." |
| **Server** | Nhà bếp của một nhà hàng | "Nếu quá nhiều khách hàng gọi món cùng một lúc, nhà bếp sẽ bị quá tải và dịch vụ sẽ trở nên chậm chạp." |
| **Cache (Redis)** | Cuốn sổ tay của bồi bàn | "Thay vì mỗi lần đều phải chạy vào bếp hỏi menu, người bồi bàn chỉ cần nhìn vào sổ tay để có câu trả lời ngay lập tức." |
| **Refactoring** | Dọn dẹp nhà cửa | "Chúng ta không xây thêm phòng mới; chúng ta chỉ dọn dẹp rác và sắp xếp lại đồ đạc để đi lại nhanh hơn, dễ dàng hơn." |
| **Bug** | Lỗi chính tả trong công thức nấu ăn | "Đầu bếp nấu đúng theo công thức, nhưng vì công thức bị in sai chính tả nên món ăn ra lò có vị không đúng." |
| **API** | Người phục vụ bàn | "Người trung chuyển nhận order của bạn tại bàn đưa vào nhà bếp và mang món ăn ra lại cho bạn." |

---

## 4. Mẹo Ngữ Pháp Giúp Đơn Giản Hóa Khái Niệm

### 4.1. Định nghĩa thuật ngữ bằng Mệnh đề quan hệ xác định
Sử dụng công thức: `[Tech Term] + is a [general noun] + that + [action in simple terms]`.
* *"**Docker is a tool that** packages our software so it runs the same way on every computer."* *(Docker là một công cụ giúp đóng gói phần mềm để nó chạy giống hệt nhau trên mọi máy tính.)*
* *"**An API is like a bridge that** allows two different systems to talk to each other."* *(API giống như một chiếc cầu nối cho phép hai hệ thống khác nhau nói chuyện được với nhau.)*

### 4.2. Giảm nhẹ mức độ rủi ro bằng Động từ khuyết thiếu
Khi cảnh báo các bên liên quan (non-tech) về rủi ro kỹ thuật, hãy dùng các động từ khuyết thiếu như *might, could,* hoặc *may* để nghe khách quan, chuyên nghiệp và tránh làm họ hoảng loạn.
* *"If we don't fix this now, it **could lead to** security vulnerabilities down the road."* *(Nếu chúng ta không sửa cái này bây giờ, nó có thể dẫn đến các lỗ hổng bảo mật sau này.)*
* *"Without caching, the database **might crash** under heavy traffic."* *(Nếu không có cache, database có thể bị sập khi lượng truy cập tăng cao.)*

### 4.3. Lấy "Trải nghiệm của Người dùng" làm Chủ ngữ
Thay vì biến các thành phần code thành chủ ngữ của câu, hãy lấy **người dùng** hoặc **hành vi của hệ thống** làm chủ ngữ.
* **Tập trung vào tech:** *"The database query returned an empty set."* *(Truy vấn database trả về một tập rỗng.)*
* **Tập trung vào user:** *"The user **won't see** any search results on the screen."* *(Người dùng sẽ không thấy bất kỳ kết quả tìm kiếm nào trên màn hình.)*

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

---

## 7. Kịch bản Hội thoại Thực tế (Developer & PM)

* **PM:** *"Why is the user history page loading so slowly? Is the database broken?"* *(Tại sao trang lịch sử người dùng tải chậm thế? Database bị hỏng à em?)*
* **Dev:** *"No, the database is healthy. To put it simply, our database is like a library with millions of books, but we haven't created an index for the user history section yet. The librarian has to check every single book to find the user's history."* *(Dạ không, database vẫn chạy tốt ạ. Để giải thích đơn giản thì database của mình giống như một thư viện với hàng triệu cuốn sách, nhưng chúng ta chưa lập mục lục cho phần lịch sử người dùng. Thủ thư phải đi dò từng cuốn một để tìm đúng lịch sử của người dùng đó.)*
* **PM:** *"Ah, I see. How do we fix that?"* *(À anh hiểu rồi. Thế sửa thế nào em?)*
* **Dev:** *"We just need to create an index. It's like adding a catalog to the library. I will write a migration script to set this up today. Once it's deployed, the page should load instantly."* *(Chúng ta chỉ cần tạo một mục lục (index) thôi ạ. Việc này giống như làm một cuốn danh mục tra cứu trong thư viện. Hôm nay em sẽ viết code cấu hình phần này. Khi deploy xong, trang sẽ tải ngay lập tức.)*
* **PM:** *"Perfect! Let's get that done."* *(Tuyệt vời! Làm luôn em nhé.)*

---

## 8. Các Lỗi Thường Gặp Cần Tránh

* **Sử dụng từ "Đơn giản" hoặc "Dễ":**
  * Đừng nói: *"It's very simple, you just configure a Docker container."* (Rất đơn giản, anh chỉ cần cấu hình container Docker là xong). Nếu nó đơn giản với họ, họ đã tự code rồi. Câu nói này có thể gây cảm giác trịch thượng. Thay vào đó hãy nói: *"We can set up a tool to handle this automatically."* (Chúng ta có thể thiết lập một công cụ để xử lý việc này tự động.)
* **Đưa ra Code thô hoặc Log lỗi:**
  * Tránh chụp màn hình log lỗi terminal hoặc payload JSON gửi cho PM hay khách hàng. Họ sẽ bị ngợp thông tin. Hãy tóm tắt kết quả cuối cùng.
* **Nghe có vẻ bực bội, khó chịu:**
  * Khi PM hỏi *"Why does this take three days?"* (Tại sao cái này mất tới tận 3 ngày?), đừng phản ứng phòng thủ. Hãy giải thích các bước ẩn (như viết test, migrate database, kiểm tra bảo mật) bằng ngôn ngữ đời thường.
