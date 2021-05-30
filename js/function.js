/**
 * Convertidor de temperatura
 * Generar una función, que reciba (grados, entrada, salída ) 
 * Default es ºC a ºF
 * p.ej. (100,c,f) -> 100 ºC a ºF -> Default
 * p.ej. (100,f,c) -> 100 ºF a ºC
 * C to F -> (celsius*9)/5 + 32
 * F to C -> ((fahrenheit - 32)*5)/9
 *
 */

//error handlin
// function tempConverter(temp, initial = 'c', finish = 'f')    {
//     return initial == 'c' ? 
//         `${(temp * 9) /5 +32}` : 
//         `${(((temp - 32)*5) /9).toFixed(2)}`

    // if (initial === 'c')    {
    //     return `${(temp * 9) /5 +32}`
    // }
    // else {
    //     return `${(((temp - 32)*5) /9).toFixed(2)}`
    // }
//}

// console.log(tempConverter(100 , 'f'))

///////////////////////////////////////////////////////////////
//Simulando ATM 

let saldo = 2000
let consultas = 0
let depositos = 0
let retiros = 0
let cantidad = 0
let cuenta = 0

const  retiro = function(cantidad)   {
    return saldo -= cantidad
}

const deposito = function(cantidad)    {
    return saldo += cantidad
}

const consulta = function()    {
    return `Tu saldo es $${saldo} - Numero de consulta es: ${consultas} - Numero de depositos es ${depositos}  - Numero de retiros ${retiros}`
}

const traspaso = function(cuenta, cantidad)    {
    saldo -= cantidad
    return `Envio exitoso a cuenta ${cuenta} la cantidad de $${cantidad}`
}

let accion = window.prompt('Selecciona una accion:\n1-Retiro\n2-Deposito\n3-Consulta\n4-Traspaso\n5-Salir')

const numAcciones = '1234'
while (accion != '5')   {
    switch (accion) {

        case '1':
            cantidad = parseInt(window.prompt('Ingresa una cantidad a retirar: $'))
            if (cantidad <= saldo)  { 
                retiro(cantidad)
                console.log(`Retiro exitoso a tu cuenta\nTu saldo actual es de $${saldo}`)
                retiros++
            }
            else {
                console.log("Lo sentidmos!. No cuentas con fondos para realizar ese retiro")
            }
            break

        case '2':
            cantidad = parseInt(window.prompt('Ingresa una cantidad a depositar: $'))
            deposito(cantidad)
            console.log(`Deposito exitosi, tu saldo actual es de $${saldo}`)
            depositos++
            break

        case '3':
            alert(consulta())
            consultas++
            break

        case '4':
            cuenta = parseInt(window.prompt('Ingresa un numero de cuenta para tu traspaso: '))
            cantidad = parseInt(window.prompt('Ingresa una cantidad a traspasar: $'))
            if (cantidad <= saldo)  {
                console.log(traspaso(cuenta, cantidad))
                console.log(`Tu saldo actual es $${saldo}`)
            }
            else    {
                console.log('Lo sentidmos!. No cuentas con fondos para realizar ese traspaso')
            }
            break

        default:
            break
    }
    cantidad = 0
    accion = window.prompt('Selecciona una accion:\n1-Retiro\n2-Deposito\n3-Consulta\n4-Traspaso\n5-Salir')
}