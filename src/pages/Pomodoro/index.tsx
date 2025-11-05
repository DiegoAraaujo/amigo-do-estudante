import { Link, useParams } from "react-router-dom";
import { useDarkTheme } from "../../hooks/UseDarkTheme";
import PomodoroTimer from "./components/PomodoroTimer";
import PomodoroStatistics from "./components/PomodoroStatistics";
import PomodoroSettings from "./components/PomodoroSettings";

const index = () => {
  const { darkTheme } = useDarkTheme();
  const { subpage } = useParams();
  const selectedSubPage = subpage || "timer";

  return (
    <section className="p-6">
      <div className="m-auto w-full max-w-7xl">
        <div
          className={`mb-6 grid w-full grid-cols-3 ${darkTheme ? "bg-surface-dark" : "bg-surface-light shadow-xs"} rounded-xl px-6 py-2`}
        >
          <Link
            to="/pomodoro/timer"
            className={`flex cursor-pointer items-center justify-center rounded-md px-6 ${darkTheme ? "text-muted-dark" : "text-muted-light"} py-2 text-sm font-medium ${selectedSubPage === "timer" ? (darkTheme ? "bg-card-dark" : "bg-card-light") : ""} text-center`}
          >
            Timer
          </Link>
          <Link
            to="/pomodoro/statistics"
            className={`flex cursor-pointer items-center justify-center rounded-md px-6 ${darkTheme ? "text-muted-dark" : "text-muted-light"} py-2 text-sm font-medium ${selectedSubPage === "statistics" ? (darkTheme ? "bg-card-dark" : "bg-card-light") : ""} text-center`}
          >
            Estatísticas
          </Link>
          <Link
            to="/pomodoro/settings"
            className={`flex cursor-pointer items-center justify-center rounded-md ${darkTheme ? "text-muted-dark" : "text-muted-light"} px-6 py-2 text-sm font-medium ${selectedSubPage === "settings" ? (darkTheme ? "bg-card-dark" : "bg-card-light") : ""} text-center`}
          >
            Configurações
          </Link>
        </div>

        {selectedSubPage === "timer" && <PomodoroTimer />}
        {selectedSubPage === "statistics" && <PomodoroStatistics />}
        {selectedSubPage === "settings" && <PomodoroSettings />}
      </div>
    </section>
  );
};

export default index;
