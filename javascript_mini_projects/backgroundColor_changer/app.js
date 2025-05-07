const colors = ['red', 'white', 'green', 'blue', 'yellow', 'rgb(100, 133, 152)'];
const btn = document.getElementById('btn');
const colorValue = document.querySelector('.color');

btn.addEventListener('click', function () {
    currentColor = colors[randomColorGenerator()]
    document.body.style.backgroundColor = currentColor;
    colorValue.textContent = currentColor;
})


function randomColorGenerator() {
    return Math.floor(Math.random() * colors.length);
}