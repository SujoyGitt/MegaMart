import { getCartProductFromLS } from "./getCartProductFromLS";

export const updateCartProduct = () => {
  const localCrtPro = getCartProductFromLS();
  let subTotal = localCrtPro.reduce((accum, currelm) => {
    return accum + currelm.price;
  }, 0);

  let shipping_price = document.querySelector(".shipping_price").innerText;
  let totalPrice = subTotal + parseFloat(shipping_price.replace('$',''));
  document.querySelector(".sub_total").innerText = `$ ${subTotal.toFixed(2)}`;
  document.querySelector(".total-tag").innerText = `$ ${totalPrice.toFixed(2)}`;
  console.log(subTotal);
};
