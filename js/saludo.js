let datos = sessionStorage.getItem("usuario");

let datosObj = JSON.parse(datos);

let saludo = document.querySelector("#saludo");
let logout = document.querySelector("#logout");
let lista = document.querySelector(".lista1");

if (datosObj) {

  saludo.innerText = `Bienvenido: ${datosObj.mail}`;
  logout.innerHTML = ` <li><a href="./login.html">logout</a></li>`

  lista.innerHTML = ` <li></li>
                      <li></li>`
}