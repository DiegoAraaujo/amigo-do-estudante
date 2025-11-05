import { Link } from "react-router-dom";
import { useDarkTheme } from "../../../hooks/UseDarkTheme";

interface QuickActionsProps {
  selectedSubpage: string;
}
const QuickActions = ({ selectedSubpage }: QuickActionsProps) => {
  const { darkTheme } = useDarkTheme();
  return (
    <div
      className={`${darkTheme ? "bg-surface-dark" : "bg-surface-light shadow-sm"} rounded-xl p-6 sm:flex-1 lg:flex-none`}
    >
      <h2
        className={`text-xl font-semibold md:text-2xl ${darkTheme ? "text-primary-dark" : "text-primary-light"} mb-6`}
      >
        Ações Rápidas
      </h2>
      <div className="grid gap-3">
        <Link
          to="/community/allquestions"
          className={`text-primary-dark flex w-full max-w-2xl cursor-pointer items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium ${selectedSubpage === "allquestions" ? "bg-blue-600" : darkTheme ? "bg-dark" : "bg-light text-primary-light"}`}
        >
          <i className="bi bi-list-nested" />
          Todas as Pergunta
        </Link>
        <Link
          to="/community/createquestion"
          className={`text-primary-dark flex w-full max-w-2xl cursor-pointer items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium ${selectedSubpage === "createquestion" ? "bg-blue-600" : darkTheme ? "bg-dark" : "bg-light text-primary-light"}`}
        >
          <i className="bi bi-plus-lg" />
          Fazer Pergunta
        </Link>
        <Link
          to="/community/myquestions"
          className={`text-primary-dark flex w-full max-w-2xl cursor-pointer items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium ${selectedSubpage === "myquestions" ? "bg-blue-600" : darkTheme ? "bg-dark" : "bg-light text-primary-light"}`}
        >
          <i className="bi bi-chat-dots" />
          Minhas Perguntas
        </Link>
        <Link
          to="/community/myanswers"
          className={`text-primary-dark flex w-full max-w-2xl cursor-pointer items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium ${selectedSubpage === "myanswers" ? "bg-blue-600" : darkTheme ? "bg-dark" : "bg-light text-primary-light"}`}
        >
          <i className="bi bi-ui-checks" />
          Minhas Respostas
        </Link>
      </div>
    </div>
  );
};

export default QuickActions;
