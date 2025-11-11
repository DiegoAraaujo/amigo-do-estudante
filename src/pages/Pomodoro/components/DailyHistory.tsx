import { useDarkTheme } from "../../../hooks/UseDarkTheme";

const DailyHistory = () => {
  const { darkTheme } = useDarkTheme();
  return (
    <div
      className={`${darkTheme ? "bg-surface-dark" : "bg-surface-light shadow-sm"} rounded-xl p-6`}
    >
      <p
        className={`${darkTheme ? "text-primary-dark" : "text-primary-light"} text-xl font-semibold`}
      >
        Histórico de Hoje
      </p>
      <p
        className={`text-sm ${darkTheme ? "text-muted-dark" : "text-muted-light"}`}
      >
        0 sessões completadas
      </p>
      <div className="flex flex-col items-center p-6">
        <p
          className={`${darkTheme ? "text-muted-dark" : "text-muted-light"} text-base md:text-xl font-medium`}
        >
          Nenhuma sessão hoje
        </p>
        <p
          className={`${darkTheme ? "text-muted-dark" : "text-muted-light"} text-center text-xs md:text-base`}
        >
          Complete seu primeiro pomodoro para ver seu histórico!
        </p>
      </div>
    </div>
  );
};

export default DailyHistory;
