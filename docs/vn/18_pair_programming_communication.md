# Giao tiếp khi Pair-programming (Daily English)

Pair programming (Lập trình cặp) là hình thức hai lập trình viên cùng làm chung một task. Một người đóng vai trò là **Driver** (người trực tiếp gõ code) và người kia là **Navigator** (người chỉ đường, review code, tìm bug và nhìn bức tranh tổng thể). Trong mô hình này, bạn cần thảo luận liên tục, giữ thái độ hợp tác và dùng ngôn từ thân thiện, tự nhiên.

---

## 1. Tiếng Anh Học Thuật vs. Tiếng Anh Daily khi Dev chung

Hãy trò chuyện một cách tự nhiên. Bạn đang nói chuyện với một đồng nghiệp đang ngồi ngay cạnh hoặc đang xem màn hình chia sẻ của bạn.

| ❌ Học thuật / Quá trang trọng (Nên tránh)                                     | 🟢 Daily & Giao tiếp (Nên dùng)                                                                            |
| :----------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------- |
| "I shall assume the role of the driver and proceed to write the algorithm."    | "I'll type first. Tell me what you think." _(Tôi sẽ gõ trước nhé. Có gì góp ý nha.)_                       |
| "Your proposed implementation contains a logical discrepancy on line fifteen." | "I think we have a bug on line 15. Let's check it." _(Tôi nghĩ mình bị bug ở dòng 15 rồi. Check thử xem.)_ |
| "Let us execute a syntax review before proceeding to commit the code."         | "Let's double-check the code before we commit." _(Chúng ta rà lại code một lượt trước khi commit nhé.)_    |
| "I request that you cease typing so I can inspect the structure."              | "Wait a second, let me look at that function." _(Đợi chút, để tôi ngó kỹ hàm đó xem sao.)_                 |

---

## 2. Các thuật ngữ Pair-programming thông dụng

- **Driver:** Người gõ code chính.
- **Navigator:** Người chỉ đường (review code, đưa hướng đi tiếp theo).
- **Ping-pong pattern:** Mô hình lập trình cặp kiểu bóng bàn (Người A viết test, Người B viết code để pass test đó, sau đó đổi vai trò).
- **Spot a typo:** Phát hiện ra một lỗi gõ nhầm (sai chính tả, thiếu dấu chấm phẩy...). ("Oh, I spotted a typo on line 8.")
- **Hop on / Hop off:** Tham gia vào hoặc thoát ra khỏi một buổi pair-programming. ("Can I hop on your session for 10 minutes?")
- **Screen-share:** Chia sẻ màn hình (khi làm việc remote). ("Let me share my screen.")

---

## 3. Cách giao tiếp của từng vai trò

### A. Nếu bạn là Driver (Người gõ code):

Hãy giải thích những gì bạn đang gõ trong thời gian thực để Navigator có thể theo dõi được mạch suy nghĩ của bạn.

- "I'm going to create a new helper function here." _(Tôi sẽ tạo một hàm helper mới ở đây nhé.)_
- "I'll write a simple loop to process this list." _(Tôi sẽ viết một vòng lặp đơn giản để xử lý danh sách này.)_
- "Let's console.log this response to see what data we get." _(Hãy in log cái response này ra xem mình nhận được data gì nào.)_

### B. Nếu bạn là Navigator (Người chỉ đường):

Định hướng cho Driver ở mức tổng quan, tránh can thiệp quá sâu vào từng ký tự gõ. Hãy đặt câu hỏi mở.

- "Instead of a loop here, what if we use `map`?" _(Thay vì dùng vòng lặp ở đây, dùng `map` liệu có ổn hơn không?)_
- "I think we need to import `dbHelper` at the top of the file." _(Tôi nghĩ mình cần import `dbHelper` ở đầu file đó.)_
- "Should we add a check in case the user ID is null?" _(Chúng ta có nên check trường hợp user ID bị null không nhỉ?)_

---

## 4. Kịch bản hội thoại thực tế: Cùng nhau Fix Bug

Dưới đây là đoạn hội thoại tự nhiên giữa **Huy (Driver)** và **Đức (Navigator)** khi cùng nhau fix một bug trong component React.

> **Huy (Driver):** "Okay, let me share my screen. Can you see it?"
> _(Được rồi, để tôi share màn hình nhé. Bạn thấy chưa?)_
>
> **Duc (Navigator):** "Yes, looks clear. Let's start with the checkout button error."
> _(Thấy rồi, rõ lắm. Bắt đầu với cái lỗi của nút checkout nhé.)_
>
> **Huy (Driver):** "Right. I'm opening `CheckoutButton.tsx` now. First, I'll add an event handler for the click."
> _(Ok. Tôi mở file `CheckoutButton.tsx` rồi. Đầu tiên tôi sẽ viết hàm xử lý sự kiện click.)_
>
> **Duc (Navigator):** "Wait, I think we have a check on line 12 for the user status, but what if the user is not logged in?"
> _(Đợi chút, tôi thấy có đoạn check trạng thái user ở dòng 12, nhưng nếu user chưa đăng nhập thì sao nhỉ?)_
>
> **Huy (Driver):** "Ah, good catch! Let me write an if-statement to redirect them if they are logged out."
> _(À, tinh mắt đấy! Để tôi viết câu lệnh if để redirect họ đi nếu chưa đăng nhập.)_
>
> **Duc (Navigator):** "Actually, can we show a simple modal instead of redirecting? It's better for UX."
> _(Thực ra, mình hiển thị một cái modal thông báo thay vì redirect được không? Trải nghiệm người dùng sẽ tốt hơn.)_
>
> **Huy (Driver):** "That makes sense. Let me search our codebase to see if we have a modal component ready."
> _(Hợp lý đấy. Để tôi search trong code xem có component modal nào dùng sẵn được không.)_
>
> **Duc (Navigator):** "Yeah, we have `LoginModal` in the components folder. Let's import it."
> _(Có đấy, chúng ta có `LoginModal` trong folder components. Import nó vào đi.)_
>
> **Huy (Driver):** "Done. Let's test it locally. I'll click the button... perfect, the modal popped up."
> _(Xong rồi. Test thử local nhé. Tôi click nút này... ngon luôn, modal hiện lên rồi.)_
>
> **Duc (Navigator):** "Awesome! Let's commit this and push. Thanks for pairing with me today."
> _(Tuyệt vời! Commit rồi push code thôi. Cảm ơn đã pair cùng tôi hôm nay nhé.)_
>
> **Huy (Driver):** "Thank you! I'm glad we solved this so quickly."
> _(Cảm ơn bạn! Rất vui vì chúng ta xử lý lỗi này nhanh như vậy.)_
