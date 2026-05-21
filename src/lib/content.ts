import type { AppLocale } from '@/i18n'

export type TocLevel = 1 | 2 | 3

export interface DocHeading {
  id: string
  text: string
  level: TocLevel
}

export interface DocSummary {
  slug: string
  fileName: string
  titleEn: string
  titleVi: string
  subtitleEn: string
  subtitleVi: string
  order: number
  categoryEn?: string
  categoryVi?: string
}

export interface DocItem extends DocSummary {
  raw: string
  html: string
  headings: DocHeading[]
  sectionCount: number
}

interface FileMeta {
  slug: string
  titleEn: string
  subtitleEn: string
  titleVi: string
  subtitleVi: string
  order: number
  categoryEn?: string
  categoryVi?: string
}

const FILE_META: Record<string, FileMeta> = {
  '1_vocabulary_reference': {
    slug: 'vocabulary-reference',
    titleEn: 'English Vocabulary Reference',
    subtitleEn: 'Core words and collocations for daily work',
    titleVi: 'Từ vựng công việc cần dùng nhiều',
    subtitleVi: 'Từ và cụm từ cho speaking và writing',
    order: 1,
    categoryEn: 'Foundation & Daily Communication',
    categoryVi: 'Nền tảng Kỹ năng',
  },
  '2_speaking_grammar': {
    slug: 'speaking-grammar',
    titleEn: 'English Speaking Grammar Reference',
    subtitleEn: 'Practical grammar for meetings and work communication',
    titleVi: 'Ngữ pháp speaking thực dụng',
    subtitleVi: 'Công thức ngắn gọn để nói trong meeting',
    order: 2,
    categoryEn: 'Foundation & Daily Communication',
    categoryVi: 'Nền tảng Kỹ năng',
  },
  '3_writing_reference': {
    slug: 'writing-reference',
    titleEn: 'English Writing Reference',
    subtitleEn: 'Practical templates for work and client communication',
    titleVi: 'Mẫu câu writing trong công việc',
    subtitleVi: 'Chat, email, follow-up để dùng ngay',
    order: 3,
    categoryEn: 'Foundation & Daily Communication',
    categoryVi: 'Nền tảng Kỹ năng',
  },
  '4_quick_tips_short_answers': {
    slug: 'quick-tips-short-answers',
    titleEn: 'Quick Tips & Short Answers',
    subtitleEn: 'Grammar hacks, vocabulary tips, and short professional responses',
    titleVi: 'Mẹo Nhanh & Câu Trả Lời Ngắn',
    subtitleVi: 'Mẹo ngữ pháp, từ vựng và phản hồi ngắn chuyên nghiệp',
    order: 4,
    categoryEn: 'Foundation & Daily Communication',
    categoryVi: 'Nền tảng Kỹ năng',
  },
  '5_professional_chat_communication': {
    slug: 'professional-chat-communication',
    titleEn: 'Professional Chat Communication',
    subtitleEn: 'English for Slack and Teams',
    titleVi: 'Tiếng Anh chat Slack/Teams chuyên nghiệp',
    subtitleVi: 'Giao tiếp nhanh gọn qua tin nhắn',
    order: 5,
    categoryEn: 'Foundation & Daily Communication',
    categoryVi: 'Nền tảng Kỹ năng',
  },
  '6_requesting_time_off': {
    slug: 'requesting-time-off',
    titleEn: 'Requesting Time Off',
    subtitleEn: 'Asking for leave and reporting sick',
    titleVi: 'Cách xin nghỉ phép và báo ốm',
    subtitleVi: 'Xin nghỉ phép hợp lý và lịch sự',
    order: 6,
    categoryEn: 'Foundation & Daily Communication',
    categoryVi: 'Nền tảng Kỹ năng',
  },
  '7_asking_for_help_support': {
    slug: 'asking-for-help-support',
    titleEn: 'Asking for Help & Support',
    subtitleEn: 'Requesting assistance from colleagues',
    titleVi: 'Nhờ vả và yêu cầu hỗ trợ từ đồng nghiệp',
    subtitleVi: 'Cách nhờ hỗ trợ lịch sự, hiệu quả',
    order: 7,
    categoryEn: 'Foundation & Daily Communication',
    categoryVi: 'Nền tảng Kỹ năng',
  },
  '8_apology_correction_emails': {
    slug: 'apology-correction-emails',
    titleEn: 'Apology & Correction Emails',
    subtitleEn: 'Saying sorry and correcting mistakes',
    titleVi: 'Viết email xin lỗi và đính chính thông tin',
    subtitleVi: 'Xử lý sự cố giao tiếp bằng văn bản',
    order: 8,
    categoryEn: 'Foundation & Daily Communication',
    categoryVi: 'Nền tảng Kỹ năng',
  },
  '9_explaining_tech_to_non_tech': {
    slug: 'explaining-tech-to-non-tech',
    titleEn: 'Explaining Tech to Non-tech',
    subtitleEn: 'Simplifying technical concepts',
    titleVi: 'Giải thích vấn đề kỹ thuật cho Non-tech',
    subtitleVi: 'Giao tiếp với PO, QA, và Marketing',
    order: 9,
    categoryEn: 'Foundation & Daily Communication',
    categoryVi: 'Nền tảng Kỹ năng',
  },
  '10_reading_tech_docs_efficiently': {
    slug: 'reading-tech-docs-efficiently',
    titleEn: 'Reading Tech Docs Efficiently',
    subtitleEn: 'Tips for reading English documentation',
    titleVi: 'Kỹ năng đọc hiểu tài liệu tiếng Anh nhanh',
    subtitleVi: 'Nắm bắt ý chính tài liệu kỹ thuật',
    order: 10,
    categoryEn: 'Foundation & Daily Communication',
    categoryVi: 'Nền tảng Kỹ năng',
  },
  '11_writing_code_comments': {
    slug: 'writing-code-comments',
    titleEn: 'Writing Code Comments & PRs',
    subtitleEn: 'Professional English for JSDoc, inline comments, and PR descriptions',
    titleVi: 'Viết Comment Code & Pull Request',
    subtitleVi: 'Tiếng Anh chuyên nghiệp cho JSDoc, comment inline và mô tả PR',
    order: 11,
    categoryEn: 'Technical Communication',
    categoryVi: 'Giao tiếp Kỹ thuật',
  },
  '12_code_review_discussions': {
    slug: 'code-review-discussions',
    titleEn: 'Code Review & Technical Discussions',
    subtitleEn: 'Templates for giving feedback and discussing technical architecture',
    titleVi: 'Thảo luận Kỹ thuật & Code Review',
    subtitleVi: 'Mẫu câu phản hồi và thảo luận về kiến trúc kỹ thuật',
    order: 12,
    categoryEn: 'Technical Communication',
    categoryVi: 'Giao tiếp Kỹ thuật',
  },
  '13_bug_reporting_troubleshooting': {
    slug: 'bug-reporting-troubleshooting',
    titleEn: 'Bug Reporting & Troubleshooting',
    subtitleEn: 'Vocabulary for reporting bugs and explaining technical issues',
    titleVi: 'Báo cáo Bug & Xử lý sự cố',
    subtitleVi: 'Từ vựng để báo cáo lỗi và giải thích vấn đề kỹ thuật',
    order: 13,
    categoryEn: 'Technical Communication',
    categoryVi: 'Giao tiếp Kỹ thuật',
  },
  '14_performance_optimization': {
    slug: 'performance-optimization',
    titleEn: 'Performance Optimization',
    subtitleEn: 'Discussing bottlenecks, memory leaks, and scaling solutions',
    titleVi: 'Tối ưu Hiệu năng (Performance)',
    subtitleVi: 'Thảo luận về điểm nghẽn, rò rỉ bộ nhớ và giải pháp mở rộng',
    order: 14,
    categoryEn: 'Technical Communication',
    categoryVi: 'Giao tiếp Kỹ thuật',
  },
  '15_api_database_discussions': {
    slug: 'api-database-discussions',
    titleEn: 'API & Database Discussions',
    subtitleEn: 'Discussing endpoints, queries, and schemas',
    titleVi: 'Thảo luận về Database & API Design',
    subtitleVi: 'Giao tiếp khi thiết kế API và cơ sở dữ liệu',
    order: 15,
    categoryEn: 'Technical Communication',
    categoryVi: 'Giao tiếp Kỹ thuật',
  },
  '16_system_architecture_walkthrough': {
    slug: 'system-architecture-walkthrough',
    titleEn: 'System Architecture Walkthrough',
    subtitleEn: 'Explaining system design and components',
    titleVi: 'Giải thích Kiến trúc Hệ thống',
    subtitleVi: 'Trình bày và bảo vệ System Design',
    order: 16,
    categoryEn: 'Technical Communication',
    categoryVi: 'Giao tiếp Kỹ thuật',
  },
  '17_project_handover': {
    slug: 'project-handover',
    titleEn: 'Project Handover',
    subtitleEn: 'Transferring knowledge and source code',
    titleVi: 'Bàn giao dự án và source code',
    subtitleVi: 'KT (Knowledge Transfer) hiệu quả',
    order: 17,
    categoryEn: 'Technical Communication',
    categoryVi: 'Giao tiếp Kỹ thuật',
  },
  '18_pair_programming_communication': {
    slug: 'pair-programming-communication',
    titleEn: 'Pair-programming Communication',
    subtitleEn: 'Talking through code in real-time',
    titleVi: 'Giao tiếp khi Pair-programming',
    subtitleVi: 'Mẫu câu hướng dẫn và góp ý khi code chung',
    order: 18,
    categoryEn: 'Technical Communication',
    categoryVi: 'Giao tiếp Kỹ thuật',
  },
  '19_pitching_code_refactoring': {
    slug: 'pitching-code-refactoring',
    titleEn: 'Pitching Code Refactoring',
    subtitleEn: 'Persuading management to tackle tech debt',
    titleVi: 'Thuyết phục sếp/team cho phép Refactor Code',
    subtitleVi: 'Đưa ra lý do hợp lý để trả nợ kỹ thuật (Tech Debt)',
    order: 19,
    categoryEn: 'Technical Communication',
    categoryVi: 'Giao tiếp Kỹ thuật',
  },
  '20_writing_project_documentation': {
    slug: 'writing-project-documentation',
    titleEn: 'Writing Project Documentation',
    subtitleEn: 'Creating READMEs and API docs',
    titleVi: 'Viết tài liệu dự án (README, API Docs)',
    subtitleVi: 'Cấu trúc tài liệu kỹ thuật chuẩn quốc tế',
    order: 20,
    categoryEn: 'Technical Communication',
    categoryVi: 'Giao tiếp Kỹ thuật',
  },
  '21_meeting_templates': {
    slug: 'meeting-templates',
    titleEn: 'English Meeting Templates For Team Lead',
    subtitleEn: 'Safe speaking formulas for weekly client meetings',
    titleVi: 'Mẫu câu họp hàng tuần với khách hàng',
    subtitleVi: 'Công thức nói an toàn cho team lead',
    order: 21,
    categoryEn: 'Agile & Meetings',
    categoryVi: 'Hội họp & Quy trình',
  },
  '22_conversation_scenarios': {
    slug: 'conversation-scenarios',
    titleEn: 'Real-world Conversation Scenarios',
    subtitleEn: 'Bilingual reading comprehension dialogues for daily work and meetings',
    titleVi: 'Kịch bản hội thoại thực tế',
    subtitleVi: 'Hội thoại mẫu đọc hiểu cho standup, client meeting và phỏng vấn',
    order: 22,
    categoryEn: 'Agile & Meetings',
    categoryVi: 'Hội họp & Quy trình',
  },
  '23_agile_scrum_ceremonies': {
    slug: 'agile-scrum-ceremonies',
    titleEn: 'Agile & Scrum Ceremonies',
    subtitleEn: 'Deep dive into Sprint Planning, Refinement, and Retrospectives',
    titleVi: 'Các buổi họp Agile & Scrum',
    subtitleVi: 'Tiếng Anh chuyên sâu cho Sprint Planning, Refinement và Retro',
    order: 23,
    categoryEn: 'Agile & Meetings',
    categoryVi: 'Hội họp & Quy trình',
  },
  '24_presentations_demos': {
    slug: 'presentations-demos',
    titleEn: 'Presentations & Product Demos',
    subtitleEn: 'Essential phrases for leading sprint reviews and demoing features',
    titleVi: 'Thuyết trình & Demo Sản phẩm',
    subtitleVi: 'Các mẫu câu dẫn dắt sprint review và demo tính năng',
    order: 24,
    categoryEn: 'Agile & Meetings',
    categoryVi: 'Hội họp & Quy trình',
  },
  '25_small_talk_rapport': {
    slug: 'small-talk-rapport',
    titleEn: 'English Small Talk And Rapport',
    subtitleEn: 'Natural opening and closing lines for meetings',
    titleVi: 'Small talk và tạo kết nối tự nhiên',
    subtitleVi: 'Mở và đóng hội họp thân thiện hơn',
    order: 25,
    categoryEn: 'Agile & Meetings',
    categoryVi: 'Hội họp & Quy trình',
  },
  '26_advanced_daily_standup': {
    slug: 'advanced-daily-standup',
    titleEn: 'Advanced Daily Standup',
    subtitleEn: 'Providing clear and concise status updates',
    titleVi: 'Báo cáo tiến độ (Daily Standup Nâng cao)',
    subtitleVi: 'Mẫu câu standup chuyên nghiệp và ngắn gọn',
    order: 26,
    categoryEn: 'Agile & Meetings',
    categoryVi: 'Hội họp & Quy trình',
  },
  '27_facilitating_retrospectives': {
    slug: 'facilitating-retrospectives',
    titleEn: 'Facilitating Retrospectives',
    subtitleEn: 'Leading constructive feedback sessions',
    titleVi: 'Điều phối họp Retrospective hiệu quả',
    subtitleVi: 'Góp ý xây dựng và giải quyết xung đột team',
    order: 27,
    categoryEn: 'Agile & Meetings',
    categoryVi: 'Hội họp & Quy trình',
  },
  '28_project_status_reporting': {
    slug: 'project-status-reporting',
    titleEn: 'Project Status Reporting',
    subtitleEn: 'Presenting progress to stakeholders',
    titleVi: 'Trình bày Báo cáo Trạng thái Dự án',
    subtitleVi: 'Giao tiếp với Stakeholders và PO',
    order: 28,
    categoryEn: 'Agile & Meetings',
    categoryVi: 'Hội họp & Quy trình',
  },
  '29_interrupting_holding_floor': {
    slug: 'interrupting-holding-floor',
    titleEn: 'Interrupting & Holding the Floor',
    subtitleEn: 'Polite interruption strategies',
    titleVi: 'Kỹ năng ngắt lời và giành lại quyền nói',
    subtitleVi: 'Cách chen ngang lịch sự trong cuộc họp',
    order: 29,
    categoryEn: 'Agile & Meetings',
    categoryVi: 'Hội họp & Quy trình',
  },
  '30_summarizing_meeting_minutes': {
    slug: 'summarizing-meeting-minutes',
    titleEn: 'Summarizing Meeting Minutes',
    subtitleEn: 'Writing and confirming meeting takeaways',
    titleVi: 'Cách chốt biên bản cuộc họp (MOM)',
    subtitleVi: 'Tóm tắt Action Items và gửi email xác nhận',
    order: 30,
    categoryEn: 'Agile & Meetings',
    categoryVi: 'Hội họp & Quy trình',
  },
  '31_client_situations': {
    slug: 'client-situations',
    titleEn: 'English Client Situations Reference',
    subtitleEn: 'Practical English for difficult client situations',
    titleVi: 'Tình huống khó với khách hàng',
    subtitleVi: 'Mẫu câu để phản hồi lịch sự và chắc chắn',
    order: 31,
    categoryEn: 'Difficult Situations',
    categoryVi: 'Tình huống Khó',
  },
  '32_negotiating_deadlines': {
    slug: 'negotiating-deadlines',
    titleEn: 'Negotiating Deadlines & Scope',
    subtitleEn: 'How to push back, cut scope, and talk about delays politely',
    titleVi: 'Thương lượng Deadline & Phạm vi',
    subtitleVi: 'Cách đẩy lùi deadline, cắt giảm tính năng và báo trễ tiến độ lịch sự',
    order: 32,
    categoryEn: 'Difficult Situations',
    categoryVi: 'Tình huống Khó',
  },
  '33_cross_team_collaboration': {
    slug: 'cross-team-collaboration',
    titleEn: 'Cross-team Collaboration',
    subtitleEn: 'Communicating with DevOps, Design, QA, and Marketing teams',
    titleVi: 'Làm việc liên phòng ban (Cross-team)',
    subtitleVi: 'Tiếng Anh giao tiếp với DevOps, Design, QA và Marketing',
    order: 33,
    categoryEn: 'Difficult Situations',
    categoryVi: 'Tình huống Khó',
  },
  '34_delivering_bad_news': {
    slug: 'delivering-bad-news',
    titleEn: 'Delivering Bad News',
    subtitleEn: 'Reporting critical failures and data loss',
    titleVi: 'Báo tin xấu (Sập Server / Mất Data)',
    subtitleVi: 'Giao tiếp khi có sự cố nghiêm trọng',
    order: 34,
    categoryEn: 'Difficult Situations',
    categoryVi: 'Tình huống Khó',
  },
  '35_handling_scope_creep': {
    slug: 'handling-scope-creep',
    titleEn: 'Handling Scope Creep',
    subtitleEn: 'Dealing with changing requirements',
    titleVi: 'Xử lý khi khách hàng thay đổi requirement liên tục',
    subtitleVi: 'Đóng gói Scope Creep lịch sự',
    order: 35,
    categoryEn: 'Difficult Situations',
    categoryVi: 'Tình huống Khó',
  },
  '36_pushing_back_unreasonable_requests': {
    slug: 'pushing-back-unreasonable-requests',
    titleEn: 'Pushing Back on Unreasonable Requests',
    subtitleEn: 'Saying no to managers or POs',
    titleVi: 'Từ chối yêu cầu vô lý từ Sếp hoặc PO',
    subtitleVi: 'Cách nói "Không" một cách khéo léo',
    order: 36,
    categoryEn: 'Difficult Situations',
    categoryVi: 'Tình huống Khó',
  },
  '37_production_incident_communication': {
    slug: 'production-incident-communication',
    titleEn: 'Production Incident Communication',
    subtitleEn: 'Communicating during live outages',
    titleVi: 'Giao tiếp khi hệ thống gặp sự cố Production',
    subtitleVi: 'Quy trình giao tiếp Incident Response',
    order: 37,
    categoryEn: 'Difficult Situations',
    categoryVi: 'Tình huống Khó',
  },
  '38_requesting_additional_resources': {
    slug: 'requesting-additional-resources',
    titleEn: 'Requesting Additional Resources',
    subtitleEn: 'Asking for more time, budget, or team members',
    titleVi: 'Xin thêm Resource / Nhân sự cho dự án',
    subtitleVi: 'Thuyết phục tăng nguồn lực hợp lý',
    order: 38,
    categoryEn: 'Difficult Situations',
    categoryVi: 'Tình huống Khó',
  },
  '39_handling_blame_finger_pointing': {
    slug: 'handling-blame-finger-pointing',
    titleEn: 'Handling Blame & Finger-pointing',
    subtitleEn: 'Navigating toxic blame cultures',
    titleVi: 'Xử lý tình huống bị đổ lỗi (Blame Game)',
    subtitleVi: 'Bảo vệ bản thân mà không gây thù oán',
    order: 39,
    categoryEn: 'Difficult Situations',
    categoryVi: 'Tình huống Khó',
  },
  '40_professional_disagreements': {
    slug: 'professional-disagreements',
    titleEn: 'Professional Disagreements',
    subtitleEn: 'Arguing passionately but professionally',
    titleVi: 'Tranh luận nảy lửa một cách chuyên nghiệp',
    subtitleVi: 'Bảo vệ quan điểm cá nhân mạnh mẽ',
    order: 40,
    categoryEn: 'Difficult Situations',
    categoryVi: 'Tình huống Khó',
  },
  '41_interview_preparation': {
    slug: 'interview-preparation',
    titleEn: 'Job Interview Preparation',
    subtitleEn: 'Standard QA and strategies for professional English interviews',
    titleVi: 'Chuẩn bị phỏng vấn tiếng Anh',
    subtitleVi: 'Câu hỏi thường gặp và chiến thuật trả lời phỏng vấn',
    order: 41,
    categoryEn: 'Career Growth & Interviews',
    categoryVi: 'Sự nghiệp & Phỏng vấn',
  },
  '42_technical_system_design_interviews': {
    slug: 'technical-system-design-interviews',
    titleEn: 'Technical / System Design Interviews',
    subtitleEn: 'Explaining architectures in interviews',
    titleVi: 'Phỏng vấn Kỹ thuật / System Design',
    subtitleVi: 'Từ vựng "chém gió" kiến trúc phần mềm',
    order: 42,
    categoryEn: 'Career Growth & Interviews',
    categoryVi: 'Sự nghiệp & Phỏng vấn',
  },
  '43_salary_negotiation': {
    slug: 'salary-negotiation',
    titleEn: 'Salary Negotiation',
    subtitleEn: 'Discussing compensation and benefits',
    titleVi: 'Kỹ năng Đàm phán Lương (Offer Negotiation)',
    subtitleVi: 'Mẫu câu đàm phán đãi ngộ khéo léo',
    order: 43,
    categoryEn: 'Career Growth & Interviews',
    categoryVi: 'Sự nghiệp & Phỏng vấn',
  },
  '44_performance_reviews': {
    slug: 'performance-reviews',
    titleEn: 'Performance Reviews',
    subtitleEn: 'Evaluating and discussing performance',
    titleVi: 'Tham gia buổi Đánh giá Năng lực',
    subtitleVi: 'Trình bày thành tích (Performance Review)',
    order: 44,
    categoryEn: 'Career Growth & Interviews',
    categoryVi: 'Sự nghiệp & Phỏng vấn',
  },
  '45_asking_raise_promotion': {
    slug: 'asking-raise-promotion',
    titleEn: 'Asking for a Raise or Promotion',
    subtitleEn: 'Pitching your value for advancement',
    titleVi: 'Đề xuất tăng lương và thăng chức',
    subtitleVi: 'Chứng minh năng lực và deal lương',
    order: 45,
    categoryEn: 'Career Growth & Interviews',
    categoryVi: 'Sự nghiệp & Phỏng vấn',
  },
  '46_1_on_1_management': {
    slug: '1-on-1-management',
    titleEn: '1-on-1 Meetings with Management',
    subtitleEn: 'Navigating one-on-one reviews',
    titleVi: 'Họp 1-on-1 với Quản lý cấp cao',
    subtitleVi: 'Chia sẻ định hướng và khó khăn',
    order: 46,
    categoryEn: 'Career Growth & Interviews',
    categoryVi: 'Sự nghiệp & Phỏng vấn',
  },
  '47_mentoring_juniors': {
    slug: 'mentoring-juniors',
    titleEn: 'Mentoring Juniors',
    subtitleEn: 'Guiding and supporting junior developers',
    titleVi: 'Kỹ năng Hướng dẫn Thực tập sinh (Mentoring)',
    subtitleVi: 'Chỉ dạy và feedback mang tính xây dựng',
    order: 47,
    categoryEn: 'Career Growth & Interviews',
    categoryVi: 'Sự nghiệp & Phỏng vấn',
  },
  '48_elevator_pitch': {
    slug: 'elevator-pitch',
    titleEn: 'The Elevator Pitch',
    subtitleEn: 'Introducing yourself effectively',
    titleVi: 'Giới thiệu bản thân ấn tượng',
    subtitleVi: 'Mẫu câu Elevator Pitch 60 giây',
    order: 48,
    categoryEn: 'Career Growth & Interviews',
    categoryVi: 'Sự nghiệp & Phỏng vấn',
  },
  '49_cross_cultural_communication': {
    slug: 'cross-cultural-communication',
    titleEn: 'Cross-cultural Communication',
    subtitleEn: 'Working effectively in global teams',
    titleVi: 'Giao tiếp trong môi trường Đa văn hóa',
    subtitleVi: 'Tránh những hiểu lầm văn hóa (Culture Shock)',
    order: 49,
    categoryEn: 'Career Growth & Interviews',
    categoryVi: 'Sự nghiệp & Phỏng vấn',
  },
  '50_giving_constructive_feedback': {
    slug: 'giving-constructive-feedback',
    titleEn: 'Giving Constructive Feedback',
    subtitleEn: 'Providing helpful critiques',
    titleVi: 'Phản hồi mang tính xây dựng',
    subtitleVi: 'Nghệ thuật chê bai khéo léo',
    order: 50,
    categoryEn: 'Career Growth & Interviews',
    categoryVi: 'Sự nghiệp & Phỏng vấn',
  },
  '51_comparing_technical_solutions': {
    slug: 'comparing-technical-solutions',
    titleEn: 'Comparing Technical Solutions',
    subtitleEn: 'Grammar and formulas for comparing technologies and architecture patterns',
    titleVi: 'So sánh Giải pháp Kỹ thuật',
    subtitleVi: 'Ngữ pháp và mẫu câu phân tích ưu/nhược điểm công nghệ',
    order: 51,
    categoryEn: 'Technical Communication',
    categoryVi: 'Giao tiếp Kỹ thuật',
  },
  '52_tenses_for_daily_standups': {
    slug: 'tenses-for-daily-standups',
    titleEn: 'Tense Hacks for Daily Standups',
    subtitleEn: 'Using the right tenses for reporting completed, current, and future tasks',
    titleVi: 'Mẹo Chia Thì khi họp Standup',
    subtitleVi: 'Cách chia thì chuẩn xác cho task đã làm, đang làm và sắp làm',
    order: 52,
    categoryEn: 'Speaking Grammar Hacks',
    categoryVi: 'Mẹo Ngữ pháp Speaking',
  },
  '53_relative_clause_shortcuts': {
    slug: 'relative-clause-shortcuts',
    titleEn: 'Relative Clause Reduction Hacks',
    subtitleEn: 'Shortening who, which, and that clauses to speak faster and sound natural',
    titleVi: 'Mẹo Rút Gọn Mệnh Đề Quan Hệ',
    subtitleVi: 'Cách lược bỏ who, which, that để nói nhanh và tự nhiên hơn',
    order: 53,
    categoryEn: 'Speaking Grammar Hacks',
    categoryVi: 'Mẹo Ngữ pháp Speaking',
  },
  '54_parts_of_speech_noun_compounds': {
    slug: 'parts-of-speech-noun-compounds',
    titleEn: 'Word Families & Noun Compounds',
    subtitleEn: 'Avoid parts of speech confusion and learn singular-noun compounds',
    titleVi: 'Từ loại & Danh từ Ghép trong IT',
    subtitleVi: 'Tránh nhầm lẫn loại từ và nguyên tắc danh từ ghép không thêm s',
    order: 54,
    categoryEn: 'Speaking Grammar Hacks',
    categoryVi: 'Mẹo Ngữ pháp Speaking',
  },
  '55_conjunctions_and_transitions': {
    slug: 'conjunctions-and-transitions',
    titleEn: 'Conjunctions & Transition Words',
    subtitleEn: 'Grammar differences for but vs however, so vs therefore, because vs due to',
    titleVi: 'Liên từ & Từ nối chuyên nghiệp',
    subtitleVi: 'Phân biệt cách dùng but/however, so/therefore, because/due to',
    order: 55,
    categoryEn: 'Speaking Grammar Hacks',
    categoryVi: 'Mẹo Ngữ pháp Speaking',
  },
  '56_comparatives_technical_tradeoffs': {
    slug: 'comparatives-technical-tradeoffs',
    titleEn: 'Comparatives for System Trade-offs',
    subtitleEn: 'Formulas and modifiers for comparing technologies and performance dimensions',
    titleVi: 'So sánh & Đánh giá Hệ thống',
    subtitleVi: 'Cấu trúc so sánh hơn, so sánh kép để phân tích trade-off',
    order: 56,
    categoryEn: 'Speaking Grammar Hacks',
    categoryVi: 'Mẹo Ngữ pháp Speaking',
  },
  '57_gerunds_vs_infinitives': {
    slug: 'gerunds-vs-infinitives',
    titleEn: 'Gerunds vs. Infinitives in IT',
    subtitleEn: 'Using V-ing vs. to-V correctly after recommend, avoid, plan, and decide',
    titleVi: 'Danh động từ vs Động từ nguyên mẫu',
    subtitleVi: 'Cách dùng V-ing và to-V chuẩn xác sau các động từ lập trình',
    order: 57,
    categoryEn: 'Speaking Grammar Hacks',
    categoryVi: 'Mẹo Ngữ pháp Speaking',
  },
  '58_hypothetical_conditionals': {
    slug: 'hypothetical-conditionals',
    titleEn: 'Hypothetical Conditionals for Retros',
    subtitleEn: 'Using Conditionals Type 2 & 3 for post-mortem analysis and planning',
    titleVi: 'Câu Điều Kiện Giả Định khi họp Retro',
    subtitleVi: 'Sử dụng câu điều kiện loại 2 & 3 để rút kinh nghiệm sự cố',
    order: 58,
    categoryEn: 'Speaking Grammar Hacks',
    categoryVi: 'Mẹo Ngữ pháp Speaking',
  },
  '59_subjunctive_mood_formal_demands': {
    slug: 'subjunctive-mood-formal-demands',
    titleEn: 'Subjunctive Mood & Formal Demands',
    subtitleEn: 'Using the subjunctive mood for requirements, suggestions, and urgent requests',
    titleVi: 'Thức Giả Định trong Yêu Cầu & Đề Xuất',
    subtitleVi: 'Cách dùng thức giả định chuẩn xác khi yêu cầu hoặc gợi ý giải pháp',
    order: 59,
    categoryEn: 'Speaking Grammar Hacks',
    categoryVi: 'Mẹo Ngữ pháp Speaking',
  },
  '60_adverbs_for_performance': {
    slug: 'adverbs-for-performance',
    titleEn: 'Adverbs for System Performance',
    subtitleEn: 'Adverbs of frequency and degree for logs, charts, and metrics',
    titleVi: 'Trạng Từ Chỉ Tần Suất & Mức Độ',
    subtitleVi: 'Cách dùng trạng từ mô tả hiệu năng hệ thống chuẩn xác',
    order: 60,
    categoryEn: 'Speaking Grammar Hacks',
    categoryVi: 'Mẹo Ngữ pháp Speaking',
  },
  '61_reporting_verbs': {
    slug: 'reporting-verbs',
    titleEn: 'Reporting Verbs for Updates & Documentation',
    subtitleEn: 'Varried verbs for documenting team decisions and client requests',
    titleVi: 'Động Từ Tường Thuật Chuyên Nghiệp',
    subtitleVi: 'Cách dẫn dắt, tường thuật ý kiến họp hành và quyết định thiết kế',
    order: 61,
    categoryEn: 'Speaking Grammar Hacks',
    categoryVi: 'Mẹo Ngữ pháp Speaking',
  },
  '62_purpose_result_reason': {
    slug: 'purpose-result-reason',
    titleEn: 'Purpose, Result & Reason in Tech Writing',
    subtitleEn: 'Formulas to link decisions with technical goals in PR descriptions',
    titleVi: 'Mục Đích, Kết Quả & Nguyên Nhân',
    subtitleVi: 'Cách viết mô tả PR và comment code làm rõ mục tiêu kỹ thuật',
    order: 62,
    categoryEn: 'Speaking Grammar Hacks',
    categoryVi: 'Mẹo Ngữ pháp Speaking',
  },
  '63_subject_verb_agreement_pitfalls': {
    slug: 'subject-verb-agreement-pitfalls',
    titleEn: 'Subject-Verb Agreement Pitfalls',
    subtitleEn: 'Common subject-verb agreement traps for uncountable tech nouns',
    titleVi: 'Lỗi Hòa Hợp Chủ Vị Trong IT',
    subtitleVi: 'Tránh chia sai động từ với các danh từ code, software, data',
    order: 63,
    categoryEn: 'Speaking Grammar Hacks',
    categoryVi: 'Mẹo Ngữ pháp Speaking',
  },
  '64_punctuation_and_style_writing': {
    slug: 'punctuation-and-style-writing',
    titleEn: 'Punctuation & Style Hacks',
    subtitleEn: 'Style rules for writing clean commit messages, PRs, and docs',
    titleVi: 'Quy Tắc Dấu Câu & Hành Văn',
    subtitleVi: 'Cách viết hoa, đặt dấu câu, hành văn commit message chuẩn chỉnh',
    order: 64,
    categoryEn: 'Speaking Grammar Hacks',
    categoryVi: 'Mẹo Ngữ pháp Speaking',
  },
}

