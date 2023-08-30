import React from "react";
import "./Information.css";
import Principal from "./../../../images/box.png";
import Vector from "./../../../images/box.png";
function Information() {
  return (
    <>
      <h1 className="titulo">
        Empoderando
        <strong> inversiones inmoviliarias</strong> a través de la Tokenización
      </h1>
      <div className="img-principal">
        <img src={Principal} alt="principal" />
      </div>
      <div className="info">
        <p>
          Miles de usuarios de cualquier parte de la región de El Salvador ganan
          dinero cada mes con Prop Token LAC, si ser expertos en tecnología o
          finanzas.
        </p>
        <div className="contenedor-info">
          <div className="contenedor">
            <img src={Vector} alt="vector" />
            <p>Invierte desde $100 la cantidad que quieras</p>
          </div>
          <div className="contenedor">
            <img src={Vector} alt="vector" />
            <p>Con dividendos mensuales y liquidez garantizada</p>
          </div>
          <div className="contenedor">
            <img src={Vector} alt="vector" />
            <p>En un mercado donde todos entendemos el inmobiliario</p>
          </div>
        </div>
        <div className="boton">
          <input type="button" value="Ver inmuebles" />
        </div>
      </div>
    </>
  );
}

export default Information;
