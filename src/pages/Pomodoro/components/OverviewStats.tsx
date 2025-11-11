import { useDarkTheme } from "../../../hooks/UseDarkTheme";

const OverviewStats = () => {
  const { darkTheme } = useDarkTheme();

  return (
    <div
      className={`${
        darkTheme ? "bg-surface-dark" : "bg-surface-light shadow-sm"
      } rounded-xl p-6`}
    >
      <h2
        className={`${
          darkTheme ? "text-primary-dark" : "text-primary-light"
        } mb-6 text-xl font-semibold `}
      >
        Visão Geral
      </h2>
      <div className={`grid grid-cols-2 gap-4`}>
        <div
          className={`border ${
            darkTheme
              ? "bg-card-dark border-outline-dark"
              : "bg-card-light border-outline-light"
          } flex flex-col items-center rounded-xl p-4`}
        >
          <p className="text-2xl font-bold text-blue-500">0</p>
          <p
            className={`${
              darkTheme ? "text-muted-dark" : "text-muted-light text-sm"
            }`}
          >
            Hoje
          </p>
        </div>
        <div
          className={`border ${
            darkTheme
              ? "bg-card-dark border-outline-dark"
              : "bg-card-light border-outline-light"
          } flex flex-col items-center rounded-xl p-4`}
        >
          <p className="text-2xl font-bold text-purple-500">23</p>
          <p
            className={`${
              darkTheme ? "text-muted-dark" : "text-muted-light"
            } text-sm`}
          >
            Semana
          </p>
        </div>
        <div
          className={`border ${
            darkTheme
              ? "bg-card-dark border-outline-dark"
              : "bg-card-light border-outline-light"
          } flex flex-col items-center rounded-xl p-4`}
        >
          <p className="text-2xl font-bold text-green-500">89</p>
          <p
            className={`${
              darkTheme ? "text-muted-dark" : "text-muted-light"
            } text-sm`}
          >
            Mês
          </p>
        </div>
        <div
          className={`border ${
            darkTheme
              ? "bg-card-dark border-outline-dark"
              : "bg-card-light border-outline-light"
          } flex flex-col items-center rounded-xl p-4`}
        >
          <p className="text-2xl font-bold text-orange-500">5</p>
          <p
            className={`${
              darkTheme ? "text-muted-dark" : "text-muted-light"
            } text-sm`}
          >
            Sequência
          </p>
        </div>
      </div>
    </div>
  );
};

export default OverviewStats;
