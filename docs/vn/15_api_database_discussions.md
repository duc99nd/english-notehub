# Thảo luận về Database & Thiết kế API (Daily English)

Thiết kế cơ sở dữ liệu (Database) và giao diện lập trình (API) đòi hỏi sự phối hợp của cả đội ngũ. Bạn sẽ cần thảo luận, tranh biện về cấu trúc bảng (schema), các endpoint, tối ưu hóa truy vấn và định dạng dữ liệu trong các buổi họp thiết kế. Hãy giữ ngôn từ đơn giản, tập trung vào sự đánh đổi (trade-offs) và tránh dùng các lý thuyết hàn lâm khi trao đổi với đồng nghiệp.

---

## 1. Tiếng Anh Học Thuật vs. Tiếng Anh Daily khi Thiết Kế Hệ Thống

Hãy nói trực tiếp và gãy gọn. Bạn đang làm việc cùng đồng nghiệp, không phải viết luận văn tốt nghiệp.

| ❌ Học thuật / Quá trang trọng (Nên tránh) | 🟢 Daily & Giao tiếp (Nên dùng) |
| :--- | :--- |
| "We should proceed to implement a normalized schema structure up to the third normal form." | "Let's normalize these tables to keep the database clean." *(Hãy chuẩn hóa các bảng này để giữ database sạch nhé.)* |
| "I recommend we establish a relational mapping between the user entity and the log records." | "Let's link the users table to the logs table using a foreign key." *(Chúng ta liên kết bảng users và logs bằng một khóa ngoại nhé.)* |
| "The payload format of the REST resource is suboptimal and exhibits data over-fetching." | "The API is returning too much unused data. We should clean it up." *(API đang trả về quá nhiều dữ liệu thừa. Hãy dọn dẹp nó đi.)* |
| "We must execute a database indexing strategy to minimize latency." | "Let's add an index to speed up the query." *(Thêm index để truy vấn nhanh hơn đi.)* |

---

## 2. Các thuật ngữ kỹ thuật cốt lõi cần nhớ

- **One-to-many / Many-to-many:** Mối quan hệ giữa các bảng: Một - Nhiều hoặc Nhiều - Nhiều. ("It's a one-to-many relationship: one user has many posts.")
- **JSONB:** Định dạng lưu trữ đối tượng JSON trực tiếp trong một cột cơ sở dữ liệu (phổ biến trong PostgreSQL). ("We can store settings in a JSONB column.")
- **Composite Index:** Chỉ mục kết hợp từ nhiều cột. ("Let's add a composite index on `user_id` and `created_at`.")
- **N+1 query problem:** Lỗi hiệu năng phổ biến khi ứng dụng chạy quá nhiều câu truy vấn không cần thiết trong một vòng lặp.
- **Over-fetching:** Việc API trả về nhiều dữ liệu hơn mức client thực sự cần.
- **Under-fetching:** Việc API trả về thiếu dữ liệu, buộc client phải gọi thêm các endpoint khác.
- **Flat structure:** Cấu trúc JSON phẳng, hạn chế lồng ghép quá sâu hoặc các đường dẫn API quá dài. ("Let's keep the API path flat.")

---

## 3. Công thức tranh luận: "Trade-off" (Đánh đổi)

Khi đề xuất một thiết kế database hoặc API, hãy trình bày rõ **Action** (Hành động), **Benefit** (Lợi ích), và **Trade-off** (Chi phí/Hạn chế).

-   **Công thức:** *"We should **[Action]** because it will **[Benefit]**, even though it **[Trade-off]**."*
-   **Ví dụ 1:** *"We should use a JSONB column because it will make the schema flexible, even though it's slightly harder to query than standard tables."*
    *(Chúng ta nên dùng cột JSONB vì nó giúp cấu trúc linh hoạt hơn, dù việc truy vấn sẽ khó hơn một chút so với bảng chuẩn.)*
