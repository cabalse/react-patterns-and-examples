import { createContext } from "react";
import type { ThemeContextType } from "./theme-provider";

export const ThemeContext = createContext<ThemeContextType | null>(null);
