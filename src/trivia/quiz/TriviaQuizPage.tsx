import { Link } from 'react-router-dom';

const TriviaQuizPage = () => {
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Quiz</h2>
      <Link to='/result'>Done</Link>
    </main>
  );
};

export default TriviaQuizPage;