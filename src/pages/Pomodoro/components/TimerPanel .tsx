import { useEffect, useState } from "react";
import { useDarkTheme } from "../../../hooks/UseDarkTheme";
import StudySelector from "./StudySelector";
import TimerControls from "./TimerControls";
import TimerDisplay from "./TimerDisplay";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { usePomodoro } from "../../../hooks/UsePomodoro";

type TimerStatus = "not_started" | "running" | "paused";

const TimerPanel = () => {
  const { darkTheme } = useDarkTheme();
  const { focusTime, pomodorosPerDay } = usePomodoro();
  const [currentTime, setCurrentTime] = useState<number>(focusTime * 60);
  const [timeID, setTimeID] = useState<number | null>(null);
  const [timerStatus, setTimerStatus] = useState<TimerStatus>("not_started");

  useEffect(() => {
    setCurrentTime(focusTime * 60);
  }, [focusTime]);

  const play = (): void => {
    if (timeID) return;

    const id = setInterval(() => {
      setCurrentTime((prev) => {
        if (prev <= 1) {
          clearInterval(id);
          setTimerStatus("not_started");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    setTimerStatus("running");
    setTimeID(id);
  };

  const reset = (): void => {
    if (timerStatus === "running" || timerStatus === "paused") {
      if (timeID) clearInterval(timeID);
      setTimerStatus("not_started");
      setCurrentTime(focusTime * 60);
      setTimeID(null);
    }
  };

  const pause = (): void => {
    if (timerStatus === "running") {
      if (timeID) clearInterval(timeID);
      setTimerStatus("paused");
      setTimeID(null);
    }
  };

  return (
    <div
      className={`p-6 ${
        darkTheme ? "bg-surface-dark" : "bg-surface-light shadow-sm"
      } mb-3 flex flex-col items-center gap-6 rounded-xl`}
    >
      <p
        className={`${
          darkTheme ? "text-primary-dark" : "text-primary-light"
        } text-center text-xl font-bold sm:text-2xl`}
      >
        Tempo de Foco
      </p>
      <div
        className={`rounded-full border border-blue-700 px-6 py-1 text-xs font-medium text-blue-700`}
      >
        Sessão 1
      </div>

      <StudySelector />

      <TimerDisplay currentTime={currentTime} />

      <TimerControls
        play={play}
        reset={reset}
        pause={pause}
        timerStatus={timerStatus}
      />
      <div
        className={`${
          darkTheme ? "text-muted-dark" : "text-muted-light"
        } h-13 w-13 text-xl font-bold`}
      >
        <CircularProgressbar
          value={50}
          text={`3/${pomodorosPerDay}`}
          styles={buildStyles({ textSize: "25px" })}
        />
      </div>
    </div>
  );
};

export default TimerPanel;
