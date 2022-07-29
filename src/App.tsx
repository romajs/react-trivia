import { AppRoutes } from './AppRoutes';
import { history } from './history';
import { Routes, Route, Navigate } from 'react-router-dom';
import { TriviaAPI } from './trivia/TriviaAPI';
import { TriviaProvider } from './trivia/state/TriviaProvider';
import { TriviaQuizPage } from './trivia/page/TriviaQuizPage';
import { TriviaResultPage } from './trivia/page/TriviaResultPage';
import { TriviaWelcomePage } from './trivia/page/TriviaStartPage';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import TriviaErrorPage from './trivia/page/TriviaErrorPage';

const App = () => {
  const checkStartPage = () => history.location.pathname == AppRoutes.TriviaWelcome;
  const goToError = () => history.push(AppRoutes.TriviaError);
  const goToQuiz = () => history.push(AppRoutes.TriviaQuiz);
  const goToResult = () => history.push(AppRoutes.TriviaResult);
  const goToWelcome = () => history.push(AppRoutes.TriviaWelcome);
  const triviaApi = new TriviaAPI();
  return (
    <TriviaProvider
      checkStartPage={checkStartPage}
      onBegin={goToQuiz}
      onEnd={goToResult}
      onError={goToError}
      onRetry={goToWelcome}
      triviaApi={triviaApi}
    >
      <HistoryRouter history={history}>
        <Routes>
          <Route path={AppRoutes.Root} element={<Navigate to={AppRoutes.TriviaWelcome} />} />
          <Route path={AppRoutes.TriviaError} element={<TriviaErrorPage />} />
          <Route path={AppRoutes.TriviaQuiz} element={<TriviaQuizPage />} />
          <Route path={AppRoutes.TriviaResult} element={<TriviaResultPage />} />
          <Route path={AppRoutes.TriviaWelcome} element={<TriviaWelcomePage />} />
        </Routes>
      </HistoryRouter>
    </TriviaProvider>
  );
};

export default App;
