let cart = [];

function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("active");
}

function toggleCart() {
  document.getElementById("cartPanel").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("active");
}

function closeAll() {
  document.getElementById("navMenu").classList.remove("active");
  document.getElementById("cartPanel").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
}

function addToCart(name, price) {
  const existing = cart.find((item) => item.name === name);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  updateCart();
}

function changeQty(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  updateCart();
}

function updateCart() {
  const itemsDiv = document.getElementById("cartItems");
  const count = document.getElementById("cartCount");
  const totalEl = document.getElementById("total");
  itemsDiv.innerHTML = "";
  let total = 0,
    totalItems = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;
    totalItems += item.qty;
    itemsDiv.innerHTML += `
   <div class='cart-item'>
     <div>${item.name}<br>₹${item.price}</div>
     <div class='qty-controls'>
       <button class='qty-btn' onclick='changeQty(${index}, -1)'>-</button>
       <span>${item.qty}</span>
       <button class='qty-btn' onclick='changeQty(${index}, 1)'>+</button>
     </div>
   </div>`;
  });

  count.innerText = totalItems;
  totalEl.innerText = total;
}

/* SEARCH FUNCTION */
function searchProducts() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll("#productGrid .card");

  cards.forEach((card) => {
    const name = card.getAttribute("data-name").toLowerCase();
    if (name.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function submitForm(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  const text = `Hello, I want to order sweet boxes.%0AName: ${name}%0APhone: ${phone}%0AMessage: ${message}`;

  const whatsappNumber = "919839507418"; // replace with your number

  window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
}
