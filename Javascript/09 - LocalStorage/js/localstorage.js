function guardarDatos(){
    localStorage.nombre = document.getElementById('nombre').value;
    localStorage.password = document.getElementById('password').value
}

function recuperarDatos() {
    if((localStorage.nombre != undefined) && (localStorage.password != undefined)){
        document.getElementById('datos').innerHTML = `
        <p>Nombre: ${localStorage.nombre}</p>
        <p>Password: ${localStorage.password}</p>`;
    } else {
        document.getElementById('datos').innerHTML = "No has introducido tu nombre y tu password";
    }
}