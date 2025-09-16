import { cartQuantityIncDec } from "./cartQuantityIncDec";
import { fetchQuantityPriceFromLS } from "./fetchQuantityPriceFromLS";
import { getCartProductFromLS } from "./getCartProductFromLS";
import { showToast } from "./showToast";
import { updateCartProduct } from "./updateCartProduct";

document.querySelector(".shopping_cart span").innerText = `cart ${JSON.parse(localStorage.getItem("cartProducts"))?.length || 0}`;

let locStoData = getCartProductFromLS(); // Assuming this returns an array of cart items
let cartTemplate = document.querySelector(".cartTemplate");
let cartTemplateContainer = document.querySelector(".cartTemplateContainer");

(async function () {
  try {
    const res = await fetch("https://dummyjson.com/products/category/smartphones");
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await res.json();

    // Filter products in the API response based on ids present in localStorage cart data
    const existingCartItems = data.products.filter((originData) => {
      return locStoData.some((currenElm) => originData.id === currenElm.id);
    });

    showCartProducts(existingCartItems);
    updateCartProduct();


  } catch (error) {
    console.error("Error fetching products:", error);
  }
})();

function showCartProducts(products) {
  
  products.forEach((element) => {
    const cartClone = document.importNode(cartTemplate.content, true);

    let {id, images, title, category,description,price,stock } = element;
    const LSactualData = fetchQuantityPriceFromLS(id,price);

    cartClone.querySelector(".cart-item").setAttribute("id", `cartItem${id}`);

    cartClone.querySelector(".item-image img").src = images[1];
    cartClone.querySelector(".category-badge").innerText = category;
    cartClone.querySelector(".item-details h3").innerText = title;
    cartClone.querySelector(".item-details p").innerText = description.slice(0,60) + "...";
    cartClone.querySelector(".quantity-control span").innerText = LSactualData.quantity;
    cartClone.querySelector(".price-tag").innerText ="$ "+LSactualData.price.toFixed(2);

    let quantity = cartClone.querySelector(".quantity-control");

    quantity.addEventListener("click", (event) => {
      cartQuantityIncDec(event, id, stock,price);
    });

    const removeBtn = cartClone.querySelector('.remove-btn');
  
    if (removeBtn) {
      removeBtn.addEventListener('click', () => removeCartitem(id));
    } else {
      console.warn(`⚠️ No able to find Remove btn - item id: ${id}`);
    }
    cartTemplateContainer.append(cartClone);

  });

}

// remove cart functionlity start here
function removeCartitem(id) {
 let cartProducts = getCartProductFromLS();
 let newProducts = cartProducts.filter(element=>element.id !== id);
 console.log(newProducts)

 localStorage.setItem("cartProducts",JSON.stringify(newProducts));

 let removDiv = document.getElementById(`cartItem${id}`);

 if (removDiv) {
   removDiv.remove();
   showToast("delete",id);
   document.querySelector(".shopping_cart span").innerText = `cart ${JSON.parse(localStorage.getItem("cartProducts"))?.length || 0}`;
 }
 
}


// sidebar toggle
document.querySelector(".mobile-menu-btn").addEventListener("click", () => {
  document.querySelector(".side-menu").classList.add("side-menu-active");
});
document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".side-menu").classList.remove("side-menu-active");
});