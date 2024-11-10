"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
interface Theme {
  backgroundTheme: "light" | "dark";
  backgroundColor: string;
  headlinesFontColor: string;
  sectionFontColor: string;
  transition: string;
}

// Create a context for the theme
const ThemeContext = createContext<
  | {
      theme: Theme;
      toggleTheme: () => void;
    }
  | undefined
>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const darkTheme = {
    backgroundTheme: "dark",
    backgroundColor: "#050507",
    headlinesFontColor: "#DFD9DB",
    sectionFontColor: "#D6B9AD",
    transition: "background-color 1s ease, color 1s ease", // Add transition property
  };

  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    return theme.backgroundTheme === "dark"
      ? setTheme({
          backgroundTheme: "light",
          backgroundColor: "#F6F4F6",
          headlinesFontColor: "#03045E",
          sectionFontColor: "#5E5652",
          transition: "background-color 1s ease, color 1s ease", // Add transition property
        })
      : setTheme(darkTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme.backgroundTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
