const dropdownNav = document.getElementById("dropdown-nav");
const background = document.getElementById("background");

document.getElementById("nav__auth__div").addEventListener("mouseenter", (e) => {
  dropdownNav.classList.toggle("nav__auth__dropdown--active");
  background.classList.toggle("background--active");
});

document.getElementById("nav__auth__div").addEventListener("mouseleave", (e) => {
  dropdownNav.classList.toggle("nav__auth__dropdown--active");
  background.classList.toggle("background--active");
});