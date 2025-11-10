import { useDarkTheme } from "../../../hooks/UseDarkTheme";
import ScheduleEmptyState from "./ScheduleEmptyState";

const ScheduleList = () => {
  const { darkTheme } = useDarkTheme();

  return (
    <div
      className={`${
        darkTheme ? "bg-surface-dark" : "bg-surface-light"
      } p-6 rounded-xl`}
    >
      <ScheduleEmptyState />
    </div>
  );
};

export default ScheduleList;
