import MoodDistributionCard from "./MoodDistributionCard";
import MoodFactorsCard from "./MoodFactorsCard";
import WeeklyOverviewCard from "./WeeklyOverviewCard";
import WellnessTipsSection from "./WellnessTipsSection";

const MoodOverview = () => {
  return (
    <section>
      <div className={`mb-6 grid gap-4 md:grid-cols-2`}>
        <MoodDistributionCard />

        <MoodFactorsCard />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <WeeklyOverviewCard />

        <WellnessTipsSection />
      </div>
    </section>
  );
};

export default MoodOverview;
