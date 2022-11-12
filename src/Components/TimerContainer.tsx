import React, { useState } from "react";
import { TimerDisplay } from "./TimerDisplay";
import { TimerActions } from "./TimerActions";

const TimerContainer: React.FC = () => {
  const [seconds, setSeconds] = useState(0);
  return (
    <div className="h-100 w-100 d-flex flex-column align-center justify-center counter-container">
      <TimerDisplay seconds={seconds} />
      <TimerActions seconds={seconds} setSeconds={setSeconds} />
    </div>
  );
};

export default TimerContainer;
