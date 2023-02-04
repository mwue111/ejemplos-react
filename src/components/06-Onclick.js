import React, { useState } from 'react';

const Onclick = () => {
    const [clase, setClase] = useState('cambiaFondo');

    const handleClick = () => {
        if(clase !== 'cambiaFondo'){
            setClase('cambiaFondo');
        }else{
            setClase('fondo2');   
        }
    }

    return(
        <div>
            <div id='onclick' className={clase} onClick={handleClick}>
                <p>Este elemento cambiará de color al pulsar en él.</p>
            </div>
        </div>
    )
}

export default Onclick;