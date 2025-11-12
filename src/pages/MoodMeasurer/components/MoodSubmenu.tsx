import { Link } from "react-router-dom";
import { useDarkTheme } from "../../../hooks/UseDarkTheme";

interface MoodSubmenuProps {
  selectedSubpage: string;
}
const MoodSubmenu = ({ selectedSubpage }: MoodSubmenuProps) => {
  const { darkTheme } = useDarkTheme();

  return (
    <div
      className={`mb-6 grid w-full grid-cols-3 ${
        darkTheme ? "bg-surface-dark" : "bg-surface-light"
      } rounded-xl px-6 py-2`}
    >
      <Link
        to="/moodmeasurer/moodregisterform"
        className={`flex cursor-pointer items-center justify-center rounded-xl px-6 hover:scale-105 transition-transform duration-300 py-2 text-sm font-medium ${
          selectedSubpage === "moodregisterform"
            ? "bg-menuHighlightColor text-primary-dark"
            : darkTheme
            ? "text-primary-dark"
            : "text-primary-light"
        } text-center`}
      >
        Registro
      </Link>
      <Link
        to="/moodmeasurer/moodhistory"
        className={`flex cursor-pointer items-center justify-center rounded-xl px-6 hover:scale-105 transition-transform duration-300  py-2 text-sm font-medium text-center ${
          selectedSubpage === "moodhistory"
            ? "bg-menuHighlightColor text-primary-dark"
            : darkTheme
            ? "text-primary-dark"
            : "text-primary-light"
        } text-center`}
      >
        Historico
      </Link>
      <Link
        to="/moodmeasurer/moodoverview"
        className={`flex cursor-pointer items-center justify-center rounded-xl hover:scale-105 transition-transform duration-300  px-6 py-2 text-sm font-medium  text-center ${
          selectedSubpage === "moodoverview"
            ? "bg-menuHighlightColor text-primary-dark"
            : darkTheme
            ? "text-primary-dark"
            : "text-primary-light"
        } text-center`}
      >
        Visão Geral
      </Link>
    </div>
  );
};

export default MoodSubmenu;
