
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Lógica de autenticación
  if (username === "Jrubio94" && password === "Joserubio94") {
    document.getElementById("message").textContent = "Inicio de sesión exitoso.";
    
  } else {
    document.getElementById("message").textContent = "Credenciales incorrectas. Inténtalo de nuevo.";
  }
});