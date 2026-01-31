import barImageSrc from "../assets/images/bar640x426.jpg";
import googleMapImg from "../assets/images/google-map.png";
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
    createItem("h2", homeSection, "",{textContent: "A community you will never forget!"});
    const homeSec1 = createItem("div", homeSection, "home-sec1");
    const containerBar = createItem("div", homeSec1, "bar");
    createItem("img", containerBar, "", {src: barImageSrc, alt: "two people at our bar"})
    const homeSec2 = createItem("div", homeSec1, "home-sec2");
    createItem("p", homeSec2, "", {textContent: "Whether sitting down at a table or dining at our bar, you will be enraptured by the community we've built here at King Street!"});
    createItem("p", homeSec2, "", {textContent: "With astounding music, incredible food, weekly events, and a community of fellow food lovers, you will never want to leave King Street!"})

    const homeSec3 = createItem("div", homeSection, "home-sec3");
    createItem ("h2", homeSec3, "", {textContent: "Join us at any of our locations!"});
    const locationContainer = createItem("div", homeSec3, "location-container");
    const locationA = createItem("div", locationContainer, "location");
    createItem("img", locationA, "", {src: googleMapImg, alt: "an image of google maps"});
    createItem("p", locationA, "", {textContent: "123 Fake Ave."});
    createItem("p", locationA, "", {textContent: "Phone: 123-456-7890"});

    const locationB = createItem("div", locationContainer, "location");
    createItem("img", locationB, "", {src: googleMapImg, alt: "an image of google maps"});
    createItem("p", locationB, "", {textContent: "123 Fake St."});
    createItem("p", locationB, "", {textContent: "Phone: 098-765-4321"});

    const locationC = createItem("div", locationContainer, "location");
    createItem("img", locationC, "", {src: googleMapImg, alt: "an image of google maps"});
    createItem("p", locationC, "", {textContent: "123 Fake Route"});
    createItem("p", locationC, "", {textContent: "Phone: 800-700-6000"});

    homeSection.classList.add("invisible")
    content.appendChild(homeSection);
    setTimeout(() => {
        homeSection.classList.add("is-visible");
      }, 10);
}