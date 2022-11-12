import React from "react";

type TimerDisplayProps = {
  seconds: number;
};

export const TimerDisplay: React.FC<TimerDisplayProps> = ({ seconds }) => {
  return (
    <div>
      <span className="timer-border-bottom timer-number">{seconds}</span>
    </div>
  );
};