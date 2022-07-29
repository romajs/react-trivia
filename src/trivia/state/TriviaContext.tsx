import { createContext, useContext } from 'react';

type TriviaContextType = {
  answerQuestion: (value: boolean) => void;
  answers: boolean[];
  beginQuiz: () => void;
  currentQuestion: Question | undefined;
  endQuiz: () => void;
  loading: boolean;
  nextQuestion: () => void;
  questions: Question[];
  totalQuestions: number;
};

export const TriviaContext = createContext<TriviaContextType | null>(null);

export const useTriviaContext = (): TriviaContextType => useContext(TriviaContext) || ({} as TriviaContextType);
