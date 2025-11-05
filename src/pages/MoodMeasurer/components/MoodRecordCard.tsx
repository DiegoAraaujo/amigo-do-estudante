import MoodFactorTag from "./MoodFactorTag";
import { useDarkTheme } from "../../../hooks/UseDarkTheme";

interface MoodRecordCardProps {
  date: string;
  note: string;
  mood: string;
  factors: string[];
}

const MoodRecordCard = ({ date, note, mood, factors }: MoodRecordCardProps) => {
  const { darkTheme } = useDarkTheme();

  return (
    <div
      className={`flex flex-col gap-4 rounded-xl p-5 ${darkTheme ? "bg-card-dark" : "bg-card-light"}`}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-300">
          <i className="bi bi-emoji-sunglasses text-2xl" />
        </div>
        <div>
          <p
            className={`text-base font-medium sm:text-lg ${darkTheme ? "text-primary-dark" : "text-primary-light"}`}
          >
            {mood}
          </p>
          <p
            className={`text-sm ${darkTheme ? "text-muted-dark" : "text-muted-light"}`}
          >
            {date}
          </p>
        </div>
      </div>
      <p
        className={`rounded-xl p-3 text-sm shadow-xs ${darkTheme ? "bg-dark text-muted-dark" : "bg-light text-muted-light"}`}
      >
        "{note}"
      </p>
      <div className="flex gap-4">
        {factors.map((factor, index) => {
          return <MoodFactorTag tag={factor} key={index} />;
        })}
      </div>
    </div>
  );
};

export default MoodRecordCard;
