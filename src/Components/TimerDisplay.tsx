import React from "react";

type TimerDisplayProps = {
  seconds: number;
};

export const TimerDisplay: React.FC<TimerDisplayProps> = ({ seconds }) => {
  return (
    <span className="timer-border-bottom timer-number mb-2">{seconds}</span>
  );
};
