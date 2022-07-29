import { Button, Typography } from '@mui/material';
import { PageBody } from '../components/PageBody';
import { useTriviaContext } from '../state/TriviaContext';
import { VerticalStack } from '../components/VerticalStack';

export const TriviaWelcomePage = () => {
  const { beginQuiz, loading } = useTriviaContext();
  return (
    <PageBody>
      <VerticalStack>
        <Typography variant="h3">Welcome to the Trivia Challenge!</Typography>
        <Typography variant="body1">You will be presented with 10 True or False questions</Typography>
        <Typography variant="body1">Can you score 100%?</Typography>
        <Button variant="contained" onClick={beginQuiz} disabled={loading}>
          {!loading ? 'Begin' : 'Loading...'}
        </Button>
      </VerticalStack>
    </PageBody>
  );
};

export default TriviaWelcomePage;
