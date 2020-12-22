import React, {useState, useEffect} from 'react'


export default function Relogio() {

    // eslint-disable-next-line
    let data = new Date()
    const [horas, setHoras] = useState(data.getHours())
    const [minutos, setMinutos] = useState(data.getMinutes())
    const [segundos, setSegundos] = useState(data.getSeconds())

    useEffect(() => {
        const interval = setInterval(() => {
            let data = new Date()
            setHoras(data.getHours())
            setMinutos(data.getMinutes())
            setSegundos(data.getSeconds())
        } , 1000);
        return () => {
          clearInterval(interval);
        };
      }, [data]);
      
    

    return(
        <div>
            <h1 className="my-title">{horas}:{minutos}:{segundos}</h1>
        </div>
    )
}