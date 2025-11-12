import { useDarkTheme } from "../../../hooks/UseDarkTheme";
import SessionCard from "./SessionCard";

const SessionHistory = () => {
  const { darkTheme } = useDarkTheme();
  const sessions = [
    {
      subject: "Matematica",
      time: 1500,
    },
    {
      subject: "Matematica",
      time: 1800,
    },
  ];

  return (
    <div
      className={`${
        darkTheme ? "bg-surface-dark" : "bg-surface-light shadow-sm"
      } flex-1 rounded-xl p-6 md:flex-2`}
    >
      <p
        className={`${
          darkTheme ? "text-primary-dark" : "text-primary-light"
        } font-semibold text-xl`}
      >
        Últimas Sessões
      </p>
      <div className="flex py-6 h-full">
        {sessions.length > 0 ? (
          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
            {sessions.map((session, index) => {
              return (
                <SessionCard
                  subject={session.subject}
                  time={session.time}
                  key={index}
                />
              );
            })}
          </div>
        ) : (
          <p
            className={`${
              darkTheme ? "text-muted-dark/70" : "text-muted-light"
            } h-full flex items-center justify-center text-xl w-full`}
          >
            Nenhuma sessão ainda 😢
          </p>
        )}
      </div>
    </div>
  );
};

export default SessionHistory;
