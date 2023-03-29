/*Confeccionar un programa que permita cargar el nombre de un usuario y su mail por teclado. Mostrar posteriormente los datos en la página HTML.*/

let nombreUsuario, emailUsuario;

nombreUsuario = prompt('Ingrese el nombre del usuario: ');
emailUsuario = prompt('Ingrese el email del usuario: ');

/* document.write(`El nombre de usuario es ${nombreUsuario} y su email es ${emailUsuario}`); */

document.write('El nombre de usuario es ' + nombreUsuario + ' y su email es ' + emailUsuario);

