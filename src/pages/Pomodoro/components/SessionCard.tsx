import { useDarkTheme } from "../../../hooks/UseDarkTheme";

interface SessionCardProps {
  subject: string;
  time: number;
}

const SessionCard = ({ subject, time }: SessionCardProps) => {
  const { darkTheme } = useDarkTheme();

  return (
    <div
      className={`border ${
        darkTheme
          ? "bg-card-dark text-primary-dark border-outline-dark"
          : "bg-card-light text-primary-light border-outline-light"
      } text-sm rounded-xl px-6 py-2 text-center`}
    >
      Você estudou {subject} por {time} minutos{" "}
      <i className="bi bi-rocket-takeoff-fill animate-bounce text-purple-700" />
    </div>
  );
};

export default SessionCard;
