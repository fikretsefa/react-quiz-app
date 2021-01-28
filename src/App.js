import React, { useState, useEffect } from 'react';
import { Questionaire, QuizResults } from './components';

const API_URL = 'https://opentdb.com/api.php?amount=8&category=18&type=multiple';

function App() {
  const [questions, setQuestions] = useState([]);
  const [quizResults, setQuizResults] = useState([]);
  const [currentIndex, setcurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const questions = data.results.map((question) => ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random() - 0.5),
        }));
        // Math.random, 0 ile 1 arasında rastgele bir sayı döndürür. 
        // 0.5'den küçük sayı üretirse negatif eğer bunun üzerindeyse pozitif alırsınız.

        setQuestions(questions);
      });
  }, []);

  const handleAnswer = (answer) => {
    const newIndex = currentIndex + 1;

    if (answer === questions[currentIndex].correct_answer) {
      const difficultyPoint = questions[currentIndex].difficulty === 'easy' ? 1 : questions[currentIndex].difficulty === 'medium' ? 2 : 3
      setScore(score + difficultyPoint);
      setQuizResults([...quizResults, { quizResultQuestion: questions[currentIndex].question, quizResultType: true, quizCorrectAnswer: questions[currentIndex].correct_answer, difficulty: questions[currentIndex].difficulty }]);
    } else {
      setQuizResults([...quizResults, { quizResultQuestion: questions[currentIndex].question, quizResultType: false, quizCorrectAnswer: questions[currentIndex].correct_answer, difficulty: questions[currentIndex].difficulty }]);
    }

    if (newIndex >= questions.length) {
      setGameEnded(true);
    }

    setShowAnswers(true)
  }

  const handleNextQuestion = () => {
    setShowAnswers(false)
    setcurrentIndex(currentIndex + 1);
  }

  return (
    gameEnded ?
      (<QuizResults quizResults={quizResults} score={score} />)
      :
      (questions.length > 0 ?
        <div className="container">
          <Questionaire data={questions[currentIndex]} handleAnswer={handleAnswer} handleNextQuestion={handleNextQuestion} showAnswers={showAnswers} />
        </div>
        :
        <h2 className='text-2xl text-white font-bold'>Heey, Wait Questions Loading..</h2>

      ));
}

export default App;
