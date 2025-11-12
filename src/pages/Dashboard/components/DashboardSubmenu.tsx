import { Link } from "react-router-dom";
import { useDarkTheme } from "../../../hooks/UseDarkTheme";

interface DashboardSubmenuProps {
  selectedPeriod: string;
  selectedSubpage: string;
}

const DashboardSubmenu = ({
  selectedPeriod,
  selectedSubpage,
}: DashboardSubmenuProps) => {
  const { darkTheme } = useDarkTheme();
  return (
    <div
      className={`${
        darkTheme
          ? "bg-surface-dark border-outline-dark"
          : "bg-surface-light border-outline-light"
      } grid grid-cols-4 gap-2 rounded-xl px-6 border py-2`}
    >
      <Link
        to={`/${selectedPeriod}/generalOverview`}
        className={` flex cursor-pointer items-center justify-center rounded-xl px-5 py-2 text-center text-xs font-medium hover:scale-105 transition-transform duration-300 ${
          selectedSubpage === "generalOverview"
            ? "bg-menuHighlightColor text-primary-dark"
            : darkTheme
            ? "text-primary-dark"
            : "text-primary-light"
        }  sm:text-sm`}
      >
        <span className="hidden md:inline-block">Visão</span> Geral
      </Link>
      <Link
        to={`/${selectedPeriod}/tasksPreview`}
        className={`flex cursor-pointer items-center justify-center rounded-xl px-5 py-2 text-center text-xs font-medium hover:scale-105 transition-transform duration-300 ${
          selectedSubpage === "tasksPreview"
            ? "bg-menuHighlightColor text-primary-dark"
            : darkTheme
            ? "text-primary-dark"
            : "text-primary-light"
        } sm:text-sm`}
      >
        Tarefas
      </Link>
      <Link
        to={`/${selectedPeriod}/schedulePreview`}
        className={`flex cursor-pointer items-center justify-center rounded-xl px-5 py-2 text-center text-xs font-medium hover:scale-105 transition-transform duration-300 ${
          selectedSubpage === "schedulePreview"
            ? "bg-menuHighlightColor text-primary-dark"
            : darkTheme
            ? "text-primary-dark"
            : "text-primary-light"
        }  sm:text-sm`}
      >
        Agenda
      </Link>
      <Link
        to={`/${selectedPeriod}/communityPreview`}
        className={`flex cursor-pointer items-center justify-center rounded-xl px-5 py-2 text-center text-xs font-medium hover:scale-105 transition-transform duration-300 ${
          selectedSubpage === "communityPreview"
            ? "bg-menuHighlightColor text-primary-dark"
            : darkTheme
            ? "text-primary-dark"
            : "text-primary-light"
        }  sm:text-sm`}
      >
        Comunidade
      </Link>
    </div>
  );
};

export default DashboardSubmenu;
