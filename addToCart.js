import { getCartProductFromLS } from "./getCartProductFromLS";
import { showToast } from "./showToast";

// show the add to cart when page is load first time
document.querySelector(".shopping_cart span").innerText = `cart ${JSON.parse(localStorage.getItem("cartProducts"))?.length || 0}`;


// show the add to cart when page is load first time
document.querySelector(".shopping_cart span").innerText = `cart ${
  JSON.parse(localStorage.getItem("cartProducts"))?.length || 0
}`;

export const addToCart = (element, id, stock) => {
  const showCartText = document.querySelector(".shopping_cart span");
  const currentCardElement = document.querySelector(`#card${id}`);

  let quantity = parseInt(currentCardElement.querySelector(".quantity-selector .quantity").innerText);
  let price = currentCardElement.querySelector(".current-price").innerText;
  let cartProducts = getCartProductFromLS();

  // remove the $ sign from price
  let unitPrice = parseFloat(price.replace("$", ""));
  let totalPrice = unitPrice * quantity;

  // check is this product exist or not
  let existingProduct = cartProducts.find((product) => product.id === id);

  if (existingProduct) {
    
    // if product is there then increase quantity
    existingProduct.quantity += quantity;
    existingProduct.price = unitPrice * existingProduct.quantity;

    // update then whole cart
    const updatedCart = cartProducts.map((product) => {
      if (product.id === id) {
        return existingProduct;
      } else {
        return product;
      }
    });

    localStorage.setItem("cartProducts", JSON.stringify(updatedCart));

    
    showCartText.innerText = `cart ${updatedCart.length}`;

    return;
  }

  // if product is there increase quantity and price if not then add new product
  cartProducts.push({ id, quantity, price: totalPrice });
  localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  showCartText.innerText = `cart ${cartProducts.length}`;
  showToast('add',id)
};
