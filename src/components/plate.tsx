import classNames from "classnames";
import { useTheme } from "../singletons/theme-provider/use-theme";
import { themeService } from "../singletons/theme-provider/theme-service";
import { useState } from "react";

export const Plate = () => {
  const [themeString, setThemeString] = useState("light");
  const { theme } = useTheme();
  themeService.subscribe((theme) => setThemeString(theme));

  return (
    <div
      className={classNames({
        "bg-black text-white": theme === "dark",
        "bg-white text-black": theme === "light",
      })}
    >
      <div className="plate-content">Plate Content ({themeString})</div>
    </div>
  );
};
