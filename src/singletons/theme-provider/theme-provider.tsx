import { useEffect, useState } from "react";
import { themeService } from "./theme-service";
import { ThemeContext } from "./theme-context";

export type ThemeContextType = {
  theme: string;
  setTheme: (newTheme: string) => void;
};

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setThemeState] = useState(themeService.getTheme());

  useEffect(() => {
    const unsubscribe = themeService.subscribe((newTheme: string) => {
      setThemeState(newTheme);
    });

    return unsubscribe;
  }, []);

  const contextValue: ThemeContextType = {
    theme,
    setTheme: (newTheme: string) => themeService.setTheme(newTheme),
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
