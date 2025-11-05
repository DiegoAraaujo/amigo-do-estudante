import { useContext } from "react";
import { PomodoroContext } from "../context/Pomodoro";

export const usePomodoro = () => {
  const context = useContext(PomodoroContext);

  if (!context) {
    throw new Error("usePomodoro must be used inside a <PomodoroProvider>");
  }

  return context;
};
