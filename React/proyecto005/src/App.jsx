import { useState } from "react";

export function App(){

  const [articulos, setArticulos] = useState([{
    codigo: 1,
    descripcion: 'papas',
    precio: 12.52,
  },
  {
    codigo: 2,
    descripcion: 'milanesas',
    precio: 21,
  },
  {
    codigo: 3,
    descripcion: 'pizza',
    precio: 18.20,
  }
])

function eliminarUltimaFila(){
  if(articulos.length > 0){
    const temp = Array.from(articulos);
    temp.pop();
    setArticulos(temp);
  }
}

  return(
    <div>
      <table border='1'>
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


export function App2(){

  function borrar(cod){
    const temp = articulos.filter((art) => art.codigo !== cod);
    setArticulos(temp);
  }
  
  const [articulos, setArticulos] = useState([{
    codigo: 1,
    descripcion: 'papas',
    precio: 12.52,
  },
  {
    codigo: 2,
    descripcion: 'milanesas',
    precio: 21,
  },
  {
    codigo: 3,
    descripcion: 'pizza',
    precio: 18.20,
  }
])

return(
  <div>
    <table border='1'>
      <thead><tr><th>Código</th><th>Descripción</th><th>Precio</th><th>Borrar</th></tr></thead>
      <tbody>
        {articulos.map(art => {
          return(
            <tr key={art.codigo}>
              <td>{art.codigo}</td>  
              <td>{art.descripcion}</td>  
              <td>{art.precio}</td>
              <td><button onClick={() => borrar(art.codigo)}>Borrar</button></td>  
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>
)
}