import DetailedProgress from "./DetailedProgress";
import QuickActions from "./QuickActions";
import RecentAchievements from "./RecentAchievements";

const GeneralOverview = () => {
  return (
    <section className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <QuickActions />
        <RecentAchievements />
      </div>
      <DetailedProgress />
    </section>
  );
};

export default GeneralOverview;
