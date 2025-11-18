const fila = document.querySelector(".fila")
const fila2 = document.querySelector(".fila2")

fetch("https://dummyjson.com/products/")
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
         console.log(data);

        let beauty = ""
       
        for (let i = 0; i < 5; i++) {
            const element = data.products[i];
            beauty += `<article class="imagen1">
                            <img id="imagenes" src="${element.images}" alt=''>
                            <h3>Nombre: ${element.title}</h3>
                            <p>Descripción: ${element.description}</p>
                            <p>Precio: ${element.price}</p>
                            <a id="verdetalle" href="./product.html?id=${element.id}">Ver en detalle</a>
                        </article>`
        }
        for (let i = 0; i < 5; i++) {
            const element = data.products[i];
            beauty += `<article class="imagen1">
                            <img id="imagenes" src="${element.images}" alt=''>
                            <h3>Name: ${element.title}</h3>
                            <p>Descripción: ${element.description}</p>
                            <p>Precio: ${element.price}</p>
                            <p>Name: ${element.title}</p>
                            <a id="verdetalle" href="./product.html?id=${element.id}">Ver en detalle</a>
                        </article>`
        }

        fila.innerHTML += beauty

         /*Segunda Seccion*/
        let fragancia = ""
        console.log(data[5])
        for (let i = 5; i < 10; i++) {
            const element = data.products[i];
            fragancia += `<article class="imagen1">
                            <img id="imagenes" src="${element.images}" alt=''>
                            <h3>Nombre: ${element.title}</h3>
                            <p>Descripción: ${element.description}</p>
                            <p>Precio: ${element.price}</p>
                            <a id="verdetalle" href="./product.html?id=${element.id}">Ver en detalle</a>
                        </article>`
        }
        for (let i = 5; i < 10; i++) {
            const element = data.products[i];
            fragancia += `<article class="imagen1">
                            <img id="imagenes" src="${element.images}" alt=''>
                            <h3>Nombre: ${element.title}</h3>
                            <p>Descripción: ${element.description}</p>
                            <p>Precio: ${element.price}</p>
                            <a id="verdetalle" href="./product.html?id=${element.id}">Ver en detalle</a>
                        </article>`
        }
        fila2.innerHTML += fragancia
    })

    .catch(function (error) {
        console.log("Error: " + error);
    })

let search = document.querySelector(".search")
let buscador = document.querySelector(".buscador")

search.addEventListener("submit", function(e){
    e.preventDefault();

    if (buscador.value == "") {
        divBuscador1.innerText += "Complete este campo.";
        divBuscador2.style.display = "none";
    }

    else if (buscador.value.length < 3) {
        divBuscador2.innerText += "Este campo debe contener al menos 3 caracteres.";
        divBuscador1.syle.display = "none";
    }

    else{
        let resultado = {
        Buscador: buscador.value
        }
    
        let resultadoString = JSON.stringify(resultado)
        localStorage.setItem("data", resultadoString)
        this.submit()
    }
})