import { useDarkTheme } from "../../../hooks/UseDarkTheme";
import ProgressItem from "./ProgressItem";

const DetailedProgress = () => {
  const { darkTheme } = useDarkTheme();

  return (
    <section>
      <div
        className={`${
          darkTheme ? "bg-surface-dark" : "bg-surface-light"
        } flex w-full flex-col gap-6 rounded-2xl  p-6`}
      >
        <div className="flex gap-4">
          <i className={`bi bi-bar-chart-fill text-xl  text-green-400`} />
          <p
            className={`${
              darkTheme ? "text-primary-dark" : "text-primary-light"
            } text-2xl font-semibold`}
          >
            Progresso Detalhado - Hoje
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-4">
          <ProgressItem />
          <ProgressItem />
          <ProgressItem />
          <ProgressItem />
        </div>
      </div>
    </section>
  );
};

export default DetailedProgress;
