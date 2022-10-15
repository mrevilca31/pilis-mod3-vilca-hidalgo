import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./Login.css";

const Login = () => {
  const { setCurrentUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    localStorage.setItem("currentUser", JSON.stringify(data));
    setCurrentUser(data);
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login">
        <h1 className="texto">Ingresa con tu usuario y contraseña</h1>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input-form"
            type="text"
            placeholder="Nombre de usuario"
            {...register("username", {
              required: "Debe ingresar su nombre de usuario",
            })}
          />
          <p>{errors.username?.message}</p>
          <input
            className="input-form"
            type="password"
            placeholder="Contraseña"
            {...register("password", {
              required: "Debe ingresar su contraseña",
            })}
          />
          <p>{errors.password?.message}</p>
          <button className="btn-form" type="submit">
            Iniciar Sesión
          </button>
        </form>
        <br />
      </div>
    </div>
  );
};

export default Login;
