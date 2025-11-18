let search = document.querySelector(".search")
let buscador = document.querySelector(".buscador")
let boton = document.querySelector(".boton")
let divBuscador1 = document.querySelector(".divbuscador1")
let divBuscador2 = document.querySelector(".divbuscador2")
let resultadoDeBusqueda = document.querySelector(".resultadodebusqueda")

search.addEventListener("submit", function(e){
    e.preventDefault()

    if (buscador.value == "") {
        divBuscador1.innerText += "Complete este campo.";
        divBuscador2.style.display = "none";
    }

    else if (buscador.value.length < 3) {
        divBuscador2.innerText += "Este campo debe contener al menos 3 caracteres.";
        divBuscador1.syle.display = "none";
    }

    else {
        let resultado = {
            buscador: buscador.value
        }

        let resultadoString = JSON.stringify(resultado)

        localStorage.setItem("resultadoLocal", resultadoString);

        this.submit(e)
    }
    
        let resultadoStorage = localStorage.getItem("resultadoLocal");
        let resultadoRecuperar = JSON.parse(resultadoStorage);
        console.log(resultadoRecuperar.buscador);

        if (resultadoRecuperar){
            resultadoDeBusqueda.innerText = `Resultado de búsqueda para: ${resultadoRecuperar.buscador}`;
        }
})
