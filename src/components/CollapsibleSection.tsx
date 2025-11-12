import type React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDarkTheme } from "../hooks/UseDarkTheme";

interface CollapsibleSectionProps {
  children: React.ReactNode;
}

const CollapsibleSection = ({ children }: CollapsibleSectionProps) => {
  const [sectionVisible, setSectionVisible] = useState<boolean>(true);
  const { darkTheme } = useDarkTheme();

  return (
    <div>
      <div className={``}>
        {!sectionVisible && (
          <button
            onClick={() => setSectionVisible(true)}
            className="animate-bounce cursor-pointer"
          >
            <i className="bi bi-caret-down-fill anim" />
          </button>
        )}
        {sectionVisible && (
          <button
            onClick={() => setSectionVisible(false)}
            className="animate-bounce cursor-pointer"
          >
            <i
              className={`${
                darkTheme ? "text-primary-dark" : "text-primary-light"
              } bi bi-caret-up-fill text-xl`}
            />
          </button>
        )}
      </div>

      <AnimatePresence>
        {sectionVisible && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0, y: -10 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CollapsibleSection;
