import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { useContext } from "react";
import { TarjetasDeClimaContext } from "../../context/TarjetasDeClimaContext";

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
    <div className="card-cpntainer">
      <h3>Tarjetas</h3>
      <h4>Nombre: {cardName}</h4>
      <Link className="btn-see-more" to={`/card/${id}`}>
        Ver más
      </Link>
      <div className="fav" onClick={handleDelete}>
        <FaRegTrashAlt />
      </div>
    </div>
  );
};

export default Card;
