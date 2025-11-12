import { Link } from "react-router-dom";
import { useDarkTheme } from "../../../hooks/UseDarkTheme";

interface PomodoroSubmenuProps {
  selectedSubPage: string;
}

const PomodoroSubmenu = ({ selectedSubPage }: PomodoroSubmenuProps) => {
  const { darkTheme } = useDarkTheme();

  return (
    <div>
      <div
        className={`mb-6 grid w-full grid-cols-3 border ${
          darkTheme
            ? "bg-surface-dark border-outline-dark"
            : "bg-surface-light border-outline-light"
        } rounded-xl px-6 py-2`}
      >
        <Link
          to="/pomodoro/timer"
          className={`flex cursor-pointer items-center justify-center rounded-xl px-6 py-2 text-sm font-medium hover:scale-105 transition-transform duration-300 ${
            selectedSubPage === "timer"
              ? "bg-menuHighlightColor text-primary-dark"
              : darkTheme
              ? "text-primary-dark"
              : "text-primary-light"
          }
          } text-center`}
        >
          Timer
        </Link>
        <Link
          to="/pomodoro/statistics"
          className={`flex cursor-pointer items-center justify-center rounded-xl px-6  py-2 text-sm font-medium hover:scale-105 transition-transform duration-300 ${
            selectedSubPage === "statistics"
              ? "bg-menuHighlightColor text-primary-dark"
              : darkTheme
              ? "text-primary-dark"
              : "text-primary-light"
          } text-center`}
        >
          Estatísticas
        </Link>
        <Link
          to="/pomodoro/settings"
          className={`flex cursor-pointer items-center justify-center rounded-xl hover:scale-105 transition-transform duration-300  px-6 py-2 text-sm font-medium ${
            selectedSubPage === "settings"
              ? "bg-menuHighlightColor text-primary-dark"
              : darkTheme
              ? "text-primary-dark"
              : "text-primary-light"
          } text-center`}
        >
          Ajustes
        </Link>
      </div>
    </div>
  );
};

export default PomodoroSubmenu;
