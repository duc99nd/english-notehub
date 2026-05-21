# Thảo luận Kỹ thuật & Code Review

Review Pull Request (PR) và thảo luận về kiến trúc hệ thống là hoạt động diễn ra hàng ngày của lập trình viên. Để duy trì một văn hóa kỹ thuật lành mạnh, bạn cần học cách đưa ra phản hồi lịch sự, bảo vệ các lựa chọn thiết kế của mình một cách khéo léo và đề xuất thay đổi kiến trúc bằng ngôn ngữ khách quan, chuyên nghiệp.

## 1. Cách Đưa Ra Phản Hồi Code Review Mang Tính Xây Dựng

Khi review code của người khác, hãy phân tách rõ ràng giữa con người và đoạn code. Tập trung vào sức ảnh hưởng (impact) và đưa ra các đề xuất cải thiện thay vì ra lệnh.

### Các loại nhận xét (Comments) thường gặp

#### 1. Nhận xét nhỏ (Nitpicks - Lỗi cú pháp, chính tả, định dạng)
Sử dụng tiền tố `nit:` hoặc `Nitpick:` để biểu thị rằng thay đổi này là tùy chọn (optional) và không bắt buộc để merge PR.
- "Nit: There is a small typo in the variable name `userCreds` on line 42 (currently written as `userCreads`)." *(Nit: Có lỗi chính tả nhỏ ở tên biến `userCreds` ở dòng 42, đang viết là `userCreads`.)*
- "Nit: Let's remove this unused import to keep the file clean." *(Nit: Hãy xóa phần import không dùng này để file sạch sẽ hơn.)*
- "Nitpick: Could we add a trailing comma here to match our Prettier config?" *(Nitpick: Chúng ta thêm dấu phẩy ở cuối dòng này để khớp với cấu hình Prettier của dự án nhé?)*

#### 2. Hiệu năng & Tối ưu hóa (Performance & Optimizations)
Giải thích rõ *tại sao* code hiện tại có thể gây lỗi và đề xuất hướng xử lý tốt hơn.
- "I'm a bit concerned about the performance here if the `users` array grows large. Since this is an $O(N^2)$ operation, have you considered using a Map for lookup instead?" *(Tôi hơi lo ngại về performance ở đây nếu mảng `users` phình to. Vì đây là thuật toán $O(N^2)$, bạn đã cân nhắc dùng Map để tìm kiếm (lookup) thay thế chưa?)*
- "We might run into an N+1 query problem here because we're calling the database inside a `map` loop. What do you think about eager loading the relationships instead?" *(Chúng ta có thể gặp lỗi N+1 query ở đây vì gọi DB trong vòng lặp `map`. Bạn nghĩ sao về việc tải trước (eager loading) các mối quan hệ?)*
- "Could we memoize this callback function using `useCallback` to prevent unnecessary re-renders of the child components?" *(Chúng ta có thể cache hàm này bằng `useCallback` để tránh render lại không cần thiết ở các component con được không?)*

#### 3. Bảo mật & Tính an toàn (Security & Safety)
Chỉ ra các lỗ hổng dựa trên các dữ liệu khách quan.
- "It looks like we are rendering this string directly to the HTML, which might expose us to Cross-Site Scripting (XSS). We should sanitize the input first." *(Có vẻ chúng ta đang render trực tiếp chuỗi này ra HTML, điều này có thể dẫn tới lỗi bảo mật XSS. Chúng ta nên lọc sạch (sanitize) dữ liệu đầu vào trước.)*
- "Storing the API key in plain text here is risky. Can we move it to our environment variables configuration?" *(Lưu API key dạng text thuần ở đây khá rủi ro. Chúng ta có thể chuyển nó sang cấu hình biến môi trường (env) được không?)*
- "There is a potential race condition in this asynchronous block. We should wrap it in a transaction to ensure database consistency." *(Có khả năng xảy ra lỗi race condition (tranh chấp tài nguyên) trong khối bất đồng bộ này. Chúng ta nên bọc nó trong một transaction để đảm bảo tính nhất quán của database.)*

