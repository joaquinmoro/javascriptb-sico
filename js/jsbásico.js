// Declarar variable
var edad;

// Asignar un valor a una variable
edad = 20;

// Declarar una variable asignándole valor en la mísma línea
var altura = 180;

// Tipos de datos
var numerico = 2;
var string = "hola";
var booleana = true;

// Array
var medidas = [180, 78]

// Declarar una función

function ejemploFuncion (altura, anchura) {
    var altura;
    var anchura;
    var area = altura * anchura;
    return area;
}

// Llamar una función
ejemploFuncion(10, 20);

// Declarar variable asignándole una función con un condicional

function opinionEdad(edad) {
    if (edad < 18) {
        console.log("Eres menor de edad");
    }
    else if (18 <= edad && edad < 65) {
        console.log("Eres adulto");
    }
    else {
        console.log("Eres mayor");
    }
}

// Llamar a una función con una condicional 
opinionEdad(21);



