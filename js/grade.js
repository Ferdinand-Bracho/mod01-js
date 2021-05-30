const grade = window.prompt('Ingresa una calificacion numerica para ver la equivalencia: ')

switch (grade) {
    case '100' :
        console.log('Tu calificacion es A+')
        break;
    case '90' :
        console.log('Tu calificacion es A')
        break;
    case '80' :
        console.log('Tu calificacion es B')
        break;
    case '70' :
        console.log('Tu calificacion es C')
        break;
    case '60' :
        console.log('Tu calificacion es D')
        break;
    case '50' :
        console.log('Tu calificacion es E')
        break;
    default:
        console.log('Ingresa una calificacion valida')
}