#### 4. Kiến trúc & Mẫu thiết kế (Architecture & Design Patterns)
Đề xuất cải tiến kiến trúc một cách lịch sự.
- "This component seems to be handling both API fetching and data rendering. Should we separate these concerns by creating a custom hook?" *(Component này vừa call API vừa render data. Chúng ta có nên tách biệt các nhiệm vụ này bằng cách viết một custom hook không?)*
- "Since this utility function is duplicated across three components, it might be better to move it to a shared `src/utils` folder." *(Vì hàm helper này bị trùng lặp ở 3 component khác nhau, tốt hơn hết ta nên chuyển nó vào thư mục chung `src/utils`.)*
- "This class has too many responsibilities. We might want to follow the Single Responsibility Principle and break it down." *(Class này đang ôm đồm quá nhiều việc. Chúng ta nên tuân theo nguyên lý Đơn nhiệm (SRP) và tách nhỏ nó ra.)*

---

## 2. Phản Hồi Code Review một cách khôn khéo

Khi nhận ý kiến đánh giá từ người khác, hãy giữ thái độ hợp tác và cởi mở.

### Trường hợp A: Đồng ý và triển khai sửa đổi
- "Good catch! I'll update that right away." *(Bắt lỗi tốt quá! Tôi sẽ cập nhật ngay.)*
- "Thanks for pointing that out. I completely missed that edge case. I've updated the logic in my latest commit." *(Cảm ơn bạn đã chỉ ra điều đó. Tôi hoàn toàn bỏ sót trường hợp đặc biệt này. Tôi đã update logic trong commit mới nhất.)*
- "Makes total sense. I've refactored the function and pushed the changes." *(Hoàn toàn hợp lý. Tôi đã refactor hàm và push code lên.)*

### Trường hợp B: Giải thích phản biện một cách khéo léo
Nếu bạn không đồng tình, hãy đưa ra lý do kỹ thuật khách quan thay vì ý kiến chủ quan.
- "I see your point, but I chose this approach because our current database driver doesn't support the JSON query syntax you suggested." *(Tôi hiểu ý bạn, tuy nhiên tôi chọn cách này vì driver DB hiện tại không hỗ trợ cú pháp truy vấn JSON như bạn đề xuất.)*
- "I originally tried using `Array.reduce` here, but I found that it made the code quite hard to read for junior developers. If you feel strongly about it, I'm happy to change it." *(Ban đầu tôi định dùng `Array.reduce` ở đây, nhưng thấy nó làm code hơi khó đọc cho các bạn junior. Nếu bạn thấy thực sự cần thiết, tôi sẽ đổi lại.)*
- "That's a valid concern. However, in this specific case, the array is guaranteed to have a maximum of 10 items, so the performance impact will be negligible." *(Đó là mối lo ngại rất đúng. Tuy nhiên trong trường hợp cụ thể này, mảng chỉ có tối đa 10 item, nên ảnh hưởng tới hiệu năng là không đáng kể.)*

### Trường hợp C: Đề xuất thảo luận trực tiếp nhanh (Sync offline)
- "Could we jump on a quick call/Slack sync to discuss this thread? It might be faster to align." *(Chúng ta có thể gọi nhanh / sync trên Slack một chút được không? Trao đổi trực tiếp sẽ dễ thống nhất hơn.)*
- "Let's discuss this in our upcoming design alignment meeting so we don't block this PR." *(Hãy thảo luận chuyện này trong buổi họp thiết kế sắp tới để tránh làm tắc nghẽn (block) PR này nhé.)*

---

## 3. Cụm Động Từ & Từ Vựng Chuyên Ngành Thông Dụng

Hãy sử dụng các từ vựng kỹ thuật này để giao tiếp tự nhiên hơn:

