import React, { useState } from 'react';

const Reutilizacion = () => {    
    return(
        <div>
            <Saludador />
            <Saludador nombre="Shakira"/>
            <Saludador nombre="Piqué"/>
            <Saludador nombre="Pablo"/>
            <Sumador />
        </div>
    );
}

const Saludador = ({nombre}) => {

    const [texto, setTexto] = useState(nombre || "");
    
    return(
        <div>
            <input type="text" placeholder="Introduce un texto" value={texto} onChange={(e)=>setTexto(e.target.value)}/>
            <p>Hola {texto}</p>
            <hr/>
        </div>
    );
}

const Sumador = ({num1, num2}) => {
    const [numeros, setNumeros] = useState((num1  && num2)?[num1, num2]:[0,0]);
    return(
        <div>
            <input type="number" value={numeros[0]} onChange={(e)=>setNumeros([parseInt(e.target.value), numeros[1]])}/>
            <input type="number" value={numeros[1]} onChange={(e)=>setNumeros([numeros[0],  parseInt(e.target.value)])}/>
            <p>La suma es {numeros[0] + numeros[1]}</p>
        </div>
    );
}

export default Reutilizacion;