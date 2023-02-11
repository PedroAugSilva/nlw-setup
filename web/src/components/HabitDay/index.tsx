import { Trigger, Content } from "./style";
import * as Popover from "@radix-ui/react-popover";
  import ProgressBar from "../ProgressBar";
import clsx from "clsx";
import dayjs from "dayjs";
import HabitsList from "../HabitsList";
import { useState } from "react";

interface HabitDayProps {
  date: Date;
  defaultCompleted?: number;
  amount?: number;
}

export const HabitDay = ({ defaultCompleted = 0, amount = 0, date}: HabitDayProps) => {

  const [completed, setCompleted] = useState(defaultCompleted)

  const completedPercentage = amount > 0 ? Math.round((completed / amount) * 100) : 0;

  const dayAndMonth = dayjs(date).format('DD/MM')
  const weekDay = dayjs(date).format('dddd')

  const background = clsx({
    "#18181b": completedPercentage === 0,
    "#4C1D95": completedPercentage > 0 && completedPercentage < 20,
    "#5B21B6": completedPercentage >= 20 && completedPercentage < 40,
    "#6D28D9": completedPercentage >= 40 && completedPercentage < 60,
    "#7C3AED": completedPercentage >= 60 && completedPercentage < 80,
    "#8B5CF6": completedPercentage >= 80,
  });
  const border = clsx({
    "#27272a": completedPercentage === 0,
    "#6D28D9": completedPercentage > 0 && completedPercentage < 20,
    "#7C3AED": completedPercentage >= 20 && completedPercentage < 40,
    "#8B5CF6":
      (completedPercentage >= 40 && completedPercentage < 60) ||
      (completedPercentage >= 60 && completedPercentage < 80),
    "#A78BFA": completedPercentage >= 80,
  });

  const handleCompletedHabits = (completed: number) => {

    setCompleted(completed)
  }

  return (
    <Popover.Root>
      <Trigger style={{ borderColor: border, background: background }} />
      <Popover.Portal>
        <Content side="right">
          <span className="weekDay">{weekDay}</span>
          <span className="day">{dayAndMonth}</span>

          <ProgressBar progressValue={completedPercentage} />
          <HabitsList date={date} onChangeCompleted={handleCompletedHabits}/>

          <Popover.Arrow fill="#18181b" height={8} width={16} />
        </Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
