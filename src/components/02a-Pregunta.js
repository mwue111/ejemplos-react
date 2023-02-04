import React from 'react';

const Pregunta = ({pregunta}) => {
    
    /* //para el ejemplo del condicional simple
    if(pregunta === '¿Cómo te llamas?'){
        pregunta = 'Ya he hecho esta pregunta';
    }*/

    return(
        <p>{pregunta}</p>
    )
}

export default Pregunta;