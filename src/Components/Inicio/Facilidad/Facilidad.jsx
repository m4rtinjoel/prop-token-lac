import React from "react";
import "./Facilidad.css";

const Facilidad = (props) => {
  return (
    <>
      <div className="facilidad-facilidad-card">
        <img src={props.imagen} alt="" />
        <h5>{props.titulo}</h5>
        <p>{props.descripcion}</p>
      </div>
    </>
  );
};

export default Facilidad;
