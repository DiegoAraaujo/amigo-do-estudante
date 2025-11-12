import { Link } from "react-router-dom";
import { useDarkTheme } from "../../../hooks/UseDarkTheme";

interface PlanningNavProps {
  selectedSubPage: string;
}
const PlanningNav = ({ selectedSubPage }: PlanningNavProps) => {
  const { darkTheme } = useDarkTheme();
  return (
    <nav
      className={`mb-6 ${
        darkTheme ? "bg-surface-dark" : "bg-surface-light"
      } grid grid-cols-2 gap-3 md:px-24 py-2 px-6  rounded-xl`}
    >
      <Link
        to="/planning/myschedule"
        className={` rounded-xl px-4 py-2 flex justify-center font-medium hover:scale-105 transition-transform duration-300 text-sm ${
          selectedSubPage === "myschedule"
            ? "bg-purple-700 text-primary-dark"
            : darkTheme
            ? "text-primary-dark"
            : "text-primary-light"
        }`}
      >
        Minha Agenda
      </Link>
      <Link
        to="/planning/mytasks"
        className={` rounded-xl px-4 py-2 flex justify-center font-medium hover:scale-105 transition-transform duration-300 text-sm ${
          selectedSubPage === "mytasks"
            ? "bg-purple-700 text-primary-dark"
            : darkTheme
            ? "text-primary-dark"
            : "text-primary-light"
        }`}
      >
        Minhas Tarefas
      </Link>
    </nav>
  );
};

export default PlanningNav;
