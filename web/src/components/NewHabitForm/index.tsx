import { Check } from "phosphor-react";
import React, { FormEvent, useState } from "react";
import { Form, CheckboxRoot } from "./style";
import * as Checkbox from "@radix-ui/react-checkbox";
import { api } from "../../lib/axios";

const NewHabitForm = () => {
  const [title, setTitle] = useState("");
  const [weekDays, setWeekDays] = useState<number[]>([]);

  const dates = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  const handleToogleWeekDay = (index: number) => {
    if (weekDays.includes(index)) {
      setWeekDays((preValues) => preValues.filter((day) => day !== index));
    } else {
      setWeekDays((preValues) => [...preValues, index]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!title || weekDays.length === 0) {
      return;
    }
    await api.post("habits", {
      title,
      weekDays,
    });
    setTitle("");
    setWeekDays([]);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="title">Qual seu comprometimento?</label>
      <input
        type="text"
        id="title"
        placeholder="ex.: Estudar, Beber água, etc"
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="">Qual a sua recorrência?</label>

      <div className="checkbox-area">
        {dates.map((date, index) => (
          <CheckboxRoot
            key={date}
            onCheckedChange={() => handleToogleWeekDay(index)}
            checked={weekDays.includes(index)}
          >
            <div className="external-checkbox">
              <Checkbox.Indicator>
                <Check size={20} color="#fff" />
              </Checkbox.Indicator>
            </div>
            <span>{date}</span>
          </CheckboxRoot>
        ))}
      </div>

      <button type="submit" className="confirm-button">
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </Form>
  );
};

export default NewHabitForm;
