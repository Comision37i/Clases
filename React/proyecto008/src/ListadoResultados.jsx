import React from 'react'

export function ListadoResultados(props) {
    const resultadosTraidos = props.resultados;
  return (
    <ul>
        {resultadosTraidos.map((elemento) => 
            <li>La suma de {elemento.valor1} y {elemento.valor2} es {elemento.resultado}</li>
        )}
    </ul>
  )
}