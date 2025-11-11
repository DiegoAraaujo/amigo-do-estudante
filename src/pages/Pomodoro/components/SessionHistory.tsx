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
      } flex-1 rounded-xl p-6`}
    >
      <p
        className={`${
          darkTheme ? "text-primary-dark" : "text-primary-light"
        } font-semibold text-xl`}
      >
        Últimas Sessões
      </p>
      <div className="flex items-center justify-center py-6">
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
            className={`${darkTheme ? "text-muted-dark" : "text-muted-light"}`}
          >
            Nenhuma sessão ainda
          </p>
        )}
      </div>
    </div>
  );
};

export default SessionHistory;