| Từ vựng | Ý nghĩa | Ví dụ thực tế |
| :--- | :--- | :--- |
| **Refactor** | Tái cấu trúc code nhưng không đổi hành vi | "We need to **refactor** the auth module." *(Chúng ta cần refactor lại module xác thực.)* |
| **Decouple** | Gỡ bỏ sự phụ thuộc chồng chéo giữa các phần | "Let's **decouple** the payment service from the checkout controller." *(Hãy tách biệt service thanh toán ra khỏi controller checkout.)* |
| **Deprecate** | Khai tử code cũ, đánh dấu để thay thế | "We should **deprecated** this API version by the end of this sprint." *(Chúng ta nên deprecate version API này vào cuối sprint.)* |
| **Optimize** | Tối ưu hóa hiệu năng, bộ nhớ | "Can we **optimize** this SQL query?" *(Chúng ta có thể tối ưu câu query SQL này không?)* |
| **Catch** | Bắt lỗi, phát hiện vấn đề | "Good **catch** on the null pointer exception." *(Phát hiện lỗi null pointer rất tốt.)* |
| **Roll back** | Quay lại phiên bản chạy ổn định trước đó | "If the deployment fails, we will **roll back** to version 1.2." *(Nếu deploy lỗi, chúng ta sẽ rollback về bản 1.2.)* |
| **Spin up** | Khởi chạy một server, service, environment | "I'll **spin up** a staging instance for QA to test this." *(Tôi sẽ chạy một instance staging để QA test.)* |
| **Phase out** | Loại bỏ dần dần một tính năng/công cụ | "We are **phasing out** the old legacy UI next month." *(Chúng ta sẽ loại bỏ dần giao diện cũ vào tháng tới.)* |

---

## 4. Các lỗi thường gặp khi giao tiếp trong Code Review

### ❌ Giọng điệu ra lệnh, gay gắt
- "Change this code now." *(Sửa code này ngay.)*
- "Do not use inline styles." *(Không được dùng inline style.)*

### 🟢 Gợi ý mang tính hợp tác, đóng góp
- "Could we refactor this to use Tailwind utility classes instead of inline styles?" *(Chúng ta có thể đổi sang dùng Tailwind classes thay vì inline style được không?)*
- "What do you think about extracting this function?" *(Bạn nghĩ sao về việc tách hàm này ra ngoài?)*

---

## 5. Kịch bản Code Review thực tế

### 👥 Nhân vật:
- **Đức** (Lập trình viên / Người viết PR)
- **Sarah** (Lập trình viên Senior / Người review)

### 💬 Đoạn đối thoại:
- **Sarah**: "Hi Duc, I reviewed your PR for the new payment checkout flow. The UI looks great, and the integration tests are well-written! I just left a couple of suggestions regarding error handling." *(Chào Đức, tôi đã review PR của bạn về luồng thanh toán mới. Giao diện trông rất đẹp và các bài test tích hợp viết tốt lắm! Tôi có để lại vài gợi ý liên quan đến xử lý lỗi.)*
- **Đức**: "Hi Sarah, thanks for the feedback! Let me check the comments... Ah, on line 87, you suggested wrapping the Stripe call in a try-catch block. That's a good catch, I'll update that." *(Chào Sarah, cảm ơn bạn đã review! Để tôi xem comment... À, ở dòng 87 bạn gợi ý bọc lệnh gọi Stripe trong try-catch. Bắt lỗi chuẩn đấy, tôi sẽ update luôn.)*
- **Sarah**: "Yes, if the Stripe server goes down, we want to catch that error and return a user-friendly message rather than letting the app crash. Also, on line 142, is there a reason we are doing a nested loop?" *(Đúng vậy, nếu server Stripe bị sập, ta muốn bắt lỗi đó và trả về thông báo thân thiện thay vì để ứng dụng crash. Còn ở dòng 142, có lý do gì ta lại dùng vòng lặp lồng nhau (nested loop) không?)*
- **Đức**: "Oh, I see your point. We have to map the cart items and calculate the discount for each. However, the cart items list is usually small. I can flatten the loop if you think it's necessary." *(À tôi hiểu ý bạn rồi. Ta phải lặp qua các item trong giỏ hàng để tính chiết khấu cho mỗi cái. Tuy nhiên giỏ hàng thường khá ít item. Tôi có thể làm phẳng vòng lặp (flatten) nếu bạn thấy cần.)*
- **Sarah**: "Since users rarely checkout with more than 5 items, a nested loop is fine here. But let's add a quick comment explaining why we did it, just for future maintainability." *(Vì user hiếm khi checkout quá 5 item nên vòng lặp lồng ở đây vẫn ổn. Nhưng hãy viết thêm một comment giải thích ngắn gọn để tiện cho việc bảo trì sau này nhé.)*
- **Đức**: "That sounds reasonable. I'll add the comment and push the refactored error handling code in a few minutes. Thanks, Sarah!" *(Nghe hợp lý đó. Tôi sẽ viết comment và push code xử lý lỗi đã sửa lên sau vài phút nữa. Cảm ơn Sarah nhé!)*
