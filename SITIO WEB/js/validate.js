// validate.js

// Verifica si los usuarios ya están almacenados en localStorage, si no, los define por primera vez.
if (!localStorage.getItem("users")) {
    const initialUsers = [
        { email: "admin@example.com", password: "admin123", role: "admin" },
        { email: "user@example.com", password: "user123", role: "user" }
    ];
    localStorage.setItem("users", JSON.stringify(initialUsers));
}

// Función para iniciar sesión
document.getElementById("loginform").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Obtén usuarios del localStorage
    const users = JSON.parse(localStorage.getItem("users"));

    // Busca al usuario con el correo y la contraseña correctos
    const user = users.find(user => user.email === email && user.password === password);

    if (!user) {
        alert("Correo o contraseña incorrectos.");
        return;
    }

    alert("Inicio de sesión exitoso");
    window.location.href = "index.html";
});
