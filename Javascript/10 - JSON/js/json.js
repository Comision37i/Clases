/* const datos = `{
    "nombre": "Cristian",
    "apellido": "Gonzalez",
    "edad": 25,
    "dni": 12345678,
    "direccion": "Av. Siempre Viva 123",
    "telefono": 12345678,
    "email": "cristiang@gmail.com"
}`

const persona = JSON.parse(datos)

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.dni);
console.log(persona.direccion);
console.log(persona.telefono);
console.log(persona.email); */

/* console.log(datos.nombre);
console.log(datos.apellido);
console.log(datos.edad);
console.log(datos.dni);
console.log(datos.direccion);
console.log(datos.telefono);
console.log(datos.email); */


/* const datos = {
    nombre: "Cristian",
    apellido: "Gonzalez",
    edad: 25,
    dni: 12345678,
    direccion: "Av. Siempre Viva 123",
    telefono: 12345678,
    email: "cristiang@gmail.com"
}

console.log(typeof datos)

const datosJson = JSON.stringify(datos)
console.log(datosJson)
console.log(typeof datosJson) */

/* let turtle = JSON.stringify({breed: 'Turtle', occupation: 'Ninja'})
console.log(turtle)
console.log(turtle.breed)

let turtlecita = JSON.parse('{"breed": "Turtle", "occupation":"Ninja"}')
console.log(turtlecita);
console.log(turtlecita.breed) */

let usuario = {
    "id": "012345888",
    "username": "carlosrivera",
    "password": "ldjkvndlkjvngergdf",
    "data": { 
        "nombre": "Carlos Rivera",
        "email": "example@gmail.com",
        "city": "Tucumán",
        "country": "ARG"
    }
};

/* console.log(usuario.data.city) */

let jsonSerializado = JSON.stringify(usuario)
console.log(typeof jsonSerializado);

let jsonReconstruido = JSON.parse(jsonSerializado)
console.log(typeof jsonReconstruido);