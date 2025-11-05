import { useDarkTheme } from "../hooks/UseDarkTheme";

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar = ({ percentage }: ProgressBarProps) => {
  const { darkTheme } = useDarkTheme();

  return (
    <div
      className={`${darkTheme ? "bg-linear-65 from-[#993cef] to-[#9234EA]" : "bg-[#36E275]"} h-2 w-full rounded-2xl`}
    >
      <div
        className={`h-full rounded-2xl ${darkTheme ? "bg-[#3C83F6]" : "bg-[#875AF2]"}`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};
export default ProgressBar;
