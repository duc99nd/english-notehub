# Adverbs for System Performance

When analyzing logs, describing database metrics, or presenting performance charts in meetings, you must describe **how often** an event occurs (frequency) and **how much** a metric changes (degree). 

---

## 1. Adverbs of Frequency (How often?)

Instead of saying "sometimes" or "often," use precise IT adverbs to describe occurrence rates in logs or user behavior.

- **consistently / constantly (liên tục/nhất quán):**
  - **"The database is consistently slow during midnight backups."**
- **periodically / regularly (định kỳ):**
  - **"This background worker periodically cleans up expired user tokens."**
- **occasionally / intermittently (thỉnh thoảng / không liên tục - chập chờn):**
  - **"The third-party API intermittently fails with a 502 Bad Gateway."** (Intermittently is a highly valued word in debugging!).
- **randomly (ngẫu nhiên):**
  - **"The application pool randomly restarts without any error codes."**
- **rarely (hiếm khi):**
  - **"This specific code path is rarely executed in production."**

---

## 2. Adverbs of Degree (How much?)

Use these to describe changes in CPU utilization, memory leaks, page speeds, or API response times.

### 💡 Hack 1: Describing Large Changes
- **significantly / considerably / substantially (đáng kể):**
  - **"Adding Redis significantly reduced the API response time."**
- **drastically (mạnh mẽ/triệt để):**
  - **"The hotfix drastically lowered the database CPU usage."**
- **exponentially (theo cấp số nhân):**
  - **"Memory usage is increasing exponentially, indicating a memory leak."**

### 💡 Hack 2: Describing Small or Gradual Changes
- **gradually (dần dần/từ từ):**
  - **"The connection pool size is gradually climbing."**
- **marginally / slightly (một chút / không đáng kể):**
  - **"The new asset size is marginally larger than the old build."**

---

## 3. Punctuation & Word Order Rules for Adverbs

Many developers put adverbs in incorrect positions, making sentences sound unnatural.

### Rule A: Put the adverb BEFORE a standard action verb
- **"We significantly improved the loading speed."** (Not: *We improved significantly...*)
- **"The scheduler automatically runs the job."** (Not: *runs automatically the job*)

### Rule B: Put the adverb AFTER auxiliary/helper verbs (is/are, have/has, can)
- **"The servers are consistently overloaded."** (Adverb after *are*).
- **"We have already deployed the fix."** (Adverb after *have*).

---

## 4. Performance Summary Table

| Metric Change | Recommended Adverb | Example Sentence |
| :--- | :--- | :--- |
| Huge Drop | **drastically** / **significantly** | "CPU usage has **significantly** dropped." |
| Slow Climb | **gradually** | "Memory is **gradually** leaking over time." |
| Chập chờn | **intermittently** | "The API is **intermittently** failing." |
| Định kỳ | **periodically** | "Cron jobs run **periodically**." |
