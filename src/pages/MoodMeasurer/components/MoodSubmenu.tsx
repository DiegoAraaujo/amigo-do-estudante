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
        className={`flex cursor-pointer items-center justify-center rounded-md px-6 ${
          darkTheme ? "text-muted-dark" : "text-muted-light"
        } py-2 text-sm font-medium ${
          selectedSubpage === "moodregisterform"
            ? darkTheme
              ? "bg-card-dark"
              : "bg-card-light"
            : ""
        } text-center`}
      >
        Registro
      </Link>
      <Link
        to="/moodmeasurer/moodhistory"
        className={`flex cursor-pointer items-center justify-center rounded-md px-6 ${
          darkTheme ? "text-muted-dark" : "text-muted-light"
        } py-2 text-sm font-medium ${
          selectedSubpage === "moodhistory"
            ? darkTheme
              ? "bg-card-dark"
              : "bg-card-light"
            : ""
        } text-center`}
      >
        Historico
      </Link>
      <Link
        to="/moodmeasurer/moodoverview"
        className={`flex cursor-pointer items-center justify-center rounded-md ${
          darkTheme ? "text-muted-dark" : "text-muted-light"
        } px-6 py-2 text-sm font-medium ${
          selectedSubpage === "moodoverview"
            ? darkTheme
              ? "bg-card-dark"
              : "bg-card-light"
            : ""
        } text-center`}
      >
        Visão Geral
      </Link>
    </div>
  );
};

export default MoodSubmenu;
