let datos = localStorage.getItem("usuario");

let datosObj = JSON.parse(datos);

let saludo = document.querySelector("#saludo");
let logout = document.querySelector("#logout");
let lista = document.querySelector(".lista1");

if (datosObj) {

  saludo.innerText = `Bienvenido: ${datosObj.mail}`;
  logout.innerHTML = `<a href="./login.html" id=linklogout><strong>logout</strong></a>`

  lista.innerHTML = ` <li></li>
                      <li></li>`
}