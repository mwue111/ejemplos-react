import React, { useState } from 'react';

const Events = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const handleInputName = (e) => {
        setName(e.target.value);
    }

    const handleInputSurname = (e) => {
        setSurname(e.target.value);
    }

    const handleInputChange = () => {
        alert(`El nombre completo es ${name} ${surname}`);
    }

    return(
        <div>
            <form onSubmit={handleInputChange}>
                <fieldset style={{ width: '10%'}}>
                    <label htmlFor='name'>Escribe tu nombre: </label>
                    <br />
                    <input type='text' name='name' onChange={handleInputName} onKeyUp={e => {
                        if(e.key === 'Enter' && name.length)
                        {handleInputChange()}
                        }}/>
                    <br />
                    <label htmlFor='surname'>Escribe tu apellido: </label>
                    <br />
                    <input type='text' name='name' onChange={handleInputSurname} />
                    <br />
                    <input type='submit' value='Enviar' />
                </fieldset>
            </form>
        </div>
    );
}

export default Events;