import React from 'react';
import './receta.scss';

const Receta = (props) => {
    return (
        <section className="receta">
            <h1>{props.titulo}</h1>
            ingredientes: 
            <ul className="ingredientes">
                {props.ingredientes && props.ingredientes.map((i) => {
                    return <li key={i}>{i}</li>;
                })}
                {!props.ingredientes && <p>No disponible</p>}
            </ul>
            
            {props.pasos && props.pasos.map((p, i) => {
                return <div key={i} className="paso"><span>{++i}</span><p>{p}</p></div>
            })}
        </section>       
    );
}

export default Receta;