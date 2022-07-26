import { Button, Typography } from '@mui/material';
import { HorizontalStack } from '../components/HorizontalStack';
import { PageBody } from '../components/PageBody';
import { useTriviaContext } from '../state/TriviaContext';
import { VerticalStack } from '../components/VerticalStack';
import he from 'he';
import { Card } from '../components/Card';

const AnswerButton = ({ children, onClick, ...props }) => (
  <Button {...props} variant="contained" fullWidth onClick={onClick}>
    {children}
  </Button>
);

export const TriviaQuizPage = () => {
  const { currentQuestion, answerQuestion, totalQuestions } = useTriviaContext();
  if (!currentQuestion) return null;
  return (
    <PageBody>
      <VerticalStack>
        <Typography variant="h3">{currentQuestion.category}</Typography>
        <Card>
          <Typography variant="h4">{he.decode(currentQuestion.name)}</Typography>
        </Card>
        <Typography variant="body1">
          {currentQuestion.index} of {totalQuestions}
        </Typography>
        <HorizontalStack>
          <AnswerButton onClick={() => answerQuestion(true)} color={'success'}>
            True
          </AnswerButton>
          <AnswerButton onClick={() => answerQuestion(false)} color={'error'}>
            False
          </AnswerButton>
        </HorizontalStack>
      </VerticalStack>
    </PageBody>
  );
};

export default TriviaQuizPage;
