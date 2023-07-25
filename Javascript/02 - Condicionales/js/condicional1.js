/* let num = parseInt(prompt('Ingrese un número aleatorio que le guste: '));

if(num < 10){
    console.log('El número es menor a 10');
} else if(num > 10){
    console.log('El número es mayor a 10');
} else if(num == 10){
    console.log('El número es igual a 10');
} else {
    console.log('El valor ingresado no es un número valido')
}

console.log('Hola, me pasé de largo') */

/* Se ingresa por teclado un valor entero, mostrar una leyenda que indique si el número es positivo, cero o negativo. */

/* let num = parseInt(prompt('Ingrese un número: '));

if(num > 0){
    document.write('El número ingresado es positivo');
} else if(num == 0){
    document.write('El número ingresado es igual a 0(cero)');
} else if(num < 0){
    document.write('El número ingresado es negativo');
} else {
    document.write('El número ingresado no es un valor válido');
}
 */

/*Realizar un programa que lea cuatro valores numéricos e informar su suma y producto*/

let num1, num2, num3, num4, suma, producto;

num1 = parseInt(prompt('Ingrese el primer número: '));
num2 = parseInt(prompt('Ingrese el segundo número: '));
num3 = parseInt(prompt('Ingrese el tercer número: '));
num4 = parseInt(prompt('Ingrese el cuarto número: '));

suma = num1 + num2 + num3 + num4;
producto = num1 * num2 * num3 * num4;

document.write(`La suma de los números ${num1}, ${num2}, ${num3} y ${num4} es igual a ${suma} <br>`);
document.write(`El producto de los números ${num1}, ${num2}, ${num3} y ${num4} es igual a ${producto}`);