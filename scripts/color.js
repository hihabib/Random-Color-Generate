const body = document.querySelector('body');

/**
 * This function generate random number with the range of 0 to 255
 * @returns A random generated number
 */
function generateRandomNumber() {
    return parseInt(Math.random() * 255)
}

/**
 * Gererate random RGB color
 * @returns Return RGB color
 */
function generateRGB() {
    let rgbColor = "rgb(";
    rgbColor += generateRandomNumber() + ",";
    rgbColor += generateRandomNumber() + ",";
    rgbColor += generateRandomNumber();
    rgbColor += ")";
    return rgbColor;
}

/**
 * The function change colors of various elements
 * @param {HTMLElement} element 
 */
function changeElementsColors(element) {
    body.style.backgroundColor = generateRGB();
    element.style.backgroundColor = generateRGB();
    element.style.color = generateRGB();
    element.style.borderColor = generateRGB();
}

export default changeElementsColors;