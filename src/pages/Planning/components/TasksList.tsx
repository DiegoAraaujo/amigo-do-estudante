import { useDarkTheme } from "../../../hooks/UseDarkTheme";
import MyTasksEmptyState from "./MyTasksEmptyState";

const TasksList = () => {
  const { darkTheme } = useDarkTheme();
  return (
    <div
      className={`${
        darkTheme ? "bg-surface-dark" : "bg-surface-light"
      } p-6 rounded-xl`}
    >
      <MyTasksEmptyState />
    </div>
  );
};

export default TasksList;
