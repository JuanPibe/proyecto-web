document.getElementById("loginform").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

     const users = [
        { email: "admin@example.com", password: "admin123", role: "admin" },
        { email: "user@example.com", password: "user123", role: "user" }
    ];

    const user = users.find(user => user.email === email && user.password === password);

    if (!user) {
        alert("Correo o contraseña incorrectos.");
        return;
    }

    localStorage.setItem("user", JSON.stringify(user));

    alert("Inicio de sesión exitoso");
    window.location.href = "index.html";
});
