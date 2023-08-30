import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <>
      <div className="card-container">
        <img src={props.imagen} alt="" />
        <h6>{props.titulo}</h6>
        <p>{props.descripcion}</p>
      </div>
    </>
  );
}
export default Card;
