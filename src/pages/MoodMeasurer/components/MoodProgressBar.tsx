import ProgressBar from "../../../components/ProgressBar";
import { useDarkTheme } from "../../../hooks/UseDarkTheme";

interface MoodProgressBarProps {
  mood: string;
  days: number;
  percentage: number;
}

const MoodProgressBar = ({ mood, days, percentage }: MoodProgressBarProps) => {
  const { darkTheme } = useDarkTheme();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <p
          className={`text-sm ${darkTheme ? "text-primary-dark" : "text-primary-light"}`}
        >
          {mood}
        </p>
        <p className="text-sm text-gray-500">
          {days} dia(s) ({percentage}%)
        </p>
      </div>
      <ProgressBar percentage={percentage} />
    </div>
  );
};

export default MoodProgressBar;
