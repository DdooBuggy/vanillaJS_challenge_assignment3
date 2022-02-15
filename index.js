const generalForm = document.querySelector(".generalForm");
const generateNumberBox = document.querySelector(".ganerateNumber-box");
const generateNumberInput = generateNumberBox.querySelector("input");
const guessNumberBox = document.querySelector(".guessNumber-box");
const guessNumberInput = guessNumberBox.querySelector("input");
const currentInfo = document.querySelector(".currentInfo");
const lostSign = document.querySelector(".lost");
const winSign = document.querySelector(".win");

const HIDDEN_CLASS = "hidden"

function handleNumber(event) {
    event.preventDefault();
    const generatedNumber = generateNumberInput.value;
    const guessNumber = parseInt(guessNumberInput.value);
    const machineNumber = Math.ceil(Math.random() * generatedNumber);

    currentInfo.classList.remove(HIDDEN_CLASS);
    currentInfo.innerHTML = `You chose: ${guessNumber}, the machine chose: ${machineNumber}`;

    if (guessNumber === machineNumber) {
        winSign.classList.remove(HIDDEN_CLASS);
        lostSign.classList.add(HIDDEN_CLASS);
    } else {
        lostSign.classList.remove(HIDDEN_CLASS);
        winSign.classList.add(HIDDEN_CLASS);
    }
}

generalForm.addEventListener("submit", handleNumber);
