import { Link } from 'react-router-dom';

const TriviaResultPage = () => {
  return (
    <main style={{ padding: '1rem 0' }}>
      <h1>You scored</h1>
      <Link to='/start'>Play again?</Link>
    </main>
  );
};

export default TriviaResultPage;