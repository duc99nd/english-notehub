# Database & API Design Discussions (Daily English Edition)

Designing databases and APIs is a team effort. You will need to debate schema choices, endpoint structures, query performance, and data formats in design reviews. Keep your language simple, focus on trade-offs, and avoid overly academic database theory when speaking to colleagues.

---

## 1. Academic vs. Daily Design English

Speak directly. You are collaborating, not writing a thesis paper.

| ❌ Academic / Too Formal (Avoid) | 🟢 Daily & Conversational (Use instead) |
| :--- | :--- |
| "We should proceed to implement a normalized schema structure up to the third normal form." | "Let's normalize these tables to keep the database clean." |
| "I recommend we establish a relational mapping between the user entity and the log records." | "Let's link the users table to the logs table using a foreign key." |
| "The payload format of the REST resource is suboptimal and exhibits data over-fetching." | "The API is returning too much unused data. We should clean it up." |
| "We must execute a database indexing strategy to minimize latency." | "Let's add an index to speed up the query." |

---

## 2. Key Terms to Know

- **One-to-many / Many-to-many:** Relationships between tables. ("It's a one-to-many relationship: one user has many posts.")
- **JSONB:** A format to store JSON objects in database columns (e.g., in PostgreSQL). ("We can store settings in a JSONB column.")
- **Composite Index:** An index on multiple columns together. ("Let's add a composite index on `user_id` and `created_at`.")
- **N+1 query problem:** A performance bug where the app runs many unnecessary database queries inside a loop.
- **Over-fetching:** Returning more data than the frontend actually needs.
- **Under-fetching:** Not returning enough data, forcing the frontend to call multiple endpoints.
- **Flat structure:** Avoiding deeply nested JSON keys or nested API paths. ("Let's keep the API path flat.")

---

## 3. The "Trade-off" Argument Template

When recommending a database or API design, always state the **Action**, the **Benefit**, and the **Trade-off** (cost).

-   **Formula:** *"We should **[Action]** because it will **[Benefit]**, even though it **[Trade-off]**."*
-   **Example 1:** *"We should use a JSONB column because it will make the schema flexible, even though it's slightly harder to query than standard tables."*
-   **Example 2:** *"We should add an index because it will make search queries faster, even though it makes write operations a bit slower."*

---

## 4. Fill-in-the-blank Templates

### Template A: Proposing a Schema Change
Use this when you want to change how data is stored.
> "I'm looking at how we store **[data type, e.g., product images]**.
>
> Right now, we are **[current way, e.g., saving them in a comma-separated string]**.
>
> Instead, I suggest **[proposed way, e.g., creating a separate `product_images` table]** with a foreign key. This will make it much easier to **[benefit, e.g., delete or reorder images]** later."

### Template B: Polishing API Endpoints (REST standard)
Use this during code reviews or planning meetings.
> "For the new **[feature, e.g., user feedback]** endpoint, instead of nesting it under **[nested URL, e.g., `/users/:id/feedback`]**, I think we should keep it flat: **[flat URL, e.g., `/feedback?user_id=123`]**.
>
> This follows our standard conventions and makes the frontend code cleaner. What do you think?"

---

## 5. Realistic Dialogue: Database Design Debate

Here is a natural conversation between **Huy** and **Duc** deciding how to store tags for a blog post.

> **Huy:** "Hey Duc, do you have a minute to look at the database schema for the new article tagging feature?"
>
> **Duc:** "Sure! How are you planning to store the tags?"
>
> **Huy:** "I was thinking of creating a `tags` table and a `post_tags` join table since it's a many-to-many relationship."
>
> **Duc:** "That's the standard way, but since we only have a maximum of 5 tags per post, creating a join table might be overkill. What if we just store them as a string array or a JSONB column inside the `posts` table?"
>
> **Huy:** "I see your point. It would save us from doing SQL joins when loading posts, which is great for performance. But I'm worried we won't be able to search posts by tags efficiently."
>
> **Duc:** "PostgreSQL actually allows us to index array columns, so searching will still be very fast. It also keeps our schema simpler."
>
> **Huy:** "Ah, I didn't know we could index arrays easily. In that case, let's go with the array column approach. It saves us a join table."
>
> **Duc:** "Sounds good! Let's write down this decision in the project README."
