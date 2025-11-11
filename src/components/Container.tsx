import React from "react";
import { useDarkTheme } from "../hooks/UseDarkTheme";
import Header from "./Header";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  const { darkTheme } = useDarkTheme();

  return (
    <div className={`${darkTheme ? "bg-dark" : "bg-light"} min-h-dvh `}>
      <Header />
      <main className="max-w-7xl w-full md:p-8 m-auto p-6">{children}</main>
    </div>
  );
};

export default Container;
