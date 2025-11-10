import { useDarkTheme } from "../../../hooks/UseDarkTheme";

const MyTasksEmptyState = () => {
  const { darkTheme } = useDarkTheme();
  
  return (
    <div className="flex flex-col justify-center items-center h-full gap-2">
      <div
        className={`bg-purple-700/20  w-15 h-15 flex justify-center items-center rounded-full text-purple-700`}
      >
        <i className={`bi bi-calendar  text-2xl`} />
      </div>
      <p
        className={`${
          darkTheme ? "text-muted-dark" : "text-muted-light"
        } text-lg font-medium`}
      >
        Nenhuma tarefa ativa
      </p>
      <p
        className={`text-center ${
          darkTheme ? "text-muted-dark" : "text-muted-light"
        }`}
      >
        Todas as tarefas foram concluídas! 🎉
      </p>
    </div>
  );
};

export default MyTasksEmptyState;
