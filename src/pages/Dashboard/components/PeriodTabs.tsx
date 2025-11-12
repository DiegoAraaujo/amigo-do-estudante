import { Link } from "react-router-dom";
import { useDarkTheme } from "../../../hooks/UseDarkTheme";

interface PeriodTabsProps {
  selectedSubpage: string;
  selectedPeriod: string;
}

const PeriodTabs = ({ selectedSubpage, selectedPeriod }: PeriodTabsProps) => {
  const { darkTheme } = useDarkTheme();

  return (
    <div
      className={`flex gap-3 rounded-xl border px-6 py-2 ${
        darkTheme
          ? "bg-surface-dark border-outline-dark"
          : "bg-surface-light border-outline-light"
      }`}
    >
      <Link
        to={`/today/${selectedSubpage}`}
        className={`cursor-pointer rounded-xl px-6 py-1 text-sm font-medium hover:scale-105 transition-transform duration-300 ${
          selectedPeriod === "today"
            ? "bg-menuHighlightColor text-primary-dark"
            : darkTheme
            ? "text-primary-dark"
            : "text-primary-light"
        }`}
      >
        Hoje
      </Link>
      <Link
        to={`/week/${selectedSubpage}`}
        className={`cursor-pointer rounded-xl px-6 py-1 text-sm font-medium hover:scale-105 transition-transform duration-300 ${
          selectedPeriod === "week"
            ? "bg-menuHighlightColor text-primary-dark"
            : darkTheme
            ? "text-primary-dark"
            : "text-primary-light"
        }`}
      >
        Semana
      </Link>
      <Link
        to={`/month/${selectedSubpage}`}
        className={`cursor-pointer rounded-xl px-6 py-1 text-sm font-medium hover:scale-105 transition-transform duration-300 ${
          selectedPeriod === "month"
            ? "bg-menuHighlightColor text-primary-dark"
            : darkTheme
            ? "text-primary-dark"
            : "text-primary-light"
        }`}
      >
        Mês
      </Link>
    </div>
  );
};

export default PeriodTabs;
