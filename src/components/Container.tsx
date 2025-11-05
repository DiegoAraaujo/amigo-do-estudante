import React from "react";
import { useDarkTheme } from "../hooks/UseDarkTheme";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  const { darkTheme } = useDarkTheme();

  return (
    <div className={`${darkTheme ? "bg-dark" : "bg-light"} min-h-dvh`}>
      {children}
    </div>
  );
};

export default Container;
