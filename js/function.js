//! Simulando ATM - Arrow Functions

//! Incializando variables
let saldo = 2000
let consultas = 0
let depositos = 0
let retiros = 0
let cantidad = 0
let cuenta = 0

//! Incializando funcciones
const retiro = (cantidad) => saldo -= cantidad

const deposito = (cantidad) => saldo += cantidad

const consulta = () => `Tu saldo es $${saldo}\n\nDatos de la session\nConsultas: ${consultas}\nDepositos: ${depositos}\nRetiros: ${retiros}`

const traspaso = (cuenta, cantidad) => (
    saldo -= cantidad, 
    `Traspaso exitoso a cuenta ${cuenta} la cantidad de $${cantidad}`
)

//! Pidiendo seleccionar una opcion al usuario
let accion = window.prompt('Selecciona una accion:\n1-Retiro\n2-Deposito\n3-Consulta\n4-Traspaso\n5-Salir')

//! Abriedno el while loop con el swith dentro para accionar en base a al seleccion del usuario y preguntar nuevamente
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
                console.error("Lo sentidmos!. No cuentas con fondos para realizar ese retiro")
            }
            break

        case '2':
            cantidad = parseInt(window.prompt('Ingresa una cantidad a depositar: $'))
            deposito(cantidad)
            console.log(`Deposito exitoso, tu saldo actual es de $${saldo}`)
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
                console.error('Lo sentidmos!. No cuentas con fondos para realizar ese traspaso')
            }
            break

        default:
            break
    }
    cantidad = 0
    accion = window.prompt('Selecciona una accion:\n1-Retiro\n2-Deposito\n3-Consulta\n4-Traspaso\n5-Salir')
}