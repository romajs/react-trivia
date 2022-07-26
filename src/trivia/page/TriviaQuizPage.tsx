import { useTriviaContext } from '../state/TriviaContext';

export const TriviaQuizPage = () => {
  const { currentQuestion, answerQuestion, totalQuestions } = useTriviaContext();
  if (!currentQuestion) return null;
  return (
    <main style={{ padding: '1rem 0' }}>
      <h1>Quiz</h1>
      <span>{currentQuestion.category}</span>
      <div>
        {currentQuestion?.answers.map((answer) => (
          <button key={answer} onClick={() => answerQuestion(answer)}>
            {answer}
          </button>
        ))}
      </div>
      <p>
        <span>
          {currentQuestion.index} of {totalQuestions}
        </span>
      </p>
    </main>
  );
};

export default TriviaQuizPage;
