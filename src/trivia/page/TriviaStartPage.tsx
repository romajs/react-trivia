import { useTriviaContext } from '../state/TriviaContext';

export const TriviaWelcomePage = () => {
  const { beginQuiz, loading } = useTriviaContext();
  return (
    <main style={{ padding: '1rem 0' }}>
      <h1>Welcome to the Trivia Challenge!</h1>
      <div>
        <span>You will be presented with 10 True or False questions</span>
        <span>Can you score 100%?</span>
      </div>
      <button onClick={beginQuiz} disabled={loading}>{!loading ? 'Begin' : 'Loading...'}</button>
    </main>
  );
};

export default TriviaWelcomePage;
