"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

/**
 * Enum for available theme names.
 */
enum ThemeName {
  Light = "light",
  Dark = "dark",
}

/**
 * Interface defining the structure of a theme.
 */
interface Theme {
  backgroundTheme: ThemeName;
  backgroundColor: string;
  headlinesFontColor: string;
  sectionFontColor: string;
  transition: string;
}

/**
 * Light theme definition.
 */
const lightTheme: Theme = {
  backgroundTheme: ThemeName.Light,
  backgroundColor: "#F6F4F6",
  headlinesFontColor: "#03045E",
  sectionFontColor: "#5E5652",
  transition: "background-color 1s ease, color 1s ease",
};

/**
 * Dark theme definition.
 */
const darkTheme: Theme = {
  backgroundTheme: ThemeName.Dark,
  backgroundColor: "#050507",
  headlinesFontColor: "#DFD9DB",
  sectionFontColor: "#D6B9AD",
  transition: "background-color 1s ease, color 1s ease",
};

/**
 * Context for providing the theme to components.
 */
const ThemeContext = createContext<
  { theme: Theme; toggleTheme: () => void } | undefined
>(undefined);

/**
 * Provider component for managing and providing the theme.
 * @param {object} props - The component's props.
 * @param {ReactNode} props.children - The children to be rendered within the provider's scope.
 */
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(darkTheme);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedThemeName = localStorage.getItem(
        "themeName"
      ) as ThemeName | null;
      if (storedThemeName) {
        setTheme(storedThemeName === ThemeName.Light ? lightTheme : darkTheme);
      }
    }
  }, []);

  /**
   * Toggles the theme between light and dark mode.
   * Persists the selected theme in local storage.
   */
  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newThemeName =
        prevTheme.backgroundTheme === ThemeName.Dark
          ? ThemeName.Light
          : ThemeName.Dark;
      if (typeof window !== "undefined") {
        localStorage.setItem("themeName", newThemeName);
      }
      return newThemeName === ThemeName.Light ? lightTheme : darkTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * A custom hook for accessing the theme context.
 * @returns {object} The theme context, containing the current theme and the toggleTheme function.
 * @throws {Error} If the hook is used outside of a ThemeProvider.
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
