const enterPassword = () => {
    return prompt("ingresa una contraseña segura")
}
const verifyLength = (password) => {
    if (password.length < 8) {
        alert("la contraseña necesita  almenos 8 caracteres")
    } else {
        alert("la contraseña tiene al menos 8 caracteres")
    }
}
const containsNumber = (password) => {
    let flag = false
    for (i of password) {
        if (!isNaN(parseInt(i))) {
            // juan1
            flag = true
        }
    }

    if (flag) {
        alert("la contraseña tiene almenos un numero")
    } else {
        alert("La contraseña necesita al menos un numero")
    }
    
}
const containsLetter = (password) => {
    let flag = false
    for (i = 0; i < password.length; i++) {
        if (isNaN(password[i])) {
            flag = true
        }
    }
    if (flag) {
        alert("contiene al menos una letra")
    } else {
        alert("no contiene ninguna letra")
      
    }
    
}
const containsCharacter = (password) => {
    let flag = false
    let characters = `\! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; " ' ? < > , . | / \ ~ \``
    for (i of characters) {
        if (password.includes(i)) {
            flag = true
        }
    }
    if (flag) {
        alert("si contiene algun caracter especial")
    } else {
        alert("No contiene ningun caracter especial")
    }
    
}
const main = () => {
    let password = enterPassword()
    verifyLength(password)
    containsNumber(password)
    containsLetter(password)
    containsCharacter(password)
}
main()




