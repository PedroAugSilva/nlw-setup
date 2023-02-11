import React, { useEffect, useState } from "react";
import { Check } from "phosphor-react";
import { CheckboxRoot, Container } from "./style";
import * as Checkbox from "@radix-ui/react-checkbox";
import { api } from "../../lib/axios";
import dayjs from "dayjs";

interface HabitsListProps {
  date: Date;
  onChangeCompleted: (completed: number) => void
}

interface HabitsInfo {
  possibleHabits: Array<{
    id: string;
    title: string;
    created_at: string;
  }>;
  completedHabits: string[];
}

const HabitsList = ({ date, onChangeCompleted }: HabitsListProps) => {
  const [habitsInfo, setHabitsInfo] = useState<HabitsInfo>();

  useEffect(() => {
    api
      .get("/day", {
        params: {
          date: date.toISOString(),
        },
      })
      .then((res) => setHabitsInfo(res.data));
  }, []);

  const isDateInPast = dayjs(date).endOf('day').isBefore(new Date());


  const handleToggleHabit = async (habitId:string) => {
    const isHabitAlreadyCompleted = habitsInfo!.completedHabits.includes(habitId)
    await api.patch(`/habits/${habitId}/toggle`)

    let completedHabits: string[] = []

    if(isHabitAlreadyCompleted){

      completedHabits = habitsInfo!.completedHabits.filter(id => id !== habitId)

    }else{

      completedHabits = [...habitsInfo!.completedHabits, habitId]

    }
    setHabitsInfo({
      possibleHabits: habitsInfo!.possibleHabits,
      completedHabits
    })

    onChangeCompleted(completedHabits.length)
  }
  return (
    <Container>
      {habitsInfo?.possibleHabits.map((habit) => {
        return (
          <CheckboxRoot
            key={habit.id}
            defaultChecked={habitsInfo.completedHabits.includes(habit.id)}
            disabled={isDateInPast}
            onCheckedChange={() => handleToggleHabit(habit.id)}
          >
            <div className="external-checkbox">
              <Checkbox.Indicator>
                <Check size={20} color="#fff" />
              </Checkbox.Indicator>
            </div>
            <span>{habit.title}</span>
          </CheckboxRoot>
        );
      })}
    </Container>
  );
};

export default HabitsList;
