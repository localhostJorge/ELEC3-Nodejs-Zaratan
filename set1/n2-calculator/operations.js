
/*
Name: RJ Joshua C. Zaratan
Section: IV-BSIT B
Activity: ELEC 3 - N2
Date: November 27, 2026
*/

// Addition
function add(a, b) {
    return a + b;
}

// Subtraction
function subtract(a, b) {
    return a - b;
}

// Multiplication
function multiply(a, b) {
    return a * b;
}

// Division
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }

    return a / b;
}

// Average
function average(a, b) {
    return (a + b) / 2;
}

// Export all calculator functions
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    average
};
