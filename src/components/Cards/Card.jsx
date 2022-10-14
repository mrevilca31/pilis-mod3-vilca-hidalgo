import { useEffect, useState } from "react";
import { getCardInfo } from "../../service";

// Recibe los datos de una tarjeta del tiempo
const Card = () => {
  const [cardInfo, setCardInfo] = useState([]);
  useEffect(() => {
    const lat = -29.437501148031682;
    const long = -66.89722550531977;
    getCardInfo(lat, long)
      .then((data) => setCardInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="card-container">
      {console.log(cardInfo)}
      <h3>Tarjeta</h3>
      <div className="card">
        <h2>Nombre: Ver local storage</h2>
        <p>Latitud: {cardInfo.latitude}</p>
        <p>Longitud: {cardInfo.longitude}</p>
        {/* <p>
          Temperatura: {cardInfo.current_weather.temperature}°C comprobar
          unidades
        </p>
        <p>
          Velocidad del Viento: {cardInfo.current_weather.windspeed}km/h
          comprobar unidades
        </p> */}
      </div>
    </div>
  );
};

export default Card;
