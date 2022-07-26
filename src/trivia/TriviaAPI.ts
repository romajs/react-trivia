const DEFAULT_URL = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';
export class TriviaAPI {
  triviaUrl: string;

  constructor(triviaUrl?) {
    this.triviaUrl = triviaUrl || DEFAULT_URL;
  }

  listQuestions() {
    return fetch(this.triviaUrl).then((response) => response.json());
  }
}
