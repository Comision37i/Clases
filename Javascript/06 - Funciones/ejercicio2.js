/* function sumar(x, y){
    let suma = x + y;
    return suma;
}

let operar = sumar(5, 3)
document.write(operar); */

/* function sumar(x, y, z){
    let suma = arguments[0] + arguments[1] + arguments[2];
    return suma;
}

let operar = sumar(5, 3, 9);
document.write(operar); */

function sumar(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma = suma + arguments[i];
    }
    return suma;
}

document.write(sumar(2, 4));
document.write('<br>');
document.write(sumar(1, 2, 3, 4, 5));
document.write('<br>');
document.write(sumar(100, 200, 300));
document.write('<br>');