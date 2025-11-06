import ProgressBar from "../../../components/ProgressBar";
import { useDarkTheme } from "../../../hooks/UseDarkTheme";

interface TaskPreviewItemProps {
  title: string;
  priotity: string;
  matter: string;
  day: string;
  hour: string;
  progress: number;
}

const TaskPreviewItem = ({
  title,
  priotity,
  matter,
  day,
  hour,
  progress,
}: TaskPreviewItemProps) => {
  const { darkTheme } = useDarkTheme();

  return (
    <div
      className={`flex flex-col gap-2 rounded-2xl border border-gray-300 px-5 py-2 ${
        darkTheme ? "bg-dark" : "bg-light"
      }`}
    >
      <div className="flex gap-3 items-center justify-between">
        <p
          className={`${
            darkTheme ? "text-primary-dark" : "text-primary-light"
          } max-w-64 font-medium text-sm lg:text-base`}
        >
          {title}
        </p>
        <div className=" h-4 items-center rounded-2xl bg-red-600 px-4 text-xs font-medium text-primary-dark">
          {priotity}
        </div>
      </div>
      <div
        className={`${
          darkTheme ? "text-muted-dark" : "text-muted-light"
        } flex gap-4 text-sm `}
      >
        <p className="flex gap-2 text-xs lg:text-sm">
          <i className="bi bi-book"></i> {matter}
        </p>
        <p className="flex gap-2">
          <i className="bi bi-calendar"></i> {day}
        </p>
        <p className="flex gap-2">
          <i className="bi bi-clock"></i> {hour}
        </p>
      </div>
      <div className="flex flex-col gap-1.5">
        <div
          className={`${
            darkTheme ? "text-muted-dark" : "text-muted-light"
          } flex justify-between text-xs`}
        >
          <p>Progesso</p>
          <p>{progress}%</p>
        </div>
        <ProgressBar percentage={50} />
      </div>
    </div>
  );
};

export default TaskPreviewItem;
