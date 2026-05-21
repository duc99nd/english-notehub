# Giao tiếp sự cố Production (Incident Response)

Khi xảy ra sự cố sập hệ thống (outage) hoặc phát sinh lỗi nghiêm trọng trên môi trường production, giao tiếp rõ ràng, bình tĩnh và có cấu trúc là vô cùng quan trọng. Cả team cần phối hợp ăn ý để phân loại lỗi (triage), cập nhật tiến độ cho các bên liên quan và triển khai bản sửa lỗi khẩn cấp (hotfix). Tài liệu này cung cấp các mẫu câu thực tế khi ứng phó sự cố.

## 1. Phát cảnh báo & Xác định Sự cố (Incident Alerting)

Thông báo lỗi ngay khi được xác nhận, chỉ ra dịch vụ nào bị hỏng và mức độ nghiêm trọng.

- "We have a live incident. The payment gateway is returning 502 Bad Gateway errors for all card transactions." *(Chúng ta có sự cố live rồi. Cổng thanh toán đang trả về lỗi 502 Bad Gateway đối với tất cả các giao dịch bằng thẻ.)*
- "Alert: CPU usage on our primary database cluster has spiked to 100%, causing high latency across all APIs." *(Cảnh báo: CPU trên cụm database chính đã vọt lên 100%, gây ra độ trễ cao trên toàn bộ các API.)*
- "I'm seeing a flood of error logs on Sentry related to the authentication service. It seems like users cannot log in." *(Mình đang thấy một loạt log lỗi trên Sentry liên quan đến service xác thực. Có vẻ như người dùng không thể đăng nhập.)*

## 2. Phân loại lỗi & Phối hợp ứng phó (Triage & Coordination)

Phân chia vai trò và tổ chức phòng xử lý sự cố (war room - thường là một cuộc gọi huddle hoặc channel chat khẩn cấp).

- "Let's set up a Slack war room in `#incident-payment-gateway` and jump on a huddle immediately." *(Chúng ta hãy lập một phòng war room Slack trong channel `#incident-payment-gateway` và vào họp huddle ngay lập tức nhé.)*
- "I will lead the technical investigation. [Name], can you handle stakeholder communication and update the status page?" *(Mình sẽ dẫn dắt phần điều tra kỹ thuật. [Tên] ơi, bạn xử lý phần giao tiếp với các bên liên quan và cập nhật trang status page của hệ thống nhé?)*
- "Let's start by isolating the problem. Is this affecting both iOS and Android, or just Web clients?" *(Hãy bắt đầu bằng việc khoanh vùng vấn đề. Lỗi này đang ảnh hưởng đến cả iOS và Android, hay chỉ mỗi bản Web thôi?)*
- "Can we roll back to the last stable release (`v1.4.2`) while we investigate the root cause?" *(Chúng ta có thể rollback về bản release ổn định gần nhất (`v1.4.2`) trong lúc điều tra nguyên nhân gốc rễ không?)*

## 3. Cập nhật Tình hình theo Thời gian thực (Incident Updates)

Các bên liên quan cần biết tiến độ thường xuyên. Kể cả khi chưa fix xong bug, hãy cập nhật là bạn đang xử lý đến bước nào.

- "Update: We have isolated the issue to a misconfigured environment variable in the payment service container." *(Cập nhật: Chúng tôi đã khoanh vùng được lỗi là do cấu hình sai biến môi trường trong container của service payment.)*
- "We are currently running database diagnostics. The estimated time to identify the root cause is 15 minutes." *(Chúng tôi hiện đang chạy chẩn đoán database. Thời gian dự kiến để xác định nguyên nhân gốc rễ là 15 phút.)*
- "No data loss has occurred. We are preparing a hotfix branch to address the validation issue." *(Không có dữ liệu nào bị mất. Chúng tôi đang chuẩn bị một nhánh hotfix để xử lý lỗi validate này.)*
- "The rollback is complete, and traffic is returning to normal. We are keeping the war room active to monitor stability." *(Việc rollback đã hoàn tất, traffic đang quay trở lại bình thường. Chúng tôi vẫn giữ phòng war room hoạt động để theo dõi sự ổn định.)*

## 4. Triển khai Hotfix & Xác nhận khắc phục thành công

Khi deploy bản sửa lỗi khẩn cấp, hãy thông báo các bước và xác minh xem hệ thống đã thực sự chạy ổn định chưa.

- "The hotfix has been merged into `main` and is currently building in the pipeline." *(Bản hotfix đã được merge vào nhánh `main` và đang được build trong pipeline.)*
- "Deploying the hotfix to production now. I will monitor the error rates on Sentry." *(Đang deploy hotfix lên production. Mình sẽ theo dõi tỷ lệ lỗi (error rates) trên Sentry.)*
- "The fix is live. Can QA please run a sanity check on the staging and production environments?" *(Bản fix đã chạy rồi. QA chạy thử một lượt kiểm tra nhanh (sanity check) trên môi trường staging và production giúp mình với?)*
- "Error rates have dropped to zero, and CPU usage has normalized. The incident is now officially resolved." *(Tỷ lệ lỗi đã giảm về 0 và CPU đã trở lại bình thường. Sự cố chính thức được giải quyết.)*

## 5. Rút kinh nghiệm sau Sự cố (Post-Incident Action Items)

Đảm bảo rút ra bài học kinh nghiệm từ sự cố để không lặp lại lỗi cũ.

- "We need to schedule a post-mortem meeting tomorrow morning to review why our health check failed to catch this." *(Chúng ta cần lên lịch một cuộc họp mổ xẻ sự cố (post-mortem) vào sáng mai để xem tại sao hệ thống health check của chúng ta lại không bắt được lỗi này.)*
- "Action item: We must add automated integration tests for this payment gateway to prevent regression." *(Action item: Chúng ta bắt buộc phải viết thêm các bài test tích hợp tự động cho cổng thanh toán này để tránh bị lỗi lại sau này.)*
- "We will update our monitoring dashboard to alert us immediately when API response latency exceeds 2 seconds." *(Chúng tôi sẽ cập nhật dashboard giám sát để cảnh báo ngay lập tức khi độ trễ response API vượt quá 2 giây.)*
---
