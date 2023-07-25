const lista1 = document.querySelectorAll('#item2, #celda');
for(let elemento of lista1){
    elemento.style.backgroundColor = 'red'
};

const lista2 = document.querySelectorAll('.fila');
for(let elemento of lista2){
    elemento.style.backgroundColor = 'blue'
};

const lista3 = document.querySelectorAll('li')
for(let elemento of lista3){
    elemento.style.fontFamily = 'Courier';
};

const lista4 = document.querySelectorAll('li, td');
for(let elemento of lista4){
    elemento.style.padding = '10px';
};


const lista5 = document.querySelectorAll('table span');
for(let elemento of lista5){
    elemento.style.backgroundColor = 'green';
};

const lista6 = document.querySelectorAll('li>span');
for(let elemento of lista6){
    elemento.style.backgroundColor = 'pink';
}