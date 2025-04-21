
//PRODUCTOS
const products = [{'name': 'Camiseta The Duck Vibes 1', 'description': 'Confeccionada con algodón hilado en anillos 100% orgánico', 'price': 24.99, 'seller': 'The Duck Vibes', 'image': 'https://theduckvibes.com/wp-content/uploads/2024/11/unisex-organic-cotton-t-shirt-desert-dust-front-673cddb365151-300x300.jpg', 'link': 'https://theduckvibes.com/producto/camiseta-the-duck-vibes-modelo-001/'}, {'name': 'Camiseta The Duck Vibes 2', 'description': 'Confeccionada con algodón hilado en anillos 100% orgánico', 'price': 24.99, 'seller': 'The Duck Vibes', 'image': 'https://theduckvibes.com/wp-content/uploads/2024/12/unisex-organic-cotton-t-shirt-french-navy-front-6755c6886d5c7-300x300.jpg', 'link': 'https://theduckvibes.com/producto/camiseta-the-duck-vibes-modelo-002-2/'}, {'name': 'Camiseta The Duck Vibes 3', 'description': 'Confeccionada con algodón hilado en anillos 100% orgánico', 'price': 24.99, 'seller': 'The Duck Vibes', 'image': 'https://theduckvibes.com/wp-content/uploads/2025/01/unisex-organic-cotton-t-shirt-white-front-67880f604f5da-300x300.jpg', 'link': 'https://theduckvibes.com/producto/camiseta-the-duck-vibes-modelo-003/'}, {'name': 'Camiseta The Duck Vibes 4', 'description': 'Confeccionada con algodón hilado en anillos 100% orgánico', 'price': 24.99, 'seller': 'The Duck Vibes', 'image': 'https://theduckvibes.com/wp-content/uploads/2025/02/unisex-organic-cotton-t-shirt-fraiche-peche-front-67a650cb23426-300x300.jpg', 'link': 'https://theduckvibes.com/producto/camiseta-the-duck-vibes-modelo-004/'}, {'name': 'Camiseta The Duck Vibes 5', 'description': 'Confeccionada con algodón hilado en anillos 100% orgánico', 'price': 24.99, 'seller': 'The Duck Vibes', 'image': 'https://theduckvibes.com/wp-content/uploads/2025/02/unisex-organic-cotton-t-shirt-desert-dust-front-67a654feddcbd-300x300.jpg', 'link': 'https://theduckvibes.com/producto/camiseta-the-duck-vibes-modelo-005/'}, {'name': 'Camiseta The Duck Vibes 6', 'description': 'Confeccionada con algodón hilado en anillos 100% orgánico', 'price': 24.99, 'seller': 'The Duck Vibes', 'image': 'https://theduckvibes.com/wp-content/uploads/2024/12/unisex-organic-cotton-t-shirt-black-front-6755c75786362-300x300.jpg', 'link': 'https://theduckvibes.com/producto/camiseta-the-duck-vibes-modelo-006/'}, {'name': 'Camiseta The Duck Vibes 7', 'description': 'Confeccionada con algodón hilado en anillos 100% orgánico', 'price': 24.99, 'seller': 'The Duck Vibes', 'image': 'https://theduckvibes.com/wp-content/uploads/2025/01/unisex-organic-cotton-t-shirt-cotton-pink-front-6787fb003c1b0-300x300.jpg', 'link': 'https://theduckvibes.com/producto/camiseta-the-duck-vibes-modelo-007-2/'}, {'name': 'Camiseta The Duck Vibes 8', 'description': 'Confeccionada con algodón hilado en anillos 100% orgánico', 'price': 24.99, 'seller': 'The Duck Vibes', 'image': 'https://theduckvibes.com/wp-content/uploads/2025/02/unisex-organic-cotton-t-shirt-black-front-679fe0949881f-300x300.jpg', 'link': 'https://theduckvibes.com/producto/camiseta-the-duck-vibes-modelo-008/'}, {'name': 'Camiseta The Duck Vibes 9', 'description': 'Confeccionada con algodón hilado en anillos 100% orgánico', 'price': 24.99, 'seller': 'The Duck Vibes', 'image': 'https://theduckvibes.com/wp-content/uploads/2025/01/unisex-organic-cotton-t-shirt-black-front-679bdafbdac64-300x300.jpg', 'link': 'https://theduckvibes.com/producto/camiseta-the-duck-vibes-modelo-009/'}, {'name': 'Camiseta The Duck Vibes 10', 'description': 'Confeccionada con algodón hilado en anillos 100% orgánico', 'price': 24.99, 'seller': 'The Duck Vibes', 'image': 'https://theduckvibes.com/wp-content/uploads/2025/01/unisex-organic-cotton-t-shirt-white-front-678bc8d78893d-300x300.jpg', 'link': 'https://theduckvibes.com/producto/camiseta-the-duck-vibes-modelo-010/'}, {'name': 'Camiseta The Duck Vibes 11', 'description': 'Confeccionada con algodón hilado en anillos 100% orgánico', 'price': 24.99, 'seller': 'The Duck Vibes', 'image': 'https://theduckvibes.com/wp-content/uploads/2025/01/unisex-organic-cotton-t-shirt-black-front-6796b12590faa-300x300.jpg', 'link': 'https://theduckvibes.com/producto/camiseta-the-duck-vibes-modelo-011/'}, {'name': 'Camiseta The Duck Vibes 12', 'description': 'Confeccionada con algodón hilado en anillos 100% orgánico', 'price': 24.99, 'seller': 'The Duck Vibes', 'image': 'https://theduckvibes.com/wp-content/uploads/2025/02/Imagen-de-WhatsApp-2025-02-21-a-las-15.28.12_93d65447-300x300.jpg', 'link': 'https://theduckvibes.com/producto/camiseta-the-duck-vibes-villademonio-limited-edition/'}];

