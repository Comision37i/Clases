import {useEffect, useState} from 'react'

export const CoordenadaFlecha = () => {

    const [ posicion, setPosicion ] = useState({x:0, y: 0});

    useEffect(() => {
        window.addEventListener('mousemove', fijarPosicion)
        return () => {
            window.removeEventListener('mousemove', fijarPosicion)
            console.log('se borró el registro de eventos')
        }
    }, [])

    function fijarPosicion(e){
        setPosicion({x: e.clientX, y: e.clientY })
    }

  return (
    <div>{posicion.x} - {posicion.y}</div>
  )
}