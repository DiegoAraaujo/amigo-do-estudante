import { useDarkTheme } from "../hooks/UseDarkTheme";

interface NavigationItemProps {
  icon: string;
  title: string;
  description?: string;
}

const NavigationItem = ({ icon, title, description }: NavigationItemProps) => {
  const { darkTheme } = useDarkTheme();

  return (
    <div className="group/item flex cursor-pointer items-center gap-4 rounded-2xl px-4 py-2 transition-colors duration-200 hover:bg-menuHighlightColor">
      <i
        className={`${icon} text-xl group-hover/item:text-white ${
          darkTheme ? "text-primary-dark" : "text-primary-light"
        }`}
      />
      <div className="flex flex-col gap-0.5">
        <p
          className={`font-medium ${
            darkTheme ? "text-primary-dark" : "text-primary-light"
          } group-hover/item:text-white`}
        >
          {title}
        </p>
        {description ? (
          <p
            className={`text-xs ${
              darkTheme ? "text-muted-dark" : "text-muted-light"
            } group-hover/item:text-gray-200`}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default NavigationItem;
