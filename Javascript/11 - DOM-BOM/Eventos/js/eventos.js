function mostrarMensaje(mensaje){
    document.querySelector('#mensaje').textContent = mensaje
}

document.querySelector('#boton2').onclick = () => {
    document.querySelector('#mensaje').textContent = 'Se presionó el botón 2';
}

document.querySelector('#botoneliminar').onclick = () => {
    document.querySelector("#boton1").onclick = null;
    document.querySelector("#boton2").onclick = null;
    document.querySelector('#mensaje').textContent = 'Se eliminaron las funciones que capturan los eventos de los dos botones'
}

document.querySelector('#boton3').addEventListener('click', () =>{
    document.querySelector('#mensaje').textContent = 'Se presionó el botón 3'
});

document.querySelector('#boton3').addEventListener('click', () => {
    document.querySelector('#boton3').textContent = 'Segunda función disparada';
});

let cant = 0;
document.querySelector('#boton3').addEventListener('click', cambiarBoton1)

document.querySelector('#boton3').addEventListener('click', eliminarBoton2)

function cambiarBoton1() {
    cant++;
    document.querySelector('#boton1').textContent = `contador: ${cant}`
    if(cant==5) {
        document.querySelector('#boton3').removeEventListener('click', cambiarBoton1)
    }
}

function eliminarBoton2(){
    document.querySelector('#boton2').remove()
}