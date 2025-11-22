// Selectores del DOM
let boton = document.querySelector("#Info")
let formulario = document.querySelector("#formLogin")
let mail = document.querySelector("#mail")
let contraseña = document.querySelector("#contra")
let reContra = document.querySelector("#reContra")
let terminos = document.querySelector("#info")
let divMail = document.querySelector("#div1")
let divContra = document.querySelector("#div2")
let divContra2 = document.querySelector("#div3")
let divReContra = document.querySelector("#div4")
let divAcepto = document.querySelector("#div5")
let divInfo = document.querySelector("#botonDiv")

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault()

    if (mail.value == "") {
        divMail.innerText = "Complete este campo.";
        divContra.innerText = "";
        divContra2.innerText = "";
    }

    else if (contraseña.value == "") {
        divContra.innerText = "Complete este campo.";
        divMail.innerText = "";
        divContra2.innerText = "";
    }

    else if (contraseña.value.length < 6) {
        divContra2.innerText = "La contraseña tiene que tener mas de 6 caracteres";
        divContra.innerText = "";
    }

    else if (reContra.value == "") {
        divReContra.innerText = "Complete este campo";
        divContra2.innerText = "";
        divContra.innerText = "";
    }

    else if (reContra.value != contraseña.value) {
        divReContra.innerText = "La contraseña tiene que ser igual";
        divContra2.innerText = "";
        divContra.innerText = "";
    }

    else if (boton.checked == false) {
        botonDiv.innerText = "Tenes que aceptar los terminos y condiciones";
        divContra2.innerText = "";
        divContra.innerText = "";
    }

    else {
        this.submit()
    }

})

