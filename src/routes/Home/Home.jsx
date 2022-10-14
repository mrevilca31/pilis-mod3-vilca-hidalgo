import { useContext } from "react";
import { Link } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import { TarjetasDeClimaContext } from "../../context/TarjetasDeClimaContext";

const Home = () => {
  const { tarjetasDeClima } = useContext(TarjetasDeClimaContext);

  return (
    <>
      <div>
        <Link className="nav-link" to="/crearCard">
          Crear Tarjeta de Clima
        </Link>
        <h1>Home</h1>
        <Cards cards={tarjetasDeClima} />
      </div>
    </>
  );
};

export default Home;
