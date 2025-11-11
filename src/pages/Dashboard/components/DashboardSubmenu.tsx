import { Link } from "react-router-dom";
import { useDarkTheme } from "../../../hooks/UseDarkTheme";

interface DashboardSubmenuProps {
  selectedPeriod: string;
}

const DashboardSubmenu = ({ selectedPeriod }: DashboardSubmenuProps) => {
  const { darkTheme } = useDarkTheme();
  return (
    <div className="grid grid-cols-4 gap-2">
      <Link
        to={`/${selectedPeriod}/generalOverview`}
        className={`flex cursor-pointer items-center justify-center rounded-xl px-5 py-2 text-center text-xs font-medium ${
          darkTheme
            ? "text-muted-dark hover:bg-surface-dark"
            : "text-muted-light hover:bg-surface-light"
        }  sm:text-sm`}
      >
        Visão Geral
      </Link>
      <Link
        to={`/${selectedPeriod}/tasksPreview`}
        className={`flex cursor-pointer items-center justify-center rounded-xl px-5 py-2 text-center text-xs font-medium ${
          darkTheme
            ? "text-muted-dark hover:bg-surface-dark"
            : "text-muted-light hover:bg-surface-light"
        }  sm:text-sm`}
      >
        Tarefas
      </Link>
      <Link
        to={`/${selectedPeriod}/schedulePreview`}
        className={`flex cursor-pointer items-center justify-center rounded-xl px-5 py-2 text-center text-xs font-medium ${
          darkTheme
            ? "text-muted-dark hover:bg-surface-dark"
            : "text-muted-light hover:bg-surface-light"
        }  sm:text-sm`}
      >
        Cronograma
      </Link>
      <Link
        to={`/${selectedPeriod}/communityPreview`}
        className={`flex cursor-pointer items-center justify-center rounded-xl px-5 py-2 text-center text-xs font-medium ${
          darkTheme
            ? "text-muted-dark hover:bg-surface-dark"
            : "text-muted-light hover:bg-surface-light"
        }  sm:text-sm`}
      >
        Comunidade
      </Link>
    </div>
  );
};

export default DashboardSubmenu;
