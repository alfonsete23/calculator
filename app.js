// CALCULATOR FUNCTIONS
function add(x, y) {
    return x + y;
}

function substract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function remainder(x, y) {
    return x % y;
}

function power(x, y) {
    return x ** y;
}

// Object of functions to quickly return the correct function
const operations = {
    "+": add,
    "-": substract,
    "*": multiply,
    "/": divide,
    "%": remainder,
    "^": power,
}

// Call correct function depending on the operator used
function operate(first, second, op) {
    if (isNaN(second)) second = first;
    return operations[op](first, second);
}

// Variables for operand type and numeric inputs
let operand, x, y;

// Display
const display = document.querySelector("#display")

// Numeric buttons
const nums = document.querySelectorAll(".num");
nums.forEach((num) => {
    num.addEventListener("click", (e) => {
        // Delete initial 0 and operation sign when number is introduced
        if (display.textContent === "0" || display.textContent === operand) {
            display.textContent = e.target.value;
        }
        // Adding digits to the current number
        else {
            display.textContent += e.target.value;
        }
    })
});

// Operation buttons
const operation = document.querySelectorAll(".op");
operation.forEach((op) => {
    op.addEventListener("click", (e) => {
        // Save first value in x
        x = parseFloat(display.textContent)
        // Set the operation to the value of the button pressed
        operand = e.target.value;
        display.textContent = operand;
    })
});

// Clear display button
const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    display.textContent = "0";
    x = 0; 
    y = undefined; 
    op = undefined;
});

// Equals button
const equals = document.querySelector("#equal");
equals.addEventListener("click", () => {
    // No operation to perform
    if (operand === undefined) return;
    y = parseFloat(display.textContent);
    x = operate(x, y, operand);
    display.textContent = x.toString();
    operand = undefined;

})

let a = operate(3, 3, "^");
