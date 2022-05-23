// Makes the hamburger responsive
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const links = document.querySelector(".links");

openMenu.addEventListener("click", () => {
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
  links.style.display = "flex";
  links.style.left = "0";
});

function closesMenu() {
  links.style.left = "-100%";
  closeMenu.style.display = "none";
  openMenu.style.display = "block";
}

closeMenu.addEventListener("click", closesMenu);

const aboutMeLink = document.querySelector("#aboutLink");
aboutMeLink.addEventListener("click", closesMenu);

// Changes the nav bar background color when scrolling
const navBar = document.querySelector(".nav-bar");
const sectionOne = document.querySelector(".hero");

const sectionOneOptions = {
  rootMargin: "-400px 0px 0px 0px",
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      navBar.classList.add("nav-scrolled");
    } else {
      navBar.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
