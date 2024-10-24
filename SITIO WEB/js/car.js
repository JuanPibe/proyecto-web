// Inicializar el carrito desde localStorage o como un array vacío
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let totalCarrito = cart.reduce((total, item) => total + item.price, 0); // Inicializar total con los productos en el carrito

// Crear los eventos personalizados
const agregarCarritoEvent = new CustomEvent('agregarCarrito', {
    detail: { mensaje: 'Producto añadido al carrito' }
});

const mostrarNotificacionEvent = new CustomEvent('mostrarNotificacion', {
    detail: { mensaje: '¡Producto agregado con éxito!' }
});

const actualizarTotalEvent = new CustomEvent('actualizarTotal', {
    detail: { total: totalCarrito } // Iniciar con el total calculado
});

// Función que controla los eventos personalizados
function controlarEventos() {
    // Escuchar el evento de agregar al carrito
    document.addEventListener('agregarCarrito', (event) => {
        console.log(event.detail.mensaje);
    });

    // Escuchar el evento para mostrar una notificación
    document.addEventListener('mostrarNotificacion', (event) => {
        alert(event.detail.mensaje);
    });

    // Escuchar el evento para actualizar el total del carrito
    document.addEventListener('actualizarTotal', (event) => {
        const total = event.detail.total;
        console.log(`El total del carrito es: $${total}`);
        
        // Actualizar el total en el HTML
        document.getElementById('total-carrito').textContent = total.toFixed(2);
    });
}

// Llamar a la función para controlar los eventos
controlarEventos();

// Función para despachar los eventos
function agregarProductoAlCarrito(producto, precio) {
    // Añadir producto al carrito
    cart.push({ name: producto, price: precio });

    // Guardar el carrito en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Despachar el evento de agregar al carrito
    document.dispatchEvent(agregarCarritoEvent);

    // Despachar el evento de notificación
    document.dispatchEvent(mostrarNotificacionEvent);

    // Actualizar el total del carrito
    actualizarTotalEvent.detail.total += precio; // Sumar el precio al total
    document.dispatchEvent(actualizarTotalEvent);
}

// Añadir evento a cada botón de agregar al carrito
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const product = this.parentElement;
        const name = product.getAttribute('data-name');
        const price = parseFloat(product.getAttribute('data-price'));

        // Llamar a la función para agregar producto y despachar los eventos
        agregarProductoAlCarrito(name, price);
    });
});
