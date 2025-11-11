import { useDarkTheme } from "../../../hooks/UseDarkTheme";

interface WellnessTipItemProps {
  text: string;
}

const WellnessTipItem = ({ text }: WellnessTipItemProps) => {
  const { darkTheme } = useDarkTheme();

  return (
    <div
      className={`border ${
        darkTheme
          ? "bg-card-dark text-primary-dark border-outline-dark"
          : "bg-card-light text-primary-light border-outline-light"
      } rounded-xl px-6 py-3 text-sm`}
    >
      {text}
    </div>
  );
};

export default WellnessTipItem;
