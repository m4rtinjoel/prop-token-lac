import React from "react";

const Login = (props) => {

    return (
        <>
          <div className="container">
            <h2>Inicia cesión</h2>
            <form>
                <div>
                    <label htmlFor="correo">Correo: </label>
                    <input type="email" id="correo" placeholder="Ingrese su nombre" />
                </div>
                <div>
                    <label htmlFor="contra">Contraseña: </label>
                    <input type="password" id="contra" placeholder="Ingrese una contrseña segura" />
                </div>
                <button>Iniciar Sesion</button>
            </form>

            <div>
               <h5>No tienes una cuenta? <a href="#">Registrate</a></h5>
            </div>

            <div>
                <button onClick={props.conectar}>Metamask</button>
            </div>
            <div>
                <button>Iniciar sesión con Google</button>
            </div>

            <div>
                <div>
                    <button>Facebook</button>
                </div>
            </div>

          </div>
        </>
    )
}

export default Login;