import React, { useState } from "react";
import "./Header.css";
import Logo from "../../images/logo.jpeg";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hamburgerMenu = () => {
    setIsOpen(!isOpen);
    console.log("click");
  };
  return (
    <>
      <div className="header-container">
        <div class="navbar">
          <button
            class={`hamburger-button ${isOpen ? "open" : ""}`}
            id="hamburgerBtn"
            onClick={hamburgerMenu}
          >
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </button>
          <nav class={`nav-menu ${isOpen ? "open" : ""}`} id="navMenu">
            <div className="links">
              <a href="/">Inicio</a>
              <a href="/inmuebles">Inmuebles</a>
              <a href="#">Blog</a>
              <a href="#">Nosotros</a>
              <a href="#">Ayuda</a>
            </div>
          </nav>
        </div>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="links">
          <a href="/">Inicio</a>
          <a href="/inmuebles">Inmuebles</a>
          <a href="#">Blog</a>
          <a href="#">Nosotros</a>
          <a href="#">Ayuda</a>
        </div>
        <div className="acceder">
          <input type="button" value="Acceder" />
        </div>
      </div>
    </>
  );
};

export default Header;
