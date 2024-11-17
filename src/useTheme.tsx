"use client";
import { useState, useEffect } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(false);

  // toggle function

  const toggle = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    if (!theme) {
      document.querySelector("html")?.setAttribute("data-theme", "dark-theme");
    } else {
      document.querySelector("html")?.setAttribute("data-theme", "light-theme");
    }
  }, [theme]);

  return { toggle, theme };
};

export default useTheme;
