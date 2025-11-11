import ProgressBar from "../../../components/ProgressBar";
import { useDarkTheme } from "../../../hooks/UseDarkTheme";

const ProgressItem = () => {
  const { darkTheme } = useDarkTheme();
  return (
    <div
      className={`flex flex-col items-center gap-4 p-6 rounded-xl ${
        darkTheme ? "bg-card-dark" : "bg-card-light border border-outline-light"
      }`}
    >
      <p className="text-3xl font-bold text-[#875AF2]">62%</p>
      <p
        className={`text-sm ${
          darkTheme ? "text-muted-dark" : "text-muted-light"
        }`}
      >
        Meta de Pomodoros
      </p>
      <ProgressBar percentage={50} />
      <p
        className={`text-sm ${
          darkTheme ? "text-muted-dark" : "text-muted-light"
        }`}
      >
        5 de 8
      </p>
    </div>
  );
};

export default ProgressItem;
