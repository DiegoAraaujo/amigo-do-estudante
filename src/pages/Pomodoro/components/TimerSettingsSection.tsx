import { useDarkTheme } from "../../../hooks/UseDarkTheme";
import { usePomodoro } from "../../../hooks/UsePomodoro";

const TimerSettingsSection = () => {
  const { darkTheme } = useDarkTheme();
  const {
    focusTime,
    longBreak,
    shortBreak,
    setFocusTime,
    setLongBreak,
    setShortBreak,
  } = usePomodoro();

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
          Tempos das Sessões
        </h2>
        <p
          className={`text-sm ${
            darkTheme ? "text-muted-dark" : "text-muted-light"
          }`}
        >
          Configure a duração de cada ciclo
        </p>
      </div>

      <form className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <label
            htmlFor=""
            className={`text-sm font-medium ${
              darkTheme ? "text-primary-dark" : "text-primary-light"
            }`}
          >
            Tempo de Foco (minutos)
          </label>
          <input
            type="number"
            name=""
            id=""
            className={`rounded-xl py-2 px-4 border focus:outline-none ${
              darkTheme
                ? "text-primary-dark bg-dark border-outline-dark"
                : "text-primary-light bg-light border-outline-light"
            }`}
            value={focusTime}
            onChange={(e) => {
              setFocusTime(Number(e.target.value));
            }}
          />
          <p
            className={`text-xs ${
              darkTheme ? "text-muted-dark" : "text-muted-light"
            }`}
          >
            Recomendado: 25 minutos
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor=""
            className={`text-sm font-medium ${
              darkTheme ? "text-primary-dark" : "text-primary-light"
            }`}
          >
            Pausa Curta(minutos)
          </label>
          <input
            type="number"
            name=""
            id=""
            className={`rounded-xl py-2 px-4 focus:outline-none border ${
              darkTheme
                ? "text-primary-dark bg-dark border-outline-dark"
                : "text-primary-light bg-light border-outline-light"
            }`}
            value={shortBreak}
            onChange={(e) => {
              setShortBreak(Number(e.target.value));
            }}
          />
          <p
            className={`text-xs ${
              darkTheme ? "text-muted-dark" : "text-muted-light"
            }`}
          >
            Recomendado: 5 minutos
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor=""
            className={`text-sm font-medium ${
              darkTheme ? "text-primary-dark" : "text-primary-light"
            }`}
          >
            Pausa Longa(minutos)
          </label>
          <input
            type="number"
            name=""
            id=""
            className={`rounded-xl py-2 px-4 focus:outline-none border ${
              darkTheme
                ? "text-primary-dark bg-dark border-outline-dark"
                : "text-primary-light bg-light border-outline-light"
            }`}
            value={longBreak}
            onChange={(e) => {
              setLongBreak(Number(e.target.value));
            }}
          />
          <p
            className={`text-xs ${
              darkTheme ? "text-muted-dark" : "text-muted-light"
            }`}
          >
            Recomendado: 15-30 minutos
          </p>
        </div>
      </form>
    </div>
  );
};

export default TimerSettingsSection;
