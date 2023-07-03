import { useState } from "react";
import { ListadoResultados } from "./ListadoResultados";

function App() {

  const [ operacion, setOperacion ] = useState([]);

  function sumar(e){
    e.preventDefault();
    const numero1 = parseInt(e.target.valor1.value, 10);
    const numero2 = parseInt(e.target.valor2.value, 10);
    const suma = numero1 + numero2;
    const nuevo = {
      resultado: suma,
      valor1: numero1,
      valor2: numero2
    }
    setOperacion([nuevo, ...operacion]);
    e.target.valor1.value = '';
    e.target.valor2.value = '';
  }

  return(
    <div>
      <form onSubmit = {sumar}>
        <p>Ingrese primer valor:<input type='number' name='valor1' /></p>
        <p>Ingrese segundo valor:<input type='number' name='valor2' /></p>
        <input type="submit" value="Sumar"/>
      </form>
      <ListadoResultados resultados = {operacion}/>
    </div>
  )
}

export default App;