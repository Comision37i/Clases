/*Confeccionar un programa que lea 3 pares de datos, cada par de datos corresponde a la medida de la base y la altura de un triángulo. El programa deberá informar:
a) De cada triángulo la medida de su base, su altura y su superficie.
b) La cantidad de triángulos cuya superficie es mayor a 12.*/

/* let base, altura, superficie;
let cantTriangMayorDoce = 0;

for(let i = 1; i <= 3; i++){
    base = parseFloat(prompt('Ingrese la base del triángulo: '));
    altura = parseFloat(prompt('Ingrese la altura del triángulo: '));
    superficie = (base * altura) / 2;
    if( superficie > 12){
        cantTriangMayorDoce++;
    }
    document.write(`Triángulo n°: ${i} <br>`);
    document.write(`Base: ${base} <br>`);
    document.write(`Altura: ${altura} <br>`);
    document.write(`Superficie: ${superficie} <br>`);
}
document.write(`Cantidad de triángulos con superficie mayor a 12: ${cantTriangMayorDoce}`); */

let num1, num2, num3, num4, suma, producto

num1 = parseInt(prompt('Ingrese el primer número: '));
num2 = parseInt(prompt('Ingrese el segundo número: '));
num3 = parseInt(prompt('Ingrese el tercer número: '));
num4 = parseInt(prompt('Ingrese el cuarto número: '));

if(!isNaN(num1) && !isNaN(num2) && !isNaN(num3) && !isNaN(num4)){
    suma = num1 + num2 + num3 + num4;
    producto = num1 * num2 * num3 * num4;
    document.write(`La suma de los números es igual a: ${suma} <br>`);
    document.write(`El producto de los números es igual a: ${producto}`);

} else {
    document.write('Un valor ingresado es inválido');
}