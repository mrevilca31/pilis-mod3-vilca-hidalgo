import { useContext } from "react";
import { Link } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import Navbar from "../../components/Navbar/Navbar";
import { TarjetasDeClimaContext } from "../../context/TarjetasDeClimaContext";
import "./Home.css";

const Home = () => {
  const { tarjetasDeClima } = useContext(TarjetasDeClimaContext);

  return (
    <>
      <div>
        <Navbar />
        {/* <Link className="nav-link" to="/crearCard">
          Crear Tarjeta de Clima
        </Link>
        <br />
        <Link className="nav-link" to="/login">
          Registrarse
        </Link> */}
        <h1>Weather Cards</h1>

        <Cards cards={tarjetasDeClima} />
      </div>
    </>
  );
};

export default Home;
