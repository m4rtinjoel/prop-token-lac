import React, { useState } from "react";
import "./SessionMenu.css";
import Logo from "../../images/logo.png";
import Menu from "../../images/menu1.png";

const SessionMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="primer-div">
            <div className="logo">
              <img src={Logo} alt="logo" />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 col-sm-12">
          <div className="segundo-div">
            <button className="imagen" onClick={toggleMenu}>
              <img src={Menu} alt="Menu" />
              <span className="texto-menu">Abrir Menu</span>
            </button>
            {menuVisible && (
              <div className="desplegable">
                <button className="menu-button">Crear Token</button>
                <button className="menu-button">Inmuebles</button>
                <button className="menu-button">Wallets</button>
                <button className="menu-button">Mis activos</button>
                <button className="menu-button">configuracion</button>
                <button className="menu-button">Cerrar Session</button>
              </div>
            )}
          </div>
        </div>

        <div className="col-md-8 col-sm-12">
          <div className="tercer-div"></div>
        </div>
      </div>
      <label className="terminos">@2023 PropToken Derechos Reservados</label>
    </div>
  );
};

export default SessionMenu;
