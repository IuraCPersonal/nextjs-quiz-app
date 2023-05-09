import React from "react";
import QuizItem from "./quiz-item";

interface Quiz {
  id: number;
  title: string;
  questions_count: number;
}

interface Props {
  quizzes: Quiz[];
}

const QuizList: React.FC<Props> = ({ quizzes }) => {
  return (
    <ul className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
      {quizzes.map((quiz) => (
        <QuizItem
          key={quiz.id}
          id={quiz.id}
          title={quiz.title}
          questions_count={quiz.questions_count}
        />
      ))}
    </ul>
  );
};

export default QuizList;
