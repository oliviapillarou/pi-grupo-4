let logout1 = document.querySelector("#logout");
let saludo1 = document.querySelector("#saludo");
let lista1 = document.querySelector(".lista1");
let link = document.querySelector("#linklogout")

logout1.addEventListener("click", function(e) {
    e.preventDefault()
    localStorage.removeItem("usuario")
    saludo.innerText = "";
    logout.innerText = "";
    lista.innerHTML = ` <li><a href="login.html">LOGIN</a> /</li>
                        <li><a href="register.html">REGISTER</a></li>`;
    this.submit()
})