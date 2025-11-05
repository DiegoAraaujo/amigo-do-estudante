import { useContext } from "react";
import { DarkContext } from "../context/DarkTheme";

export const useDarkTheme = () => {
  const context = useContext(DarkContext);

  if (!context) {
    throw new Error("useDarkTheme must be used inside a <DarkThemeProvider>");
  }

  return context;
};