-   **Ví dụ 2:** *"We should add an index because it will make search queries faster, even though it makes write operations a bit slower."*
    *(Chúng ta nên thêm index vì nó sẽ giúp truy vấn tìm kiếm nhanh hơn, dù thao tác ghi dữ liệu sẽ chậm lại một chút.)*

---

## 4. Mẫu câu điền vào chỗ trống (Templates)

### Mẫu A: Đề xuất thay đổi cấu trúc bảng (Schema Change)
Dùng khi bạn phát hiện ra cách lưu trữ dữ liệu cũ không tối ưu.
> "I'm looking at how we store **[loại dữ liệu, ví dụ: product images]**.
>
> Right now, we are **[cách cũ, ví dụ: saving them in a comma-separated string]**.
>
> Instead, I suggest **[đề xuất mới, ví dụ: creating a separate `product_images` table]** with a foreign key. This will make it much easier to **[lợi ích, ví dụ: delete or reorder images]** later."

### Mẫu B: Thiết kế lại API (Chuẩn RESTful)
> "For the new **[tên tính năng, ví dụ: user feedback]** endpoint, instead of nesting it under **[URL lồng nhau, ví dụ: `/users/:id/feedback`]**, I think we should keep it flat: **[URL phẳng, ví dụ: `/feedback?user_id=123`]**.
>
> This follows our standard conventions and makes the frontend code cleaner. What do you think?"

---

## 5. Kịch bản hội thoại mẫu: Tranh luận Thiết kế Database

Cuộc hội thoại tự nhiên giữa **Huy** và **Đức** thảo luận cách lưu tag (nhãn) của bài viết.

> **Huy:** "Hey Duc, do you have a minute to look at the database schema for the new article tagging feature?"
> *(Này Đức, có rảnh một lát xem qua schema database cho tính năng tag bài viết mới không?)*
>
> **Duc:** "Sure! How are you planning to store the tags?"
> *(Được chứ! Bạn đang định lưu các tag đó thế nào?)*
>
> **Huy:** "I was thinking of creating a `tags` table and a `post_tags` join table since it's a many-to-many relationship."
> *(Tôi định tạo một bảng `tags` và một bảng trung gian `post_tags` vì đây là quan hệ nhiều-nhiều.)*
>
> **Duc:** "That's the standard way, but since we only have a maximum of 5 tags per post, creating a join table might be overkill. What if we just store them as a string array or a JSONB column inside the `posts` table?"
> *(Cách đó chuẩn rồi, nhưng vì mỗi bài viết chỉ có tối đa 5 tag, tạo bảng trung gian có vẻ hơi quá tay. Hay là mình lưu luôn dạng mảng chuỗi hoặc cột JSONB ngay trong bảng `posts` luôn?)*
>
> **Huy:** "I see your point. It would save us from doing SQL joins when loading posts, which is great for performance. But I'm worried we won't be able to search posts by tags efficiently."
> *(Tôi hiểu ý bạn. Làm vậy sẽ không phải dùng lệnh join SQL khi load bài viết, rất tốt cho hiệu năng. Nhưng tôi lo là mình không tìm kiếm bài viết theo tag một cách hiệu quả được.)*
>
> **Duc:** "PostgreSQL actually allows us to index array columns, so searching will still be very fast. It also keeps our schema simpler."
> *(PostgreSQL thực chất cho phép đánh index cột kiểu mảng, nên tìm kiếm vẫn rất nhanh. Lại đỡ làm schema bị phức tạp.)*
>
> **Huy:** "Ah, I didn't know we could index arrays easily. In that case, let's go with the array column approach. It saves us a join table."
> *(À, tôi không biết là có thể đánh index kiểu mảng dễ thế. Vậy thì duyệt dùng cột mảng đi. Đỡ tốn một bảng liên kết.)*
>
> **Duc:** "Sounds good! Let's write down this decision in the project README."
> *(Tuyệt! Để tôi ghi chú lại quyết định này trong README của dự án.)*
