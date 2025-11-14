fetch('https://dummyjson.com/products')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })