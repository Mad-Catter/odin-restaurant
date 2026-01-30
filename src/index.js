import "./style.css";
const body = document.querySelector("body");
const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const about = document.querySelector(".about");

// DELETE THESE LATER>  ONLY TESTING
const homeSection = document.querySelector(".home-section")
const menuSection = document.querySelector(".menu-section")
const aboutSection = document.querySelector(".about-section")


home.addEventListener("click", e => {
    body.classList = "home-body";

    // DELETE THESE LATER> ONLY TESTING
    homeSection.classList.remove("none")
    aboutSection.classList.add("none")
    menuSection.classList.add("none")
})
menu.addEventListener("click", e => {
    body.classList = "menu-body";

    // DELETE THESE LATER> ONLY TESTING
    homeSection.classList.add("none")
    aboutSection.classList.add("none")
    menuSection.classList.remove("none")
})
about.addEventListener("click", e => {
    body.classList = "about-body";

    // DELETE THESE LATER> ONLY TESTING
    homeSection.classList.add("none")
    aboutSection.classList.remove("none")
    menuSection.classList.add("none")
})