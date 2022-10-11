import logo from "./logo.svg";
import "./App.css";
import { getCardInfo } from "./service";
import Card from "./components/Cards/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card />
      </header>
    </div>
  );
}

export default App;
