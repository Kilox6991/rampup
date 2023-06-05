// ITERACIÓN 1: VARIABLES

// 1.1 Crea una variable developer1 y asignale un nombre cualquiera.

//let developer1 = "Manuel"

// 1.2.Imprime en consola el texto "La primera desarrolladora se llama ****"

// console.log("La primera desarrolladora se llama Paula")

// 1.3.Crea una variable developer2 y asigna otro nombre.

//let developer2 = "Paula"

// 1.4. Imprime en consola "El segundo desarrollador se llama ****"

// console.log("El segundo desarrollador se llama Pepe")

// ITERACIÓN 2: CONDICIONALES

// 2.1 Dependiendo de qué desarrollador tenga el nombre más largo se debe imprimir en consola:

// "El nombre **** es el más largo con ** caracteres".

// Pero si ambos tienen el mismo número de caracteres entonces imprime:

// "Qué casualidad, ambos nombres tienen ** caracteres".

/*if (developer1.legth > developer2.legth) {
    console.log("El nombre" + developer1 + "es el más largo con" + developer1.legth + "caracteres")
}
else if (developer2.leght > developer2.leght) {
    console.log("El nombre" + developer2 + "es el más largo con" + developer2.legth + "caracteres")
}
else
    console.log ("Qué casualidad, ambos nombres tienen" + developer1.legth + "caracteres")*/



// ITERACIÓN 3: FUNCIONES Y BUCLES

// Descomenta la siguiente linea de código.
let input = prompt("Escribe un nombre");

// 3.1 Declara una función que acepte una palabra como parámetro y la devuelva con todos sus caracteres en mayúsculas y separados por espacios. Ejemplo: Para "Ana" devolverá "A N A".
function mayusculas(palabra) {
    console.log(input.toUpperCase());  
}
mayusculas;

// 3.2 Declara una función que acepte un nombre como parámetro y devuelva el número de palabras que tiene el nombre. Ejemplo: Para "Antonio Alberto Jesús" devolverá 3.

function contarPalabras(nombre) {
    let palabras = nombre.split(" ");
    return palabras.length;
}

let nombre = "Antonio Alberto Jesús"
let cantidad = contarPalabras(nombre);
console.log("Numero de palabras " + cantidad)

// 3.3 Declara una tercera función llamada printUserDetails que haga uso de las dos funciones anteriores y reciba la entrada del usuario en el prompt. La función debe imprimir en consola la siguiente salida:
function printUserDetails(params) {
   console.log(mayusculas); 
   console.log(contarPalabras);
}

// Para la entrada "Antonio Alberto Jesús" la consola imprimirá:

/*

DETALLES para 'Antonio Alberto Jesus':
Número de palabras 3:
- A N T O N I O (7 caracteres)
- A L B E R T O (7 caracteres)
- J E S U S (5 caracteres)

*/

// AQUÍ TU CÓDIGO

// Happy coding!