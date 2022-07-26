import React, { useCallback, useEffect, useMemo, useReducer, useState } from 'react';
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
  const [state, dispatch] = useReducer(triviaReducer, initialState);

  useEffect(() => {
    console.log(state.questions?.length, checkStartPage());
    if (!state.questions?.length && !checkStartPage()) {
      onRetry();
    }
  }, [state, checkStartPage, onRetry]);

  const beginQuiz = useCallback(() => {
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
        onError();
      })
      .finally(() => {
        setLoading(false);
      });
  }, [triviaApi, dispatch, onBegin]);

  const nextQuestion = useCallback(() => {
    const nextQuestionIndex = !state.currentQuestion ? 1 : state.currentQuestion.index + 1;
    if (nextQuestionIndex <= state.questions.length) {
      const question = state.questions[nextQuestionIndex - 1];
      dispatch({ type: TriviaActionType.ShiftNextQuestion, payload: { question } });
    } else {
      onEnd();
    }
  }, [state, dispatch, onEnd]);

  const answerQuestion = useCallback(
    (value: string) => {
      const answer = state.currentQuestion?.correctAnswer === value;
      dispatch({ type: TriviaActionType.PushAnswer, payload: { answer } });
      nextQuestion();
    },
    [state, dispatch, nextQuestion]
  );

  const endQuiz = useCallback(() => {
    dispatch({ type: TriviaActionType.Reset });
    onRetry();
  }, [dispatch, onRetry]);

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
