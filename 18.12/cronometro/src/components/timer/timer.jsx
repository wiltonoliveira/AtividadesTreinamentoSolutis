import React, {useState, useEffect} from 'react'

export default function Timer(){

    const [isActive, setIsActive] = useState(false)
    const [tempo, setTempo] = useState({
        segundos: "00",
        minutos: "00",
        hora: "00",
        count: 0
    })
    
    useEffect(()=>{
        let interval
        if(isActive){
            interval = setInterval(()=>{
                
            })
        }
    }, [isActive])

    return(
        <div>
            <h2>Timer</h2>
            <h1>{tempo.hora}:{tempo.minutos}:{tempo.segundos}</h1>
        </div>
    )
}