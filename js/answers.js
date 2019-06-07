function saveAnswer(question, answerText) {
  const { correctOption } = question;

  const isCorrect = correctOption === null ? null : correctOption === answerText;
  return { question, answerText, isCorrect }
}