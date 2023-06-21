import { useState } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';

/* export function App() {

  const [ numeroAleatorio, setNumeroAleatorio ] = useState(0)

  function generarAleatorio(){
    const numero = Math.trunc(Math.random() * 10);
    setNumeroAleatorio(numero);
  }

  return(
    <div>
      <p>Número aleatorio: {numeroAleatorio}</p>
      <button onClick={generarAleatorio}>Generar número aleatorio</button>
    </div>
  );
}; */

/* export function App(){

  const [numeros, setNumeros] = useState([0, 0, 0,0, 0, 0]);

  function generarAleatorios() {
    const vec = new Array(6);
    for (let i = 0; i < vec.length; i++) {
        vec[i] = Math.trunc(Math.random() * 43);      
      }
    setNumeros(vec)
  }

  return(
    <div>
      <p>Números aleatorios:</p>
      {numeros.map(num => (<p>{num}</p>))}
      <Button variant="secondary" onClick={generarAleatorios}>Generar números aleatorios</Button>
    </div>
  )
} */

export function App(){

  const [articulos, setArticulos] = useState([{
    codigo: 1,
    descripcion: 'papas',
    precio: 12.52
  }, {
    codigo: 2,
    descripcion: 'naranjas',
    precio: 21
  }, {
    codigo: 3,
    descripcion: 'peras',
    precio: 18.20
  },{
    codigo: 4,
    descripcion: 'manzanas',
    precio: 20.50
  }])

  function eliminarUltimaFila(){
    if(articulos.length > 0){
      const temp = Array.from(articulos)
      temp.pop()
      setArticulos(temp)
    }
  }

  return(
    <div>
      <table border="1">
        <thead><tr><th>Código</th><th>Descripción</th><th>Precio</th></tr></thead>
        <tbody>
          {articulos.map(art => {
            return(
              <tr key={art.codigo}>
                <td>{art.codigo}</td>
                <td>{art.descripcion}</td>
                <td>{art.precio}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <button onClick={eliminarUltimaFila}>Eliminar última fila</button>
    </div>
  )
}