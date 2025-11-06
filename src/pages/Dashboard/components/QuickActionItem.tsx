import React from "react";
import { useDarkTheme } from "../../../hooks/UseDarkTheme";

interface QuickActionItemProps {
  action: string;
  icon: string;
  hoverColor: string;
}

const QuickActionItem = ({
  action,
  icon,
  hoverColor,
}: QuickActionItemProps) => {
  const [hover, setHover] = React.useState(false);
  const { darkTheme } = useDarkTheme();

  return (
    <div
      className={`flex cursor-pointer justify-between rounded-xl   py-2 px-5 transition-colors hover:text-primary-dark ${
        darkTheme ? "bg-dark" : "bg-light"
      }`}
      style={{ backgroundColor: hover ? hoverColor : "" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={`flex gap-3 ${darkTheme ? "text-primary-dark" : ""}`}>
        <i className={`${icon} text-[16px]`} />
        <p className="text-[16px] font-medium">{action}</p>
      </div>
      <i
        className={`${
          darkTheme ? "text-primary-dark" : "text-primary-light"
        } bi bi-arrow-right text-[16px]`}
      ></i>
    </div>
  );
};

export default QuickActionItem;
