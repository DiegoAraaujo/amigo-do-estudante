import { useDarkTheme } from "../../../hooks/UseDarkTheme";

interface AchievementItemProps {
  conquest: string;
  description: string;
  xp: number;
  icon: string;
}
const AchievementItem = ({
  conquest,
  description,
  xp,
  icon,
}: AchievementItemProps) => {
  const { darkTheme } = useDarkTheme();

  return (
    <div
      className={`border ${
        darkTheme
          ? "bg-card-dark border-outline-dark"
          : "bg-card-light border-outline-light"
      } flex items-center justify-between rounded-xl px-4 py-2`}
    >
      <div className="flex items-center gap-3">
        <div className={` ${darkTheme ? "bg-card-dark" : "bg-card-light"}`}>
          <i className={`${icon} text-[16px] text-blue-900`} />
        </div>
        <div>
          <p
            className={`text-sm font-medium ${
              darkTheme ? "text-primary-dark" : "text-primary-light"
            }`}
          >
            {conquest}
          </p>
          <p
            className={`text-xs ${
              darkTheme ? "text-muted-dark" : "text-muted-light"
            }  whitespace-normal break-words`}
          >
            {description}
          </p>
        </div>
      </div>
      <div
        className={`rounded-2xl  ${
          darkTheme
            ? "bg-card-dark text-muted-dark"
            : " bg-card-light text-muted-light"
        }`}
      >
        <p className="text-xs font-medium">+{xp} XP</p>
      </div>
    </div>
  );
};

export default AchievementItem;
