let buscador = document.querySelector(".buscador")
let search = document.querySelector(".search")
let divBuscador1 = document.querySelector(".divbuscador1")

search.addEventListener("submit",function (e){

    e.preventDefault()
    
    if (buscador.value == "") {
    divBuscador1.innerText = "Complete este campo.";
    }

    else if (buscador.value.length < 3) {
         divBuscador1.innerText = "Este campo debe contener al menos 3 caracteres.";
    }

    else{
        this.submit()
    }
})
