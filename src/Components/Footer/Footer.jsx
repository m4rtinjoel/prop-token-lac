import React, { useState } from "react";
import "./Footer.css"; // Importa el archivo CSS
import aboutUsImage from "../../images/logo.jpeg";
import mapas from "../../images/marcador.png";
import correo from "../../images/sobre.png";
import sol from "../../images/sol.png";
import luna from "../../images/luna.png";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";
import whatssap from "../../images/whatsapp.png";
import youtube from "../../images/youtube.png";

const Footer = () => {
  const [backgroundColor, setBackgroundColor] = useState("white"); // Estado para el color de fondo
  const [textColor, setTextColor] = useState("black"); // Estado para el color del texto
  const [solColor, setSolColor] = useState("black"); // Estado para el color de la imagen del sol

  const handleImageClick = (imageName) => {
    if (imageName === "sol") {
      setBackgroundColor("white"); // Cambia a blanco cuando se hace clic en "sol"
      setTextColor("black"); // Cambia a negro el texto cuando se hace clic en "sol"
      setSolColor("black"); // Cambia a negro la imagen del sol cuando se hace clic en "sol"
    } else if (imageName === "luna") {
      setBackgroundColor("lightblue"); // Cambia a negro cuando se hace clic en "luna"
      setTextColor("white"); // Cambia a blanco el texto cuando se hace clic en "luna"
      setSolColor("white"); // Cambia a blanco la imagen del sol cuando se hace clic en "luna"

      // Agrega la clase de fondo de luna
    document.querySelector(".page-container").classList.add("luna-background");
    }
  };

  return (
    
    <div className="page-container" style={{ backgroundColor: backgroundColor }}>
      
      <footer className="footer">
      
        <div className="footer-column">
        
          <h3>Sobre Nosotros</h3>
          <p>
            <a href="#">Equipos.</a>
          </p>
          <p>
            <a href="#">Inmuebles.</a>
          </p>
          <p>
            <a href="#">Tokens</a>
          </p>
          <img className="logo" src={aboutUsImage} alt="Sobre Nosotros" onClick={() => handleImageClick("aboutUs")} />
        </div>
        

        <div className="footer-column">
          <h3>Contacta</h3>
          <h4>Oficina:</h4>
          <p> Calle La Reforma N°249</p>
          <p>Colonia San Benito, San salvador</p> 
          <p>El Salvador, C.A.{" "}
          <a href="https://www.google.com/maps/place/Asociaci%C3%B3n+Conexi%C3%B3n+al+Desarrollo+de+El+Salvador/@13.6928004,-89.2363791,19.25z/data=!4m15!1m8!3m7!1s0x8f63303a9ff157ed:0x14aeff0035970ff3!2sCalle+La+Reforma+249,+San+Salvador!3b1!8m2!3d13.6930635!4d-89.2360049!16s%2Fg%2F11k6b9rghr!3m5!1s0x8f63303aa0049f47:0x34a1598d53f97c31!8m2!3d13.6929681!4d-89.236251!16s%2Fg%2F11bc7qvpw2?entry=ttu">
            {" "}
            <img src={mapas} alt="oficina"></img>
          </a></p>
          <h4>Correo:</h4>
          <p>inversiones@proptoken.com.sv{" "}
          <a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=AXo7B7XazbpRrUFipViYkHeedCdSPZm-ubNmsXTI7mqmgojYFXQWaIPLMLEhfQg0W462OOGGdyzT9w&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1040143524%3A1693026156507544">
            <img src={correo} alt="oficina"></img>
          </a></p>
        </div>

        <div className="footer-column">
          <h3>¡Contactanos!</h3>
          <p>¿Necesitas ayuda? ¿Tienes más preguntas?</p>
          <p>¡Envíanos tu email y nos pondremos en contacto contigo !</p>
          <p>Correo*</p>
          <p><input type="email" className="form-email" placeholder="name@example.com" /></p>
          
          <p>¿En qué podemos ayudarte?</p>
          <p><input type="comentario" className="form-comentario" placeholder="Déjanos tu respuesta" /></p>
          <p>
            <input type="checkbox" id="miCasilla" name="miCasilla"></input>
            <label htmlFor="miCasilla">Acepto términos y condiciones</label>
          </p>
          
            <button className="Enviar">Enviar</button>
          
        </div>
      </footer>

      <div className="copyright">
      <div className="copy">
        <div className="enla">
  <span style={{ color: textColor }}>©️ 2023 PropToken</span>{" "}|{" "}
  <a href="" style={{ color: textColor }}>
    política de privacidad
  </a>{" "}
  |{" "}
  <a href="" style={{ color: textColor }}>
    Política de cookies
  </a>{" "}
  |{" "}
  <a href="" style={{ color: textColor }}>
    Términos y condiciones
  </a>{" "}
  </div>
  
  <div className="iconos-derecha">
    <img
      src={sol}
      alt="sol"
      onClick={() => handleImageClick("sol")}
      style={{
        filter: backgroundColor === "gray" ? "invert(1)" : "invert(0)",
        color: solColor,
      }}
    />
    <img src={luna} alt="luna" onClick={() => handleImageClick("luna")} />
    <img src={facebook} alt="fb" />
    <img src={instagram} alt="in" />
    <img src={twitter} alt="tw" />
    <img src={whatssap} alt="wsp" />
    
  </div>
</div>

      </div>
    </div>
  );
};

export default Footer;
