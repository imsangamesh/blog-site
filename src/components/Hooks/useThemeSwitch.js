import { useEffect, useState } from "react";

const useThemeSwitch = () => {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const storageKey = "theme";
  const [mode, setMode] = useState("dark");

  const toggle = () => {
    const newMode = mode === "dark" ? "light" : "dark";

    if (newMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    setMode(newMode);
    window.localStorage.setItem(storageKey, newMode);
  };

  // either "localStorage-theme" or "system-theme"
  const getUserPreference = () => {
    const userPref = window.localStorage.getItem(storageKey);
    return (
      userPref ||
      (window.matchMedia(preferDarkQuery).matches ? "dark" : "light")
    );
  };

  useEffect(() => console.log(mode), [mode]);

  useEffect(() => {
    // updates theme on every RELOAD
    const handleChange = () => {
      const userMode = getUserPreference();

      if (mode !== userMode) {
        toggle(userMode); // "light-theme"
      } else {
        document.documentElement.classList.add("dark"); // "dark-theme"
      }
    };

    handleChange();

    // updating, whenever user changes their SYSTEM-THEME
    const mediaQuery = window.matchMedia(preferDarkQuery);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return [mode, toggle];
};

export default useThemeSwitch;
