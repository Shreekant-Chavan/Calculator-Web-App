// let input = document.getElementById('inputBox');
// let buttons = document.querySelectorAll('.buttons');

// let string = "";
// let arr = Array.from(buttons);
// arr.forEach(button => {
//     button.addEventListener("click", (e) => {
//         if (e.target.innerHTML == "=" ) {
//             string = eval(string);
//             input.value = string;
//         } else if (e.target.innerHTML == "AC") {
//             string = "";
//             input.value = string;
//         } else if (e.target.innerHTML == "DEL") {
//             string = string.substring(0, string.length-1);
//             input.value = string;
//         } else {
//             string += e.target.innerHTML;
//             input.value = string;
//         }
//     })
// })



const inputBox = document.getElementById("input-box");
const clearBtn = document.getElementById("clear-btn");
const deleteBtn = document.getElementById("delete-btn");
const divideBtn = document.getElementById("divide-btn");
const multiBtn = document.getElementById("multi-btn");
const subBtn = document.getElementById("sub-btn");
const addBtn = document.getElementById("add-btn");
const decimalBtn = document.getElementById("decimal-btn");
const equalBtn = document.getElementById("equal-btn");
const numbButtons = document.querySelectorAll(".numb-buttons");

let input = '';
let operation = '';
let prevOperand = 0;

const appendNumber = (number) => {
    if (number === "." && input.includes("."))
    return;
    input += number;
    updateDisplay();
}


const updateDisplay = () => {
    inputBox.value = input;
}

const selectOperator = (operatorValue) => {
    if (input === "") 
    return;

    if (operation != "" && prevOperand != "") {
        calculateResult();
    }

    operation = operatorValue;
    prevOperand = input;
    input = "";
    updateDisplay();
}


numbButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText);
    })
})

decimalBtn.addEventListener("click", () => appendNumber("."));
addBtn.addEventListener("click", () => appendNumber("+"));
subBtn.addEventListener("click" , () => appendNumber("-"));
multiBtn.addEventListener("click", () => appendNumber("*"));
divideBtn.addEventListener("click", () => appendNumber("/"));