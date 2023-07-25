/* alert(document.body.innerHTML) */

setTimeout(() => {
    const lista1 = document.querySelector('#lista1');
    lista1.innerHTML = `
    <li>one</li>
    <li>two</li>
    <li>three</li>
    <li>four</li>`
}, 3000);

let tabla1 = '<table id="tabla1">';

for (let fila = 1; fila < 10; fila++) {
    tabla1 += '<tr>'
    for (let columna = 1; columna < 10; columna++) {
        tabla1 += `<td>(${fila} - ${columna})</td>`
    }
    tabla1 += '</tr>'
}
tabla1 += '</table>';

document.querySelector('#divtabla1').innerHTML = tabla1;
document.querySelector('#tabla1').style.border = '1px solid #f00';
document.querySelector('#tabla1').style.borderCollapse = 'collapse';