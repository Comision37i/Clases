/* onClick
onDoubleClick
onMouseEnter
onMouseLeave
onMouseMove
onKeyPress
onKetUp
onSubmit */

import './App.css';
import { useState } from 'react';

function App(){
  const [suma, setSuma] = useState(0);
  
  function presion(e){
    e.preventDefault();
    let numero1 = parseInt(e.target.valor1.value, 10);
    let numero2 = parseInt(e.target.valor2.value, 10);
    let numero3 = parseInt(e.target.valor3.value, 10);
    setSuma(numero1 + numero2 + numero3);
    //alert(`La suma es: ${suma}`);
  };

  return(
    <div>
      <form onSubmit={presion}>
        <p>Ingrese el primer valor: 
          <input type="number" name='valor1'/>
        </p>
        <p>Ingrese el segundo valor: 
          <input type="number" name='valor2'/>
        </p>
        <p>Ingrese el tercer valor: 
          <input type="number" name='valor3'/>
        </p>
        <p>
          <input type="submit" value="Sumar" />
        </p>
        <p>{suma}</p>
      </form>
    </div>
  )
};

export default App;