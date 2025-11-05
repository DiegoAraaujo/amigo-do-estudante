import { useDarkTheme } from "../../../hooks/UseDarkTheme";
import MoodProgressBar from "./MoodProgressBar";
import MoodTrendItem from "./MoodTrendItem";

const MoodOverview = () => {
  const { darkTheme } = useDarkTheme();

  const moodData = [
    { mood: "Feliz", days: 1, percentage: 50 },
    { mood: "Focado", days: 1, percentage: 50 },
    { mood: "Calmo", days: 0, percentage: 0 },
    { mood: "Neutro", days: 0, percentage: 0 },
    { mood: "Cansado", days: 0, percentage: 0 },
    { mood: "Estressado", days: 0, percentage: 0 },
    { mood: "Triste", days: 0, percentage: 0 },
  ];

  const factorData = [
    { factor: "Estudos", times: 2, percentage: 30 },
    { factor: "Sono", times: 1, percentage: 40 },
    { factor: "Exercício", times: 1, percentage: 50 },
  ];

  return (
    <section>
      <div className={`mb-6 grid gap-4 md:grid-cols-2`}>
        <div
          className={`${darkTheme ? "bg-surface-dark" : "bg-surface-light"} rounded-xl p-6`}
        >
          <div className="mb-3">
            <h2
              className={`text-xl font-semibold sm:text-2xl ${darkTheme ? "text-primary-dark" : "text-primary-light"}`}
            >
              Distribuição de Humor
            </h2>
            <p
              className={`tetx-sm ${darkTheme ? "text-muted-dark" : "text-muted-light"}`}
            >
              Como você tem se sentido
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {moodData.map((mood, index) => {
              return (
                <MoodProgressBar
                  key={index}
                  days={mood.days}
                  percentage={mood.percentage}
                  mood={mood.mood}
                />
              );
            })}
          </div>
        </div>

        <div
          className={`${darkTheme ? "bg-surface-dark" : "bg-surface-light"} rounded-xl p-6`}
        >
          <div className="mb-3">
            <h2
              className={`text-xl font-semibold sm:text-2xl ${darkTheme ? "text-primary-dark" : "text-primary-light"}`}
            >
              Fatores Mais Influentes
            </h2>
            <p
              className={`tetx-sm ${darkTheme ? "text-muted-dark" : "text-muted-light"}`}
            >
              O que afeta seu bem-estar
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {factorData.map((factor, index) => {
              return (
                <MoodTrendItem
                  factor={factor.factor}
                  percentage={factor.percentage}
                  times={factor.times}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div
          className={`rounded-xl ${darkTheme ? "bg-surface-dark" : "bg-surface-light"} p-6`}
        >
          <div className="mb-3">
            <h2
              className={`text-xl font-semibold sm:text-2xl ${darkTheme ? "text-primary-dark" : "text-primary-light"}`}
            >
              Análise da Semana
            </h2>
            <p
              className={`tetx-sm ${darkTheme ? "text-muted-dark" : "text-muted-light"}`}
            >
              Últimos 7 dias
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div
              className={`flex items-center rounded-xl px-6 py-3 ${darkTheme ? "bg-card-dark" : "bg-card-light"}`}
            >
              <div className="flex-1">
                <p
                  className={`${darkTheme ? "text-muted-dark" : "text-muted-light"} text-sm`}
                >
                  Dias registrados
                </p>
                <p className="text-xl font-bold text-[#875AF2] sm:text-2xl">
                  5/7
                </p>
              </div>
              <i className="bi bi-calendar-check text-3xl text-[#875AF2]" />
            </div>
            <div
              className={`flex items-center rounded-xl px-6 py-3 ${darkTheme ? "bg-card-dark" : "bg-card-light"}`}
            >
              <div className="flex-1">
                <p
                  className={`${darkTheme ? "text-muted-dark" : "text-muted-light"} text-sm`}
                >
                  Energia Média
                </p>
                <p className="text-2xl font-bold text-[#F08B42]">8/10</p>
              </div>
              <i className="bi bi-battery text-3xl text-[#F08B42]" />
            </div>
          </div>
        </div>

        <div
          className={`${darkTheme ? "bg-surface-dark" : "bg-surface-light"} rounded-xl p-6`}
        >
          <div className="mb-3">
            <h2
              className={` ${darkTheme ? "text-primary-dark" : "text-primary-light"} text-xl font-semibold sm:text-2xl`}
            >
              Dicas de Bem-Estar
            </h2>
            <p
              className={`${darkTheme ? "text-muted-dark" : "text-muted-light"} tetx-sm`}
            >
              Esteja sempre cuidando de você
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p
              className={`${darkTheme ? "bg-card-dark text-primary-dark" : "bg-card-light text-primary-light"} rounded-xl px-6 py-3 text-sm`}
            >
              Registre seu humor diariamente para acompanhar sua evolução
            </p>
            <p
              className={`${darkTheme ? "bg-card-dark text-primary-dark" : "bg-card-light text-primary-light"} rounded-xl px-6 py-3 text-sm`}
            >
              Mantenha uma rotina de sono regular para mais energia
            </p>
            <p
              className={`${darkTheme ? "bg-card-dark text-primary-dark" : "bg-card-light text-primary-light"} rounded-xl px-6 py-3 text-sm`}
            >
              Pratique pausas durante os estudos para melhor concentração
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoodOverview;
