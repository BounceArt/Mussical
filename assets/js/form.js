let emailInput = document.getElementById("email")
let button = document.querySelector(".btn-warning")

button.addEventListener("click", () => {
  let emailValue = emailInput.value

  if (emailValue.trim() === "") {
    Swal.fire({
      title: "Error",
      text: "Rellena el campo",
      icon: "error",
      button: "Ok"
    });
  } else {
    Swal.fire({
      title: "Suscrito",
      text: "A partir de ahora te llegaran nuestras novedades!",
      icon: "success",
      button: "Ok"
      })
    localStorage.setItem("emailNewsletter", emailValue)
  }
});

let nombreInput = document.getElementById("Nombre")
let apellidoInput = document.getElementById("Apellido")

button.addEventListener("click", () => {
  let nombreValue = nombreInput.value
  let apellidoValue = apellidoInput.value
  let emailValue = emailInput.value

  if (nombreValue.trim() === "" || apellidoValue.trim() === "" || emailValue.trim() === "") {
    Swal.fire({
      title: "Error",
      text: "Rellena los campos",
      icon: "error",
      button: "Ok"
    });
  } else {
    Swal.fire({
      title: "Enviado",
      text: "Te responderemos a la brevedad por mail",
      icon: "success",
      button: "Ok"
      })
    localStorage.setItem("contacto", nombreValue, apellidoValue, emailValue);
  }
})

setTimeout(()=> {
  Toastify({

    text: "Recuerda suscribirte a nuestro NewsLatter para no perderte ofertas!",
    duration: 3000,
    position: "right",
    gravity: "bottom",
    style:{
      background: "linear-gradient(to left, #f9c433 , rgb(19, 19, 19))"
    }
    }).showToast()
}, 3000)

