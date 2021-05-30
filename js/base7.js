// Ejercicio 1 .forEach()
// Dado un array con solo números
// obtener el valor mas alto
// input: [1,4,3,2,5]
// output: -> 5

// let arrExOne = [1,2,3,4,5,99]
// let greater = arrExOne[0]

// arrExOne.forEach((value) => value > greater ? greater = value: '')
// console.log(greater)

///////////////////////////////////////////////////////////////////////
// ejercicio 2 .forEach() o .map() o for()
// función
// convertir todos los elementos numericos de un array
// a strings
// input: [1,2,3,4,5]
// output -> ['1,','2','3','4','5']

// let arrExTwo = [1,2,3,4,5]
// let arrExTwoString = []

// arrExTwo.forEach((value) => arrExTwoString += value.toString())

// console.log(arrExTwoString)

///////////////////////////////////////////////////////////////////////
// Ejercicio 3 .funcion que dados 2 parametros .forEach() o .map() o for()
// p1 = año de inicio
// p2 = año de fin
// y devuelva un array con los años que son bisiestos
// que se encuentran en ese rango
// [1990, 2000, 2001, 2020]
// -> [2000,2020]

// let yInit = 2000
// const yFin = 2020
// let resultingYears = []


// Si el año es uniformemente divisible por 4, vaya al paso 2. De lo contrario, vaya al paso 5.
// Si el año es uniformemente divisible por 100, vaya al paso 3. De lo contrario, vaya al paso 4.
// Si el año es uniformemente divisible por 400, vaya al paso 4. De lo contrario, vaya al paso 5.
// El año es un año bisiesto (tiene 366 días).
// El año no es un año bisiesto (tiene 365 días).