import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavigationMenuDesktop from "./NavigationMenuDesktop";
import NavigationMenuMobile from "./NavigationMenuMobile";
import { useDarkTheme } from "../hooks/UseDarkTheme";
import UserDropdown from "./UserDropdown";

const Header = () => {
  const { darkTheme } = useDarkTheme();
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [dropDownVisible, setDropDownVisible] = useState<boolean>(false);

  return (
    <header
      className={`relative mb-6 ${
        darkTheme ? "bg-surface-dark" : "bg-surface-light"
      } px-6 sticky top-0 z-40`}
    >
      {dropDownVisible && (
        <div
          className="h-dvh w-full bg-dark/60 absolute left-0 top-0 z-50"
          onClick={() => {
            setDropDownVisible(false);
          }}
        ></div>
      )}
      <div className="m-auto flex w-full max-w-7xl items-center justify-between py-4">
        <div className="flex items-center gap-3 text-2xl">
          <i
            className={`bi bi-list cursor-pointer lg:hidden ${
              darkTheme ? "text-primary-dark" : "text-primary-light"
            }`}
            onClick={() => setMenuVisible(!menuVisible)}
          />

          <div className="cursor-pointer rounded-xl bg-gradient-to-bl from-[#A27FF4] to-[#B59AF6] px-2 py-1">
            <i className={`bi bi-mortarboard text-primary-dark text-2xl`} />
          </div>

          <h1
            className={`hidden text-lg font-bold md:block ${
              darkTheme ? "text-primary-dark" : "text-primary-light"
            }`}
          >
            Amigo do Estudante
          </h1>
        </div>

        <NavigationMenuDesktop />

        <div className="relative">
          <div
            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-4 border-[#D6C9F8] bg-gradient-to-bl from-[#A27FF4] to-[#B59AF6] font-medium text-white"
            onClick={() => {
              setDropDownVisible(!dropDownVisible);
            }}
          >
            AS
          </div>
          {dropDownVisible && (
            <UserDropdown setDropDownVisible={setDropDownVisible} />
          )}
        </div>
      </div>
      <AnimatePresence>
        {menuVisible && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuVisible(false)}
            />

            <motion.div
              className={`fixed top-0 left-0 z-50 h-full w-72 shadow-lg ${
                darkTheme ? "bg-dark" : "bg-light"
              }`}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 80 }}
            >
              <NavigationMenuMobile setMenuVisible={setMenuVisible} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
