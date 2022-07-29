import { useTriviaContext } from '../state/TriviaContext';
import { PageBody } from '../components/PageBody';
import { VerticalStack } from '../components/VerticalStack';
import { Typography, Button } from '@mui/material';

export const TriviaErrorPage = () => {
  const { endQuiz } = useTriviaContext();
  return (
    <PageBody>
      <VerticalStack>
        <Typography variant="h3">Error</Typography>
        <Typography variant="body1">Ooops... something went wrong! :(</Typography>
        <Button variant="contained" fullWidth onClick={endQuiz}>
          Retry?
        </Button>
      </VerticalStack>
    </PageBody>
  );
};

export default TriviaErrorPage;
