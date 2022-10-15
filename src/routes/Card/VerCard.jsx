import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TarjetasDeClimaContext } from "../../context/TarjetasDeClimaContext";
import { getCardInfo } from "../../service";
import { FaHome } from "react-icons/fa";
import "./VerCard.css";

const VerCard = () => {
  const [cardInfo, setCardInfo] = useState([]);
  const [temperatura, setTemperatura] = useState([]);
  const [velocidad, setVelocidad] = useState([]);
  const { tarjetasDeClima } = useContext(TarjetasDeClimaContext);
  const { id } = useParams();
  const [card] = tarjetasDeClima.filter((card) => card.id === Number(id));

  useEffect(() => {
    getCardInfo(card.latitud, card.longitud)
      .then((data) => {
        setCardInfo(data);
        setTemperatura(data.current_weather.temperature);
        setVelocidad(data.current_weather.windspeed);
        // console.log(cardInfo);
        // console.log(JSON.stringify(data));
        // console.log(JSON.stringify(data.current_weather.temperature));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <h1 className="card-name">{card.name}</h1>
      <h2 className="card-info">Latitud: {card.latitud}</h2>
      <h2 className="card-info">Longitud: {card.longitud}</h2>
      <h2 className="card-info">Temperatura actual: {temperatura}°C</h2>
      <h2 className="card-info">Velocidad del viento: {velocidad} km/h</h2>

      <Link className="btn-back" to="/">
        <FaHome /> Volver al Inicio
      </Link>
    </div>
  );
};

export default VerCard;
