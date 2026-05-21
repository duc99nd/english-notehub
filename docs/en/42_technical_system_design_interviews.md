# Technical & System Design Interviews (Daily English Edition)

System Design and coding interviews can be intimidating. But interviewers do not want you to speak like a computer science professor. They want to see how you collaborate, ask questions, and think out loud using clear, simple English.

---

## 1. Academic vs. Daily Technical English

Keep your explanations simple. You don't need complex words to explain system design.

| ❌ Academic (Too complex, hard to say) | 🟢 Daily & Conversational (Simple & Clear) |
| :--- | :--- |
| "We must ascertain the transactional throughput requirements." | "How many users will access the app at the same time?" |
| "I will leverage a relational database management system." | "I will use a SQL database like PostgreSQL." |
| "This microservice experiences connection pool exhaustion." | "The database is getting too many connections and runs out." |
| "The algorithm operates in linear time complexity." | "This code runs in $O(N)$ time, which is very fast." |
| "Let us execute a dry-run execution of this function." | "Let's test this code with a simple example." |

---

## 2. Asking Simple Clarifying Questions

Never start designing or coding immediately. Always ask these simple questions first.

### Questions about Traffic & Users:
- "How many users are we designing this for?" (Hệ thống thiết kế cho bao nhiêu user?)
- "Is it read-heavy or write-heavy?" (Hệ thống thiên về đọc hay ghi dữ liệu?)
- "Do we need to support mobile apps, web apps, or both?" (Chúng ta cần hỗ trợ app mobile, web hay cả hai?)

### Questions about Data:
- "What kind of data are we storing?" (Chúng ta sẽ lưu loại dữ liệu nào?)
- "How long do we need to keep this data?" (Chúng ta cần giữ dữ liệu này trong bao lâu?)

---

## 3. Explaining Architectural Choices (Simple Formulas)

When drawing your design, use these simple patterns to explain your choices.

### Choosing SQL vs. NoSQL:
*   **SQL Formula:** "I will choose **PostgreSQL** here because our data is structured. For example, users, orders, and payments need to be linked together."
*   **NoSQL Formula:** "I will choose **MongoDB** here because we need to store unstructured data, and we need to write data very fast."

### Explaining Cache:
*   **Cache Formula:** "I will put a **Redis cache** in front of our database. When a user requests data, the system checks Redis first. This saves database load and makes the page load faster."

### Explaining Load Balancers:
*   **Load Balancer Formula:** "I will use a **Load Balancer** here. It will distribute the incoming traffic to our servers so no single server gets overloaded."

---

## 4. Answering Coding & Algorithm Questions

When doing a live coding test, you must **talk out loud**. The interviewer wants to hear your thought process. Use these simple phrases:

### Explaining your plan:
- "First, I will write a simple solution." (Đầu tiên, tôi sẽ viết một giải pháp đơn giản trước.)
- "This simple way is easy to write, but it is slow." (Cách đơn giản này dễ viết nhưng chạy chậm.)
- "After that, I will optimize it to make it faster." (Sau đó, tôi sẽ tối ưu để nó chạy nhanh hơn.)

### Explaining coding steps:
- "I will loop through the array." (Tôi sẽ lặp qua mảng này.)
- "I will store the values in a hash map for fast lookup." (Tôi sẽ lưu các giá trị vào hash map để tìm kiếm nhanh.)
- "Let's check if the input is empty or null." (Hãy check xem đầu vào có bị trống hoặc null không.)

---

## 5. Safe Survival Phrases

If you get stuck or need time to think, use these phrases to keep the conversation flowing.

*   **When you need time to think:** "That is a good question. Let me think about it for a second."
*   **When you want to check if they understand:** "Does this make sense so far?"
*   **When you don't know the answer:** "I haven't used this technology in production, but from what I know, it is similar to [familiar technology]."
*   **When you want to confirm a requirement:** "Just to be clear, do you want me to design the login flow first?"
