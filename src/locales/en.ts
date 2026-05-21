export default {
  app: {
    name: 'English Notehub',
    subtitle: 'A sharper study desk for meetings, writing, and confident client English',
  },
  nav: {
    documents: 'Documents',
    contents: 'Contents',
    language: 'Language',
    skipToContent: 'Skip To Content',
  },
  labels: {
    sections: 'sections',
    noSections: 'No sections found',
    referenceLibrary: 'Reference Library',
    totalDocs: 'Total Docs',
    totalSections: 'Total Sections',
    currentSections: 'Current Sections',
    filteredDocs: 'Visible Docs',
    quickJump: 'Quick Jump',
    currentDoc: 'Current Document',
    continueReading: 'Continue Reading',
    bilingualMode: 'EN & VI Ready',
  },
  placeholders: {
    search: 'Filter documents…',
  },
  actions: {
    openDocument: 'Open document',
    backToTop: 'Back to top',
    openDocs: 'Docs',
    openContents: 'TOC',
    hideContents: 'Hide TOC',
    showContents: 'Show TOC',
    hideDocs: 'Hide Docs',
    showDocs: 'Show Docs',
    previousDoc: 'Previous doc',
    nextDoc: 'Next doc',
    searchDocuments: 'Search documents',
  },
  locale: {
    en: 'English',
    vi: 'Vietnamese',
  },
  home: {
    hero: {
      headline: 'Simple, practical English notes for developers',
      subheadline: 'English Notehub helps you collect, learn, and review useful English knowledge in one place. Start with small notes, review often, and improve every day.',
      startLearning: 'Start Learning',
      browseNotes: 'Browse all {count} notes',
    },
    features: {
      title: 'What you can learn',
      phrases: {
        title: 'Common Phrases',
        desc: 'Natural expressions for daily office conversations, huddles, and Slack chat.',
      },
      grammar: {
        title: 'Grammar Hacks',
        desc: 'Practical grammar rules with simple patterns and real-life IT examples.',
      },
      business: {
        title: 'Business English',
        desc: 'Key phrases for status updates, bug reporting, and explaining technical issues.',
      },
      interviews: {
        title: 'Career & Interviews',
        desc: 'Prepare for English huddles, system design interviews, and salary negotiation.',
      },
      difficult: {
        title: 'Difficult Situations',
        desc: 'Polite ways to negotiate deadlines, handle scope creep, and deliver bad news.',
      },
      pronunciation: {
        title: 'Pronunciation & Fluency',
        desc: 'Pronunciation guides for common IT terms and phrasal verbs.',
      },
    },
    stats: {
      documents: 'Documents',
      categories: 'Categories',
      bilingual: 'Bilingual Notes',
      bilingualDesc: 'English & Vietnamese',
    },
  },
} as const
