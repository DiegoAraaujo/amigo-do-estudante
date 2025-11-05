import { useDarkTheme } from "../../../hooks/UseDarkTheme";

const OverviewStats = () => {
  const { darkTheme } = useDarkTheme();

  return (
    <div
      className={`${darkTheme ? "bg-surface-dark" : "bg-surface-light shadow-sm"} rounded-xl p-6`}
    >
      <p
        className={`${darkTheme ? "text-primary-dark" : "text-primary-light"} mb-6 text-xl font-bold sm:text-2xl`}
      >
        Visão Geral
      </p>
      <div className={`${darkTheme ? "" : ""} grid grid-cols-2 gap-6`}>
        <div
          className={`${darkTheme ? "bg-card-dark" : "bg-card-light"} flex flex-col items-center rounded-xl p-6`}
        >
          <p className="text-2xl font-bold text-blue-500">0</p>
          <p
            className={`${darkTheme ? "text-muted-dark" : "text-muted-light text-sm"}`}
          >
            Hoje
          </p>
        </div>
        <div
          className={`${darkTheme ? "bg-card-dark" : "bg-card-light"} flex flex-col items-center rounded-xl p-6`}
        >
          <p className="text-2xl font-bold text-purple-500">23</p>
          <p
            className={`${darkTheme ? "text-muted-dark" : "text-muted-light"} text-sm`}
          >
            Semana
          </p>
        </div>
        <div
          className={`${darkTheme ? "bg-card-dark" : "bg-card-light"} flex flex-col items-center rounded-xl p-6`}
        >
          <p className="text-2xl font-bold text-green-500">89</p>
          <p
            className={`${darkTheme ? "text-muted-dark" : "text-muted-light"} text-sm`}
          >
            Mês
          </p>
        </div>
        <div
          className={`${darkTheme ? "bg-card-dark" : "bg-card-light"} flex flex-col items-center rounded-xl p-6`}
        >
          <p className="text-2xl font-bold text-orange-500">5</p>
          <p
            className={`${darkTheme ? "text-muted-dark" : "text-muted-light"} text-sm`}
          >
            Sequência
          </p>
        </div>
      </div>
    </div>
  );
};

export default OverviewStats;
