import React from "react";
import "./Perfil.css";

function Perfil() {
  return (
    <div>
      <h1>Registro de Perfil</h1>
      <form>
        <div className="campo">
          <label htmlFor="correo">Correo Electrónico:</label>
          <input
            type="email"
            id="correo"
            name="correo"
            placeholder="Ingrese su correo electrónico"
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="usuario">Usuario</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            placeholder="Ingrese su usuario"
            required
          />
        </div>

        <div className="check">
          <p>
            <input type="checkbox" id="miCasilla" name="miCasilla"></input>
            <label htmlFor="miCasilla">Acepto términos y condiciones</label>
          </p>
        </div>

        <div className="boton">
          <button type="submit">Acceder</button>
        </div>
      </form>
    </div>
  );
}

export default Perfil;
