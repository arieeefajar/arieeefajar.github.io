const navMenu = document.getElementById("nav-menu"),
  navButton = document.getElementById("nav-button"),
  navButtonClose = document.getElementById("nav-button-close"),
  navLink = document.querySelectorAll(".link_menu");

// menu show
if (navButton) {
  navButton.addEventListener("click", () => {
    navMenu.classList.add("show");
  });
}

// menu close
if (navButtonClose) {
  navButtonClose.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
}

// link menu
const linkAction = () => {
  navMenu.classList.remove("show");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

//link menu active
var menuLinks = document.querySelectorAll(".list_menu .link_menu");

menuLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    menuLinks.forEach(function (link) {
      link.parentNode.classList.remove("active");
    });
    this.parentNode.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  new TypedManager();
});

AOS.init({
  duration: 1000,
  once: true,
  offset: 0,
});

VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
