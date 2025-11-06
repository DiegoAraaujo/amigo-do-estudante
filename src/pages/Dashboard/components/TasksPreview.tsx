import { useDarkTheme } from "../../../hooks/UseDarkTheme";
import TaskPreviewItem from "./TaskPreviewItem";

const TasksPreview = () => {
  const { darkTheme } = useDarkTheme();
  const tasks = [
    {
      title: "Resolver exercícios de Derivadas",
      priority: "alta",
      matter: "Matemática",
      day: "Hoje",
      hour: "16:00",
      progress: 30,
    },
    {
      title: "Resolver exercícios de Derivadas",
      priority: "alta",
      matter: "Matemática",
      day: "Amanhã",
      hour: "10:00",
      progress: 75,
    },
    {
      title: "Estudar Cinemática - Movimento Uniformemente Variado",
      priority: "Baixa",
      matter: "Física",
      day: "Sexta",
      hour: "14:00",
      progress: 0,
    },
    {
      title: "Estudar Cinemática - Movimento Uniformemente Variado",
      priority: "Baixa",
      matter: "Física",
      day: "Sexta",
      hour: "14:00",
      progress: 0,
    },
  ];
  return (
    <section>
      <div
        className={`${
          darkTheme ? "bg-surface-dark" : "bg-surface-light"
        } flex flex-col gap-6 rounded-2xl p-6`}
      >
        <div className="flex flex-col justify-between sm:flex-row">
          <div className="flex items-center justify-start gap-4">
            <i
              className={`text-purple-700
               bi bi-list-task text-xl`}
            />
            <h1
              className={`text-2xl font-semibold ${
                darkTheme ? "text-primary-dark" : "text-primary-light"
              }`}
            >
              Próximas Tarefas
            </h1>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {tasks.map((task, index) => {
            return (
              <TaskPreviewItem
                key={index}
                title={task.title}
                priotity={task.priority}
                matter={task.matter}
                day={task.day}
                hour={task.hour}
                progress={task.progress}
              />
            );
          })}
        </div>
        <button className="w-full cursor-pointer rounded-2xl border border-gray-300 bg-[#F9F9FA] py-2 text-center text-sm font-medium hover:bg-[#5AA6F2] hover:text-white">
          <i className="bi bi-plus"></i> Criar Nova Tarefa
        </button>
      </div>
    </section>
  );
};

export default TasksPreview;
