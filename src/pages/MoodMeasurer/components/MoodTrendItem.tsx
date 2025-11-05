import ProgressBar from "../../../components/ProgressBar";
import { useDarkTheme } from "../../../hooks/UseDarkTheme";

interface MoodTrendItemProps {
  factor: string;
  times: number;
  percentage: number;
}

const MoodTrendItem = ({ factor, times, percentage }: MoodTrendItemProps) => {
  const { darkTheme } = useDarkTheme();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <p
          className={`text-sm ${darkTheme ? "text-primary-dark" : "text-primary-light"}`}
        >
          {factor}
        </p>
        <p
          className={`${darkTheme ? "text-muted-dark" : "text-muted-light"} text-sm`}
        >
          {times} vezes
        </p>
      </div>
      <ProgressBar percentage={percentage} />
    </div>
  );
};

export default MoodTrendItem;
