import barImageSrc from "../assets/images/bar640x426.jpg";
import createItem from "./item-creator.js";

export default function() {
    const body = document.querySelector("body");
    const content = document.querySelector("#content")
    while (content.firstChild) {
     content.removeChild(content.firstChild);
    }
    body.classList = "home-body";
    const homeSection = document.createElement("div");
    homeSection.classList.add("home-section");

    // const firstH2 = document.createElement("h2");
    // firstH2.textContent = "A community you will never forget!";
    
    // homeSection.appendChild(firstH2);
    const firstH2 = createItem("h2",homeSection, "",{textContent: "A community you will never forget!"});
    console.log(firstH2.textContent)

    const homeSec1 = document.createElement("div");
    homeSec1.classList.add("home-sec1");
    homeSection.appendChild(homeSec1);

    const containerBar = document.createElement("div");
    containerBar.classList.add("bar");
    homeSec1.appendChild(containerBar);

    const barImage = document.createElement("img");
    barImage.src = barImageSrc
    barImage.alt = "two people at our bar";
    containerBar.appendChild(barImage);








    content.appendChild(homeSection);
}