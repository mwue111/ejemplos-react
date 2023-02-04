import React from 'react';
import Pregunta from './02a-Pregunta';
import Respuesta from './02b-Respuesta';

const PreguntaRespuesta = () => {
    const question = '¿Cómo te llamas?';
    const answer = 'Kuchipatchi.';
    
    return(
        <div>
            <p>La pregunta es: </p>
            <Pregunta pregunta={question} />
            <br/>
            <p>La respuesta es: </p>
            <Respuesta respuesta={answer} />
        </div>
    )
}

export default PreguntaRespuesta;