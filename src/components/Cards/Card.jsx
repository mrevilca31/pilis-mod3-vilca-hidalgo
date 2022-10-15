import { Link } from "react-router-dom";
import "./Cards.css"

// Recibe los datos de una tarjeta del tiempo
const Card = ({ cardName, id }) => {
  return (
   <section className="footer_container">
    <div className="card2">
      <h3>Tarjetas</h3>
      <h4>Nombre: {cardName}</h4>
      <Link className="nav-link" to={`/card/${id}`}>
        Ver más
      </Link>
    </div>
  </section>
  );
};

export default Card;
