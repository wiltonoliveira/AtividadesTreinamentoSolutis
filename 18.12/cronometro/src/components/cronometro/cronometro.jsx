import React, {useState, useEffect} from 'react'
import Relogio from '../relogio/relogio'
import Botao from '../botao/botao'
import Parciais from '../parciais/parciais'
//import LabelRelogio from '../labelRelogio/labelRelogio'
import '../../App.css'
import './styles.css'
export default function Cronometro(){

    const [minutos, setMinutos] = useState(0)
    const [segundos, setSegundos] = useState(0)
    const [centesimos, setCentesimos] = useState(0)
    const [parciais, setParciais] = useState("")
    const[isActive, setIsActive] = useState(false)
    
    function toogle(){
        setIsActive(!isActive)
    }

    function reset() {
        setMinutos(0);
        setSegundos(0);
        setCentesimos(0);
        setParciais("")
        setIsActive(false);
      }
    
    function appParcial(){
        setParciais(parcial => " "+parcial + minutos+":"+segundos+":"+centesimos+" ")
    }

    useEffect(() => {
       let interval = null;
       if (isActive) {
         interval = setInterval(() => {
           if(segundos === 59){
               setSegundos(0)
               setMinutos(minutos => minutos+1)
           } else if(centesimos === 99){
                setSegundos(segundos => segundos + 1)
                setCentesimos(0)
           }
           //setSegundos(segundos => segundos + 1);
           setCentesimos(centesimos => centesimos + 1);
        }, 1);
       } else if (!isActive && segundos !== 0) {
         clearInterval(interval);
       }
       return () => clearInterval(interval);
     }, [isActive, segundos, centesimos]);
    
    
    return(
        <div>
            <Relogio 
            minutos={minutos}
            segundos={segundos}
            centesimos={centesimos}
            />
           
           <section className="grid grid-template-columns-1">
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
            </section>
            <Parciais
            parciais={parciais}
            />
        </div>
    )
}
