# Adverbs for System Performance

When analyzing logs, describing database metrics, or presenting performance charts in meetings, you must describe **how often** an event occurs (frequency) and **how much** a metric changes (degree).

---

## 1. Adverbs of Frequency (How often?)

Instead of saying "sometimes" or "often," use precise IT adverbs to describe occurrence rates in logs or user behavior.

### 💡 10 Practical Examples:

1.  **"The database is consistently slow during midnight backups."** (Not: *slow consistently*)
2.  **"This background worker periodically cleans up expired user tokens."**
3.  **"The third-party API intermittently fails with a 502 Bad Gateway."** (Highly valued in debugging!)
4.  **"The application pool randomly restarts without any error codes."**
5.  **"This specific code path is rarely executed in production."**
6.  **"Our automated build scripts regularly check for outdated packages."**
7.  **"The staging environment is constantly going offline because of configuration updates."**
8.  **"Errors are occasionally logged when the webhook receives invalid JSON payloads."**
9.  **"We should frequently monitor our database connection pool size."**
10. **"The CPU temperature occasionally spikes during heavy video transcoding jobs."**

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

### 💡 10 Practical Examples:

1.  **"The refactored code has significantly improved the bundle loading speed."**
2.  **"Webpack compilation times dropped drastically after configuring the build cache."**
3.  **"Concurrent user traffic is increasing exponentially this month."**
4.  **"The cache size is gradually growing as users visit the site."**
5.  **"Response latency is marginally higher than it was yesterday."**
6.  **"Adding index indexes considerably reduced table scanning operations."**
7.  **"We have slightly modified the CSS values to prevent layout shifting."**
8.  **"Server load has substantially decreased since we activated Cloudflare caching."**
9.  **"Memory leaks will gradually consume all available server resources."**
10. **"Our testing suite execution time is marginally shorter after upgrading Node."**

---

## 3. Punctuation & Word Order Rules for Adverbs

Many developers put adverbs in incorrect positions, making sentences sound unnatural.

### Rule A: Put the adverb BEFORE a standard action verb
- **"We significantly improved the loading speed."** (Not: *We improved significantly...*)
- **"The scheduler automatically runs the job."** (Not: *runs automatically the job*)

### Rule B: Put the adverb AFTER auxiliary/helper verbs (is/are, have/has, can)
- **"The servers are consistently overloaded."** (Adverb after *are*).
- **"We have already deployed the fix."** (Adverb after *have*).

### 💡 10 Word-Order Examples:

1.  **"The system automatically exports reports every Sunday."** (Before *exports*)
2.  **"The server has successfully recovered from the crash."** (After *has*)
3.  **"We heavily rely on third-party APIs for map rendering."** (Before *rely*)
4.  **"The configuration files were manually updated by Huy."** (After *were*)
5.  **"You can easily scale the application with Kubernetes."** (After *can*)
6.  **"The background job is currently running on the server."** (After *is*)
7.  **"We immediately paused the database migration scripts."** (Before *paused*)
8.  **"The backup script has consistently failed since Monday."** (After *has*)
9.  **"I normally test the endpoints on local before committing."** (Before *test*)
10. **"The credentials should always be stored in environment variables."** (After *should*)

---

## 4. Performance Summary Table

| Metric Change | Recommended Adverb | Example Sentence |
| :--- | :--- | :--- |
| Huge Drop | **drastically** / **significantly** | "CPU usage has **significantly** dropped." |
| Slow Climb | **gradually** | "Memory is **gradually** leaking over time." |
| Chập chờn | **intermittently** | "The API is **intermittently** failing." |
| Định kỳ | **periodically** | "Cron jobs run **periodically**." |
| Tự động | **automatically** | "The server restarts **automatically** on failure." |
