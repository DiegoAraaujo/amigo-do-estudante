import type React from "react";
import NavigationItem from "./NavigationItem";
import { Link } from "react-router-dom";
import { useDarkTheme } from "../hooks/UseDarkTheme";

interface NavigationMenuProps {
  setMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavigationMenuMobile = ({ setMenuVisible }: NavigationMenuProps) => {
  const { darkTheme } = useDarkTheme();

  return (
    <div className="px-6">
      <div className="flex justify-end py-2">
        <i
          className={`${
            darkTheme ? "text-primary-dark" : "text-primary-light"
          } bi bi-x cursor-pointer text-2xl hover:text-[#875AF2]`}
          onClick={() => setMenuVisible(false)}
        />
      </div>
      <div
        className={`${
          darkTheme ? "border-muted-dark" : "border-muted-light"
        } mb-6 flex flex-col gap-4 border-b py-6`}
      >
        <Link to="/" onClick={() => setMenuVisible(false)}>
          <NavigationItem icon="bi-columns-gap" title="Dashboard" />
        </Link>
      </div>

      <div className="mb-6">
        <p
          className={`mb-2 text-xs font-semibold ${
            darkTheme ? "text-muted-dark" : "text-muted-light"
          }`}
        >
          FERRAMENTAS DE ESTUDO
        </p>
        <Link to="/pomodoro" onClick={() => setMenuVisible(false)}>
          <NavigationItem
            icon="bi bi-stopwatch"
            title="Pomodoro"
            description="Técnica de foco"
          />
        </Link>
        <Link to="/planning" onClick={() => setMenuVisible(false)}>
          <NavigationItem
            icon="bi bi-calendar"
            title="Planejamento"
            description="Organize seus estudos"
          />
        </Link>
        <Link to="/materials" onClick={() => setMenuVisible(false)}>
          <NavigationItem
            icon="bi bi-collection"
            title="Matériais de estudo"
            description="Seus matériais pertinho de você"
          />
        </Link>
      </div>

      <div className="mb-6">
        <p
          className={`mb-2 text-xs font-semibold ${
            darkTheme ? "text-muted-dark" : "text-muted-light"
          }`}
        >
          BEM-ESTAR
        </p>
        <Link
          to="/moodmeasurer"
          onClick={() => {
            setMenuVisible(false);
          }}
        >
          <NavigationItem
            icon="bi bi-emoji-smile"
            title="Felizômetro"
            description="Monitore seu bem estar"
          />
        </Link>
        {/* <NavigationItem
          icon="bi bi-joystick"
          title="Gamificação"
          description="Conquiste suas recompensas"
        /> */}
      </div>

      <div>
        <p
          className={`mb-2 text-xs font-semibold ${
            darkTheme ? "text-muted-dark" : "text-muted-light"
          }`}
        >
          COMUNIDADE
        </p>
        <Link to="/community" onClick={() => setMenuVisible(false)}>
          <NavigationItem
            icon="bi bi-people-fill"
            title="Comunidade"
            description="Conecte-se"
          />
        </Link>
      </div>
    </div>
  );
};

export default NavigationMenuMobile;
