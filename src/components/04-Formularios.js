import React, { useState } from 'react';

const Formularios = () => {

    const [texto, setTexto] = useState("");
    
    return(
        <div>
            <input type="text" placeholder="Introduce un texto" value={texto} onChange={(e)=>setTexto(e.target.value)}/>
            <p>Texto introducido: {texto}</p>
        </div>
    );
}

export default Formularios;