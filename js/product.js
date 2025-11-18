
const filaProduct = document.querySelector(".fila_product")
let query = new URLSearchParams(location.search);
let qstring = query.get('id');


fetch("https://dummyjson.com/products/" + qstring)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);
        let element = data
        let detalle = ""
        let review = ""

        detalle += `<article class="mascarilla1">
                            <img id="imagenes" src="${element.images}" alt=''>
                            <h3>${element.title}</h3>
                            <p>Precio: ${element.price}</p>
                            <p>Marca: ${element.brand}</p> 
                            <p>Descripción: ${element.description}</p>
                            <p>Stock: ${element.stock}</p>
                        <p class="tags">Tags:${element.tags} </p>
                        <h3>Reviews</h3>
                    </article>`

        for (let i = 0; i < element.reviews.length; i++) {
            const r = element.reviews[i];
            review += `<article class="review">
                    <p>Rating: ${r.rating}</p>
                    <p>Comentario: ${r.comment}</p>
                    <p>Fecha: ${r.date}</p>
                    <p>Usuario: ${r.reviewerName}</p>
                </article>`;

        }
        filaProduct.innerHTML += detalle
        filaProduct.innerHTML += review
    })

    .catch(function (error) {
        console.log("Error: " + error);
    })
