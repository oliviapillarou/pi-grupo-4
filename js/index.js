const fila = document.querySelector(".fila")
const fila2 = document.querySelector(".fila2")

fetch("https://dummyjson.com/products/")
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data.products);

        let info = data.products;
        let beauty = ""
        console.log(info[0])
        for (let i = 0; i < 5; i++) {
            const element = info[i];
            beauty += `<article class="imagen1">
                            <img id="imagenes" src="${element.images}" alt=''>
                            <h3>Nombre: ${element.title}</h3>
                            <p>Descripción: ${element.description}</p>
                            <p>Precio: ${element.price}</p>
                            <a id="verdetalle" href="./product.html?id=${element.id}">Ver en detalle</a>
                        </article>`
        }
        for (let i = 0; i < 5; i++) {
            const element = info[i];
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
        console.log(info[5])
        for (let i = 5; i < 10; i++) {
            const element = info[i];
            fragancia += `<article class="imagen1">
                            <img id="imagenes" src="${element.images}" alt=''>
                            <h3>Nombre: ${element.title}</h3>
                            <p>Descripción: ${element.description}</p>
                            <p>Precio: ${element.price}</p>
                            <a id="verdetalle" href="./product.html?id=${element.id}">Ver en detalle</a>
                        </article>`
        }
        for (let i = 5; i < 10; i++) {
            const element = info[i];
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

