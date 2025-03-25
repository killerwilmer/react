import "./App.css";
import { ThemeProvider } from "./componets/Context/ThemeContext";
import { ThemeButton } from "./componets/ThemeButton/ThemeButton";

function App() {
  return (
    <ThemeProvider>
      <ThemeButton />
    </ThemeProvider>
  );
}

export default App;
