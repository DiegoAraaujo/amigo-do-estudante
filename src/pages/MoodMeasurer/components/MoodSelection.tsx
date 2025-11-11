import { useDarkTheme } from "../../../hooks/UseDarkTheme";
import MoodSelector from "./MoodSelector";
import moodOptions from "../../../data/moodOptions";
import type { MoodOption } from "../interfaces";
import type React from "react";

interface MoodSelectionProps {
  selectedMood: MoodOption | null;
  setSelectedMood: React.Dispatch<React.SetStateAction<MoodOption | null>>;
}

const MoodSelection = ({
  selectedMood,
  setSelectedMood,
}: MoodSelectionProps) => {
  const { darkTheme } = useDarkTheme();

  return (
    <div className="mb-6 flex flex-col gap-3">
      <h2
        className={`text-base font-medium ${
          darkTheme ? "text-primary-dark" : "text-primary-light"
        }`}
      >
        Escolha seu humor
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {moodOptions.map((mood) => (
          <MoodSelector
            key={mood.id}
            id={mood.id}
            label={mood.label}
            icon={mood.icon}
            color={mood.color}
            moodSelected={selectedMood}
            setMoodSelected={setSelectedMood}
          />
        ))}
      </div>
    </div>
  );
};

export default MoodSelection;
