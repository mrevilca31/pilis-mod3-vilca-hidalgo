import { Link } from "react-router-dom";

// Recibe los datos de una tarjeta del tiempo
const Card = ({ cardName, id }) => {
  return (
    <div className="card-cpntainer">
      <h3>Tarjetas</h3>
      <h4>Nombre: {cardName}</h4>
      <Link className="btn-see-more" to={`/card/${id}`}>
        Ver más
      </Link>
    </div>
  );
};

export default Card;
