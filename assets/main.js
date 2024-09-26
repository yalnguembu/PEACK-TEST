const swiper = new Swiper(".reviews-1", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".first-button-next",
    prevEl: ".first-button-prev",
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
