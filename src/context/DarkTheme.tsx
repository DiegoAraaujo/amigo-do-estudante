import { createContext, useState, type ReactNode } from "react";

interface DarkContextType {
  darkTheme: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DarkContext = createContext<DarkContextType | undefined>(
  undefined,
);

export const DarkContextProvider = ({ children }: { children: ReactNode }) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  return (
    <DarkContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </DarkContext.Provider>
  );
};
