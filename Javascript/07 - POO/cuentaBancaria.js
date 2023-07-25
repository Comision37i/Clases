function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
    
    this.depositar = (dinero) => {
        this.saldo = this.saldo + dinero;
    };
    this.extraer = (dinero) => {
        this.saldo = this.saldo - dinero;
    };
}

/* function depositar(dinero){
    this.saldo = this.saldo + dinero;
}

function extraer(dinero){
    this.saldo = this.saldo - dinero;
} */

let cliente1 = new Cliente('Juan Palotes', 1200);
document.write(`Nombre del cliente: ${cliente1.nombre} <br>`);
document.write(`Saldo inicial: ${cliente1.saldo} <br>`);
cliente1.depositar(120);
document.write(`Saldo luego de depositar $120 -----> ${cliente1.saldo} <br>`);
cliente1.extraer(900);
document.write(`Saldo luego de extraer $1000 -----> ${cliente1.saldo} <br>`);