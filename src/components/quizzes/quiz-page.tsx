import React, { useState, useContext } from "react";
import { TQuiz } from "@/pages/quiz/[id]";
import Answer from "./quiz-answer";
import axios from "axios";
import AuthContext from "../utils/auth-context";

const QuizPage: React.FC<TQuiz> = ({ id, questions, title }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [currentSelectedAnswer, setSelectedAnswer] = useState("");

  const currentQuestionData = questions?.at(currentQuestion);

  const authCtx = useContext(AuthContext);

  const config = {
    headers: {
      "X-Access-Token":
        "1c4d4fdc1d9dc89208cb1d19fe21428bfde3e7d4c8cc5fa8bc43e029808d4366",
    },
  };

  const nextQuestionHandler = () => {
    if (currentQuestion === questions?.length) {
      return;
    }


    axios.post(
      `https://late-glitter-4431.fly.dev/api/v54/quizzes/${id}/submit`,
      {
        "data": {
          "question_id": currentQuestionData?.id,
          "answer": currentSelectedAnswer,
          "user_id": authCtx.id
        }
      },
      config,
    )
      .then(response => {
        if (response.data.correct) {
          setUserScore(userScore + 1);
        }
      })
      .catch(error => console.log(error))

    setCurrentQuestion(currentQuestion + 1);
  }

  const prevQuestionHandler = () => {
    if (currentQuestion === 0) {
      return;
    }

    setCurrentQuestion(currentQuestion - 1);
  }

  const checkAnswerHandler = (answer: string) => {
    setSelectedAnswer(answer);
  }

  return (
    <>
      <h1 className="container mx-auto text-center mt-5 text-8xl font-bold">{title}</h1>
      <div className="flex justify-center flex-col align-middle bg-gray-900 rounded-3xl border min-w-3xl max-w-6xl mx-auto gap-20 p-20 m-20">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-4xl mb-8 text-white">{currentQuestionData?.question}</h3>
          {currentQuestion === questions?.length && <h1 className="text-4xl text-white font-bold">Your Score: {userScore}/{questions?.length}</h1>}
          <div className="grid xl:grid-cols-2 sm:grid-cols-1 gap-3 w-full">
            {currentQuestionData?.answers.map(answer => (
              <Answer
                key={answer}
                answer={answer}
                onClick={checkAnswerHandler}
              />
            ))}
          </div>
        </div>

        <div className="mx-auto grid xl:grid-cols-2 gap-4">
          <button
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            onClick={prevQuestionHandler}
          >
            Previous
          </button>
          <button
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            onClick={nextQuestionHandler}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default QuizPage;
