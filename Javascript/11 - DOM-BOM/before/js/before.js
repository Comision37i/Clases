const lista1 = document.querySelector('#lista1');

const elemento1 = document.createElement('li');
const texto1 = document.createTextNode('prepend');
elemento1.appendChild(texto1);
lista1.prepend(elemento1);

const elemento2 = document.createElement('li');
const texto2 = document.createTextNode('append');
elemento2.appendChild(texto2);
lista1.append(elemento2);

const titulo1 = document.createElement('h1')
const textTitulo1 = document.createTextNode('Titulo 1');
titulo1.appendChild(textTitulo1);

const titulo2 = document.createElement('h2')
const textTitulo2 = document.createTextNode('Titulo 2');
titulo2.appendChild(textTitulo2);

lista1.before(titulo1);
lista1.after(titulo2);