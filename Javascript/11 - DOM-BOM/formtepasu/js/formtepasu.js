document.querySelector('#formulario').addEventListener('submit', (evento) => {
    const clave1 = document.querySelector('#clave1').value;
    const clave2 = document.querySelector('#clave2').value;
    if(clave1 != clave2 || clave1.length === 0){
        evento.preventDefault()
        document.querySelector('#resultado').textContent='Las claves ingresadas son distintas o estan vacías'
    }
});