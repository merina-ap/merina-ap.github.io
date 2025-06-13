const products = [
  {
    name: "Dior Sauvage",
    price: "Q950",
    image: "img/sauvage.jpg",
    message: "Hola, estoy interesado en el perfume Dior Sauvage. ¿Está disponible?"
  },
  {
    name: "Versace Eros",
    price: "Q870",
    image: "img/eros.jpg",
    message: "Hola, me gustaría más información sobre el perfume Versace Eros."
  },
  {
    name: "Creed Aventus",
    price: "Q1400",
    image: "img/aventus.jpg",
    message: "Hola, quisiera saber más sobre el perfume Creed Aventus."
  }
];

const container = document.getElementById('productContainer');
const input = document.getElementById('searchInput');

function renderProducts(filter = "") {
  container.innerHTML = "";
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  );

  filtered.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>${p.price}</p>
        <a target="_blank" href="https://wa.me/50236419821?text=${encodeURIComponent(p.message)}">Pedir por WhatsApp</a>
      </div>
    `;
  });
}

input.addEventListener('input', (e) => {
  renderProducts(e.target.value);
});

renderProducts();
