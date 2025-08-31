import { AreWeConnected } from "./are-we-connected";
import { ThemeSwitcher } from "./theme-switcher";

export const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between">
      <h1>React Patterns and Examples</h1>
      <div>
        <ThemeSwitcher />
        <AreWeConnected />
      </div>
    </header>
  );
};
