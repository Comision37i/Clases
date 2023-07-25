import React from 'react'
import './App.css';
import { useState, useEffect } from 'react';

export const App = () => {

  const [ rubros, setRubros ] = useState([]);
  const [ rubroSeleccionado, setRubroSeleccionado ] = useState({});

  useEffect(() => {
    fetch('https://www.scratchya.com.ar/reactya/proyecto021/recuperarrubros.php')
      .then((response) => {return response.json()})
      .then((rub) => {
        setRubros(rub)
        setRubroSeleccionado(rub[0])
      })
  }, []);

  const [ articulosRubro, setArticulosRubro ] = useState([]);
  const [ articuloSeleccionado, setArticuloSeleccionado ] = useState([]);

  useEffect(() => {
    fetch('https://www.scratchya.com.ar/reactya/proyecto021/recuperararticulos.php?rubro=' + rubroSeleccionado.codigo)
      .then((response) => {return response.json()})
      .then((art) => {
        setArticulosRubro(art)
        setArticuloSeleccionado(art[0])
      })
  }, [rubroSeleccionado])

  function cambiarRubro(e){
    const rubroSelect = rubros.find(rub => Number.parseInt(rub.codigo) === Number.parseInt(e.target.value))
    setRubroSeleccionado(rubroSelect)
  }

  function cambiarArticulo(e){
    setArticuloSeleccionado(articulosRubro.find(articulo => Number.parseInt(articulo.codigo) === Number.parseInt(e.target.value)))
  }

  return (
    <div className="formulario">
      <div>
        <select value={rubroSeleccionado.codigo} onChange={cambiarRubro}>
          {rubros.map(rubro => (
            <option key={rubro.codigo} value={rubro.codigo}>{rubro.nombre}</option>
          ))}
        </select>
        <select value={articuloSeleccionado.codigo} onChange={cambiarArticulo}>
          {articulosRubro.map(articulo => (
            <option key={articulo.codigo} value={articulo.codigo}>{articulo.nombre}</option>
          ))}
        </select>
      </div>
      <div>
        <ul>
          <li>Rubro:<strong>{rubroSeleccionado.nombre}</strong></li>
          <li>Articulo:<strong>{articuloSeleccionado.nombre}</strong></li>
          <li>Precio:<strong>{articuloSeleccionado.precio}</strong></li>
        </ul>
      </div>
    </div>
  )
}
