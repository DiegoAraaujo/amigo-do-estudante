import SessionHistory from "./SessionHistory";
import SummaryPanel from "./SummaryPanel";
import TimerPanel from "./TimerPanel ";

const PomodoroTimer = () => {
  return (
    <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
      <TimerPanel />

      <div className="flex flex-col gap-6">
        <SummaryPanel />

        <SessionHistory />
      </div>
    </div>
  );
};

export default PomodoroTimer;
