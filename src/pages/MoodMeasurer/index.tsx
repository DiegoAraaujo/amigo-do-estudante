import { useParams } from "react-router-dom";

import MoodHistory from "./components/MoodHistory";
import MoodOverview from "./components/MoodOverview";
import MoodRegisterForm from "./components/MoodRegisterForm";
import StatsCard from "./components/StatsCard";
import MoodSubmenu from "./components/MoodSubmenu";

const MoodMeasurer = () => {
  const { subpage } = useParams();
  const selectedSubpage = subpage || "moodregisterform";

  const statsCards = [
    {
      label: "Total de registros",
      color: "#875AF2",
      icon: "bi bi-calendar",
      stats: "2",
    },
    {
      label: "Energia Média",
      color: "#F08B42",
      icon: "bi bi-battery",
      stats: "8/10",
    },
    {
      label: "Esta Semana",
      color: "#20DF66",
      icon: "bi bi-graph-up-arrow",
      stats: "3/7",
    },
    {
      label: "Sequência",
      color: "#EA5247",
      icon: "bi bi-trophy",
      labelIcon: "bi bi-fire",
      stats: "25",
    },
  ];

  return (
    <section>
      <div className="mb-6 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statsCards.map((card) => (
          <StatsCard
            key={card.label}
            color={card.color}
            label={card.label}
            icon={card.icon}
            labelIcon={card.labelIcon}
            stats={card.stats}
          />
        ))}
      </div>
      <MoodSubmenu selectedSubpage={selectedSubpage} />

      {selectedSubpage === "moodregisterform" && <MoodRegisterForm />}
      {selectedSubpage === "moodhistory" && <MoodHistory />}
      {selectedSubpage === "moodoverview" && <MoodOverview />}
    </section>
  );
};

export default MoodMeasurer;
