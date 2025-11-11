import { useDarkTheme } from "../../../hooks/UseDarkTheme";

const SummaryPanel = () => {
  const { darkTheme } = useDarkTheme();

  return (
    <div
      className={`${
        darkTheme ? "bg-surface-dark" : "bg-surface-light shadow-sm"
      } flex-1 rounded-xl p-6`}
    >
      <p
        className={`${
          darkTheme ? "text-primary-dark" : "text-primary-light"
        } text-xl font-semibold`}
      >
        Resumo
      </p>
      <div className="grid grid-cols-2 py-6">
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold text-blue-600">0</p>
          <p
            className={`${
              darkTheme ? "text-muted-dark" : "text-muted-light"
            } text-xs`}
          >
            Hoje
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold text-green-500">5</p>
          <p
            className={`${
              darkTheme ? "text-muted-dark" : "text-muted-light"
            } text-xs`}
          >
            Dias
          </p>
        </div>
      </div>
    </div>
  );
};

export default SummaryPanel;
