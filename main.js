const products = [{'name': 'Camiseta The Duck Vibes 1', 'description': 'Confeccionada con algodón hilado en anillos 100% orgánico', 'price': 24.99, 'seller': 'The Duck Vibes', 'image': 'https://theduckvibes.com/wp-content/uploads/2024/11/unisex-organic-cotton-t-shirt-desert-dust-front-673cddb365151-300x300.jpg', 'link': 'https://theduckvibes.com/producto/camiseta-the-duck-vibes-modelo-001/'}, {'name': 'Camiseta The Duck Vibes 2', 'description': 'Confeccionada con algodón hilado en anillos 100% orgánico', 'price': 24.99, 'seller': 'The Duck Vibes', 'image': 'https://theduckvibes.com/wp-content/uploads/2024/12/unisex-organic-cotton-t-shirt-french-navy-front-6755c6886d5c7-300x300.jpg', 'link': 'https://theduckvibes.com/producto/camiseta-the-duck-vibes-modelo-002-2/'}, {'name': 'Camiseta The Duck Vibes 3', 'description': 'Confeccionada con algodón hilado en anillos 100% orgánico', 'price': 24.99, 'seller': 'The Duck Vibes', 'image': 'https://theduckvibes.com/wp-content/uploads/2025/01/unisex-organic-cotton-t-shirt-white-front-67880f604f5da-300x300.jpg', 'link': 'https://theduckvibes.com/producto/camiseta-the-duck-vibes-modelo-003/'}, {'name': 'Camiseta The Duck Vibes 4', 'description': 'Confeccionada con algodón hilado en anillos 100% orgánico', 'price': 24.99, 'seller': 'The Duck Vibes', 'image': 'https://theduckvibes.com/wp-content/uploads/2025/02/unisex-organic-cotton-t-shirt-fraiche-peche-front-67a650cb23426-300x300.jpg', 'link': 'https://theduckvibes.com/producto/camiseta-the-duck-vibes-modelo-004/'}, {'name': 'Camiseta The Duck Vibes 5', 'description': 'Confeccionada con algodón hilado en anillos 100% orgánico', 'price': 24.99, 'seller': 'The Duck Vibes', 'image': 'https://theduckvibes.com/wp-content/uploads/2025/02/unisex-organic-cotton-t-shirt-desert-dust-front-67a654feddcbd-300x300.jpg', 'link': 'https://theduckvibes.com/producto/camiseta-the-duck-vibes-modelo-005/'}, {'name': 'Camiseta The Duck Vibes 6', 'description': 'Confeccionada con algodón hilado en anillos 100% orgánico', 'price': 24.99, 'seller': 'The Duck Vibes', 'image': 'https://theduckvibes.com/wp-content/uploads/2024/12/unisex-organic-cotton-t-shirt-black-front-6755c75786362-300x300.jpg', 'link': 'https://theduckvibes.com/producto/camiseta-the-duck-vibes-modelo-006/'}, {'name': 'Camiseta The Duck Vibes 7', 'description': 'Confeccionada con algodón hilado en anillos 100% orgánico', 'price': 24.99, 'seller': 'The Duck Vibes', 'image': 'https://theduckvibes.com/wp-content/uploads/2025/01/unisex-organic-cotton-t-shirt-cotton-pink-front-6787fb003c1b0-300x300.jpg', 'link': 'https://theduckvibes.com/producto/camiseta-the-duck-vibes-modelo-007-2/'}, {'name': 'Camiseta The Duck Vibes 8', 'description': 'Confeccionada con algodón hilado en anillos 100% orgánico', 'price': 24.99, 'seller': 'The Duck Vibes', 'image': 'https://theduckvibes.com/wp-content/uploads/2025/02/unisex-organic-cotton-t-shirt-black-front-679fe0949881f-300x300.jpg', 'link': 'https://theduckvibes.com/producto/camiseta-the-duck-vibes-modelo-008/'}, {'name': 'Camiseta The Duck Vibes 9', 'description': 'Confeccionada con algodón hilado en anillos 100% orgánico', 'price': 24.99, 'seller': 'The Duck Vibes', 'image': 'https://theduckvibes.com/wp-content/uploads/2025/01/unisex-organic-cotton-t-shirt-black-front-679bdafbdac64-300x300.jpg', 'link': 'https://theduckvibes.com/producto/camiseta-the-duck-vibes-modelo-009/'}, {'name': 'Camiseta The Duck Vibes 10', 'description': 'Confeccionada con algodón hilado en anillos 100% orgánico', 'price': 24.99, 'seller': 'The Duck Vibes', 'image': 'https://theduckvibes.com/wp-content/uploads/2025/01/unisex-organic-cotton-t-shirt-white-front-678bc8d78893d-300x300.jpg', 'link': 'https://theduckvibes.com/producto/camiseta-the-duck-vibes-modelo-010/'}, {'name': 'Camiseta The Duck Vibes 11', 'description': 'Confeccionada con algodón hilado en anillos 100% orgánico', 'price': 24.99, 'seller': 'The Duck Vibes', 'image': 'https://theduckvibes.com/wp-content/uploads/2025/01/unisex-organic-cotton-t-shirt-black-front-6796b12590faa-300x300.jpg', 'link': 'https://theduckvibes.com/producto/camiseta-the-duck-vibes-modelo-011/'}, {'name': 'Camiseta The Duck Vibes 12', 'description': 'Confeccionada con algodón hilado en anillos 100% orgánico', 'price': 24.99, 'seller': 'The Duck Vibes', 'image': 'https://theduckvibes.com/wp-content/uploads/2025/02/Imagen-de-WhatsApp-2025-02-21-a-las-15.28.12_93d65447-300x300.jpg', 'link': 'https://theduckvibes.com/producto/camiseta-the-duck-vibes-villademonio-limited-edition/'}];

const container = document.getElementById('product-grid');

// Obtener desde localStorage o iniciar vacío
let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

products.forEach((product, index) => {
  const card = document.createElement('article');
  card.classList.add('product');

  const isFavorito = favoritos.includes(index);

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <p><strong>${product.price.toFixed(2)}€</strong></p>
    <div class="actions">
      <button class="fav-btn" data-index="${index}">
        ${isFavorito ? '❤️' : '🤍'}
      </button>
      <button class="cart-btn" data-index="${index}">
        🛒 Añadir al carrito
      </button>
      <a href="${product.link}" target="_blank" rel="noopener">Ver Producto</a>
    </div>
  `;

  container.appendChild(card);
});

//BOTON FAVORITO
document.querySelectorAll('.fav-btn').forEach(btn =>
  btn.addEventListener('click', () => {
    const index = parseInt(btn.dataset.index);
    favoritos = favoritos.includes(index)
      ? favoritos.filter(i => i !== index)
      : [...favoritos, index];

    btn.textContent = favoritos.includes(index) ? '❤️' : '🤍';
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  })
);

// BOTON CARRITO
document.querySelectorAll('.cart-btn').forEach(btn =>
  btn.addEventListener('click', () => {
    const index = parseInt(btn.dataset.index);
    const producto = products[index];

    const existe = carrito.find(item => item.index === index);
    existe ? existe.cantidad++ : carrito.push({ index, cantidad: 1 });

    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`${producto.name} añadido al carrito.`);
  })
);
