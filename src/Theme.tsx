"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

enum ThemeName {
  Light = "light",
  Dark = "dark",
}

interface Theme {
  backgroundTheme: ThemeName;
  backgroundColor: string;
  headlinesFontColor: string;
  sectionFontColor: string;
  transition: string;
}

const lightTheme: Theme = {
  backgroundTheme: ThemeName.Light,
  backgroundColor: "#F6F4F6",
  headlinesFontColor: "#03045E",
  sectionFontColor: "#5E5652",
  transition: "background-color 1s ease, color 1s ease",
};

const darkTheme: Theme = {
  backgroundTheme: ThemeName.Dark,
  backgroundColor: "#050507",
  headlinesFontColor: "#DFD9DB",
  sectionFontColor: "#D6B9AD",
  transition: "background-color 1s ease, color 1s ease",
};

const ThemeContext = createContext<
  { theme: Theme; toggleTheme: () => void } | undefined
>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const storedThemeName = localStorage.getItem("themeName") as ThemeName | null;
  const initialTheme =
    storedThemeName === ThemeName.Light ? lightTheme : darkTheme;

  const [theme, setTheme] = useState<Theme>(initialTheme);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newThemeName =
        prevTheme.backgroundTheme === ThemeName.Dark
          ? ThemeName.Light
          : ThemeName.Dark;
      localStorage.setItem("themeName", newThemeName);
      return newThemeName === ThemeName.Light ? lightTheme : darkTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
