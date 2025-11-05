import { useDarkTheme } from "../../../hooks/UseDarkTheme";
import ProgressBar from "../../../components/ProgressBar";
import { formatTime } from "../../../utils/formatTime";

interface PomodoroTimerProps {
  currentTime: number;
}

const PomodoroTimer = ({ currentTime }: PomodoroTimerProps) => {
  const { darkTheme } = useDarkTheme();

  return (
    <div className="flex w-full max-w-96 flex-col items-center gap-6">
      <p
        className={`${
          darkTheme ? "text-primary-dark" : "text-primary-light"
        } text-6xl font-bold tracking-wider sm:text-7xl`}
      >
        {formatTime(currentTime)}
      </p>

      <ProgressBar percentage={60} />
    </div>
  );
};

export default PomodoroTimer;
