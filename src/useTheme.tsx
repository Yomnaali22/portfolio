"use client";
import { useState, useEffect } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(false);

  // toggle function
  const toggle = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    // Remove existing theme classes
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

  return { toggle, theme };
};

export default useTheme;
