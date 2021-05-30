const numA = parseInt(window.prompt('Ingresa un primer numero: '))
const numB = parseInt(window.prompt('Ingresa un segundo numero: '))
const numC = parseInt(window.prompt('Ingresa un tercer numero: '))

if (numA > numB && numA > numC)  {
    console.log(`El numero mayor es numA (${numA})`)
}
else if (numB > numA && numB > numC)  {
    console.log(`El numero mayor es numB (${numB})`)
}
else if (numC > numA && numC > numB)  {
    console.log(`El numero mayor es numC (${numC})`)
}
else {
    console.log('Ningun numero es mayor que los otros dos')
}