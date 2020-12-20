import React from "react";
import './styles.css'

export default function Botao(props){
    return(
        <div>
            <button className="button" onClick={props.onClick}>{props.label}</button>
        </div>
    )
}
