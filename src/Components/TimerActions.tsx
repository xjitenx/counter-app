import React, { useState } from "react";

type TimerActionsProps = {
  setSeconds: Function;
};

let counterInterval: NodeJS.Timer;

export const TimerActions: React.FC<TimerActionsProps> = ({ setSeconds }) => {
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

  const stopTimer = () => {
    clearTimeout(counterInterval);
    changeCounterRunning();
  };

  const changeCounterRunning = () => {
    setCounterRunning((prevValue) => !prevValue);
  };

  return (
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
  );
};
