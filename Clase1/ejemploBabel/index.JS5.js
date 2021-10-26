'use strict';

var mensaje = 'Hola Mundo! a toda la clase';
console.log(mensaje);

var sumar = function sumar(a, b) {
  return a + b;
};
var dobleDe = function dobleDe(a) {
  return 2 * a;
};

console.log('La suma da ' + sumar(14, 12));
console.log('El doble de 8 es ' + dobleDe(8));
