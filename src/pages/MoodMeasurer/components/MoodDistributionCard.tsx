import { useDarkTheme } from "../../../hooks/UseDarkTheme";
import MoodProgressBar from "./MoodProgressBar";

const MoodDistributionCard = () => {
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
          Distribuição de Humor
        </h2>
        <p
          className={`tetx-sm ${
            darkTheme ? "text-muted-dark" : "text-muted-light"
          }`}
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
  );
};

export default MoodDistributionCard;
