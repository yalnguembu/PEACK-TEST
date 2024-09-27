const reviewsSwiper = new Swiper(".review-swiper", {
  loop: true,
  pagination: {
    el: ".swiper-review-pagination",
  },
  navigation: {
    nextEl: ".swiper-review-button-next",
    prevEl: ".swiper-review-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    740: {
      slidesPerView: 2,
      spaceBetween: 20,
      spaceBetween: 100,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
  spaceBetween: 100,
    },
  },
});
const testimoniesSwiper = new Swiper(".testimonies", {
  loop: true,
  pagination: {
    el: ".swiper-testimonies-pagination",
  },
  navigation: {
    nextEl: ".swiper-testimonies-button-next",
    prevEl: ".swiper-testimonies-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    740: {
      slidesPerView: 2,
      spaceBetween: 20,
      spaceBetween: 100,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
  spaceBetween: 100,
    },
  },
});
addEventListener("DOMContentLoaded", () => {
  const titles = document.querySelectorAll(".head");
  const contents = document.querySelectorAll(".faq .body");
  const allMinus = document.querySelectorAll(".minus");
  const allPlus = document.querySelectorAll(".plus");

  titles.forEach((titre, index) => {
    titre.addEventListener("click", () => {
      if (contents[index].classList.contains("visible")) {
        contents[index].classList.remove("visible");
        const minus = titre.querySelector(".minus");
        const plus = titre.querySelector(".plus");
        if (minus) minus.style.display = "none";
        if (plus) plus.style.display = "block";
      } else {
        contents.forEach((contenu) => {
          contenu.classList.remove("visible");
        });
        allMinus.forEach((item, minusIndex) => {
          item.style.display = minusIndex === index ? "block" : "none";
        });
        allPlus.forEach((item) => {
          item.style.display = "block";
        });

        contents[index].classList.add("visible");
        const plus = titre.querySelector(".plus");
        if (plus) plus.style.display = "none";
      }
    });
  });
});
