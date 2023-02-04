import React, { useState, useEffect } from 'react';

const Peticion = () => {

    const [datos, setDatos] = useState();

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => {
            setDatos(data)
        })
    }, []);

    const next = () => {
        fetch(datos.info.next)
        .then(response => response.json())
        .then(data => {
            setDatos(data)
        })
        window.scrollTo(0, 0);
    }
    const prev = () => {
        fetch(datos.info.prev)
        .then(response => response.json())
        .then(data => {
            setDatos(data)
        })
        window.scrollTo(0, 0);
    }

    
    return(
        <div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <h1>Personajes de Rick and Morty</h1>
            </div>
            <div className="card">
                <hr />
                {datos && datos.results.map((item) => {
                    return(
                        <div key={item.id}>
                        <div style={{display:"flex", textAlign:"left"}}>
                            <div className="card-header">
                                <img src={item.image} alt="imagen" />
                            </div>

                            <div className="card-body" style={{marginLeft:"100px"}}>
                                <h3 className="card-title">Nombre: {item.name}</h3>
                                <h4 className="card-subtitle mb-2 text-muted">Especie: {item.species}</h4>
                                <h4 className="card-text">Estado: {item.status}</h4>
                                <h4 className="card-text">Tipo :{item.type}</h4>
                                <h4 className="card-text">Género : {item.gender}</h4>
                                <h4 className="card-text">Origen : {item.origin.name}</h4>
                            </div>
                            <div className="card-body" style={{marginLeft:"100px"}}>
                                <h4 className="card-title">Último lugar: {item.location.name}</h4>
                                <h4 className="card-text">Episodios : {item.episode.length}</h4>
                            </div>
                        </div>
                            <hr/>
                        </div>
                    )})}
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                {datos && datos.info.prev && <button className="btn btn-primary" onClick={prev} style={{width:"200px", height:"50px", backgroundColor:"burlywood"}}>Anterior</button>}
                <button className="btn btn-primary" onClick={next} style={{width:"200px", height:"50px", backgroundColor:"burlywood"}}>Siguiente</button>
            </div>
        </div>
    );
}

export default Peticion;