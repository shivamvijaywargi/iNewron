// // import styles bundle
// import "swiper/css/bundle";
// import "./style.css";
// // import Swiper bundle with all modules installed
// import Swiper from "swiper/bundle";

const fullPage = document.getElementById("main");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.querySelector(".close-btn");
const sideMenu = document.getElementById("side-menu");

openMenu.addEventListener("click", () => {
  sideMenu.classList.remove("-right-96");
  sideMenu.classList.add("right-0");

  closeMenu.classList.remove("hidden");
  closeMenu.classList.add("block");
});

closeMenu.addEventListener("click", () => {
  sideMenu.classList.remove("right-0");
  sideMenu.classList.add("-right-96");

  closeMenu.classList.add("hidden");
  closeMenu.classList.remove("block");
});

const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true,
});

sr.reveal(`.hero-text`, { origin: "left", delay: 200 });
sr.reveal(`.hero__img`, { origin: "right", delay: 200 });
sr.reveal(`.hero-sub-text`, { origin: "bottom", delay: 200 });

sr.reveal(`.animate-left-100`, { origin: "left", delay: 100 });
sr.reveal(`.animate-left-200`, { origin: "left", delay: 200 });

sr.reveal(`.animate-right-200`, { origin: "right", delay: 200 });
sr.reveal(`.animate-right-300`, { origin: "right", delay: 300 });

sr.reveal(`.animate-bottom-300`, { delay: 300 });
sr.reveal(`.animate-bottom-400`, { delay: 400 });
sr.reveal(`.animate-bottom-500`, { delay: 500 });
sr.reveal(`.animate-bottom-600`, { delay: 600 });
sr.reveal(`.animate-bottom-700`, { delay: 700 });
sr.reveal(`.animate-bottom-800`, { delay: 800 });

sr.reveal(`.animate-top-200`, { origin: "top", delay: 200 });

// Swiper JS code
const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 10,
  autoPlay: {
    delay: 2500,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
