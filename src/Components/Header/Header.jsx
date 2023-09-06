import React, { useState } from "react";
import "./Header.css";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";

// Definición del componente funcional Header
const Header = () => {
  // Estado local para controlar si el menú está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar entre abrir y cerrar el menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header-container">
      {/* Logotipo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      {/* Enlaces de navegación en el encabezado */}
      <div className="header-items">
        <div className="linksI">
          <Link to="/">Inicio</Link>
          <Link to="/inmuebles">Inmuebles</Link>
          <Link to="/login">Verder & Comprar</Link>
          <Link to="/ayuda">Ayuda</Link>
        </div>
      </div>

      {/* Barra de navegación (visible en pantallas más pequeñas) */}
      <div className={`navbar ${isOpen ? "open" : ""}`}>
        <div className="header-items">
          <div className="links">
            <Link to="/">Inicio</Link>
            <Link to="/inmuebles">Inmuebles</Link>
            <Link to="/login">Vender & Comprar</Link>
            <Link to="ayuda">Ayuda</Link>
          </div>
        </div>
        <nav
          className={`hamburger-button ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </nav>

        {/* Menú desplegable */}
        <nav className={`nav-menu ${isOpen ? "open" : ""}`} id="navMenu">
          <div className="links">
            <Link to="/">Inicio</Link>
            <Link to="/inmuebles">Inmuebles</Link>
            <Link to="#">Blog</Link>
            <Link to="#">Nosotros</Link>
            <Link to="#">Ayuda</Link>
          </div>

          {/* Botón Acceder dentro del menú hamburguesa |  onClick={props.connectionWallet}*/}
          <div className={`acceder ${isOpen ? "hidden" : ""}`}>
            <Link to="/login"> Acceder </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
