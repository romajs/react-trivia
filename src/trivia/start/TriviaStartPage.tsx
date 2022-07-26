import { Link } from 'react-router-dom';

const TriviaStartPage = () => {
  return (
    <main style={{ padding: '1rem 0' }}>
      <h1>Welcome to the Trivia Challenge!</h1>
      <div>
        <span>You will be presented with 10 True or False questions</span>
        <span>Can you score 100%?</span>
      </div>
      <Link to='/quiz'>Begin</Link>
    </main>
  );
};

export default TriviaStartPage;