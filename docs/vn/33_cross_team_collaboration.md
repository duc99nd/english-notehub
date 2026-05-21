# LÀM VIỆC LIÊN PHÒNG BAN (CROSS-TEAM COLLABORATION)

## Giao tiếp hiệu quả với các team DevOps, Design, QA và Marketing

> **Mục đích của tài liệu này**
>
> - Học cách yêu cầu tài nguyên, quyền truy cập hoặc thay đổi hạ tầng từ các team khác
> - Phá vỡ rào cản phòng ban và giao tiếp tôn trọng giữa các chuyên môn khác nhau
> - Xử lý các blocker bị gây ra bởi dependency từ bên ngoài

---

# 1. NÓI CHUYỆN VỚI DEVOPS & HẠ TẦNG

Khi yêu cầu thay đổi server, pipeline CI/CD, hoặc môi trường database.

- "Could you please **provision a new staging environment** for the payment microservice?" (Bạn có thể vui lòng **cấp phát/tạo một môi trường staging mới** cho microservice thanh toán không?)
- "We need to **whitelist this IP address** in the firewall for the third-party webhook." (Chúng ta cần **đưa IP này vào danh sách trắng (whitelist)** trong tường lửa cho webhook bên thứ ba.)
- "The CI/CD pipeline is currently **failing at the build step**. Could someone take a look?" (Pipeline CI/CD hiện đang **bị lỗi ở bước build**. Có ai xem giúp được không?)
- "Can we **bump up the memory limit** on the production pods? We are seeing OOM (Out Of Memory) kills." (Chúng ta có thể **tăng giới hạn bộ nhớ** trên các pod production không? Chúng tôi đang thấy các lỗi bị kill do OOM (Hết bộ nhớ).)
- "We are planning a database migration tonight. We need DevOps on standby to **monitor the resource spikes**." (Chúng tôi lên kế hoạch migrate database tối nay. Chúng tôi cần DevOps túc trực để **theo dõi các đợt tăng vọt tài nguyên**.)

---

# 2. NÓI CHUYỆN VỚI DESIGN (UI/UX)

Khi thảo luận về file Figma, mockup, thiếu tài nguyên ảnh, và luồng người dùng (user flow).

- "Are the designs in Figma **finalized**, or are they still work-in-progress?" (Các bản thiết kế trên Figma đã được **chốt (finalized)** chưa, hay vẫn đang làm dở?)
- "The current layout **breaks on smaller mobile screens**. Could you provide a mobile-specific mockup?" (Layout hiện tại bị **vỡ trên các màn hình điện thoại nhỏ**. Bạn có thể cung cấp mockup riêng cho mobile không?)
- "Could you export these icons as **SVG format**? PNGs are causing pixelation on retina displays." (Bạn có thể xuất các icon này dưới **định dạng SVG** không? Ảnh PNG đang bị vỡ hạt trên màn hình retina.)
- "We noticed a missing state in the design. What should the button look like when it's **disabled or loading**?" (Chúng tôi thấy thiếu một trạng thái trong bản thiết kế. Nút này nên trông như thế nào khi bị **disable hoặc đang loading**?)
- "From a technical perspective, implementing this custom dropdown will take 3 days. Is it okay if we use the **native browser dropdown** for the MVP?" (Từ góc nhìn kỹ thuật, code cái dropdown custom này sẽ tốn 3 ngày. Dùng luôn **dropdown mặc định của trình duyệt** cho bản MVP có được không?)

---

# 3. NÓI CHUYỆN VỚI QA & TESTING

Khi thảo luận về báo cáo bug, test case, và sự sẵn sàng cho bản release.

- "I have deployed the hotfix to staging. It is now **ready for QA testing**." (Tôi đã deploy bản hotfix lên staging. Bây giờ nó đã **sẵn sàng để QA test**.)
- "Could you provide the exact **steps to reproduce** this bug? I can't seem to replicate it on my local machine." (Bạn có thể cung cấp chính xác các **bước để tái hiện** bug này không? Tôi không tài nào tái hiện được nó trên máy local của mình.)
- "Is this edge case **part of the original acceptance criteria**, or is it a new requirement?" (Cái trường hợp ngoại lệ (edge case) này là **một phần của tiêu chí nghiệm thu ban đầu**, hay đây là yêu cầu mới?)
- "The bug you reported is actually expected behavior (**working as intended**)." (Cái bug bạn report thực ra là hành vi đúng như mong đợi (**hoạt động đúng như thiết kế**).)
- "Let's do a quick **bug triage** meeting to decide which issues need to be fixed before Thursday's release." (Hãy làm một buổi họp **phân loại bug (triage)** nhanh để quyết định xem những lỗi nào cần phải sửa trước bản release thứ Năm.)

---

# 4. NÓI CHUYỆN VỚI PRODUCT / MARKETING

Khi thảo luận về analytics, SEO, release notes (ghi chú phát hành), và feature toggles (công tắc tính năng).

- "The new feature is merged, but it is currently hidden behind a **feature flag**. Let us know when you want to turn it on." (Tính năng mới đã được merge code, nhưng nó hiện đang bị ẩn phía sau một **feature flag (công tắc tính năng)**. Báo cho chúng tôi biết khi nào bạn muốn bật nó lên nhé.)
- "We have added the **Google Analytics tracking tags** to all the CTA buttons on the landing page." (Chúng tôi đã thêm các **thẻ tracking Google Analytics** vào tất cả các nút CTA (Call to Action) trên trang landing page.)
- "To optimize for SEO, we need the marketing team to provide the **meta titles and descriptions** for the new pages." (Để tối ưu cho SEO, chúng tôi cần team marketing cung cấp **meta title và description** cho các trang mới.)
- "Can you review the **release notes** draft to make sure the technical jargon is translated well for our end-users?" (Bạn có thể duyệt qua bản nháp **release notes** để đảm bảo các thuật ngữ kỹ thuật được dịch cho dễ hiểu với người dùng cuối không?)
