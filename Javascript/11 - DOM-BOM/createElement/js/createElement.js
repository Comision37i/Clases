const item3 = document.createElement('li');
const texto3 = document.createTextNode('Item 3');
item3.appendChild(texto3);
const item4 = document.createElement('li');
const texto4 = document.createTextNode('Item 4');
item4.appendChild(texto4);
const item5 = document.createElement('li');
const texto5 = document.createTextNode('Item 5');
item5.appendChild(texto5);

const lista1 = document.querySelector('#lista1')
lista1.append(item3)
lista1.append(item4)
lista1.append(item5) 

const tabla = document.querySelector('#tabla');
for (let i = 1; i <= 10; i++) {
    const dato = `${i} * 8 = ${ i * 8 }`
    const elemento = document.createElement('p');
    const texto = document.createTextNode(dato)  
    elemento.appendChild(texto);
    tabla.append(elemento)
};