import DailyHistory from "./DailyHistory";
import OverviewStats from "./OverviewStats";
import ProductivityStats from "./ProductivityStats";

const PomodoroStatistics = () => {
  return (
    <section>
      <div className="mb-3 grid gap-6 lg:grid-cols-2">
        <OverviewStats />
        <ProductivityStats />
      </div>
      <DailyHistory />
    </section>
  );
};

export default PomodoroStatistics;
