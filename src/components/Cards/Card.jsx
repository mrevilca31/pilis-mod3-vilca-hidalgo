import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { useContext } from "react";
import { TarjetasDeClimaContext } from "../../context/TarjetasDeClimaContext";
import "./Cards.css"


// Recibe los datos de una tarjeta del tiempo
const Card = ({ cardName, id }) => {
  const { tarjetasDeClima, setTarjetasDeClima } = useContext(
    TarjetasDeClimaContext
  );
  const handleDelete = () => {
    console.log("presionado");
    setTarjetasDeClima(tarjetasDeClima.filter((tarjeta) => tarjeta.id !== id));
  };

  return (
   <section className="footer_container">
    <div className="card2">
      <h3>Tarjetas</h3>
      <h4>Nombre: {cardName}</h4>
      <Link className="nav-link" to={`/card/${id}`}>
        Ver más
      </Link>
      <div className="fav" onClick={handleDelete}>
        <FaRegTrashAlt />
      </div>
    </div>
  </section>
  );
};

export default Card;
