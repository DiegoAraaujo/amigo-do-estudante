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
      className={`flex gap-3 rounded-xl border border-gray-300 px-6 py-2 ${
        darkTheme ? "bg-surface-dark" : "bg-surface-light"
      }`}
    >
      <Link
        to={`/today/${selectedSubpage}`}
        className={`cursor-pointer rounded-xl px-6 py-1 text-[16px] font-medium hover:text-primary-dark  hover:bg-blue-600 ${
          selectedPeriod === "today"
            ? "bg-[#875AF2] text-primary-dark"
            : darkTheme
            ? "text-primary-dark"
            : "text-primary-light"
        }`}
      >
        Hoje
      </Link>
      <Link
        to={`/week/${selectedSubpage}`}
        className={`cursor-pointer rounded-xl px-6 py-1 text-[16px] font-medium text-gray-900 hover:bg-blue-400 hover:text-primary-dark ${
          selectedPeriod === "week"
            ? "bg-[#875AF2] text-primary-dark"
            : darkTheme
            ? "text-primary-dark"
            : "text-primary-light"
        }`}
      >
        Semana
      </Link>
      <Link
        to={`/month/${selectedSubpage}`}
        className={`cursor-pointer rounded-xl px-6 py-1 text-[16px] font-medium hover:bg-blue-400 hover:text-primary-dark  ${
          selectedPeriod === "month"
            ? "bg-[#875AF2] text-primary-dark"
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
