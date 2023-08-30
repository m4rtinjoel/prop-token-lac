import React from "react";
import './Imgdeposito.css';
import depo from "../../images/casa1.png"

const Imgdeposito = () => {

    return (
        <div className="contenedor-principal">
            <div className="principal">
                <div className="imagen-con-texto">
                    <img src={depo} alt="prin" className="scalable-image" />
                    <h1 className="texto-superpuesto">Título y depósito en garantía por propiedad</h1>
                    <h1 className="texto-superpuesta">Cierre su próxima transacción inmobiliaria con </h1>
                    <h1 className="texto-superpueste">servicios de títulos y depósito de garantia.</h1>
                    <button className="texto-superpuesti">Empezar</button>
                    
                </div>
            </div>
        </div>
    )
};

export default Imgdeposito;

