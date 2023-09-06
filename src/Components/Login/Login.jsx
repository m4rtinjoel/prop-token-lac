import React from "react";
import "./Login.css";

const Login = (props) => {
  return (
    <section className="contendor-contenedor-login">
      <div className="contenedor-login">
        <h3>Acceder</h3>
        <form action="" class="formulario-login">
          <div>
            <label htmlFor="">Correo eléctronico</label>
            <input type="email" name="" id="" class="input-login" />
          </div>
          <div>
            <label htmlFor="">Contraseña</label>
            <input type="password" name="" id="" class="input-login" />
          </div>
          <div class="">
            <input type="checkbox" />
            <label>
              <a href="">Terminos y condiciones</a>
            </label>
          </div>
          <button type="submit" className="buttons-acceder login">
            Login
          </button>
        </form>
        <hr></hr>
        <button class="" type="submit" className="buttons-acceder google">
          <i class=""></i> Acceder con google
        </button>
        <button class="" type="submit" className="buttons-acceder facebook">
          <i class=""></i>Acceder con facebook
        </button>
        <a href="">¿Aún no tienes cuenta?</a>
      </div>
    </section>
  );
};

export default Login;
