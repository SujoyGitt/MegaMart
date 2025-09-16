import { getCartProductFromLS } from "./getCartProductFromLS";
import { updateCartProduct } from "./updateCartProduct";

export const cartQuantityIncDec = (event, id, stock, price) => {
  const currentCartElm = document.querySelector(`#cartItem${id}`);
  let cartQnt = currentCartElm.querySelector(".cartQnt");
  let crtPrice = currentCartElm.querySelector(".price-tag");


  let qnt = 0;
  let localStoragePrice = 0;

  // get the data from localstorage
  const localCrtPro = getCartProductFromLS();
  let existingPro = localCrtPro.find((currentPro) => currentPro.id === id);

  if (existingPro) {
    qnt = existingPro.quantity;
  } else {
    qnt = 1;
  }

  if (event.target.classList.contains("cartInc")) {
    if (qnt < stock) {
      qnt += 1;
    }
  } else if (event.target.classList.contains("cartDec")) {
    if (qnt > 1) {
      qnt -= 1;
    }
  }

  localStoragePrice = price * qnt;

  // if product is there then increase quantity
  existingPro.quantity = qnt;
  existingPro.price = price * qnt;

  // update then whole cart
  const updatedCart = localCrtPro.map((product) => {
    if (product.id === id) {
      return existingPro;
    } else {
      return product;
    }
  });

  cartQnt.innerText = qnt
  crtPrice.innerText = `$ ${localStoragePrice.toFixed(2)}`

  localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
  updateCartProduct();
  
};
