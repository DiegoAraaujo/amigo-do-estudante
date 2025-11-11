import { Link, useParams } from "react-router-dom";
import { useDarkTheme } from "../../hooks/UseDarkTheme";

import MoodHistory from "./components/MoodHistory";
import MoodOverview from "./components/MoodOverview";
import MoodRegisterForm from "./components/MoodRegisterForm";
import StatsCard from "./components/StatsCard";

const MoodMeasurer = () => {
  const { subpage } = useParams();
  const selectedSubpage = subpage || "moodregisterform";
  const { darkTheme } = useDarkTheme();

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
      <div
        className={`mb-6 grid w-full grid-cols-3 ${
          darkTheme ? "bg-surface-dark" : "bg-surface-light"
        } rounded-xl px-6 py-2`}
      >
        <Link
          to="/moodmeasurer/moodregisterform"
          className={`flex cursor-pointer items-center justify-center rounded-md px-6 ${
            darkTheme ? "text-muted-dark" : "text-muted-light"
          } py-2 text-sm font-medium ${
            selectedSubpage === "moodregisterform"
              ? darkTheme
                ? "bg-card-dark"
                : "bg-card-light"
              : ""
          } text-center`}
        >
          Registro
        </Link>
        <Link
          to="/moodmeasurer/moodhistory"
          className={`flex cursor-pointer items-center justify-center rounded-md px-6 ${
            darkTheme ? "text-muted-dark" : "text-muted-light"
          } py-2 text-sm font-medium ${
            selectedSubpage === "moodhistory"
              ? darkTheme
                ? "bg-card-dark"
                : "bg-card-light"
              : ""
          } text-center`}
        >
          Historico
        </Link>
        <Link
          to="/moodmeasurer/moodoverview"
          className={`flex cursor-pointer items-center justify-center rounded-md ${
            darkTheme ? "text-muted-dark" : "text-muted-light"
          } px-6 py-2 text-sm font-medium ${
            selectedSubpage === "moodoverview"
              ? darkTheme
                ? "bg-card-dark"
                : "bg-card-light"
              : ""
          } text-center`}
        >
          Visão Geral
        </Link>
      </div>
      {selectedSubpage === "moodregisterform" && <MoodRegisterForm />}
      {selectedSubpage === "moodhistory" && <MoodHistory />}
      {selectedSubpage === "moodoverview" && <MoodOverview />}
    </section>
  );
};

export default MoodMeasurer;
