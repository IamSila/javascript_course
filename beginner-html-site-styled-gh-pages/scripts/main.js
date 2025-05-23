myImage = document.querySelector('img');

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute('src');

    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox-icon2.jpg");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
})



let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUsername() {
    const myName = prompt("Please enter your name");
    if (!myName) {
        setUsername();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozila is cool ${ myName }`;
    }
    
}

if (!localStorage.getItem("name")) {
    setUsername();
} else {
    const storedName = localStorage.getItem("name")
    myHeading.textContent = `Mozilla is cool ${ storedName }`;
}


myButton.addEventListener("click", () => {
    setUsername();
});