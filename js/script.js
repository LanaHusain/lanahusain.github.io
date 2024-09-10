const navList = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const navItem = document.querySelectorAll(".nav-list li");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("active");
  hamburger.classList.toggle("active");
});

navItem.forEach((n) => {
  n.addEventListener("click", () => {
    navList.classList.remove("active");
  });
});
