// Ejercicios 1, 2 y 3Unicamente usar el ciclo While

//////////////////////////////////////////////////////////////////////////
/** 
 * 1: 
 * Pedir al usuario usuario un numero entre 1 y 10
 * Imprimir la tabla de multiplicar de ese número
 * p.ej. 
 * 3 x 1 = 3
 * 3 x 2 = 6
 */

const numToMulti = parseInt(window.prompt('Igresa un numero enre 1 y 10 para vre su table: '))
let counter = 1

while (counter != 11)   {
    console.log(`${numToMulti} X ${counter} = ${numToMulti * counter}`)
    counter++
}

//////////////////////////////////////////////////////////////////////////
/**
 * 2:
 * Pedir al usuario una oracion
 * Imprimir un string con todas las vocales
 * Imprimir un string con todas las consonantes
 * 
 */

 const sentenceToCheck = window.prompt('Ingresa una oracion para revisar: ').toLowerCase()
 const vowels = 'aeiou'
 const specialChar ='! @,.'
 let vowelsInSentence = ""
 let consonantsInSentence = ""
 let totalChar = sentenceToCheck.length
 let counter = 0
 
 while (counter != totalChar)  {
 
     if (vowels.includes(sentenceToCheck[counter]))    {
         vowelsInSentence += sentenceToCheck[counter]
         counter++
         continue
     }
     else if (specialChar.includes(sentenceToCheck[counter]))  {
         counter++
         continue
     }
     else    {
         consonantsInSentence += sentenceToCheck[counter]
         counter++
     }
 }
 
 console.log(vowelsInSentence)
 console.log(consonantsInSentence)

//////////////////////////////////////////////////////////////////////////
/**
 * 3:
 * Pedir el usuario un numero entre 10 y 100
 * Imprimir todos los numeros pares que existen entre 1 y ese numero
 */

const number = parseInt(window.prompt('Ingresa un numero entre 10 y 100: '))

let counter = 1
while (counter < number)    {
    if (counter % 2 === 0)    {
        console.log(counter)
    }
    counter++
}

//////////////////////////////////////////////////////////////////////////
// Resolver 4 y 5 con For y While

/**
 * 4:
 * Pedir el usuario una oracion
 * Imprimir en consola si una oración es un palindromo (puede contener espacios)
 * p.ej. anita lava la tina 
 * -> La oración "anita lava la tina" es un palindromo
 */

const sentence = window.prompt('Ingresa una oracion: ')
let sentenceWithOutSpace = ''
const numIte = sentenceWithOutSpace.length / 2
let counter = 0

for (let i =0; i < sentence.length; i++)   {
    if (sentence[i] != ' ')    {
        sentenceWithOutSpace += sentence[i]
    } 
}

while   (counter < numIte) {
   if (sentence[counter] != sentenceWithOutSpace.length[-1 -counter])   {
       console.log(sentenceWithOutSpace[counter])
       console.log(sentenceWithOutSpace.length[-1 -counter])
       console.log('No es un palindromo')
       break
   }
   counter++
}

if (counter === numIte) {
    console.log('Es un palindromo')
}
//////////////////////////////////////////////////////////////////////////
/**
 * 5:
 * pedir el usuario un numero entre 1 y 10
 * Imprimir en consola el siguiente patrón
 * donde la cantidad mas grande de * es el Numero del usuario
 * P.ej. el usuario introduce 5 
 * Resultado esperado

 *
 **
 ***
 ****
 *****
 ****
 ***
 **
 *
*/

const numToPrint = parseInt(window.prompt('Ingresa un numero entre 1 y 10: '))
const asteric = '*'


for (let i = 0;i <= numToPrint; i++)    {
    console.log(`${asteric.repeat(i)}`)
}
for (let j = numToPrint - 1; j != 0; j--)   {
    console.log(`${asteric.repeat(j)}`)
}

//////////////////////////////////////////////////////////////////////////