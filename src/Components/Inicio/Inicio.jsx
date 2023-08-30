import React from "react";

import Box from "./../../images/box.png";
import Wallet from "./../../images/wallet.png";
import Rendimiento from "./../../images/rendimientos.png";
import Venta from "./../../images/venta.png";
import Reinversion from "./../../images/reinversion.png";
import Casa1 from "./../../images/casa1.jpg";
import Casa2 from "./../../images/casa2.jpg";
import Casa3 from "./../../images/casa3.jpg";
import Casa4 from "./../../images/casa4.jpg";
import Casa5 from "./../../images/casa5.jpg";
import Casa6 from "./../../images/casa6.jpg";
import Indicador from "./../../images/indicator.png";
import Uno from "./../../images/1.png.png";
import Dos from "./../../images/2.png.png";
import Tres from "./../../images/3.png.png";

import Card from "./Card/Card";
import Inmueble from "../Inmuebles/Inmueble";
import Facilidad from "./Facilidad/Facilidad";
import MasInmueble from "./MasInmueble/MasInmueble";

import "./Inicio.css";

const Inicio = () => {
  return (
    <>
      <div className="container">
        <p>Invierte como los grandes gracias a la tecnología</p>
        <div className="card">
          <Card
            imagen={Box}
            titulo={"Búsqueda"}
            descripcion={"Seleccionamos las mejores oportunidades para vender."}
          />
          <Card
            imagen={Wallet}
            titulo={"Tokenización"}
            descripcion={
              "Tokenizamos tu propiedad  para que cualquier inversor pueda articipar."
            }
          />
          <Card
            imagen={Rendimiento}
            titulo={"Rendimiento"}
            descripcion={"Repartimos rendimientos mensuales del alquiler."}
          />
          <Card
            imagen={Venta}
            titulo={"Venta final"}
            descripcion={
              "Vendemos el inmueble en el plazo marcado y repartimos plusvalías"
            }
          />
          <Card
            imagen={Reinversion}
            titulo={"Reinversión"}
            descripcion={
              "Invierte tus rendimientos mensuales y multiplica el capital inicial invertido"
            }
          />
        </div>
        <div className="info-info">
          <p>
            Despreocúpate de todo proceso; búsqueda de inmuebles, firmas,
            bancos, reformas, búsqueda de inquilino, gestione el día a día
            PropToken LAC, lo hace todo por ti y tu tranquilida
          </p>
        </div>
      </div>
      <div className="inmueble-inmueble">
        <h2>Lista destacadas</h2>
        <h3>Una colección seleccionada de nuestras propiedades</h3>
        <div className="inmueble-inmueble_card">
          <Inmueble
            imagen={Casa1}
            ubicacion="El cuco, San Miguel"
            precio="56903"
            token="100"
            fecha_inicio="12/4/2023"
            indicador={Indicador}
            rendimiento="11"
            rendimiento_porce="11"
            renta="1200"
            extencion="1220"
          />
          <Inmueble
            imagen={Casa2}
            ubicacion="El cuco, San Miguel"
            precio="56903"
            token="100"
            fecha_inicio="12/4/2023"
            indicador={Indicador}
            rendimiento="11"
            rendimiento_porce="11"
            renta="1200"
            extencion="1220"
          />
          <Inmueble
            imagen={Casa3}
            ubicacion="El cuco, San Miguel"
            precio="56903"
            token="100"
            fecha_inicio="12/4/2023"
            indicador={Indicador}
            rendimiento="11"
            rendimiento_porce="11"
            renta="1200"
            extencion="1220"
          />
          <Inmueble
            imagen={Casa4}
            ubicacion="El cuco, San Miguel"
            precio="56903"
            token="100"
            fecha_inicio="12/4/2023"
            indicador={Indicador}
            rendimiento="11"
            rendimiento_porce="11"
            renta="1200"
            extencion="1220"
          />
          <Inmueble
            imagen={Casa5}
            ubicacion="El cuco, San Miguel"
            precio="56903"
            token="100"
            fecha_inicio="12/4/2023"
            indicador={Indicador}
            rendimiento="11"
            rendimiento_porce="11"
            renta="1200"
            extencion="1220"
          />
          <Inmueble
            imagen={Casa6}
            ubicacion="El cuco, San Miguel"
            precio="56903"
            token="100"
            fecha_inicio="12/4/2023"
            indicador={Indicador}
            rendimiento="11"
            rendimiento_porce="11"
            renta="1200"
            extencion="1220"
          />
          <Inmueble
            imagen={Casa6}
            ubicacion="El cuco, San Miguel"
            precio="56903"
            token="100"
            fecha_inicio="12/4/2023"
            indicador={Indicador}
            rendimiento="11"
            rendimiento_porce="11"
            renta="1200"
            extencion="1220"
          />
          <Inmueble
            imagen={Casa5}
            ubicacion="El cuco, San Miguel"
            precio="56903"
            token="100"
            fecha_inicio="12/4/2023"
            indicador={Indicador}
            rendimiento="11"
            rendimiento_porce="11"
            renta="1200"
            extencion="1220"
          />
        </div>
        <div className="ver-listado">
          <a href="">Ver listado</a>
        </div>
      </div>

      <div className="facilidad-facilidad">
        <h6>¿Qué tan fácil es invertir?</h6>
        <div className="facilidad-card-flex">
          <Facilidad
            imagen={Uno}
            titulo="Regístrate"
            descripcion="Sólo necesitas un email para entrar en un nuevo universo. A partir de ahí te ayudaremos en cada paso"
          />
          <Facilidad
            imagen={Dos}
            titulo="Selecciona el inmueble a invertir"
            descripcion="Diversifica tu portfolio invirtiendo en uno o varios inmuebles; la oferta de tokens varía; ¡algunos inmuebles duran pocos minutos!"
          />
          <Facilidad
            imagen={Tres}
            titulo="Adquiere tus tokens"
            descripcion="Una vez elijas tu inmueble, pued einvertir con cripto, guardo tus tokens e irás recibiendo tus rendimientos todos los meses"
          />
        </div>
      </div>
      <div className="mas-inmuebles">
        <MasInmueble imagen={Casa2} ubicacion="Chalatenago" precio="50,000" />
        <MasInmueble imagen={Casa2} ubicacion="Chalatenago" precio="50,000" />
        <MasInmueble imagen={Casa2} ubicacion="Chalatenago" precio="50,000" />
      </div>
    </>
  );
};

export default Inicio;
