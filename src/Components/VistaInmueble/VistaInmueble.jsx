import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './VistaInmueble.css';
import casa from '../../images/casa.jpg';
import token from '../../images/Datos.png';
import Descripcion from '../../images/Descripcion.png';
import Documentos from '../../images/Documentos.png';
import Localizacion from '../../images/Localizacion.png';
import finan from '../../images/finan.png';

const VistaInmueble = () => {
  const [infoVisible, setInfoVisible] = useState(false);
  const [infoTexto, setInfoTexto] = useState('');

  const mostrarInfo = (texto) => {
    setInfoTexto(texto);
    setInfoVisible(true);
  };

  const ocultarInfo = () => {
    setInfoVisible(false);
  };

  return (
    <div className="containera">
      <div className="carousel-container">
        <Carousel className="caru">
          <div className="mage">
            <img src={casa} alt="Imagen 1" />
            <p className="legend">Descripción de la imagen 1</p>
          </div>
          <div className="mage">
            <img src={casa} alt="Imagen 2" />
            <p className="legend">Descripción de la imagen 2</p>
          </div>
          <div className="mage">
            <img src={casa} alt="Imagen 3" />
            <p className="legend">Descripción de la imagen 3</p>
          </div>
          <div className="mage">
            <img src={casa} alt="Imagen 4" />
            <p className="legend">Descripción de la imagen 4</p>
          </div>
        </Carousel>
      </div>
      <div className="content-container">
        <div className="cardmueble">
          <h2>El Cuco, San Miguel.</h2>
          <div className="conp">
            <p className="cuco" style={{ display: 'inline', marginRight: '10px' }}>
              BUR-1
            </p>
            <p className="finan" style={{ display: 'inline' }}>
              FINANCIADO<img className="finans" src={finan} alt="Datos del token" />
            </p>
          </div>
          <div className="centro">
            <p className="precioreal" style={{ display: 'inline' }}>
              $ 56903
            </p>
          </div>
          <div className="precio-container">
            <div className="izquierda">
              <p className="precio">Precio Token</p>
              <br />
              <p className="precio">Rentabilidad de alquiler anual</p>
              <br />
              <p className="precio">Plusvalía tras venta</p>
              <br />
              <p className="precio">APY total</p>
              <br />
              <p className="precio">Inicio Renta</p>
              <br />
              <p className="precio">Rendimientos</p>
              <br />
            </div>
            <div className="derecha">
              <p className="precio">$ 99.99</p>
              <br />
              <p className="precio">$ 9.11%</p>
              <br />
              <p className="precio">$ 7.8%</p>
              <br />
              <p className="precio">13.005%</p>
              <br />
              <p className="precio">30/01/2023</p>
              <br />
              <p className="precio">6193.05</p>
              <br />
            </div>
          </div>
        </div>
        <div className="datosmostrar">
          <div className="enlace" onClick={() => mostrarInfo("Información de Descripción")}>
            <a href="">Descripción</a>
            <img className="token" src={Descripcion} alt="Descripción" />
          </div>
          <div className="enlace" onClick={() => mostrarInfo("Locación del activo")}>
            <a className='loca' href="https://www.google.com/maps/place/13%C2%B010'30.5%22N+88%C2%B006'39.8%22W/@13.174998,-88.120209,15z/data=!4m13!1m8!3m7!1s0x8f7ade1a2c6c32d9:0xde170765b8fa0e95!2sEl+Cuco!3b1!8m2!3d13.1743298!4d-88.1108325!16s%2Fg%2F1tfcd79x!3m3!8m2!3d13.175124!4d-88.111046?entry=ttu">
              Localización
            </a>
            <img className="token" src={Localizacion} alt="Localización" />
          </div>
          <div className="enlace" onClick={() => mostrarInfo("Información de Datos del Token")}>
            <a href="">Datos del token</a>
            <img className="token" src={token} alt="Datos del token" />
          </div>
          <div className="enlace" onClick={() => mostrarInfo("Información de Documentos")}>
            <a href="">Documentos</a>
            <img className="token" src={Documentos} alt="Documentos" />
          </div>
          {infoVisible && (
            <div className='hola'>
              <div className="info-container">
                <p>{infoTexto}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VistaInmueble;
