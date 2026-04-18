export type Flashcard = { q: string; a: string };

export type QuizQuestion = {
  q: string;
  choices: string[];
  correct: number;
  explain: string;
};

export type Section = {
  id: string;
  group: string;
  title: string;
  bodyHtml: string;
  flashcards: Flashcard[];
  quiz: QuizQuestion[];
};

export type Mode = 'read' | 'flashcard' | 'quiz';

export type QuizBest = { score: number; total: number };

export type AppState = {
  progress: Record<string, boolean>;
  notes: Record<string, string>;
  quizBest: Record<string, QuizBest>;
  theme: 'light' | 'dark';
  mode: Mode;
  currentId: string;
  groupCollapse: Record<string, boolean>;
};
