import QuickActions from "./QuickActions";
import RecentAchievements from "./RecentAchievements";

const GeneralOverview = () => {
  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <QuickActions />
      <RecentAchievements />
    </section>
  );
};

export default GeneralOverview;
