const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('btn');
const colorValue = document.querySelector('.color');

function randomColorGenerator() {
    return Math.floor(Math.random() * colors.length);
}


function hexColorGenerator() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += colors[randomColorGenerator()];
    }
    return hexColor;
}


btn.addEventListener('click', function () {
    currentColor = hexColorGenerator();
    document.body.style.backgroundColor = hexColorGenerator();
    colorValue.textContent = currentColor;
});





