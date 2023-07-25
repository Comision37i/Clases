const nodos = document.querySelector('#productos').cloneNode(true);
document.querySelector('#copia').append(nodos);

document.querySelector('#productos').remove();