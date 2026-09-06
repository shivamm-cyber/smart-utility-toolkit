// calculator.js - CLI Calculator using process.argv

const args = process.argv.slice(2);

const operation = args[0];
const num1 = parseFloat(args[1]);
const num2 = parseFloat(args[2]);

if (!operation || isNaN(num1) || isNaN(num2)) {
    console.log("Usage: node calculator.js <operation> <num1> <num2>");
    console.log("Operations: add, subtract, multiply, divide");
    process.exit(1);
}

let result;

switch (operation.toLowerCase()) {
    case "add":
        result = num1 + num2;
        break;
    case "subtract":
        result = num1 - num2;
        break;
    case "multiply":
        result = num1 * num2;
        break;
    case "divide":
        if (num2 === 0) {
            console.log("Error: Cannot divide by zero!");
            process.exit(1);
        }
        result = num1 / num2;
        break;
    default:
        console.log(`Invalid operation: ${operation}`);
        console.log("Valid operations: add, subtract, multiply, divide");
        process.exit(1);
}

console.log(`${num1} ${operation} ${num2} = ${result}`);
