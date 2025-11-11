import { useDarkTheme } from "../../../hooks/UseDarkTheme";
import MoodTrendItem from "./MoodTrendItem";

const MoodFactorsCard = () => {
  const { darkTheme } = useDarkTheme();

  const factorData = [
    { factor: "Estudos", times: 2, percentage: 30 },
    { factor: "Sono", times: 1, percentage: 40 },
    { factor: "Exercício", times: 1, percentage: 50 },
  ];
  return (
    <div
      className={`${
        darkTheme ? "bg-surface-dark" : "bg-surface-light"
      } rounded-xl p-6`}
    >
      <div className="mb-3">
        <h2
          className={`text-xl font-semibold sm:text-2xl ${
            darkTheme ? "text-primary-dark" : "text-primary-light"
          }`}
        >
          Fatores Mais Influentes
        </h2>
        <p
          className={`tetx-sm ${
            darkTheme ? "text-muted-dark" : "text-muted-light"
          }`}
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
  );
};

export default MoodFactorsCard;
