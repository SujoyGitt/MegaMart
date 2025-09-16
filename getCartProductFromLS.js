export const getCartProductFromLS = () => {
  let cartProducct = localStorage.getItem("cartProducts");
  if (!cartProducct) {
    return [];
  }
  cartProducct = JSON.parse(cartProducct);
  return cartProducct;
};
