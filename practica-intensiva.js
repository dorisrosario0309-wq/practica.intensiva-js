//Problema 1: Múltiplos de 3 o 5
//Si enumeramos todos los números naturales por
//debajo de 10 que son múltiplos de 3 o 5, obtenemos
//3, 5, 6 y 9. La suma de estos múltiplos es 23.
//Encuentra la suma de todos los múltiplos de 3 o 5
// por debajo del valor del parámetro proporcionado .number
function multiples0f30r5(number) {
  let suma = 0;

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      suma += i;
    }
  }

  return suma;
}
console.log(sumaMultiplos(10)); //la suma es 23




//Problema 2: Números de Fibonacci iguales
//Cada nuevo término en la secuencia de Fibonacci
//se genera sumando los dos términos anteriores.
//Empezando por 1 y 2, los primeros 10 términos serán:
//1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//Considerando los términos en la secuencia de Fibonacci
//cuyos valores no exceden , se encuentra la suma de los términos pares.n
