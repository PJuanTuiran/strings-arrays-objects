const users = {
    
}

const enterFullName = e => {
    prompt("Ingresa tu nombre y apellido separado por un espacio")
}
const addMoreFullName = () => confirm("Desea agregar otro nombre? Si(ACEPTAR) / No(CANCELAR)")
const converToLowerCase = (fullName) => fullName.toLowerCase()
const separateFullName = (toLowerCaseFullName) => toLowerCaseFullName.split(" ")
const getTheFirstLetters = (arrName) => {
    let name = arrName[0].slice(0,3)
    let lastName = arrName[1].slice(0,3)
    return {name, lastName}
}
const concatenatedNameAndLastName = (theFirstLetters) => theFirstLetters.name.concat(theFirstLetters.lastName) 
const generateEmail = (nameUserConcatenated) => {
    let dominio = "@myDomain.com"
    return nameUserConcatenated.concat(dominio)
}  
const addNameUserAndEmail = (nameUserConcatenated, email) => {
    users[nameUserConcatenated] = email
    console.log(users)
}
const verifyUsers = () => {
    let nameusers = Object.keys(users)
    console.log(nameusers)
}

function main() {
    let fullName = enterFullName(respuestaToAdd)
    let respuestaToAdd = addMoreFullName()
    let toLowerCaseFullName = converToLowerCase(fullName)
    let arrName = separateFullName(toLowerCaseFullName)
    let theFirstLetters = getTheFirstLetters(arrName)
    let nameUserConcatenated = concatenatedNameAndLastName(theFirstLetters)
    let email = generateEmail(nameUserConcatenated)
    addNameUserAndEmail(nameUserConcatenated, email)
    verifyUsers()
}

main()

