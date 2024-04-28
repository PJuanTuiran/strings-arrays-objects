let calificaciones = prompt("ingresa tus calificaciones separadas por comas")

let numeros = calificaciones.split(",").map(e => parseInt(e))

let promedio = numeros.reduce((acc, numero) => {
    return acc + numero / numeros.length
}, 0)
 
console.log(promedio)