function stripMarkdownSyntax(input: string): string {
  return input
    .replace(/\*\*/g, '')
    .replace(/`/g, '')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .trim()
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

function createFallbackTitle(fileName: string): string {
  return fileName
    .replace(/^\d+_/, '')
    .replace(/_reference$/, '')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
}

function stripLeadingDocHeadings(markdown: string): string {
  return markdown
    .replace(/^#\s+.+\n+/, '')
    .replace(/^##\s+.+\n+/, '')
    .trimStart()
}

function isTocPreludeHeading(input: string): boolean {
  const normalized = slugify(input)
  return normalized === 'muc-luc' || normalized === 'contents' || normalized === 'table-of-contents'
}

// English (default) markdown modules — docs/en/
const markdownModules = import.meta.glob('../../docs/en/*.md', {
  query: '?raw',
  import: 'default',
}) as Record<string, () => Promise<string>>

// Vietnamese markdown modules — docs/vn/
const markdownModulesVi = import.meta.glob('../../docs/vn/*.md', {
  query: '?raw',
  import: 'default',
}) as Record<string, () => Promise<string>>

const moduleLoaderByFileName = new Map<string, () => Promise<string>>(
  Object.entries(markdownModules).map(([filePath, loader]) => [
    filePath.split('/').pop()?.replace('.md', '') ?? filePath,
    loader,
  ]),
)

// Vietnamese loaders share the same base filenames as English
const viModuleLoaderByFileName = new Map<string, () => Promise<string>>(
  Object.entries(markdownModulesVi).map(([filePath, loader]) => [
    filePath.split('/').pop()?.replace('.md', '') ?? filePath,
    loader,
  ]),
)

const docs: DocSummary[] = Object.keys(markdownModules)
  .map((filePath) => {
    const fileName = filePath.split('/').pop()?.replace('.md', '') ?? ''
    const meta = FILE_META[fileName]
    const fallbackTitle = createFallbackTitle(fileName)

    return {
      slug: meta?.slug ?? slugify(fileName),
      fileName,
      titleEn: meta?.titleEn ?? fallbackTitle,
      titleVi: meta?.titleVi ?? fallbackTitle,
      subtitleEn: meta?.subtitleEn ?? '',
      subtitleVi: meta?.subtitleVi ?? '',
      order: meta?.order ?? 999,
      categoryEn: meta?.categoryEn,
      categoryVi: meta?.categoryVi,
    }
  })
  .sort((a, b) => a.order - b.order)

const docBySlug = new Map(docs.map((doc) => [doc.slug, doc]))
const cacheByKey = new Map<string, DocItem>()
const pendingByKey = new Map<string, Promise<DocItem | undefined>>()

async function renderMarkdown(
  raw: string,
): Promise<Pick<DocItem, 'html' | 'headings' | 'sectionCount'>> {
  const [{ default: MarkdownIt }, { default: markdownItAnchor }] = await Promise.all([
    import('markdown-it'),
    import('markdown-it-anchor'),
  ])

  const headings: DocHeading[] = []
  const slugCounts = new Map<string, number>()

  const parser = new MarkdownIt({
    html: false,
    linkify: true,
    typographer: true,
  }).use(markdownItAnchor, {
    level: [1, 2, 3],
    slugify: (value: string) => {
      const base = slugify(value)
      const currentCount = slugCounts.get(base) ?? 0
      const nextCount = currentCount + 1
      slugCounts.set(base, nextCount)
      return nextCount === 1 ? base : `${base}-${nextCount}`
    },
    callback: (token: any, info: { slug: string; title: string }) => {
      const level = Number(String(token.tag).replace('h', ''))
      const text = stripMarkdownSyntax(info.title)

      if ((level === 1 || level === 2) && !isTocPreludeHeading(text)) {
        headings.push({
          id: info.slug,
          text,
          level,
        })
      }
    },
  })

  let html = parser.render(raw)

  // Strip inline TOC section (MỤC LỤC / Contents / Table of Contents) from rendered HTML.
  // This heading + its following list is redundant because the sidebar TOC already shows it.
  html = html.replace(
    /<h1[^>]*>(?:MỤC LỤC|MỤC LỤC|Contents|Table of Contents)<\/h1>\s*(?:<(?:ul|ol)[^>]*>[\s\S]*?<\/(?:ul|ol)>\s*)*/gi,
    '',
  )

  // Convert inline code references to .md files into clickable links
  // e.g. <code>english_speaking_grammar_reference.md</code>  →  <a href="/docs/speaking-grammar">…</a>
  // Supports both new numbered filenames and legacy english_* filenames
  const LEGACY_SLUG_MAP: Record<string, string> = {
    english_meeting_templates_for_team_lead_notion: 'meeting-templates',
    english_speaking_grammar_reference: 'speaking-grammar',
    english_writing_reference: 'writing-reference',
    english_vocabulary_reference: 'vocabulary-reference',
    english_client_situations_reference: 'client-situations',
    english_small_talk_and_rapport: 'small-talk-rapport',
  }

  html = html.replace(/<code>([a-z0-9_]+)\.md<\/code>/gi, (_match: string, fileName: string) => {
    const meta = FILE_META[fileName]
    const slug = meta?.slug ?? LEGACY_SLUG_MAP[fileName]
    if (slug) {
      return `<a href="/docs/${slug}" class="doc-file-link"><code>${fileName}.md</code></a>`
    }
    return `<code>${fileName}.md</code>`
  })

  return {
    html,
    headings,
    sectionCount: headings.length,
  }
}

async function loadDoc(
  summary: DocSummary,
  locale: AppLocale = 'en',
): Promise<DocItem | undefined> {
  // Try Vietnamese loader first if locale is 'vi'
  const loader =
    locale === 'vi'
      ? (viModuleLoaderByFileName.get(summary.fileName) ??
        moduleLoaderByFileName.get(summary.fileName))
      : moduleLoaderByFileName.get(summary.fileName)

  if (!loader) {
    return undefined
  }

  const raw = await loader()
  const content = stripLeadingDocHeadings(raw)
  const rendered = await renderMarkdown(content)

  return {
    ...summary,
    raw: content,
    html: rendered.html,
    headings: rendered.headings,
    sectionCount: rendered.sectionCount,
  }
}

export function getDocs(): DocSummary[] {
  return docs
}

export async function getDocBySlug(
  slug: string,
  locale: AppLocale = 'en',
): Promise<DocItem | undefined> {
  const cacheKey = `${slug}:${locale}`

  if (cacheByKey.has(cacheKey)) {
    return cacheByKey.get(cacheKey)
  }

  if (pendingByKey.has(cacheKey)) {
    return pendingByKey.get(cacheKey)
  }

  const summary = docBySlug.get(slug)
  if (!summary) {
    return undefined
  }

  const pending = loadDoc(summary, locale)
    .then((doc) => {
      if (doc) {
        cacheByKey.set(cacheKey, doc)
      }
      return doc
    })
    .finally(() => {
      pendingByKey.delete(cacheKey)
    })

  pendingByKey.set(cacheKey, pending)
  return pending
}

export function getDocTitle(
  doc: Pick<DocSummary, 'titleEn' | 'titleVi'>,
  locale: AppLocale,
): string {
  return locale === 'vi' ? doc.titleVi : doc.titleEn
}

export function getDocSubtitle(
  doc: Pick<DocSummary, 'subtitleEn' | 'subtitleVi'>,
  locale: AppLocale,
): string {
  return locale === 'vi' ? doc.subtitleVi : doc.subtitleEn
}
