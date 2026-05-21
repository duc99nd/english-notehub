# Viết tài liệu dự án (Daily English)

Viết tài liệu dự án (documentation) rõ ràng cũng quan trọng như việc viết code sạch. Tài liệu tốt giúp các lập trình viên mới tham gia dự án (onboarding) làm quen trong vài phút, giữ cho phong cách viết code thống nhất và giúp bạn không phải trả lời đi trả lời lại cùng một câu hỏi. Hãy viết một cách trực tiếp, chủ động và ngắn gọn.

---

## 1. Tiếng Anh Học Thuật vs. Tiếng Anh Daily khi Viết Tài Liệu

Khi viết file README hoặc hướng dẫn API, hãy đi thẳng vào vấn đề. Sử dụng các câu mệnh lệnh chủ động thay vì các câu bị động quá trang trọng và dài dòng.

| ❌ Học thuật / Quá trang trọng (Nên tránh) | 🟢 Daily & Giao tiếp (Nên dùng) |
| :--- | :--- |
| "In order to initiate the execution of the application, the operator is required to run the development command." | "Run `npm run dev` to start the app locally." *(Chạy `npm run dev` để khởi động app ở local.)* |
| "The directory structure of the repository dictates that modular utilities be allocated within the directory designated as utils." | "Put helper functions inside the `src/utils` folder." *(Để các hàm helper vào thư mục `src/utils`.)* |
| "It is highly recommended that you configure your environment keys in the local file." | "Copy `.env.example` to `.env` and fill in your keys." *(Copy `.env.example` thành `.env` rồi điền các key của bạn vào.)* |
| "Documentation must be kept in absolute synchronization with code modifications." | "Always update the docs when you change a feature." *(Luôn cập nhật tài liệu khi bạn thay đổi một tính năng nào đó.)* |

---

## 2. Các thuật ngữ tài liệu cần nhớ

- **Onboarding:** Quá trình hướng dẫn và làm quen cho một lập trình viên mới vào dự án. ("This README is great for developer onboarding.")
- **Prerequisites:** Các điều kiện/phần mềm cần phải cài đặt trước trên máy (ví dụ: Docker, Node.js).
- **Outdated:** Thông tin cũ, lỗi thời, không còn đúng với code hiện tại. ("This section of the docs is outdated.")
- **Fluff:** Những từ ngữ rườm rà, kể lể dài dòng làm tài liệu bị loãng. Hãy viết ngắn gọn nhất có thể!
- **Conventions:** Quy ước chung đã được thống nhất (ví dụ: đặt tên folder toàn bộ bằng chữ thường).
- **Conventional Commits:** Quy ước đặt tên commit chuẩn (ví dụ: `feat:`, `fix:`, `docs:`).

---

## 3. Nguyên tắc viết trực tiếp: "Direct Action" (Thể mệnh lệnh)

Luôn viết hướng dẫn bắt đầu bằng một **động từ hành động** (thể mệnh lệnh). Cách viết này giúp tài liệu cực kỳ dễ đọc và chuyên nghiệp.

- ❌ **Không viết:** *"The user should copy the database connection string and then paste it."* (Quá dài, bị động)
- 🟢 **Nên viết:** *"Copy and paste the database connection string."* (Trực tiếp, chủ động)

- ❌ **Không viết:** *"Running the linter is required before you make a commit."*
- 🟢 **Nên viết:** *"Run `npm run lint` before committing."*

---

## 4. Mẫu câu điền vào chỗ trống (Templates)

### Mẫu A: Hướng dẫn cài đặt và chạy dự án (mục Setup trong README)
Sử dụng mẫu đơn giản này cho bất kỳ dự án nào bạn bắt đầu làm.
> ### Local Development Setup
>
> Follow these steps to run the project on your machine:
>
> 1. **Prerequisites:** Make sure you have **[Điều kiện cần, ví dụ: Node.js >= 18 and Docker]** installed.
> 2. **Install Dependencies:** Run **`[Lệnh cài đặt, ví dụ: npm install]`** in the root directory.
> 3. **Configure Environment:** Copy the template file:
>    ```bash
>    cp .env.example .env
>    ```
>    Open `.env` and fill in your **[các key bắt buộc, ví dụ: database URL and API keys]**.
> 4. **Run the App:** Start the local development server:
>    ```bash
>    npm run dev
>    ```
>    Open your browser and navigate to **`http://localhost:[Cổng chạy app]`**.

### Mẫu B: Nội dung mô tả khi gửi Pull Request (PR Template)
Dùng khi bạn tạo PR để đồng nghiệp review code của bạn.
> ## Description
>
> This PR introduces **[tóm tắt thay đổi, ví dụ: Google OAuth login]** to the **[tên trang/module, ví dụ: settings page]**.
>
> ## What changed?
>
> - Added **[thay đổi 1, ví dụ: auth handler endpoint]**.
> - Created **[thay đổi 2, ví dụ: Google button component]**.
> - Updated **[thay đổi 3, ví dụ: User database schema]**.
>
> ## How to test locally
>
> 1. Run the migration: `npm run migrate`.
> 2. Go to the login page and click the "Sign in with Google" button.
> 3. Verify that you are redirected to the Google consent screen.
