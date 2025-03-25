import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme === "light" ? "white" : "#333",
        color: theme === "light" ? "#000" : "#FFF",
      }}
    >
      Change Theme
    </button>
  );
};

export { ThemeButton };
