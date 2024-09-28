const reviewsNextButton = document.querySelector(".review-next");
const reviewsPrevButton = document.querySelector(".review-prev");
const reviewsNextButton2 = document.querySelector(".review-next");
const reviewsPrevButton2 = document.querySelector(".review-prev");
const testimoniesNextButton = document.querySelector(".testimonies-next");
const testimoniesPrevButton = document.querySelector(".testimonies-prev");

const toggleReviewsSwiperNavButtonStyle = () => {
  if (reviewsSwiper.activeIndex === 0) {
    reviewsPrevButton.classList.add("disabled");
  } else {
    reviewsPrevButton.classList.remove("disabled");
  }
  if (reviewsSwiper.activeIndex === 1) {
    reviewsNextButton.classList.add("disabled");
  } else {
    reviewsNextButton.classList.remove("disabled");
  }
};

const toggleReviewsSwiper2NavButtonStyle = () => {
  if (reviewsSwiper2.activeIndex === 0) {
    reviewsPrevButton2.classList.add("disabled");
  } else {
    reviewsPrevButton2.classList.remove("disabled");
  }
  if (reviewsSwiper2.activeIndex === 1) {
    reviewsNextButton2.classList.add("disabled");
  } else {
    reviewsNextButton2.classList.remove("disabled");
  }
};

const toggleTestimoniesSwiperNavButtonStyle = () => {
  if (testimoniesSwiper.activeIndex === 0) {
    testimoniesPrevButton.classList.add("disabled");
  } else {
    testimoniesPrevButton.classList.remove("disabled");
  }
  if (testimoniesSwiper.activeIndex === 1) {
    testimoniesNextButton.classList.add("disabled");
  } else {
    testimoniesNextButton.classList.remove("disabled");
  }
};

const reviewsSwiper = new Swiper(".swiper-review", {
  speed: 500,
  pagination: {
    el: ".swiper-review-pagination",
  },
  slidesPerView: 1,
  breakpoints: {
    740: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const reviewsSwiper2 = new Swiper(".swiper-review-2", {
  speed: 500,
  pagination: {
    el: ".swiper-review-pagination",
  },
  slidesPerView: 1,
  breakpoints: {
    740: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const testimoniesSwiper = new Swiper(".swiper-testimonies", {
  speed: 500,
  pagination: {
    el: ".swiper-testimonies-pagination-2",
  },
  slidesPerView: 1,
  breakpoints: {
    740: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

reviewsNextButton.addEventListener("click", () => reviewsSwiper.slideNext());
reviewsPrevButton.addEventListener("click", () => reviewsSwiper.slidePrev());
reviewsNextButton2.addEventListener("click", () => reviewsSwiper.slideNext());
reviewsPrevButton2.addEventListener("click", () => reviewsSwiper.slidePrev());
testimoniesNextButton.addEventListener("click", () =>
  testimoniesSwiper.slideNext()
);
reviewsPrevButton.addEventListener("click", () =>
  testimoniesSwiper.slidePrev()
);

reviewsSwiper.on("slideChange", toggleReviewsSwiperNavButtonStyle);
reviewsSwiper2.on("slideChange", toggleReviewsSwiper2NavButtonStyle);
testimoniesSwiper.on("slideChange", toggleTestimoniesSwiperNavButtonStyle);


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
