import React from 'react'


export default function Relogio(props) {


    return(
        <div>
            <h1 className="my-title">{props.minutos}:{props.segundos}:{props.milisegundos}</h1>
        </div>
    )
}