// Inicializar el carrito desde localStorage o como un array vacío
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Añadir evento a cada botón de agregar al carrito
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const product = this.parentElement;
        const name = product.getAttribute('data-name');
        const price = parseFloat(product.getAttribute('data-price'));

        // Añadir producto al carrito
        cart.push({ name, price });

        // Guardar el carrito en localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        alert('Producto añadido al carrito');
    });
});

