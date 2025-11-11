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
    <section>
      <div
        className={`mb-6 grid w-full grid-cols-3 border ${
          darkTheme
            ? "bg-surface-dark border-outline-dark"
            : "bg-surface-light border-outline-light"
        } rounded-xl px-6 py-2`}
      >
        <Link
          to="/pomodoro/timer"
          className={`flex cursor-pointer items-center justify-center rounded-md px-6 ${
            darkTheme ? "text-muted-dark" : "text-muted-light"
          } py-2 text-sm font-medium ${
            selectedSubPage === "timer"
              ? darkTheme
                ? "bg-card-dark"
                : "bg-card-light"
              : ""
          } text-center`}
        >
          Timer
        </Link>
        <Link
          to="/pomodoro/statistics"
          className={`flex cursor-pointer items-center justify-center rounded-md px-6 ${
            darkTheme ? "text-muted-dark" : "text-muted-light"
          } py-2 text-sm font-medium ${
            selectedSubPage === "statistics"
              ? darkTheme
                ? "bg-card-dark"
                : "bg-card-light"
              : ""
          } text-center`}
        >
          Estatísticas
        </Link>
        <Link
          to="/pomodoro/settings"
          className={`flex cursor-pointer items-center justify-center rounded-md ${
            darkTheme ? "text-muted-dark" : "text-muted-light"
          } px-6 py-2 text-sm font-medium ${
            selectedSubPage === "settings"
              ? darkTheme
                ? "bg-card-dark"
                : "bg-card-light"
              : ""
          } text-center`}
        >
          Configurações
        </Link>
      </div>

      {selectedSubPage === "timer" && <PomodoroTimer />}
      {selectedSubPage === "statistics" && <PomodoroStatistics />}
      {selectedSubPage === "settings" && <PomodoroSettings />}
    </section>
  );
};

export default index;
