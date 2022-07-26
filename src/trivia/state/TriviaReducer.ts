export enum TriviaActionType {
  Reset,
  LoadQuestions,
  ShiftNextQuestion,
  PushAnswer,
}

type TriviaAction = {
  type: TriviaActionType;
  payload?: any;
};

type TriviaState = {
  currentQuestion?: Question;
  questions: Question[];
  answers: boolean[];
};

export const initialState: TriviaState = {
  currentQuestion: undefined,
  questions: [],
  answers: [],
};

export const triviaReducer = (state: TriviaState, action: TriviaAction): TriviaState => {
  // console.debug('[triviaReducer]:', { state, action });
  switch (action.type) {
  case TriviaActionType.Reset:
    return initialState;
  case TriviaActionType.LoadQuestions:
    return {
      ...state,
      currentQuestion: action.payload.questions?.[0],
      questions: action.payload.questions,
    };
  case TriviaActionType.ShiftNextQuestion:
    return {
      ...state,
      currentQuestion: action.payload.question,
    };
  case TriviaActionType.PushAnswer:
    return {
      ...state,
      answers: state.answers.concat(action.payload.answer),
    };
  default:
    return state;
  }
};
