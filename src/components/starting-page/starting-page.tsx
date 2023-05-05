import React, { useEffect, useState } from "react";
import axios from "axios";
import { Inter } from 'next/font/google'
import QuizList from "../quizzes/quiz-list";

const inter = Inter({ subsets: ['latin'] })

const StartingPageContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedQuizzes, setLoadedQuizzes] = useState([]);

  const config = {
    headers: {
      "X-Access-Token": "5fe396bd750316df16783cfd0b857867f2b067ad8a37a143672e37f6a77cb81d"
    }
  }

  useEffect(() => {
    setIsLoading(true);
    axios.get("https://late-glitter-4431.fly.dev/api/v54/quizzes", config)
      .then((response) => {
        return response.data
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedQuizzes(data);
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="p-12 font-bold text-4xl flex flex-col items-center justify-center">
        <h1>Welcome To Quiz Land</h1>
        <QuizList quizzes={loadedQuizzes} />
      </div>
    </main>
  );
};

export default StartingPageContent;
