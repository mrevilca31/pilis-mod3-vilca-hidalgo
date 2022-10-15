import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TarjetasDeClimaContext } from "../../context/TarjetasDeClimaContext";
import { useForm } from "react-hook-form";
import "./CrearCard.css";

const CrearCard = () => {
  const { tarjetasDeClima, setTarjetasDeClima } = useContext(
    TarjetasDeClimaContext
  );
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const nuevaCard = {
      id: tarjetasDeClima.length + 1,
      name: data.cardName,
      latitud: data.latitud,
      longitud: data.longitud,
    };

    setTarjetasDeClima([...tarjetasDeClima, nuevaCard]);
    navigate("/");
  };

  return (
    <div className="sign-in-container">
      <span>Crear Nueva Tarjeta</span>
      <form className="card" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-form"
          type="text"
          placeholder="Nombre del sitio"
          {...register("cardName", {
            required: "Debe ingresar un nombre",
          })}
        />
        <p>{errors.cardName?.message}</p>

        <input
          className="input-form"
          type="text"
          placeholder="Latitud"
          {...register("latitud", {
            required: "Debe ingresar un valor de latitud",
          })}
        />
        <p>{errors.latitud?.message}</p>

        <input
          className="input-form"
          type="text"
          placeholder="Longitud"
          {...register("longitud", {
            required: "Debe ingresar un valor de longitud",
          })}
        />
        <p>{errors.longitud?.message}</p>

        <button className="btn-form" type="submit">
          Crear Tarjeta
        </button>
      </form>
      <Link className="nav-link" to="/">
        Volver al Inicio
      </Link>
    </div>
  );
};

export default CrearCard;
