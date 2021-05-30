// 1:
// Pedir al usuario un numero entre 1 y 12
// Imprimir en consola el numero de días que corresponden a ese mes y su nombre
// p.ej.
// --> El mes 5 (Mayo) tiene 31 días

// const monthNum = window.prompt('Ingresa un numero de mes: ')

switch (monthNum)   {
    case '1':
        console.log(`El mes ${monthNum} (Enero) tiene 31 dias`)
        break;
    case '2':
        console.log(`El mes ${monthNum} (Febrero) tiene 28 dias`)
        break;
    case '3':
        console.log(`El mes ${monthNum} (Marzo) tiene 31 dias`)
        bre
    case '4':
        console.log(`El mes ${monthNum} (Abril) tiene 30 dias`)
        break;
    case '5':
        console.log(`El mes ${monthNum} (Abril) tiene 30 dias`)
        break;
    case '6':
        console.log(`El mes ${monthNum} (Junio) tiene 30 dias`)
        break;
    case '7':
        console.log(`El mes ${monthNum} (Julio) tiene 31 dias`)
        break;
    case '8':
        console.log(`El mes ${monthNum} (Agosto) tiene 30 dias`)
        break;
    case '8':
        console.log(`El mes ${monthNum} (Septiembre) tiene 31 dias`)
        break;
    case '10':
        console.log(`El mes ${monthNum} (Octubre) tiene 31 dias`)
        break;
    case '11':
        console.log(`El mes ${monthNum} (Noviembre) tiene 30 dias`)
    case '12':
        console.log(`El mes ${monthNum} (Diciembre) tiene 31 dias`)
        break; 
    default:
        console.log('Ingresa un numero de mes valido...')
}
    
        

//////////////////////////////////////////////////////////////////////
/**
 * 2:
 * Pedir al usuario que indique como esta su día
 * Opciones: Nublado, Soleado, Lluvioso, Nevado
 * Si escribe alguna de ellas, colocar un mensaje 
 * P.ej: soleado -> oh!, que buen clima para estar en la playa
 * P.ej: nevado -> oh!, que buen clima para estar en casa
 *  etc...
 * Sino
 * Pedir por prompt, Que describa que le gustaria hacer en su día
 */

const userWeather =window.prompt('Como esta el clima en tu localidad hoy? \n ...').toLowerCase()

switch (userWeather)    {
    case 'nublado':
        console.log('Nada mejor que un dia nublado para unas pelis en nitflix...')
        break;
    case 'soleado':
        console.log('Perfecto para un bronceado')
        break;
    case 'lluvioso':
        console.log('Ponte botas!!!')
        break;
    case 'nevado':
        console.log('Abrigate bien, nadie quiere un resfriado!')
        break;
    default:
        window.prompt('Cuentanos que quisieras hacer hoy en tu dia?')
}

//////////////////////////////////////////////////////////////////////
/**
 * 3:
 * Pedir el nombre de una persona
 * Verificar si el nombre termina con una vocal
 * imprimir que `Tu nombre termina con ${vocal}`
 * Sino
 * imprimir que `Tu nombre termina con ${consonante}`
 * -> Pedro
 * -> `Tu nombre termina con o`
 */

const nameToCheck = window.prompt('Ingresa el nombre de una persona: ')
const charToCheck = nameToCheck.slice(-1).toLowerCase()

const vowels = ['a','e','i','o','u']

if (charToCheck.includes(vowels)) {
    console.log(`Tu nombre termina con la vocal ${charToCheck}`)
}
else    {
    console.log(`Tu nombre termina con la consonante ${charToCheck}`)
}


//////////////////////////////////////////////////////////////////////
/**
 * 4:
 * Pedir el nombre de una persona
 * Imprimir el nombre de la persona al revés y en mayúsculas
 * P.ej: juan
 * -> NAUJ
 */

const nameToReverse = window.prompt('Ingresa un nombre para reviertir y mayus: ').toUpperCase()
const reversedname = nameToReverse.split("").reverse().join("")
console.log(reversedname)

// Pimer intento con for loop pero lo imprime en lineas separadas
// for (i = 0; i <= nameToReverse.length; i++) {
//     console.log(nameToReverse.substr(nameToReverse.length - i, 1))
// }
//////////////////////////////////////////////////////////////////////
/**
 * 5
 * Pedir una palabra por promt
 * Pedir un número entre 1 y 10
 * Duplicar esa cantidad de veces esa palabra e imprimir en consola
 * P.ej: 
 * "Kodemia"
 * 4
 * -> "Kodemia Kodemia Kodemia Kodemia"
 */

const word = window.prompt('Ingresa una palabra: ')
const numToRepeat = window.prompt('Ingresa cuantas veces quieres repetirla (del 1 al 10): ')
console.log(word.repeat(numToRepeat))