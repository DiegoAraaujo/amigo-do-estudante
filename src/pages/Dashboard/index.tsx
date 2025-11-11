import { useParams } from "react-router-dom";

import ProgressCard from "./components/ProgressCard";
import GeneralOverview from "./components/GeneralOverview";
import TasksPreview from "./components/TasksPreview";
import SchedulePreview from "./components/SchedulePreview";
import CommunityPreview from "./components/CommunityPreview";
import PeriodTabs from "./components/PeriodTabs";
import DashboardSubmenu from "./components/DashboardSubmenu";

const Dashboard = () => {
  const { period, subpage } = useParams();
  const selectedPeriod = period || "today";
  const selectedSubpage = subpage || "generalOverview";

  return (
    <section className="relative  flex  flex-col items-center gap-6">
      <PeriodTabs
        selectedPeriod={selectedPeriod}
        selectedSubpage={selectedSubpage}
      />

      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

      <div className="flex w-full flex-col gap-8">
        <DashboardSubmenu selectedPeriod={selectedPeriod} />

        {selectedSubpage === "generalOverview" ? <GeneralOverview /> : null}
        {selectedSubpage === "tasksPreview" ? <TasksPreview /> : null}
        {selectedSubpage === "schedulePreview" ? <SchedulePreview /> : null}
        {selectedSubpage === "communityPreview" ? <CommunityPreview /> : null}
      </div>
    </section>
  );
};

export default Dashboard;
