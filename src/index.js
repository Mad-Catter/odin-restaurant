import createHome from "./home-section.js"
import "./style.css";

createHome();
const body = document.querySelector("body");
const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const about = document.querySelector(".about");



home.addEventListener("click", e => {
    createHome();

})
menu.addEventListener("click", e => {
    body.classList = "menu-body";

})
about.addEventListener("click", e => {
    body.classList = "about-body";

})