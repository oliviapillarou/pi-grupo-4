let search = document.querySelector(".search")
let buscador = document.querySelector(".buscador")
let resultadoDeBusqueda = document.querySelector(".resultadodebusqueda")

search.addEventListener("submit", function(e){
    e.preventDefault();

        let resultado = {
            buscador: this.Buscador.value
        }
    
        let resultadoString = JSON.stringify(resultado)
        localStorage.setItem("data", resultadoString)
        this.submit()
    })

let data = localStorage.geItem("data");
let dataObj = JSON.parse(data);

if (dataObj){
    resultadoDeBusqueda.innerText = `Resultado de búsqueda para: ${dataObj.buscador}`;
}

else{
    alert("No se guardaron bien los datos")
}


/*
 if (buscador.value == "") {
        divBuscador1.innerText += "Complete este campo.";
        divBuscador2.style.display = "none";
    }

    else if (buscador.value.length < 3) {
        divBuscador2.innerText += "Este campo debe contener al menos 3 caracteres.";
        divBuscador1.syle.display = "none";
    }

    else{
*/