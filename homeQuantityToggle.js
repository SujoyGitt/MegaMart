export function homeQuantityToggle(event, id, stock) {
  const currentCardElement = document.querySelector(`#card${id}`);

  let productQunatity = currentCardElement.querySelector(".quantity");
  let quantity = parseInt(productQunatity.getAttribute("data-quantity")) || 1;

  if (event.target.classList.contains("increment")) {
    if (quantity < stock) {
      quantity += 1;
    } else if (quantity === stock) {
      quantity = stock;
    }
  }
  if (event.target.classList.contains("decrement")) {
    if (quantity > 1) {
      quantity -= 1; 
    }
  }

  productQunatity.innerText = quantity;
  productQunatity.setAttribute("data-quantity",quantity);
  console.log(quantity)
}
