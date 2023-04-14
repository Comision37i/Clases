function Auto(color, marca, modelo, anio){
    this.color = color;
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}

let auto = new Auto('rojo', 'fiat', 'bravo', 2008);
console.log(auto);

let auto1 = new Auto('blue', 'ford', 'mustang', 2020);
console.log(auto1);

let camioneta = new Auto('black', 'dodge', 'dakota', 2015);
console.log(camioneta);