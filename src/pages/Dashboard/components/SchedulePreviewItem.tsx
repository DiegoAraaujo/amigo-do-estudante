import { useDarkTheme } from "../../../hooks/UseDarkTheme";

interface SchedulePreviewItemProps {
  hour: string;
  matter: string;
  description: string;
  status: boolean;
}

const SchedulePreviewItem = ({
  hour,
  matter,
  description,
  status,
}: SchedulePreviewItemProps) => {
  const { darkTheme } = useDarkTheme();
  return (
    <div
      className={`flex items-center gap-10 rounded-2xl px-5 py-2  ${
        darkTheme ? "bg-dark" : "bg-light"
      }`}
    >
      <p className="text-sm font-medium text-green-500">{hour}</p>
      <div className="flex grow flex-col gap-1">
        <p
          className={`${
            darkTheme ? "text-primary-dark" : "text-primary-light"
          } text-sm font-medium`}
        >
          {matter}
        </p>
        <p
          className={`text-xs ${
            darkTheme ? "text-muted-dark" : "text-muted-light"
          }`}
        >
          {description}
        </p>
      </div>
      <i
        className={`${
          status
            ? "bi-check2-circle text-green-500"
            : darkTheme
            ? "bi bi-clock text-muted-dark"
            : "bi bi-clock text-muted-light"
        } text-lg`}
      ></i>
    </div>
  );
};

export default SchedulePreviewItem;
