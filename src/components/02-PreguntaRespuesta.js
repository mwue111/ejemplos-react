import React from 'react';
import Pregunta from './02a-Pregunta';
import Respuesta from './02b-Respuesta';

const PreguntaRespuesta = () => {
    const question = '¿Cómo te llamas?';
    const answer = 'Kuchipatchi.';
    
    return(
        <div>
            <strong>La pregunta es: </strong>
            <Pregunta pregunta={question} />
            <strong>La respuesta es: </strong>
            <Respuesta respuesta={answer} />
        </div>
    )
}

export default PreguntaRespuesta;