import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TarjetasDeClimaContext } from "../../context/TarjetasDeClimaContext";
import { getCardInfo } from "../../service";

const VerCard = () => {
  const [cardInfo, setCardInfo] = useState([]);
  const [temperatura, setTemperatura] = useState([]);
  const { tarjetasDeClima } = useContext(TarjetasDeClimaContext);
  const { id } = useParams();
  const [card] = tarjetasDeClima.filter((card) => card.id === Number(id));

  useEffect(() => {
    getCardInfo(card.latitud, card.longitud)
      .then((data) => {
        setCardInfo(data);
        setTemperatura(data.current_weather.temperature);
        console.log(cardInfo);
        console.log(JSON.stringify(data));
        console.log(JSON.stringify(data.current_weather.temperature));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>{card.name}</div>
      <div>{card.latitud}</div>
      <div>{card.longitud}</div>
      <div>{cardInfo.timezone}</div>
      {/* {JSON.stringify(cardInfo.current_weather.temperature)} */}
      <div>{temperatura}</div>

      <Link className="btn-back" to="/">
        Volver al Inicio
      </Link>
    </>
  );
};

export default VerCard;
