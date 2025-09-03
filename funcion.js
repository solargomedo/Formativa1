 const form = document.querySelector(".formulario-cont form");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); 

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

  
    if (email === "" || password === "") {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    alert("Bienvenido ");
  });