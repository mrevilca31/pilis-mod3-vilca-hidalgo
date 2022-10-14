import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home";
import CrearCard from "./routes/Card/CrearCard";
import VerCard from "./routes/Card/VerCard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/crearCard" element={<CrearCard />} />
        <Route path="/card/:id" element={<VerCard />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
