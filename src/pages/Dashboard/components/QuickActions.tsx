import { useDarkTheme } from "../../../hooks/UseDarkTheme";
import QuickActionItem from "./QuickActionItem";

const QuickActions = () => {
  const { darkTheme } = useDarkTheme();

  const items = [
    {
      action: "Iniciar Pomodoro",
      icon: "bi bi-play-circle",
      hoverColor: "#875AF2",
    },
    {
      action: "Ver Planejamento",
      icon: "bi bi-calendar",
      hoverColor: "#36E275",
    },
    {
      action: "Registrar Humor",
      icon: "bi bi-emoji-smile",
      hoverColor: "#F08B42",
    },
    {
      action: "Gamificação",
      icon: "bi bi-controller",
      hoverColor: "#EAB308",
    },
  ];

  return (
    <div
      className={`${
        darkTheme
          ? "bg-surface-dark"
          : "bg-surface-light"
      } flex w-full flex-col gap-6 rounded-2xl p-6`}
    >
      <div className="flex items-center gap-4">
        <i className="bi bi-lightning-charge text-xl text-[#875AF2]"></i>
        <p
          className={`text-xl font-semibold ${
            darkTheme ? "text-primary-dark" : "text-primary-light"
          }`}
        >
          Ações Rápidas
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {items.map((item, index) => {
          return (
            <QuickActionItem
              key={index}
              action={item.action}
              icon={item.icon}
              hoverColor={item.hoverColor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;
