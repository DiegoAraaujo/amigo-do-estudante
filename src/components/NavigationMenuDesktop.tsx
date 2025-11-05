import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavigationItem from "./NavigationItem";
import { Link } from "react-router-dom";
import { useDarkTheme } from "../hooks/UseDarkTheme";

const NavigationMenuDesktop = () => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const { darkTheme } = useDarkTheme();

  return (
    <div className="hidden lg:flex">
      <Link
        to="/"
        className={`flex cursor-pointer items-center justify-center rounded-xl px-4 py-2 text-sm font-medium hover:bg-[#5AA6F2] hover:text-white ${darkTheme ? "text-primary-dark" : "text-primary-light"}`}
      >
        Dashboard
      </Link>

      <div
        className={`relative flex cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium hover:bg-[#6aadef]`}
        onMouseEnter={() => setHoveredMenu("estudo")}
        onMouseLeave={() => setHoveredMenu(null)}
      >
        <p
          className={`${darkTheme ? "text-primary-dark" : "text-primary-light"}`}
        >
          Estudo
        </p>
        <i
          className={`bi bi-chevron-down text-xs transition-transform duration-200 ${
            hoveredMenu === "estudo" ? "rotate-180 text-white" : ""
          } ${darkTheme ? "text-primary-dark" : "text-primary-light"}`}
        />

        <AnimatePresence>
          {hoveredMenu === "estudo" && (
            <motion.div
              className={`absolute top-10 z-50 w-[400px] rounded-xl border p-2 shadow-sm ${darkTheme ? "bg-card-dark border-muted-dark" : "bg-card-light border-muted-light"}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/pomodoro">
                <NavigationItem
                  icon="bi bi-calendar"
                  title="Pomodoro"
                  description="Técnica de foco"
                />
              </Link>
              <NavigationItem
                icon="bi bi-calendar"
                title="Planejamento"
                description="Organize seus estudos"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div
        className="relative flex cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium hover:bg-[#5AA6F2] hover:text-white"
        onMouseEnter={() => setHoveredMenu("bemestar")}
        onMouseLeave={() => setHoveredMenu(null)}
      >
        <p
          className={`${darkTheme ? "text-primary-dark" : "text-primary-light"}`}
        >
          Bem-estar
        </p>
        <i
          className={`bi bi-chevron-down text-xs transition-transform duration-200 ${
            hoveredMenu === "bemestar" ? "rotate-180 text-white" : ""
          } ${darkTheme ? "text-primary-dark" : "text-primary-light"}`}
        />

        <AnimatePresence>
          {hoveredMenu === "bemestar" && (
            <motion.div
              className={`absolute top-10 z-50 w-[400px] rounded-xl border p-2 shadow-lg ${darkTheme ? "bg-card-dark border-muted-dark" : "bg-card-light border-muted-light"}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <NavigationItem
                icon="bi bi-heart"
                title="Gamificação"
                description="Atividades para descompressão"
              />
              <Link to="moodmeasurer">
                <NavigationItem
                  icon="bi bi-emoji-smile"
                  title="Felizômetro"
                  description="Acompanhe seu bem-estar emocional"
                />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button
        className={`flex cursor-pointer items-center justify-center rounded-xl px-4 py-2 text-sm font-medium hover:bg-[#5AA6F2] hover:text-white ${darkTheme ? "text-primary-dark" : "text-primary-light"}`}
      >
        Comunidade
      </button>
    </div>
  );
};

export default NavigationMenuDesktop;
