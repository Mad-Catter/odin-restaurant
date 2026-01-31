export default function (type, parent, classList, attributes) {
    const item = document.createElement(`${type}`);
    if (classList) {
        if (!Array.isArray(classList)) {
            classList = classList.split(" ")
        }
        for (const i of classList) {
            item.classList.add(`${i}`);
        }
    }
    if (typeof(attributes) === "object") {
        const arrayOfKeys = Object.keys(attributes)
        for (let i = 0; i < arrayOfKeys.length; i++) {
            const test = arrayOfKeys[i];
            item[test] = attributes[test];
        }
    }
    parent.appendChild(item);
    return item;
}