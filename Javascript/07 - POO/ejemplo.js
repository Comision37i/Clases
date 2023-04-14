/* let auto = {
    color: 'verde',
    marca: 'fiat',
    modelo: 'bravo',
    año: 2008,
    potencia: '130bph',
    precio: 70000
} */
/* console.log(auto.precio) */

/* auto.precio = 65000;
console.log(auto.precio) */
/* delete auto.precio
console.log(auto); */

/* let llaves = Object.keys(auto);
console.log(llaves)
for (let i = 0; i < llaves.length; i++){
    let llave = llaves[i];
    console.log(auto[llave]);
} */

let products = [
    {id: 1, name: 'Leche', price: 120, categories: ['familiar', 'comida']},
    {id: 2, name: 'Arroz', price: 80, categories: ['familiar', 'comida']},
    {id: 3, name: 'Lavadora', price: 7800, categories: ['electrodomésticos']}
]

for (let i = 0; i < products.length; i++){
    let product = products[i];
    console.log(product.name);
    console.log(`Id: ${product.id}`);
    console.log(`Precio: ${product.price}`);
    console.log(`Categorías: ${product.categories}`);
}