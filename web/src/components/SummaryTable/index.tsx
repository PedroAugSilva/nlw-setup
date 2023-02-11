import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { generateDatesFromYearBeginning } from "../../utils/generate-dates-from-year-beginning";
import { HabitDay } from "../HabitDay";
import { Container } from "./style";

type Summary = Array<{
  id: string;
  date: string;
  amount: number;
  completed: number;
}>;

const SummaryTable = () => {
  const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
  const summaryDates = generateDatesFromYearBeginning();

  const minimunDatesSize = 18 * 7;
  const amountOfDaysToFill = minimunDatesSize - summaryDates.length;

  const [summary, setSummary] = useState<Summary>([]);

  useEffect(() => {
    api.get("/summary").then((response) => {
      setSummary(response.data);
    });
  }, []);

  return (
    <Container>
      <div className="week">
        {weekDays.map((day, id) => (
          <div key={day + id} className="week-day">
            {day}
          </div>
        ))}
      </div>
      <div className="habit-table">
        {summary.length > 0 && summaryDates.map((date) => {
          const daysInSummary = summary.find(day => {
            return dayjs(date).isSame(day.date, 'day')
          }) 
          return (
            <HabitDay
              date={date}
              amount={daysInSummary?.amount}
              defaultCompleted={daysInSummary?.completed}
              key={date.toString()}
            />
          );
        })}
        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, index) => (
            <div className="habit-placeholder" key={index}></div>
          ))}
      </div>
    </Container>
  );
};

export default SummaryTable;
