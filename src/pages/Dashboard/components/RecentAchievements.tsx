import { useDarkTheme } from "../../../hooks/UseDarkTheme";
import AchievementItem from "./AchievementItem";

const RecentAchievements = () => {
  const { darkTheme } = useDarkTheme();
  const items = [
    {
      conquest: "Maratonista",
      description: "10 Pomodoros em um dia",
      icon: "bi bi-fire",
      xp: 200,
    },
    {
      conquest: "Pontual",
      description: "Seguiu cronograma perfeitamente",
      icon: "bi bi-clock",
      xp: 50,
    },
    {
      conquest: "Colaborativo",
      description: "Ajudou 5 colegas",
      icon: "bi bi-people-fill",
      xp: 100,
    },
  ];

  return (
    <div
      className={`flex flex-col gap-6 rounded-2xl ${
        darkTheme ? "bg-surface-dark" : "bg-surface-light"
      } p-6`}
    >
      <div className="flex items-center gap-4">
        <i className="bi bi-award text-xl text-yellow-600"></i>
        <h2
          className={`text-xl font-semibold ${
            darkTheme ? "text-primary-dark" : "text-primary-light"
          }`}
        >
          Conquistas Recentes
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {items.map((item, index) => {
          return (
            <AchievementItem
              key={index}
              conquest={item.conquest}
              description={item.description}
              xp={item.xp}
              icon={item.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RecentAchievements;
