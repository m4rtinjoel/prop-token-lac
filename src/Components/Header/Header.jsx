
import React, { useState } from "react";
import "./Header.css";
import Logo from "../../images/logo.png";  


// Definición del componente funcional Header
const Header = (props) => {

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
            <a href="/">Inicio</a>
            <a href="/inmuebles">Inmuebles</a>
            <a href="#">Blog</a>
            <a href="#">Nosotros</a>
            <a href="#" >Ayuda</a>
          </div>
          </div>
          
      {/* Barra de navegación (visible en pantallas más pequeñas) */}
      <div className={`navbar ${isOpen ? "open" : ""}`}>
        <div className="header-items">
        <div className="links">
            <a href="/">Inicio</a>
            <a href="/inmuebles">Inmuebles</a>
            <a href="#">Blog</a>
            <a href="#">Nosotros</a>
            <a href="#">Ayuda</a>
          </div>
          </div>
        
      {/* Botón de hamburguesa para activar/desactivar el menú */}
        {/* <div className="acceder">
          <input type="button" value="Acceder" />
        </div> */}
      
        <navar className={`hamburger-button ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </navar>
        
        {/* Menú desplegable */}
        <nav className={`nav-menu ${isOpen ? "open" : ""}`} id="navMenu">
          <div className="links">
            <a href="/">Inicio</a>
            <a href="/inmuebles">Inmuebles</a>
            <a href="#">Blog</a>
            <a href="#">Nosotros</a>
            <a href="#">Ayuda</a>
          </div>

          {/* Botón Acceder dentro del menú hamburguesa */}
          <div className={`acceder ${isOpen ? "hidden" : ""}`}>
            <button  href="/login" onClick={props.connectionWallet} >Acceder</button>
          </div>
        </nav>
        </div>
        
    </div>
    
    
  );
};

export default Header;

