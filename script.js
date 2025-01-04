
// app.js

// Select cart count element
const cartCountElement = document.getElementById("cartCount");

// Add item button
const addItemButton = document.getElementById("addItem");

// Remove item button
const removeItemButton = document.getElementById("removeItem");

// Initialize cart count
let cartCount = 0;

// Function to update cart count
function updateCartCount() {
  cartCountElement.textContent = cartCount;

  // If count is zero, hide the counter
  cartCountElement.style.display = cartCount > 0 ? "flex" : "none";
}

// Event: Add item to cart
addItemButton.addEventListener("click", () => {
  cartCount++;
  updateCartCount();
});

// Event: Remove item from cart
removeItemButton.addEventListener("click", () => {
  if (cartCount > 0) {
    cartCount--;
    updateCartCount();
  }
});

// Initialize cart count display
updateCartCount();

