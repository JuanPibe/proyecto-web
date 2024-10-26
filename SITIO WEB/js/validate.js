    document.getElementById("loginform").addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Correo y contraseña específicos permitidos
        const allowedEmail = "juan_sec90@hotmail.com";
        const allowedPassword = "123456789";

        if (email !== allowedEmail) {
            alert("Correo incorrecto.");
            return;
        }

        if (password !== allowedPassword) {
            alert("Contraseña incorrecta.");
            return;
        }

        alert("Inicio de sesión exitoso");

        window.location.href = "index.html";
    });

