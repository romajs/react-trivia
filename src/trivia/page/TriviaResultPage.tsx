import { Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { PageBody } from '../components/PageBody';
import { useTriviaContext } from '../state/TriviaContext';
import { VerticalStack } from '../components/VerticalStack';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import he from 'he';

const AnswerIcon = ({ value }) => (value ? <CheckIcon color="success" /> : <CloseIcon color="error" />);

const AnwerList = ({ answers, questions }) => (
  <List style={{ overflowY: 'scroll' }}>
    {questions?.map((question) => (
      <ListItem key={question.index} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <AnswerIcon value={answers[question.index]} />
          </ListItemIcon>
          <ListItemText primary={he.decode(question.name)} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
);

export const TriviaResultPage = () => {
  const { answers, questions, endQuiz } = useTriviaContext();
  return (
    <PageBody fireworks>
      <VerticalStack>
        <Typography variant="h3">You scored</Typography>
        <AnwerList answers={answers} questions={questions} />
        <Button variant="contained" onClick={endQuiz}>
          Play again?
        </Button>
      </VerticalStack>
    </PageBody>
  );
};

export default TriviaResultPage;
