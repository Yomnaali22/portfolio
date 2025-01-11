import { useState, useEffect, createContext } from "react";

export const context = createContext({ toggle: () => {}, theme: false });
interface ThemeProviderProps {
  children: React.ReactNode;
}
const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      return storedTheme ? JSON.parse(storedTheme) : false; // Handle null case
    }
    return false; // Default value for server-side rendering
  });
  // toggle function
  const toggle = () => {
    setTheme(!theme);
    localStorage.setItem("theme", JSON.stringify(!theme));
  };

  useEffect(() => {
    // Remove existing theme classes
    localStorage.setItem("theme", JSON.stringify(theme));
    document
      .querySelector("html")
      ?.classList.remove("dark-theme", "light-theme");

    // Add the appropriate theme class
    if (!theme) {
      document.querySelector("html")?.classList.add("dark-theme");
    } else {
      document.querySelector("html")?.classList.add("light-theme");
    }
  }, [theme]);

  return (
    <context.Provider value={{ toggle, theme }}>{children}</context.Provider>
  );
};

export default ThemeProvider;
