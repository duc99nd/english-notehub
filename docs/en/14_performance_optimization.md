# Performance Optimization

Performance optimization is one of the most highly regarded skills for senior developers. Discussing scaling, optimizing databases, and resolving memory leaks requires specialized vocabulary. This document provides technical terminology, actionable phrases, and conversational templates to help you lead performance-related discussions.

## 1. Categorized Technical Terms & Concepts

### Frontend Performance Terms
- **Bundle size / Tree-shaking:** Bundle size is the total size of JavaScript/CSS files. Tree-shaking is the process of removing dead (unused) code during the build process to minimize this bundle.
- **Lazy loading / Code-splitting:** Code-splitting breaks code into smaller chunks that can be loaded dynamically (lazy loaded) only when a user visits a specific route.
- **Memoization:** Caching the result of expensive component renders or calculation functions using React hooks like `useMemo` or `useCallback`.
- **Debouncing / Throttling:** Debouncing delays execution until a user stops typing; throttling limits execution to once every X milliseconds (useful for window resizing/scrolling events).

### Backend & Database Performance Terms
- **Latency vs. Throughput:** Latency is the time it takes for a single request to travel (round-trip); throughput is the total volume of requests the system can handle in a given period (e.g., Requests Per Second - RPS).
- **N+1 Query Problem:** A performance bug where the application issues one initial query to fetch a list of records, followed by N separate queries to fetch related data for each item in that list.
- **Eager loading vs. Lazy loading:** Eager loading fetches related records up front in a single SQL JOIN query; lazy loading fetches them on demand, which often triggers N+1 query issues.
- **Connection Pool Exhaustion:** A state where all database connections are in use, forcing new incoming requests to wait in a queue, causing timeouts.
- **Memory Leak / Memory Footprint:** A memory leak occurs when an application fails to release memory it no longer needs. Memory footprint is the amount of RAM the application active uses.

---

## 2. Professional Optimization Phrases

Use these phrases to identify bottlenecks and propose structured solutions.

### Identifying Performance Issues
- "We are seeing a significant **CPU spike** whenever the report generation service runs."
- "The landing page has poor **Largest Contentful Paint (LCP)** scores due to unoptimized hero images."
- "The profile page is experiencing **high latency** because of a missing index on the foreign key column."
- "The server is crashing under load because the application is holding onto references, causing a **heap out-of-memory error**."

### Proposing Solutions
- "I propose we **introduce a Redis cache** for our product catalog endpoint to offload database read traffic."
- "We can reduce our bundle size by 35% if we **tree-shake** the utility library and lazy load the dashboard widgets."
- "Let's **batch these database operations** into a single transaction instead of making individual insert queries inside the loop."
- "We should **implement database pagination** using keyset cursor pagination to avoid performance degradation on offset-based page queries."

---

## 3. Performance Metrics to Talk About

When pitching optimization, back your arguments with measurable metrics:

- **TTFB (Time to First Byte):** "Adding a CDN reduced our TTFB from 600ms to 50ms globally."
- **RPS (Requests Per Second):** "By migrating the service to Go, we boosted throughput from 200 RPS to 1,200 RPS."
- **Memory Footprint:** "Refactoring the file upload logic dropped the container's memory footprint by 40%."
- **API Latency:** "Optimizing the database joins cut our average API response latency in half."

---

## 4. Real-World Scenario: Performance Tuning Sync

The frontend lead and backend lead are meeting to discuss a speed issue on the dashboard.

### 👥 Characters:
- **Duc** (Frontend Lead)
- **Sarah** (Backend Lead)

### 💬 Dialogue:
- **Duc**: "Hi Sarah, thanks for joining. I wanted to sync about the dashboard load time. Currently, it's taking almost 4 seconds for the initial paint on mobile devices. Our Core Web Vitals are in the red."
- **Sarah**: "That's quite high. Have we profiled the network requests to see where the bottleneck is?"
- **Duc**: "Yes, we noticed that the `/api/dashboard/stats` endpoint takes about 2.2 seconds to return a response. That's the main blocker."
- **Sarah**: "I see. Let me look at the backend query log. Ah, it looks like that endpoint is performing a complex aggregation across multiple tables without proper indexes. It's doing a full table scan."
- **Duc**: "That explains it. Can we optimize the query or add database indexing on the join columns?"
- **Sarah**: "Definitely. I'll add an index to the `organization_id` and `created_at` fields. I'll also implement query caching since the stats data only updates once an hour anyway."
- **Duc**: "Caching is a great idea. On the frontend side, we'll also start debouncing our search input and lazy load the charts component so we don't block the initial page render."
- **Sarah**: "Sounds like a solid plan. Let's deploy the database index updates to staging first, run a load test, and compare the latency."
- **Duc**: "Excellent. I'll keep an eye on the Lighthouse metrics on staging. Let me know when the backend updates are ready."
