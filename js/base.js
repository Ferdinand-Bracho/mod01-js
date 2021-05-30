
/**
 * Pedir al usuario usuario un numero entre 1 y 10
 * Imprimir la tabla de multiplicar de ese número
 * p.ej. 
 * 3 x 1 = 3
 * 3 x 2 = 6
 */

const numToMulti = parseInt(window.prompt('Igresa un numero enre 1 y 10 para vre su table: '))

for (let i = 1; i < 10; i++)    {
    console.log(`${numToMulti} X ${i} = ${numToMulti * i}`)
}


/**
 * Pedir al usuario una oracion
 * Imprimir un string con todas las vocales
 * Imprimir un string con todas las consonantes
 * 
 */

// const sentenceToCheck = window.prompt('Ingresa una oracion para revisar: ').toLowerCase()
// const vowels = 'aeiou'
// const specialChar ='! @,.'
// let vowelsInSentence = ""
// let consonantsInSentence = ""
// let totalChar = sentenceToCheck.length

// for (let i = 0; i < sentencerToCheck.length; i++)   {

//     if (vowels.includes(sentencerToCheck[i])) {
//         vowelsInSentence += sentencerToCheck[i]
//         continue
//     }

//     else if (sentencerToCheck[i] === " ")   {
//         continue
//     }

//     else    {
//         consonantsInSentence += sentencerToCheck[i]
//     }
// }

// console.log(vowelsInSentence)
// console.log(consonantsInSentence)


/**
 * Pedir el usuario un numero entre 10 y 100
 * Imprimir todos los numeros pares que existen entre 1 y ese numero
 */

// const number = parseInt(window.prompt('Ingresa un numero entre 10 y 100: '))

// for (let i = 1; i < number; i++)    {
//     if (i % 2 === 0)    {
//         console.log(i)
//     }
// }