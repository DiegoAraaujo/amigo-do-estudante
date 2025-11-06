import ProgressBar from "../../../components/ProgressBar";
import { useDarkTheme } from "../../../hooks/UseDarkTheme";

interface ProgressCardProps {
  title: string;
  total?: number;
  completed: number;
  icon: string;
}

const ProgressCard = ({ title, total, completed, icon }: ProgressCardProps) => {
  const { darkTheme } = useDarkTheme();

  return (
    <div
      className={`${
        darkTheme ? "bg-surface-dark" : "bg-surface-light"
      } flex w-full rounded-2xl px-5 py-8 transition-shadow duration-500 hover:shadow-md`}
    >
      <div className="flex flex-col gap-3">
        <p
          className={`text-sm font-medium ${
            darkTheme ? "text-muted-dark" : ""
          } text-muted-light`}
        >
          {title}
        </p>
        <p
          className={`text-3xl font-bold ${
            darkTheme ? "text-primary-dark" : "text-primary-light"
          }`}
        >
          {completed}
          {total ? (
            <span
              className={`${
                darkTheme ? "text-muted-dark" : "text-muted-light"
              } text-sm font-normal`}
            >
              /{total}
            </span>
          ) : null}
        </p>

        <ProgressBar percentage={50} />
      </div>
      <div className="flex grow items-center justify-end">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full ${
            darkTheme ? "bg-dark" : "bg-light"
          }`}
        >
          <i className={`${icon} text-2xl text-[#875AF2]`}></i>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
