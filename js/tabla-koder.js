$(document).ready(() => {    
// !Pintar Tabla en pantalla principal 
    
    // !Funcion para pintar tabla (toma un arry como argumento al ejecutarse)
    const printTable = objectKoder => {
        let postTableKoders = ''
        for (item in objectKoder) {
            let koder = objectKoder[item]
            postTableKoders += `
            <tr>
                <td>${koder.name}</td>
                <td>${koder.lastName}</td>
                <td>${parseInt(koder.age)}</td>
                <td>${koder.position}</td>
                <td><a href="koder.html?hashkoder=${item}" ><button class="btn btn-secondary" id="btn-delete-koder">Ver/Editar</button></a></td>
                <td><button class="btn btn-danger btn-delete-koder" data-id="${item}" >Eliminar</button></td>
            </tr>                   
            `                           
        } 
        $('.t-koder tbody').html(postTableKoders)
    }
    
    // !Async function con try catch para jalar data y ejecutar printable() con la data como argumento 
    const printTableFinal = async () => {
        try {
            await $.get('https://sessiones-js-default-rtdb.firebaseio.com/koders/.json', (data) => {
                printTable(data)
            })
        } catch (error) {
            console.log('Error al intentar mostrar la tabla')
            console.log(error)
        }
    }
    
    printTableFinal()
    
    // ? //////////////////////////////////////////////////////////////////////////////////////
// !Alta de nuevo Koder/Mentor

    // !Funcion para limpiarlos campos inputs
    const cleanInput = () => {
        inputName.value = ''
        inputLastName.value = ''
        inputAge.value = ''
        inputPosition.value = ''
    }
    
    // !Evento para accionar el alta 
    $('#btn-form-alta').click(() => {
        // ! Seteo datos
        let inputName = $('#inputName').val()
        let inputLastName = $('#inputLastName').val()
        let inputAge = $('#inputAge').val()
        let inputPosition = $('#inputPosition').val()
    
        // !Validacion de compos
        if (inputName === '' || 
            inputLastName === '' || 
            inputAge === '' || 
            inputPosition === '') {
            alert('Completa los campos obligatorios para Alta de Koder')
            cleanInput()
            return
        }
        
        // !Seteo nuevo koder obj
        let newKoder = {
            name: inputName,
            lastName: inputLastName,
            age: parseInt(inputAge),
            position: inputPosition
        }
    
        // !Async function to post nuevo koder a la db
        const postNewKoder = async () => {
            try {                
                await $.post('https://sessiones-js-default-rtdb.firebaseio.com/koders/.json', JSON.stringify(newKoder), (response) => {
                    cleanInput()
                    printTableFinal()
                    console.log(response)
                })
            }catch(error){
                console.log('Error al intentar cargar nuevo Koder')
                console.log(error)
            }
        }
        postNewKoder()
    })
    
    // ? //////////////////////////////////////////////////////////////////////////////////////
    // ! Eliminar Koder seleccionado

    $('.t-koder').on('click', '.btn-delete-koder', function() {
        let koderId = $(this).data('id')

        // !Async function para eliminar Koder seleccionado
        const deleteKoder = async () => {
            try{
                await fetch(`https://sessiones-js-default-rtdb.firebaseio.com/koders/${koderId}/.json`, { 
                    method: 'DELETE'
                    }).then(() => {
                    console.log(`Koder ${koderId} eliminado con exito`)
                    printTableFinal()
                    })
            }catch(error){
                console.log('Error al intentar eliminar Koder seleccionado')
                console.log(error)
            }       
        }
        deleteKoder()
    })
    
    // ? //////////////////////////////////////////////////////////////////////////////////////

})
