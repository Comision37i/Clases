/* let vec = [-100, 5, -60, 3, 90];
document.write('Vector antes de ordenarlo<br>');
for(let i = 0; i < vec.length; i++){
    document.write(vec[i] + '<br>');
}

vec.sort(function(v1, v2){
    if(v1 < v2)
        return -1; // v1 es menor que v2
    else
        return 1; // v1 es mayor que v2
});

document.write('Vector después de ordenarlo<br>');
for(let i = 0; i < vec.length; i++){
    document.write(vec[i] + '<br>');
} */

/* Crear un arreglo con 10 elementos enteros con valores aleatorios. Ordenarlos de menor a mayor. Luego invertir el vector para verlo de mayor a menor.*/

/* Declaro el arreglo */
let vec = new Array(10);

/* Relleno el arreglo */
for(let i = 0; i < vec.length; i++){
    vec[i] = parseInt(Math.random() * 1000)
}

/* Ordenar en forma ascendente el arreglo */
vec.sort(function(v1, v2){
    if(v1 > v2)
        return 1;
    else
        return -1;
});
document.write('Vector ordenado en forma ascendente<br>');
for(let i = 0; i < vec.length; i++){
    document.write(vec[i] + '<br>');
}

/* Ordenar en forma descendente el arreglo */
vec.reverse();
document.write('Vector ordenado en forma descendente<br>');
for(let i = 0; i < vec.length; i++){
    document.write(vec[i] + '<br>');
}