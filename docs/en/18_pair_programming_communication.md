# Pair-programming Communication (Daily English Edition)

Pair programming is when two developers work on the same task together. One is the **Driver** (typing the code) and the other is the **Navigator** (reviewing the code, pointing out bugs, and looking at the big picture). In this setup, you need to talk constantly and keep your language friendly and casual.

---

## 1. Academic vs. Daily Pair-Programming English

Keep it simple. You are talking to a colleague who is sitting right next to you or sharing your screen.

| ❌ Academic / Too Formal (Avoid) | 🟢 Daily & Conversational (Use instead) |
| :--- | :--- |
| "I shall assume the role of the driver and proceed to write the algorithm." | "I'll type first. Tell me what you think." |
| "Your proposed implementation contains a logical discrepancy on line fifteen." | "I think we have a bug on line 15. Let's check it." |
| "Let us execute a syntax review before proceeding to commit the code." | "Let's double-check the code before we commit." |
| "I request that you cease typing so I can inspect the structure." | "Wait a second, let me look at that function." |

---

## 2. Key Terms to Know

- **Driver:** The person typing the code.
- **Navigator:** The person reviewing the code and giving directions.
- **Ping-pong pattern:** Developer A writes a test, Developer B writes code to make the test pass, then they swap.
- **Spot a typo:** Find a small spelling mistake in the code. ("Oh, I spotted a typo on line 8.")
- **Hop on / Hop off:** Join or leave a pair-programming session. ("Can I hop on your session for 10 minutes?")
- **Screen-share:** Sharing your screen during remote work. ("Let me share my screen.")

---

## 3. Communication Patterns for the Roles

### A. If you are the Driver (Người gõ):
Explain what you are typing in real-time so your navigator can follow you.
- "I'm going to create a new helper function here." (Tôi sẽ tạo một hàm helper mới ở đây.)
- "I'll write a simple loop to process this list." (Tôi sẽ viết một vòng lặp đơn giản để xử lý list này.)
- "Let's console.log this response to see what data we get." (Hãy in log kết quả này ra để xem nhận được data gì nhé.)

### B. If you are the Navigator (Người chỉ đường):
Guide the driver without micromanaging every character. Ask open questions.
- "Instead of a loop here, what if we use `map`?" (Thay vì dùng vòng lặp, nếu dùng `map` thì sao?)
- "I think we need to import `dbHelper` at the top of the file." (Tôi nghĩ mình cần import `dbHelper` ở đầu file.)
- "Should we add a check in case the user ID is null?" (Chúng ta có nên check trường hợp user ID bị null không?)

---

## 4. Realistic Dialogue: Fixing a Bug Together

Here is a simple, natural conversation between **Huy (Driver)** and **Duc (Navigator)** debugging a React component.

> **Huy (Driver):** "Okay, let me share my screen. Can you see it?"
>
> **Duc (Navigator):** "Yes, looks clear. Let's start with the checkout button error."
>
> **Huy (Driver):** "Right. I'm opening `CheckoutButton.tsx` now. First, I'll add an event handler for the click."
>
> **Duc (Navigator):** "Wait, I think we have a check on line 12 for the user status, but what if the user is not logged in?"
>
> **Huy (Driver):** "Ah, good catch! Let me write an if-statement to redirect them if they are logged out."
>
> **Duc (Navigator):** "Actually, can we show a simple modal instead of redirecting? It's better for UX."
>
> **Huy (Driver):** "That makes sense. Let me search our codebase to see if we have a modal component ready."
>
> **Duc (Navigator):** "Yeah, we have `LoginModal` in the components folder. Let's import it."
>
> **Huy (Driver):** "Done. Let's test it locally. I'll click the button... perfect, the modal popped up."
>
> **Duc (Navigator):** "Awesome! Let's commit this and push. Thanks for pairing with me today."
>
> **Huy (Driver):** "Thank you! I'm glad we solved this so quickly."
