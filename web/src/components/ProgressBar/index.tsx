import React from "react";
import { Bar } from "./style";

interface ProgressBarProps {
    progressValue: number
}
const ProgressBar = ({ progressValue } :ProgressBarProps ) => {

  


  return (
  <Bar>
      <div
        style={{ width: progressValue + "%" }}
        role="progressbar"
        aria-label="progresso de hábitos completados nesse dia"
        araia-value={progressValue}
      />
    </Bar>
  );
};

export default ProgressBar;
