import createItem from "./item-creator.js";
import handImage from "../assets/images/hands640x420.jpg"

export default function() {
    const body = document.querySelector("body");
    const content = document.querySelector("#content")
    while (content.firstChild) {
     content.removeChild(content.firstChild);
    }
    body.classList = "about-body";
    const aboutSection = document.createElement("div");
    aboutSection.classList.add("about-section");

    createItem("h2", aboutSection, "", {textContent: "Our Story:"});
    
    const sec4 = createItem("div", aboutSection, "sec4");
    createItem("p", sec4, "", {textContent: "Founded in never by John Fakename, King Street been serving our local community for 0 years!  Wow thats not a lot of time at all!"});
    const handContainer = createItem("div", sec4, "hands");
    createItem("img", handContainer, "", {src: handImage, alt: "our cooks making a delicious meal"});
    createItem("p", aboutSection, "", {textContent: "John knew that he owed his hometown of Doesn't Existia a debt for everything they gave him.  And John knew just how to repay that debt!"});
    createItem("p", aboutSection, "", {textContent: "Through good food, strong hearts, and a love for our community, King Street has built something thats more than a restaurant!  It's a family."});


    aboutSection.classList.add("invisible")
    content.appendChild(aboutSection);
    setTimeout(() => {
        aboutSection.classList.add("is-visible");
      }, 10);
}