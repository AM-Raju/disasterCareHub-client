import  { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

type TFaq = { question: string; answer: string };

type TQnaProps = {
  key: number;
  faq: TFaq;
};

const QnA = ({ faq }: TQnaProps) => {
  const { question, answer } = faq;

  const [showAns, setShowAns] = useState(false);
  const controls = useAnimationControls();

  useEffect(() => {
    if (!showAns) {
      controls.start({
        y: -200,
        maxHeight: 0,
        transition: { duration: 1, y: { delay: 1 } },
      });
    } else {
      controls.start({ y: 0, maxHeight: 500, transition: { duration: 1 } });
    }
  }, [showAns]);

  const toggleAns = () => {
    setShowAns(!showAns);
  };

  return (
    <div className="border relative">
      <div
        className={`w-full h-full bg-amber-500 ${
          showAns ? "bg-opacity-100" : "bg-opacity-0"
        }  absolute rounded rounded-tr-full top-0 left-0 transition-all duration-1000 delay-500`}
      ></div>
      <div className="z-99 relative p-5">
        <div className="flex justify-between items-center">
          <h3 className="font-poppins text-xl font-semibold">{question}</h3>
          {!showAns ? (
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 shrink-0 text-green-500"
              onClick={toggleAns}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          ) : (
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 shrink-0 text-red-500"
              onClick={toggleAns}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          )}
        </div>
        <div
          className={`${!showAns ? "mt-0" : "mt-5"} overflow-hidden transition-all duration-700 `}
        >
          <motion.p animate={controls}>{answer}</motion.p>
        </div>
      </div>
    </div>
  );
};

export default QnA;
