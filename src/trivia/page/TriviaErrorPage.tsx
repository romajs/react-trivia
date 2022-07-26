import { useTriviaContext } from '../state/TriviaContext';

export const TriviaErrorPage = () => {
  const { endQuiz } = useTriviaContext();
  return (
    <main style={{ padding: '1rem 0' }}>
      <h1>Eroor</h1>
      <span>Ooops... something went wrong! :(</span>
      <button onClick={endQuiz}>Retry?</button>
    </main>
  );
};

export default TriviaErrorPage;
