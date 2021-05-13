// Metodos de array

/*
Escribir una funcion que tome como parametro un array de numeros e imprima en
consola el array al revés
arrayReverse([1,2,3,4]). 
-> [4,3,2,1]
*/

let arrayOne = [1,2,3,4,5]

let reverser = (arrayToReverse) => arrayToReverse.reverse()

console.log(reverser(arrayOne))
//////////////////////////////////////////////

/*
Escribir una funcion que tome como parametro 2 arrays, y devuelva un numero 
con la suma total de esos 2 arrays.
arrayReduce([1,2,3,4],[1,2]). 
-> 13
*/

const arr = [1,2,3,4,5,5], arrTwo = [1,2,3,4,5,5]

const sumFun = (total, value) => total += value

const sumTwoArr = (arrayOne, arrayTwo) => arrayOne.reduce(sumFun,0) + arrayTwo.reduce(sumFun,0)

console.log(sumTwoArr(arr, arrTwo))
//////////////////////////////////////////////

/*
Escribir una función que tome como parametro 2 arrays, y devuelva un array 
con los numeros repetidos en los 2 arrays
arrayReduce([1,2,3,4],[1,2]). 
-> [1,2]
*/


const arrayOnee = [1,2,3,4,5,'se','jo'], arrayTwoo = [2,5,'se','jo']
  
const TwoarrFunc = (arrayO, arrayT) => arrayO.filter((value) => {
    if (arrayT.indexOf(value) != -1) {
        return arrayT.indexOf(value)
    }
})

// (e) => arrayY.indexOf(e) > -1

//const TwoarrFunc = (arrayO, arrayT) => arrayO.filter((value) => arrayT.indexOf(value) != -1)

console.log(TwoarrFunc(arrayOnee, arrayTwoo))
