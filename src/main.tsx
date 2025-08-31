import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./app.tsx";
import { ThemeProvider } from "./singletons/theme-provider/theme-provider.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
