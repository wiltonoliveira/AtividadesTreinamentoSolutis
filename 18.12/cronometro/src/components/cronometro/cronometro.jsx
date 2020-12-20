import React, {useState, useEffect} from 'react'
import Relogio from '../relogio/relogio'
import Botao from '../botao/botao'
import Parciais from '../parciais/parciais'
//import LabelRelogio from '../labelRelogio/labelRelogio'
import '../../App.css'

export default function Cronometro(){

    const [minutos, setMinutos] = useState(0)
    const [segundos, setSegundos] = useState(0)
    const [milisegundos, setMilisegundos] = useState(0)
    const [parciais, setParciais] = useState("")
    const[isActive, setIsActive] = useState(false)
    
    function toogle(){
        setIsActive(!isActive)
    }

    function reset() {
        setSegundos(0);
        setMinutos(0);
        setIsActive(false);
      }
    
    function appParcial(){
        setParciais(parcial => parcial + minutos+":"+segundos+"\n")
    }

    useEffect(() => {
       let interval = null;
       if (isActive) {
         interval = setInterval(() => {
           if(segundos === 59){
               setSegundos(0)
               setMinutos(minutos => minutos+1)
           } else 
           setSegundos(segundos => segundos + 1);
        }, 1000);
       } else if (!isActive && segundos !== 0) {
         clearInterval(interval);
       }
       return () => clearInterval(interval);
     }, [isActive, segundos]);
    
    
    return(
        <div>
            <Relogio 
            minutos={minutos}
            segundos={segundos}
            milisegundos={milisegundos}
            />
           
            <Botao
            onClick={toogle}
            label={isActive ? "Pausar" : "Iniciar"}
            />
            <Botao
            onClick={reset}
            label="Zerar"
            />
            <Botao
            onClick={appParcial}
            label="Parcial"
            />

            <Parciais
            parciais={parciais}
            />
        </div>
    )
}
