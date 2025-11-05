import type React from "react";
import { useDarkTheme } from "../../../hooks/UseDarkTheme";
import type { MoodOption } from "../interfaces";

interface MoodSelectorProps extends MoodOption {
  moodSelected: MoodOption | null;
  setMoodSelected: React.Dispatch<React.SetStateAction<MoodOption | null>>;
}

const MoodSelector = ({
  label,
  icon,
  color,
  id,
  moodSelected,
  setMoodSelected,
}: MoodSelectorProps) => {
  const { darkTheme } = useDarkTheme();
  return (
    <div
      className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 p-6 ${
        darkTheme
          ? "bg-card-dark text-muted-dark border-gray-500"
          : "bg-card-light text-muted-light border-gray-200"
      }`}
      style={
        moodSelected?.id === id
          ? {
              backgroundColor: color + "33",
              borderColor: color,
              color: color,
            }
          : {}
      }
      onClick={() => {
        setMoodSelected({ id, label, icon, color });
      }}
    >
      <i className={`${icon} text-2xl sm:text-3xl`} />
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
};

export default MoodSelector;
