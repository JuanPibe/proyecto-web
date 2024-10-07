  // Recuperar el carrito desde localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let total = 0;

  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');

  // Si el carrito está vacío
  if (cart.length === 0) {
      cartItems.innerHTML = '<li class="empty-cart">El carrito está vacío</li>';
  } else {
      // Mostrar los productos en el carrito
      cart.forEach(item => {
          const li = document.createElement('li');
          li.textContent = `${item.name} - $${item.price}`;
          cartItems.appendChild(li);
          total += item.price;
      });

      // Mostrar el total
      cartTotal.textContent = total.toFixed(2);
  }

  // Vaciar el carrito
  document.getElementById('clear-cart').addEventListener('click', function() {
      localStorage.removeItem('cart');
      cartItems.innerHTML = '<li class="empty-cart">El carrito está vacío</li>';
      cartTotal.textContent = '0';
      alert('El carrito ha sido vaciado');
  });


