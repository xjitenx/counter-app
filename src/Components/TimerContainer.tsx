import React, { useState } from "react";
import { TimerDisplay } from "./TimerDisplay";
import { TimerActions } from "./TimerActions";

const TimerContainer: React.FC = () => {
  const [seconds, setSeconds] = useState(0);
  return (
    <div className="counter-container d-flex flex-column align-center p-2">
      <TimerDisplay seconds={seconds} />
      <TimerActions seconds={seconds} setSeconds={setSeconds} />
    </div>
  );
};

export default TimerContainer;
