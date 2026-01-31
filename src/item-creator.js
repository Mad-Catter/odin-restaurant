export default function (type, parent, classList, attributes) {
    const item = document.createElement(`${type}`);
    if (classList) {
        if (!Array.isArray(classList)) {
            classList = [classList];
        }
        for (const i of classList) {
            item.classList.add(`${i}`);
        }
    }
    if (typeof(attributes) === "object") {
        const arrayOfKeys = Object.keys(attributes)
        console.log(arrayOfKeys);
        console.log(arrayOfKeys[0]);
        console.log(attributes[arrayOfKeys[0]])
        for (let i; i < arrayOfKeys; i++) {
            
            
            item.setAttribute(arrayOfKeys[i], attributes[arrayOfKeys[i]]);
        }
    }
    parent.appendChild(item);
    return item;
}