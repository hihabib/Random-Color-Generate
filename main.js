import changeElementsColors from "./color.js"

const btn = document.querySelector('.changeColor');

// Change color after every click
btn.addEventListener('click', function () {
    changeElementsColors(btn)
})

// Generate color on page load
changeElementsColors(btn);






