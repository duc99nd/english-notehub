export default {
  app: {
    name: 'English Notehub',
    subtitle: 'Bàn học gọn gàng hơn cho meeting, writing và giao tiếp với khách hàng',
  },
  nav: {
    documents: 'Tài liệu',
    contents: 'Mục lục',
    language: 'Ngôn ngữ',
    skipToContent: 'Bỏ qua đến nội dung',
  },
  labels: {
    sections: 'Mục',
    noSections: 'Chưa có mục nội dung',
    referenceLibrary: 'Thư viện tài liệu',
    totalDocs: 'Tổng tài liệu',
    totalSections: 'Tổng mục',
    currentSections: 'Mục hiện tại',
    filteredDocs: 'Tài liệu đang hiện',
    quickJump: 'Đi nhanh',
    currentDoc: 'Tài liệu đang mở',
    continueReading: 'Đọc tiếp',
    bilingualMode: 'Sẵn sàng EN & VI',
  },
  placeholders: {
    search: 'Tìm tài liệu…',
  },
  actions: {
    openDocument: 'Mở tài liệu',
    backToTop: 'Lên đầu trang',
    openDocs: 'Tài liệu',
    openContents: 'Mục lục',
    hideContents: 'Ẩn mục lục',
    showContents: 'Hiện mục lục',
    hideDocs: 'Ẩn tài liệu',
    showDocs: 'Hiện tài liệu',
    previousDoc: 'Tài liệu trước',
    nextDoc: 'Tài liệu sau',
    searchDocuments: 'Tìm tài liệu',
  },
  locale: {
    en: 'Tiếng Anh',
    vi: 'Tiếng Việt',
  },
  home: {
    hero: {
      headline: 'Ghi chú tiếng Anh ngắn gọn, thực tế cho lập trình viên',
      subheadline: 'English Notehub giúp bạn tích lũy, học hỏi và ôn tập kiến thức tiếng Anh hữu ích ở cùng một nơi. Học từ ghi chú nhỏ, ôn lại thường xuyên, tiến bộ mỗi ngày.',
      startLearning: 'Bắt đầu học',
      browseNotes: 'Xem toàn bộ {count} ghi chú',
    },
    features: {
      title: 'Nội dung bạn sẽ học',
      phrases: {
        title: 'Cụm từ thông dụng',
        desc: 'Các diễn đạt tự nhiên cho hội thoại hàng ngày, standup và chat Slack.',
      },
      grammar: {
        title: 'Mẹo ngữ pháp',
        desc: 'Công thức ngữ pháp tinh gọn kèm ví dụ thực tế trong ngành IT.',
      },
      business: {
        title: 'Tiếng Anh công việc',
        desc: 'Mẫu câu báo cáo tiến độ, mô tả lỗi và giải thích nguyên nhân sự cố.',
      },
      interviews: {
        title: 'Sự nghiệp & Phỏng vấn',
        desc: 'Chuẩn bị cho phỏng vấn tiếng Anh, system design và thương lượng lương.',
      },
      difficult: {
        title: 'Tình huống khó',
        desc: 'Cách thương lượng deadline, từ chối khéo và báo tin xấu lịch sự.',
      },
      pronunciation: {
        title: 'Phát âm & Trôi chảy',
        desc: 'Hướng dẫn phát âm từ vựng IT và các cụm động từ chuyên ngành.',
      },
    },
    stats: {
      documents: 'Tài liệu',
      categories: 'Chuyên mục',
      bilingual: 'Bài học song ngữ',
      bilingualDesc: 'Tiếng Anh & Tiếng Việt',
    },
  },
} as const
