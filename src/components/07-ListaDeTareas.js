import React, { useState } from 'react';

const ListaDeTareas = () => {
    
    return(
        <div>
           <h1>Tareas del equipo de trabajo</h1>
            <h2>Pepito Pérez</h2>
            <Tareas />
            <h2>Susana Sánchez</h2>
            <Tareas />
        </div>
    );
}

const Tareas = () => {

    const [nuevaTarea, setNuevaTarea] = useState("");
    const [tareas, setTareas] = useState([]);

    const crearTarea = (e) => {
        if(e.key === "Enter" || e.type === "click"){
            setTareas([...tareas, nuevaTarea]);
            setNuevaTarea("");
        }
    }

    return(
        <div>
            <ul>
                {tareas.map((tarea, index) => (
                    <li key={index}>{tarea}</li>
                ))}
            </ul>
            Nueva tarea: <input type="text" value={nuevaTarea} onChange={(e)=>setNuevaTarea(e.target.value)} onKeyUp={crearTarea} />
            <button onClick={crearTarea}>Añadir tarea</button>
        </div>
    );
}

export default ListaDeTareas;