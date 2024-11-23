// recuperar.js

document.getElementById("verificarCorreo").addEventListener("click", function () {
    const email = document.getElementById("correoRecuperacion").value;

    // Obtén los usuarios almacenados en localStorage
    const users = JSON.parse(localStorage.getItem("users"));

    // Verifica si el correo existe
    const user = users.find(user => user.email === email);

    if (!user) {
        alert("El correo no está registrado.");
        return;
    }

    alert("Código de recuperación enviado a tu correo.");
    // Simula el envío del código de recuperación (en este caso, un código fijo)
    localStorage.setItem("codigoRecuperacion", "123456");

    // Muestra la sección para ingresar el código
    document.getElementById("correoSeccion").style.display = "none";
    document.getElementById("codigoSeccion").style.display = "block";
});

document.getElementById("verificarCodigo").addEventListener("click", function () {
    const codigoIngresado = document.getElementById("codigoRecuperacion").value;
    const nuevaContraseña = document.getElementById("nuevaContraseña").value;

    // Obtén el código de recuperación almacenado
    const codigoRecuperacion = localStorage.getItem("codigoRecuperacion");

    if (codigoIngresado !== codigoRecuperacion) {
        alert("El código ingresado es incorrecto.");
        return;
    }

    // Actualiza la contraseña en la lista de usuarios
    const email = document.getElementById("correoRecuperacion").value;
    const users = JSON.parse(localStorage.getItem("users"));

    // Encuentra al usuario y actualiza su contraseña
    const userIndex = users.findIndex(user => user.email === email);
    if (userIndex !== -1) {
        users[userIndex].password = nuevaContraseña;
        localStorage.setItem("users", JSON.stringify(users));
        alert("Contraseña actualizada exitosamente. Ahora puedes iniciar sesión con la nueva contraseña.");
        window.location.href = "login.html";
    }
});
