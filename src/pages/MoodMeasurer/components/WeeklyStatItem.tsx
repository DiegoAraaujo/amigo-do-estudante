import { useDarkTheme } from "../../../hooks/UseDarkTheme";

interface WeeklyStatItemProps {
  label: string;
  value: string | number;
  icon: string;
  color: string;
}

const WeeklyStatItem = ({ label, value, icon, color }: WeeklyStatItemProps) => {
  const { darkTheme } = useDarkTheme();

  return (
    <div
      className={`flex items-center rounded-xl px-6 py-3 border ${
        darkTheme
          ? "bg-card-dark border-outline-dark"
          : "bg-card-light border-outline-light"
      }`}
    >
      <div className="flex-1">
        <p
          className={`${
            darkTheme ? "text-muted-dark" : "text-muted-light"
          } text-sm`}
        >
          {label}
        </p>
        <p
          className="text-xl font-bold text-[#875AF2] sm:text-2xl"
          style={{ color: color }}
        >
          {value}
        </p>
      </div>
      <i
        className={`${icon} text-3xl text-[#875AF2]`}
        style={{ color: color }}
      />
    </div>
  );
};

export default WeeklyStatItem;
