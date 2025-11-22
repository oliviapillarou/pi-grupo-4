
const filaCategoria = document.querySelector(".fila")
let query2 = new URLSearchParams(location.search);
let qstring2 = query2.get('category');


fetch(`https://dummyjson.com/products/category/${qstring2}`)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data.products);

        let categoria = "";

        for (let i = 0; i < data.products.length; i++) {
            const element = data.products[i];

            if (element.category == qstring2) {
                categoria += `<article class="imagen1">
                                <img id="imagenes" src="${element.images[0]}" alt=''>
                                <h3>Nombre: ${element.title}</h3>
                                <p>Descripción: ${element.description}</p>
                                <p>Precio: ${element.price}</p>
                                <a id="verdetalle" href="./product.html?id=${element.id}&?category=${element.category}">Ver en detalle</a>
                            </article>`
            }

        }

        filaCategoria.innerHTML += categoria

    })

    .catch(function (error) {
        console.log("Error: " + error);
    })