const container = document.getElementById('product-grid');

// Obtener listas desde localStorage o iniciarlas vacías
let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Generar las tarjetas de producto
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

// Event listener para botones de favoritos
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

// Event listener para botones de carrito
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
const mostrarFavoritos = () => {
  const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  const contenedor = document.getElementById('vista-dinamica');
  const titulo = document.getElementById('vista-dinamica-titulo');
  const contenido = document.getElementById('vista-dinamica-contenido');

  contenedor.classList.remove('hidden');
  titulo.textContent = "Mis Favoritos";

  if (favoritos.length === 0) {
    contenido.innerHTML = "<p>No hay favoritos guardados.</p>";
  } else {
    const html = favoritos.map(index => {
      const p = products[index];
      return `
        <article class="product">
          <img src="${p.image}" alt="${p.name}">
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          <a href="${p.link}" target="_blank" rel="noopener">Ver Producto</a>
        </article>
      `;
    }).join('');
    contenido.innerHTML = `<div class="product-grid">${html}</div>`;
  }

  // 🔽 Desplaza hasta la sección
  contenedor.scrollIntoView({ behavior: "smooth" });
};


//  sección del carrito
const mostrarCarrito = () => {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const contenedor = document.getElementById('vista-dinamica');
  const titulo = document.getElementById('vista-dinamica-titulo');
  const contenido = document.getElementById('vista-dinamica-contenido');

  contenedor.classList.remove('hidden');
  titulo.textContent = "Mi Carrito";

  if (carrito.length === 0) {
    contenido.innerHTML = "<p>El carrito está vacío.</p>";
  } else {
    let total = 0;
    const html = carrito.map(item => {
      const p = products[item.index];
      const subtotal = item.cantidad * p.price;
      total += subtotal;
      return `
        <article class="product">
          <img src="${p.image}" alt="${p.name}">
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          <p>Cantidad: ${item.cantidad}</p>
          <p>Subtotal: ${subtotal.toFixed(2)}€</p>
          <a href="${p.link}" target="_blank" rel="noopener">Ver Producto</a>
        </article>
      `;
    }).join('');
    contenido.innerHTML = `<div class="product-grid">${html}</div><h3>Total: ${total.toFixed(2)}€</h3>`;
  }

  // 🔽 Desplaza hasta la sección
  contenedor.scrollIntoView({ behavior: "smooth" });
};


// Cerrar sección dinámica
const cerrarVistaDinamica = () => {
  document.getElementById('vista-dinamica').classList.add('hidden');
  document.getElementById('vista-dinamica-contenido').innerHTML = "";
  document.getElementById('vista-dinamica-titulo').textContent = "";
};

// Desplazar suavemente hacia la sección dinámica
contenedor.scrollIntoView({ behavior: "smooth" });
