import React, { useEffect, useMemo, useReducer, useState } from 'react';
import * as Transformers from '../TriviaQuestionTransformer';
import { TriviaAPI } from '../TriviaAPI';
import { TriviaContext } from './TriviaContext';
import { initialState, TriviaActionType, triviaReducer } from './TriviaReducer';

type TriviaProviderProps = React.PropsWithChildren & {
  checkStartPage: () => boolean;
  onBegin: () => void;
  onEnd: () => void;
  onError: () => void;
  onRetry: () => void;
  triviaApi: TriviaAPI;
};

export const TriviaProvider = ({
  checkStartPage,
  children,
  onBegin,
  onEnd,
  onError,
  onRetry,
  triviaApi,
}: TriviaProviderProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [state, dispatch] = useReducer(triviaReducer, initialState);

  useEffect(() => {
    if (!state.questions?.length && !error && !checkStartPage()) {
      onRetry();
    }
  }, [state, checkStartPage, onRetry]);

  const beginQuiz = () => {
    setError(false);
    setLoading(true);
    triviaApi
      .listQuestions()
      .then(({ results }) => {
        const questions = results.map(Transformers.TriviaQuestionTransformer);
        dispatch({
          type: TriviaActionType.LoadQuestions,
          payload: { questions },
        });
        onBegin();
      })
      .catch(() => {
        setError(true);
        onError();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const nextQuestion = () => {
    const nextQuestionIndex = !state.currentQuestion ? 1 : state.currentQuestion.index + 1;
    if (nextQuestionIndex <= state.questions.length) {
      const question = state.questions[nextQuestionIndex - 1];
      dispatch({ type: TriviaActionType.ShiftNextQuestion, payload: { question } });
    } else {
      onEnd();
    }
  };

  const answerQuestion = (value: boolean) => {
    const answer = state.currentQuestion?.correctAnswer === value;
    dispatch({ type: TriviaActionType.PushAnswer, payload: { answer } });
    nextQuestion();
  };

  const endQuiz = () => {
    dispatch({ type: TriviaActionType.Reset });
    onRetry();
  };

  const currentQuestion: Question | undefined = useMemo(() => state.currentQuestion, [state]);

  const totalQuestions = useMemo(() => state.questions.length, [state]);

  const value = {
    answerQuestion,
    answers: state.answers,
    beginQuiz,
    currentQuestion,
    endQuiz,
    loading,
    nextQuestion,
    questions: state.questions,
    totalQuestions,
  };

  return <TriviaContext.Provider value={value}>{children}</TriviaContext.Provider>;
};
