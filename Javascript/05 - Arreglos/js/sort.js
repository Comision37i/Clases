let nombres = ['marcos', 'ana', 'luis', 'jorge', 'carlos'];
document.write('Vector antes de ordenarlo<br>');
/* document.write(nombres);
console.log(nombres); */
for(let i = 0; i < nombres.length; i++){
    document.write(nombres[i] + '<br>');
    /* console.log(nombres[i]); */
}

nombres.sort();
document.write('Vector después de ordenarlo<br>');
for(let i = 0; i < nombres.length; i++){
    document.write(nombres[i] + '<br>');
    /* console.log(nombres[i]); */
}