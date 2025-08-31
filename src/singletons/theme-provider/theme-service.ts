class ThemeService {
  theme: string;
  listeners: Set<(theme: string) => void>;

  constructor() {
    this.theme = localStorage.getItem("theme") || "light";
    this.listeners = new Set();
  }

  getTheme() {
    return this.theme;
  }

  setTheme(newTheme: string) {
    this.theme = newTheme;
    localStorage.setItem("theme", newTheme);
    this.notifyListeners();
  }

  subscribe(listener: (theme: string) => void) {
    this.listeners.add(listener);

    return () => {
      this.listeners.delete(listener);
    };
  }

  notifyListeners() {
    this.listeners.forEach((listener) => listener(this.theme));
  }
}

export const themeService = new ThemeService();
