const emailField = document.getElementById("email");
emailField.addEventListener("input", function (event) {
  if (emailField.validity.patternMismatch) {
    emailField.setCustomValidity("Por favor, insira um e-mail válido!");
  } else {
    emailField.setCustomValidity("");
  }
});
