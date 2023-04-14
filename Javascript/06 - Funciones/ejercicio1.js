/* document.write("Cuidado<br>");
document.write("Ingrese su documento correctamente<br>");
document.write("Cuidado<br>");
document.write("Ingrese su documento correctamente<br>");
document.write("Cuidado<br>");
document.write("Ingrese su documento correctamente<br>"); */

/* function mostrarMensaje() {
    document.write('Cuidado<br>');
    document.write("Ingrese su documento correctamente<br>");
}

mostrarMensaje();
mostrarMensaje();
mostrarMensaje(); */


/* function calcularTabla(){
    let valor = parseInt(prompt('Ingrese que tabla de multiplicar quiere obtener: '));
    for(let i = 0; i <= 10; i++){
        let tabla = i * valor;
        document.write(`${i} * ${valor} = ${tabla} <br>`);
    }
}

calcularTabla(); */

/* function mostrarComprendidos(inicio, fin){
    for(let i = inicio; i <= fin; i++){
        document.write(`${i} `);
    }
}

let valor1 = parseInt(prompt('Ingrese valor inferior: '));
let valor2 = parseInt(prompt('Ingrese valor superior: '));

mostrarComprendidos(valor1, valor2); */


/* function convertirCastellano(numero){
    if (numero == 1){
        return 'uno';
    } else {
        if (numero == 2) {
            return 'dos';
        } else {
            if (numero == 3){
                return 'tres';
            } else {
                if (numero == 4){
                    return 'cuatro'
                } else {
                    return 'valor incorrecto'
                }
            }
        }
    }
}

let valor = parseInt(prompt('Ingrese un valor entre 1 y 4'));
let nombreCastellano = convertirCastellano(valor);
document.write(nombreCastellano); */

let dia = parseInt(prompt('Ingrese el número de día: '));
let mes = parseInt(prompt('Ingrese el número de mes: '));
let año = parseInt(prompt('Ingrese el número de año: '));
function formatearFecha(dia, mes, año) {
    let s = 'Hoy es ' + dia + ' de ';
    switch (mes) {
        case 1:
            s = s + 'enero';
            break;
        case 2:
            s = s + 'febrero ';
            break;
        case 3:
            s = s + 'marzo ';
            break;
        case 4:
            s = s + 'abril ';
            break;
        case 5:
            s = s + 'mayo ';
            break;
        case 6:
            s = s + 'junio ';
            break;
        case 7:
            s = s + 'julio ';
            break;
        case 8:
            s = s + 'agosto ';
            break;
        case 9:
            s = s + 'septiembre ';
            break;
        case 10:
            s = s + 'octubre ';
            break;
        case 11:
            s = s + 'noviembre ';
            break;
        case 12:
            s = s + 'diciembre ';
            break;
    } //fin del switch
    /* s = s + 'de ' + año; */
    s = `${s} de ${año}`;
    return s;
}

console.log(formatearFecha(dia, mes, año));