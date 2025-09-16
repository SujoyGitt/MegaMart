import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

export const showProductContainer = (products) => {
  const productsContainer = document.querySelector(".cards-container");
  const productsTemplate = document.querySelector(".productTemplate");

  if (!products) {
    return;
  }

  products.forEach((element) => {
    const {
      id,
      title,
      brand,
      category,
      description,
      images,
      price,
      stock,
      discountPercentage,
    } = element;
    const productClone = document.importNode(productsTemplate.content, true) ;

    productClone.querySelector("#productCard").setAttribute("id", `card${id}`);
    productClone.querySelector(".product-name").textContent = title;
    productClone.querySelector(".description").textContent = description;
    productClone.querySelector(".product-img").src = images[0];
    productClone.querySelector(".product-img").alt = title;
    productClone.querySelector(".stock-status span").innerText = stock;
    productClone.querySelector(".discount-badge").innerHTML = `${Math.round(
      discountPercentage
    )}% <span class="discount-text">OFF</span>`;

    productClone.querySelector(".current-price").textContent = `$${price}`;
    const originalPrice = price / (1 - discountPercentage / 100);
    productClone.querySelector( ".original-price").textContent = `$${originalPrice.toFixed(2)}`;

    productClone.querySelector(".savings").textContent = `$${(originalPrice - price).toFixed(2)}`;
    let quantity = productClone.querySelector(".quantity-selector");

    quantity.addEventListener("click", (event) => {
      homeQuantityToggle(event, id, stock);
    });

    productClone.querySelector(".add-to-cart-btn").addEventListener("click", (event) => {  addToCart(event, id, stock)});

    productsContainer.append(productClone);
  });
};

export const categoryProductContainer = (categories) => {
  const categoryContainer = document.querySelector(".categories-grid");
  const categoryTemplate = document.querySelector(".categoryTemplate");

  if (!categories) {
    return;
  }
  const categoryImageMap = {
    Beauty:
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
    Fragrances:
      "https://images.unsplash.com/photo-1621814374283-57cc5d0d39c2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJhZ3JhbmNlfGVufDB8fDB8fHww",
    Furniture:
      "https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    Groceries:
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=400&q=80",
    "Home Decoration":
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
    "Kitchen Accessories":
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D",
    Laptops:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
  };

  categories.forEach((category) => {
    const { name } = category; // ✅ here is name string
    const categoryClone = document.importNode(categoryTemplate.content, true);

    categoryClone.querySelector(".category-name").innerText = name;

    // 🖼️ imgs
    const imgEl = categoryClone.querySelector(".category-icon img");
    if (imgEl) {
      imgEl.src = categoryImageMap[name] || "https://via.placeholder.com/150";
      imgEl.alt = name;
    }

    categoryContainer.append(categoryClone);
  });
};
