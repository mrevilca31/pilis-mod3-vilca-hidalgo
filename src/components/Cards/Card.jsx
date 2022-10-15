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
    
      <h4>Ubicacion: {cardName}</h4>
      <div className="botones">
        
          <Link className="nav-link" to={`/card/${id}`}>
          Ver más
          </Link>
        </div>

        <div className="nav-link" onClick={handleDelete}>
           <FaRegTrashAlt />Eliminar
         </div>
         
      
      
    </div>
  </section>
  );
};

export default Card;
