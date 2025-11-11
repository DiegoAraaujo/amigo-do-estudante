import { useDarkTheme } from "../../../hooks/UseDarkTheme";
import WeeklyStatItem from "./WeeklyStatItem";

const WeeklyOverviewCard = () => {
  const { darkTheme } = useDarkTheme();
  return (
    <div
      className={`rounded-xl ${
        darkTheme ? "bg-surface-dark" : "bg-surface-light"
      } p-6`}
    >
      <div className="mb-3">
        <h2
          className={`text-xl font-semibold sm:text-2xl ${
            darkTheme ? "text-primary-dark" : "text-primary-light"
          }`}
        >
          Análise da Semana
        </h2>
        <p
          className={`tetx-sm ${
            darkTheme ? "text-muted-dark" : "text-muted-light"
          }`}
        >
          Últimos 7 dias
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <WeeklyStatItem
          label="Dias registrados"
          value="5/7"
          icon="bi bi-calendar-check"
          color="#875AF2"
        />

        <WeeklyStatItem
          label="Energia Média"
          value="8/10"
          icon="bi bi-battery"
          color="#F08B42"
        />
      </div>
    </div>
  );
};

export default WeeklyOverviewCard;
