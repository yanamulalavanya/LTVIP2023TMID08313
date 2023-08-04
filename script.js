
let cartItems = [];
let totalPrice = 0;

function addToCart(product, price) {
  cartItems.push({ product, price });
  totalPrice += price;
  updateCartDisplay();
}

function removeFromCart(index) {
  totalPrice -= cartItems[index].price;
  cartItems.splice(index, 1);
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartItemsElement = document.getElementById('cartItems');
  const totalPriceElement = document.getElementById('totalPrice');

  let cartItemsHTML = '';
  cartItems.forEach((item, index) => {
    cartItemsHTML += `<li style="padding:7px">${item.product} - $${item.price} <button style="background-color:red" onclick="removeFromCart(${index}) "> Remove</button></li>`;
  });

  cartItemsElement.innerHTML = cartItemsHTML;
  totalPriceElement.textContent = totalPrice;
  
let a=document.getElementById('totalitems')
a.innerHTML=`<h2>Cart (${cartItems.length})</h2>`
}

