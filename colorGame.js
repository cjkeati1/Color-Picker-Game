let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            numSquares = this.textContent === "Easy" ? 3 : 6;
            reset();
        });
    }
}

function setupSquares() {
    for (let i = 0; i < squares.length; i++) {
        // add click listeners to squares
        squares[i].addEventListener("click", function () {
            // grab color of picked square
            let clickedColor = this.style.backgroundColor;
            // compare color of clicked square
            if (clickedColor === pickedColor) {
                changeColors(clickedColor);
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?"
                h1.style.backgroundColor = clickedColor;

            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset() {
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match the new picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";

    // change colors of squares
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }

    h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener("click", function () {
    reset();
});

colorDisplay.textContent = pickedColor;


function changeColors(color) {
    // loop thru all squares to change their colors
    for (let j = 0; j < squares.length; j++) {
        squares[j].style.backgroundColor = color;
    }

}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // Make array
    let arr = [];


    // add num random colors to the array
    for (let i = 0; i < num; i++) {
        arr[i] = randomColor();
    }

    // return that array
    return arr;
}

function randomColor() {
    // pick a red, green, and blue from 0-255
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";

}


