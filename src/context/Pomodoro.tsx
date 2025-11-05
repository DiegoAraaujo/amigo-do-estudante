import { createContext, useState, type ReactNode } from "react";

interface PomodoroContextType {
  shortBreak: number;
  setShortBreak: React.Dispatch<React.SetStateAction<number>>;
  longBreak: number;
  setLongBreak: React.Dispatch<React.SetStateAction<number>>;
  focusTime: number;
  setFocusTime: React.Dispatch<React.SetStateAction<number>>;
  pomodorosPerDay: number;
  setPomodorosPerDay: React.Dispatch<React.SetStateAction<number>>;
  cyclesUntilLongBreak: number;
  setCyclesUntilLongBreak: React.Dispatch<React.SetStateAction<number>>;
}

export const PomodoroContext = createContext<PomodoroContextType | undefined>(
  undefined,
);

export const PomodoroProvider = ({ children }: { children: ReactNode }) => {
  const [shortBreak, setShortBreak] = useState<number>(5);
  const [longBreak, setLongBreak] = useState<number>(15);
  const [focusTime, setFocusTime] = useState<number>(25);
  const [pomodorosPerDay, setPomodorosPerDay] = useState<number>(8);
  const [cyclesUntilLongBreak, setCyclesUntilLongBreak] = useState<number>(4);

  return (
    <PomodoroContext.Provider
      value={{
        shortBreak,
        setShortBreak,
        longBreak,
        setLongBreak,
        focusTime,
        setFocusTime,
        pomodorosPerDay,
        setPomodorosPerDay,
        cyclesUntilLongBreak,
        setCyclesUntilLongBreak,
      }}
    >
      {children}
    </PomodoroContext.Provider>
  );
};
