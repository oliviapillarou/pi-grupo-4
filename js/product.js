
const filaProduct = document.querySelector(".fila_product")
let query = new URLSearchParams(location.search);
let qstring = query.get('id');


fetch("https://dummyjson.com/products/" + qstring)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);
        let info = data;
        let detalle = ""

        let element = detalle
        detalle += `<article class="mascarilla1">
                            <img id="imagenes" src="${element.images}" alt=''>
                            <h3>Nombre: ${element.title}</h3>
                            <p>Precio: ${element.price}</p>
                            <p>Marca: ${element.brand}</p> 
                            <p>Descripción: ${element.description}</p>
                            <p class="stock">Stock: ${element.stock}</p>
                        <p class="tags">Tags:${element.tags} </p>
                    </article>
                    <article class="review">
                        <p>Reviews: ${element.reviews}</p>
                    </article>`;
    
       filaProduct.innerHTML += detalle
    })

    .catch(function (error) {
        console.log("Error: " + error);
    })
