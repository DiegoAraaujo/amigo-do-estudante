import { useDarkTheme } from "../../../hooks/UseDarkTheme";

interface statsCardProps {
  label: string;
  labelIcon?: string;
  icon: string;
  color: string;
  stats: string;
}

const StatsCard = ({
  label,
  icon,
  color,
  labelIcon,
  stats,
}: statsCardProps) => {
  const { darkTheme } = useDarkTheme();

  return (
    <div
      className={`flex items-center justify-between gap-2 rounded-xl p-6 ${darkTheme ? "bg-card-dark" : "bg-white"}`}
    >
      <div>
        <p
          className={`text-sm ${darkTheme ? "text-muted-dark" : "text-muted-light"}`}
        >
          {label}
        </p>
        <div className="flex items-center gap-2">
          <p className="text-2xl font-bold" style={{ color: color }}>
            {stats}
          </p>
          {labelIcon ? (
            <i className={`${labelIcon} text-xl`} style={{ color: color }} />
          ) : null}
        </div>
      </div>
      <i className={`${icon} text-2xl`} style={{ color: color }}></i>
    </div>
  );
};

export default StatsCard;
