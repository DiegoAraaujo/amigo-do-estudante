import { useDarkTheme } from "../../../hooks/UseDarkTheme";
import { usePomodoro } from "../../../hooks/UsePomodoro";

const PreferencesSection = () => {
  const { darkTheme } = useDarkTheme();
  const {
    pomodorosPerDay,
    setPomodorosPerDay,
    cyclesUntilLongBreak,
    setCyclesUntilLongBreak,
  } = usePomodoro();

  const decrementCyclesUntilLongBreak = () => {
    if (cyclesUntilLongBreak > 1) setCyclesUntilLongBreak((prev) => prev - 2);
  };

  const incrementCyclesUntilLongBreak = () => {
    if (cyclesUntilLongBreak < pomodorosPerDay)
      setCyclesUntilLongBreak((prev) => prev + 2);
  };
  return (
    <div
      className={`${
        darkTheme ? "bg-surface-dark" : "bg-surface-light shadow-sm"
      } rounded-xl p-6`}
    >
      <div className="mb-6">
        <h2
          className={`${
            darkTheme ? "text-primary-dark" : "text-primary-light"
          } text-xl font-bold sm:text-2xl`}
        >
          Metas e Preferências
        </h2>
        <p
          className={`text-sm ${
            darkTheme ? "text-muted-dark" : "text-muted-light"
          }`}
        >
          Defina metas e preferências
        </p>
      </div>
      <div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label
              htmlFor=""
              className={`text-sm font-medium ${
                darkTheme ? "text-primary-dark" : "text-primary-light"
              }`}
            >
              Pomodoros por Dia
            </label>
            <input
              type="number"
              name=""
              id=""
              className={`rounded-xl p-2 ${
                darkTheme
                  ? "text-primary-dark bg-dark"
                  : "text-primary-light bg-light"
              }`}
              value={pomodorosPerDay}
              onChange={(e) => {
                setPomodorosPerDay(Number(e.target.value));
              }}
            />
            <p
              className={`text-xs ${
                darkTheme ? "text-muted-dark" : "text-muted-light"
              }`}
            >
              Recomendado: 6-8 pomodoros (3-4 horas de foco)
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p
                className={`text-sm font-medium ${
                  darkTheme ? "text-primary-dark" : "text-primary-light"
                }`}
              >
                Sons de Notificações
              </p>
              <p
                className={`text-xs ${
                  darkTheme ? "text-muted-dark" : "text-muted-light"
                }`}
              >
                Alertas ao concluir sessões
              </p>
            </div>
            <div className="cursor-pointer rounded-xl bg-blue-700 px-2 py-1 text-white">
              <i className="bi bi-volume-up text-xl" />
              <i className="bi bi-volume-mute hidden text-xl" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p
                className={`text-sm font-medium ${
                  darkTheme ? "text-primary-dark" : "text-primary-light"
                }`}
              >
                Ciclos até Pausa Longa
              </p>
              <p
                className={`text-xs ${
                  darkTheme ? "text-muted-dark" : "text-muted-light"
                }`}
              >
                A cada {cyclesUntilLongBreak} pomodoros
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex flex-col px-2 py-1 text-blue-600">
                <button
                  onClick={incrementCyclesUntilLongBreak}
                  className="cursor-pointer"
                >
                  <i className="bi bi-caret-up" />
                </button>
                <button
                  onClick={decrementCyclesUntilLongBreak}
                  className="cursor-pointer"
                >
                  <i className="bi bi-caret-down" />
                </button>
              </div>
              <p
                className={`text-md flex h-8 w-8 items-center justify-center rounded-full border p-2 ${
                  darkTheme
                    ? "text-primary-dark border-muted-dark"
                    : "text-primary-light border-muted-light"
                } border-blue-700`}
              >
                {cyclesUntilLongBreak}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreferencesSection;
