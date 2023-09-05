import React, { Component } from 'react';
import './Perfil.css'; // Asegúrate de tener un archivo CSS con estilos similares al proporcionado anteriormente

class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      correo: '',
      acepto: false,
    };
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    this.setState({ [name]: newValue });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones adicionales, como enviar los datos a un servidor
    console.log('Datos enviados:', this.state);
  };

  render() {
    return (
      <div>
        <h1>Registro de Perfil</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="campo">
            <label htmlFor="correo">Correo Electrónico:</label>
            <input
              type="email"
              id="correo"
              name="correo"
              placeholder='Ingrese su correo electrónico'
              value={this.state.correo}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="campo">
            <label htmlFor="usuario">Usuario</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder='Ingrese su usuario'
              value={this.state.usuario}
              onChange={this.handleChange}
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
}

export default Perfil;
