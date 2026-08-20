# VIẾT COMMENT CODE & PULL REQUEST

## Tiếng Anh chuyên nghiệp cho JSDoc, comment inline và mô tả Pull Request

> **Mục đích của tài liệu này**
>
> - Học cách viết comment code rõ ràng, súc tích bằng tiếng Anh chuyên nghiệp
> - Nắm vững cấu trúc tiêu chuẩn để viết mô tả Pull Request (PR)
> - Sử dụng các động từ chuẩn trong ngành để viết tài liệu cho các hàm và API

---

# 1. COMMENT TRONG CODE (INLINE COMMENTS)

Comment tốt là giải thích _tại sao_ (why) lại viết đoạn code đó, chứ không phải giải thích code đó làm _cái gì_ (what). Hãy viết ngắn gọn và sử dụng thể mệnh lệnh.

### Các động từ hành động chuẩn mực

Dùng các động từ như: `Calculates` (Tính toán), `Initializes` (Khởi tạo), `Parses` (Phân tích cú pháp), `Validates` (Xác thực), `Retrieves` (Lấy ra).

- `// Fetches the user data from the database` (Tốt)
- `// I am fetching the user data from the database` (Không tốt)

### Giải thích "Tại sao" (Ngữ cảnh)

- `// Hack: Using a timeout here to wait for the DOM to render. Needs refactoring.` (Giải pháp tạm: Dùng timeout ở đây để đợi DOM render. Cần refactor lại.)
- `// Fallback to default avatar if the user profile image is missing.` (Dùng avatar mặc định (fallback) nếu ảnh profile user bị thiếu.)
- `// We use a Set instead of an Array to ensure unique IDs and O(1) lookup time.` (Chúng ta dùng Set thay vì Array để đảm bảo ID không trùng lặp và thời gian tìm kiếm là O(1).)
- `// Workaround for a known bug in Safari iOS 15 where the flexbox breaks.` (Cách lách lỗi (workaround) cho một bug đã biết trên Safari iOS 15 làm vỡ flexbox.)

### TO-DO và FIXME

- `// TODO: Implement pagination once the backend API is ready.` (VIỆC CẦN LÀM: Triển khai phân trang sau khi API backend sẵn sàng.)
- `// FIXME: This regex fails when the email contains special characters.` (CẦN SỬA LỖI: Regex này bị sai khi email chứa ký tự đặc biệt.)
- `// NOTE: This function is deprecated. Use authService.login() instead.` (LƯU Ý: Hàm này đã lỗi thời (deprecated). Dùng authService.login() để thay thế.)

---

# 2. VIẾT TÀI LIỆU HÀM / JSDOC

Khi viết các khối tài liệu (như JSDoc hoặc Python Docstrings), hãy làm theo các quy ước chuẩn.

### Ví dụ mô tả Hàm:

```typescript
/**
 * Calculates the total price including tax and shipping.
 *
 * @param subtotal - The cart subtotal in cents.
 * @param taxRate - The applicable tax rate as a decimal (e.g., 0.05 for 5%).
 * @param isExpress - Whether the user selected express shipping.
 * @returns The final calculated total in cents.
 * @throws {Error} If the subtotal is negative.
 */
function calculateTotal(subtotal: number, taxRate: number, isExpress: boolean): number { ... }
```

### Cụm từ thường dùng trong Documentation

- "**Utility function to...**" (_Hàm tiện ích để..._ VD: Utility function to format currency - Hàm tiện ích để format tiền tệ.)
- "**Helper to...**" (_Hàm hỗ trợ để..._ VD: Helper to transform API payload - Hàm hỗ trợ để chuyển đổi payload API.)
- "**Determines whether...**" (_Xác định xem..._ VD: Determines whether the user has admin privileges - Xác định xem user có quyền admin không.)
- "**Triggers when...**" (_Kích hoạt khi..._ VD: Triggers when the component unmounts - Kích hoạt khi component bị unmount.)

---

# 3. MÔ TẢ PULL REQUEST (PR DESCRIPTIONS)

Một phần mô tả PR tuyệt vời sẽ tiết kiệm thời gian của người review và cung cấp ngữ cảnh cần thiết.

### 1. Tóm tắt các thay đổi (Summary of Changes)

- "This PR **introduces** the new payment gateway integration." (PR này **giới thiệu/đưa vào** phần tích hợp cổng thanh toán mới.)
- "This PR **resolves** the issue where the app crashes on the login screen." (PR này **giải quyết** lỗi ứng dụng bị crash ở màn hình đăng nhập.)
- "This PR **refactors** the user profile component to use React Hooks." (PR này **refactor (cấu trúc lại)** component profile user để sử dụng React Hooks.)

### 2. Có gì thay đổi? (Gạch đầu dòng)

- "**Added** unit tests for the `auth` module." (**Đã thêm** unit test cho module auth.)
- "**Removed** dead code from the legacy dashboard." (**Đã xóa** code thừa khỏi dashboard cũ.)
- "**Updated** dependencies to patch security vulnerabilities." (**Đã cập nhật** các thư viện để vá lỗ hổng bảo mật.)
- "**Fixed** a typo in the English translation files." (**Đã sửa** lỗi đánh máy trong các file dịch tiếng Anh.)

### 3. Cách test (Testing Instructions)

- "1. Check out this branch locally." (Kéo nhánh này về máy.)
- "2. Run `npm install` to install the new packages." (Chạy npm install để cài package mới.)
- "3. Navigate to `/checkout` and verify that the Stripe button appears." (Điều hướng đến /checkout và xác minh rằng nút Stripe có xuất hiện.)
- "4. Ensure that completing a payment redirects to the success page." (Đảm bảo rằng thanh toán xong sẽ bị redirect về trang thành công.)

### 4. Ghi chú thêm cho Người review (Additional Context)

- "**Note to reviewer**: The UI looks a bit unpolished because we are still waiting for the final assets from the design team." (**Ghi chú cho reviewer**: Giao diện nhìn hơi thô một chút vì chúng ta vẫn đang chờ file thiết kế cuối cùng từ team Design.)
- "This includes a database migration, so please **run `prisma migrate`** before testing." (Bản này có bao gồm migration DB, nên vui lòng **chạy lệnh `prisma migrate`** trước khi test nhé.)
- "**Breaking Change**: The response schema for the `/users` endpoint has been modified." (**Thay đổi phá vỡ (Breaking Change)**: Cấu trúc JSON trả về của endpoint /users đã bị thay đổi.)
