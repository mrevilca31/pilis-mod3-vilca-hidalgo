import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TarjetasDeClimaContext } from "../../context/TarjetasDeClimaContext";
import { getCardInfo } from "../../service";

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
    <>
      <h1>{card.name}</h1>
      <h2>Latitud: {card.latitud}</h2>
      <h2>Longitud: {card.longitud}</h2>
      <h2>Temperatura actual: {temperatura}°C</h2>
      <h2>Velocidad del viento: {velocidad} km/h</h2>

      <Link className="btn-back" to="/">
        Volver al Inicio
      </Link>
    </>
  );
};

export default VerCard;
