// ─── Language ───────────────────────────────────────────────────────────────

export type LanguageLevel = "beginner" | "intermediate" | "advanced";

export interface Language {
  id: string;
  name: string; // English name e.g. "Spanish"
  nativeName: string; // Native name e.g. "Español"
  flag: string; // Emoji flag e.g. "🇪🇸"
  difficulty: LanguageLevel;
  totalUnits: number;
  learners: string; // e.g. "28.4M"
}

// ─── Unit ────────────────────────────────────────────────────────────────────

export interface Unit {
  id: string;
  languageId: string;
  title: string;
  description: string;
  order: number;
  color: string; // Accent color for the unit card (hex)
}

// ─── Vocabulary & Phrases ────────────────────────────────────────────────────

export interface VocabularyItem {
  word: string; // Word in target language
  translation: string; // English translation
  pronunciation: string; // Phonetic guide e.g. "OH-lah"
  exampleSentence?: string; // Example in target language
  exampleTranslation?: string; // Example translated to English
}

export interface Phrase {
  text: string; // Phrase in target language
  translation: string; // English translation
  pronunciation: string; // Phonetic guide
  context?: string; // When to use this phrase
}

// ─── Activities ──────────────────────────────────────────────────────────────

export type ActivityType = "vocabulary" | "phrase" | "quiz" | "listening";

export interface VocabularyActivity {
  type: "vocabulary";
  items: VocabularyItem[];
}

export interface PhraseActivity {
  type: "phrase";
  items: Phrase[];
}

export interface QuizOption {
  text: string;
  isCorrect: boolean;
}

export interface QuizActivity {
  type: "quiz";
  question: string;
  options: QuizOption[];
  explanation?: string;
}

export interface ListeningActivity {
  type: "listening";
  prompt: string; // What to listen for / instruction
  transcript: string; // The spoken sentence in target language
  translation: string; // English translation
}

export type Activity =
  | VocabularyActivity
  | PhraseActivity
  | QuizActivity
  | ListeningActivity;

// ─── Lesson ──────────────────────────────────────────────────────────────────

export type LessonType = "audio" | "video" | "chat" | "vocabulary";

export interface LessonGoal {
  description: string; // e.g. "Learn how to greet someone"
}

export interface Lesson {
  id: string;
  unitId: string;
  title: string;
  type: LessonType;
  order: number;
  xpReward: number;
  estimatedMinutes: number;
  goals: LessonGoal[];
  // Prompt used to instruct the AI Vision Agent teacher for audio/video lessons
  aiTeacherPrompt: string;
  activities: Activity[];
}
