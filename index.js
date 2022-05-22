const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const links = document.querySelector(".links");

openMenu.addEventListener("click", () => {
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
  links.style.display = "flex";
  links.style.left = "0";
});

closeMenu.addEventListener("click", () => {
  links.style.left = "-100%";
  closeMenu.style.display = "none";
  openMenu.style.display = "block";
});
