import React from "react";
import Inmueble from "./../Inmuebles/Inmueble";
import Casa1 from "./../../images/casa1.jpg";
import Casa2 from "./../../images/casa2.jpg";
import Casa3 from "./../../images/casa3.jpg";
import Casa4 from "./../../images/casa4.jpg";
import Casa5 from "./../../images/casa5.jpg";
import Casa6 from "./../../images/casa6.jpg";
import Indicador from "./../../images/indicator.png";

const InmuebleFinal = () => {
  return (
    <>
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
        <a href="#" className="ver-listado">
          paginación
        </a>
      </div>
    </>
  );
};

export default InmuebleFinal;
