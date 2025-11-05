import { useDarkTheme } from "../../../hooks/UseDarkTheme";

interface SessionCardProps {
  subject: string;
  time: number;
}

const SessionCard = ({ subject, time }: SessionCardProps) => {
  const { darkTheme } = useDarkTheme();

  return (
    <div
      className={`${darkTheme ? "bg-card-dark text-primary-dark shadow-sm shadow-purple-700/30" : "bg-card-light text-primary-light"} tetx-sm rounded-xl px-6 py-2`}
    >
      Você estudou {subject} por {time} minutos{" "}
      <i className="bi bi-rocket-takeoff-fill animate-bounce text-purple-700" />
    </div>
  );
};

export default SessionCard;
