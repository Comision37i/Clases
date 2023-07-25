let auto = new Object();
auto.color = 'rojo';
auto.marca = 'fiat';
auto['modelo'] = 'bravo';
auto.anio = 2008;
auto.potencia = '130bhp';

console.log(auto)

let auto2 = Object.create(auto)
console.log(auto2.marca)
console.log(auto2.color)
console.log(auto2.anio)

auto2.marca = 'ford';
console.log(auto2.marca)