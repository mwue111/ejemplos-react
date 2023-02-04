import React from 'react';

const BucleFor = () => {

    const tamagotchis = ['iDL', 'Smart', 'On', 'Pix', '1GEN'];
    const muestraArray = tamagotchis.map((item) => 
    <li key={item}>{item}</li>)
    
    return(
        <ul>{muestraArray}</ul>
    );
}

export default BucleFor;