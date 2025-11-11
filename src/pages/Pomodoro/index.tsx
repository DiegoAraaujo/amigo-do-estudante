import { useParams } from "react-router-dom";
import PomodoroTimer from "./components/PomodoroTimer";
import PomodoroStatistics from "./components/PomodoroStatistics";
import PomodoroSettings from "./components/PomodoroSettings";
import PomodoroSubmenu from "./components/PomodoroSubmenu";

const index = () => {
  const { subpage } = useParams();
  const selectedSubPage = subpage || "timer";

  return (
    <section>
      <PomodoroSubmenu selectedSubPage={selectedSubPage} />

      {selectedSubPage === "timer" && <PomodoroTimer />}
      {selectedSubPage === "statistics" && <PomodoroStatistics />}
      {selectedSubPage === "settings" && <PomodoroSettings />}
    </section>
  );
};

export default index;
