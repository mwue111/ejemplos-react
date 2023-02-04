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

    const switcher = (elegido) => {
        let chosen = null;
        switch(elegido){
            case "HelloWorld":
                chosen = <HelloWorld/>
                        break;
            case "PreguntaRespuesta":
                chosen = <PreguntaRespuesta/>
                break;
            case "BucleFor":
                chosen = <BucleFor/>
                break;
            case "Formularios":
                chosen = <Formularios/>
                break;
            case "EventoClick":
                chosen = <EventoClick/>
                break;
            case "EventoKey":
                chosen = <EventoKey/>
                break;
            case "Reutilizacion":
                    chosen = <Reutilizacion/>
                    break;
            case "ListaDeTareas":
                chosen = <ListaDeTareas/>
                break;
            case "Peticion":
                chosen = <Peticion/>
                break;
            default:
                chosen = <HelloWorld/>
                break;
        }
        return chosen
    }


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
                {switcher(elegido)}
            </div>
        </div>
    )
}

export default Cargador;