import React, { useState } from 'react';

const Formulario = ({data}) => {
    const [name, setName] = useState(data);
    const [surname, setSurname] = useState('');

    const changeSurname = (e) => {
        setSurname(e.target.value);
    }

    return(
        <div>
            <fieldset style={{ width: '10%'}}>
                <label htmlFor='nombre'>Escribe tu nombre: </label>
                <br/>
                <input name='nombre' onChange={(e) => setName(e.target.value)}/>
                <br/>
                <label htmlFor='apellido'>Apellido:</label>
                <br />
                <input name='apellido' onChange={changeSurname} />
            </fieldset>
            <p>El nombre escrito es {name} {surname}</p>
            <br/>

        </div>

    );
}

export default Formulario;