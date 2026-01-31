
import createItem from "./item-creator.js";

export default function() {
    const body = document.querySelector("body");
    const content = document.querySelector("#content")
    while (content.firstChild) {
     content.removeChild(content.firstChild);
    }
    body.classList = "menu-body";
    const menuSection = document.createElement("div");
    menuSection.classList.add("menu-section");

    createItem("h2", menuSection, "", {textContent: "Great food at even better prices!"});
    createItem("h3", menuSection, "", {textContent: "Appetizers"})
    const foodSectionA = createItem("div", menuSection, "food-section");

    function lazy(section, food, price) {
        for (let i = 0; i < food.length; i++) {
            const container = createItem("div", section, "item");
            createItem("p", container, "desc", {textContent: food[i]});
            createItem("p", container, "", {textContent: price[i]});
        }
    }
    const appetizers = ["Fries", "Truffle Fries", "Fried Mozzarella", "House Salad", "Fresh Fruit", "Chips"];
    const appetizersPrice = ["6.99$", "12.99$", "19.99$", "13.99$", "3.99$", "8.99$"];
    lazy(foodSectionA, appetizers, appetizersPrice);
    createItem("h3", menuSection, "", {textContent: "Entrees"});
    const foodSectionB = createItem("div", menuSection, "food-section")
    const entrees = ["Pomodoro Pasta", "Alfredo", "Steak", "Custom Pizza", "Calimari", "One Banana"];
    const entreesPrice = ["24.99$", "29.99$", "45.99$", "S: 20.99$ M 26.99$ L: 45.99$", "18.99", "10$"]
    lazy(foodSectionB, entrees, entreesPrice);


    menuSection.classList.add("invisible")
    content.appendChild(menuSection);
    setTimeout(() => {
        menuSection.classList.add("is-visible");
      }, 10);
}