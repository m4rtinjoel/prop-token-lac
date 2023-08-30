import React, { useState } from 'react';
import './Pregunta.css'; // Importa tu archivo de estilos CSS


const FaqComponent = () => {
  // Define un array de preguntas y respuestas (puedes cargar estos datos desde una fuente externa si lo deseas)
  const faqData = [
    {
      pregunta: '¿Qué aporta PropToken?',
      respuesta: '¿Qué aporta PropToken? PropToken facilita la inversión en el sector inmobiliario Salvadoreño. Nuestra misión es darte acceso a invertir en oportunidades inmobiliarias seleccionadas por nuestro equipo de profesionales, que ofrecen un activo eficiente con la mejor relación riesgo / rentabilidad. El inversor obtendrá los beneficios en forma de dividendos de la explotación del inmueble en el que invierta a través de un préstamo participativo tokenizado. La digitalización del préstamo en forma de token ofrece ventajas únicas.'
    },
    {
      pregunta: '¿Cómo es el proceso de inversión? ¿Cuánto tarda?',
      respuesta: 'kujshfkhuaflkjasifhalkgfoashf'
    },
    {
      pregunta: '¿Cómo funciona legalmente PropToken? ¿Es legal?',
      respuesta: ''
    },
    // Agrega más preguntas y respuestas aquí
  ];

  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    setSelectedQuestion(index === selectedQuestion ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="column pregunta-column">
        <h2>Preguntas Frecuentes</h2>
        <ul>
          {faqData.map((item, index) => (
            <li
              key={index}
              className={index === selectedQuestion ? 'pregunta-seleccionada' : ''}
              onClick={() => handleQuestionClick(index)}
            >
              {item.pregunta}
              <span className="flechita">
                {index === selectedQuestion ? '-' : '>'}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="column respuesta-column">
        <h2>Respuestas</h2>
        <ul>
          {faqData.map((item, index) => (
            <li key={index} style={{ display: index === selectedQuestion ? 'block' : 'none' }}>
              {item.respuesta}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FaqComponent;
