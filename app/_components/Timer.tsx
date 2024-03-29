import React, { useEffect, useState } from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import Test from "../_hooks/useTest";
import TimeLimit from "../_hooks/useTimer";
import useLangModal from "../_hooks/useLangModal";
import ResultPage from "../_hooks/useShowResult";
import TypingSpeed from "../_hooks/useWpm";
import useMode from "../_hooks/useMode";
import useWordLimit from "../_hooks/useWordsLimit";

const Timer = () => {
  const TestCtrl = Test();
  const LangModal = useLangModal();
  const { mode } = useMode();
  const { seconds } = TimeLimit();
  const [time, setTime] = useState(seconds);
  const resultpage = ResultPage();
  const Wpm = TypingSpeed();
  const WordLimit = useWordLimit();

  useEffect(() => {
    if (mode === "time") setTime(seconds);
  }, [seconds]);

  useEffect(() => {
    let intervalId: string | number | NodeJS.Timeout | undefined;

    if (TestCtrl.hasStarted && time > 0 && mode === "time") {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (time === 0) {
      TestCtrl.onClose();
      resultpage.onOpen();
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [TestCtrl.hasStarted, time, TestCtrl.onClose, resultpage.onOpen]);

  if (!TestCtrl.hasStarted) {
    return (
      <div
        onClick={LangModal.onOpen}
        className="self-center mt-40 mb-2 items-center h-4 flex group hover:cursor-pointer"
      >
        <FaGlobeAmericas className="text-text-color group-hover:text-this-white" />
        <p className="pl-2 text-text-color group-hover:text-this-white text-m">
          {LangModal.lang}
        </p>
      </div>
    );
  }

  return (
    <div className="mt-40 mb-2 items-center gap-6 flex group h-4 text-yellow-400 text-2xl font-light">
      {mode === "time" ? (
        <div>{time}</div>
      ) : (
        <div>
          {Wpm.NoOfWords}/{WordLimit.words}
        </div>
      )}
      <div className="">{Wpm.accuracy.toFixed(0)}%</div>
    </div>
  );
};

export default Timer;
