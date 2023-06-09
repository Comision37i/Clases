import { useState } from "react";
import { CoordenadaFlecha } from "./CoordenadaFlecha";

function App() {
    const [ visible, setVisible ] = useState(true);

    function ocultar() {
        setVisible(false);
    };
    function mostrar() {
        setVisible(true);
    };

    return(
        <div>
            {visible ? <CoordenadaFlecha /> :  <p>Se ocultó la coordenada</p>}
            <button onClick={ocultar}>Ocultar</button>
            <button onClick={mostrar}>Mostrar</button>
        </div>
    )
}

export default App;