import { useTriviaContext } from '../state/TriviaContext';

export const TriviaResultPage = () => {
  const { answers, questions, endQuiz } = useTriviaContext();
  return (
    <main style={{ padding: '1rem 0' }}>
      <h1>You scored</h1>
      <ul>
        {questions.map(question => (
          <li>
            <span>{String(answers[question.index])}&nbsp;-&nbsp;{question.name}</span>
          </li>
        ))}
      </ul>
      <button onClick={endQuiz}>Play again?</button>
    </main>
  );
};

export default TriviaResultPage;
