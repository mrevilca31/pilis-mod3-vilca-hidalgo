import { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    const userStored = localStorage.getItem("currentUser");
    if (userStored) {
      setCurrentUser(JSON.parse(userStored));
    }
  }, []);

  const handleSignOut = () => {
    setCurrentUser(null);
  };

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <div className="nav-links-container">
          {currentUser ? (
            <Link className="nav-link" to="/crearCard">
              Nueva Tarjeta
            </Link>
          ) : (
            <span className="nav-link">Nueva Tarjeta</span>
          )}

          {currentUser ? (
            <span className="nav-link" onClick={handleSignOut}>
              Cerrar Sesión
            </span>
          ) : (
            <Link className="nav-link sign-in" to="/login">
              Iniciar Sesión
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
