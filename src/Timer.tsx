import React, { useState } from "react";

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState(0);
  const [counterRunning, setCounterRunning] = useState(false);

  const changeCounterRunning = () => {
    setCounterRunning((prevValue) => !prevValue);
  };

  const startTimer = () => {
    changeCounterRunning();
  };

  const stopTimer = () => {
    changeCounterRunning();
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
