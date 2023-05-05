import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

import Layout from "@/components/layout/layout";

interface Question {
  id: number;
  question: string;
  answers: string[];
}

interface TQuiz {
  id: number;
  questions: Question[];
  title: string;
}

const QuizPage: React.FC = () => {
  const router = useRouter();
  const quizId = router.query.id;

  const [isLoading, setIsLoading] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
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
        console.log(data);

        setIsLoading(false);
        setLoadedQuiz(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  } else {
    return (
      <Layout>
        <section className="flex min-h-screen flex-col items-center justify-between mt-2">
          <div className="p-12 font-bold text-4xl flex flex-col items-center justify-center">
            <h1>{loadedQuiz.title}</h1>
          </div>
        </section>
      </Layout>
    );
  }
};

export default QuizPage;
