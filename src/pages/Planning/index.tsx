import { useParams } from "react-router-dom";
import PlanningNav from "./components/PlanningNav";
import MyScheduleSection from "./components/MyScheduleSection";
import MyTasksSection from "./components/MyTasksSection";
import { useDarkTheme } from "../../hooks/UseDarkTheme";

const Planning = () => {
  const { darkTheme } = useDarkTheme();
  const { subpage } = useParams();
  const selectedSubPage = subpage || "myschedule";

  return (
    <section>
      <div className="md:grid-cols-3 grid gap-6 mb-6">
        <div className="flex gap-4 items-center bg-blue-600/10 rounded-xl p-6">
          <div className="rounded-xl bg-blue-600/20 text-blue-800 px-2 py-1">
            <i className="bi bi-ui-checks-grid text-2xl" />
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-700">0</p>
            <p
              className={`${
                darkTheme ? "text-muted-dark" : "text-muted-light"
              } text-sm`}
            >
              Tarefas Ativas
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center bg-purple-600/10 rounded-xl p-6">
          <div className="rounded-xl bg-purple-600/20 text-purple-800 px-2 py-1">
            <i className="bi bi-calendar-event text-2xl" />
          </div>
          <div>
            <p className="text-3xl font-bold text-purple-700">0</p>
            <p
              className={`${
                darkTheme ? "text-muted-dark" : "text-muted-light"
              } text-sm`}
            >
              Eventos
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center bg-green-600/10 rounded-xl p-6">
          <div className="rounded-xl bg-green-600/20 text-green-800 px-2 py-1">
            <i className="bi bi-graph-up text-2xl" />
          </div>
          <div>
            <p className="text-3xl font-bold text-green-700">0</p>
            <p
              className={`${
                darkTheme ? "text-muted-dark" : "text-muted-light"
              } text-sm`}
            >
              Taxa de Conclusão
            </p>
          </div>
        </div>
      </div>
      <PlanningNav selectedSubPage={selectedSubPage} />
      {selectedSubPage === "myschedule" && <MyScheduleSection />}
      {selectedSubPage === "mytasks" && <MyTasksSection />}
    </section>
  );
};

export default Planning;
