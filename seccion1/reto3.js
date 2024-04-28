const enterEmail = () => {
    return prompt ("ingresa el correo electronico")
}

const containsAt = (email) => {
    
    let at = "@"
    let cont = 0
    for (i of email) {
        if ( i === at) {
            cont++
        }
    }
    if (cont > 1) {
        alert("el email no puede contener  mas de un arroba")
        
    }
    else if (cont === 0) {
        alert("agrega un arroba porfavor")
    }

}


const containsSpot = (email) => {
    let indexAt = email.indexOf("@")
    let flag = false
    for (let i = indexAt; i < email.length; i++) {
      
        if (email[i]+ 1 === ".") {
            flag = true
        }
        
    }
    if (flag) {
        alert("tiene un punto despues del arroba")
        
    }
  
}

const containsSpace = (email) => {
    if (email.includes(" ")) {
        alert("el email no puede contener espacios en blanco")
    }
}



const main = () => {
    let email = enterEmail()
    containsAt(email)
    containsSpot(email)
    containsSpace(email)
}

main()






