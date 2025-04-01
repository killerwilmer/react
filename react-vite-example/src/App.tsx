import { ButtonTypes } from "./componets/ButtonTypes/ButtonTypes";
import "./App.css";

function App() {
  const handleClick = () => {
    alert("clicked");
  }

  return (
    <ButtonTypes onclick={handleClick} label="Click" />
  );
}

export default App;
