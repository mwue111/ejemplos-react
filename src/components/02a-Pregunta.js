import React from 'react';

const Pregunta = ({pregunta}) => {
    
    /*
    if(pregunta === '¿Cómo te llamas?'){
        pregunta = 'Ya he hecho esta pregunta';
    }*/

    return(
        <p>{pregunta}</p>
    )
}

export default Pregunta;