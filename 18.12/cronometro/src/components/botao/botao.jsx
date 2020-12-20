import React from "react";

export default function Botao(props){
    return(
        <div>
            <button onClick={props.onClick}>{props.label}</button>
        </div>
    )
}
