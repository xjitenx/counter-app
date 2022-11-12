import { rejects } from "assert";
import React, { useState } from "react";

let counterInterval: NodeJS.Timer;

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState(0);
  const [counterRunning, setCounterRunning] = useState(false);

  const startSecondCounter = (timer: number) => {
    counterInterval = setInterval(() => {
      setSeconds((prevSecond) => prevSecond + 1);
    }, timer);
  };

  const startTimer = async () => {
    changeCounterRunning();
    startSecondCounter(1000);
  };

  const stopTimer = () => {
    clearTimeout(counterInterval);
    changeCounterRunning();
  };

  const changeCounterRunning = () => {
    setCounterRunning((prevValue) => !prevValue);
  };

  return (
    <div className="h-100 w-100 d-flex flex-column align-center justify-center counter-container">
      <span className="timer-border-bottom timer-number mb-2">{seconds}</span>
      <div className="d-flex align-items">
        <button
          className="button start-button"
          disabled={counterRunning}
          onClick={startTimer}
        >
          START
        </button>
        <button
          className="button stop-button ml-2"
          disabled={!counterRunning}
          onClick={stopTimer}
        >
          STOP
        </button>
      </div>
    </div>
  );
};

export default Timer;
