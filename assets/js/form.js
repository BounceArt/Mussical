let emailInput = document.getElementById("email")
let button = document.querySelector(".btn-warning")

button.addEventListener("click", registrarValor)

function registrarValor() {
  let emailValue = emailInput.value
  const email = document.getElementById("email-enviado");
    email.textContent = "Te has suscrito al newslatter";
  localStorage.setItem("emailNewslatter", emailValue)
}