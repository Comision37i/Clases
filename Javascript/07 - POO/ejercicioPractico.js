/*Confeccionar una clase llamada suma, que contenga dos atributos (valor1, valor2) y tres métodos: cargarvalor1, cargarvalor2 y retornarresultado*/

function Suma(valor1, valor2){
    this.valor1 = valor1;
    this.valor2 = valor2;

    this.cargarValor1 = (valor1) => {
        this.valor1 = valor1;
    }
    this.cargarValor2 = (valor2) => {
        this.valor2 = valor2;
    }
    this.retornarResultado = () =>{
        return this.valor1 + this.valor2
    }
}

let suma1;
suma1 = new Suma(5, 10);
document.write(`La suma de 5 y 10: ${suma1.retornarResultado()} <br>`);

suma1.cargarValor1(70);
suma1.cargarValor2(30);
document.write(`La suma de 70 y 30 es: ${suma1.retornarResultado()} <br>`);