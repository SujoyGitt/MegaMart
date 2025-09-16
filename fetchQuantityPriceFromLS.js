import { getCartProductFromLS } from "./getCartProductFromLS";

export const fetchQuantityPriceFromLS = (id, price) => {
  let cartProducts = getCartProductFromLS();
  let existingProducts = cartProducts.find(
    (currentProduct) => currentProduct.id === id
  );
  let quantity = 1;

  if (existingProducts) {
    quantity = existingProducts.quantity;
    price = existingProducts.price
  }

  return {quantity,price};

};
