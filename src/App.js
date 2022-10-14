import logo from "./logo.svg";
import "./App.css";
import { getCardInfo } from "./service";
import Card from "./components/Cards/Card";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home";
import CrearCard from "./routes/Card/CrearCard";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route index element={<Home />} />
        <Route path="/card/create" element={<CrearCard />} />
      </Routes> */}

      <CrearCard />
    </div>
  );
}

export default App;
