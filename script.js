
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Lógica de autenticación
  if (username === "admin" && password === "admin") {
    document.getElementById("message").textContent = "Inicio de sesión exitoso.";
    
  } else {
    document.getElementById("message").textContent = "Credenciales incorrectas. Inténtalo de nuevo.";
  }
});