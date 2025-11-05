import { useDarkTheme } from "../../../hooks/UseDarkTheme";

// Definindo o tipo das props que o componente vai receber
interface AnswerCardProps {
  author: string;
  timeAgo: string;
  answer: string;
  likes: number;
}

const AnswerCard: React.FC<AnswerCardProps> = ({ author, timeAgo, answer, likes }) => {
  const { darkTheme } = useDarkTheme();

  return (
    <div
      className={`${darkTheme ? "bg-surface-dark" : "bg-surface-light"} flex flex-col justify-start gap-3 rounded-xl p-6`}
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <p className={`${darkTheme ? "text-primary-dark" : "text-primary-light"}`}>
            Resposta há {author}
          </p>
          <div
            className={`${darkTheme ? "bg-card-dark text-muted-dark" : "bg-card-light text-muted-light"} flex h-9 w-9 items-center justify-center rounded-full text-2xl`}
          >
            <i className="bi bi-person-circle"></i>
          </div>
        </div>
        <p className={`${darkTheme ? "text-muted-dark" : "text-muted-light"} text-sm`}>
          {timeAgo}
        </p>
      </div>
      <p className={`${darkTheme ? "text-muted-dark" : "text-muted-light"} text-sm`}>
        {answer}
      </p>
      <button
        className={` ${darkTheme ? "text-primary-dark" : "text-primary-light"} w-10 cursor-pointer text-sm`}
      >
        <i className="bi bi-hand-thumbs-up" /> {likes}
      </button>
    </div>
  );
};

export default AnswerCard;
