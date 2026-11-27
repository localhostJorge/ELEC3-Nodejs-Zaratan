
/*
Name: RJ Joshua C. Zaratan
Section: IV-BSIT B
Activity: ELEC 3 - N2
Date: November 27, 2026
*/

// Import custom modules
const operations = require("./operations");
const formatter = require("./formatter");
const os = require("os");

console.log("Name: RJ Joshua C. Zaratan");
console.log("Section: IV-BSIT B");

// Display basic system information using the built-in os module
console.log("Operating System:", os.platform());
console.log("Architecture:", os.arch());
console.log("----------------------------------");

// Get command-line arguments
const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

// Check if the operation and numbers are provided
if (!operation || process.argv.length < 5 ||
    process.argv[3].trim() === "" ||
    process.argv[4].trim() === "" ||
    !Number.isFinite(num1) || !Number.isFinite(num2)) {
    console.log("Usage: node index.js <operation> <number1> <number2>");
    console.log("Available operations: add, subtract, multiply, divide, average");
    process.exit(1);
}

// Perform the selected operation
try {
    let result;

    switch (operation.toLowerCase()) {
        case "add":
            result = operations.add(num1, num2);
            break;

        case "subtract":
            result = operations.subtract(num1, num2);
            break;

        case "multiply":
            result = operations.multiply(num1, num2);
            break;

        case "divide":
            result = operations.divide(num1, num2);
            break;

        case "average":
            result = operations.average(num1, num2);
            break;

        default:
            throw new Error("Unknown operation. Please use a valid operation.");
    }

    console.log(formatter.formatResult(operation, result));

} catch (error) {
    console.log("Error:", error.message);
}
