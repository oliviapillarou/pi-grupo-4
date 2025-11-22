let qs = location.search;
let queryObj = new URLSearchParams(qs);
let qstring = queryObj.get('Buscador');

let resultadoDeBusqueda = document.querySelector(".resultadodebusqueda")
let seccion = document.querySelector(".resultado")
let searchURL = `https://dummyjson.com/products/search?q=${qstring}`


fetch(searchURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        if (data.products.length === 0) {
            resultadoDeBusqueda.innerHTML = `<p>No hay resultados para el término: "${qstring}"</p>`;
            return;
        }

        resultadoDeBusqueda.innerText = `Resultados de búsqueda para: "${qstring}"`

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


