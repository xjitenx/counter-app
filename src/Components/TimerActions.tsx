import React, { useState } from "react";

type TimerActionsProps = {
  seconds: number;
  setSeconds: Function;
};

let counterInterval: NodeJS.Timer;

export const TimerActions: React.FC<TimerActionsProps> = ({
  seconds,
  setSeconds,
}) => {
  const [counterRunning, setCounterRunning] = useState(false);

  const startSecondCounter = (timer: number) => {
    counterInterval = setInterval(() => {
      setSeconds((prevSecond: number) => prevSecond + 1);
    }, timer);
  };

  const startTimer = async () => {
    changeCounterRunning();
    startSecondCounter(1000);
  };

  const stopTimer = (counterRunningFlag: boolean) => {
    clearTimeout(counterInterval);
    if (counterRunningFlag) {
      changeCounterRunning();
    }
  };

  const resetTimer = () => {
    stopTimer(false);
    setSeconds(0);
  };

  const changeCounterRunning = () => {
    setCounterRunning((prevValue) => !prevValue);
  };

  return (
    <div className="d-flex flex-column align-center justify-center">
      <div className="d-flex">
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
          onClick={() => stopTimer(true)}
        >
          STOP
        </button>
      </div>
      <button
        className="button reset-button mt-2"
        disabled={seconds === 0}
        onClick={resetTimer}
      >
        RESET
      </button>
    </div>
  );
};
