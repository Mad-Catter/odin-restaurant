export default function() {
    const body = document.querySelector("body");
    const content = document.querySelector("#content")
    content.removeChild(content.firstChild);
    body.classList = "home-body";
    const homeSection = document.createElement("div");
    homeSection.classList.add("home-section");

    const firstH2 = document.createElement("h2");
    firstH2.textContent = "A community you will never forget!";
    homeSection.appendChild(firstH2);

    const homeSec1 = document.createElement("div");
    homeSec1.classList.add("home-sec1");
    homeSection.appendChild(homeSec1);

    const containerBar = 
}