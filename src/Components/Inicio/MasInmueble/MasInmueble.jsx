import React from "react";
import "./MasInmueble.css";

const MasInmueble = (props) => {
  return (
    <>
      <div className="contariner-inmuebles">
        <img src={props.imagen} alt="" />
        <div className="inmueble_principal">
          <h4>{props.ubicacion}</h4>
          <p>{props.precio} $</p>
        </div>
        <div className="ver-mas">
          <a href="">Ver más</a>
        </div>
      </div>
    </>
  );
};

export default MasInmueble;
