function adjustViewForUserRole() {
    const user = JSON.parse(localStorage.getItem("user"));
    const navbar = document.querySelector(".navbar ul");

    if (!user) {

        window.location.href = "login.html";
        return;
    }

    if (user.role === "admin") {

        navbar.innerHTML += `
            <li><a href="admin-dashboard.html">Dashboard Admin</a></li>
            <li><a href="manage-products.html">Gestionar Productos</a></li>
        `;
    } else if (user.role === "user") {

        navbar.innerHTML += `
            <li><a href="profile.html">Perfil</a></li>
            <li><a href="user-orders.html">Mis Pedidos</a></li>
        `;
    }
}

document.addEventListener("DOMContentLoaded", adjustViewForUserRole);  
