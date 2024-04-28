let calificacionesEstudiantes = prompt("Ingresa las calificaciones separadas por comas")
let numeros = calificacionesEstudiantes.split(",").map(e => parseInt(e))
let promedio = numeros.reduce((acc, numero) => acc + numero, 0) / numeros.length
let calificacionMinima = Math.min(...numeros)
let calificacionMaxima = Math.max(...numeros)
let numeroDeAprobados = numeros.filter((e) => e >= 70).length
let numeroDeReprobados = numeros.filter((e) => e < 70).length
let listOrdenada = numeros.sort((a, b) => b - a)
alert(`promedio de los estudiantes ${promedio}`)
alert(`calificacion minima ${calificacionMinima}`)
alert(`calificacion maxima  ${calificacionMaxima}`)
alert(`numero de estudiantes aprobados ${numeroDeAprobados}`)
alert(`numero de estudiantes reprobados ${numeroDeReprobados}`)
alert(`numeros ordenados de mayor a menor  ${listOrdenada}`)
