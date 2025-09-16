import { categoryProductContainer, showProductContainer } from "../homeProductCard";
import "./style.css";

document.querySelector(".mobile-menu-btn").addEventListener("click", () => {
  document.querySelector(".side-menu").classList.add("side-menu-active");
});
document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".side-menu").classList.remove("side-menu-active");
});

$(document).ready(function () {
  $("#heroSlider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    smartSpeed: 800,
    items: 1,
    responsive: {
      0: {
        nav: false,
      },
      768: {
        nav: true,
      },
    },
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
  });
  $(".brands-carousel").owlCarousel({
    loop: true,
    margin: 16,
    nav: false,
    dots: true,
    navText: ["‹", "›"],
    responsive: {
      0: {
        items: 1,
      },
      640: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1024: {
        items: 4,
      },
    },
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 800,
  });
});

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on("scroll", (e) => {});



// call the function to display all the products as a card

async function main() {
  const res = await fetch("https://dummyjson.com/products/category/smartphones?limit=8");
  const data = await res.json();

  const catRes = await fetch("https://dummyjson.com/products/categories");
  const categories = await catRes.json();

  const limitedCategories = categories.slice(0, 7);// limit 7

  showProductContainer(data.products);
  categoryProductContainer(limitedCategories)
}

main();

