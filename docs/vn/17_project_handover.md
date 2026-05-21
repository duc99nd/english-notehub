# Bàn giao dự án (Project Handover)

Khi bạn chuẩn bị nghỉ việc, chuyển dự án, hoặc bàn giao công việc trước khi nghỉ phép dài ngày, bạn cần đảm bảo lập trình viên khác có thể tiếp quản công việc mà không bị bỡ ngỡ. Một tài liệu bàn giao bài bản sẽ bao gồm trạng thái hiện tại, các bước deployment (triển khai), các lỗi tồn đọng và thông tin truy cập tài khoản.

## 1. Giải thích phạm vi và trạng thái hiện tại (Current Status)

Mô tả chính xác phần việc nào đã hoàn thành và phần nào vẫn đang làm dở (in progress).

- "I’m handing over the integration of the third-party shipping API. The core backend models and migration scripts are complete." _(Mình xin bàn giao lại phần tích hợp API vận chuyển của bên thứ ba. Các model chính ở backend và script migration database đã làm xong.)_
- "The codebase is currently in the staging branch. All unit tests have passed, but we are still waiting for QA to verify the UI." _(Code hiện tại đang nằm ở nhánh staging. Mọi unit test đã pass hết rồi, nhưng vẫn đang đợi QA xác nhận lại phần giao diện (UI).)_
- "As of today, about 80% of the feature is complete. The remaining tasks are mostly frontend layout adjustments." _(Tính đến hôm nay, tính năng này đã xong khoảng 80%. Những phần còn lại chủ yếu là chỉnh sửa giao diện frontend.)_

## 2. Hướng dẫn chạy thử và deploy dự án (Deployments & Infrastructure)

Cung cấp các bước cụ thể để setup môi trường chạy thử và deploy dự án.

- "To run this service locally, you need to copy the `.env.example` file to `.env` and fill in the Stripe sandbox credentials." _(Để chạy service này dưới local, bạn cần copy file `.env.example` thành `.env` rồi điền các thông tin tài khoản test của Stripe vào.)_
- "The build script is simple: just run `npm run build` followed by `npm run start`." _(Script build rất đơn giản: chỉ cần chạy `npm run build` rồi chạy tiếp `npm run start` là được.)_
- "This branch includes database changes. Make sure to run `npm run migrate` before running the app, or it will throw schema errors." _(Nhánh này có thay đổi database. Hãy chắc chắn rằng bạn đã chạy lệnh `npm run migrate` trước khi khởi động app, nếu không nó sẽ báo lỗi schema.)_
- "The deployment is automated via GitHub Actions. Merging to the `main` branch will automatically trigger the deployment to the staging server." _(Việc deploy đã được tự động hóa qua GitHub Actions. Khi merge code vào nhánh `main`, hệ thống sẽ tự động deploy lên server staging.)_

## 3. Cảnh báo các lỗi tồn đọng & Lưu ý đặc biệt (Gotchas)

Nhắc nhở đồng nghiệp về những lỗi đã biết, những điểm nghẽn hoặc những cách sửa lỗi tạm thời (workarounds) khá kỳ lạ trong code.

- "One quick heads-up: the local Docker container sometimes fails to start on Apple M-series chips. You need to enable the Rosetta emulation in your Docker settings." _(Lưu ý nhanh cái này: container Docker ở máy local thỉnh thoảng bị lỗi không khởi động được trên chip Apple M. Bạn cần bật tính năng giả lập Rosetta trong cài đặt Docker.)_
- "There is a known bug with the currency formatting helper on older browsers. I’ve logged a Jira ticket for this under T-890." _(Có một bug đã biết với hàm format tiền tệ trên các trình duyệt cũ. Mình đã tạo ticket Jira cho lỗi này với mã số T-890.)_
- "Please note that the staging API key is hardcoded in the development database seed file. Do not commit this key to git." _(Xin lưu ý là key API staging đang bị viết cứng (hardcoded) trong file seed dữ liệu dev. Đừng commit key này lên git nhé.)_

## 4. Cung cấp thông tin truy cập tài khoản & Quyền hạn (Access)

Đảm bảo họ biết tìm mật khẩu, API key hoặc xin cấp quyền ở đâu.

- "All environment variables and API keys are stored securely in 1Password under the 'Project-X-Staging' folder." _(Mọi biến môi trường và API key đều được lưu trữ bảo mật trong 1Password ở thư mục 'Project-X-Staging'.)_
- "If you need admin privileges for the AWS console, please ask [Name] from the DevOps team to grant you access." _(Nếu cần quyền admin trên trang AWS console, bạn hãy nhờ [Tên] bên team DevOps cấp quyền cho nhé.)_
- "The API documentation is fully documented in Postman. I’ve invited you to the shared workspace." _(Tài liệu API đã được viết đầy đủ trên Postman. Mình đã gửi lời mời bạn vào workspace dùng chung rồi đó.)_

## 5. Các mẫu câu bàn giao công việc chính thức

- "I’ve documented the complete walkthrough in the project Wiki. Let’s do a quick 15-minute sync this afternoon to review it together." _(Mình đã viết tài liệu hướng dẫn rất chi tiết trên Wiki của dự án. Chiều nay tụi mình call nhanh 15 phút để cùng xem qua nhé.)_
- "Please let me know if you have any questions during the handover process. I'll be online until 5 PM today." _(Trong quá trình bàn giao nếu có câu hỏi gì cứ hú mình nhé. Hôm nay mình sẽ online đến 5h chiều.)_
- "I am handing this task over to [Name]. He has context on the database schema and can help you if you get blocked." _(Mình xin bàn giao task này lại cho [Tên]. Bạn ấy đã nắm được cấu trúc database nên có thể giúp bạn nếu bạn bị kẹt.)_
