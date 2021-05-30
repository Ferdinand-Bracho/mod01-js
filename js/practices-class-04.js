//////////////////////////////////////////////////////////////////////////
 /* 1
  * 
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
 
// Funcion sin retorno

function astericFun (numToPrint)    {
    const asteric = '*'
    
    for (let i = 0;i <= numToPrint; i++)    {
        console.log(`${asteric.repeat(i)}`)
    }
    for (let j = numToPrint - 1; j != 0; j--)   {
        console.log(`${asteric.repeat(j)}`)
    }
}

astericFun(8)

 ////////////////////////////////////////////////////////////////////
 /* 2
 * Pedir al usuario usuario un numero entre 1 y 10
 * Imprimir la tabla de multiplicar de ese número
 * p.ej. 
 * 3 x 1 = 3
 * 3 x 2 = 6
 */

//Funcion sin retorno

function mult(numToMulti)   {
    let counter = 1

    while (counter != 11)   {
        console.log(`${numToMulti} X ${counter} = ${numToMulti * counter}`)
        counter++
    }
}

mult(10)


////////////////////////////////////////////////////////////
/* 3
* Pedir una palabra por promt
* Pedir un número entre 1 y 10
* Duplicar esa cantidad de veces esa palabra e imprimir en consola
* P.ej: 
* "Kodemia"
* 4
* -> "Kodemia Kodemia Kodemia Kodemia"
*/

//Funcion con retorno

function wordRepeater(word, numToRepeat)   {
    let repeatedWord = word.repeat(numToRepeat)
    return repeatedWord
}

let result = wordRepeater('ferdinand', 4)
console.log(result)

///////////////////////////////////////////////////////////////////
/* 4
 * 
 * Pedir al usuario estos 3 datos
 * - Nombre
 * - Peso actual
 * Calcular el peso que tendria esa persona en la luna
 * Imprimirlo en consola
 * ** Opcional -> Crear una función **
 */
 
//Funcion con retorno

 function earthMoon(weightEarth)    {
    let weightMoon = (weightEarth * 1.622 / 9.81).toFixed(2)
    return weightMoon
 }

 let result = earthMoon(100)
 console.log(`Tu peso en la lunes es de ${result}`)

///////////////////////////////////////////////////////
/* 5
 * Pedir al usuario 2 numeros 
 * Imprimir en consola cual es el menor de los 2
 * Imprimir en consola cual es el mayor de los 2
 */

 function checkNum(numA, numB)  {
    if (numA > numB)  {
        console.log(`El numero menor es ${numB}
Y el numero mayor es ${numA}`)
    }
    else if (numB > numA) {
        console.log(`El numero menor es ${numA}
Y el numero mayor es ${numB}`)
    }
    else   {
        console.log('Ningun es mayor')
    }
 }
 
 checkNum(2, 5)

////////////////////////////////////////////////
/**
 * 6
 * Pedir al usuario por prompt un numero entre 1 y 100
 * verificar si es un par o impar
 * imprimir en resultado en consola
 * Máximo de lineas para este ejercicio, 2 lineas de código
 * Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */

 const num = parseInt(window.prompt('Ingresa un numero entre 1 y 100: '))

 function oddEven(num) {
    let result = num % 2 === 0 ? `El numero ${num} es par`:`El numero ${num} es impar`
    return result

 }

 console.log(oddEven(num))

////////////////////////////////////////////////
/**
 *  7
 * Pedir al usuario el dia de la semana 
 * p.ej. lunes, martes, ...
 * Imprimir en consola el número del dia de la semana equivalente
 * es decir:
 * domingo -> 1, lunes -> 2, martes -> 3, etc...
 */

 const day = window.prompt('Ingresa un dia de la semana: ').toLowerCase()

 function weekDay(day)  {
     let result
    switch (day)  {
        case 'domingo':
            result ='domingo -> 1'
            break;
        case 'lunes':
            result ='lunes -> 2'
            break;
        case 'martes':
            result ='martes -> 3'
            break;
        case 'miercoles':
            result ='miercoles -> 4'
            break;
        case 'jueves':
            result ='jueves -> 5'
            break;
        case 'viernes':
            result ='viernes -> 6'
            break;
        case 'sabado':
            result ='sabado -> 7'
        default:
            result ='Intenta otra vez ingresando un dia de la semana valido... '
    }
    return result  
 }

 console.log(weekDay(day))


//////////////////////////////////////////////////////////////////////
/**
 * 8
 * Pedir el nombre de una persona
 * Imprimir el nombre de la persona al revés y en mayúsculas
 * P.ej: juan
 * -> NAUJ
 */

 const nameToReverse = window.prompt('Ingresa un nombre para reviertir y mayus: ').toUpperCase()
 function reversedn(nameToReverse)  {
    const reversedname = nameToReverse.split("").reverse().join("")
    return reversedname
 }

 console.log(reversedn(nameToReverse))

/////////////////////////////////////////////////////////
/*  9
 * celcius to fahrenheit
 * 
 * 
 */

const celsius = parseFloat(window.prompt('Ingresa los grados celsius en tu ciudad'))
function celToFah(celcius)  {
    const fahrenheit = (celsius * 9 / 5)+ 32
    return fahrenheit
}

alert(`Los grados fahrenheit correspondientes son: ${celToFah(celsius)}`)

///////////////////////////////////////////////////////////
/* 10
 * Largest Num
 */


const numA = parseInt(window.prompt('Ingresa un primer numero: '))
const numB = parseInt(window.prompt('Ingresa un segundo numero: '))
const numC = parseInt(window.prompt('Ingresa un tercer numero: '))

function largestNum(numA, numB, numC)   {
    if (numA > numB && numA > numC)  {
        return `El numero mayor es numA (${numA})`
    }
    else if (numB > numA && numB > numC)  {
        return `El numero mayor es numB (${numB})`
    }
    else if (numC > numA && numC > numB)  {
        return `El numero mayor es numC (${numC})`
    }
    else {
        return 'Ningun numero es mayor que los otros dos'
    }
}

console.log(largestNum(numA, numB, numC))
