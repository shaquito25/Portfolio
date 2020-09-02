const nombre = document.getElementById("fname")
const form = document.getElementById("form1")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e => {
   
    let warnings = ""
    let entrar = false

    parrafo.innerHTML = ""
    if (nombre.value.length < 6) {
        warnings += `El nombre no es valido <br>`
        entrar = true
    }

    if (entrar) {
        parrafo.innerHTML = warnings
    } else {
        parrafo.innerHTML = "Enviado"
    }
})