const nombre = document.querySelector("#name")
const pass = document.querySelector("#password")
const form = document.querySelector("#form")
const parrafo = document.querySelector("#warnings")

form.addEventListener("submit", e => {
  e.preventDefault()
  let warnings = ""
  let entrar = false
  
  parrafo.innerHTML = ""
  if (nombre.value.length < 6) {
    warnings += `El nombre no es valido <br>`
    entrar = true
  }
  
  if (pass.value.length < 8) {
    warnings += `La contraseña no es valida <br>`
    entrar = true
  }

  if (entrar) {
    parrafo.innerHTML = warnings
  } else {
    parrafo.innerHTML = "Enviado"
  }
})
 

