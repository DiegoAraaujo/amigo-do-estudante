import { Link, useParams } from "react-router-dom";

import ProgressCard from "./components/ProgressCard";
import GeneralOverview from "./components/GeneralOverview";
import TasksPreview from "./components/TasksPreview";
import SchedulePreview from "./components/SchedulePreview";
import CommunityPreview from "./components/CommunityPreview";
import GamificationButton from "../../components/GamificationButton";
import { useDarkTheme } from "../../hooks/UseDarkTheme";

const Dashboard = () => {
  const { period, subpage } = useParams();
  const selectedPeriod = period || "today";
  const selectedSubpage = subpage || "generalOverview";
  const { darkTheme } = useDarkTheme();

  return (
    <section className="p-6">
      <div className="relative m-auto flex w-full max-w-7xl flex-col items-center gap-6">
        <div
          className={`flex gap-3 rounded-xl border border-gray-300 px-2 py-1 ${
            darkTheme ? "bg-surface-dark" : "bg-surface-light"
          }`}
        >
          <Link
            to={`/today/${selectedSubpage}`}
            className={`cursor-pointer rounded-xl px-5 py-1 text-[16px] font-medium hover:text-primary-dark  hover:bg-blue-600 ${
              selectedPeriod === "today"
                ? "bg-[#875AF2] text-primary-dark"
                : darkTheme
                ? "text-primary-dark"
                : "text-primary-light"
            }`}
          >
            Hoje
          </Link>
          <Link
            to={`/week/${selectedSubpage}`}
            className={`cursor-pointer rounded-xl px-5 py-1 text-[16px] font-medium text-gray-900 hover:bg-blue-400 hover:text-primary-dark ${
              selectedPeriod === "week"
                ? "bg-[#875AF2] text-primary-dark"
                : darkTheme
                ? "text-primary-dark"
                : "text-primary-light"
            }`}
          >
            Semana
          </Link>
          <Link
            to={`/month/${selectedSubpage}`}
            className={`cursor-pointer rounded-xl px-5 py-1 text-[16px] font-medium hover:bg-blue-400 hover:text-primary-dark  ${
              selectedPeriod === "month"
                ? "bg-[#875AF2] text-primary-dark"
                : darkTheme
                ? "text-primary-dark"
                : "text-primary-light"
            }`}
          >
            Mês
          </Link>
        </div>

        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <ProgressCard
            title="Pomodoros"
            total={8}
            completed={5}
            icon="bi bi-stopwatch"
          />
          <ProgressCard
            title="Tarefas"
            total={7}
            completed={3}
            icon="bi bi-list-task"
          />
          <ProgressCard
            title="Horas de Estudo"
            completed={5}
            icon="bi bi-clock"
          />
          <ProgressCard
            title="Humor Médio"
            total={5}
            completed={4.8}
            icon="bi bi-emoji-laughing"
          />
        </div>

        <div className="flex w-full flex-col gap-6">
          <div className="grid grid-cols-4 gap-2">
            <Link
              to={`/${selectedPeriod}/generalOverview`}
              className={`flex cursor-pointer items-center justify-center rounded-2xl px-5 py-1 text-center text-xs font-medium ${
                darkTheme
                  ? "text-muted-dark hover:bg-surface-dark"
                  : "text-muted-light hover:bg-surface-light"
              }  sm:text-sm`}
            >
              Visão Geral
            </Link>
            <Link
              to={`/${selectedPeriod}/tasksPreview`}
              className={`flex cursor-pointer items-center justify-center rounded-2xl px-5 py-1 text-center text-xs font-medium ${
                darkTheme
                  ? "text-muted-dark hover:bg-surface-dark"
                  : "text-muted-light hover:bg-surface-light"
              }  sm:text-sm`}
            >
              Tarefas
            </Link>
            <Link
              to={`/${selectedPeriod}/schedulePreview`}
              className={`flex cursor-pointer items-center justify-center rounded-2xl px-5 py-1 text-center text-xs font-medium ${
                darkTheme
                  ? "text-muted-dark hover:bg-surface-dark"
                  : "text-muted-light hover:bg-surface-light"
              }  sm:text-sm`}
            >
              Cronograma
            </Link>
            <Link
              to={`/${selectedPeriod}/communityPreview`}
              className={`flex cursor-pointer items-center justify-center rounded-2xl px-5 py-1 text-center text-xs font-medium ${
                darkTheme
                  ? "text-muted-dark hover:bg-surface-dark"
                  : "text-muted-light hover:bg-surface-light"
              }  sm:text-sm`}
            >
              Comunidade
            </Link>
          </div>

          {selectedSubpage === "generalOverview" ? <GeneralOverview /> : null}
          {selectedSubpage === "tasksPreview" ? <TasksPreview /> : null}
          {selectedSubpage === "schedulePreview" ? <SchedulePreview /> : null}
          {selectedSubpage === "communityPreview" ? <CommunityPreview /> : null}
        </div>

        <GamificationButton />
      </div>
    </section>
  );
};

export default Dashboard;
