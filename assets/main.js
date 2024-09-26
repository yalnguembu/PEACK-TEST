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

const titles = document.querySelectorAll(".head");
const contents = document.querySelectorAll(".body");
const icons = document.querySelectorAll(".circle-icon");

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
      contents[index].classList.add("visible");
      const minus = titre.querySelector(".minus");
      const plus = titre.querySelector(".plus");
      if (minus) minus.style.display = "block";
      if (plus) plus.style.display = "none";
    }
  });
});
