import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

import Layout from "@/components/layout/layout";
import QuizPage from "@/components/quizzes/quiz-page";

interface Question {
  id: number;
  question: string;
  answers: string[];
}

export interface TQuiz {
  id: number;
  questions: Question[];
  title: string;
}

const QuizzesPage: React.FC = () => {
  const router = useRouter();
  const quizId = router.query.id;

  const [isLoading, setIsLoading] = useState(false);
  const [loadedQuiz, setLoadedQuiz] = useState<Partial<TQuiz>>({});

  const config = {
    headers: {
      "X-Access-Token":
        "5fe396bd750316df16783cfd0b857867f2b067ad8a37a143672e37f6a77cb81d",
    },
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://late-glitter-4431.fly.dev/api/v54/quizzes/${quizId}`,
        config
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedQuiz(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      <QuizPage {...loadedQuiz} />
    </Layout>
  );
};

export default QuizzesPage;
