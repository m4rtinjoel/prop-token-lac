import React from "react";
import "./Imgdeposito.css";
import depo from "../../../images/casa1.png";

const Imgdeposito = () => {
  return (
    <div className="contenedor-principal">
      <div className="principal">
        <div className="imagen-con-texto">
          <img src={depo} alt="prin" className="scalable-image" />
          <h1 className="texto-superpuesto">
            Título y depósito en garantía por propiedad
          </h1>
          <h3 className="texto-superpuesta">
            Cierre su próxima transacción inmobiliaria con
          </h3>
          <h3 className="texto-superpueste">
            servicios de títulos y depósito de garantia.
          </h3>
        </div>
      </div>
      <a href="/login" className="texto-superpuesti">
        Empezar
      </a>
    </div>
  );
};

export default Imgdeposito;
