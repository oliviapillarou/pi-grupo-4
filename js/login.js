// Selectores del DOM
let formulario = document.querySelector("#formLogin")
let mail = document.querySelector("#mail")
let contraseña = document.querySelector("#contra")
let divMail = document.querySelector("#div1")
let divContra = document.querySelector("#div2")
let divContra2 = document.querySelector("#div3")

formulario.addEventListener("submit", function(evento) {
    
    evento.preventDefault()

    if (mail.value == "") {
        divMail.innerText = "Complete este campo.";
    }

    else if (contraseña.value == "") {
        divContra.innerText = "Complete este campo.";
    }

    else if (contraseña.value.length < 6) {
        divContra2.innerText = "La contraseña tiene que tener mas de 6 caracteres";
        divContra.innerText = "";
    }

    else {
        let usuario = {
        mail: mail.value,
        contra: contraseña.value
        }  

        let usuarioString = JSON.stringify(usuario);

        sessionStorage.setItem("usuario", usuarioString);

        this.submit()
        
    }
       

    

})

