import { Outlet } from "react-router-dom";
import { useDarkTheme } from "../hooks/UseDarkTheme";
import Header from "./Header";

const Container = () => {
  const { darkTheme } = useDarkTheme();

  return (
    <div className={`${darkTheme ? "bg-dark" : "bg-light"} min-h-dvh`}>
      <Header />
      <main className="max-w-7xl w-full md:p-8 m-auto p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Container;
