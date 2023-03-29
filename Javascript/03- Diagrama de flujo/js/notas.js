let nota1, nota2, nota3, suma, promedio;

nota1 = parseInt(prompt('Ingrese la primer nota: '));
nota2 = parseInt(prompt('Ingrese la segunda nota: '));
nota3 = parseInt(prompt('Ingrese la tercer nota: '));

suma = nota1 + nota2 + nota3;
promedio = suma / 3;

if(promedio >= 7){
    document.write('Promocionado');
} else if (promedio >= 4 && promedio < 7){
    document.write('Regular');
} else if (promedio < 4){
    document.write('Reprobado');
} else {
    document.write('Resultado no válido');
};