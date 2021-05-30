/**
 * For
 * Escribir un programa de arroje la suma de los multiplos de 3, 5 o 7 que hay entre 1 y 100
 * 
//  */
// let sum = 0
// for (let i = 1; i <= 100; i++)  {
//     if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0)    {
//         sum += i
//     }
// }

// console.log(sum)

// //////////////////////////////////////////////////////////////////
//  /**
//   * While
//   * Escribir un programa que le pida al usuario un numero
//   * que imprima en consola el numero dado si es positivo
//   * si el numero es negativo, salir del ciclo
//   * 
//   */

//  let numToPrint = parseInt(window.prompt('Ingresa un numero: '))

//  while (numToPrint > 0) {
//      console.log(numToPrint)
//      numToPrint = parseInt(window.prompt('Ingresa un numero: '))
//  }

//////////////////////////////////////////////////////////////////
 /**
 * Dado los siguientes 2 strings
 * 'smtp'
 * 'aeiou'
 * Imprimir en consola las siguientes combinaciones
 * -> sa, se, si, so , su 
 * -> ma, me, mi, mo , mu 
 * -> ta, te, ti, to , tu 
 * -> pa, pe, pi, po , pu
 */

const str1 = 'smtp'
const str2 = 'aeiou'

for (let i = 0; i <= str1.length; i++)    {
    let result = ''
    for (let j = 0;j <= str2.length; j++) {
        result += str1.substr(i, 1) + str2.substr(j, 1) + ';'
    }
    console.log(result)
}