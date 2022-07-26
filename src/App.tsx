import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import './App.css';
import TriviaStartPage from './trivia/start/TriviaStartPage';
import TriviaQuizPage from './trivia/quiz/TriviaQuizPage';
import TriviaResultPage from './trivia/result/TriviaResultPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/start" />} />
        <Route path="/start" element={<TriviaStartPage />} />
        <Route path="/quiz" element={<TriviaQuizPage />} />
        <Route path="/result" element={<TriviaResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
