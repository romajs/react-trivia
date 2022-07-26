export const TriviaQuestionTransformer = (result: any, index: number): Question => ({
  category: result.category,
  answers: [result.correct_answer, ...result.incorrect_answers],
  correctAnswer: result.correct_answer,
  index: index + 1,
  name: result.question,
});
