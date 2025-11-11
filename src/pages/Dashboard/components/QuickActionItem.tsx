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
      className={`flex cursor-pointer justify-between rounded-xl   py-2 px-6 transition-colors border group ${
        darkTheme
          ? "bg-card-dark  border-outline-dark"
          : "bg-card-light border-outline-light"
      }`}
      style={{ backgroundColor: hover ? hoverColor : "" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`flex gap-3 ${
          darkTheme ? "text-primary-dark" : "text-primary-light"
        }`}
      >
        <i className={`${icon} text-[16px] group-hover:text-primary-dark`} />
        <p className="text-[16px] font-medium group-hover:text-primary-dark">
          {action}
        </p>
      </div>
      <i
        className={`${
          darkTheme ? "text-primary-dark" : "text-primary-light"
        } bi bi-arrow-right text-[16px] group-hover:text-primary-dark group-hover:translate-x-3  transition-translate duration-300`}
      ></i>
    </div>
  );
};

export default QuickActionItem;
