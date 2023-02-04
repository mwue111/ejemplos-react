import React, { useState } from 'react';

const EventoKey = () => {

    const [texto, setTexto] = useState("");

    const lanzaAlert = (e) => {
        if(e.key === "Enter")
            alert('Texto: '+texto+' - Tecla: '+e.key);
        else if(e.type === "click")
            alert('Texto: '+texto+' - Ratón');
    }
    
    return(
        <div>
            <input type="text" placeholder="Introduce un texto" value={texto} onKeyUp={lanzaAlert} onChange={(e)=> setTexto(e.target.value)}/>
            <p><button onClick={lanzaAlert}>Púlsame</button></p>
        </div>
    );
}

export default EventoKey;