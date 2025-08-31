import { useTheme } from "../singletons/theme-provider/use-theme";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "dark" : "light"} theme
    </button>
  );
};
