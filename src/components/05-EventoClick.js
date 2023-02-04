import React, { useState } from 'react';

const EventoClick = () => {

    const [texto, setTexto] = useState("");

    const lanzaAlert = (e) => {
            alert('Texto: '+texto+' - Ratón');
    }
    
    return(
        <div>
            <input type="text" placeholder="Introduce un texto" value={texto} onChange={(e)=> setTexto(e.target.value)}/>
            <p><button onClick={lanzaAlert}>Púlsame</button></p>
        </div>
    );
}

export default EventoClick;