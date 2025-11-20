let categorias= document.querySelector(".categorias-list")
let query = new URLSearchParams(window.location.search);
let qstring = query.get('Buscador');
let resultadoDeBusqueda = document.querySelector(".resultadodebusqueda")
let seccion = document.querySelector(".fila")
let searchURL = `https://dummyjson.com/products/search?q=${qstring}`

fetch('https://dummyjson.com/products/categories')
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {

        let categoria = "";

        for (let i = 0; i < data.length; i++) {
            const element = data[i];

            if (element == qstring) {
                categoria += `<li>
                                <a href="./category.html" class="cate">${data[i]}</a> 
                            /</li>`
            }

        }

        categorias.innerHTML += categoria

    })

    .catch(function (error) {
        console.log("Error: " + error);
    })

resultadoDeBusqueda.innerText = `Resultados de búsqueda para: "${qstring}"`

fetch(searchURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        if (data.products.length === 0){
          resultadoDeBusqueda.innerHTML =  `<p>No hay resultados para el término: "${qstring}"</p>`;
          return; 
        }
        let coincide = "";

        for (let i = 0; i < data.products.length; i++) {
            const element = data.products[i];

            coincide += `<article class="imagen1">
                            <img id="imagenes" src="${element.images[0]}" alt=''>
                            <h3>Nombre: ${element.title}</h3>
                            <p>Descripción: ${element.description}</p>
                            <p>Precio: ${element.price}</p>
                            <a id="verdetalle" href="./product.html?id=${element.id}">Ver en detalle</a>
                        </article>`
            
        }

        seccion.innerHTML = coincide;
    })
     .catch(function (error) {
        console.log("Error: " + error);
    })


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