import React from 'react';

const BucleFor = () => {

    const tamagotchis = ['iDL', 'Smart', 'On', 'Pix', '1GEN'];
    
    const muestraArray = tamagotchis.map((item) => 
        <li key={item}>{item}</li>
    )
    
    return(
        <div>
            <strong>Lista de tamagothis: </strong>
            <ul>{muestraArray}</ul>
        </div>
    );
}

export default BucleFor;