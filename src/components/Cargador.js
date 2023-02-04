import React, { useState } from 'react';
import HelloWorld from './01-HelloWorld';
import PreguntaRespuesta from './02-PreguntaRespuesta';
import BucleFor from './03-BucleFor';
import Formularios from './04-Formularios';
import EventoClick from './05-EventoClick';
import EventoKey from './06-EventoKey';
import Reutilizacion from './08-Reutilizacion';
import ListaDeTareas from './07-ListaDeTareas';
import Peticion from './09-PeticionAPI';

const Cargador = () => {

    const ejercicios=["HelloWorld", "PreguntaRespuesta", "BucleFor", "Formularios", "EventoClick" ,"EventoKey", "Reutilizacion" ,"ListaDeTareas", "Peticion"]

    const [elegido, setElegido] = useState(ejercicios[0]);

    return(
        <div>
            <div>
            <select value={elegido} name="ejercicios" id="ejercicios" onChange={(e)=>setElegido(e.target.value)} style={{width:"200px", height:"50px", backgroundColor:"cyan", fontSize:"large", fontWeight:"bold"}}>
                {ejercicios.map((ejercicio, index) => (
                    <option key={index} value={ejercicio}>{ejercicio}</option>
                ))}
            </select>
            </div>
            <div>
                {elegido === "HelloWorld" && <HelloWorld />}
                {elegido === "PreguntaRespuesta" && <PreguntaRespuesta />}
                {elegido === "BucleFor" && <BucleFor />}
                {elegido === "Formularios" && <Formularios />}
                {elegido === "EventoClick" && <EventoClick />}
                {elegido === "EventoKey" && <EventoKey />}
                {elegido === "Reutilizacion" && <Reutilizacion />}
                {elegido === "ListaDeTareas" && <ListaDeTareas />}
                {elegido === "Peticion" && <Peticion />}
            </div>
        </div>
    )
}

export default Cargador;