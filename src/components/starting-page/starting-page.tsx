import React, { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";
import { Inter } from "next/font/google";
import QuizList from "../quizzes/quiz-list";
import { ScrollContext } from "../utils/scroll-observer";

const inter = Inter({ subsets: ["latin"] });

const StartingPageContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedQuizzes, setLoadedQuizzes] = useState([]);

  const config = {
    headers: {
      "X-Access-Token":
        "5fe396bd750316df16783cfd0b857867f2b067ad8a37a143672e37f6a77cb81d",
    },
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://late-glitter-4431.fly.dev/api/v54/quizzes", config)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedQuizzes(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elConainer } = refContainer;

  if (elConainer) {
    progress = Math.min(1, scrollY / elConainer.clientHeight);
  }

  return (
    <>
      <div
        className={`flex min-h-86 h-screen flex-col items-center justify-between sticky top-0 -z-10 ${inter.className}`}
        ref={refContainer}
        style={{
          transform: `translateY(-${progress * 20}vh)`,
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src={"/assets/masthead-bg.mp4"} />
        </video>
        <div className="p-12 font-bold text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-4xl flex flex-col align-middle items-center justify-center my-auto">
          <h1 className="mb-6 text-9xl">Welcome, </h1>
          <h1 className="mb-6 text-8xl">Quizzes done right.</h1>
        </div>
      </div>
      <div className="bg-white flex min-h-screen flex-col items-center justify-center gap-20 mb-20">
        <div className="mt-20">
          <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
            <strong>Test your Knowledge.</strong> With the most intelectual
            quizzes.
          </p>
        </div>
        <QuizList quizzes={loadedQuizzes} />
      </div>
    </>
  );
};

export default StartingPageContent;
