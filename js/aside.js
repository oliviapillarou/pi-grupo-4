let asideCategorias =  document.querySelector("#section1");

fetch("https://dummyjson.com/products/category-list")
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {

        let categorias = "";

        for (let i = 0; i < data.length; i++) {
            const element = data[i];

            categorias += `<ul class="ul">
                            <li class="menu"><a href="./category.html?category=${element}"> ${element}</a></li>
                             </ul>`

        }

        asideCategorias.innerHTML = categorias

    })

    .catch(function (error) {
        console.log("Error: " + error);
    })