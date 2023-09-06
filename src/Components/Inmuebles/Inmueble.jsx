import React from "react";
import "./Inmueble.css";

const Inmueble = (props) => {
  return (
    <>
      <div className="contariner-inmuebles">
        <img src={props.imagen} alt="" />
        <div className="inmueble_principal">
          <h4>{props.ubicacion}</h4>
          <p>{props.precio} $</p>
        </div>
        <div className="inmueble_info_dato">
          <p>Precio token</p>
          <p>{props.token} $</p>
        </div>
        <div className="inmueble_info_dato">
          <p>Inicio renta</p>
          <p>{props.fecha_inicio}</p>
        </div>
        <div className="inmueble_info_dato">
          <p>
            Rendimiento total
            <br /> esperado
          </p>
          <div>
            <p>{props.rendimiento} $</p>
            <p>
              <img src={props.indicador} alt="" />
              {props.rendimiento_porce} %
            </p>
          </div>
        </div>
        <div className="inmueble_info_dato">
          <p>Precio renta</p>
          <p>{props.renta} $</p>
        </div>
        <div className="inmueble_info_dato">
          <p>Extención</p>
          <p>{props.extencion} m</p>
        </div>
        <a href="/login" className="ver-mas">
          Ver más
        </a>
      </div>
    </>
  );
};

export default Inmueble;
