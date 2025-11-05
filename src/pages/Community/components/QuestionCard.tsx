import { useDarkTheme } from "../../../hooks/UseDarkTheme";

interface QuestionCardProps {
  title: string;
  description: string;
  tags: string[];
  author?: string;
  madeIn: string;
  likes: number;
  numberOfResponses: number;
}
const QuestionCard = ({
  title,
  description,
  tags,
  author,
  madeIn,
  likes,
  numberOfResponses,
}: QuestionCardProps) => {
  const { darkTheme } = useDarkTheme();

  return (
    <div
      className={`${darkTheme ? "bg-surface-dark" : "bg-surface-light"} rounded-xl p-6`}
    >
      <p
        className={`${darkTheme ? "text-primary-dark" : "text-primary-light"} mb-1 font-semibold`}
      >
        {title}
      </p>
      <p
        className={`${darkTheme ? "text-muted-dark" : "text-muted-light"} mb-3 text-sm`}
      >
        {description}
      </p>
      <div className="mb-3 flex gap-3">
        {tags.map((tag) => {
          return (
            <p className="text-primary-dark rounded-2xl bg-purple-700 px-6 py-1 text-xs">
              {tag}
            </p>
          );
        })}
      </div>
      <div className="border-muted-dark mb-3 flex gap-6 border-b pb-3">
        {author ? (
          <p
            className={`${darkTheme ? "text-muted-dark" : "text-muted-light"} text-sm`}
          >
            Por {author}
          </p>
        ) : null}

        <p
          className={`${darkTheme ? "text-muted-dark" : "text-muted-light"} text-sm`}
        >
          há {madeIn}
        </p>
      </div>
      <div className="flex gap-6">
        <button
          className={`${darkTheme ? "text-primary-dark" : "text-primary-light"} flex cursor-pointer items-center gap-2 text-sm font-medium`}
        >
          <i className="bi bi-hand-thumbs-up" /> <span>{likes}</span>
        </button>
        <button
          className={`${darkTheme ? "text-muted-dark" : "text-muted-light"} flex cursor-pointer items-center gap-2 text-sm font-medium`}
        >
          <i className="bi bi-chat" />
          <span>{numberOfResponses} respostas</span>
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
