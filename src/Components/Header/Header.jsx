import React, { useState } from "react";
import "./Header.css";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
      <div className="header-container">
        <div className="logi">
          <img src={Logo} alt="logi" />
        </div>
        <div className="header-items">
          <div className="linksI">
            <Link className="enlace" to="/" onClick={closeMenu}>
              Inicio
            </Link>
            <Link className="enlace" to="/inmuebles" onClick={closeMenu}>
              Inmuebles
            </Link>
            <Link className="enlace" to="/login" onClick={closeMenu}>
              Vender
            </Link>
            <Link className="enlace" to="/login" onClick={closeMenu}>
              Comprar
            </Link>
            <Link className="enlace" to="/ayuda" onClick={closeMenu}>
              Ayuda
            </Link>
          </div>
        </div>
        <div className={`navbar ${isOpen ? "open" : ""}`}>
          <div className="header-items">
            <div className="links">
              <Link className="enlace" to="/" onClick={closeMenu}>
                Inicio
              </Link>
              <Link className="enlace" to="/inmuebles" onClick={closeMenu}>
                Inmuebles
              </Link>
              <Link className="enlace" to="/login" onClick={closeMenu}>
                Vender
              </Link>
              <Link className="enlace" to="/login" onClick={closeMenu}>
                Comprar
              </Link>
              <Link className="enlace" to="/ayuda" onClick={closeMenu}>
                Ayuda
              </Link>
            </div>
            <div className={`acceder ${isOpen ? "" : ""}`}>
              <Link className="btnacceder" to="/login">
                Acceder
              </Link>
            </div>
          </div>
          <div
            className={`hamburger-button ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <nav className={`nav-menu ${isOpen ? "open" : ""}`} id="navMenu">
            <div className="links">
              <Link className="enlace" to="/" onClick={closeMenu}>
                Inicio
              </Link>
              <Link className="enlace" to="/inmuebles" onClick={closeMenu}>
                Inmuebles
              </Link>
              <Link className="enlace" to="/login" onClick={closeMenu}>
                Vender
              </Link>
              <Link className="enlace" to="/login" onClick={closeMenu}>
                Comprar
              </Link>
              <Link className="enlace" to="/ayuda" onClick={closeMenu}>
                Ayuda
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
