import React from "react";
import "./Imagen.css";
import hede from "../../../images/header.png";

const Imagen = () => {
  return (
    <div className="imaheader">
      <div className="image-container">
        <img src={hede} alt="header" className="scalable-image" />
        <h1 className="image-text">
          Tokenizacion <br />
          Inmobiliaria
        </h1>
      </div>
    </div>
  );
};

export default Imagen;
